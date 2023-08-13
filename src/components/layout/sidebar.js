import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import FileCopyIcon from '@mui/icons-material/FileCopy';
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
            // border: "1px dotted black",
            position: "fixed",
            top: 0,
            backgroundColor: "rgba(10, 10, 10, 0.4)",
            // paddingTop: "20px",
            zIndex: 80
        }}>
            {/* <FolderCopyIcon sx={{ color: 'rgba(250, 250, 250, 0.9)', margin: "5px" }} fontSize="large" />
            <FileCopyIcon sx={{ color: 'rgba(250, 250, 250, 0.9)', margin: "5px" }} fontSize="large" /> */}
            <DescriptionIcon sx={{ color: 'rgba(250, 250, 250, 0.9)', margin: "10px" }} fontSize="large" />
            <PersonIcon sx={{ color: 'rgba(250, 250, 250, 0.9)', margin: "10px" }} fontSize="large" />
            <PaidIcon sx={{ color: 'rgba(250, 250, 250, 0.9)', margin: "10px" }} fontSize="large" />
            <SettingsIcon sx={{ color: 'rgba(250, 250, 250, 0.9)', margin: "10px" }} fontSize="large" />
            {/* <div style={{ backgroundColor: 'blue', width: "30px", height: "40px", border: "2px solid orange", margin: "5px" }}></div> */}
        </div>
    )
}

export default Sidebar;
