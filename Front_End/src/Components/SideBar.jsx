import React, { useState } from 'react'
import NavBar from './NavBar'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBox, faClipboardList, faShippingFast, faBroadcastTower } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {

    const location = useLocation();
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    const isItemActive = (item) => {
        return item === activeItem || location.pathname === item;
    };

    return (
        <header>
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <ul className="list-group list-group-flush">
                            <li className={`list-group-item py-3 ${isItemActive('/') && 'active'}`}>
                                <FontAwesomeIcon icon={faTachometerAlt} className="me-2" />
                                <Link to="/" className="text-reset text-decoration-none" onClick={() => handleItemClick('/')}>Dashboard</Link>
                            </li>
                            <li className={`list-group-item py-3 ${isItemActive('/inventory') && 'active'}`}>
                                <FontAwesomeIcon icon={faBox} className="me-2" />
                                <Link to="/inventory" className="text-reset text-decoration-none" onClick={() => handleItemClick('/inventory')}>Inventory</Link>
                            </li>
                            <li className={`list-group-item py-3 ${isItemActive('/orders') && 'active'}`}>
                                <FontAwesomeIcon icon={faClipboardList} className="me-2" />
                                <Link to="/orders" className="text-reset text-decoration-none" onClick={() => handleItemClick('/orders')}>Orders</Link>
                            </li>
                            <li className={`list-group-item py-3 ${isItemActive('/shipping') && 'active'}`}>
                                <FontAwesomeIcon icon={faShippingFast} className="me-2" />
                                <Link to="/shipping" className="text-reset text-decoration-none" onClick={() => handleItemClick('/shipping')}>Shipping</Link>
                            </li>
                            <li className={`list-group-item py-3 ${isItemActive('/channel') && 'active'}`}>
                                <FontAwesomeIcon icon={faBroadcastTower} className="me-2" />
                                <Link to="/channel" className="text-reset text-decoration-none" onClick={() => handleItemClick('/channel')}>Channel</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <NavBar />
        </header>


    )
}

export default SideBar