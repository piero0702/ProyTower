import React, { useState } from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FaceIcon from '@mui/icons-material/Face';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './headerStyle.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <header>
      <FormatListBulletedIcon onClick={handleToggleDrawer} />
      <div className="icons">
        <FaceIcon />
        <button>Log In</button>
      </div>
      <Drawer open={open} onClose={handleToggleDrawer}>
        <Toolbar>
          <FormatListBulletedIcon />
          <Typography variant="h6">Opciones</Typography>
        </Toolbar>
        <List>
          <ListItem button>
            <a href="/chatsPasados"><ListItemText primary="Ver chats pasados" /></a>
          </ListItem>
          <ListItem button>
            <ListItemText primary="Horario semanal" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Horario mensual" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Exportar" />
          </ListItem>
          <ListItem divider />
          <ListItem button>
            <ListItemText primary="Información" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Configuración" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Cerrar sesión" />
          </ListItem>
        </List>
      </Drawer>
    </header>
  );
};

export default Header;