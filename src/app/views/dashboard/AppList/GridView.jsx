import React from "react";
import { Card, Icon, Grid, Checkbox, Button } from "@material-ui/core";

const calculateColumnPerRow = value => {
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

// {
//   company: "We Plan X",
//   id: 1,
//   appImage: "/assets/images/products/headphone-2.jpg",
//   appName: "Plan X",
//   description: 'Planning app',
//   type: 'plan-x'
// },

const GridView = ({ list = [], sliderValue, createBlock }) => {
  return (
    <div className="grid-view">
      <Grid container spacing={2}>
        {list.map((item, index) => (
          <Grid item sm={calculateColumnPerRow(sliderValue)} key={item.id}>
            <Card className="grid__card flex-column h-100" elevation={6}>
              <div className="grid__card-top text-center">
                <img src={item.appImage} alt="project" />
                <div className="grid__card-overlay flex-column">
                  <div className="flex flex-middle flex-space-between">
                    <Checkbox className="text-white"></Checkbox>
                    <div className="flex flex-middle">
                      <Icon
                        fontSize="small"
                        className="mr-16 cursor-pointer text-white"
                      >
                        filter_none
                      </Icon>
                   
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
    </div>
  );
};

export default GridView;
