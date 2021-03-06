import './home.css';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'; 
import Chart from '../../components/charts/Chart';
import { userData } from '../../dummyData';
import Widgetsm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg';

export default function Home()
{
    return(
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytices" grid datakey="Active User"/>
            <div className="homeWidgets">
              <Widgetsm/>
              <WidgetLg/>            
             </div>

        </div>

    )
}
