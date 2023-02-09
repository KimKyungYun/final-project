import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Calendar({ calDate, changeDate }) {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
				className='Calendar'
				value={calDate}
				onChange={(newValue) => {
					changeDate(newValue);
				}}
				renderInput={(params) => <TextField {...params} />}
			/>
		</LocalizationProvider>
	);
}
