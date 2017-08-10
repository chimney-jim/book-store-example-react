import Axios from 'axios'

const apiUrl = 'http://5983c991409c6600117a6c06.mockapi.io/api/books/books'

export const fetchBooksSuccess = (books) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    books
  }
}

export const fetchBooks = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(fetchBooksSuccess(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
}

export const createBook = (book) => {
  return {
    type: 'CREATE_BOOK',
    book: book
  }
}
