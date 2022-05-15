import React, { useState } from 'react'

const Counter = () => {
    var [num,setNum]=useState(0)
    const incfn=()=>{
        setNum(num=num+1)
    }
    const decfn=()=>{
        setNum(num=num-1)
    }
    

  return (
    <div>
<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label"> {num} </label>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={incfn} class="btn btn-success">Increment</button>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={decfn} class="btn btn-success">Decrement</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Counter