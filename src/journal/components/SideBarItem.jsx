import { useMemo } from "react";
import { ListItemIcon, ListItem, ListItemButton, ListItemText, Grid } from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal";

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch()
    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
    })

    const onClickNote = () => {
        dispatch( setActiveNote({title, body, id, date, imageUrls}))
    }


    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
