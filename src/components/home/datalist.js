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
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { purple, blueGrey, red } from '@mui/material/colors';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import FilterListSharpIcon from '@mui/icons-material/FilterListSharp';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
// other imports
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import { useNavigate } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border: '1px solid black',
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
    const [searchText, setSearch] = React.useState("")
    const [searchResult, setResult] = React.useState([])
    const [cars_list, setList] = React.useState([
        { id: 1, name: 'Alice', plate_no: 'ADE089', date: "11-07-2021", model: "Prius" },
        { id: 2, name: 'Bob', plate_no: 'LAD987', date: "11-07-2021", model: "Prius" },
        { id: 3, name: 'Carl', plate_no: 'LEU6858', date: "11-07-2021", model: "Prius" },
        { id: 4, name: 'Dean', plate_no: 'QAT8809', date: "11-07-2021", model: "Prius" },
        { id: 5, name: 'Ethan 2', plate_no: 'FDA2829', date: "11-07-2021", model: "Prius" },
        { id: 6, name: 'Ethan', plate_no: 'FDA2829', date: "11-07-2021", model: "Prius" },
    ])
    // select filter
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event);
    };
    // select filter

    const navigate = useNavigate();

    useEffect(() => {
        cars_list.map((x) => {
            // console.log(x)
            // console.log(JSON.stringify(x).toLowerCase().includes("name"))
            if (JSON.stringify(x).toLowerCase().includes(searchText)) {
                setResult([...searchResult, x])
            }
            console.log(searchResult)
        })

    }, [searchText])

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
        <Box sx={{ marginTop: 1 }} >
            <List dense sx={{
                width: '100%',
                bgcolor: 'background.paper',
                overflow: 'auto', whiteSpace: "nowrap", overflowX: 'scroll'
                // maxWidth: 360, 
            }}>
                <ListItem key={'index'} sx={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
                    <Box sx={{ flex: 1, width: 200, flexDirection: 'row' }}>
                        <FilterListSharpIcon />
                    </Box>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={
                                (e) => {
                                    setSearch(e)
                                    setResult([])
                                }
                            }
                        />
                    </Search>
                    <Box>
                        <AddCircleOutlineSharpIcon onClick={() => navigate('create-report')} fontSize="large" />
                        <InfoSharpIcon fontSize="large" />
                    </Box>
                </ListItem>
                <Divider />

                {cars_list.map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                        <ListItem
                            key={value.id}
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

                                <ListItemText sx={{ width: 100, margin: "10px", }} id={value.name} primary={value.name} />
                                <ListItemText sx={{ width: 100, margin: "10px", }} id={value.plate_no} primary={value.plate_no} />
                                <ListItemText sx={{ width: 100, margin: "10px", }} id={value.date} primary={value.date} />
                                <ListItemText sx={{ width: 100, }} id={value.model} primary={value.model} />
                                <Box>
                                    <EditIcon sx={{ marginLeft: 2 }} />
                                    <DoneAllIcon sx={{ marginLeft: 2 }} />
                                    <DeleteIcon sx={{ marginLeft: 2 }} />
                                </Box>
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>

            <Box sx={{ height: 25 }}>
            </Box>
            <Box sx={{ backgroundColor: 'white', padding: "10px" }}>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                    Completed Reports
                </Typography>
            </Box>

            <List dense sx={{
                width: '100%',
                bgcolor: 'background.paper',
                opacity: 0.6
                // maxWidth: 360, 
            }}>
                {cars_list.map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                        <ListItem
                            key={value.id}
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
                                <ListItemAvatar sx={{ border: '1px dotted bue', justifyContent: "space-between" }}>
                                    <Avatar
                                        sx={{ bgcolor: green[500] }}
                                        alt={`Avatar n°${value + 1}`}
                                        src={`/static/images/avatar/${value + 1}.jpg`}
                                    />
                                </ListItemAvatar>
                                <ListItemText sx={{ width: 100, }} id={value.name} primary={value.name} />
                                <ListItemText sx={{ width: 100, }} id={value.plate_no} primary={value.plate_no} />
                                <ListItemText sx={{ width: 100, }} id={value.date} primary={value.date} />
                                <ListItemText sx={{ width: 100, }} id={value.model} primary={value.model} />
                                {/* <ListItemText sx={{ width: 5, textAlign: "center" }} id={"Select"} primary={"Select"} /> */}
                                <Box>
                                    <RemoveDoneIcon sx={{ marginLeft: 2 }} />
                                    <DeleteIcon sx={{ marginLeft: 2 }} />
                                </Box>

                            </ListItemButton>
                        </ListItem>
                    );
                })}

            </List>

            <Box sx={{ height: 50 }}></Box>

        </Box>
    );
}
