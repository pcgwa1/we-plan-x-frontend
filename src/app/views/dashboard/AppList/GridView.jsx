import React from "react";
import { Card, Icon, Grid, Checkbox, Button } from "@material-ui/core";

const calculateColumnPerRow = value => {
  if (value < 15) {
    return 1;
  }
  if (value <= 25) {
    return 2;
  }
  if (value <= 50) {
    return 3;
  }
  if (value <= 75) {
    return 4;
  }
  if (value <= 100) {
    return 6;
  }
};



const GridView = ({ list = [], sliderValue, createBlock }) => {
  const [appDetails, setAppDetails] = React.useState({
    company: "",
    id: 1,
    appImage: "",
    appName: "",
    description: '',
    type: ''
  },);
  return (
    <div className="grid-view">
      <Grid container spacing={2}>
        <Grid item sm={9}>
          <Grid container spacing={2}>
            {list.map((item, index) => (
              <Grid item sm={calculateColumnPerRow(sliderValue)} key={item.id} onClick={() => setAppDetails(item)}>
                <Card className="grid__card flex-column h-100" elevation={6}>
                  <div className="grid__card-top text-center">
                    <img src={item.appImage} alt="project" />
                    <div className="grid__card-overlay flex-column">
                      <div className="flex flex-middle flex-space-between">
                        {/* <Checkbox className="text-white"></Checkbox> */}
                        <div className="flex flex-middle">
                          {/* <Icon
                            fontSize="small"
                            className="mr-16 cursor-pointer text-white"
                          >
                            filter_none
                          </Icon> */}
                      
                        </div>
                      </div>
                      <div className="flex flex-middle flex-center">
                        <Button
                          variant="outlined"
                          className="text-white"
                          style={{ borderColor: "white" }}
                          onClick={() => createBlock(item)}
                        >
                          Install App 
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="grid__card-bottom text-center py-8">
                    <p className="m-0">{item.appName}</p>
                    {/* <small className="date text-muted">{item.date}</small> */}
                    <small className="email text-muted">{item.company}</small>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item sm={3}>
          <Card className="grid__card flex-column " elevation={6}>
            <div className="grid__card_header text-left">
              <h5>Application details</h5>
            </div>
            
            <div className="grid_card_info">
              <p>Name: {appDetails.appName}</p>
              <p>Description: {appDetails.description}</p>
            </div>
          
          </Card>
          
        </Grid>
 
      </Grid>
    </div>
  );
};

export default GridView;
