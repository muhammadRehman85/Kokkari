import {BrowserRouter,Routes,Route} from 'react-router-dom';

import './App.css';
// import React, {useState} from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './components/Form.js'
// 2
import About from './components/About';
import Navbar from './components/Navbar';
import User from './components/User';
function App() {
  
  // const[status,setStatus]=useState(true);

  // // 1
  // const[data,setData]=useState("NULL");
  // const[print,setPrint]=useState(false);
  // function get(val){
  //   console.log(val.target.value);
  //   setData(val.target.value);

  // }
  // 2
  return (
    <div className="App  form_wrapper">
        
      <BrowserRouter> 
      <Navbar></Navbar>
  <Routes>
 
    <Route path="/" element={<><h1>home</h1>
    <p>this is our home page this page representing our idealogy</p></>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/form" element={<Forms/>}></Route>
    <Route path="/user/:name" element={<User/>}></Route>
  </Routes>
  </BrowserRouter>
      {/* <Forms></Forms> */}
{/* 
{
      status?<h1>helllo</h1>:null
    }
  <Button  variant="primary" type="submit" onClick={()=>setStatus(!status)}>
     toggle
      </Button> */}
     {/* <Button  variant="primary" type="submit" onClick={()=>setStatus(true)}>
        show
      </Button>
      <Button  variant="primary" type="submit" onClick={()=>setStatus(false)}>
     hide
      </Button> */}
      
      {/* ---------------------------------------------------------
      0000000000000000000000000000000000000000000000000000000000000 */}
      {/* {
        print?
        <h1>{data}</h1>:null
      }
    // 1
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={get} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Button onClick={()=>setPrint(true)} variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}
    {/* ----------------------------------------------------------- */}
{/* ----------------------------------- */}
{/* 2 */}
    {/*  */}
{/* --------------------------------------- */}
  
    </div>
  );
}

export default App;
