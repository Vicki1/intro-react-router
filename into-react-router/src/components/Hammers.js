import React from 'react';


export default function Hammers(props) {
        return (
            <div className='App'>
                <div className='App-header'>
                    <h2>Welcome to the Hammer Page</h2>
                </div>
                {props.children}
             </div>
        );
    
}