import React from 'react';
import { Drawer as MUIDrawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'


export default function Drawer() {
    return (
            <MUIDrawer variant="permanent">
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
            </MUIDrawer>
    )
}
