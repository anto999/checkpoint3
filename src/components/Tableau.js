import React from "react";
import {Button} from 'reactstrap'


const Tableau = ({ name, picture, status}) => (
   
   <container>
   

   <Button  style={{
                  width: "160px",
                  height: "44px",
                  fontSize: "16px",
                  borderRadius: "32px",
                 // marginRight: "59px",
                  //marginLeft: "59px ",
                  marginBottom: "30px",
                  padding: "0px"
                }} >Boom</Button>{' '}
        {name } <img src={picture} alt={name}/> is {status}<br/>

    
            

    </container>
);

export default Tableau ;
