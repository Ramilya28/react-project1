// import React from 'react';
// import './App.css';
// import { List } from './components/List';

// function App() {
//   return (
//     <>
//       <List />
//     </>
//   );
// }

// export default App;

// App.tsx

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { List } from './components/List';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <List />
      </div>
    </Provider>
  );
}

export default App;
