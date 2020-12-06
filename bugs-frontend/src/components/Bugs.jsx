import React from 'react';
import StoreContext from '../contexts/storeContext';
import {loadBugs} from '../store/bugs';


class Bugs extends React.Component{
  static contextType = StoreContext;

  state = { bugs: [] }
  
  componentDidMount(){
    //Subscribe to the store
    //dispatch the loadBugs action to 
    // console.log(this.context, 'SOY CONTEXT')
    const store = this.context;
    this.unsubscribe = store.subscribe(() => {
      const bugsInStore = store.getState().entities.bugs.list;
      if( this.state.bugs !== bugsInStore) this.setState({bugs: bugsInStore});
    });
    store.dispatch(loadBugs());
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){

    return(
      <ul>
        {this.state.bugs.map(bug => <li key={bug.id}>{bug.description}</li>)}
      </ul>
    )
  }
}

export default Bugs;

// Bugs.contextType = StoreContext;