import "./App.css"
import { useState } from "react"
function App(){
const [text,settext]=useState(["남자 코트 추천","대전 맛집", "탑 1티어 챔프"])
const [num,setnum]=useState([0,0,0])
const[state,setstate]=useState(false)
const[input,setinput]=useState("")
const[title,settitle]=useState(0)

const onChangeinput=(value)=>{
    setinput(value)

}
const onChangetitle=()=>{
    let copy2=[...text]
    copy2.push((input))
    settext(copy2)
}

return(
<div className="App">
<div className="black-box">
    <h4>react-blog</h4>
</div>
{
    text.map(function(a,index){
     return(
    <div className="list" key={index}>
    <h4 onClick={()=>{
    setstate(!state);  settitle(index)}}>{text[index]} <span onClick ={(e)=>{
       
        e.stopPropagation();
        let copy1=[...num];
        copy1[index]=copy1[index]+1;
        setnum(copy1)}
    }>👍 </span> {num[index]}</h4>
    <p>2월 17일 발행</p>
    <button onClick={()=>{
    let del=[...text]
    del.splice(index,1)
    settext(del)


    } }>삭제</button>
</div>  )
    })
}
{
    state===true ? <Modal onChangeinput={onChangeinput} text={text} title={title} onChangetitle={onChangetitle}></Modal> : null
}

</div>
          

)
}
function Modal(props){
    return(
        <div className="modal">
            <h4>{props.text[props.title]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <input onChange={(e)=>{props.onChangeinput(e.target.value)}}></input>
            <button onClick={()=>props.onChangetitle()}>생성</button>


        </div>
    )

}
export default App; 
