import React, { Component } from "react";

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    toggleAccordion = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    };

    render() {
        return (
            <div className="accordion">
                <div className="accordion-header">
                    <h4 style={{width: '1125px'}}>{this.props.name}</h4>
                    <h4 onClick={this.toggleAccordion}>{this.props.title}</h4>
                </div>
                {this.state.isOpen && (
                    <div className="accordion-content">{this.props.children}</div>
                )}
            </div>
        );
    }
}

export default Accordion;
