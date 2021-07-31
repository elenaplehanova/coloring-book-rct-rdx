import React, { Component } from "react";
import ColoringPicture from "../coloring-picture";
import ColorPalette from "../color-palette";

class ColoringPage extends Component {
    render() {
        const { pictureId } = this.props;

        return (
            <div>
                <ColorPalette />
                <ColoringPicture pictureId={pictureId} />
            </div>
        );
    }
}

export default ColoringPage;
