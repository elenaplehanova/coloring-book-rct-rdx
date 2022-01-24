import React from "react";
import ColoringPicture from "../coloring-picture";
import ColorPalette from "../color-palette";
import { useParams } from "react-router-dom";


const ColoringPage = () => {
    let { id } = useParams();

    return (
        <div>
            <ColorPalette />
            <ColoringPicture pictureId={id} />
        </div>
    );

}

export default ColoringPage;
