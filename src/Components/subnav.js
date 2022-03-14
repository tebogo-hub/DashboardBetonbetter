import React from 'react';

function Subnav() {
    return (
        <div className="subnav">
            <ul className="nav nav" style={{ display: 'flex', justifyContent: 'space-around',}}>
                <li style={{ marginTop: '10px',}}>Name</li>
                <li style={{ marginTop: '10px',}}>Email</li>
                <li style={{ marginTop: '10px',}}>Phone</li>
                <li style={{ marginTop: '10px',}}>Ngo Name</li>
                <li style={{ marginTop: '10px',}}>Address</li>
                <li style={{ marginTop: '10px',}}>City</li>
            </ul>
            <ul className="nav nav" style={{ display: 'flex', justifyContent: 'space-around',}}>
                <li style={{ marginTop: '10px',}}>Name</li>
                <li style={{ marginTop: '10px',}}>Email</li>
                <li style={{ marginTop: '10px',}}>Phone</li>
                <li style={{ marginTop: '10px',}}>Ngo Name</li>
                <li style={{ marginTop: '10px',}}>Address</li>
                <li style={{ marginTop: '10px',}}>City</li>
            </ul>
        </div>
    )
}

export default Subnav;
