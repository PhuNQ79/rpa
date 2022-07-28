import { AiOutlineArrowRight } from "react-icons/ai";
const Task = () => {
    return (
        <div className="border m-1 position-relative">
            <div className="">
                Task
            </div>
            <div className="d-flex justify-content-end">
                <AiOutlineArrowRight />
            </div>
        </div>
    );
}

export default Task;