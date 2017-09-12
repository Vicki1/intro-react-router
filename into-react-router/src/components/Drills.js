import React from 'react';


export default function Drills(props) {
        return (
            <div className='App'>
                <div className='App-header'>
                    <h2>Welcome to the drills Page</h2>
                </div>
                {props.children}
             </div>
        );
    
}