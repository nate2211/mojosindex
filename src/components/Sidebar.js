import {useNavigate, useParams} from "react-router-dom";
import {useMemo, useRef, useState} from "react";
import {
    Accordion, AccordionButton, AccordionItem, AccordionPanel, Box,
    Button, Center,
    Checkbox,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay, List, ListItem, VStack,
    AccordionIcon
} from "@chakra-ui/react";

export function SideBar() {
    const navigate = useNavigate()
    const [isOpen, setOpen] = useState(false)
    let {id} = useParams()
    const filterRef = useRef([])

    useMemo(() => {
        if(id !== undefined) {
            let tokens = id.split('&')
            tokens.slice(1).map((token) => {
                let type = token.slice(0, token.indexOf('=') + 1)
                let temp = token.slice(token.indexOf('=') + 1).split(',')
                temp.forEach((item) => {
                    filterRef.current.push(`&${type}${item}`)
                })
            })

        }

    }, [])

    function filter(){
        let filter = {}
        filterRef.current.forEach((item) => {
            let ei = item.indexOf('=')
            let type = item.slice(0, ei+1)
            if(Object.keys(filter).includes(type)){
                filter[type].push(item.slice(ei+1))
            }else{
                filter[type] = new Array(item.slice(ei+1))
            }

        })
        let sfilter = ''
        Object.keys(filter).map((key, i) => {
            let s = filter[key].join(',')
            sfilter += `${key}${s}`
        })
        if(id !== sfilter){
            navigate(`/shop/${sfilter}`)
            setOpen(false)
        }else if(window.location.pathname.includes(sfilter)){
            setOpen(false)
        }
        else{
            navigate('/shop/')
        }
    }

    function filterfunc(filter){
        if(filterRef.current.includes(decodeURI(filter))){
            filterRef.current = filterRef.current.filter(e => e !== filter)
        }else {
            filterRef.current.push(filter)
        }
    }
    function FilterCheckBox({filter, children}) {
        const [checked, setChecked] = useState(filterRef.current.includes(decodeURI(filter)))

        return(
            <Checkbox onChange={() => {filterfunc(filter); setChecked((prev) =>!prev)}} isChecked={checked}>{children}</Checkbox>
        )
    }
    return (
        <>
            <Button onClick={() => setOpen(true)}>Filter</Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={() => setOpen(false)}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Filters</DrawerHeader>

                    <DrawerBody>
                        <VStack>
                            <Accordion allowMultiple w='100%'>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex='1' textAlign='left'>
                                                Type
                                            </Box>
                                            <AccordionIcon/>
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <List>
                                            <ListItem>
                                                <FilterCheckBox filter={'&type=Art'}>Art</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&type=Crystal'}>Crystal</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&type=Astrology'}>Astrology</FilterCheckBox>
                                            </ListItem>>
                                            <ListItem>
                                                <FilterCheckBox filter={'&type=Botanical'}>Botanical</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&type=Nautical'}>Nautical</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&type=Space'}>Space</FilterCheckBox>
                                            </ListItem>
                                        </List>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                            <Accordion allowMultiple w='100%'>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex='1' textAlign='left'>
                                                SubType
                                            </Box>
                                            <AccordionIcon/>
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <List>
                                            <ListItem>
                                                <FilterCheckBox filter={'&subtype=Modern'}>Modern</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&subtype=Illustrations'}>Illustrations</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&subtype=Pop%20Art'}>Pop Art</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&subtype=Abstract'}>Abstract</FilterCheckBox>
                                            </ListItem>
                                        </List>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                            <Accordion allowMultiple w='100%'>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex='1' textAlign='left'>
                                                Color
                                            </Box>
                                            <AccordionIcon/>
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <List>
                                            <ListItem>
                                                <FilterCheckBox filter={'&color=White'}>White</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&color=Black'}>Black</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&color=Gray'}>Gray</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&color=Red'}>Red</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&color=Blue'}>Blue</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&color=Green'}>Green</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&color=Cream'}>Cream</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&color=Orange'}>Orange</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&color=Purple'}>Purple</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&color=Pink'}>Pink</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&color=Beige'}>Beige</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&color=Eclipse'}>Eclipse</FilterCheckBox>
                                            </ListItem>
                                        </List>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                            <Accordion allowMultiple w='100%'>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex='1' textAlign='left'>
                                                Product Type
                                            </Box>
                                            <AccordionIcon/>
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <List>
                                            <ListItem>
                                                <FilterCheckBox filter={'&producttype=Canvas%20Print'}>Canvas Print</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&producttype=Framed%20Poster'}>Framed Poster</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&producttype=Framed%20Canvas%20Print'}>Framed Canvas Print</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&producttype=Tote%20Bag'}>Tote Bag</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&producttype=Pillow'}>Pillow</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&producttype=Puzzle'}>Puzzle</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&producttype=Throw%20Blanket'}>Throw Blanket</FilterCheckBox>
                                            </ListItem>
                                        </List>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                            <Accordion allowMultiple w='100%'>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex='1' textAlign='left'>
                                                Size
                                            </Box>
                                            <AccordionIcon/>
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <List>
                                            <ListItem>
                                                <FilterCheckBox filter={'&size=8x10in'}>8x10in</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&size=12x12in'}>12x12in</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&size=12x16in'}>12x16in</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&size=16x16in'}>16x16in</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&size=16x20in'}>16x20in</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&size=18x18in'}>18x18in</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&size=18x24in'}>18x24in</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&size=22x22in'}>22x22in</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&size=50x60in'}>50x60in</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&size=60x80in'}>60x80in</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&size=21x30cm'}>21x30cm</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&size=27x34.6cm'}>27x34.6cm</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&size=30x40cm'}>30x40cm</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&size=30x60cm'}>30x60cm</FilterCheckBox>
                                            </ListItem>
                                        </List>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                            <Accordion allowMultiple w='100%'>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex='1' textAlign='left'>
                                                Price
                                            </Box>
                                            <AccordionIcon/>
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <List>
                                            <ListItem>
                                                <FilterCheckBox filter={'&price=25'}>$25</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&price=28'}>$28</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&price=30'}>$30</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&price=35'}>$35</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&price=37'}>$37</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&price=38'}>$38</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&price=43'}>$43</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&price=45'}>$45</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&price=50'}>$50</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&price=55'}>$55</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&price=60'}>$60</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&price=62'}>$62</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&price=70'}>$70</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&price=80'}>$80</FilterCheckBox>
                                            </ListItem>
                                            <ListItem>
                                                <FilterCheckBox filter={'&price=90'}>$90</FilterCheckBox>
                                            </ListItem>
                                        </List>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                            <Center>
                                <Button onClick={() => filter()}>Filter</Button>
                            </Center>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>)
}
