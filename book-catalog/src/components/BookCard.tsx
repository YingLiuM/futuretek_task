import "./BookCard.css"
import { Book } from "../Book";

// interface Book{
//     // 这里导入的是data.ts里的内容
//     id: string,
//     title:string,
//     author:string,
//     coverImageUrl:string,
//     isBestSeller:boolean,
//     genre:string,
// }

interface Props {
    book : Book  // 这里使用的是上面的interface Book
    //name: string

}

function BookCard({book}:Props) {
    return (
        <>
            {/* <h1>Book Card</h1> */}
            <div className="book-card">
            <h2>{book.author}</h2>
            {book.isBestSeller && <p>Best Seller</p>}
            <img src={book.coverImageUrl} alt={book.title}/>

            </div>
        </>
    )
}

export default BookCard