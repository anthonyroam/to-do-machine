import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage"

function useTodos () {
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
        sincronize,
        setFilterTodos,
        filterTodos,
      } = useLocalStorage("TODOS_V1", []);
    
      const [searchValue, setSearchValue] = React.useState("");
      const [openModal, setOpenModal] = React.useState(false);
      
      const completedTodos = todos.filter(todo => todo.completed).length;
      const totalTodos = todos.length;

      let searchedTodos = [];
      let filteredTodos = todos;
      
      const showAll = () => {
        const newTodos = [...todos];
        saveTodos(newTodos); 
        filteredTodos = todos;
        return setFilterTodos(filteredTodos)
      }

      const showActive = () => {
        const newTodos = [...todos];
        saveTodos(newTodos);
        filteredTodos = todos.filter(todo => !todo.completed)
        return setFilterTodos(filteredTodos);
      }

      const showCompleted = () => {
        const newTodos = [...todos];
        saveTodos(newTodos);
        filteredTodos = todos.filter(todo => todo.completed)
        return  setFilterTodos(filteredTodos)
      }

      if (searchValue.length <= 0) searchedTodos = filterTodos
      else {
        searchedTodos = filterTodos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText); 
        })
      }
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        setFilterTodos([...filterTodos]);
        return saveTodos(newTodos);
      };
    
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text: text,
          completed: false,
        });
        setFilterTodos(newTodos);
        return saveTodos(newTodos);
      };

      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        const filterTodoIndex = filterTodos.findIndex(todo => todo.text === text);
        const newFilteredTodos = [...filterTodos];
        newFilteredTodos.splice(filterTodoIndex, 1);
        setFilterTodos(newFilteredTodos)
        return saveTodos(newTodos);
      };

    return ({
        error,
        loading,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo, 
        openModal,
        setOpenModal,
        addTodo,
        sincronize,
        showAll,
        showCompleted,
        showActive,
        filterTodos,
    });
}

export { useTodos };