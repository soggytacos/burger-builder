import React, {Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.show !== this.props.show;
    // }

    // componentWillUpdate() {
    //     console.log('[Modal] WillUpdate');
    // }

    render() {
        return (
            <Aux>
                <Backdrop show={this.show} clicked={this.modalClosed}/>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.show ? '1' : '0'
                    }}>
                    {this.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;

