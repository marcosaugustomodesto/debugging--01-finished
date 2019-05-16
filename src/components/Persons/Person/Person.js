import React, {Component} from 'react';
import Auxilary from '../../../hoc/Auxilary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import PropTypes from 'prop-types';

class Person extends Component {  
    render(){
        console.log('[Person.js] rendering...');  
        return (
            <Auxilary>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="i2">{this.props.children}</p>
                <input 
                    key="i3"
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Auxilary>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
export default withClass(Person, classes.Person);
