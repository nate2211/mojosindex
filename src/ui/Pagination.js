import {
    Avatar,
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Divider,
    Flex,
    Heading,
    HStack,
    Image,
    Link,
    List,
    ListItem,
    Text, Textarea,
} from "@chakra-ui/react";
import React, {useMemo, useRef, useState} from "react";
import {SelectedStarRating, StarRating} from "../components/Rating";
import {BiDotsHorizontal} from "react-icons/bi";
import {useAuthContext} from "../context/AuthContext";
import {OrderCard} from "../components/Cards";
import {useNavigate} from "react-router-dom";


export function OrderItems({order}){
    const PageSize = 4
    const [currentPage, setCurrentPage] = useState(1);

    const currentData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return order.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    return(<Flex flexDirection='column' alignItems='center'>
        <List>
            {currentData.map((item, i) => {
                return(
                    <OrderCard item={item} key={i}/>
                )
            })}
        </List>
        {order.length > 4 && <Pagination
            currentPage={currentPage}
            totalCount={order.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
        />}
    </Flex>)
}

export function WishListItems({wishlist}){
    const PageSize = 4
    const {removewishlist} = useAuthContext()
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate()
    const currentData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return wishlist.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    return(<Flex flexDirection='column' alignItems='center'>
            {currentData.map((item, i) => {
                item = item.variant
                return(<Box key={i}>
                    <HStack>
                        <Heading>{item.name}</Heading>
                        <Image src={`https://res.cloudinary.com/hsdvgholu/${item.image}`} boxSize={['4em', '5em', '10em']} onClick={() => navigate(`/product/${item.product}&${item.index}`)}/>
                        <Heading>${item.price}</Heading>
                        <Button colorScheme='red' onClick={() => removewishlist(item)}>X</Button>
                    </HStack>

                </Box>)
            })}
        {wishlist.length > 4 && <Pagination
            currentPage={currentPage}
            totalCount={wishlist.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
        />}
    </Flex>)
}



export function ReviewItems({reviews, account = false}){
    const PageSize = 4

    const [currentPage, setCurrentPage] = useState(1);
    const {deletereview ,editreview} = useAuthContext()

    const currentData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return reviews.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, reviews]);

    const ReviewDisplay = ({review}) => {
        return(<Card w='18rem' m='2'>
            <HStack w='100%'>
                <Text textAlign='right' w='100%'>{review.created_at.slice(0,10)}</Text>
            </HStack>
            <CardHeader p='1'>
                <HStack>
                    <SelectedStarRating selectedStars={review.rating}/>
                    <Image boxSize={['3.25em']} src={`https://res.cloudinary.com/hsdvgholu/${review.variant.image}`}/>
                    <Text textOverflow='ellipsis'>{review.variant.name}</Text>
                </HStack>
                <Divider/>
            </CardHeader>
            <CardBody p='2'>
                <Text>{review.review}</Text>
            </CardBody>
        </Card>)
    }

    const AccountReviewDisplay = ({review}) => {
        const [show, setShow] = useState(false)

        const [stars, setStars] = useState(review.rating)
        const reviewRef = useRef()
        function Save(e){
            e.preventDefault()
            editreview(reviewRef.current.value, stars, review.variant)
            setShow(false)
        }
        function Delete(e){
            e.preventDefault()
            setShow(false)
            deletereview(review.variant)
        }
        return(<Card w='18rem' m='2'>
            <HStack w='100%'>
                {show ? <Button onClick={(e) => Save(e)}>Save</Button> :<Button onClick={() => setShow(true)}>Edit</Button>}
                {show && <Button colorScheme='red' onClick={(e) => Delete(e)}>Delete</Button>}
                <Text textAlign='right' w='100%'>{review.created_at.slice(0,10)}</Text>
            </HStack>
            <CardHeader p='1'>
                <HStack>
                    {show ? <StarRating current={stars} setValue={setStars}/> :<SelectedStarRating selectedStars={review.rating}/>}
                    <Image boxSize={['3.25em']} src={`https://res.cloudinary.com/hsdvgholu/${review.variant.image}`}/>
                    <Text textOverflow='ellipsis'>{review.variant.name}</Text>
                </HStack>
                <Divider/>
            </CardHeader>
            <CardBody p='2'>
                {show ? <Textarea ref={reviewRef} defaultValue={review.review}/>: <Text>{review.review}</Text>}
            </CardBody>
        </Card>)
    }

    return(<Flex flexDirection='column' alignItems='center'>
        {currentData.map((review, i) => {
                return(<React.Fragment key={i}>
                    {account ? <AccountReviewDisplay review={review}/>:
                    <ReviewDisplay review={review}/>}
                </React.Fragment>)
            })}
        {reviews.length > 4 && <Pagination
            currentPage={currentPage}
            totalCount={reviews.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
        />}
    </Flex>)
}

const DOTS = '...';
const usePagination = ({totalCount, pageSize, siblingCount = 1, currentPage}) => {
    const paginationRange = useMemo(() => {

        const range = (start, end) => {
            let length = end - start + 1;
            return Array.from({ length }, (_, idx) => idx + start);
        };
        const totalPageCount = Math.ceil(totalCount / pageSize);

        const totalPageNumbers = siblingCount + 5;

        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount
        );

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPageCount];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
};

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        if(currentPage < totalCount) {
            onPageChange(currentPage + 1);
        }
    };

    const onPrevious = () => {
        if(currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <Flex flexDirection='row' justifyContent='center'>
            <Box m='1'>
                <Button onClick={onPrevious} disabled={currentPage === 1}>Prev</Button>
            </Box>
            {paginationRange.map((pageNumber, i) => {
                if (pageNumber === DOTS) {
                    return <Box m='1' key={i}><Button disabled={true} varaint='ghost'><BiDotsHorizontal/></Button> </Box>;
                }

                return (
                    <Box m='1' key={i}>
                        {pageNumber === currentPage ?<Button disabled={true} varaint='ghost'>{pageNumber}</Button>: <Button onClick={() => onPageChange(pageNumber) }>{pageNumber}</Button>}
                    </Box>
                );
            })}
            <Box m='1'>
                <Button disabled={currentPage === lastPage} onClick={onNext}>Next</Button>
            </Box>
        </Flex>
    );
};