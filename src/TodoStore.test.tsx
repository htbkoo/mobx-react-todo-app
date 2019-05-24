import {TodoStore} from "./TodoStore";

describe("TodoStore", function () {
    it("should compute size accordingly", () => {
        // given
        const store = new TodoStore();
        expect(store.size).toEqual(0);

        // when
        store.addTodo("todo1");

        // then
        expect(store.size).toEqual(1);
    });
});