import React, { useState } from "react";
import "./mapbox.css";
import { useForm } from "react-hook-form";
import { createLogEntry } from "../../FrontApi";

const LogEntryFrom = ({ location, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      data.latitude = location.latitude;
      data.longitude = location.longitude;
      await createLogEntry(data);

      onClose();
    } catch (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
      {error ? <h3 className="error">{error}</h3> : null}
      <label htmlFor="title">Title</label>
      <input {...register("title", { required: true })} />
      <label htmlFor="comments">Comments</label>
      <textarea {...register("comments")} rows={3}></textarea>

      <label htmlFor="image">Image</label>
      <input {...register("image")} />
      <label htmlFor="visitDate">Visit Date</label>
      <input {...register("visitDate")} type="date" />

      <button disabled={loading}>
        {loading ? "Loading..." : "I Was Here"}
      </button>
    </form>
  );
};

export default LogEntryFrom;
