import * as React from "react"
import NavBar from '../components/NavBar';
import UserList from './../components/UserList';

const IndexPage = ()=>{
  return(
    <div >
      <NavBar></NavBar>
      <div className="container">
        <UserList></UserList>
      </div>
    </div>
  )
}

export default IndexPage
