import { Todo } from "../components-Todo/Todo"
import { TodoFilters } from "../components-TodoFilters"

const TodoList1 = ({ 
    todos,
    activeFilter,
    handleSetComplete,
    handleDelete,
    handleClearComplete,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos }) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {todos.map(todo => (
                    <Todo key={todo.id} todo={todo} handleSetComplete={handleSetComplete} handleDelete={handleDelete} />
            )
            )}
            <TodoFilters 
                activeFilter={activeFilter}
                total={todos.lenght}
                showAllTodos={showAllTodos}
                showActiveTodos={showActiveTodos}
                showCompletedTodos={showCompletedTodos}
                handleClearComplete={handleClearComplete}/>
        </div>
    )

}

export { TodoList1 }