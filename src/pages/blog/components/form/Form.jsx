import React from "react";
import { useState } from "react";

const Form = ({ type,onSubmit}) => {
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: "",
  });
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: name === "image" ? evt.target.files[0] : value,
    });
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    onSubmit(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <h3 className="font-bold uppercase text-5xl">
          {type} <br />a Blog
        </h3>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="title"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="title"
            name="title" onChange={handleChange}
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="subtitle"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Subtitle
          </label>
          <input
            type="subtitle"
            id="subtitle"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="subtitle"
            name="subtitle" onChange={handleChange}
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="file"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Upload files
          </label>
          <input
            type="file"
            id="file"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Upload"
            name="file" onChange={handleChange}
            
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            category{" "}
          </label>
          <input
            type="category"
            id="category"
            placeholder="category" onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
            name="description" onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
