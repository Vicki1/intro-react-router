import React  from 'react';


export default function StoreLanding(props) {
        return (
            <div className='App'>
                <div className='App-header'>
                    <h2>Welcome to the Store Landing Page</h2>
                </div>
                {props.children}
             </div>
        );
    
}