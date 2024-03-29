import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function HomeDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        About Us
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          XYZ Hospital
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            It is a Hospital that offers various services for different kind of
            treatments you're seeking.
          </Typography>
          <Typography gutterBottom>
            Street:  731 Aurora Boulevard 1100
        </Typography>
        <Typography gutterBottom>
            City:   Quezon City
        <Typography gutterBottom>
        State/province/area:    Quezon City
        </Typography>
        <Typography gutterBottom>
            Phone number  7212175/4141597/4141595
        </Typography>
        <Typography gutterBottom>
            Country calling code:  +63---
        </Typography>
        <Typography gutterBottom>
            Country: Philippines
        </Typography>

          </Typography>
          <Typography gutterBottom>
            Email: xyzhospital@gmail.com
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
           Okay
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
