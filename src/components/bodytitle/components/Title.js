import React from "react";
import BodyTitles from './Items';

function Title (){
    let items = [];
    items = BodyTitles.map((item, index) => <Title key = {index}/>);
    return(
        <div className="row body-title">
            <h2>Contacts</h2>
        </div>
    )
}

export default Title;