import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className = "footer" style={{textAlign:"center"}}>
                    <span className="text-muted">School Management</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent