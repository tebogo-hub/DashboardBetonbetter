import React, { useState } from 'react';
import { Campaign } from '../dataservices/services'


function Features() {
  const [campName, setCampaignName] = useState('');
  const [campEmail, setEmail] = useState('');
  const [campDescription, setDescription] = useState('');
  const [campPhone, setContact] = useState('');
  const [campType, setCampaignType] = useState('');
  const AddCampaign = () => {
    alert("clicked");
    Campaign(campName, campEmail, campDescription, campPhone,campType, )
    setCampaignName('');
    setEmail('');
    setCampaignType('');
    setDescription('');
    setContact('');
   
  }
  return (
    <div>
        <h5 class="card-header"></h5>
        <div class="card-body">
        
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Campaigns</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="mb-3" style={{ marginLeft: '10px', marginRight: '10px', marginTop: '10%' }}>
                  <label for="exampleFormControlInput1" class="form-label" style={{ color: 'grey', fontSize: '12px', fontWeight:'500', marginLeft: '2%'}}>Campaign name</label>
                  <input type="Name" class="form-control" id="exampleFormControlInput1" placeholder="Campaign name" onChange={(campName) => setCampaignName(campName.target.value)}  style={{ borderColor: 'white', boxShadow: '0px 4px 4px rgba(0,0,0,0.2)'}}/>
                </div>
                <select class="form-select" aria-label="Default select example" style={{ marginLeft: '10px', width: '30rem',marginTop: '5%',borderColor: 'white', boxShadow: '0px 4px 4px rgba(0,0,0,0.2)' }} onChange={(e) => {
                  const selectedcampaign = e.target.value;
                  setCampaignType(selectedcampaign);
                }}>
                  <option selected>select Campaign type</option>
                  <option value="Money">Money</option>
                  <option value="Food">Food</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Pets">Pets</option>
                  <option value="Books">Books</option>
                  <option value="Toys">Toys</option>
                  <option value="Relegious">Relegiouse</option>
                </select>
                <div class="mb-3" style={{ marginLeft: '10px', width: '30rem',marginTop: '5%', }}>
                  <label for="exampleFormControlTextarea1" class="form-label" style={{ color: 'grey', fontSize: '12px', fontWeight:'500', marginLeft: '2%'}}>Campaign description</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"  onChange={(campDescription) => setDescription(campDescription.target.value)} style={{borderColor: 'white', boxShadow: '0px 4px 4px rgba(0,0,0,0.2)'}}></textarea>
                </div>

                <div class="col-12">
                  <label for="inputAddress" class="form-label"  style={{ color: 'grey', fontSize: '12px', fontWeight:'500', marginLeft: '2%'}}>Contact Number</label>
                  <input type="text" class="form-control" id="inputPhone" placeholder="Phone" onChange={(campPhone) => setContact(campPhone.target.value)} style={{borderColor: 'white', boxShadow: '0px 4px 4px rgba(0,0,0,0.2)'}}/>
                </div>

                <div class="col-12" style={{ marginTop: '5%'}}>
                  <label for="inputAddress2" class="form-label" style={{ color: 'grey', fontSize: '12px', fontWeight:'500', marginLeft: '2%'}}>Email Address</label>
                  <input type="text" class="form-control" id="inputAddress2" placeholder="Email" onChange={(campEmail) => setEmail(campEmail.target.value)} style={{borderColor: 'white', boxShadow: '0px 4px 4px rgba(0,0,0,0.2)'}}/>
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn" onClick={AddCampaign} style={{ color: 'white', backgroundColor: '#ffac2c'}}>Upload</button>
                </div>

              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Features;
