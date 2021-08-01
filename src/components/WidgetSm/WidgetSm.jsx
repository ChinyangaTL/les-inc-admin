import { Visibility } from '@material-ui/icons';
import './widgetSm.css';

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSm-title">New Members</span>
      <ul className="widgetSm-list">
        <li className="widgetSm-list-item">
          <img
            src="https://randomuser.me/api/portraits/women/11.jpg"
            alt="avatar"
            className="widgetSm-img"
          />
          <div className="widgetSm-user">
            <span className="widgetSm-username">Jane Doe</span>
            <span className="widgetSm-job">Software Engineer</span>
          </div>
          <button className="widgetSm-btn">
            <Visibility className="widgetSm-icon" /> Display
          </button>
        </li>
        <li className="widgetSm-list-item">
          <img
            src="https://randomuser.me/api/portraits/women/11.jpg"
            alt="avatar"
            className="widgetSm-img"
          />
          <div className="widgetSm-user">
            <span className="widgetSm-username">Jane Doe</span>
            <span className="widgetSm-job">Software Engineer</span>
          </div>
          <button className="widgetSm-btn">
            <Visibility className="widgetSm-icon" /> Display
          </button>
        </li>
        <li className="widgetSm-list-item">
          <img
            src="https://randomuser.me/api/portraits/women/11.jpg"
            alt="avatar"
            className="widgetSm-img"
          />
          <div className="widgetSm-user">
            <span className="widgetSm-username">Jane Doe</span>
            <span className="widgetSm-job">Software Engineer</span>
          </div>
          <button className="widgetSm-btn">
            <Visibility className="widgetSm-icon" /> Display
          </button>
        </li>
        <li className="widgetSm-list-item">
          <img
            src="https://randomuser.me/api/portraits/women/11.jpg"
            alt="avatar"
            className="widgetSm-img"
          />
          <div className="widgetSm-user">
            <span className="widgetSm-username">Jane Doe</span>
            <span className="widgetSm-job">Software Engineer</span>
          </div>
          <button className="widgetSm-btn">
            <Visibility className="widgetSm-icon" /> Display
          </button>
        </li>
        <li className="widgetSm-list-item">
          <img
            src="https://randomuser.me/api/portraits/women/11.jpg"
            alt="avatar"
            className="widgetSm-img"
          />
          <div className="widgetSm-user">
            <span className="widgetSm-username">Jane Doe</span>
            <span className="widgetSm-job">Software Engineer</span>
          </div>
          <button className="widgetSm-btn">
            <Visibility className="widgetSm-icon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
