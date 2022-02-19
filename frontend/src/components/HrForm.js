import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { saveHr } from './api';
import {
	flexRowElement,
	blockSize,
	hrFormBorder,
	hrFormStyle,
	formHelperText,
	borderHelperText
} from '../style.js';


function HrForm({onClick}) {
	const [firstName, changeFirstName] = useState('');
	const [middleName, changeMiddleName] = useState('');
	const [lastName, changeLastName] = useState('');
	const [firstNameError, setError] = useState(true);

	const validateFirstName = (name) => {
		const regex = /[A-Za-zA-Яа-я]{3,}/;

		return regex.test(name);
	}

	React.useEffect(() => {
		setError(!validateFirstName(firstName))
	}, [firstName]);

	const save = (hr) => saveHr(hr).then(result => onClick());

	return (
		<Box component='form' sx={[blockSize, hrFormStyle]}>
			<FormHelperText sx={[formHelperText, borderHelperText]}>Заполните данные эйчара</FormHelperText>
			<FormControl sx={[flexRowElement, hrFormBorder]}>
				<TextField 
					value={lastName} 
					autoComplete='family-name' 
					onChange={(event) => changeLastName(event.target.value)} 
					label="Фамилия"
				/>

				<TextField 
					value={firstName}
					required 
					autoComplete='given-name' 
					onChange={(event) => {
						const name = event.target.value
						setError(!validateFirstName(name));
						changeFirstName(name);
					}} 
					label="Имя"
				/>

				<TextField 
					value={middleName} 
					autoComplete='additional-name' 
					onChange={(event) => changeMiddleName(event.target.value)} 
					label="Отчество"
				/>
				<IconButton 
					component='button' 
					disabled={firstNameError} 
					color='primary' 
					onClick={() => save({
						'lastName': lastName,
						'firstName': firstName,
						'middleName': middleName
					})}>
					<AddIcon />
				</IconButton>
			</FormControl>
		</Box>
	);
}

export default HrForm;