import { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import VacanciesList from './VacanciesList';
import { 
	buildFio, 
	buildVacancyInfoText 
} from './utils';
import {
	blockElement,
	flexRowElement
} from '../style';


function HrItem({hr}) {
	const [opened, changeOpenedState] = useState(false);

	return (
		<Box component='li'>
			<ListItemButton onClick={() => changeOpenedState(!opened)} sx={blockElement}>
				<Box sx={flexRowElement}>
					<ListItemText primary={buildFio(hr)} secondary={buildVacancyInfoText(hr)} />
					{opened ? <ExpandLess/> : <ExpandMore/>}
				</Box>
			</ListItemButton>
			<Collapse in={opened} timeout="auto" sx={blockElement}>
				<VacanciesList hrId={hr.id} opened={opened}/>
			</Collapse>
		</Box>
	);
}

export default HrItem;