import React from "react";
import Avatar from "./Avatar";

function Card(props) {
    return (
        <div className="card">
            <div>
                <h3>{props.name}</h3>
                <p><strong>Status: </strong>{props.content}</p>
            </div>
            <Avatar img={props.img} />
        </div>
    );
}

export default Card;