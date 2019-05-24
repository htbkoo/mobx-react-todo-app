import React from 'react';
import {computed, observable} from "mobx";

import {Todo} from "./Todo";

class TodoStore {
    @observable readonly todos: Todo[] = [];

    @computed get size() {
        return this.todos.length;
        // return 0;
    }

    @computed get numRemaining() {
        return this.todos.filter(todo => !todo.finished).length;
    }

    public addTodo(title: string) {
        this.todos.push(new Todo(title));
    }
}

export {TodoStore};
