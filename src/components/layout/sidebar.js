import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import PaidIcon from '@mui/icons-material/Paid';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
    return (
        <div style={{
            display: 'flex',
            // change to none for hiding
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "60px",
            // chnage to say 260 to view hamburger
            position: "fixed",
            top: 0,
            backgroundColor: "rgba(10, 10, 10, 0.4)",
            zIndex: 80
        }}>
            <DescriptionIcon sx={{ color: 'rgba(250, 250, 250, 0.9)', margin: "10px" }} fontSize="large" />
            <PersonIcon sx={{ color: 'rgba(250, 250, 250, 0.9)', margin: "10px" }} fontSize="large" />
            <PaidIcon sx={{ color: 'rgba(250, 250, 250, 0.9)', margin: "10px" }} fontSize="large" />
            <SettingsIcon sx={{ color: 'rgba(250, 250, 250, 0.9)', margin: "10px" }} fontSize="large" />
        </div>
    )
}

export default Sidebar;
