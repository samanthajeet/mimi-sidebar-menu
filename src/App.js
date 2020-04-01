import React, {Component} from 'react';
import './App.css';
import SideBarMenu from './ReusableComponents/SideBarMenu';

export const menuContent =[
  {
      icon: 'icon-class-name',
      label: 'Dogs',
      content: [
          {
              icon: 'icon-class-name',
              label: 'Random',
              to: '#another-link',
          },
          {
              icon: 'icon-class-name',
              label: 'Cats',
              to: '#another-link',
          },
      ],
  },
  {
      icon: 'icon-class-name',
      label: 'Menu2 Item',
      content: [
          {
              icon: 'icon-class-name',
              label: 'Sub Menu of Second Item',
              to: '#another-link',
          },
          {
              icon: 'icon-class-name',
              label: 'Sub Menu of Second Item',
              to: '#another-link',
          },
      ],
  },
];


class App extends Component {
  state = { 
    rawMenuData: null
  }

  componentDidMount(){
    
  }

  formatMenuData(){

  }


  render() { 
    return ( 
      <div className="App">
        <SideBarMenu content={menuContent} />
      </div>
     );
  }
}
 
export default App;


