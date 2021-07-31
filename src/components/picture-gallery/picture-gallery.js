import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withColoringBookService } from "../hoc";
import { compose } from "../../utils";
import { fetchPictures } from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./picture-gallery.css";
import _ from "lodash";

const Picture = ({ picture }) => {
    return (
        <div className="hovereffect">
            <svg className="svg-picture">
                {picture.paths.map((path) => {
                    return (
                        <path
                            key={path.id}
                            d={path.d}
                            strokeWidth="0"
                            stroke="black"
                            fill="white"
                        />
                    );
                })}
            </svg>
            <div className="overlay">
                <h2>{picture.title}</h2>
                <Link to={`/coloring_page/${picture.id}`}>
                    <div className="info">start</div>
                </Link>
            </div>
        </div>
    );
};

class PictureGallery extends Component {
    render() {
        const { pictures } = this.props;
        const size = 3;
        const picturesChunked = _.chunk(pictures, size);
        return (
            <div id="carouselColoringPictures" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner ">
                    {picturesChunked.map((picturesIn, index) => {
                        return (
                            <div
                                key={index}
                                className={"carousel-item " + (index === 0 ? "active" : "")}
                            >
                                <div className="carousel-sheet">
                                    {picturesIn.map((picture) => {
                                        return (
                                            <div key={picture.id}>
                                                <Picture picture={picture} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselColoringPictures"
                    role="button"
                    data-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselColoringPictures"
                    role="button"
                    data-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
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
