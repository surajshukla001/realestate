import  { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon
                as={FaArrowAltCircleLeft}
                onCLick={() => scrollPrev()}
                fontSize="2xl"
                cursor="pointer"
                dx={['none','none','none','block']}
                />
        </Flex>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon
                as={FaArrowAltCircleRight}
                onCLick={() => scrollNext()}
                fontSize="2xl"
                cursor="pointer"
                d={['none','none','none','block']}
                />
        </Flex>
    );
}

export default function ImageScrollbar({ data }) {
    
    return(
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: 'hidden'}} >
            {data.map((item) => (
                <Box width="910px" key={item.id} itemId={item.id} overflow="hidden" p="1">
                    <Image placeholder="blur" blurDataURL={item.url} src={item.url} width={1000} height={500}
                        alt="property"
                        sizes="(max-width:500px) 100px, (max-width:1023px) 400px, 1000px" />
                </Box>
            ))}
        </ScrollMenu>
    );
}
