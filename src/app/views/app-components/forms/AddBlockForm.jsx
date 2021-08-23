import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  Button,
  Icon,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

class AddBlock extends Component {
  state = {
    name: "",
    firstName: "",
    email: "",
    date: new Date(),
    creditCard: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    block_type: "",
    agreement: ""
  };

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isPasswordMatch", value => {
      if (value !== this.state.password) {
        return false;
      }
      return true;
    });
  }

  componentWillUnmount() {
    // remove rule when it is not needed
    ValidatorForm.removeValidationRule("isPasswordMatch");
  }

  handleSubmit = event => {
    console.log("submitted:: ", this.state.name);
    console.log(event);
    this.props.createBlock({
      name: this.state.name
    })
  };

  handleChange = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDateChange = date => {
    console.log(date);

    this.setState({ date });
  };

  render() {
    let {
      name,
      block_type,
    } = this.state;
    const { createBlock, handleClose } = this.props
    return (
      <div>
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => null}
        >
          <Grid container spacing={6}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <TextValidator
                className="mb-16 w-100"
                label="Block Name"
                onChange={this.handleChange}
                type="text"
                name="name"
                value={name}
                validators={["required"]}
                errorMessages={["this field is required"]}
                fullWidth
              />

            </Grid>

            <Grid item lg={12} md={12} sm={12} xs={12}>
              <RadioGroup
                className="mb-16"
                value={block_type}
                name="block_type"
                onChange={this.handleChange}
                row
              >
                <FormControlLabel
                  value="ToDo"
                  control={<Radio color="secondary" />}
                  label="ToDo"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="List"
                  control={<Radio color="secondary" />}
                  label="List"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="Others"
                  control={<Radio color="secondary" />}
                  label="Others"
                  labelPlacement="end"
                />
              </RadioGroup>
            </Grid>
          </Grid>

          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Button color="secondary" type="button" onClick={() => handleClose()}>
                <Icon>close</Icon>
                <span className="pl-8 capitalize">Close</span>
              </Button>

            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Button color="primary" type="submit" disabled={!name}>
                <Icon>add</Icon>
                <span className="pl-8 capitalize">Add Block</span>
              </Button>

            </Grid>
          </Grid>
          
  

        </ValidatorForm>
      </div>
    );
  }
}

export default AddBlock;
