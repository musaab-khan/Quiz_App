import '../styles/App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

/*component imports*/
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';

/* react routes */
const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>
  },
  {
    path:'/quiz',
    element:<Quiz/>
  },
  {
    path:'/result',
    element:<Result/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
