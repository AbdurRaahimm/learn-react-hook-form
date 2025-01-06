import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

export default function RootLayout() {
  return (
    <>
    <Navbar/>
    <main className='py-8'>
        <Outlet/>
    </main>
    </>
  )
}
