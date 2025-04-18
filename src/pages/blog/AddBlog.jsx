import React from "react";
import axios from "axios";
import Layout from "../../components/layout/Layout";
import Form from './components/form/Form';
import { baseUrl } from "../../config";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigation=useNavigate()

  const handleCreateBlog = async (data) => {
    console.log(data)
    try {
      const response = await axios.post(`${baseUrl}/blog`, data, {
        
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": localStorage.getItem('token')
          
        }
       
      });
      if(response.status===201){
        navigation.navigate('/')
      }else{
        alert("Something went wrong")
      }

    
    } catch (error) {
   alert(error.response.data.message)
     
    }
  }
  
  return (
    <Layout>
    <Form type='Create'onSubmit={handleCreateBlog}/>
    </Layout>
  );
};

export default AddBlog;
