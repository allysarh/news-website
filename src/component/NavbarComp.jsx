import React from 'react';

class NavbarComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav className="navbar d-flex justify-content-between">
                <div style={{ width: '100%', borderBottom: '1px solid grey' }}>
                    <ul className="d-flex justify-content-between align-items-center" style={{ listStyleType: 'none' }}>
                        <li>Subscribe</li>
                        <li>
                            <h2 style={{fontFamily: 'Georgia'}}>Tribun News</h2>
                        </li>
                        <li className="d-flex align-items-center">
                            <span class="material-icons">
                                search
                            </span>
                            <button className="btn btn-outline-secondary">
                                Sign Up
                            </button>
                        </li>
                    </ul>
                </div>
                <div style={{width: '100%', marginTop: "1%"}}>
                    <ul className="d-flex justify-content-around align-items-center" style={{ listStyleType: 'none' }}>
                        <li>World</li>
                        <li>U.S.</li>
                        <li>Technology</li>
                        <li>Design</li>
                        <li>Culture</li>
                        <li>Business</li>
                        <li>Politics</li>
                        <li>Opinion</li>
                        <li>Science</li>
                        <li>Health</li>
                        <li>Style</li>
                        <li>Travel</li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavbarComp;