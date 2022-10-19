import Auth from "components/Auth";
import Layout from "components/Layout";
import { NextPage } from "next";
import React from 'react'

const Index: NextPage = () => {
  return (
    <Layout title="Login">
      <Auth />
    </Layout>
  );
}

export default Index