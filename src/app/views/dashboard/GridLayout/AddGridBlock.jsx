import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import AppGridView from '../AppList'
import axios from "axios";

export const getAllList = () => {
  return axios.get("/api/list/all");
};
const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
    background: "rgba(0,0,0, 0.1)"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function FullScreenDialog({ onAddBlock, layouts }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [originalList, setOriginalList] = React.useState([]);
  const [list, setlist] = React.useState([]);


  // React.useEffect(() => {
  //   getAllList().then(response => {
  //     setOriginalList([...response.data]);
  //     setlist([...response.data]);

  //     console.log('response.data:: ', response.data)

  //   });
  // }, []);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {

    setOpen(false);
  }

  function createBlock(data) {
    onAddBlock(layouts, data);
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Apps
            </Typography>
            {/* <Button color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
        <AppGridView createBlock={createBlock} />
      </Dialog>
    </div>
  );
}
