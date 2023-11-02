import React from 'react';
import emailIcon from './assets/svg/icons/emailIcon.svg';

export default function Login() {

  const handleSubmit = () => {
    const firstName = document.getElementById('first').value;
    const lastName = document.getElementById('last').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('newpass').value;
    const checkBox1 = document.getElementById('flexCheckDefault').checked;

    const formData = {
      name: firstName + " " + lastName,
      email: email,
      product: checkBox1,
      newpass: password,
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

  return (
    <>
      <div className='mainViewArea'>
        <div className="mainSection container" >
          <form action="/profileBuilder" method='POST' onSubmit={handleSubmit}>
            <div className="mb-4 pb-1 text-center">
              <h2 className='mb-2'>Sign Up</h2>
              <hr className='mx-auto' style={{ width: '50%' }} />
            </div>
            <div className="input-group mb-3">
              <input type="text" id='first' className="form-control" placeholder="First Name" aria-label="First Name" required />
              <input type="text" id='last' className="form-control" placeholder="Last Name" aria-label="Last Name" required />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <img src={emailIcon} alt="" height={'25px'} />
              </span>
              <input type="email" id='email' className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2" required />
              <span class="input-group-text">New Password</span>
              <input type="password" id='newpass' className="form-control" placeholder="****" aria-label="Password" required />
            </div>

            <div className="input-group mb-4">
              <span class="input-group-text">Geography</span>
              <input type="text" className="form-control" id='state' placeholder='Enter your State' aria-label="State" aria-describedby="basic-addon4" required />
              <input type="text" className="form-control" id='city' placeholder='Enter your City' aria-label="City" aria-describedby="basic-addon4" required />
              <input type="text" className="form-control" id='school' placeholder='Enter your School' aria-label="School Name" aria-describedby="basic-addon4" required />
            </div>

            <div className="input-grp mb-4 mx-auto text-center">
              <input class="form-check-input mx-1" type="checkbox" value="" id="flexCheckDefault" required />
              <label for="flexCheckDefault" class="form-label mx-1">I have read the Terms and Conditions and I want to proceed.</label>
            </div>

            <div className="input-group mx-auto">
              <button className='btn-proceed' type='submit'>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}