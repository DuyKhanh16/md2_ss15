import React, { useId, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function Home() {
    const data = useSelector(a=>a)
    const dispatch = useDispatch()
    const [users,setUsers] = useState(
      {
        name:"",
        email:"",
        age:"",
        id: ""
      }
    )
    const changeValue = (e)=> {
      setUsers({
        ...users,
        [e.target.name]:e.target.value
      })
    }
    const handleAdd = ()=> {
      dispatch({
        type:"ADD",
        payload: {
          ...users,
          id: Date.now()
        }
      })
      setUsers({
        name:"",
        email:"",
        age:"",
        id:""
      })
    }
  return (
    <>
      <label htmlFor="">Nhập tên</label>
      <input type="text" onChange={changeValue} name='name' value={users.name}/><br />
      <label htmlFor="">Nhập email</label>
      <input type="text" onChange={changeValue} name='email' value={users.email}/><br />
      <label htmlFor="">Nhập tuổi</label>
      <input type="text" onChange={changeValue} name='age' value={users.age}/><br />
      <button onClick={handleAdd}>Thêm</button>
      <br />
      <br />
      <table style={{border:"1px solid black"}}>
        <thead>
          <tr>
            <th style={{border:"1px solid black"}}>Tên</th>
            <th style={{border:"1px solid black"}}>Email</th>
            <th style={{border:"1px solid black"}}>Tuổi</th>
          </tr>
        </thead>
        <tbody>
            {data.map((item)=>(
              <tr key={item.id}>
                  <td style={{border:"1px solid black"}}>{item.name}</td>
                  <td style={{border:"1px solid black"}}>{item.email}</td>
                  <td style={{border:"1px solid black"}}>{item.age}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}
