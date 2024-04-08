import { Accordion, AccordionDetails, AccordionSummary, Box, Card, Divider, Paper, Stack, Tab, Tabs, Typography, styled } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import Close15 from '../assets/Close15.png';
import Longest7 from '../assets/longest7.png';
import Longest8 from '../assets/longest8.png';
import Close3 from '../assets/Close3.png';
import gurra from '../assets/gurra.png'
import keh from '../assets/keh.png'
import abbe from '../assets/abbe.png'
import egson from '../assets/egson.png'
import mats from '../assets/mattis.png'
import olp from '../assets/olp.png'

const Ul = styled('ul')`
    padding-left: 20px;
    margin: 0;
    margin-top: 10px;
`
const Li = styled('li')`
    padding: 0;
`

const Image = styled('img')`
    width: 100%;
`

const AvatarImage = styled('img')`
    width: 35px; 
    height: 35px;
    border-radius: 35px;
    margin-left: 8px;
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
                            <Divider />
                            <br />
                        </Typography>
                        <Typography fontWeight={600}>
                            Skalkens favoriter:
                        </Typography>
                        <Stack flexDirection="row" justifyContent="space-between" pb={1} alignItems="center">
                            <Typography>
                                 Karl H, Oscar T, Gustaf H. 
                            </Typography>
                            <Stack flexDirection="row">
                                <AvatarImage src={keh} />
                                <AvatarImage src={egson} />
                                <AvatarImage src={gurra} />
                            </Stack>
                        </Stack>
                        <Divider />
                        <br />
                        <Typography fontWeight={600}>
                            Magraset AB:
                        </Typography>
                        <Stack flexDirection="row" justifyContent="space-between" pb={1} alignItems="center">
                            <Typography>
                                 Albin T, Oscar M, Oliver J. 
                            </Typography>
                            <Stack flexDirection="row">
                                <AvatarImage src={abbe} />
                                <AvatarImage src={mats} />
                                <AvatarImage src={olp} />
                            </Stack>
                        </Stack>
                        <Divider />
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
                        <Typography fontWeight={600} fontSize={"1.25rem"}>Dubbel bästboll</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography fontSize={"1rem"}>
                            Dubbel bästboll är inga konstigheter, man spelar två och två och tar bästa scoren från varje hål.
                            <br />
                            I denna gren spelar vi om poäng istället för slag och man behöver därför inte alltid håla ut. 
                            Lagen är ännu i bestämda ännu men såhär kommer det se ut, baserat på resultat 1:an - 6:an.
                            <Divider />
                            <br />
                        </Typography>
                        <Typography fontWeight={600}>
                            Lag 1:
                        </Typography>
                                1:an och 6:an
                        <Divider />
                            <br />
                            <Typography fontWeight={600}>
                                Lag 2:
                            </Typography>
                                2:an och 5:an
                            <Divider />
                            <br />
                            <Typography fontWeight={600}>
                                Lag 3:
                            </Typography>
                                3:an och 4:an
                            <Divider />
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
                        <Typography fontWeight={600} fontSize={"1.25rem"}>Närmast hål, östra</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography fontSize={"1rem"} fontWeight={600}>
                        Östra banan, hål 15:
                    </Typography>
                    <Typography mb={2}>
                        Ett vackert hål i skogsbrynet där inte mycket är ivägen för en HIO förutom en fin gammal ek som huserar en familj av gnagare.
                    </Typography>
                    <Image src={Close15} />
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
                        <Typography fontWeight={600} fontSize={"1.25rem"}>Longest drive, östra</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography fontSize={"1rem"} fontWeight={600}>
                        Östra banan, hål 7:
                    </Typography>
                    <Typography mb={2}>
                        Detta hål är inte det bredaste av hål men har mycket möjligheter till att spetsa upp drivern rejält. 
                        Out och träd runtom fairway kan väcka frågan om man verkligen ska plocka upp drivern, men detta svaras med ett rungande JA! 
                        Får du till en bra drive så får man vittring på eagle när inspelet endast är ca 200 meter
                    </Typography>
                    <Image src={Longest7} />
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
                        <Typography fontWeight={600} fontSize={"1.25rem"}>Närmast hål, västra</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography fontSize={"1rem"} fontWeight={600}>
                        Västra banan, hål 3:
                    </Typography>
                    <Typography mb={2}>
                        Ett releativt öppet hål men en hel del vatten, man kan välja som Gustaf att safea upp det genom att slå en sorkdödare längs vänsterkanten och förlita sig på en stadig upp and down.
                        Eller så gör man som Abbe brukar göra på hål nr 6 på Bjertorp, shankea en ner i vattnet och sätta bollen rakt i kopp efter droppen. 
                    </Typography>
                    <Image src={Close3} />
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
                        <Typography fontWeight={600} fontSize={"1.25rem"}>Longest drive, västra</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography fontSize={"1rem"} fontWeight={600}>
                        Västra banan, hål 8:
                    </Typography>
                    <Typography mb={2}>
                        Har har vi en rund dogleg höger, så fördel att slå bollen med lite fade för bäst läge vid andra slaget. 
                        Andra slaget är troligtvis dolt och kan vara lite trixigt att få till nära hål. 
                    </Typography>
                    <Image src={Longest8} />
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Stack>
    );
};