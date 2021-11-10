import './sidebar.css';
import { Link} from "react-router-dom";
import { LineStyle,Timeline,TrendingUp,People,BusinessCenter,AttachMoney,BarChart} from '@material-ui/icons';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrappeer">
          <div className="sidebarMenu">
           <h3 className="sidebarTitle">DashBoard</h3>
           <ul className="sidebarList">
               <li className="sidebarListItem active">
                   <LineStyle className="sidebarIcon"/>
                   Home
               </li>
               <li className="sidebarListItem" >
                   <Timeline/>
                   Analytics
               </li>
               <li className="sidebarListItem">
                   <TrendingUp/>
                   Sales
               </li>
               <li className="sidebarListItem">
                   <LineStyle/>
                   Home
               </li>
               

           </ul>
          </div>
          <div className="sidebarMenu">
           <h3 className="sidebarTitle">Quick Menus</h3>
           <ul className="sidebarList">
               <Link to="/users" className="link">
               <li className="sidebarListItem">
                   <People/>
                   Users
               </li>
               </Link>
               <Link to="/products"  className="link">
               <li className="sidebarListItem">
                   <BusinessCenter/>
                   Product
               </li>
               </Link>
               <li className="sidebarListItem">
                   <AttachMoney/>
                   Transaction
               </li>
               <li className="sidebarListItem">
                   <BarChart/>
                   Reports
               </li>
           </ul>
          </div>
      </div>
    </div>
  )
}
