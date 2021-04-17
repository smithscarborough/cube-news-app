import { Container, Drawer, List, ListItem, ListItemIcon } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Source from '../components/Source';


export default function Home() {


    return (
        <Container>
            <h3 textAlign="center">Welcome to Cube News!</h3>
        </Container>
    )
}
