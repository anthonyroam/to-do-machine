import React from 'react';
import { TiPlus } from "react-icons/ti";

function CreateTodoButton({ openModal, setOpenModal }) {
    const onClickButton = () => {
        setOpenModal(!openModal);
    };
    
    return (
        <button 
            className='absolute bottom-8 right-8 h-12 w-12 rounded-full bg-fuchsia-600 text-4xl text-Light-Grayish-Blue shadow-lg transition-all hover:scale-110' 
            onClick={onClickButton}
        >
            <TiPlus className='mx-auto' color="white"/>
        </button>
    );
};

export { CreateTodoButton };