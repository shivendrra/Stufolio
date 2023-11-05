import React from 'react'

export default function Settings() {
  return (
    <>
      <div className="sett-sec">
        <div className="sett-bound">
          <div className="row">
            <div className="col-lg-12">
                <h2>Settings</h2>
                <div className="col-lg-3">
                  <h4>Menu</h4>
                  <div className="side-nav">
                    <ul>
                      <li>General</li>
                      <li>Profile</li>
                      <li>Passwords</li>
                      <li>Application</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-9">
                  <h4>Content</h4>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
