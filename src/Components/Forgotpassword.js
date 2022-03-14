import React from 'react';


function Forgotpassword() {
    return (
        <div class="forgot-container">
            <div>
                <h3 style={{ textAlign: 'center', marginTop: '5%', color: '#ffac2c',}}>Reset Password</h3>
            </div>
            <div class="card" style={{ marginLeft:'20%', marginRight:'20%', marginTop:'5%', textAlign: 'center',  border:'none', boxShadow:'0px 4px 4px rgba(0,0,0,0.2)'}}>
                <div class="card-body">
                    <h5 class="card-title" style={{ color: '#ffac2c', textAlign: 'center' }} >Create new password</h5>
                    <div class="columne g-3">
                        <div class="col">
                            <label for="inputEmail4" class="form-label" style={{ color: 'white' }}>Email</label>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Email" style={{ color: 'gray', border:'none', boxShadow:'0px 4px 4px rgba(0,0,0,0.2)',minHeight: '8vh'}}  />
                        </div>
                        <div class="col">
                            <label for="inputEmail4" class="form-label" style={{ color: 'white' }}>New password</label>
                            <input type="text" class="form-control" placeholder="New Password" aria-label="Password" style={{ color: 'gray', border:'none', boxShadow:'0px 4px 4px rgba(0,0,0,0.2)', minHeight: '8vh'}}  />
                        </div>
                    </div>
                    <a href="Signin" class="btn btn-primary" style={{ marginTop: '5%', textAlign: 'center' }}>Reset password</a>


                </div>
            </div>


        </div>
    )
}

export default Forgotpassword;
