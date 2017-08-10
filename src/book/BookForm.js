import React from 'react';

const BookForm = (props) => {
    // Collector variables
    let titleInput = null;
    return (
      <form onSubmit={e => {
            e.preventDefault();
            // Assemble data into object
            var input = {
              title: titleInput.value
            };
            // Call method from parent component
            // to handle submission
            props.submitBook(input);
            // Reset form
            e.target.reset();
          }}
            className="form-horizontal"
      >
        <div className="input-group">
          <label className="col-sm-2 control-label">Title: </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="title"
              ref={node => titleInput = node}
              className="form-control" />
          </div>
        </div>
        <br/>
        <div className="input-group">
          <div className="col-sm-offset-2 col-sm-10">
            <input type="submit" className="btn btn-default"/>
          </div>
        </div>
      </form>
    );
};

export default BookForm;
