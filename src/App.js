import {useState } from 'react';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form'
import Result from './Components/Result/Result';
function App() {
  const [dataForCalculate, setDataForCalculate] = useState([]);
  
  const  saveDateHandler =(data)=>{
    setDataForCalculate(data)
  }
  console.log(dataForCalculate)
  return (
    <div>
      <Header/>
      <Form saveDate = {saveDateHandler}/>
      {dataForCalculate.length !== 0 ? <Result data={dataForCalculate} /> : null}
    </div>
  );
}

export default App;

