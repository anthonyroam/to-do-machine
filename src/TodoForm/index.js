import React from "react";
import { PrimaryButton } from "../Button/PrimaryButton";
import { SecondaryButton } from "../Button/SecondaryButton";

function TodoForm({ addTodo, setOpenModal }) {
    const [newTodoValue, setNewTodoValue] = React.useState("");    
    
    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    
    return (
        <form 
            className="flex flex-col items-center justify-center gap-4 h-auto w-4/5 p-8 rounded-md bg-Very-Dark-Desaturated-Blue "
            onSubmit={onSubmit}
        >
            <label className="font-semibold text-lg text-Light-Grayish-Blue">Escribe tu nuevo To Do</label>
            <textarea 
                className="p-2 rounded-md"
                onChange={onChange}
                value={newTodoValue}
                placeholder="Escribe un nuevo Todo..."
            />
            <div className="flex justify-center gap-4 w-full">
                <SecondaryButton
                    type="button"
                    onClick={onCancel}
                    name="Cancel"
                />
                <PrimaryButton 
                    type="submit"
                    name="Add"
                />
            </div>
        </form>
    );
}

export { TodoForm };