import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonColor1: 'blue',
            buttonColor2: 'blue',
            buttonName1: 'GO CHIEFS',
            buttonName2: 'GO 49ERS',
        };
    }

    changeButtonColor1 = () => {
        const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.setState({ buttonColor1: randomColor });
    }

    changeButtonColor2 = () => {
        const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.setState({ buttonColor2: randomColor });
    }

    render() {
        return (
            <div className='ui unstackable items'>
                <ChildComponent
                    buttonName={this.state.buttonName1}
                    buttonColor={this.state.buttonColor1}
                    changeButtonColor={this.changeButtonColor1}
                />
                <ChildComponent
                    buttonName={this.state.buttonName2}
                    buttonColor={this.state.buttonColor2}
                    changeButtonColor={this.changeButtonColor2}
                />
            </div>
        );
    }
}

export default ParentComponent;
