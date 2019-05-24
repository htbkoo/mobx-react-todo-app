import {observable} from "mobx";

export class Todo {
    readonly id = Math.random();
    @observable title = "";
    @observable finished = false;

    constructor(title: string) {
        this.title = title;
    }
}