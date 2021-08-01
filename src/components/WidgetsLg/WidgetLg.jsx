import './widgetLg.css';

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={'widgetLg-btn ' + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLg-title">Latest Transactions</h3>
      <table className="widgetLg-table">
        <tr className="widgetLg-tr">
          <th className="widgetLg-th">Customer</th>
          <th className="widgetLg-th">Date</th>
          <th className="widgetLg-th">Amount</th>
          <th className="widgetLg-th">Status</th>
        </tr>
        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img
              className="widgetLg-img"
              src="https://randomuser.me/api/portraits/women/11.jpg"
              alt="avatar"
            />
            <span className="widgetLg-name">Susan Carol</span>
          </td>
          <td className="widgetLg-data">2 Jun 2021</td>
          <td className="widgetLg-amount">$122.00</td>
          <td className="widgetLg-status">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img
              className="widgetLg-img"
              src="https://randomuser.me/api/portraits/women/11.jpg"
              alt="avatar"
            />
            <span className="widgetLg-name">Susan Carol</span>
          </td>
          <td className="widgetLg-data">2 Jun 2021</td>
          <td className="widgetLg-amount">$122.00</td>
          <td className="widgetLg-status">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img
              className="widgetLg-img"
              src="https://randomuser.me/api/portraits/women/11.jpg"
              alt="avatar"
            />
            <span className="widgetLg-name">Susan Carol</span>
          </td>
          <td className="widgetLg-data">2 Jun 2021</td>
          <td className="widgetLg-amount">$122.00</td>
          <td className="widgetLg-status">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img
              className="widgetLg-img"
              src="https://randomuser.me/api/portraits/women/11.jpg"
              alt="avatar"
            />
            <span className="widgetLg-name">Susan Carol</span>
          </td>
          <td className="widgetLg-data">2 Jun 2021</td>
          <td className="widgetLg-amount">$122.00</td>
          <td className="widgetLg-status">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
