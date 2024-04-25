import React from 'react';

class ChildComponent extends React.Component {
    render() {
        return (
            <div className='ui centered card'>
                <div className='field'>
                    <label>{this.props.buttonName}</label>
                </div>
                <button
                    className={`ui basic ${this.props.buttonColor} button`}
                    onClick={this.props.changeButtonColor}
                >
                    Submit!
                </button>
            </div>
        );
    }
}

export default ChildComponent;
