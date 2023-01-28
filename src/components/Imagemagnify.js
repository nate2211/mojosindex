import React, {Children, useState} from "react";
import {
    Button,
    Container, FormControl, FormLabel, Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Stack,
    Text, useDisclosure
} from "@chakra-ui/react";


export function ImageMagnifier({src, magnifierHeight = 150, magnifieWidth = 150, zoomLevel = 1.5, children}) {
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    function onMouseEnter(e){
        const elem = e.currentTarget;
        const { width, height } = elem.getBoundingClientRect();
        setSize([width, height]);
        setShowMagnifier(true);
    }

    function onMouseMove(e){
        const elem = e.currentTarget;
        const { top, left } = elem.getBoundingClientRect();

        // calculate cursor position on the image
        const x = e.pageX - left - window.pageXOffset;
        const y = e.pageY - top - window.pageYOffset;
        setXY([x, y]);
    }

    function onMouseLeave(){
        setShowMagnifier(false);
    }

    return (
        <>
            {React.cloneElement(children, {
                onTouchEnter: onMouseEnter,
                onTouchLeave: onMouseLeave,
                onTouchMove: onMouseMove,
                onMouseEnter: onMouseEnter,
                onMouseMove: onMouseMove,
                onMouseLeave: onMouseLeave,
                onClick: onOpen

            })}
            <Container
                style={{
                    display: showMagnifier ? "" : "none",
                    position: "absolute",

                    // prevent magnifier blocks the mousemove event of img
                    pointerEvents: "none",
                    // set size of magnifier
                    height: `${magnifierHeight}px`,
                    width: `${magnifieWidth}px`,
                    // move element center to cursor pos
                    top: `${y - magnifierHeight / 2}px`,
                    left: `${x - magnifieWidth / 2}px`,
                    opacity: "1", // reduce opacity so you can verify position
                    border: "1px solid lightgray",
                    backgroundColor: "white",
                    backgroundImage: `url('${Children.toArray(children)[0].props.src}')`,
                    backgroundRepeat: "no-repeat",

                    //calculate zoomed image size
                    backgroundSize: `${imgWidth * zoomLevel}px ${
                        imgHeight * zoomLevel
                    }px`,
                    zIndex: `${isOpen ? "10": "1"}`,
                    //calculate position of zoomed image.
                    backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
                    backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
                }}
            />
            <Modal isOpen={isOpen} onClose={onClose} size={['xs', 'sm', 'md', 'lg', 'xl']}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <ImageMagnifier>
                            {React.cloneElement(children, {w: "100%", h: "100%", fit: "fill"})}
                        </ImageMagnifier>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
