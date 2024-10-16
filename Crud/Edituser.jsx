import { useNavigate , useParams } from "react-router-dom"
import style from "./homecrud.module.css"
import { useEffect, useState } from "react"
import axios from "axios"

const Edituser=()=>{
    
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")

    let navigate=useNavigate()

    let {abc}=useParams()
    console.log(abc);

    useEffect(()=>{
        axios.get(`http://localhost:3000/employees/${abc}`)
        .then((response)=>{
            console.log(response.data);
            setName(response.data.name)
            setSalary(response.data.salary)
            setCompany(response.data.company)
        })
        .catch(()=>{
            console.log("Something Went Wrong");
        })
    },[])

    let name1=(x)=>{
        setName(x.target.value);
    }
    let salary1=(y)=>{
        setSalary(y.target.value);
    }
    let company1=(z)=>{
        setCompany(z.target.value);
    }
    let formHandle=(e)=>{
        let payload={name,salary,company};
        axios.put(`http://localhost:3000/employees/${abc}`,payload)
        .then(()=>{
            console.log("DATA HAS BEEN UPDATED");
        })
        .catch(()=>{
            console.log("DATA HAS BEEN NOT UPDATED");
        })
        navigate("/User")
    }
    return(
        <div className={style.MyForm}>

            <form action="">
                <h1>Update User</h1>

                <label>NAME</label>
                <input type="text" value={name} onChange={name1}/>
                <br />
                
                <label>SALARY</label>
                <input type="text" value={salary} onChange={salary1}/>
                <br />

                <label>COMPANY</label>
                <input type="text" value={company} onChange={company1}/>
                <br />

                <button onClick={formHandle}>Update</button>
            </form>

         </div>
    )
}

export default Edituser