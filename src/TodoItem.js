import React, { useState } from "react";

function TodoItem({ index, todo, onDelete, onChange }) {
  const [isEdit, setIsEdit] = useState(false);
  const [changeValue, setChangeValue] = useState(todo);

  const handleSave = () => {
    setIsEdit(!isEdit);
    onChange(index, changeValue);
  };

  const handleDExit = () => {
    setIsEdit(!isEdit);
    setChangeValue(todo);
  };

  return (
    <>
      {isEdit ? (
        <input
          value={changeValue}
          onChange={(e) => setChangeValue(e.target.value)}
        />
      ) : (
        <span>{todo}</span>
      )}
      <button onClick={() => onDelete(index)}>x</button>
      {isEdit ? (
        <>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleDExit}>Exit</button>
        </>
      ) : (
        <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      )}
    </>
  );
}

export default TodoItem;
