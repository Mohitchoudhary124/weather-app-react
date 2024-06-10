import React, { useState } from 'react'

function Api2() {
    const [name ,setName ] =useState("")
    const [email ,setEmail ] =useState("")
    const [mobile ,setMobile ] =useState("")
    function saveUser(){
        console.warn({name,email,mobile});
        let data ={name,email,mobile}
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
           body: JSON.stringify(data)
           }).then((result)=> {
              console.warn("result",result);
           })
        
    }
  return (
    <div className='App'>
        <h1>Post api example</h1>
        <input type='text' value={name} onChange={(e)=> {setName(e.target.value)}} name='name'/>  <br/><br/>
        <input type='text' value={email} onChange={(e)=> {setEmail(e.target.value)}} name='name'/>  <br/><br/>
        <input type='text' value={mobile} onChange={(e)=> {setMobile(e.target.value)}} name='name'/>  <br/><br/>
        <button type='button' onClick={saveUser}> Save new user </button>
        </div>
  )
}

export default Api2