import Grouplist from "../Grouplist/Grouplist";
import "./Tasklist.css"
import { useState } from "react";
const Tasklist = () => {
    const [list, setList] = useState(["🍰 Cake", "🍩 Donut", "🍎 Apple", "🍕 Pizza"]);
    const [draggedItem, setDraggedItem] = useState();
    const [draggedOverItem, setDraggedOverItem] = useState();

    const onDragStart = (e, index) => {
        setDraggedItem(list[index]);
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.parentNode);
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    };

    const onDragOver = index => {
        setDraggedOverItem(list[index]);
        if (draggedItem === draggedOverItem) {
            return;
        }
        let items = list.filter(item => item !== draggedItem);
        items.splice(index, 0, draggedItem);
        setList(items);
    };

    const onDragEnd = () => {
        const draggedIdx = null;
    };

    return (
        <div className="col-3 border text-center p-3 task-list" >
            Task list
            {list.map((item, index) => (
                <Grouplist key={index} index={index} item={item} onDragStart={onDragStart} onDragOver={onDragOver} onDragEnd={onDragEnd}/>
            ))}
        </div>
    );
}

export default Tasklist;