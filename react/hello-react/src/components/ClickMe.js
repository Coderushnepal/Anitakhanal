import React from 'react';
import withCounter from './hoc/withCounter';

class ClickMe extends React.Component {
    render() {
        return (
         <>
         <h3> Click Count : {this.props.count} </h3>
         <button onClick = {this.props.onIncrease}> Click Me </button>
         </>
        )
    }
}export default withCounter(ClickMe);