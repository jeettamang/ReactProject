import React from "react";
import axios from "axios";
import Layout from "../../components/layout/Layout";
import Form from './components/form/Form';
import { baseUrl } from "../../config";

const AddBlog = () => {

  const handleCreateBlog = async (data) => {
    console.log(data)
    try {
      const response = await axios.post(`${baseUrl}/blog`, data, {
        
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": localStorage.getItem('token')
          
        }
       
      });
      console.log(response)

      console.log("Blog created:", response.data);
    } catch (error) {
      console.error("Error creating blog:", error);
     
    }
  }
  
  return (
    <Layout>
    <Form type='Create'onSubmit={handleCreateBlog}/>
    </Layout>
  );
};

export default AddBlog;
