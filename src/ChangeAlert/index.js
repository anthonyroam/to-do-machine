import { Modal } from "../Modal";
import { useStorageListener } from "./useStorageListener";
import { PrimaryButton } from "../Button/PrimaryButton"

function ChangeAlert ({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize);

    if (show) {
        return (
            <Modal>
                <div className="h-36 w-3/5 p-4 flex flex-col items-center justify-center gap-2 rounded-md bg-Very-Dark-Desaturated-Blue">
                    <p className="text-Light-Grayish-Blue text-center">Changes were made, please refresh</p>
                    <PrimaryButton className="btn btn-primary" onClick={toggleShow} name="Refresh" />
                </div>
            </Modal>
        )
    } else  return null

}

export { ChangeAlert };