import './App.css'
import BookCard from './components/BookCard'
import BookCatalog from './components/BookCatalog'
import { dummyBooks } from './data'
import HookExample from './components/HookExample'


function App() {
  
  return (
    <>
    <HookExample/>
    
    <BookCatalog books = {dummyBooks} />
    
    
    </>
   
  )
}

export default App
