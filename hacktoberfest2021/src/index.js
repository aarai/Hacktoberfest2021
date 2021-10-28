import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: [], text: '' };
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(e) {
        e.preventDefault();
        this.setState({ 
        	todos: [ this.state.text, ...this.state.todos ],
        	text: ''
        });
    }

    removeTodo(name, i){
        let todos = this.state.todos.slice();
        todos.splice(i, 1);
        this.setState({
            todos
        });
    }

    updateValue(e) {
        this.setState({ text: e.target.value})
    }

    render() {
        return(
            <div>
                <h1>Todo List</h1>  
                <TodoList todos={this.state.todos} removeTodo={this.removeTodo}/>
                <form onSubmit = {(e) => this.addTodo(e)}>
                    <input
                        placeholder="Add Todo"
                        value={this.state.text}
                        onChange={(e) => {this.updateValue(e)}}
                    />
                    <button className="btn" type="submit">Add Todo</button>
                </form>
            </div>
        );
    }
}

class TodoList extends React.Component {

    removeItem(item, i) {
        this.props.removeTodo(item, i);
    }

    render() {
        return(
            <ul>
                { this.props.todos.map((todo,i) => {
                    return <li key={i}>{ todo } <button className="btn2" onClick={() => { this.removeItem(todo, i)}}>Delete</button></li>
                })}
            </ul>
        );
    }
}

//ReactDOM.render(<Todos/>, document.getElementById('app'))


// ========================================

ReactDOM.render(
    <Todos />,
    document.getElementById('root')
);
