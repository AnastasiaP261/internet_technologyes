import { 
	palette
} from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { amber } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ab5810',
    },
    secondary: {
      main: '#880e4f',
    }
  }
})

export const appStyle = {
	display: 'flex',
	justifyContent: 'center',
	my: '5%',
	width: '100%',
	flexDirection: 'column'
}

export const border = {
	border: 1
}

export const hrTableBorder = {
	...border,
	borderBottom: 0
}

export const borderHelperText = {
	...border,
	borderBottom: 0
}

export const hrFormBorder = {
	...border,
	borderTop: 0
}

export const blockSize = {
	mx: '25%',
	flexGrow: 0,
	flexShrink: 0
}

export const blockElement = {
	display: 'block'
}

export const hrTableStyle = {
	bgcolor: 'rgb(239, 226, 207)'
}

export const hrTableHeaderStyle = {
	bgcolor: amber[50],
	fontSize: '1.1rem'
}

export const hrFormStyle = hrTableStyle;

export const flexRowElement = {
	display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
}

export const flexColumnElement = {
	display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
}

export const cardForm = {
	my: '2%',
	width: '80%'
}

export const card = {
	m: '2%',
	bgcolor: '#fff3e0'
}

export const cardContent = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	flexWrap: 'wrap'
}

export const cardHeader = {
	pb: '5%',
	fontWeight: 'bold'
}

export const formHelperText = {
	p: '0.1rem',
	mt: '0',
	fontSize: '1rem'
}

export const vacancyForm = {
	my: '1.5%',
	mx: 'auto',
	'width': '80%'
}
