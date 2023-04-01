import React from 'react'
import { BrowserRouter as Router,  Route, BrowserRouter ,} from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import ViewProfile from './components/profile/ViewProfile'
import Table from './components/Table'

import './App.css'
import Sidebar from './components/siderbar/sidebar'
// import Sidebar from './components/siderbar/sidebar'


export default function App() {
    return (
        <Router>
            
              
                <BrowserRouter>
                
                    <Route exact path="/" component={LandingPage } />
                    <Route  path="/login" component={ LoginPage } />
                    
                    
                    
                   
                    <Sidebar>
                    <Route path='/table' component={Table}/>
                    
                    <Route  path='/profile'  component={ViewProfile}/>
                    
                    </Sidebar>
                    
                </BrowserRouter>
                
        </Router>
    )
}



