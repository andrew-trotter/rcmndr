import { createRoot } from 'react-dom/client'
import { Suspense, lazy } from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Auth0Provider } from '@auth0/auth0-react'

import AppLayout from './components/AppLayout/AppLayout'
import ProtectedComponent from './components/UI/ProtectedComponent'
import Home from './Pages/Home/Home'
import Loading from './components/Loading/Loading'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
const ProfilePage = lazy(() => import('./Pages/ProfilePage/ProfilePage'))
const MyFriends = lazy(() => import('./Pages/MyFriends/MyFriends'))
const FindFriends = lazy(() => import('./Pages/FindFriends/FindFriends'))
const MySongs = lazy(() => import('./Pages/MySongs/MySongs'))
const ScanQR = lazy(() => import('./Pages/ScanQR/ScanQR'))

export const routes = createRoutesFromElements(
  <Route path="/" element={<AppLayout />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} />
    <Route
      path="find-friends"
      element={
        <Suspense fallback={<Loading />}>
          <ProtectedComponent component={FindFriends} />
        </Suspense>
      }
    />
    <Route
      path="my-friends"
      element={
        <Suspense fallback={<Loading />}>
          <ProtectedComponent component={MyFriends} />
        </Suspense>
      }
    />
    <Route
      path="profile"
      element={
        <Suspense fallback={<Loading />}>
          <ProtectedComponent component={ProfilePage} />
        </Suspense>
      }
    />
    <Route
      path="my-songs"
      element={
        <Suspense fallback={<Loading />}>
          <ProtectedComponent component={MySongs} />
        </Suspense>
      }
    />
    <Route
      path="scan"
      element={
        <Suspense fallback={<Loading />}>
          <ProtectedComponent component={ScanQR} />
        </Suspense>
      }
    />
  </Route>
)

function AppProvider() {
  return <RouterProvider router={createBrowserRouter(routes)} />
}

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      domain={import.meta.env.VITE_AUTH0_DOMAIN as string}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID as string}
      cacheLocation="localstorage"
      authorizationParams={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        audience: import.meta.env.VITE_AUTH0_AUDIENCE as string,
        redirect_uri: window.location.origin,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <AppProvider />
        </Suspense>
      </QueryClientProvider>
    </Auth0Provider>
  )
})
