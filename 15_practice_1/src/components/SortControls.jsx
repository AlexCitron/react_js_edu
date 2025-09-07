import {useMyAppContext} from "../AppContext.jsx";
import handleSortButtonClick from "../handlers/handleSortButtonsClick.js";

export default function SortControls() {
    const {sortType, sortOrder, setTasks, setSortType, setSortOrder, tasks} = useMyAppContext()

    return (
        <div className="sort-controls">
            <button
                className={`sort-button ${sortType === 'date' ? "active" : ""}`}
                onClick={() => handleSortButtonClick("date", sortType, sortOrder, setTasks, setSortType, setSortOrder, tasks)}>
                By date {sortType === 'date' && sortOrder === 'asc' ? "\u2191" : "\u2193"}</button>
            <button className={`sort-button ${sortType === 'priority' ? "active" : ""}`} onClick={() => handleSortButtonClick('priority', sortType, sortOrder, setTasks, setSortType, setSortOrder, tasks)}>By Priority {sortType === 'priority' && sortOrder === 'asc' ? "\u2191" : "\u2193"}</button>
        </div>
    )
}