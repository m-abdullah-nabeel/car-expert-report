import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import green from '@mui/material/colors/green';
import Box from '@mui/material/Box/Box';
import candles from '../../2.jpg';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { purple, blueGrey, red } from '@mui/material/colors';
// 
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function BasicTable() {
    const [checked, setChecked] = React.useState([1]);
    const [cars_list, setList] = React.useState([
        { id: 1, name: 'Alice', plate_no: 'ADE089', date: "11-07-2021", model: "Prius" },
        { id: 2, name: 'Bob', plate_no: 'LAD987', date: "11-07-2021", model: "Prius" },
        { id: 3, name: 'Carl', plate_no: 'LEU6858', date: "11-07-2021", model: "Prius" },
        { id: 4, name: 'Dean', plate_no: 'QAT8809', date: "11-07-2021", model: "Prius" },
        { id: 5, name: 'Ethan', plate_no: 'FDA2829', date: "11-07-2021", model: "Prius" },
    ])

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <Box sx={{ marginTop: 1 }} style={{
            backgroundImage: `url(${candles})`,
        }}>
            <List dense sx={{
                width: '100%',
                bgcolor: 'background.paper',
                // maxWidth: 360, 
            }}>
                <ListItem
                    // key={'value'}
                    // disablePadding
                    sx={{ backgroundColor: blueGrey[50], justifyContent: "space-between" }}
                >
                    <ListItemText sx={{ width: 100 }} id={"DRopdown Filter"} primary={"DRopdown Filter"} />
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box>
                        <Typography>
                            Action 1, 2, 3
                        </Typography>
                    </Box>
                    {/* </ListItemButton> */}
                </ListItem>

                {cars_list.map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                        <ListItem
                            key={value}
                            // secondaryAction={
                            //     <Checkbox
                            //         edge="end"
                            //         onChange={handleToggle(value)}
                            //         checked={checked.indexOf(value) !== -1}
                            //         inputProps={{ 'aria-labelledby': labelId }}
                            //     />
                            // }
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemAvatar sx={{ border: '1px dotted bue' }}>
                                    <Avatar
                                        sx={{ bgcolor: green[500] }}
                                        alt={`Avatar n°${value + 1}`}
                                        src={`/static/images/avatar/${value + 1}.jpg`}
                                    />
                                </ListItemAvatar>
                                <ListItemText sx={{ width: 100 }} id={value.id} primary={value.name} />
                                <ListItemText sx={{ width: 100 }} id={value.id} primary={value.plate_no} />
                                <ListItemText sx={{ width: 100 }} id={value.id} primary={value.date} />
                                <ListItemText sx={{ width: 100 }} id={value.id} primary={value.model} />
                                <ListItemText sx={{ width: 100 }} id={value.id} primary={"Select / More"} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
            {/* 
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow> 
                    </TableHead>
                    <TableBody>
                        {cars_list.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ flex: 1, flexDirection: 'row' }}>
                                    <Avatar sx={{ width: 24, height: 24, bgcolor: green[500] }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                </TableCell>
                                <TableCell>
                                    {row.name}
                                </TableCell>

                                <TableCell align="right">{row.plate_no}</TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="right">{row.model}</TableCell>
                                <TableCell align="right">Select / More</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
             */}
        </Box>
    );
}
