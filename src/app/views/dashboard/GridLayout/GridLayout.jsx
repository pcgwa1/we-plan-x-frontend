import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import { connect } from "react-redux";
import { Button, Icon } from "@material-ui/core";

import {SimpleCard} from "egret";
import GridItemContainer from "./GridItemContainer";
import AddGridBlock from "./AddGridBlock";
import FirebaseAuthService from "../../../services/firebase/firebaseAuthService";

import { setBreakPoint, setLayout, setData, setType, setTitle} from "../../../redux/actions/GridLayout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};

function getFromLS(key) {
    let ls = {};
    if (global.localStorage) {
      try {
        ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
      } catch (e) {
        /*Ignore*/
      }
    }
    return ls[key];
  }
  
  function saveToLS(key, value) {
    console.log('save to local')
    if (global.localStorage) {
      global.localStorage.setItem(
        "rgl-8",
        JSON.stringify({
          [key]: value
        })
      );
    }
  }
class GridLayout extends Component {
    handleBreakPointChange = breakpoint => {
        this.props.setBreakPoint(breakpoint);
    };

    constructor(props) {
        super(props);
    
        this.state = {
          // layouts: JSON.parse(JSON.stringify(originalLayouts)),
          layouts: {},
          blocks: [],
          newCounter: 1,
          appData: null
        };
      }

      componentDidMount(){
        FirebaseAuthService.getLayoutData(this.props.uid).then(item => {
          if(item){
            const appNames = Object.keys(item.blocks);
            this.setState({ blocks: appNames, layouts: item.layouts, appData: item.blocks });
          } else {
            const { data, appData, layouts } = this.props;
            const appNames = Object.keys(appData);
            console.log(data, appNames)
            this.setState({ blocks: data, layouts: layouts, appData: appData });
          }
          
          // const { data, layouts } = this.props;
        });
        
      }
    
      static get defaultProps() {
        return {
          className: "layout",
          cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
          rowHeight: 30
        };
      }
    
      resetLayout() {
        const { layouts } = this.props;
        
        this.setState({ layouts: layouts });
      }

      saveToDb(layouts, num){

        this.setState({
          newCounter: num + 1 
        });

        Object.keys(layouts).forEach(key => {
          const result1 =  layouts[key].map(item => {
            let newItem = {}
            Object.keys(item).forEach(itemkey => {
              if(item[itemkey] !== undefined){
                newItem[itemkey] = item[itemkey]
              }
              
            });
            return newItem;
          })
          layouts[key] = result1
        })

        if(this.state.newCounter > 2){
          this.props.setLayout(layouts);
          saveToLS("layouts", layouts);
          this.setState({ layouts });
          
          FirebaseAuthService.updateGridLayout(layouts, this.state.blocks, this.props.uid)
        }
        
       
      }

      onAddBlock(layouts, block) {
        let lg = layouts.lg

        const blockName = `${block.type}`;
        const layoutData = {
          lg: this.state.layouts.lg.concat(         {
                  w: 4,
                  h: 2,
                  x: lg[lg.length - 1].x === 8 ? 0 : lg[lg.length - 1].x === 4 ? 8 : lg[lg.length - 1].x === 0 ? 4 : 0,
                  y: lg[lg.length - 1].x === 8 ? lg[lg.length - 1].y + 2 : lg[lg.length - 1].y,
                  i: blockName
              }),
          md: this.state.layouts.md.concat(   {
                  w: 3,
                  h: 2,
                  x: 0,
                  y: 0,
                  i: blockName
              }),
          sm: this.state.layouts.sm.concat(     {
                  w: 3,
                  h: 2,
                  x: 0,
                  y: 0,
                  i: blockName
              }),
          xs: this.state.layouts.xs.concat({
                  w: 4,
                  h: 2,
                  x: 0,
                  y: 0,
                  i: blockName
              })
        }
        this.props.setLayout(layoutData);
         // name, data, obj key
        this.props.setTitle({ key: blockName, value: blockName , item: 'title' })
        // , setType, setTitle
        this.props.setType({ key: blockName, value: 'blank' , item: 'type' })
        this.props.setData({ key: blockName, value: [] , item: 'data' })
        this.setState({ 
          blocks: this.state.blocks.concat(blockName), 
          layouts: layoutData,
        });
      }

    render() {
        return (
          <div className="dashboard-grid-layout">
            <div className="dashboard-grid-layout-actions">
            {/*  */}
                <AddGridBlock onAddBlock={(lyts, blk) => this.onAddBlock(lyts, blk)}  layouts={this.state.layouts} />
            </div>
            <ResponsiveReactGridLayout
                className="layout"
                layouts={this.state.layouts}
                onBreakpointChange={this.handleBreakPointChange}
                breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                isBounded={true}
                onLayoutChange={(layout, layouts) => {
                    this.saveToDb(layouts, this.state.newCounter)
                  }
                }
            >
                {this.state.blocks.map(item => 
                  <div className={`grid-item`} key={item} data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}>
                      <SimpleCard title={item}>
                          {item}
                      </SimpleCard>
                  </div>)}
            </ResponsiveReactGridLayout>
          </div>
        );
      }
}

GridLayout.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
    layouts: PropTypes.object.isRequired,
    uid: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  uid: state.user.user.uid
});

export default connect(mapStateToProps, { setBreakPoint, setLayout, setData, setType, setTitle })(GridLayout);
