import {Box, Container, Link} from '@mui/material';
import {FC} from "react";

const Footer: FC = () => {
    return (
        <Box component='footer'>
            <Container maxWidth='xl' sx={{display: 'flex', justifyContent: 'center'}}>
                <Link
                    href="https://www.linkedin.com/in/evgeny-phadeev-0a639899/?locale=en_US"
                    underline='hover'
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label='visit linkedIn profile of developer'
                >
                    developed by ephadeev
                </Link>
            </Container>
        </Box>
    );
};

export default Footer;
