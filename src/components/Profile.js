import React from 'react';

const Profile = ({data})=>{
    
    return (
        <div className="card_profile ">
            <div className="card_item">
                {data.first_name} {data.last_name}
              </div>
              <img src={data.avatar} className="img" alt="avatar" />
              <div className="card_item">{data.email}</div>
        </div>
    )
}

export default Profile;