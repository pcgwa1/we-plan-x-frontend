import React, { Component } from "react";
import { isMobile } from "utils";
import ListTopbar from "./ListTopbar";
import { getAllList } from "./ListService";
import ListView from "./ListView";
import GridView from "./GridView";
import { Hidden } from "@material-ui/core";

const apps = [
  {
    company: "We Plan X",
    id: 1,
    appImage: "/assets/images/apps/workflow.png",
    appName: "Plan X",
    description: 'Planning app',
    type: 'plan_x'
  },
  {
    company: "We Plan X",
    id: 2,
    appImage: "/assets/images/apps/notes.png",
    appName: "Note X",
    description: 'Note app',
    type: 'note_x'
  },
  {
    company: "We Plan X",
    id: 3,
    appImage: "/assets/images/apps/chat.png",
    appName: "Chat X",
    description: 'Chat app',
    type: 'chat_x'
  },
  {
    company: "We Plan X",
    id: 4,
    appImage: "/assets/images/apps/note.png",
    appName: "Task X",
    description: 'Task app',
    type: 'task_x'
  }
]

class AppList extends Component {
  originalList = apps;
  state = {
    textfieldValue: "",
    sliderValue: 30,
    list: apps,
    viewMode: "grid" // list, grid
  };

  handleInputChange = event => {
    event.persist();
    this.setState(
      {
        textfieldValue: event.target.value
      },
      () =>
        this.setState({
          list: this.originalList.filter(item =>
            item.projectName
              .toLowerCase()
              .match(event.target.value.toLowerCase())
          )
        })
    );
  };

  handleSldierChange = (event, value) => {
    this.setState({
      sliderValue: value
    });
  };

  handleViewChange = view => {
    this.setState({
      viewMode: view
    });
  };

  componentDidMount() {

  }

  render() {
    let { list, textfieldValue, sliderValue, viewMode } = this.state;
    return (
      <div className="list m-sm-30">
        <div className="mb-16">
          <ListTopbar
            viewMode={viewMode}
            handleViewChange={this.handleViewChange}
            handleInputChange={this.handleInputChange}
            handleSldierChange={this.handleSldierChange}
            sliderValue={sliderValue}
            textfieldValue={textfieldValue}
          ></ListTopbar>
        </div>
        <Hidden xsDown>
          {viewMode === "list" ? (
            <ListView list={list}></ListView>
          ) : (
            <GridView list={list} sliderValue={sliderValue} createBlock={this.props.createBlock}></GridView>
          )}
        </Hidden>

        <Hidden smUp>
          <GridView list={list} sliderValue={sliderValue} createBlock={this.props.createBlock}></GridView>
        </Hidden>
      </div>
    );
  }
}

export default AppList;
