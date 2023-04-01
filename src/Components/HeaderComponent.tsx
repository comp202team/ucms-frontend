import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a  className="navbar-brand" style={{textAlign:'center'}}>Mustafa - Berke - Tim - Azim</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent