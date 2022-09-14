import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import InputForm from './Component.jsx/InputForm';
function App() {
  const [values, setValues]=useState({
    Username:'',
    Email: '',
    Birthday: '',
    Password: '',
    ConfirmPassword: ''
   })

  var input = [
    {
      id:1,
      type: 'text',
      placeholder: 'Enter Your UserName',
      name: 'UserName',
      lable: 'UserName',
      errorMessage: 'Username Should Be 3-16 Characters And Shouldn`t include any special character! ',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true
    },
    {
      id:2,
      type: 'email',
      placeholder: 'Enter Your Email',
      name: 'Email',
      lable: 'Email',
      errorMessage: 'it shoulde be valid email address',
      required: true
    },
    {
      id:3,
      type: 'date',
      placeholder: 'Enter Your Birthday',
      name: 'Birthday',
      lable: 'Birthday',
      errorMessage: ''
    },
    {
      id:4,
      type: 'text',
      placeholder: 'Enter Your Password',
      name: 'Password',
      lable: 'Password',
      errorMessage: 'Password should be 8-20 character and include at least 1 letter, 1 number and 1 special character',
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      id:5,
      type: 'text',
      placeholder: 'Enter Your ConfirmPassword',
      name: 'ConfirmPassword',
      lable: 'ConfirmPassword',
      errorMessage: 'password don`t match!',
      pattern: values.Password,
      required: true
    },
  ]
  const onSubmit=(e)=>{
    e.preventDefault();
  }
  const onChange = (e)=>{
    setValues({...values, [e.target.name]:[e.target.value]})
  }

  console.warn(values);
  return (
    <div className="App">
     <form onSubmit={onSubmit}>
     <h1> Registered </h1>
     {
        input.map((data,id)=>(
         <InputForm
         key={id}
         {...data}
         value={values[data.name]}
         onChange={onChange}
         
         />
        ))
      }
      <button> LogIn </button>
     </form>
    </div>
  );
}

export default App;
