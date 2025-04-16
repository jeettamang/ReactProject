import React from "react";
import Layout from "../../components/layout/Layout";
import Card from "./components/card/Card";
const Home = () => {
  return (
    <Layout>
  <div className="flex space-x-3 flex-wrap justify-center mt-5">
  <Card/>
    <Card/>
    <Card/>
    <Card/>
 
    
  </div>
    </Layout>
  );
};

export default Home;
