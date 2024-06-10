import React, { useEffect ,useState} from 'react'

function Api1() {
    const [data,setData ] =useState([])
   useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users").then((result)=> {
        result.json().then((resp)=> {
            console.warn("result",resp)
            setData(resp)
        })
    })
   },[])
  return (
    <div className='App'>
        <h1>Get Api calls </h1>
        <table border="1px">
                        <tr>
                        <td>name </td>
                        <td>username</td>
                        <td>email</td>
                        <td>phone</td>
                        </tr>
           
                {
                    data.map((item) => 
                        <tr>
                        <td>{item.name }</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        </tr>
                    )
                }
        </table>
    </div>
        
  )
}

export default Api1