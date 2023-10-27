import React from 'react';
import "./NewTaskButton.css";

function NewTaskButton() {
    return(
        <div class="newtaskbutton-container">
            <button class="newtaskbutton" title="タスクの新規作成を行います">＋ 新規作成</button>
        </div>
    );
}

export default NewTaskButton;