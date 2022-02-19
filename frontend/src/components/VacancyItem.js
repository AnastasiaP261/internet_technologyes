import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {
	getHrs,
	changeVacancy
} from './api';
import { buildFio } from './utils';
import {
	blockElement,
	flexRowElement,
	card,
	cardHeader,
	cardContent,
	cardForm
} from '../style';

function VacancyItem({vacancy, renewVacancies}) {
	const [hrs, setHrs] = useState(null);
	const [hr, setHr] = useState(vacancy.hrId);
	const [description, setDescription] = useState(vacancy.description);

	const renewHrs = () => {
		getHrs().then(result =>{
			setHrs(result);
		});
	};

	const change = () => {
		const vacancyDto = {
			id: vacancy.id,
			description: description,
			hrId: hr
		}

		changeVacancy(vacancyDto).then(result => renewVacancies(vacancy.id));
		document.location.reload();
	}

	React.useEffect(() => {
		renewHrs();
		console.log("useEffect");
	}, [vacancy]);

	console.log(hr);

	if (hrs == null) return null;

	const menuItems = hrs.map(hr => {
		return (
			<MenuItem key={hr.id} value={hr.id}>
				{buildFio(hr)}
			</MenuItem>
		)
	})

	return (
		<Card variant="outlined" sx={card}>
			<CardContent sx={cardContent}>
				<Typography variant='h5' sx={cardHeader}>
					{vacancy.name}
				</Typography>

				<TextField
					value={description}
					multiline
					label='Описание вакансии'
					onChange={(event) => setDescription(event.target.value)}
					sx={cardForm}
				/>

				<TextField
					value={hr}
					select
					label='Эйчар'
					onChange={(event) => setHr(event.target.value)}
					sx={cardForm}
				>
				{menuItems}
				</TextField>
			</CardContent>
			<CardActions>
				<Button variant='outlined' onClick={change}>Обновить вакансию</Button>
			</CardActions>
		</Card>
	);
}

export default VacancyItem;