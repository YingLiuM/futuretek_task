import './App.css'
import BookCard from './components/BookCard'
import BookCatalog from './components/BookCatalog'
import { dummyBooks } from './data'


function App() {
  
  return (
    <>
    
    <BookCatalog books = {dummyBooks} />
    
    
    </>
   
  )
}

export default App
