import React, { useState } from 'react';
import Features from './Features';
import { AddNgos } from '../dataservices/services';

function AddMember() {

  const [orgName, setFullname] = useState('');
  const [orgEmail, setEmail] = useState('');
  const [orgPhone, setPhone] = useState('');
  const [orgTell, setTell] = useState('');
  const [orgAddress, setAddress] = useState('');
  const [orgCity, setCity] = useState('');
  const [orgZip, setZip] = useState('');
  const [Latitude, setLatitude] = useState('');
  const [Longitude, setLongitude] = useState('');
  const [orgDescription, setDescription] = useState('');
  const [orgAbout, setAbout] = useState('');

  const AddOrganization = () => {

    alert("Successfuly added")
    AddNgos(orgName, orgEmail, orgPhone, orgTell, orgAddress, orgCity, orgZip, Latitude, Longitude, orgDescription, orgAbout);
    setFullname('');
    setEmail('');
    setPhone('');
    setTell('');
    setAddress('');
    setCity('');
    setZip('');
    setLatitude('');
    setLongitude('');
    setDescription('');
    setAbout('');
  }

  return (
    <div className="AddMember-Container">
      <div>
        <h6 style={{ marginTop: '3%', textAlign: 'center', color: '#ffac2c' }}>Bet on Better user Application</h6>
      </div>
      <div class="card" style={{ marginTop: '10px', marginLeft: '10%', marginRight: '10%', border:'none' }}>
        <div class="card-body" >
          <h5 class="card-title" style={{fontSize: '18px'}}>Create user</h5>
          <h6 class="card-text" style={{ color: 'red', fontSize: '9px'}}>This form contains the user's information and correct</h6>
        </div>
        <div class="card-body" >
          <div class="row g-3">
            <div class="col-12">
              <div class="row g-3">
                <div class="col">
                  <label for="inputEmail4" class="form-label" style={{ color: 'grey', fontSize: '12px', fontWeight:'500px', marginLeft: '3%'}}>Org Name</label>
                  <input type="text" class="form-control" placeholder="Org name" aria-label="Full name" onChange={(orgName) => setFullname(orgName.target.value)} style={{ borderColor: 'white', boxShadow: '0px 4px 4px rgba(0,0,0,0.2)'}} />
                </div>
                <div class="col">
                  <label for="inputEmail4" class="form-label" style={{ color: 'grey', fontSize: '12px', fontWeight:'500', marginLeft: '3%'}}>Email</label>
                  <input type="text" class="form-control" placeholder="Email" aria-label="Email" onChange={(orgEmail) => setEmail(orgEmail.target.value)} style={{ borderColor: 'white', boxShadow: '0px 4px 4px rgba(0,0,0,0.2)'}}/>
                </div>
              </div>
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label" style={{ color: 'grey', fontSize: '12px', fontWeight:'500', marginLeft: '3%'}}>Phone</label>
                  <input type="Phone" class="form-control" id="inputPhone" placeholder=" Phone" onChange={(orgPhone) => setPhone(orgPhone.target.value)} style={{ borderColor: 'white', boxShadow: '0px 4px 4px rgba(0,0,0,0.2)'}} />
                </div>
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label" style={{ color: 'grey', fontSize: '12px', fontWeight:'500', marginLeft: '3%'}}>Tell</label>
                  <input type="Phone" class="form-control" id="inputPhone" placeholder=" Tell" onChange={(orgTell) => setTell(orgTell.target.value)} style={{ borderColor: 'white', boxShadow: '0px 4px 4px rgba(0,0,0,0.2)'}} />
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label" style={{ color: 'grey', fontSize: '12px', fontWeight:'500', marginLeft: '1%'}}>Address</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" onChange={(orgAddress) => setAddress(orgAddress.target.value)} style={{ borderColor: 'white', boxShadow: '0px 4px 4px rgba(0,0,0,0.2)'}}/>
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label" style={{ color: 'grey', fontSize: '12px', fontWeight:'500', marginLeft: '2%'}}>City</label>
                  <input type="text" class="form-control" id="inputCity" placeholder="City" onChange={(orgCity) => setCity(orgCity.target.value)} style={{ borderColor: 'white', boxShadow: '0px 4px 4px rgba(0,0,0,0.2)'}}/>
                </div>
                <div class="col-md-2">
                  <label for="inputZip" class="form-label" style={{ color: 'grey', fontSize: '12px', fontWeight:'500', marginLeft: '3%'}}>Zip</label>
                  <input type="text" class="form-control" id="inputZip" placeholder="Code" onChange={(orgZip) => setZip(orgZip.target.value)} style={{ borderColor: 'white', boxShadow: '0px 4px 4px rgba(0,0,0,0.2)'}}/>
                </div>
                <div class="form-floating">
                  <textarea class="form-control" placeholder="" id="floatingTextarea" onChange={(orgDescription) => setDescription(orgDescription.target.value)} style={{ borderColor: 'white', boxShadow: '0px 4px 4px rgba(0,0,0,0.2)'}}></textarea>
                  <label for="floatingTextarea">Description</label>
                </div>
                <div class="form-floating">
                  <textarea class="form-control" placeholder="" id="floatingTextarea" onChange={(orgAbout) => setAbout(orgAbout.target.value)} style={{ borderColor: 'white', boxShadow: '0px 4px 4px rgba(0,0,0,0.2)'}}></textarea>
                  <label for="floatingTextarea">About</label>
                </div>

                <div class="col-12">
                  <button class="btn btn-success" type="submit" onClick={AddOrganization} style={{ marginTop: '5%', color: 'white', }}>AddMember</button>
                  <button type="Add"  class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ marginTop: '5%', marginLeft:'2%' }}>
                    Add Campaign
                  </button>
                  <Features />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div>
        <h6 style={{ marginTop: '10px', fontSize: '10px', marginBottom: '10px', marginLeft: '10%', textAlign: 'center', marginRight:'10%', color: '#ffac2c' }}>User’s Rental Agreement.I assume full responsibility for the none profitable
          organization details listed below . Upon request,
          I agree to false information and I pose for chargesto the equipment and/or accessories excessive of normal use, </h6>
      </div>

    </div>

  )
}

export default AddMember;
