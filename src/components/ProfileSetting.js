import React, { useState, useRef } from 'react';
import usericon from './assets/svg/icons/@Icon.svg';
import emailIcon from './assets/svg/icons/emailIcon.svg';
import profAdd from './assets/svg/icons/profAdd.svg';
import locMap from './assets/svg/icons/location-map.svg';
export default function ProfileSetting() {

  const handleSubmit = () => {
    const firstName = document.getElementById('first').value;
    const lastName = document.getElementById('last').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('newpass').value;
    const confipass = document.getElementById('confipass').value;
    const checkBox1 = document.getElementById('flexCheckDefault').checked;

    const formData = {
      name: firstName + " " + lastName,
      email: email,
      username: username,
      product: checkBox1,
      newpass: password,
      confirmpass: confipass
    };

    fetch('http://localhost:3001/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify(formData)
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Error writing data to file');
      }
      console.log('Data saved to file');
    })
      .catch((error) => {
        console.error(error);
      });
  }
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleProfClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('Selected file:', file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      }

      reader.readAsDataURL(file);
    }
  }

  const generateCode = () => {
    const codeCheck = document.getElementById('verifyCheck').checked;
    if(codeCheck === true) {
      console.log('hello');
    }
    else{
      return false;
    }
  }

  return (
    <>
      <div className="profSet">
        <div className='mainViewArea-ProfSet'>
          <div className="mainSection container" >
            <form action="/profileBuilder" method='POST' onSubmit={handleSubmit}>
              <div className="mb-4 pb-1 text-center">
                <span class='mb-2 mx-auto'>
                  {selectedImage ? (<img src={selectedImage} alt="Profile" className='rounded bg-dark' style={{ width: '150px', height: '150px' }} />) : (
                    <div className='rounded mx-auto' style={{ height: '100px', width: '100px', opacity: '50%', backgroundImage: `url(${profAdd})`, backgroundSize: 'cover' }}></div>)}<br />
                  <div>
                    <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} id="imageInput" />
                    <button className='profInpBtn btn btn-sm' type="button" onClick={handleProfClick}>Upload Profile Picture</button>
                  </div>
                </span>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <img src={usericon} alt="" height={'25px'} />
                </span>
                <input type="text" id='username' className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required />
                <span className='input-group-text' id='basic-addon2'>
                  <img src={emailIcon} alt="" height={'20px'} />
                </span>
                <input type="email" id='parentemail' className="form-control" placeholder="Enter your Parent's Email" aria-label="Parent's Email" aria-describedby="basic-addon2" required />
              </div>
              <div className="input-group mb-3">
                <input type="text" id='schoolName' className="form-control" placeholder="Enter your School Name" aria-label="School Name" required />
                <span class="input-group-text">
                  <img src={locMap} alt="" />
                </span>
                <input type="text" className="form-control" id='state' placeholder='Enter your State' aria-label="State" aria-describedby="basic-addon4" required />
                <input type="text" className="form-control" id='city' placeholder='Enter your City' aria-label="City" aria-describedby="basic-addon4" required />
              </div>

              <div className="input-group mb-3">
                <input type="date" className='form-control' id='dob' placeholder='Date Of Birth' aria-label='Date of Birth' required />
                <input type="text" className='form-control' id='schNo' placeholder='Enter your scholar no' aria-label='Scholar no' required />
                <select id="inputState" class="form-select">
                  <option value={0} selected>Your Grade</option>
                  <option value={5}>5th</option>
                  <option value={6}>6th</option>
                  <option value={7}>7th</option>
                  <option value={8}>8th</option>
                  <option value={9}>9th</option>
                  <option value={10}>10th</option>
                  <option value={11}>11th</option>
                  <option value={12}>12th</option>
                </select>
                <label htmlFor="schoolId" className='input-group-text'>School Id</label>
                <input type="file" className='form-control' id='schoolId' placeholder='Upload school id' />
              </div>

              <div className="input-grp mb-4 mx-auto text-center">
                <input class="form-check-input mx-1" type="checkbox" id="verifyCheck" required onClick={generateCode}/>
                <label for="verifyCheck" class="form-label mx-1">Verify your Parent's email</label>
              </div>

              <div className="input-group mx-auto">
                <button className='btn-proceed' type='submit'>Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
