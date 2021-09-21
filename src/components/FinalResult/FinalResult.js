import React, { useState,useEffect } from 'react'
import axios from "axios";
import {Link} from 'react-router-dom';

export const FinalResult =(props)=> {
    return(
        <div>
    <p>The selected event date is:</p>
    <h1>{props.match.params.selectedDate}</h1>
        </div>
)
}