import React,{useState} from 'react'

function Form() {
    const [formData,setFormData]=useState({
        username:"",
        password:""
    })
    let isFormValid=formData.username !=="" && formData.password !== ""
    function handleChange(event){
        const key=event.target.name;
        const value=event.target.value;
        setFormData({...formData,[key]:value})
    }
    function handleSubmit(e, username, password) {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
      }
    // console.log(formData)
 
  return (
    <form onSubmit={(e) => handleSubmit(e, formData.username, formData.password)}>
        <label htmlFor='username'>username:</label>
        <input id='username-input' name="username" onChange={handleChange} value={formData.username} placeholder='Username' required/>
        <label htmlFor='password'>password:</label>
        <input id='password-input' name="password" type='password' onChange={handleChange} value={formData.password} placeholder='password' required/>
<button type='submit' id='login-button' disabled={!isFormValid} >login button</button>
    </form>
  )
}

export default Form