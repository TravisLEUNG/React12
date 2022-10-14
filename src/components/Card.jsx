import React from "react";
import LocationTap from "../assets/locationTap.png";

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card-image"/>
            <div>
                <div>
                    <img src={LocationTap} className="card-locationTap" />
                    <span className="card-location">{props.location}</span>
                    <a className="card-addressLink" href={props.addressLink}>View on Google Maps</a>
                </div>
                <h2 className="card-title">{props.title}</h2>
                <div className="card-date bold">{props.date}</div>
                <p className="card-descriptions">{props.descriptions}</p>
            </div>
        </div>
    );
}