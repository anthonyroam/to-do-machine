import { Button } from "./index";

function SecondaryButton (props) {
    return (
        <Button className={"text-fuchsia-600 border-fuchsia-600 border"} {...props} />
    );
};

export { SecondaryButton };