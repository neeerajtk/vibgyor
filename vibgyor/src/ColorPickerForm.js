import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import PaletteFormNav from "./PaletteFormNav";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import DraggableColorList from "./DraggableColorList";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import { arrayMove } from "react-sortable-hoc";

class ColorPickerForm extends Component {
    render() {
        const {paletteIsFull} = this.props;
        return (
            <div>
                <ChromePicker
                color={this.state.currentColor}
                onChangeComplete={this.updateCurrentColor}
                    />
              <ValidatorForm onSubmit={this.addNewColor} ref='form'>
                <TextValidator
                value={this.state.newColorName}
                name='newColorName'
                onChange={this.handleChange}
                validators={["required", "isColorNameUnique", "isColorUnique"]}
                errorMessages={[
                    "Enter a color name",
                    "Color name must be unique",
                    "Color already used!"
                ]}
                />
                <Button
                variant='contained'
                type='submit'
                color='primary'
                disabled={paletteIsFull}
                style={{
                    backgroundColor: paletteIsFull
                    ? "grey"
                    : this.state.currentColor
                }}
                >
                {paletteIsFull ? "Palette Full" : "Add Color"}
                </Button>
            </ValidatorForm>
            </div>
        )
    }
}

export default  ColorPickerForm;