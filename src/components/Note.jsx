import React from "react";
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled } from "@mui/material";

function Note(props) {

  function handleDelete(e) {
    e.stopPropagation();
    props.onDelete(props.id);
  }

  function handleChecked() {
    props.onClick(props.id);
  }


  return (
    <div className="note" style={{
      textDecoration: props.checked ? "line-through" : "none",
      opacity: props.checked ? 0.6 : 1,
      cursor: "pointer",
    }}
    >
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className='btn-delete' onClick={handleDelete}>
        <DeleteForeverTwoToneIcon />
      </button>
      <button className={props.checked ? 'btn-delete' :'btn-checked'} onClick={handleChecked}>
        {props.checked ? <CancelIcon /> : <CheckBoxIcon />}
      </button>
    </div>
  )
}

export default Note;