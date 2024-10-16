import React from "react"
import style from "./homecrud.module.css"
import { Link } from "react-router-dom"

const HomeCrud =()=>{
    return(
        <section id={style.nav}>
            <Link to = "/CreateUser" > CREATE-USER </Link>
            <Link to = "/User" > USERS </Link>
        </section>
    )
}

export default HomeCrud