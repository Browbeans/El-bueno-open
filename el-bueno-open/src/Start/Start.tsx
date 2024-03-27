import { Box, Stack, Typography, styled } from "@mui/material";
import logo from '../assets/logo.png'
import course from '../assets/course.png'
import club from '../assets/club.jpeg'
import overview from '../assets/overview.jpeg'

const Image = styled('img')`
    width: 100px;
    height: 100px;
`;

const CourseImage = styled('img')`
    width: 100%;
`

export const Start = () => {
    return(
    <>
        <Stack mt={3} ml={3}>
            <Image src={logo} />
        </Stack>
        <Box mb={5} mt={2} p={2}>
            <Typography fontSize="1.5rem" variant="h3">Välkommen till El Bueno open!</Typography>
            <Box mt={2}>
                <Typography variant="caption" fontSize={{xs: "1rem", sm: "1.25rem"}}>
                    Årets event är här! El Bueno open och iår bär det av till arnrika Isaberg Golf and Gentlemens club, där älgarna går fria och alkoholen flödar. 
                    Isaberg bjuder på muycket gott, dels dess fina placering i landet nära vackra sjöar, fjordar och fina utkiksplatser, ryktet går om att den mytomspunna vita älgen vandrar runt mellan 12:ans tee och 10:ans green, Egson har lovat att strypa ut älgfan om han ser den. 

                </Typography>
            </Box>
        </Box>
        <Box px={2}>
            <CourseImage src={course} />
        </Box>
        <Box px={2} py={2}>
            <CourseImage src={club} />
        </Box>
        <Box px={2} py={2}>
            <CourseImage src={overview} />
        </Box>
    </>
    );
};