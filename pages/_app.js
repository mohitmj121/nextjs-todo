import Footer from '@/components/Footer'
import Header from '@/components/Header'
import {TodoProvider} from '../context/TodoContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <TodoProvider>
  <Header/>
  <div className="container mx-auto min-h-screen">
  <Component {...pageProps} />
  </div>
  <Footer/>
  </TodoProvider>
  </>
  )
}
