import {Todo} from './Todo.tsx'

export function List() {
   return (
       <>
       <p> Todo List</p>
       <div>
       <button type="button" class="btn btn-secondary">Add</button>
       <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">All</option>
            </select>
       </div>
           <Todo />
       </>
   )
}
