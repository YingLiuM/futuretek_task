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
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <img src={book.coverImageUrl} alt={book.title}/>
        
        </>
    )
}

export default BookCard