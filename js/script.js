const root = new Vue({
    el: '#root',
    data: {
        newTodo: '',
        searchTerm: '',
        todos: [
            {
                text: 'Comprare il pane',
                done: false,
            },
            {
                text: 'Dare da mangiare al pesce rosso',
                done: false,
            },
            {
                text: 'Fare un buca in giardino',
                done: false,
            },
            {
                text: 'Tirare sassi in mare',
                done: false,
            },
        ],
    },
    methods: {
        deleteTodo(index) {
            this.todos.splice(index, 1);
        },
        addTodo() {
            if (this.newTodo.trim()) {
                this.todos.push({ text: this.newTodo, done: false });
            }
            this.newTodo = '';

        },
        showItem(text) {
            if (!this.searchTerm || this.searchTerm.trim() === "") {
                return true;
            };
            const filter = this.searchTerm.trim().toLowerCase();
            text = text.toLowerCase();
            return text.includes(filter);
        },
        toggleDone(index) {
            const updatedTodo = this.todos.map((todo, todoIndex) => {
                if (todoIndex === index) {
                    todo.done = !todo.done;
                }
                return todo;
            });
            this.todos = updatedTodo;

        },
        isDone(index) {
            return this.todos[index].done;
        },
    },
});