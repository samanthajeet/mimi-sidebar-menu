import React, { Component } from 'react';
import SessionCard from '../ReusableComponents/SessionCard'

class Sessions extends Component {
    state = {  }
    render() { 
        const { list } = this.props; // destructor from props
        const sessions = list.map( (e) => ( // mapping over lists
            <SessionCard key={e.id} {...e} /> // return whole new component, spread element so componetns gets ALL properties
        ))
        return ( 
            <div style={{ border: '1px solid blue'}}>
                {sessions} 
            </div>
         );
    }
}
 
export default Sessions;