import './topbar.css';

import { Language, NotificationsNone, Settings } from '@material-ui/icons';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="top-left">
          <span className="logo">Les Inc Admin</span>
        </div>
        <div className="top-right">
          <div className="topbar-icon-container">
            <NotificationsNone />
            <span className="top-icon-badge">2</span>
          </div>
          <div className="topbar-icon-container">
            <Language />
          </div>
          <div className="topbar-icon-container">
            <Settings />
          </div>
          <img
            className="top-avatar"
            src="https://randomuser.me/api/portraits/women/21.jpg"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
