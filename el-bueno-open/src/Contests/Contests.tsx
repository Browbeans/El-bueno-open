import { Accordion, AccordionDetails, AccordionSummary, Box, Card, Paper, Stack, Tab, Tabs, Typography, styled } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

const Ul = styled('ul')`
    padding-left: 20px;
    margin: 0;
    margin-top: 10px;
`
const Li = styled('li')`
    padding: 0;
`

export const Contests = () => {
    return(
        <Stack height="100%" alignItems="center" mb={2}>
            <Box width={"95%"} mt={5}>
                <Accordion elevation={3}>
                    <AccordionSummary
                        expandIcon={<ArrowDropDown />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography fontWeight={600} fontSize="1.25rem">Traingame</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography fontSize={"1rem"}>
                            Eget spel gäller här, för att kunna samla påäng måste man vara på tåget. 
                            <br />
                            För att hamna på tåget behöver man göra två netto-par i rad eller en netto-birdie. 
                            <br />
                            Gör man två stycken netto-bogeys i rad åker man av tåget och förlorar sina poäng, gör man dock en netto-dubbel eller sämre åker man av tåget. 
                            <br />
                            Gör någon i bollen en netto-birdie får personen välja en i bollen som ska dricka en öl, gör man dubbel eller sämre måste man själv dricka en öl. 
                        </Typography>
                        <Typography fontWeight={600} mt={1}>
                            Poäng: 
                        </Typography>
                        <Ul>
                            <Li>
                            <Typography fontWeight={500}>
                                Netto-eagle/hio: 4 poäng
                            </Typography>
                            </Li>
                            <Li>
                            <Typography fontWeight={500}>
                                Netto-birdie: 3 poäng
                            </Typography>
                            </Li>
                            <Li>
                            <Typography fontWeight={500}>
                                Netto-par: 2 poäng
                            </Typography>
                            </Li>
                            <Li>
                            <Typography fontWeight={500}>
                                Netto-bogey: 0 poäng
                            </Typography>
                            </Li>
                        </Ul>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box width={"95%"} mt={5} mb={2}>
                <Accordion elevation={3}>
                    <AccordionSummary
                        expandIcon={<ArrowDropDown />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography fontWeight={600} fontSize={"1.25rem"}>Trippel bästboll</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography fontSize={"1rem"}>
                            Trippel bästboll spelas precis som det låter, vi är i lag om 3 där vi räknar de två bästa scorera per hål. 
                            <br />
                            Vi spelar slagtävling, vilket innebär att det måste finnas minst två scorer per hål, och vi räknar när man hålat ur så inget par + 5, utan håla ut som gäller. 
                            <br />
                            Skalkens favoriter: Karl H, Oscar T, Gustaf H. 
                            <br />
                            Magraset AB: Albin T, Oscar M, Oliver J. 
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box width={"95%"} mt={5} mb={2}>
                <Accordion elevation={3}>
                    <AccordionSummary
                        expandIcon={<ArrowDropDown />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography fontWeight={600} fontSize={"1.25rem"}>Närmast hål</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography fontSize={"1rem"} fontWeight={600}>
                        Östra banan:
                    </Typography>
                    <Typography>
                        Hål 15, ett vackert hål i skogsbrynet.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Stack>
    );
};