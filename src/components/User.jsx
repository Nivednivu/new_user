import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

function User() {

    const [user,setuser]=useState([])
    const [randomcolour,setrandomcolour]=useState("#777777")
    const getuser = async ()=>{
        const response = await axios.get("https://dummyjson.com/users")
        const userdata =  response.data
       const randomdata = Math.floor(Math.random()*userdata.users.length)
       const randomuser = userdata.users[randomdata]
     setuser(randomuser)
     firstcolour()

    }

    const firstcolour = () =>{
        const bgcolour = csscolour()
        setrandomcolour(bgcolour)
    }

    const csscolour = ()=>{
        return "#"+Math.floor(Math.random()*16777215).toString(16);
    }

    const handleRefersh = ()=>{
        getuser()
    }
    
    console.log(user);
    console.log(randomcolour);

    useEffect(()=>{
        getuser()
    },[])
  return (
    <div  className='d-flex justify-content-center align-items-center flex-column'>
        
        <h1 className='text-danger mt-5'>Random User On </h1>
           <Row className='border rounded p-5 'style={{marginTop:'90px',backgroundColor:`${randomcolour}`}}>

            <Col>
            <div>
                <div className='text-white'>
                <img className='border rounded-3' src={user.image} alt="" width={'120px'}/>
             <h3>{user.firstName}</h3>
             <h6>{user.gender}</h6>

                </div>
             <br />
             <div className="d-flex align-items-center justify-content-between text-white">
                 <h2>birthDate</h2>
                 <h2>Age</h2>
             </div>
             <div className='d-flex align-items-center justify-content-between text-white'>
                    <p>{user.birthDate}</p>
                    <p>{user.age}</p>
                 </div>

             <br />
             <div className="d-flex align-items-center justify-content-between text-white">
             <h2 className='me-3'>weight</h2>
                 <h2 className='ms-3'>height</h2>

             </div>
             <div className='d-flex align-items-center justify-content-between text-white'>
                    <p>{user.weight}</p>
                    <p>{user.height}</p>
                 </div>

             <br />
             <button onClick={handleRefersh} className='btn btn-success'>Refersh</button>

            </div>

            </Col>
            <Col>
            </Col>
            <Col className='text-white'>
            <h2 >Last Name </h2>
            <p >{user.lastName}</p>
            <br />
            <h2 >mobile</h2>
            <p>{user.phone}</p>
            <br />
            <h2>bloodGroup</h2>
            <p>{user.bloodGroup}</p>
            <br />
            <h2>Email</h2>
            <span>{user.email}</span>
            </Col>
           </Row>
    </div>
  )
}

export default User

// company
// : 
// address
// : 
// {address: '80 North East Street', city: 'Holyoke', coordinates: {…}, postalCode: '01040', state: 'MA'}
// department
// : 
// "Product Management"
// name
// : 
// "Wintheiser-Boehm"
// title
// : 
// "Research Nurse"