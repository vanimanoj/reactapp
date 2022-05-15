import React, { useState } from 'react'

const Student1 = () => {

    var [name,setName]=useState("vani")
    var [age,setAge]=useState("32")
    var [college,setCollege]=useState("Mount Zion COllege Of Engineering")
    const newName=()=>{
        setName(
            name="ammu"
        )
        setAge(
            age="24"
        )
        setCollege(
            college="MZC"
        )
    }


  return (
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    <div className="row g-3">
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">Name</label><br></br>
            <label for="" className="form-label">{name}</label>
        </div>
        
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">Age</label><br></br>
            <label for="" className="form-label">{age}</label>
        </div>
        
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">college</label><br></br>
            <label for="" className="form-label">{college}</label>
        </div>
        
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button onClick={newName} className="btn btn-success">CHANGE</button>
        </div>
    </div>
        </div>
    </div>
</div>
  )
}

export default Student1