import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import AddIcon from '@material-ui/icons/AddCircleOutline';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus({ decks, toggleDeck }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentDeck, setCurrentDeck] = React.useState("");

  useEffect(() => {
    if(decks.length) setCurrentDeck(decks[0].name)
    
  }, [ decks ]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeDeck = (i) => {
    setCurrentDeck(decks[i].name)
    toggleDeck(i)
    handleClose()
  };

  console.log("anchorEl:: ", anchorEl)

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
        style={{ minWidth: 150}}
      >
        {currentDeck}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {decks.map((deck, i) => {
          return (
            <StyledMenuItem key={i} onClick={() => handleChangeDeck(i)}>
              {/* <ListItemIcon>
                <AddIcon fontSize="small" />
              </ListItemIcon> */}
              <ListItemText primary={deck.name} />
            </StyledMenuItem>
          )
        })}
        
      </StyledMenu>
    </div>
  );
}
