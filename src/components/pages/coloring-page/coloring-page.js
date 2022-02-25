import React, { useEffect, useContext } from "react";
import ColoringPicture from "../../coloring-picture";
import ColorPalette from "../../color-palette";
import { useParams } from "react-router";
import Context from "../../../context";
import "./coloring-page.scss";

const ColoringPage = () => {
    let { id } = useParams();
    const { pictureId, setPictureId } = useContext(Context);

    useEffect(() => {
        id !== pictureId && setPictureId(id);
    });

    return (
        <div className="coloring-page-container">
            <ColorPalette />
            <ColoringPicture pictureId={id} />
        </div>
    );
};

export default ColoringPage;
