import React from 'react'
// import fs from 'fs'

// latihan SSR
export default class Home extends React.Component {
  static async getInitialProps() {
    const getUser = await fetch('http://localhost:3000/api/users')
    const datanya = await getUser.json()

    const getFs = await fetch('http://localhost:3000/api/crud')
    const yy = await getFs.json()
    
    return{
      users: datanya,
      crud: yy
    }
  }

  
  
  render(){
    
    const { users, crud} = this.props
    return(
      <div>
      judul
      {users.map((usr,ll) => (
        <h1 key={ll}>{usr.nama} &mdash; {(usr.hpnya === 'iphone') ? "biasa aja" : usr.hpnya}</h1>
      ))}
      {console.log(users, crud)}
      {/* <h1>
        {usern}
      </h1> */}

      </div>
    )
  }
}