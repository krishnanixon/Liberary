import React, { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router } from "react-router-dom";

import Layout from './component/Layout'
import Pagelink from './component/Pagelink';
import { books } from './component/utils';

const App = () => {

  const [data, setData] = useState(books)

  useEffect(() => { }, [data])

  return (
    <>
      <Router>
        <Layout>
          <Pagelink data={data} setData={setData} />
        </Layout>
      </Router>
    </>
  )
}

export default App
