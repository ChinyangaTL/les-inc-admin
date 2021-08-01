import Chart from '../../components/Charts/Chart';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import './home.css';
import { userData } from '../../dummyData';
import WidgetLg from '../../components/WidgetsLg/WidgetLg';
import WidgetSm from '../../components/WidgetSm/WidgetSm';

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="dau" />
      <div className="home-widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
