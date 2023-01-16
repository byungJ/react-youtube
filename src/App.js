import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ThumbDetail from './components/ThumbDetail';
import ThumbNailList from './components/ThumbNailList';
import NotFound from './pages/NotFound';
import Root from './pages/Root';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement:<NotFound/>,
    children: [
      { index: true, element: <ThumbNailList/>},
      { path: '/:videoId', element: <ThumbDetail/> },

    ]
  }
])

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

