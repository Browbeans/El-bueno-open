import { Stack, Typography, styled } from "@mui/material";
import keh from '../assets/keh.png'
import gurra from '../assets/gurra.png'
import abbe from '../assets/abbe.png'
import egson from '../assets/egson.png'
import mats from '../assets/mattis.png'
import olp from '../assets/olp.png'

const ImageContainer = styled('div')`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Image = styled('img')`
    width: 200px;
    height: 200px;
    border-radius: 100px;
`

export const Participants = () => {
    
    return(
        <>
        <Stack width="100%" alignItems="flex-start" my={5}> 
            <ImageContainer>
                <Image src={keh} alt="kehman"/>
            </ImageContainer>
            <Typography mt={2} ml={2} variant="h6">Glade kehman</Typography>
            <Typography mx={2} variant="caption">
                Kehman är oftast på detta humör hur än rundan går, ibland kan det ha hänt att dedär smilet vänds uppochner dock inte ofta. 
                Karl-Erik som hans föräldrar kallar honom slår på riktigt som en häst sparkar, det går långt som Kristerssons kvitto efter en kväll på spybar men lika snett som Ulfs raggling hem.
                För att få Kehman extra glad som på bilden är det bäst att solen skiner, lite golf på G och att det står en redig Vodka Russchian framför honom.
            </Typography>
        </Stack>
        <Stack width="100%" alignItems="flex-start" my={5}> 
            <ImageContainer>
                <Image src={gurra} alt="gurra"/>
            </ImageContainer>
            <Typography mt={2} ml={2} variant="h6">Gustaf Tröttemark</Typography>
            <Typography mx={2} variant="caption">
                Gustaf är den gubben som verkligen öser in i kaklet vad det gäller öldrickande och tjötande vilket verkligen uppskattas i lite tystare sammanhang. 
                Han är dock en riktig farlig jävel bakom ratten, så pass på om du ligger i vänsterfilen för här kommer en buss som tar dig på milen. 
                Bilden säger allt om varför han kallas Tröttemark "kärt barn har många namn" OCH MER SKA DET BLI!!
            </Typography>
        </Stack>
        <Stack width="100%" alignItems="flex-start" my={5}> 
            <ImageContainer>
                <Image src={mats} alt="mats"/>
            </ImageContainer>
            <Typography ml={2} variant="h6">Super-mattsson</Typography>
            <Typography mx={2} variant="caption">
               Har talar vi inte om vemsomhelst, nej nej. 
               Detta är supermattsson, en man som inte bara dominerar innebandyplanen, derbi-senda, audis utan han är även ett jävla esse på golfbanan.
               Det är inte mannen som kanske puttar bäst i världen trots att han äger 90 olika putters men det är mannen som alltid fattar rätt beslut och bjuder på en show av världsklass!
               Ett stort plus med super-mattsson är även hur han ställer upp för sin kompis Lasermannen när hans klubbor fastnar i träd. 
            </Typography>
        </Stack>
        <Stack width="100%" alignItems="flex-start" my={5}> 
            <ImageContainer>
                <Image src={abbe} alt="abbe"/>
            </ImageContainer>
            <Typography ml={2} variant="h6">Lasermannen</Typography>
            <Typography mx={2} variant="caption">
               Mannen myten Lasermannen, har aldrig själv sett Albin så lack som när den fejkade "John Lasermannen Ausonius" snodde smeknamnet, trodde fan att hela Skarstad skulle brinna upp av den vreden. 
               Lasermannen har ett närspel av rang, hans närspel med hans älskade Pitching-wedge från märket "Wilson" är hans absoluta favoritklubba och rör någon den får dem känna samma vrede som Ausonius fick känna av den beryktade "Laserturken". 
            </Typography>
        </Stack>
        <Stack width="100%" alignItems="flex-start" my={5}> 
            <ImageContainer>
                <Image src={egson} alt="egson"/>
            </ImageContainer>
            <Typography ml={2} variant="h6">Egson the silent</Typography>
            <Typography mx={2} variant="caption">
               Egson är även detta en otrolig karaktär, hans liv rullar på som aldrig förr och stöter han på patrull skakar han av sig det med en axel-skakning och vandrar vidare i livet. 
               Ibland kan Egson bli lite väl tyst och vandra iväg i tankarna men då brukar hans bror Lasermannen fråga -citat "Fan har du tappat talförmågan eller?" vilket ofta leder till skratt och Egson vaknar till och nitar Lasermannen på kuken. 
            </Typography>
        </Stack>
        <Stack width="100%" alignItems="flex-start" my={5}> 
            <ImageContainer>
                <Image src={olp} alt="olp"/>
            </ImageContainer>
            <Typography ml={2} variant="h6">Broderböna</Typography>
            <Typography mb={2} mx={2} variant="caption">
               Idioten som sitter och skriver dehär, han har sina tendensar av att var lite smått sjuk i huvudet ibland och hans förmåga att sikta på rätt mål i golf ska vi inte tala om, han siktar fan mer åt höger än Hitlers politik i andra världskriget.
               Det går dock ryktet om att Proffset "Bubba Watson" tog sin slice-approach från Broderböna, och han vann ju masters. 
               På bilden är han oerhört bakfull inne i resturangen på PGA-national precis efter en redig pizza på parkering. Allt gott! 
            </Typography>
        </Stack>
        </>    
    );
}