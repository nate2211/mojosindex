import {Container, Flex, FormControl, FormErrorMessage, FormHelperText, HStack, Text, Tooltip} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {FaStar} from "react-icons/fa";

export const BarReview = ({rating, sum = 0}) => {
    return(
        <Flex alignItems='center' justifyContent='space-between'>
            <Container  backgroundColor='#f1f1f1' color='white' w='5em' h='1rem' p='0' position='relative'>
                <Container style={sum === 0 ? {width: `${(rating/5) * 100}%`}: {width: `${(rating/sum) * 100}%`}} backgroundColor='yellow' p='0' h='1rem' position='absolute' left='0'>
                </Container>
            </Container>
        {sum !== 0 && <Text w='40px' textAlign='right'>{Math.round((rating/sum) * 100)}%</Text>}
        </Flex>
    )
}


export const Star = ({selected = false, onSelect = f => f}) => (
    <FaStar color={selected ? 'yellow' : 'gray'} onClick={onSelect}/>
);

export const StarRating = ({totalStars = 5, setValue, current = 0}) => {
    const [selectedStars, setSelectedStars] = useState(current)
    useEffect(() =>{
        setValue(selectedStars)
    }, [selectedStars])
    return(
        <Container>
                <HStack>
                    {[...Array(totalStars)].map((n, i) => {
                        return(<Star
                            key={i}
                            selected={selectedStars > i}
                            onSelect={() => setSelectedStars(i+1)}/>)
                    })}
                    <Text>
                        {selectedStars}
                    </Text>
                </HStack>
        </Container>
    )

}

export function SelectedStarRating({selectedStars = 0}) {
    return(
        <HStack>
            {[...Array(5)].map((n, i) => {
                return(<Star key={i}
                             selected={selectedStars > i}
                    />
                )
            })}
        </HStack>
    )
}
