import React ,{useState} from "react";


export default App = () =>{
  const [login,setLogin] = useState(false);

  const handleLogin = (e) =>{
    e.preventDefault();

  }

  return(
    <>

    <div className = "loginpage">
      <form>

        <input type = "text" placeholder = "please enter your username"/>
        <input type = "password" placeholder = "please enter your password"/>

        <button onClick={handleLogin}>Login</button>
      </form>      
    </div>
    
    </>
  )
}
