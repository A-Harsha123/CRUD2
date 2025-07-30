import React, { useState } from 'react';

function AddItemForm({ addItem }) {
    const [itemName, setItemName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (itemName.trim()) {
            addItem(itemName);
            setItemName('');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add new item"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
            />
        </form>
    );
}
export default AddItemForm;