import React, { useState } from 'react';
import FirebaseSignup from "../Auth/FirebaseSignup";
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate()
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
    const FirebaseSign = () => {   
      
        FirebaseSignup(email, password);
        navigate('/')
    }
    return (
        <div class="card"style={{ marginLeft:'20%', marginRight:'20%', marginTop:'15%', textAlign: 'center',  border:'none', boxShadow:'0px 4px 4px rgba(0,0,0,0.2)'}}>
            <div class="card-body">
                <h5 class="card-title" style={{color: '#ffac2c', textAlign:'center' }} >Sign up</h5>
                <div class="columne g-3">
                   
                    <div class="col">
                        <label for="inputEmail4" class="form-label" style={{ color: 'white' }}>Email</label>
                        <input type="text" class="form-control" placeholder="Email" aria-label="Email" style={{ color: 'gray', border:'none', boxShadow:'0px 4px 4px rgba(0,0,0,0.2)', minHeight: '8vh', }}  onChange={(email) => setEmail(email.target.value)} />
                    </div>
                    <div class="col">
                        <label for="inputEmail4" class="form-label" style={{ color: 'white' }}>Password</label>
                        <input type="text" class="form-control" placeholder="Password" aria-label="Password" style={{ color: 'gray', border:'none', boxShadow:'0px 4px 4px rgba(0,0,0,0.2)',minHeight: '8vh', }}  onChange={(password) => setPassword(password.target.value)} />
                    </div>
                  
                </div>
                <button class="btn btn-primary" style={{ marginTop: '5%', textAlign:'center' }} onClick={FirebaseSign}>Sign up</button>
                <div class="d-grid gap-2 col-6 mx-auto">
                </div>
            </div>
        </div>
    )
}

export default Signup;
