import React from "react";
import Apptitle from "../Components/Apptitle";
import Button from "../Components/button";
import { useHistory, useNavigate } from "react-router-dom";
import "./Login.css"

export default class homepage extends React.Component{
    render() {
        return(
            <div class="Login">
                <Apptitle></Apptitle>
                <Button name="Login" ></Button>
                <Button name="Register"></Button>
                
            </div>
        );
    }

}