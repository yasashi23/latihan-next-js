import styles from '../styles/Home.module.css'
import Header from 'components/Header'
import React from 'react'

// latihan SSR
export default class Home extends React.Component {
  static async getInitialProps() {
    const getUser = await fetch('http://localhost:3000/api/users')
    const datanya = await getUser.json()
    return{
      users: datanya
    }
  }

  render(){
    const { users } = this.props
    return(
      <div>
      judul
      {users.map((usr,ll) => (
        <h1 key={ll}>{usr.nama} &mdash; {(usr.hpnya === 'iphone') ? "biasa aja" : usr.hpnya}</h1>
      ))}
      {/* <h1>
        {usern}
      </h1> */}
      </div>
    )
  }
}