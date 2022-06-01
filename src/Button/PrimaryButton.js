import { Button } from "./index";

function PrimaryButton (props) {
    return (
        <Button {...props} className="bg-fuchsia-600 text-Light-Grayish-Blue" />
    );
}

export { PrimaryButton };