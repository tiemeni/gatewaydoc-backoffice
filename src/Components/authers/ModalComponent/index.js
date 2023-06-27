import { Box, Modal } from '@mui/material'
import React from 'react'
import ModalHeader from './ModalHeader';

function ModalComponent({ title, contentComponent = null, onClose = null }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "70%",
        height: "90%",
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: '1px 2px 9px black',
        outline: "none"
        // border: '1px solid #000',
        // boxShadow: 24,
        // p: 4,
    };
    return (
        <Modal
            open={true}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <ModalHeader title={title ?? ""} onClose={() => onClose()} />
                {contentComponent}
            </Box>
        </Modal>
    )
}

export default ModalComponent