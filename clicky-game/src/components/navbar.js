import React from 'react';

class Navbar extends React.Component {

    displayTitle = () => {
        var text = '';
        if (this.props.arraylength === 0 && this.props.topscore !== 0) {
            text = 'You guessed wrong, game over!'
        } else if (this.props.arraylength === 0 && this.props.topscore === 0) {
            text = "Click an image to begin!"
        } else if (this.props.currentscore !== 0) {
            text = "You guessed correctly!"
        }
        return text;
    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h2 className="navbar-brand" href="#">Clicky Game</h2>
                <h5 className="nav-link m-auto" href="#">{this.displayTitle()}</h5>
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <h6 class="nav-link align-right" href="#">Score: {this.props.currentscore}</h6>
                        </li>
                        <li className="nav-item">
                            <h6 className="nav-link disabled" href="#" tabindex="-1">Top Score: {this.props.topscore}</h6>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;




