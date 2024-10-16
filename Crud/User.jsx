import React, { useEffect, useState } from "react"
import style from "./homecrud.module.css"
import axios from "axios"
import { Link } from "react-router-dom"

const User=()=>{

    let[cont,setCont]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/employees")
        .then((response)=>{
            console.log("GOT THE DATA");
            setCont(response.data)
        })
        .catch(()=>{
            console.log("SOMETHING WENT WRONG");
        })
    },[])

    let deleteData=(a)=>{
        axios.delete(`http://localhost:3000/employees/${a}`)
        window.location.assign("/User")
    }
    return(
        <div className={style.Homepage}>
            {cont.map((x)=>{
            return(
                <div className={style.card}>
                    <table>
                        <tr>
                            <th colSpan="2">Employee{x.id}</th>
                        </tr>
                        <tr>
                            <td>NAME</td>
                            <td>:{x.name}</td>
                        </tr>
                        <tr>
                            <td>SALARY</td>
                            <td>:{x.salary}</td>
                        </tr>
                        <tr>
                            <td>COMPANY</td>
                            <td>:{x.company}</td>
                        </tr>

                        <tr>
                            <td><Link to={`/edit/${x.id}`}> Edit </Link></td>
                            <td><button onClick={()=>{deleteData(x.id)}}>Delete</button></td>
                        </tr>
                    </table>
                </div>
            )
        })}
        </div>
    )
}

export default User