import React, { useState } from 'react';
import Box from '@mui/material/Box';
import HrTable from './components/HrTable';
import HrForm from './components/HrForm';
import { ThemeProvider } from '@mui/material/styles';
import {
    appStyle,
    border,
    theme
} from './style';

function App() {
    const [form, changeFormCondition] = useState(false);

    console.log(form);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={[appStyle]}>
                <HrTable formCondition={form} add={() => changeFormCondition(!form)}/>
                {form ? <HrForm onClick={() => changeFormCondition(!form)} /> : null}
            </Box>
        </ThemeProvider>
    );
}

export default App;
