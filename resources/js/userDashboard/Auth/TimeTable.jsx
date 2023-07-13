import React, { useState } from 'react';
import './Register.css';

export default function TimeTable({ setScheduleData }) {
    const [schedule, setSchedule] = useState([
        { day: "Monday", from_time: "", till_time: "" },
        { day: "Tuesday", from_time: "", till_time: "" },
        { day: "Wednesday", from_time: "", till_time: "" },
        { day: "Thursday", from_time: "", till_time: "" },
        { day: "Friday", from_time: "", till_time: "" },
        { day: "Saturday", from_time: "", till_time: "" },
        { day: "Sunday", from_time: "", till_time: "" },
    ]);
    const time = [
        { id: "null", t: "Select" },
        { id: "7", t: "7:00" },
        { id: "8", t: "8:00" },
        { id: "9", t: "9:00" },
        { id: "10", t: "10:00" },
        { id: "11", t: "11:00" },
        { id: "12", t: "12:00" },
        { id: "13", t: "13:00" },
        { id: "14", t: "14:00" },
        { id: "15", t: "15:00" },
        { id: "16", t: "16:00" },
        { id: "17", t: "17:00" },
        { id: "18", t: "18:00" },
        { id: "19", t: "19:00" },
    ];
    
    const handleSelectedTime = (e, id) => {
        const { name, value } = e.target;
        const list = [...schedule];
        list[id][name] = value;
        setScheduleData(list);
    };
    
    return (
        <>
            <p>Select your availability</p>
                <table>
                    <thead>
                        <tr>
                        <th>Day</th>
                        <th>From time</th>
                        <th>Till time</th>

                        </tr>
                    </thead>

                    <tbody>
                        {schedule.map((sch, id) => (
                            <tr key={id}>
                            <td>{sch.day}</td>
                            <td>
                                <select
                                name="from_time"
                                onChange={(e) => handleSelectedTime(e, id)}
                                value={sch.from_time}
                                >
                                {time.map((t) => (
                                    <option key={t.id} value={t.t}>
                                    {t.t}
                                    </option>
                                ))}
                                </select>
                                </td>
                            <td>
                                <select
                                name="till_time"
                                onChange={(e) => handleSelectedTime(e, id)}
                                value={sch.till_time}
                                >
                                {time.map((t) => (
                                    <option key={t.id} value={t.t}>
                                    {t.t}
                                    </option>
                                ))}
                                </select>
                            </td>
                            </tr>
                        ))}
                    </tbody>
      </table>
    
    </>
  );
}
                   