import React from "react";
import {Row, Col, Icon, SideNav, SideNavItem } from 'react-materialize';
import { Link, Route, Switch } from 'react-router-dom';
import AddAdmin from './AddAdmin.jsx';
import AddCaterers from './AddCaterers.jsx';
import ViewCaterers from './ViewCaterers.jsx';
import Profile from './Profile.jsx';

export class Admin extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
               <header className="header">
                <Row className="brand-section">
                    <Col s={1} className="logo">
                        <img 
                        src="https://10c237484c476452bb62-4bdd3b1df7b1853b542aef732aec817c.ssl.cf1.rackcdn.com/logos/cropped.jpg?v=28" 
                        alt="logo"/>
                    </Col>
                    <Col s={1} className="brand">
                        
                    </Col>
                </Row>
               </header>
               <main className="main">
                    <Row >
                        <Col s={2} className="aside">
                        <ul>
                            <li id="group">
                                Admin Menu
                                <hr/>
                                <ul>
                                <li><Link to='/admin/addadmin'>Add New Admin</Link></li>
                                <li><Link to='/admin/manageadmin'>Manage Admin</Link></li>
                                </ul>
                            </li>
                            <li id="group">
                                Manage Cateres
                                <hr/>
                                <ul>
                                <li><Link to="/admin/caterers">Create Caterers</Link></li>
                                <li><Link to="/admin/viewcaterers">View Caterers</Link></li>
                                </ul>
                            </li>
                            <li id="group">
                                Reports
                                <hr/>
                                <ul>
                                <li><Link to="/admin/feedbacks">Feedbacks</Link></li>
                                <li><Link to="/admin/rating">Rating</Link></li>
                                <li><Link to="/admin/meals">Meals</Link></li>
                                </ul>
                            </li>
                        </ul>
                        </Col>
                        <Col s={9}>
                           <div>
                               <Switch>
                               <Route exact path="/admin/addadmin" component={AddAdmin} />
                               <Route exact path="/admin/manageadmin" component={Profile} />
                               <Route exact path="/admin/caterers" component={AddCaterers} />
                               <Route exact path="/admin/viewcaterers" component={ViewCaterers} />
                               <Route exact path="/admin/feedbacks" component={Profile} />
                               <Route exact path="/admin/rating" component={Profile} />
                               <Route exact path="/admin/meals" component={Profile} />
                               </Switch>
                           </div>
                        </Col>
                    </Row>
               </main>
            </div>
        )
    }
}
export default Admin;