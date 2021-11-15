import React, { Component } from "react";
import {
  Grid,
  Card,
  IconButton,
  Icon,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Tooltip
} from "@material-ui/core";
import {
  Breadcrumb,
  SimpleCard,
  EgretProgressBar,
  EgretListItem1
} from "egret";
import EducationChart from "./EducationChart";
import GridLayout from "./GridLayout/GridLayout";
import {PropTypes} from "prop-types";
import {connect} from "react-redux";
import { toggleCreateDeck } from "../../redux/actions/DeckActions";
import CreateDeck from "./CreateDeck"

class OneDeck extends Component {


  state = {};
  render() {
    const { data, appData, layouts, openCreateDeck } = this.props;
    // console.log('layouts:: ', layouts);
    // console.log(data);

    return (
      <div className="dashboard-deck">
        {/* <div className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Dashboard", path: "/dashboard" },
              { name: "Deck" }
            ]}
          />
        </div> */}
        <GridLayout data={data} appData={appData} layouts={layouts} />
        <CreateDeck open={openCreateDeck} handleClose={this.props.toggleCreateDeck} />
      </div>
    );
  }
}

// export default LearningManagement;
const mapStateToProps = state => ({
  data: Object.keys(state.gridlayout.data),
  appData: state.gridlayout.data,
  layouts: { ...state.gridlayout.layouts },
  openCreateDeck: state.deck.toggle_create_deck,
});

export default connect(
    mapStateToProps,
    { toggleCreateDeck }
)(OneDeck);