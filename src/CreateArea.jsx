import React from "react";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
function CreateArea(props) {

  return (
    <div>
      <form className="create-note">
      {props.focus?<input name="title" placeholder="Title" onChange={props.onTitleChange} />:null}
        <textarea onFocus={props.onFocus} name="content" placeholder="Take a note..." rows={props.focus?"3":"1"} onChange={props.onContentChange}/>
        {props.focus?<Zoom in="true"><Fab type="none" name="data" onClick={props.onClick}><AddRoundedIcon/></Fab></Zoom>:null}
      </form>
    </div>
  );
}

export default CreateArea;
