import React from "react";

const Tableau = ({ name, picture}) => (
    <li>
        {name} <img src={picture} alt={name}/>
    </li>

);

export default Tableau ;
