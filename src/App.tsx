import React from 'react';
import {observable} from "mobx";
import {observer} from "mobx-react";

import './App.css';
import {Todo} from "./Todo";
import {TodoStore} from "./TodoStore";
import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";

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
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Is todo completed" checked={todo.finished}
                                         onChange={() => todo.finished = !todo.finished}/>
                </InputGroup.Prepend>
                <FormControl aria-label="Todo task title" disabled value={todo.title}/>
            </InputGroup>
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
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Add new task"
                        aria-label="Add new task"
                        aria-describedby="basic-addon2"
                        value={this.task}
                        onChange={event => this.task = event.currentTarget.value}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={this.handleAddTodo}>Add</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }
}

const todoStore = new TodoStore();

const App: React.FC = () => {
    return (
        <Container className="App">
            <Row>
                <Col>
                    <TodoAddComponent todoStore={todoStore}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TodoListComponent todoStore={todoStore}/>
                </Col>
            </Row>
        </Container>
    );
};

export default App;
