import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState("");

  const getData = async () => {
    const response = await axios.get('http://localhost:3000/tarefas');
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }),[];

  return (
    <div>{data}</div>
  )
}



export default App;
