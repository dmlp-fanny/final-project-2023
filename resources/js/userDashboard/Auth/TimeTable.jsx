import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import './Register.css';
export default function TimeTable({ setScheduleData }) {
    const [schedule, setSchedule] = useState([
        { day: "Sun", starttime: "", endtime: "" },
        { day: "Mon", starttime: "", endtime: "" },
        { day: "Tue", starttime: "", endtime: "" },
        { day: "Wed", starttime: "", endtime: "" },
        { day: "Thu", starttime: "", endtime: "" },
        { day: "Fri", starttime: "", endtime: "" },
        { day: "Sat", starttime: "", endtime: "" },
    ]);
    const time = [
        { id: "null", t: "Select" },
        { id: "7", t: "7:00am" },
        { id: "8", t: "8:00am" },
        { id: "9", t: "9:00am" },
        { id: "10", t: "10:00am" },
        { id: "11", t: "11:00am" },
        { id: "12", t: "12:00pm" },
        { id: "13", t: "13:00pm" },
        { id: "14", t: "14:00pm" },
        { id: "15", t: "15:00pm" },
        { id: "16", t: "16:00pm" },
        { id: "17", t: "17:00pm" },
        { id: "18", t: "18:00pm" },
        { id: "19", t: "19:00pm" },
    ];
    
    const handleSelectedTime = (e, id) => {
        const { name, value } = e.target;
        if (value === "Select") return;
        const list = [...schedule];
        list[id][name] = value;
        setSchedule(list);
    };
    
    const handleSubmit = () => {
        setScheduleData(schedule);
    };
    return (
        <>
            <p>Select your availability</p>
                <table>
                    <thead>
                        <tr>
                        <th>Day</th>
                        <th>Start time</th>
                        <th>End time</th>

                        </tr>
                    </thead>

                    <tbody>
                        {schedule.map((sch, id) => (
                            <tr key={id}>
                            <td>{sch.day}</td>
                            <td>
                                <select
                                name="starttime"
                                onChange={(e) => handleSelectedTime(e, id)}
                                value={sch.starttime}
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
                                name="endtime"
                                onChange={(e) => handleSelectedTime(e, id)}
                                value={sch.endtime}
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
                   