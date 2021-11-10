import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid,Publish } from '@material-ui/icons';
import {Link} from "react-router-dom";
import './user.css';

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newuser">
          <button className="userAddButton">Create</button>
          </Link>
      </div>

      <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
                <img src="https://hindipro.com/wp-content/uploads/2021/05/girls-dp.jpg"
                alt=""
                className="userShowImg"
                />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Ishant Usrathe</span>
                    <span className="userShowUserTitle">Software Eng.</span>
                </div>
            </div>
            <div className="userShowButton">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                <PermIdentity className="userShowIcon"/>
                <span className="userShowInfoTitle">Shiva</span>
                </div>
                <div className="userShowInfo">
                <CalendarToday className="userShowIcon"/>
                <span className="userShowInfoTitle">10-11-2021</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon"/>
                <span className="userShowInfoTitle">+91 9109059704</span>
                </div>
                <div className="userShowInfo">
                <MailOutline className="userShowIcon"/>
                <span className="userShowInfoTitle">ishu@hotmail.com</span>
                </div>
                <div className="userShowInfo">
                <LocationSearching className="userShowIcon"/>
                <span className="userShowInfoTitle">Jabalpur | M.P</span>
                </div>
          </div>
          </div>
          <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form action="" className="userUpdateForm">
                  <div className="userUpdateLeft">
                      <div className="userUpdateItem">
                          <label>User Name</label>
                          <input type="text" placeholder="Enter User Name" className="userUpdateInput"/>
                      </div>
                  
                       <div className="userUpdateItem">
                          <label>Full Name</label>
                          <input type="text" placeholder="Ishant Usrathe" className="userUpdateInput"/>
                      </div>
                  
                 
                      <div className="userUpdateItem">
                          <label>Eamil</label>
                          <input type="text" placeholder="ishu233@hotmail.com" className="userUpdateInput"/>
                      </div>
                  
                 
                      <div className="userUpdateItem">
                          <label>Phone</label>
                          <input type="text" placeholder="9109059704" className="userUpdateInput"/>
                      </div>
               
                 
                      <div className="userUpdateItem">
                          <label>Address</label>
                          <input type="text" placeholder="Jabalpue | MP" className="userUpdateInput"/>
                      </div>
                 </div>

                  <div className="userUpdateRight">
                      <div className="userUpdateUplod">
                          <img className="userUpdateImg" src="https://hindipro.com/wp-content/uploads/2021/05/girls-dp.jpg"
                          alt=""/>
                          <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                          <input type="file" id="file" style={{display:"none"}}/>
                          </div>
                  </div>
                  <button className="userUpdateButton">Update</button>
              </form>
          </div>
      </div>
    </div>
  )
}
