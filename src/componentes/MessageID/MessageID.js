import * as React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const MessageID=({purchaseID})=> {
    return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Alert severity='success'>
				Thanks for your purchase! your Transaction's ID is: <b>{purchaseID}</b>
			</Alert>
		</Stack>
	);
}

export default MessageID