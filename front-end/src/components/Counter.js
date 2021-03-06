import React, { useState } from 'react';

const Counter = () => {
    const [ count, setCount ] = useState(0);
    const increse = () => {
        setCount(count + 1);
    }
    const reset = () => {
        setCount(0);
    }
    const decrese = () => {
        setCount(count - 1);
    }
    return (
        <div>
            Hello! {count}
            <button onClick={increse}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrese}>-1</button>
        </div>
    );
}

export default Counter;