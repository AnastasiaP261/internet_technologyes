import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import VacancyItem from './VacancyItem';
import VacancyForm from './VacancyForm';
import { getVacanciesOfHr } from './api';

function VacanciesList({hrId, opened}) {
	const [vacancies, setVacancies] = useState(null);

	const renewVacancies = (id) => {
		getVacanciesOfHr(id).then(result => {
			console.log(vacancies);
			setVacancies(result);
		});
	};

	React.useEffect(() => {
		if (opened) renewVacancies(hrId);
	}, [opened]);

	console.log(vacancies);

	if (vacancies == null || vacancies == []) return null;

	const vacancyItems = vacancies.map(vacancy => {
		return (
			<VacancyItem key={vacancy.id} vacancy={vacancy} renewVacancies={renewVacancies} />
		)
	})

	return (
		<Box>
			<List>{vacancyItems}</List>
			<Divider>Добавление новой вакансии</Divider>
			<VacancyForm hrId={hrId} renewVacancies={renewVacancies}/>
		</Box>
	);
}

export default VacanciesList;