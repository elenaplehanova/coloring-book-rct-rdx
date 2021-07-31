import React from "react";
import { ColoringBookServiceConsumer } from "../coloring-book-service-context";

const withColoringBookService = () => (Wrapped) => {
    return (props) => {
        return (
            <ColoringBookServiceConsumer>
                {(coloringBookService) => {
                    return <Wrapped {...props} coloringBookService={coloringBookService} />;
                }}
            </ColoringBookServiceConsumer>
        );
    };
};

export default withColoringBookService;
