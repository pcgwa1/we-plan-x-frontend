import React, { Component } from "react";
import {
  Breadcrumb,
  SimpleCard,
  EgretProgressBar,
  EgretListItem1
} from "egret";
import GridLayout from "./GridLayout/GridLayout";
import {PropTypes} from "prop-types";
import {connect} from "react-redux";
import { toggleCreateDeck } from "../../redux/actions/DeckActions";
import CreateDeck from "./CreateDeck"
import FirebaseAuthService from "../../services/firebase/firebaseAuthService";
class OneDeck extends Component {


  constructor(props) {
    super(props);

    this.state = {
      layouts: {},
      blocks: [],
      decks: [],
      currentDeck: null,
      deckIsChanging: false
    };
  }

  componentDidMount(){
    this.deckInit();
    
  }

  async deckInit() {
    FirebaseAuthService.getLayoutData(this.props.uid).then(async decks => {
      if(decks.length){
        const initDeck = decks[0]
        this.setState({ decks, currentDeck: initDeck});
      } else {
        const { blocks, layouts } = this.props;

        await FirebaseAuthService.createDeck(layouts, blocks, this.props.uid, "My Deck")

        const newDeck = await FirebaseAuthService.getLayoutData(this.props.uid)
        const initDeck = newDeck[0]
        this.setState({ decks: newDeck, currentDeck: initDeck});

      }
    });
  }

  async createDeck(name, blocks, layouts, uid) {
    // const { blocks, layouts } = this.props;

        await FirebaseAuthService.createDeck(layouts, blocks, uid, name)

        const newDeck = await FirebaseAuthService.getLayoutData(uid)
        const initDeck = newDeck[0]
        this.setState({ decks: newDeck, currentDeck: initDeck});
  }

  toggleDeck(index) {
        const initDeck = this.state.decks[index]
        this.setState({ currentDeck: initDeck, deckIsChanging: true});
  }

  toggleDeckChange(state) {
    this.setState({ deckIsChanging: state});
}

  render() {
    const { openCreateDeck, uid } = this.props;
    const { decks, currentDeck, blocks, layouts, deckIsChanging } = this.state;

    console.log('layouts:: ', layouts);
    console.log("blocks:: ", blocks);

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
        <GridLayout 
          blocks={currentDeck ? currentDeck.blocks : []} layouts={currentDeck ? currentDeck.layouts : {}} 
          decks={decks} currentDeck={currentDeck} 
          toggleDeck={(i) => this.toggleDeck(i)}
          deckIsChanging={deckIsChanging}
          toggleDeckChange={(state) => this.toggleDeckChange(state)}
        />
        <CreateDeck 
          createDeck={(name) => this.createDeck(name, this.props.blocks, this.props.layouts, uid)} 
          open={openCreateDeck} 
          handleClose={this.props.toggleCreateDeck}
        />
      </div>
    );
  }
}

// export default LearningManagement;
const mapStateToProps = state => ({
  data: Object.keys(state.gridlayout.data),
  blocks: state.gridlayout.data,
  layouts: { ...state.gridlayout.layouts },
  openCreateDeck: state.deck.toggle_create_deck,
  uid: state.user.user.uid
});

export default connect(
    mapStateToProps,
    { toggleCreateDeck }
)(OneDeck);