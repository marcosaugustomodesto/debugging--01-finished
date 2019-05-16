import React, {Component} from 'react';
import Auxilary from '../../../hoc/Auxilary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';


class Person extends Component { 
    constructor(props){
        super(props)
        this.inputElement = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        //this.inputElement.focus();
        this.inputElement.current.focus();
        console.log(this.context.authenticated);
    }
    
    render(){
        console.log('[Person.js] rendering...');  
        return (
            <Auxilary>

                {this.context.authenticated ? 
                <p>Authenticated!</p>: 
                <p>Please log in</p>}

                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="i2">{this.props.children}</p>
                <input 
                    key="i3"
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElement}
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
