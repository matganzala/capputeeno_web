import { Navbar } from './components/navbar';
import './index.css';
import AppRouter from './routes';

function App() {

  return (
    <>
      <div className='bg-[#F0F0F5] font-saira min-h-screen min-w-screen'>
        <Navbar />
        <div className='flex flex-col items-center'>
          <AppRouter />

        </div>
      </div>
    </>
  )
}

export default App
