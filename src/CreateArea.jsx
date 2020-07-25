import React from "react";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
function CreateArea(props) {

  return (
    <div>
      <form className="create-note">
        <input name="title" placeholder="Title" onChange={props.onTitleChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={props.onContentChange}/>
        <Zoom in="true"><Fab type="none" name="data" onClick={props.onClick}><AddRoundedIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
