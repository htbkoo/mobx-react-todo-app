import React from 'react';
import {observable} from "mobx";
import {observer} from "mobx-react";

import './App.css';
import {Todo} from "./Todo";
import {TodoStore} from "./TodoStore";

interface TodoListComponentProps {
    todoStore: TodoStore
}

@observer
class TodoListComponent extends React.Component<TodoListComponentProps> {
    render() {
        const {todoStore} = this.props;
        return (
            <div>
                {todoStore.todos.map((todo, idx) => (
                    <TodoItemComponent todo={todo} key={`${todo.title}_${todo.id}_${idx}`}/>))}
                #Tasks: {todoStore.numRemaining} / {todoStore.size}
            </div>
        )
    }
}

function TodoItemComponent({todo}: { todo: Todo }) {
    return (
        <div>
            <input type="checkbox" checked={todo.finished} onChange={() => todo.finished = !todo.finished}/>
            {todo.title}
        </div>
    )
}

@observer
class TodoAddComponent extends React.Component<TodoListComponentProps> {
    @observable private task: string = '';

    handleTaskChange = ({currentTarget: {value}}: React.SyntheticEvent<HTMLInputElement>) => {
        this.task = value;
    };

    handleAddTodo = () => {
        this.props.todoStore.addTodo(this.task);
        this.task = '';
    };

    render() {
        return (
            <div>
                <label>New Task</label>
                <input value={this.task} onChange={this.handleTaskChange}/>
                <button onClick={this.handleAddTodo}>Add</button>
            </div>
        )
    }
}

const todoStore = new TodoStore();

const App: React.FC = () => {
    return (
        //<Provider todoStore={todoStore}>
        //</Provider>
        <div className="App">
            <TodoAddComponent todoStore={todoStore}/>
            <TodoListComponent todoStore={todoStore}/>
        </div>
    );
};

export default App;
