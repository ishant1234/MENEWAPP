import './newuser.css';
export default function Newuser() {
  return (
    <div className="newUser">
     <h1 className="newUserTitle">New User</h1>
     <form action="" className="newUserForm">
         <div className="newUserItem">
             <label>User Name</label>
             <input type="text" placeholder="Ishant"/>
         </div>
         <div className="newUserItem">
             <label>Full Name</label>
             <input type="text" placeholder="Ishant Usrathe"/>
         </div>
         <div className="newUserItem">
             <label>Email</label>
             <input type="email" placeholder="ishu233@hotmail.com"/>
         </div>
         <div className="newUserItem">
             <label>Password</label>
             <input type="password" placeholder="password"/>
         </div>
         <div className="newUserItem">
             <label>Phone</label>
             <input type="text" placeholder="+91-910-905-9704"/>
         </div>
         <div className="newUserItem">
             <label>Address</label>
             <input type="text" placeholder="Jabalpur | M.P."/>
         </div>
         <div className="newUserItem">
             <label>Gender</label>
             <div className="newUserGender">
             <input type="radio" name="gender" id="male" value="male"/>
             <label for="male">Male</label>
             <input type="radio" name="gender" id="female" value="female"/>
             <label for="male">Female</label>
             <input type="radio" name="other" id="other" value="other"/>
             <label for="Other">Other</label>
         </div> 
         </div>
         <div className="newUserItem">
             <label>Active</label>
             <select className="newUserSelect" name="active" id="active">
                 <option value="yes">Yes</option>
                 <option value="no">No</option>
             </select>
             <button className="newUserButton">Create</button>
         </div>
        
     </form>
        
    </div>
  )
}
