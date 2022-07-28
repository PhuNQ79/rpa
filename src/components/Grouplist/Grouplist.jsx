import Task from "../Task/Task";
import "./Grouplist.css"
const Grouplist = ({ item, index, onDragStart, onDragOver, onDragEnd }) => {
    return (
        <ul style={{listStyle:"none", margin:0,padding:0}}>
            <li key={index} onDragOver={() => onDragOver(index)}>
                <div className="border w-100 mb-3 p-3 group-list" draggable="true" onDragStart={e => onDragStart(e, index)} onDragEnd={onDragEnd}>
                    {item}
                    <Task />
                    <Task />
                    <Task />
                </div>
            </li>
        </ul>
    );
}

export default Grouplist;