import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import React from 'react';
import './User.css';

const User = () => {
  return (
    <div className="user">
      <div className="user-title-container">
        <h1 className="user-title">Edit User</h1>
        <Link to="/newUser">
          <button className="user-addBtn">Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="user-show">
          <div className="user-show-top">
            <img
              className="user-show-img"
              src="https://randomuser.me/api/portraits/men/10.jpg"
              alt="avatar"
            />
            <div className="user-show-top-title">
              <span className="user-show-username">Jurgen Becker</span>
              <span className="user-show-job">Software Engineer</span>
            </div>
          </div>
          <div className="user-show-bottom">
            <span className="user-show-title">Account Details</span>
            <div className="user-show-info">
              <PermIdentity className="user-show-icon" />
              <span className="user-show-info-title">jurgenbeck69</span>
            </div>
            <div className="user-show-info">
              <CalendarToday className="user-show-icon" />
              <span className="user-show-info-title">10.12.1999</span>
            </div>
            <span className="user-show-title">Contact Details</span>
            <div className="user-show-info">
              <PhoneAndroid className="user-show-icon" />
              <span className="user-show-info-title">+1 123 456 7890</span>
            </div>
            <div className="user-show-info">
              <MailOutline className="user-show-icon" />
              <span className="user-show-info-title">
                jurgenbeck69@mail.com
              </span>
            </div>
            <div className="user-show-info">
              <LocationSearching className="user-show-icon" />
              <span className="user-show-info-title">New York, USA</span>
            </div>
          </div>
        </div>
        <div className="user-update">
          <span className="user-update-title">Edit</span>
          <form className="user-update-form">
            <div className="user-update-left">
              <div className="user-update-item">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck79"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Full Name</label>
                <inputnpm
                  type="text"
                  placeholder="Jurgen Beck"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="annabeck79@mail.com"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="+1 123 456 7890"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York, USA"
                  className="user-update-input"
                />
              </div>
            </div>
            <div className="user-update-right">
              <div className="user-update-upload">
                <img
                  src="https://randomuser.me/api/portraits/men/10.jpg"
                  alt="avatar"
                  className="user-update-img"
                />
                <label htmlFor="file">
                  <Publish className="user-update-icon" />
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <button className="user-updateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
