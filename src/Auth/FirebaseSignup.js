import {auth} from '../Config/Firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth'


const FirebaseSignup = (email, password) => {

  if (email === "" && password === "") {
    alert("Please enter name and password")
  } else if (email === "") {
    alert("Please enter email")
  } else if (password === "") {
    alert("Please enter  password")
  } else {
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      alert("Regiistered successfuuly")

    }).catch((err) => {

      alert("error")
    })

  }

};
export default FirebaseSignup;