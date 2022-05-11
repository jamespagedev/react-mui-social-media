import {ThemeProvider, Button, styled, Typography} from '@mui/material';
import {Add, Settings} from '@mui/icons-material';
import {themeExample} from './ThemeExample';

function ComponentExample() {
  const BlueButton = styled(Button)({
    backgroundColor: 'red',
    color: '888',
    margin: 5,
    '&:hover': {
      backgroundColor: 'lightpink'
    },
    '&:disabled': {
      backgroundColor: 'gray',
      color: 'white'
    }
  });
  const ThemeButton = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    color: '888',
    margin: 5,
    '&:hover': {
      backgroundColor: theme.palette.primary.light
    },
    '&:disabled': {
      backgroundColor: 'gray',
      color: 'white'
    }
  }));
  return (
    <ThemeProvider theme={themeExample}>
      <Button variant="text">Text</Button>
      <Button variant="contained" color="otherColor" size="small">
        Button with "otherColor" from theme
      </Button>
      <Button startIcon={<Settings />} variant="contained" color="secondary" size="small">
        Settings
      </Button>
      <Button startIcon={<Add />} variant="contained" color="success" size="small">
        Add new post
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        It uses h1 style but it's a p tag
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'skyblue',
          color: '888',
          margin: 5,
          '&:hover': {
            backgroundColor: 'lightblue'
          },
          '&:disabled': {
            backgroundColor: 'gray',
            color: 'white'
          }
        }}>
        My Unique Button
      </Button>
      <Button
        variant="contained"
        disabled
        sx={{
          backgroundColor: 'skyblue',
          color: '888',
          margin: 5,
          '&:hover': {
            backgroundColor: 'lightblue'
          },
          '&:disabled': {
            backgroundColor: 'gray',
            color: 'white'
          }
        }}>
        My Unique disabled Button
      </Button>
      <BlueButton variant="contained">My Button</BlueButton>
      <BlueButton variant="contained">Another DNRY Button</BlueButton>
      <ThemeButton variant="contained">Theme Button</ThemeButton>
    </ThemeProvider>
  );
}

export default ComponentExample;
