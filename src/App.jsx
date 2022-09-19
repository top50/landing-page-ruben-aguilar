import './App.css'
import Footer from './components/Footer'
import AppNavigator from './router/AppNavigator'

function App() {
   return (
    <main className="flex flex-col w-full h-screen">
     <AppNavigator /> 
     <Footer />
    </main>
  )
}

export default App
