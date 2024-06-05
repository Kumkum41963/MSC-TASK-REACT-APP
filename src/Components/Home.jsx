import React, { useState } from 'react'

const Home = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        alert("The button has been clicked!");
    }

    return (
        <>
            {/* JUMBOTRON */}
            <div className="jumbotron">
                <div className="jumbotron-container">
                    <h1 className="jumbotron-heading">WELCOME</h1>
                    <p className="jumbotron-content">This is my first react app.Hopefully it matches the required criteria</p>
                    <button className="jumbotron-btn" onClick={handleClick}>Click Me!</button>
                </div>
            </div>

            {/* COUNTER */}
            <div className="counter">
                <div className="counter-container">
                    <p className="counter-count">{count}</p>
                    <button className="counter-btn" onClick={() => setCount(count + 1)}>Increment</button>
                    <button className="counter-btn" onClick={() => setCount(0)}>Reset</button>
                    <button className="counter-btn" onClick={() => setCount(count - 1)}>Decrement</button>
                </div>
            </div>
        </>
    )
}

export default Home