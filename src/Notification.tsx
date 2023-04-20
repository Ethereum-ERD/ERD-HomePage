import { Alert, AlertColor } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

export default function Notification({
    open,
    icon = null,
    severity = 'info',
    onClose,
    content,
    autoHideDuration = 5000
}: {
    open: boolean
    onClose: () => void
    severity: AlertColor
    icon?: React.ReactNode
    content: React.ReactNode
    autoHideDuration?: number
}) {
   return (
        <Snackbar
            // @ts-ignore
            open={open}
            onClose={onClose}
            
            autoHideDuration={autoHideDuration}
        >
            <Alert
                icon={icon}
                elevation={6}
                variant="outlined"
                onClose={onClose}
                severity={severity}
                sx={{ width: '100%' }}
            >
                {content}
            </Alert>
        </Snackbar>
   ); 
}
