import React, { Component } from "react";
import PropTypes from "prop-types";
import { Responsive, WidthProvider } from "react-grid-layout";
import { connect } from "react-redux";
import { Grid, Card, Icon, IconButton, Button } from "@material-ui/core";
import {Breadcrumb, EgretProgressBar, SimpleCard} from "egret";
import GridItemContainer from "./GridItemContainer";

import { setBreakPoint } from "../../../redux/actions/GridLayout";
// import {Card} from "@material-ui/core";

const ResponsiveGridLayout = WidthProvider(Responsive);

class GridLayout extends Component {
    handleBreakPointChange = breakpoint => {
        this.props.setBreakPoint(breakpoint);
    };

    render() {
        const { data, layouts } = this.props;
        console.log('layouts', layouts)
        console.log('data', data)
        return (
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                onBreakpointChange={this.handleBreakPointChange}
                isDraggable
                isRearrangeable
                isResizable
                draggableHandle=".grid-item__title"
                breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            >
                {/*{data.map(item => <GridItemContainer key={item} item={item} />)}*/}
                {data.map(item => <div className={`grid-item`} key={item}>
                    <SimpleCard title={item}>
                        {item}
                    </SimpleCard>
                </div>)}
            </ResponsiveGridLayout>
        );
    }
}

GridLayout.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
    layouts: PropTypes.object.isRequired
};

export default connect(null, { setBreakPoint })(GridLayout);
