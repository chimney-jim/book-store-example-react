import React from 'react'
import {connect} from 'react-redux'
import * as bookActions from './bookActions'
import BookForm from './BookForm'

class Book extends React.Component {
  constructor(props) {
    super(props)
  }

  submitBook(input) {
    this.props.createBook(input)
  }

  render() {
    let titleInput

    return(
      <div className="row">
        <div className="col-md-6">
          <h3>Books</h3>
          <table className="table">
            <thead>
              <th>
                <td>Title</td>
                <td></td>
              </th>
            </thead>
            <tbody>
            {this.props.books.map((b, i) => <tr key={i}>
              <td>{b.title}</td>
            </tr> )}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <h3>New Book</h3>
          {/* Import and inject Book form */}
         <BookForm submitBook={this.submitBook.bind(this)} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: book => dispatch(bookActions.createBook(book))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)
