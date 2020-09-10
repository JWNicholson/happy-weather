import React from 'react';


const Clock = () => {
    const time = new Date();
    
    let d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const year =  new Date().getFullYear();

    return (
        <>
        <div className="date-ctnr">
            <h4>Today is {days[d.getDay()]}, {months[d.getMonth()]} {year}</h4>
        </div>

        <div className="clock-ctnr">
            <h4 className="clock" data-cy='clockGreeting'>Time is {time.toLocaleTimeString()}</h4>
        </div>
        </>
    );
}

export default Clock;