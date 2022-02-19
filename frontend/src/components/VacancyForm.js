import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField';
import { saveVacancy } from './api';
import {
	flexColumnElement,
	formHelperText,
	vacancyForm
} from '../style.js';

function VacancyForm({hrId, renewVacancies}) {
	const [name, setName] = useState('');
	const [company, setCompany] = useState('');
	const [description, setDescription] = useState('');
	const [disabled, setDisabled] = useState(true);

	const save = () => {
		const vacancy = {
			name: name,
			company: company,
			description: description,
			hrId: hrId
		}
		saveVacancy(vacancy).then(result => renewVacancies(hrId));
	}

	const disable = (name, company) => !(name.length > 0 && company.length > 0)

	React.useEffect(() => {
		setDisabled(disable(name, company));
	}, [name, company])

	return (
		<Box component='form'>
			<FormHelperText sx={formHelperText}>Заполните данные о вакансии</FormHelperText>
			<FormControl focused={true} sx={flexColumnElement}>
				<TextField 
					value={name} 
					required
					onChange={(event) => setName(event.target.value)} 
					label="Название вакансии"
					sx={vacancyForm}
				/>

				<TextField 
					value={company}
					required 
					onChange={(event) => setCompany(event.target.value)} 
					label="Название компании"
					sx={vacancyForm}
				/>

				<TextField 
					value={description} 
					onChange={(event) => setDescription(event.target.value)} 
					label="Описание вакансии"
					multiline
					sx={vacancyForm}
				/>
				<Button 
					variant='contained' 
					endIcon={<SaveAltIcon />} 
					disabled={disabled}
					onClick={() => save()}
				>
					Сохранить вакансию
				</Button>
			</FormControl>
		</Box>
	);
}

export default VacancyForm;