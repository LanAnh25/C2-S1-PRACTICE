
function Time() {
    let date = new Date().toLocaleString()
    let [time, day] = date.split('');
    return(
        <h2>
            {date} {time}
        </h2>
    );
}

export default Time;