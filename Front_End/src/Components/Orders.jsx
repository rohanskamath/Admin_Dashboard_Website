import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Settings from '../assets/settings.png'

const Orders = () => {

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className='main'>
      <div className="d-flex justify-content-between align-items-center ms-2">
        <button className='btn btn-light px-3 text-primary'>Orders<FontAwesomeIcon icon={faClose} className="ms-3 text-secondary" /></button>
        <img src={Settings} alt="" className='justify-content-right me-3' style={{ width: "20px", height: "20px", cursor: "pointer" }} />
      </div>

      <nav className="navbar navbar-light mt-4 me-4 ms-2">
        <a className={`navbar-text text-decoration-none ${activeLink === 0 ? 'text-primary text-decoration-underline' : ''}`} onClick={() => handleLinkClick(0)} href="#">Pending</a>
        <a className={`navbar-text text-decoration-none ${activeLink === 1 ? 'text-primary text-decoration-underline' : ''}`} href="#" onClick={() => handleLinkClick(1)}>Accepted</a>
        <a className={`navbar-text text-decoration-none ${activeLink === 2 ? 'text-primary text-decoration-underline' : ''}`} href="#" onClick={() => handleLinkClick(2)}>AWB Created</a>
        <a className={`navbar-text text-decoration-none ${activeLink === 3 ? 'text-primary text-decoration-underline' : ''}`} href="#" onClick={() => handleLinkClick(3)}>Ready to Ship</a>
        <a className={`navbar-text text-decoration-none ${activeLink === 4 ? 'text-primary text-decoration-underline' : ''}`} href="#" onClick={() => handleLinkClick(4)}>Shipped</a>
        <a className={`navbar-text text-decoration-none ${activeLink === 5 ? 'text-primary text-decoration-underline' : ''}`} href="#" onClick={() => handleLinkClick(5)}>Completed</a>
        <a className={`navbar-text text-decoration-none ${activeLink === 6 ? 'text-primary text-decoration-underline' : ''}`} href="#" onClick={() => handleLinkClick(6)}>Cancelled</a>
      </nav>
      {
        (activeLink === 0) ? (

          <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
            <thead>
              <tr>
                <th className="th-sm">Name
                </th>
                <th className="th-sm">Position
                </th>
                <th className="th-sm">Office
                </th>
                <th className="th-sm">Age
                </th>
                <th className="th-sm">Start date
                </th>
                <th className="th-sm">Salary
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Name
                </th>
                <th>Position
                </th>
                <th>Office
                </th>
                <th>Age
                </th>
                <th>Start date
                </th>
                <th>Salary
                </th>
              </tr>
            </tfoot>
          </table>
        ) :
          null
      }
    </div>
  )
}

export default Orders