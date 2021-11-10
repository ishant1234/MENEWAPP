import './widgetSm.css';
import { Visibility } from '@material-ui/icons';

export default function Widgetsm() {
  return (
    <div className="widgetsm">
      <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://hindipro.com/wp-content/uploads/2021/05/girls-dp.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Ishu</span>
                    <span className="widgetSmUserTitle">Usrathe</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility  className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://hindipro.com/wp-content/uploads/2021/05/girls-dp.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Ishu</span>
                    <span className="widgetSmUserTitle">Usrathe</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility  className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://hindipro.com/wp-content/uploads/2021/05/girls-dp.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Ishu</span>
                    <span className="widgetSmUserTitle">Usrathe</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility  className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://hindipro.com/wp-content/uploads/2021/05/girls-dp.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Ishu</span>
                    <span className="widgetSmUserTitle">Usrathe</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
        </ul>

    </div>
  )
}
