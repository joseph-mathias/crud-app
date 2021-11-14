import React from "react";
import "./form.css";

function Form() {
  return (
    <div>
      <form action="">
        <div className="movieName">
          <label htmlFor="movie">Movie Name</label>
          <input type="text" className="movieInput" placeholder="Money Heist" />
        </div>
        <div className="description">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="btn-container">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
