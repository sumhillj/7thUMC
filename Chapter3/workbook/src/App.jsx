import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './pages/home';
import MoviesPage from './pages/movies';
import NotFound from './pages/not-found';
import RootLayout from './layout/root-layout';

const router = createBrowserRouter([ // 원하는 path에 어떤 element를 보여줄지 정의함
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <NotFound/>, // errorElement: 없는 경로 처리
        children: [ 
          {
            index: true, // 위에 있는 path: '/' 즉, 홈 경로를 의미한다
            element: <HomePage/>
          },
          { // 부모의 path가 '/'이니까 '/'를 붙여주지 않아도 '/movies'랑 동일하게 동작한다
            path: 'movies/:movieId', // '/:'을 활용하여 동적으로 바뀌는 부분의 이름을 정의 (movies/1, movies/2...)
            element: <MoviesPage/>
          }
        ]
    }
])

function App() {
    return <RouterProvider router={router}/> // createBrowserRouter에서 만든 router 전달
}

export default App
