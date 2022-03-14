import { auth } from '../Config/Firebase';
import { sendPasswordResetEmail } from 'firebase/auth';


const Forgotpassword = ((email) =>{
    if (email === ""){
        alert("Please email")
    }
   alert('please check your email to confirm')
    sendPasswordResetEmail(auth,email,)

})
export { Forgotpassword}