import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from './Profile';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [user,setUser] = useState(null);
  useEffect(async () => {
    const resp = await axios.get("https://reqres.in/api/users");
    setUsers(resp.data.data);
  });

  return (
    <div>
      <div className="row">
        <div className="col">
          {users.map((item) => (
            <div className="card" key={item.id} onClick={()=>{setUser(item)}}>
              <div className="card_item">
                {item.first_name} {item.last_name}
              </div>
              <img src={item.avatar} className="img" alt="avatar" />
            </div>
          ))}
        </div>
        <div className="col">
            {user ? (<Profile data={user}></Profile>):(<div>User not selected</div>)}
        </div>
      </div>
    </div>
  );
};

export default UserList;
