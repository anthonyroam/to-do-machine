import { TodoIcon } from "./index";

function CompleteIcon ({ complete, onComplete}) {
    return (
        <TodoIcon 
            type="check"
            color={complete? "green": "gray"}
            onClick={onComplete}
        />
    );
}

export { CompleteIcon };