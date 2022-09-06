import './App.css';
import React,{useState,useEffect} from 'react'
import axios from 'axios'
function App() {
const[valyes,SetValues]= useState([]);
useEffect(()=>{
  const res=axios.get(`https://jsonmock.hackerrank.com/api/moviesdata/search`).then((res)=>{
    console.log(res,"Data");
    SetValues(res.data.data);
  })
  .catch((err)=>{
    console.log(err);
  })
},[])
const [input, setInput] = useState(""); 
const wordsToCorrect = { 
    appel: "apple", 
    henlo: "hello", 
    google: "goggle" ,
    realy:"really",
    wierd:"weird"
  };

function checkForWordMatch(e) {
    let allWords = e.split(" ");
    let lastTypedWord = allWords[allWords.length - 1];
    let currentTextLength = e.length;
    let wordToReplace = wordsToCorrect[lastTypedWord];
    if (wordsToCorrect[lastTypedWord] !== undefined) {
       e = e.slice(0, currentTextLength - lastTypedWord.length) + wordToReplace;
     }

setInput(e);

} 
  return (
  <div>
{/* {console.log("The relative position is adjusted relative to itself, without changing the layout . True")} */}
<input type="text" onChange={(event) => checkForWordMatch(event.target.value)} value={input}  style={{height:"10vh",width:"20vw",margin:"3vh",fontSize:"3vh"}}>
            </input> 
  </div>
  );
}

export default App;
