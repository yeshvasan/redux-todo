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
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 m-auto">
                        <div className="card border border-danger m-2 mt-5 p-4">
                           <form>
                           <div className="form-group">
            <div className="col-md-10 m-auto">
                <input className="form-control"   placeholder="what needs to be done?" onChange={this.onChangeTodoText} value={this.state.todotext}  required   />
                <div className="d-flex justify-content-around" required>
                <button  type="button" onClick={()=>this.setState({todotext:''})}  className="btn btn-danger">cancel</button>
                <button  type="submit" onClick={()=>{this.props.addTodo(this.state.todotext); this.setState({todotext:''})}}  className="btn btn-success">Add Todo</button>
                </div>
            </div>
            </div>
                           </form>
                        </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateTodo)