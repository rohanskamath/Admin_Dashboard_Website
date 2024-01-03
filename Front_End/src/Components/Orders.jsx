import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faSignOut, faPaperPlane, faPrint, faSync, faPlus, faShoppingBag, faCaretDown, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Settings from '../assets/settings.png'

const Orders = () => {

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const [checkAll, setCheckAll] = useState(false);
  
  const handleCheckAll = () => {
    setCheckAll(!checkAll);
  };

  return (
    <div className='main'>
      <div className="d-flex justify-content-between align-items-center ms-2">
        <button className='btn btn-light px-3 text-primary'>Orders<FontAwesomeIcon icon={faClose} className="ms-3 text-secondary" /></button>
        <img src={Settings} alt="" className='justify-content-right me-3' style={{ width: "20px", height: "20px", cursor: "pointer" }} />
      </div>

      <nav className="navbar navbar-light mt-2 me-4 ms-2">
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
          <div className="box p-2">
            <div className="d-flex justify-content-between align-items-center ms-2">
              <div className="d-flex align-items-center ms-2 m-4">
                <button className='btn btn-outline-dark px-3'><FontAwesomeIcon icon={faSignOut} className="me-3 text-secondary" />Import Orders</button>
                <button className='btn btn-outline-dark px-3 ms-2'><FontAwesomeIcon icon={faPaperPlane} className="me-3 text-secondary" />Accept</button>
                <button className='btn btn-outline-dark px-3 ms-2'><FontAwesomeIcon icon={faPrint} className="me-3 text-secondary" />Print</button>
              </div>
              <div className='justify-content-right me-3'>
                <button className='btn btn-primary px-3 ms-2'><FontAwesomeIcon icon={faSync} className="me-3 text-light" />Refresh</button>
              </div>
            </div>

            <table className="table table-striped table-bordered table-sm " cellspacing="0" width="100%">
              <thead>
                <tr>
                  <th className="th-sm"></th>
                  <th className="th-sm text-center"><input type="checkbox" checked={checkAll} onChange={handleCheckAll} /></th>
                  <th className="th-sm">Channel</th>
                  <th className="th-sm">Order No</th>
                  <th className="th-sm">Order date</th>
                  <th className="th-sm">City</th>
                  <th className="th-sm">Customer Name</th>
                  <th className="th-sm">Order Value</th>
                  <th className="th-sm">Status</th>
                  <th className="th-sm text-center">Operation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><FontAwesomeIcon icon={faPlus} /></td>
                  <td className="text-center"><input type="checkbox" checked={checkAll}/></td>
                  <td className="text-center"><FontAwesomeIcon icon={faShoppingBag} /></td>
                  <td className='text-primary'>#TKN20203754</td>
                  <td>2022-05-04</td>
                  <td>Lucknow</td>
                  <td>Abhishek Dixit</td>
                  <td>0.00</td>
                  <td className='text-center'><span class="badge bg-success">Pending</span></td>
                  <td className='text-center'><div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"
                      style={{ background: 'transparent', border: '1px solid black', color: "black" }}>
                      Action
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {/* Add dropdown items here */}
                    </ul>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td><FontAwesomeIcon icon={faPlus} /></td>
                  <td className="text-center"><input type="checkbox" checked={checkAll}/></td>
                  <td className="text-center"><FontAwesomeIcon icon={faShoppingBag} /></td>
                  <td className='text-primary'>#TKN20203753</td>
                  <td>2022-05-04</td>
                  <td>Lucknow</td>
                  <td>Abhishek Dixit</td>
                  <td>0.00</td>
                  <td className='text-center'><span class="badge bg-success">Pending</span></td>
                  <td className='text-center'><div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"
                      style={{ background: 'transparent', border: '1px solid black', color: "black" }}>
                      Action
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {/* Add dropdown items here */}
                    </ul>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td><FontAwesomeIcon icon={faPlus} /></td>
                  <td className="text-center"><input type="checkbox" checked={checkAll}/></td>
                  <td className="text-center"><FontAwesomeIcon icon={faShoppingBag} /></td>
                  <td className='text-primary'>#TKN20203752</td>
                  <td>2022-05-04</td>
                  <td>Lucknow</td>
                  <td>Abhishek Dixit</td>
                  <td>0.00</td>
                  <td className='text-center'><span class="badge bg-success">Pending</span></td>
                  <td className='text-center'><div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"
                      style={{ background: 'transparent', border: '1px solid black', color: "black" }}>
                      Action
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {/* Add dropdown items here */}
                    </ul>
                  </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-between align-items-center ms-2">
              <div className='btn-page'>
                <button className='btn btn-light text-dark me-3 border'><FontAwesomeIcon icon={faCaretLeft} /></button>
                <button className='btn btn-light text-primary me-3 border'>1</button>
                <button className='btn btn-light text-dark me-3 border'><FontAwesomeIcon icon={faCaretRight} /></button>
                <button className='btn btn-light px-3 text-dark me-3 border'>20/ page<FontAwesomeIcon icon={faCaretDown} className="ms-3 text-secondary" /></button>
              </div>
            </div>
          </div>

        ) :
          null
      }
    </div>
  )
}

export default Orders