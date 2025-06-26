import { StrictMode, useState } from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Zoom } from '@mui/material';



function CreateArea(props) {

  const [note, setNote] = useState({
    title: '',
    content: ''
  })

  const [isExpand, setIsExpand] = useState(false);

  function handleChange(e) {

    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function handleExpanded() {
    setIsExpand(true);
  }

  function submitNote(e) {
    e.preventDefault();
    if (note.title.trim() !== '' && note.content.trim() !== '') {
      props.onAdd(note);
      setNote({
        title: '',
        content: ''
      })
      setIsExpand(false);
    } else {
      alert("Preencha todos os campos!");
    }
  }

  return (
    <>
      <form>

        <input name="title"
          value={note.title}
          placeholder="Título"
          onChange={handleChange}
          onClick={handleExpanded}
        />

        {
          isExpand ? <>
            <textarea name="content"
              value={note.content}
              placeholder="descrição"
              rows={ isExpand ? 3 : null}
              onChange={handleChange}
            />
            <Zoom in={true}>
              <button onClick={submitNote}>
                <AddOutlinedIcon />
              </button>
            </Zoom>
          </> : null

        }


      </form>
    </>
  )
}

export default CreateArea;