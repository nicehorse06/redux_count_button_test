import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import components
import Show from '../components/Show';
import Btn from '../components/Btn';

// import action
import * as counterAction from '../actions/counterAction';

class Panel extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {counterReducer, counterAction} = this.props;

    return (
      <div>
        <Show number={counterReducer} />
        <Btn increment={counterAction.incrementAction} decrement={counterAction.decrementAction} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counterReducer: state.counterReducer
  }
}

//bindActionCreators(actionCreators, dispatch)可將函數中的兩者綁定，讓程式更佳簡潔，可以用react-redux的connect取代
const mapDispatchToProps = (dispatch) => {
  return {
    counterAction: bindActionCreators(counterAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
