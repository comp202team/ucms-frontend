import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import BookIcon from '@mui/icons-material/Book';
import {Box, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import {useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';


export const SideBarStudent: React.FC = () => {
    const user = useSelector((state: any) => state.security.user);
    const navigate = useNavigate();

    return (
        <Box sx={{width: '80%', maxWidth: 360}}>
            <nav aria-label="main mailbox folders">
                <Drawer anchor="left" variant="permanent"  PaperProps={{sx: {
                marginTop:8,
                }}}>
                    <div>
                        <List>
                            {/* Add your menu items here */}
                            <ListItem button>
                                <ListItemIcon><PersonIcon/></ListItemIcon>
                                <ListItemText primary={user.firstName + ' ' +  user.lastName}/>
                            </ListItem>

                            <ListItem button onClick={() => navigate("/dashboard")}>
                                <ListItemIcon><SchoolIcon/></ListItemIcon>
                                <ListItemText primary="Courses"/>
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon><PersonIcon/></ListItemIcon>
                                <ListItemText primary="Assignments"/>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </nav>
        </Box>
    );
};