import React from "react";
import {Button} from 'reactstrap'


const Tableau = ({ name, picture, status}) => (
   
   <container>
   <li>
        {name } <img src={picture} alt={name}/> is {status}

    </li>
    <li><Button  style={{
                  width: "170px",
                  height: "44px",
                  fontSize: "16px",
                  borderRadius: "2px",
                  marginRight: "59px",
                  
                  marginLeft: "59px ",
                  marginBottom: "30px",
                  padding: "0px"
                }} /></li>
    </container>
);

export default Tableau ;
