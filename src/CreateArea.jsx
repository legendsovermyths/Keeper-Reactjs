import React from "react";

function CreateArea(props) {

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={props.onTitleChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={props.onContentChange}/>
        <button type="none" name="data" onClick={props.onClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
