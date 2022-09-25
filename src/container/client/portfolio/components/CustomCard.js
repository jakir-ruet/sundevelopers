import React from "react";
import './Portfolio.css';

function CustomCard(props){
    return(
        <div className="col-lg-4 mb-3">
            <div className="box wow fadeInUp">
                <h4 className="title" style={{ marginLeft: 0 }}>{props.title}</h4><hr />
                <p style={{ marginLeft: 0 }}><i className="bi bi-check-square">&nbsp;</i> {props.titleOne}</p>
                <p style={{ marginLeft: 0 }}><i className="bi bi-check-square">&nbsp;</i> {props.titleTwo}</p>
                <p style={{ marginLeft: 0 }}><i className="bi bi-check-square">&nbsp;</i> {props.titleThree}</p>
            </div>
        </div>
    )
}

export default CustomCard;