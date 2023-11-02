import React from 'react';
import addIcon from './assets/svg/icons/addPlus.svg';

export default function Projects() {
  return (
    <>
      <div className="project-main">
        <div className="proj-container">
          <div className="container">
            <div className="proj-section row">
              <div className="main-area text-center col-lg-12">
                <img src={addIcon} alt="" style={{color: '#747474', height: '50px', opacity: '60%'}}/>
                <h5>Drag and drop your files, images, videos, etc</h5>
                <p>Maximum size 20MB (50MB for videos)</p>
              </div>
              <div className="dialogue-area row">
                  <div className="col-lg-6 col-sm-12">
                    <ul>
                      <li>High Resolution Images</li>
                      <li>Videos (mp4, avi)</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <ul>
                      <li>Media rights to you</li>
                      <li>Codes and programs</li>
                    </ul>
                  </div>
              </div>
              <span className='btn-sec d-flex justify-content-center mt-2'>
                  <button className='btn btn-outline-dark mx-2 my-2' type='button'>Cancel</button>
                  <button className='btn btn-outline-warning mx-2 my-2' type='button'>Proceed</button>
                </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
