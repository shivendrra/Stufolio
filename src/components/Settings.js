import React from 'react'

export default function Settings() {

  const LinkClick = () => {
    const clickVal = document.getElementById('side-menu-btn').value;

    console.log(clickVal);
  }

  return (
    <>
      <div className="sett-sec">
        <div className="sett-bound">
          <div className="row">
            <div className="col-lg-12 col-sm-12 d-flex p-2">
                <div className="col-lg-3 col-sm-3 bg-warning">
                  <div className="side-nav">
                    <ul>
                      <li onClick={LinkClick} id='side-menu-btn' value={1} action='button'>
                      Name
                      </li>
                      <li onClick={LinkClick} id='side-menu-btn' value={2} action='button'>
                      Name
                      </li>
                      <li onClick={LinkClick} id='side-menu-btn' value={3} action='button'>
                      Name
                      </li>
                      <li onClick={LinkClick} id='side-menu-btn' value={4} action='button'>
                      Name
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-9 col-sm-9 bg-primary">
                  <h4>Content</h4>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
