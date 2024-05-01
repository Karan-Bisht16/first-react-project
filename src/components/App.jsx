import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import Footer from "./Footer";
import characterData from "../details";

function App() {
    return (
        <div>
            <div className="main">
                <div className="heading">
                    <p>Current status of Attack on Titan Characters</p>
                    <Avatar img="https://i.pinimg.com/originals/cb/65/82/cb65826a6472c3edbddc481e9de9c734.jpg" />
                </div>
                <div style={{ display: "flex", gap: "20px", flexFlow: "row wrap" }}>
                    {characterData.map(data => (
                        <Card {...data} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;