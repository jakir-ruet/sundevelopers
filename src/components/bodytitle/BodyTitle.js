import React, {Component} from "react";
import BodyTitles from './components/Items';

function BodyTitle (){
    let items = [];
    items = BodyTitles.map((item, index) => <BodyTitle key = {index}/>);
    return(
        <div className="row body-title">
            <h2>Contacts</h2>
        </div>
    )
}

export default BodyTitle;