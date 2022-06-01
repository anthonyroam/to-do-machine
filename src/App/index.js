import React from "react";
import { TodoHeader } from "../TodoHeader";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoTittle } from "../TodoTittle";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { ChangeAlert } from "../ChangeAlert";
import { TodoError } from "../TodoError";
import { TodoLoading } from "../TodoLoading";
import { EmptyTodos } from "../EmptyTodos";
import { EmptySearchResult } from "../EmptySearchResult";
import { TodoContainer } from "../TodoContainer";
import { TodoFilter } from "../TodoFilter";
import { TodoFind } from "../TodoFind";

function App() {
  const { 
    error, 
    loading, 
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos, 
    totalTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    sincronize,
    showAll,
    showActive,
    showCompleted,
    filterTodos,
    filteredTodos,
  } = useTodos(); 
  
  return (
    <TodoContainer>
        <TodoHeader loading={loading}>
        <TodoTittle/>
        <TodoCounter
          completedTodos={completedTodos}
          totalTodos={totalTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        /> 
      </TodoHeader>
      <TodoList
        filterTodos={filterTodos}
        filteredTodos={filteredTodos}
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onError={() => <TodoError error={error} />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() =>  <EmptyTodos />}
        onEmptySearchResult={() => <EmptySearchResult searchValue={searchValue} />}
        render ={todo => <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />}
      />

      <TodoFilter>
        <TodoFind name="All" onClick={showAll} />
        <TodoFind name="Active" onClick={showActive} />
        <TodoFind name="Completed" onClick={showCompleted} />
      </TodoFilter>

      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}    
      
      <CreateTodoButton 
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <ChangeAlert 
        sincronize={sincronize}
      />
    </TodoContainer>
  );  
}

export { App };