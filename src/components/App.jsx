import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import characterData from "../details";

function App() {
    return (
        <div className="main">
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", margin: "0 20px" }}>
                <p style={{ fontSize: "48px", fontWeight: "bold", textAlign: "right" }}>Current status of Attack on Titan Characters</p>
                <Avatar img="https://i.pinimg.com/originals/cb/65/82/cb65826a6472c3edbddc481e9de9c734.jpg" />
            </div>
            <div style={{ display: "flex", gap: "20px", flexFlow: "row wrap" }}>
                {characterData.map(data => (
                    <Card {...data} />
                ))}
            </div>
        </div>
    );
}

export default App;