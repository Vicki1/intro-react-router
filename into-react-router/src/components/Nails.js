import React from 'react';


export default function Nails(props) {
        return (
            <div className='App'>
                <div className='App-header'>
                    <h2>Welcome to the Nails Page</h2>
                </div>
                {props.children}
             </div>
        );
    
}