import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withColoringBookService } from "../hoc";
import { compose } from "../../utils";
import { colorAddedToPath, fetchPicture } from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./coloring-picture.css";

const ColoringPicture = ({ picture, fillColors, onFill }) => {
    return (
        <div className="coloring-picture">
            <svg className="svg-picture" key={picture.id}>
                {picture.paths.map((path, index) => {
                    return (
                        <path
                            key={path.id}
                            d={path.d}
                            strokeWidth="0"
                            stroke="black"
                            onClick={() => onFill(index)}
                            fill={fillColors[index]}
                        />
                    );
                })}
            </svg>
        </div>
    );
};

class ColoringPictureContainer extends Component {
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
            return <ColoringPicture picture={picture} fillColors={fillColors} onFill={onFill} />;
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
)(ColoringPictureContainer);
