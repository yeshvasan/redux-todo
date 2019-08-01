import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../Actions/ActionCreator';
import {bindActionCreators} from 'redux';

class CreateTodo extends Component {
    constructor(props){
        super(props);
        this.state={
            todotext:''
        }
        this.onChangeTodoText = this.onChangeTodoText.bind(this);
    }
    onChangeTodoText(e){
        this.setState({
            todotext:e.target.value
        });
    }
    render() {
        return (
            <div className="form-group row">
            <div className="col-sm-10">
                <input className="form-control" required type="text"  placeholder="what needs to be done?" onChange={this.onChangeTodoText} value={this.state.todotext} type="text"  />
                <button type="button" onClick={()=>this.setState({todotext:''})} style={{marginTop:"25px", marginRight:"15px"}} className="btn btn-danger">cancel</button>
                <button type="button" onClick={()=>{this.props.addTodo(this.state.todotext); this.setState({todotext:''})}} style={{marginTop:"25px"}} className="btn btn-success">Add Todo</button>
            </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateTodo)