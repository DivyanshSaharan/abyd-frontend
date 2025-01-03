import React from 'react';
import './Sidebar.css';
import assets from '../assets/assets';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src={assets.abyd} alt="" className="logo" />
      <menu>
        <nav>
          <ul>
            <li className="active"><img src={assets.home} alt="" />Home</li>
            <li><img src={assets.compliance} alt="" />Start Compliance</li>
            <li><img src={assets.docBuilder} alt="" />Document Builder</li>
            <li><img src={assets.resources} alt="" />Resources</li>
          </ul>
        </nav>
        <div className="bottom-menu">
          <div className="settings"><img src={assets.settings} alt="" />Settings</div>
          <div className="theme-toggle"><img src={assets.lightMode} alt="" />Light Mode</div>
        </div>
      </menu>
    </aside>
  );
};

export default Sidebar;
