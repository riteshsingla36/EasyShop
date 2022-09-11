import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const ToastAlert = (props) => {

    const oncloseHandler = () => {
        props.from_toast({ status: false, message: '', severity: '' })
    }
    return (
        <Stack sx={{ width: '30%' }} spacing={2}>
            <Alert severity={props.severity} onClose={() => { oncloseHandler() }}>{props.message}</Alert>
        </Stack>
    );
}

export default ToastAlert;