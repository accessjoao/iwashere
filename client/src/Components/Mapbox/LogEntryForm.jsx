import React from "react";
import "./mapbox.css";

const LogEntryFrom = () => {
  return (
    <form className="entry-form">
      <label for="title">Title</label>
      <input name="title" required />
      <label for="comments">Comments</label>
      <textarea name="comments" rows={3}></textarea>
      <label for="description">Description</label>
      <texarea name="description" rows={3}></texarea>
      <label for="image">Image</label>
      <input name="image" />
      <label for="visitDate">Visit Date</label>
      <input name="visitDate" type="date" />
      <button>I was here!</button>
    </form>
  );
};

export default LogEntryFrom;
