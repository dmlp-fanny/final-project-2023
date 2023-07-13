export default function CurrentDate () {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        <div className="dashboard-date">Today's Date <br />{date}</div>
    )
}