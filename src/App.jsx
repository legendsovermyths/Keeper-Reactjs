import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Tiles from "./NoteTiles"
import notes from "./notes.js"
function CreateTiles(note){
  return <Tiles
  key={note.id}
  title={note.title}
  content={note.content}
  />
}
function App(){
  return <div>
  <Header/>
  {notes.map(CreateTiles)}
  <Footer/>

  </div>
}
export default App
