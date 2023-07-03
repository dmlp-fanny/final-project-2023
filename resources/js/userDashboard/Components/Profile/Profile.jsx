import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TranslatorSection from "../_Translators/TranslationSection/TranslatorSection";
import Context from "../../Context";

export default function Profile() {
    const { context: { user }} = useContext(Context)

    return (
        <>
            {user ? (
                <div className="profile_container">
                    <h2>Your Profile</h2>
                    <h3>Personal Information:</h3>
                    <div className="profile_container--section profile_container--section-bold">
                        First Name:<span>{user.first_name}</span> <br />
                        Last Name:<span>{user.last_name}</span> <br />
                        Username: <span>{user.username}</span> <br />
                        Email: <span>{user.email}</span> <br />
                        Location:{" "}
                        <span>{user.location + ", " + user.country}</span>{" "}
                        <br />
                        Phone Number: <span>{user.phone_number}</span> <br />
                    </div>
                    {user.translator ? (
                        <TranslatorSection translator={user.translator} />
                    ) : (
                        ""
                    )}
                </div>
            ) : (
                ""
            )}
        </>
    )
}
