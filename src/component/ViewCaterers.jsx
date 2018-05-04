import React from 'react';
import {Catererlist} from '../data/caterer';
import {Table, Icon} from 'react-materialize';

export class ViewCaterer extends React.Component{
    constructor(props){
        super()
        this.state ={
            count:1
        }
    }
    componentDidMount(){
    } 
    render(){
        const caterer = Catererlist.map((cat) => {
            return( <tr key={cat.id}>
             <td>{this.state.count++}</td>
             <td>{cat.businessName}</td>
             <td>{cat.contactPerson}</td>
             <td>{cat.number}</td>
             <td>{cat.email}</td>
             <td>{cat.status}</td>
             <td></td>
             <td><Icon>folder</Icon></td>
           </tr>
            )

        })
        return(
            <div>
                <div>
                    <p>View Caterers</p>
                </div>
            <Table>
            <thead>
              <tr>
                <th data-field="id">S/N</th>
                <th data-field="name">Business Name</th>
                <th data-field="price">Contact Person</th>
                <th data-field="number">Number</th>
                <th data-field="email">Email</th>
                <th data-field="status">Status</th>
                <th data-field="ratings">Ratings</th>
                <th data-field="manage">Manage</th>
              </tr>
            </thead>
            <tbody>
                {caterer}
            </tbody>
            </Table>
            </div>
        )
    }
}
export default ViewCaterer;
