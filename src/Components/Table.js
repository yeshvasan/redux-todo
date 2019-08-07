import React, { Component } from 'react';
import {connect} from 'react-redux';
import {FaTrash, FaCheckCircle} from 'react-icons/fa';
import { deleteTodo,toggleTodo,setVisibilityFilter} from "../Actions/ActionCreator";
import {bindActionCreators} from 'redux';
import {ShowAll, ShowCompleted, ShowActive} from '../Actions/ActionTypes';
class Table extends Component {
    render() {
        return (
            <div className="col-lg-10 offset-lg-1 col-md-10 col-sm-10 col-xs-12 re">
            <nav aria-label="breadcrumb" >
                <ol className="breadcrumb nav d-flex justify-content-center">
                <li className="breadcrumb-item cur"  onClick={()=>this.props.setVisibilityFilter(ShowAll)}>
                All
                </li>
                
                <li className="breadcrumb-item cur" onClick={()=>this.props.setVisibilityFilter(ShowCompleted)}>
                Completed
                </li>
                <li className="breadcrumb-item cur" onClick={()=>this.props.setVisibilityFilter(ShowActive)}>
                Active
                </li>
                </ol>
            </nav>
                {this.props.todos.length !==0?(
                    <table  className="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Todos</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        {this.props.todos.map(todo=>(
                            <tr key={todo.id}>
                                <td style={{color:todo.completed?"green":"none"}}>
                                    {todo.text} {todo.completed === true?"(completed)":""}
                                </td>
                                <td>
                          
                                    <FaTrash className="fa" onClick={()=>this.props.deleteTodo(todo.id)} />
                                    <FaCheckCircle className="fa" onClick={() => this.props.toggleTodo(todo.id)} />
                                    
          
                                </td>
                            </tr>
                        ))}
                    </table>
                    ) : (
          <div
            style={{ marginTop: "50px" }}
            className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1"
          >
            <div className="alert alert-danger" role="alert">
              Todo List is empty or Filter results show no results
            </div>
          </div>
        )}{" "}
      </div>
    );
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case ShowAll:
      return todos;
    case ShowCompleted:
      return todos.filter(t => t.completed);
    case ShowActive:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  return { todos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
 };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteTodo,
      toggleTodo,
      setVisibilityFilter
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);

