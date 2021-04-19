import { Container } from '@material-ui/core';
import ThreeScene from '../components/ThreeScene';



export default function Home() {
    return (
        <Container align="center">
            <h3>Welcome to Cube News!</h3>
            <h4>Because every story has a different side.</h4>
            <ThreeScene />
            <h5 className="footer">&#169; Copyright 2021 Cube News</h5>
        </Container>
    )
}
