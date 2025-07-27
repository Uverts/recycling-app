import Header from './Header'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-y-auto bg-gray-50">
      <Header />
      <div className="flex-1 overflow-y-auto mt-5">
        <Outlet />
      </div>
    </div>
  )
}
