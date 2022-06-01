import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

function TodoItem(props) {   
    return (
    <li className='w-full h-auto flex justify-between items-center p-4 border-b-[1px] border-Very-Dark-Grayish-Blue'>
      <div className='flex gap-4'>
        <CompleteIcon 
          complete={props.completed}
          onComplete={props.onComplete}
        />
        <p 
          className={`text-Light-Grayish-Blue ${props.completed && "line-through text-Light-Grayish-Blue-hover"}`}
        >
          {props.text}
        </p>
      </div>
      <DeleteIcon 
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };