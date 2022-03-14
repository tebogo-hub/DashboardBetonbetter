import {auth} from '../Config/Firebase';
import {  signInWithEmailAndPassword } from 'firebase/auth';

export default function Signin(email, password) {

    if (email === "" && password === "") {
        alert("Please enter name and password")
    
      } else if (email === "") {
        alert("Please enter email")
      } else if (password === "") {
        alert("Please enter  password")
      } else {
        signInWithEmailAndPassword (auth, email, password).then(()=>{
            alert("Login successfuuly")
    
        }).catch(()=>{
    
            alert("Error")
        })
      }
}
