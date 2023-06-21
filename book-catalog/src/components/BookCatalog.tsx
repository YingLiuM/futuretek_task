import "./BookCatalog.css";
import BookCard from "./BookCard";
import { Book } from "../Book";

// interface Book{
//     id: string,
//     title: string,
//     author: string,
//     coverImageUrl:string,
//     isBestSeller: boolean,
//     genre: string,
// }

interface Props {
    books : Book[] 
    

}
function BookCatalog({books}:Props) {
    return (
        <>
            <h1>Book Catalog</h1>
            <div className = 'book-catalog'>

                {books.map((books) => 
                    <BookCard 
                    key={books.id}
                    book ={books}/>
                )}    
            </div>   
        </>
    )
}

export default BookCatalog