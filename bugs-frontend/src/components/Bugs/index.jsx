import React from 'react';
import { connect } from 'react-redux';
import { getUnresolvedBugs, loadBugs, resolveBug } from '../../store/bugs';

class Bugs extends React.Component{

  componentDidMount(){
    this.props.loadBugs();
  }

  render(){
    return(
      <ul>
        {this.props.bugs.map((bug) => (
        <li key={bug.id}>{bug.description}
        <button onClick={() => this.props.resolveBug(bug.id)}>Resolved!</button>
        </li>
        ))}
      </ul>
    )
  }
}


//bugs: state.entities.bugs.list
const mapStateToProps = state => ({
  // bugs: state.entities.bugs.list,
  bugs: getUnresolvedBugs(state)
});

const mapDispatchToProps = dispatch => ({
  loadBugs: () => dispatch(loadBugs()),
  resolveBug: id => dispatch(resolveBug(id))
});


//Container component wraps our presentation component (Bugs)
export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
