import React from 'react';
import './style.css'


class Card extends React.Component {

    render() {
        return (
            <div className="card" >
                <div className="card-body">
                    <a id={this.props.key} href='#' onClick={() => this.props.addPerson(this.props.name)}>
                        <img src={this.props.photo} name={this.props.name} />
                    </a>
                </div>

            </div>
        )
    }
}

export default Card;
