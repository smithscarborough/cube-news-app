import { Box, Container } from '@material-ui/core';
import ThreeScene from '../components/ThreeScene';

export default function Home() {
    return (
        <Container align="center">
            <h3>Welcome to Cube News!</h3>
            <h4>Because there's different sides to every story.</h4>
            <ThreeScene />
            <Box position="absolute" bottom="0" width="100%" height="45px" align="center" paddingRight="95px">
                <h5>&#169; Copyright 2021 Cube News</h5>
            </Box>
        </Container>
    )
}
