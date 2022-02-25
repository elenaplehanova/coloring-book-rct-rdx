import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withColoringBookService } from "../hoc";
import { compose } from "../../utils";
import { fetchPictures } from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import Picture from "../picture";
import "./picture-gallery.scss";

class PictureGallery extends Component {
    render() {
        const { pictures } = this.props;

        return (
            <div className="container">
                {pictures.map((picture) => (
                    <Picture key={picture.id} picture={picture} />
                ))}
            </div>
        );
    }
}

class PictureGalleryContainer extends Component {
    componentDidMount() {
        this.props.fetchPictures();
    }
    render() {
        const { pictures, loading, error } = this.props;
        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return <PictureGallery pictures={pictures} />;
    }
}

const mapStateToProps = ({ pictureList: { pictures, loading, error } }) => {
    return {
        pictures,
        loading,
        error,
    };
};

const mapDispatchToProps = (dispatch, { coloringBookService }) => {
    return bindActionCreators(
        {
            fetchPictures: fetchPictures(coloringBookService),
        },
        dispatch
    );
};

export default compose(
    withColoringBookService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PictureGalleryContainer);
