import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random()*1000}
        ]);
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }


    return (
        <>
            <form>
                <input
                    type="text"
                    className="todo-input"
                    value={inputText}
                    onChange={inputTextHandler}
                />
                <button
                    type="submit"
                    className="todo-button"
                    onClick={submitTodoHandler}
                >
                    <i className="fas fa-plus-square" />
                </button>
             
            </form>
        </>
    )
};

export default Form;