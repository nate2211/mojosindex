import {Box, Flex, Heading} from "@chakra-ui/react";
import {useRef, useState} from "react";
import {Transition} from "react-transition-group";
import {keyframes} from "@emotion/react";
import {flash} from "react-animations";

export function BoxOverlay({children, link}){
    const nodeRef = useRef(null);
    const duration = 300;
    const [inProp, setProp] = useState(false)
    const flashAnimation = keyframes`${flash}`;
    const defaultStyle = {
        transition: `backgroundColor ${duration}ms ease-in-out`,

    }

    const transitionStyles = {
        entering: { backgroundColor: 'lightgray', opacity: 1 },
        entered:  { backgroundColor: 'lightgray',opacity: 1,animation: `2s ${flashAnimation} ease-in-out` },
        exiting:  { backgroundColor: 'darkgray',opacity: .55 },
        exited:  { backgroundColor: 'darkgray', opacity: .55}
    };

    return(
        <Box onMouseEnter={() => setProp(true)} onMouseLeave={() => setProp(false)}>
            <Transition nodeRef={nodeRef} timeout={duration} in={inProp}>
                {state => (
                    <Flex boxSize='22.5rem' ref={nodeRef} style={{...defaultStyle, ...transitionStyles[state]}}>
                        <Heading m='auto' alignSelf='center'>{children}</Heading>
                    </Flex>
                )}
            </Transition>
        </Box>
    )
}