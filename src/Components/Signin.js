import React, { useState } from 'react';
import FirebaseSignin from '../Auth/FirebaseSignin';
import {Link} from 'react-router-dom';


function Signin() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const Signin = () => {
      
        FirebaseSignin(email, password);
        
    }
    return (
        <div>
            <div>
                <h3 style={{color:'#ffac2c', marginTop:'5%', textAlign: 'center'}}>Bet on better</h3>
            </div>
            <div class="card" style={{ marginLeft:'20%', marginRight:'20%', marginTop:'5%', textAlign: 'center' ,border:'none', boxShadow:'0px 4px 4px rgba(0,0,0,0.2)'}}>
                <div class="card-body">
                    <h5 class="card-title" style={{  color: '#ffac2c',textAlign:'center' }} >Sign in</h5>
                    <div class="columne g-3">
                        <div class="col" style={{ marginTop:'5%',}}>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Email" id="validationDefault05" style={{ color: 'gray', border:'none', boxShadow:'0px 4px 4px rgba(0,0,0,0.2)', minHeight: '8vh', }} onChange={(email) => setEmail(email.target.value)} />
                        </div>
                        <div class="col" style={{ marginTop: '5%', }}>
                            <input type="text" class="form-control" placeholder="Password" aria-label="Password" id="validationDefault05" style={{ color: 'gray',  border:'none', boxShadow:'0px 4px 4px rgba(0,0,0,0.2)',  minHeight: '8vh' }} onChange={(password => setPassword(password.target.value))} />
                        </div>
                    </div>
                    <button  class="btn btn-primary" style={{ marginTop: '5%', textAlign:'center' }} onClick={() => Signin()}>Sign in</button>

                    <div class="d-grid gap-2 col-6 mx-auto">
                        
                        <Link to="/sign-up" class="btn btn btn-sm" style={{ marginTop: '10%', color:'#ffac2c'}}>Click to Register </Link>

                        <Link to="/Forgot-Password"style={{ marginTop: '5%', textAlign: 'center', textDecoration: 'none', color:'#ffac2c' }}>Forgot password</Link>
                    </div>

                </div>
            </div>


        </div>


    )
}

export default Signin;
