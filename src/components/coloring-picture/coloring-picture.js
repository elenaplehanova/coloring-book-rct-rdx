import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withColoringBookService } from "../hoc";
import { compose } from "../../utils";
import { fetchPicture } from "../../redux/actions/coloring-picture";
import { colorAddedToPath } from "../../redux/actions/color-path";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import SvgPicture from "../svg-picture";

import "./coloring-picture.scss";

class ColoringPicture extends Component {
    componentWillMount() {
        const { pictureId, fetchPicture } = this.props;
        fetchPicture(pictureId);
    }

    render() {
        const { picture, loading, error, fillColors, onFill } = this.props;

        if (loading) {
            return <Spinner />;
        }
        if (error) {
            return <ErrorIndicator />;
        }

        if (picture) {
            return <SvgPicture picture={picture} fillColors={fillColors} onFill={onFill} />;
        }
    }
}

const mapStateToProps = ({
    colorPath: { fillColors },
    coloringPicture: { picture, loading, error },
}) => {
    return {
        fillColors,
        picture,
        loading,
        error,
    };
};

const mapDispatchToProps = (dispatch, { coloringBookService }) => {
    return bindActionCreators(
        {
            fetchPicture: fetchPicture(coloringBookService),
            onFill: colorAddedToPath,
        },
        dispatch
    );
};

export default compose(
    withColoringBookService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ColoringPicture);
