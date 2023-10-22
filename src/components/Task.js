import React, {useState} from 'react';
import './Task.css';
import Checkbox from './Checkbox';
import { FaTrashAlt } from 'react-icons/fa';

const taskEx = {
    id: 1,
    title: '醤油かう',
    deadline: '2021-05-01',
    done: false,
}

function Task() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

  return (
    <div id="taskComponent" class="task">
        <div class="task-urgency"></div>
        <div class="taskcontents">
            <div class="task-left">
                <Checkbox isChecked={isChecked} onChange={handleCheckboxChange} />
                <p>{taskEx.title}</p>
            </div>
            <div class="task-center">
                <p>期日：{taskEx.deadline}</p>
            </div>
            <div class="task-right">
                <button class="detail-button" title="これは説明文です">詳細</button> 
                <button class="delete-button" title="これは説明文です"><FaTrashAlt /></button>
            </div>
            
            
        </div>
    </div>
    
  );
    
}


export default Task;