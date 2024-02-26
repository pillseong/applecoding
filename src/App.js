import "./App.css"
import { useState } from "react"
function App(){
  const [text,settext]=useState("남자코트추천");
  const [text2,settext2]=useState("강남 우동맛집");
  const [text3,settext3]=useState("파이썬독학");


  return(
    <div className="App">
      <div className="black-box">
        <h4>react blog</h4>
      </div>
    <div className="list">
    <h4>{text}</h4>
    <p>2월 17일 발일</p>
    </div>
    <div className="list">
    <h4>{text2}</h4>
    <p>2월 17일 발일</p>
    </div>
    <div className="list">
    <h4>{text3}</h4>
    <p>2월 17일 발일</p>
    </div>
    </div>
  )
}
export default App;