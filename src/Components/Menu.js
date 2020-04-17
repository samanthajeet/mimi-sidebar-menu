import React, { Component } from 'react';

class Menu extends Component {
    state = { 
        names: false,
        sam: false
     }

    toggleShow = (e) => {
        const prop = e.target.id // e.target.id gets id property from element
        this.setState({
            [prop]: !this.state[prop] // toggles property
        })
    }

    render() { 
        // const menuData = data.map( e => {
        //     return (
        //         <h4 onClick={this.toggleShow} id={e.name}>{e.name}</h4>
        //     )
        // })
        return ( 
            <div>
                <h1 onClick={this.toggleShow} id="names">Names</h1>
                <div className={this.state.names ? '' : 'dont-show'}>
                    <h4 onClick={this.toggleShow} id="sam">Sam</h4>
                        <div className={this.state.sam ? '' : 'dont-show'}>
                            more menu stuff
                        </div>
                    <h4>Rob</h4>
                    <h4>Mimi</h4>
                </div>
            </div>
         );
    }
}
 
export default Menu;