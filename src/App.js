import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import YouTubeMain from './pages/YouTubeMain';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement:<NotFound/>,
    children: [
      {
        index: true, element: <YouTubeMain/>
      },
      {
        
      }
    ]
  }
])

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  );
}

