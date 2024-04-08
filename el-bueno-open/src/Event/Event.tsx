import { Box, Button, Link, Stack, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledLink = styled('p')`
    cursor: pointer;
    text-decoration: underline;
    margin-top: 4px;
`

export const Event = () => {
    const navigate  = useNavigate();

    return(
        <Stack height="100%" mt={3} px={2}>
            <Typography fontSize={"1.5rem"} mb={5}>
                Upplägg
            </Typography>
            <Typography fontSize={"1.25rem"} fontWeight={600}>
                Dag 1: 
            </Typography>
            <Typography>
                Dagen inleds kl 08:50 på Östra banan av Egson, Super-matsson och Tröttemark.
                Då startar vi dels med långtävlingen singel och trippel bästboll, dessa två sträcker sig hela dagen. 
                Dagens andra runda spelas på Västra banan kl 14:20 och då startar även Traingame, för mer info om tävlingarna klickar du
                <StyledLink onClick={() => navigate('/contest')}>HÄR</StyledLink>
            </Typography>
            <Typography fontSize={"1.25rem"} fontWeight={600} mt={2}>
                Dag 2: 
            </Typography>
            <Typography>
                Dagen inleds kl 09:10 av de som ligger sämst till i singeltävlingen.
                Då startar vi dels med långtävlingen singel och dubbel bästboll, dessa två sträcker sig hela dagen. 
                Dagens andra runda spelas på Västra banan  kl 14:20, för mer info om tävlingarna klickar du
                <StyledLink onClick={() => navigate('/contest')}>HÄR</StyledLink>
            </Typography>
        </Stack>
    );
}