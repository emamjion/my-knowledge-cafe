import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className='first-ques'> 
                <h2>Difference Between Props and State</h2>
                <p>
                    Props gets passed to the component. On the other side, State is managed within the component.<br/>
                    Props are read only but State can be changed.<br/>
                    Props are used to comunicate between components but State can used to display changes with the component.
                </p>
            </div>
            <div className='first-ques'> 
                <h2>How does useState work?</h2>
                <p>useState hook helps us to have state variables in function components. 
                    Thus the function components are not stateless anymore. useState is a function that accepts the initial state as an argument and returns a state value and a function to update this value. This ensures that the React preserves the state between re-renders. The useState hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these.
                </p>
                <p>

                </p>
            </div>
            <div className='first-ques'> 
                <h2>useEffect what works other than loading data?</h2>
                <p>
                    useEffect works directly updating the DOM, and timers
                </p>
            </div>
            <div className='first-ques'> 
                <h2>How does react work?</h2>
                <p>
                    React internally maintains a Virtual DOM. If something changes, when it is modified, then it compares the chain coming with its Virtual DOM, understands which place will change with Diff Algorithm, and updates the Actual DOM with the minimum amount to change.
                </p>
            </div>
        </div>
    );
};

export default Footer;