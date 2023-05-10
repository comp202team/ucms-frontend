import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import CreateIcon from '@mui/icons-material/Create';
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';


export const SideBarInstructor: React.FC = () => {
    const user = useSelector((state: any) => state.security.user);
    const navigate = useNavigate();

    return (
        <Drawer anchor="left" variant="permanent" PaperProps={{sx: {
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

                    <ListItem button onClick={() => navigate("/createcourse")}>
                        <ListItemIcon><CreateIcon/></ListItemIcon>
                        <ListItemText primary="Create Course"/>
                    </ListItem> 
                
                <ListItem button>
                    <ListItemIcon><PersonIcon/></ListItemIcon>
                    <ListItemText primary="Exams"/>
                </ListItem>

                </List>
            </div>
        </Drawer>
    );
};