import React,{useState}from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [notesContent,changeNotesContent]=useState([{
    title:"Note title",
    content:"Note content"
  }])
  var notetitle
  var notecontent
  function makeNote(notesContent,index){
  return  <Note title={notesContent.title} content={notesContent.content} key={index} onClick={()=>handleDelete(index)}/>
  }
  function handleDelete(key){
    changeNotesContent(prevValue=>{
      return prevValue.filter((item,index)=>{ return index!==key;})
    })
  }
  function handleTitleChange(event){
    notetitle=event.target.value
  }
  function handleContentChange(event){
    notecontent=event.target.value
  }
  function handleClick(e){
     e.preventDefault()
     changeNotesContent([...notesContent,{
       title:notetitle,
       content:notecontent}])
  }
  return (
    <div>
      <Header />
      <CreateArea onTitleChange={handleTitleChange} onContentChange={handleContentChange} onClick={handleClick}/>
      {notesContent.map(function(noteContent,index){
        return makeNote(noteContent,index)
      })}
      <Footer />
    </div>
  );
}

export default App;
