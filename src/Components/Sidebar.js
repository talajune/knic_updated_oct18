import * as React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import SearchBar from './SearchBar';

// import Button from '@mui/material/Button';
// <Button variant="contained">Query History</Button>;

export default props => {
  return (

    <Menu>
      <div>
      <a className="menu-item">
      <b>Current Task/State</b>
      </a>
      </div>

      <div>
      <a className="menu-item">
        <b>General Q&A</b>
      </a>
      </div>

      <div>
      <a className="menu-item">
      <b>Situation Specific Q&A</b>
      </a>
      </div>

      <div>
      <a className="menu-item">
        <b>Personalized Queries</b>
      </a>
      <SearchBar/>
      </div>
      
      <div id="query_history"> 
      <a className="menu-item">
      Query History 
      </a>
      </div>
    </Menu>
  );
};