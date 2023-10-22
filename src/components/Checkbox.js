import React, { useState } from 'react';
import './Checkbox.css';

function Checkbox({isChecked, onChange}){
    return (
        <label class="custom-checkbox">
            <input type="checkbox" 
            class="hidden-checkbox" 
            checked={isChecked} 
            onChange={onChange} 
            />
            <span class="checkmark">
            <span class="checkmark-icon">&#x2714;</span> 
            </span>
        </label>
    );
}

export default Checkbox;