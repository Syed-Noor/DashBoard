import React from 'react'
// import { Link } from 'react-router-dom'
import '../../App.css'
import MainDashboard from '../MainDashboard/MainDashboard'
import Sidebar from '../siderbar/sidebar'

export default function HomePage() {
    return (

        <div >
            <div >
            <Sidebar/>
        <div className="text-center  ">
            {/* <h1 className="main-title home-page-title">welcome to our Dashboard</h1> */}
            <MainDashboard/>
            
            {/* <Link to="/">
                <button className="primary-button">Log out</button>
            </Link> */}
        </div>
        </div>
        </div>
    )
}
