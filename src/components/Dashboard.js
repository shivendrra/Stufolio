import React from 'react';
import profPic from './assets/ProfilePic.jpg';
import more from './assets/svg/icons/moreHorizontal.svg';
import coverImg from './assets/cover-img.png';

export default function Dashboard() {
  return (
    <>
      <div className="dashboard-bg">
        <div className='profile-info'>
          <div className="container">
            <div className="dash-info">
              <div className="prof-cov" style={{marginTop: '3%'}}>
                <span className='cover-img'>
                  <div className='rounded mx-auto' style={{ height: '200px', opacity: '100%', zIndex: '-2', backgroundImage: `url(${coverImg})`, backgroundSize: 'cover' }}></div>
                </span>
                <img src={profPic} alt="" style={{ height: '200px', width: '200px', objectFit: 'cover' }} className='prof-img' />
              </div>
              <span className='main-info mx-4'>
                <h3>Shivendra Singh</h3>
                <h5>Bio....</h5>
                <p>Kanpur, UP, India</p>
                <div className="actBtns">
                  <button className='btn btn-outline-warning me-2 my-2' type='button'>Follow</button>
                  <button className='btn btn-outline-primary mx-1 my-2' type='button'>Message</button>
                  <span className='dropdown'>
                    <button className='btn btn-outline-dark mx-2 my-2' type='button' data-bs-toggle="dropdown" aria-expanded="false" to="dropdown-menu">
                      <img src={more} alt="" style={{ height: '20px' }} />
                      <ul className="dropdown-menu">
                        <li>Share account</li>
                      </ul>
                    </button>
                  </span>
                </div>
              </span>
            </div>
            <hr />
            <div className="work-space">
              <div className="row gy-3">
                {/* about section */}
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      About Me
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">One Sentence Description</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                  </div>
                </div>
                {/* posts */}
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      Activity
                    </div>
                    <div className="card-body">
                      <div className="card mb-3">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={coverImg} className="img-fluid rounded-start" alt="..." style={{ objectFit: 'cover' }} />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-3">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={coverImg} className="img-fluid rounded-start" alt="..." style={{ objectFit: 'cover' }} />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-3">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={coverImg} className="img-fluid rounded-start" alt="..." style={{ objectFit: 'cover' }} />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      Featured
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
