import React,{useState} from 'react';
import {Link ,useNavigate} from "react-router-dom";
import InputControl from '../inputControl/inputControl';
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from "../../firebase";
import styles from './login.module.css';


function Login() {

  const navigate=useNavigate();

  const [values,setValues]= useState({
      email:"",
      pass:"",
  });

  const [errorMsg, setErrorMsg]=useState("");
 // const [submitButtonDisabled, setSubmitButtonDisabled]=useState("false");
  


  const handleSubmission=()=>{
      if(!values.email || !values.pass){
          setErrorMsg("fill all fields");
          return;
      }
      setErrorMsg("");
     // setSubmitButtonDisabled(true);
  signInWithEmailAndPassword(auth, values.email, values.pass).then(async(res)=>{
      //setSubmitButtonDisabled(false);
      navigate("/portal");
  })
  .catch((err)=>{
     // setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
  });
  };

  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl label="Email" placeholder="enter email" onChange={(event)=>setValues((prev)=>({ ...prev,email: event.target.value}))}/>
        <InputControl label="password" placeholder="enter password" onChange={(event)=>setValues((prev)=>({ ...prev,pass: event.target.value}))} />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
            <button onClick={handleSubmission}>Login</button>
            <p>
                Don't have an account?{""}
                <span>
                    <Link to="/signup">Sign up</Link>
                    </span>
            </p>
        </div>
        </div>

    </div>
  );
}

export default Login;