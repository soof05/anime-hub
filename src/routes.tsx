import { createBrowserRouter } from "react-router-dom";
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import AnimeDetailPage from './pages/AnimeDetailPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {index: true, element: <HomePage/> },
            {path: '/games/:id', element: <AnimeDetailPage/>}
        ]
    }
])

export default router;