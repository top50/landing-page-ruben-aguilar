import './App.css'
import Header from './components/Header'
import AppNavigator from './router/AppNavigator'

function App() {
   return (
    <main className="flex flex-col w-full h-auto">
     <AppNavigator /> 
     <Header />
    </main>
  )
}

export default App
