import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { addTodo, editTodo, deleteTodo } from '../app/todoSlice';
import { Task } from '../types';
import { Todo } from './Todo';

export function List() {
   const todos = useSelector((state: RootState) => state.todos.todos);
   const dispatch = useDispatch<AppDispatch>();
   const [filter, setFilter] = useState('all'); // Локальное состояние для выбора статуса фильтрации

   const addTodoHandler = () => {
      dispatch(addTodo({
         id: Date.now(),
         title: '',
         date: new Date().toLocaleDateString(),
         status: 'opened'
      }));
   };

   const editTodoHandler = (id: number, updatedTodo: Task) => {
      dispatch(editTodo({ id, updatedTodo }));
   };

   const deleteTodoHandler = (id: number) => {
      dispatch(deleteTodo(id));
   };

   const toggleStatusHandler = (id: number) => {
      dispatch(toggleStatus(id));
   };

   const selectStatusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setFilter(value); // Обновляем выбранный статус фильтрации
   };

   // Функция для фильтрации задач в соответствии с выбранным статусом
   const filteredTodos = todos.filter(todo => {
      if (filter === 'opened') {
         return todo.status === 'opened';
      } else if (filter === 'completed') {
         return todo.status === 'completed';
      } else {
         return true;
      }
   });

   return (
      <>
         <p>Todo List</p>
         <select className="form-select" defaultValue='all' onChange={selectStatusHandler}>
            <option value="all">All</option>
            <option value="opened">Opened</option>
            <option value="completed">Completed</option>
         </select>
         <button onClick={addTodoHandler}>Add Todo</button>
         <ul>
            {filteredTodos.map(todo => (
               <Todo
                  key={todo.id}
                  todo={todo}
                  editTodo={editTodoHandler}
                  deleteTodo={deleteTodoHandler}
                  toggleStatus={toggleStatusHandler}
               />
            ))}
         </ul>
      </>
   );
}



// import React, { useState } from 'react';
// import { Todo } from './Todo';

// export function List() {
//   const [todos, setTodos] = useState([
//     { id: 1, title: 'Task 1', date: '01.04', status: 'opened' },
//     { id: 2, title: 'Task 2', date: '02.04', status: 'completed' },
//     { id: 3, title: 'Task 3', date: '03.04', status: 'opened' },
//   ]);

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const editTodo = (id, updatedTodo) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, ...updatedTodo } : todo
//       )
//     );
//   };

//   const toggleStatus = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, status: todo.status === 'opened' ? 'completed' : 'opened' } : todo
//       )
//     );
//   };

//   const selectStatus = (e) => {
//     const value = e.target.value;
//     if (value === 'opened') {
//       setTodos(todos.filter(todo => todo.status === 'opened'));
//     } else if (value === 'completed') {
//       setTodos(todos.filter(todo => todo.status === 'completed'));
//     } else {
//       setTodos([...todos]);
//     }
//   };

//   return (
//     <>
//       <p>Todo List</p>
//       <select className="form-select" defaultValue='all' onChange={selectStatus}>
//         <option value="all">All</option>
//         <option value="opened">Opened</option>
//         <option value="completed">Completed</option>
//       </select>
//       {todos.map(todo => (
//         <Todo
//           key={todo.id}
//           todo={todo}
//           editTodo={editTodo}
//           deleteTodo={deleteTodo}
//           toggleStatus={toggleStatus}
//         />
//       ))}
//     </>
//   );
// }
// src/components/List.tsx
// // src/components/List.tsx
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState, AppDispatch } from '../app/store';
// import { addTodo, editTodo, deleteTodo } from '../app/todoSlice';
// import { Task } from '../types';
// import { Todo } from './Todo';

// export function List() {
//    const todos = useSelector((state: RootState) => state.todos.todos);
//    const dispatch = useDispatch<AppDispatch>();

//    const addTodoHandler = () => {
//       dispatch(addTodo({
//          id: Date.now(),
//          title: '',
//          date: new Date().toLocaleDateString(),
//          status: 'opened'
//       }));
//    };

//    const editTodoHandler = (id: number, updatedTodo: Task) => {
//       dispatch(editTodo({ id, updatedTodo }));
//    };

//    const deleteTodoHandler = (id: number) => {
//       dispatch(deleteTodo(id));
//    };

//    const toggleStatusHandler = (id: number) => {
//       dispatch(toggleStatus(id));
//    };

//    const selectStatusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = e.target.value;
//     if (value === 'opened') {
//        setFilteredTodos(todos.filter(todo => todo.status === 'opened'));
//     } else if (value === 'completed') {
//        setFilteredTodos(todos.filter(todo => todo.status === 'completed'));
//     } else {
//        setFilteredTodos(todos);
//     }
//  };
 

//    return (
//       <>
//          <p>Todo List</p>
//          <select className="form-select" defaultValue='all' onChange={selectStatusHandler}>
//             <option value="all">All</option>
//             <option value="opened">Opened</option>
//             <option value="completed">Completed</option>
//          </select>
//          <button onClick={addTodoHandler}>Add Todo</button>
//          <ul>
//             {todos.map(todo => (
//                <Todo
//                   key={todo.id}
//                   todo={todo}
//                   editTodo={editTodoHandler}
//                   deleteTodo={deleteTodoHandler}
//                   toggleStatus={toggleStatusHandler}
//                />
//             ))}
//          </ul>
//       </>
//    );
// }