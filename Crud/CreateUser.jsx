import React, { useState } from "react"
import axios from "axios"
import style from "./homecrud.module.css"

const CreateUser=()=>{

    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
 
    let nameData=(x)=>{
        setName(x.target.value);
    }
    let salaryData=(y)=>{
        setSalary(y.target.value);
    }
    let companyData=(z)=>{
        setCompany(z.target.value);
    }

    let formhandle=(e)=>{
        e.preventDefault()
        let payload={name,salary,company};
        axios.post("http://localhost:3000/employees",payload)
        .then(()=>{
            console.log("DATA HAS BEEN STORED");
        })
        .catch(()=>{
            console.log("SOMETHING WENT WRONG");
        })
    }

    return(
        <div className={style.MyForm}>
            <form action="">
                <h1>New User</h1>
                <br/>
                <label>NAME</label>
                <input type="text" value={name} onChange={nameData}/>
                <br />
                <br />

                <label>SALARY</label>
                <input type="text" value={salary} onChange={salaryData}/>
                <br />
                <br />

                <label>COMPANY</label>
                <input type="text" value={company} onChange={companyData}/>
                <br />
                <br />

                <button onClick={formhandle}>SUBMIT</button>
            </form>

         </div>
    )
}

export default CreateUser