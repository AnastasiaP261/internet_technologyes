import React, { useState } from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import HrItem from './HrItem';
import { getHrs } from './api';
import {
	blockSize,
	hrTableBorder,
	border,
	hrTableStyle,
	hrTableHeaderStyle
} from '../style';

function HrTable({formCondition, add}) {
	const [hrs, setHrs] = useState(null);

	const renewHrs = () => {
		getHrs().then(result => {
			setHrs(result);
		});
	};

	React.useEffect(() => {
		if (!formCondition) renewHrs();
	}, [formCondition]);
	console.log(hrs);

	if (hrs == null || hrs == []) return null;

	const hrItems = hrs.map(hr => {
		return (
			<HrItem hr={hr} key={hr.id}/>
		)
	})

	const listHeader = (
		<ListSubheader sx={hrTableHeaderStyle}>
			Список эйчаров
			<IconButton color='success' component='button' onClick={add}>
				<AddCircleOutline />
			</IconButton>
		</ListSubheader>
	);

	const tableBorder = (formCondition) ? hrTableBorder : border

	return (
		<List subheader={listHeader} sx={[tableBorder, blockSize, hrTableStyle]}>
			{hrItems}
		</List>
	);
}

export default HrTable;
