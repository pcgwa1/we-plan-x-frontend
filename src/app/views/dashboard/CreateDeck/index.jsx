import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 600,
    height: 600
  },
}));

export default function TransitionsModal({ open, handleClose, createDeck }) {
  const classes = useStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };
const [name, setName] = React.useState(null);

// useEffect(() => {
//   if(decks.length) setCurrentDeck(decks[0].name)
  
// }, [ decks ]);

  const handleCreateDeck = () => {
    createDeck(name);
    handleClose();
  };

  const handleSubmit = (values) => {
    console.log("handleSubmit:: ", values);
  };

  const handleChange = (chnage) => {
    console.log("chnage:: ", chnage);
    setName(chnage)
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Create Deck</h2>
            {/* <p id="transition-modal-description">react-transition-group animates me.</p> */}
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField id="standard-basic" label="Standard" name="name" onChange={(e) => handleChange(e.target.value)}/>
            </form>
            <button type="button" onClick={() => handleCreateDeck()} disabled={!name} >Create</button>
            <button type="button" onClick={() => handleClose()}>Close</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
