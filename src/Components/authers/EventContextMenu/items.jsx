
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

import {
    handleCopyAndPastEvent,
    handleCutAndPastEvent,
    handleMoveEvent,
    handleDeleteEvent,
    handlePrintEvent,
    handleReceiptEvent,
    handleAbortEvent,
    handleEventAbsenceJustify,
    handleEventPatientDiscuss,
    handleEventProfiling,
    handleEventUrgence
} from "./event-menu-handler";

export const items=[
        {perm: "copy", config: {hasDivider: false,  icon: <ContentCopyOutlinedIcon />, label: 'Copier - Coller ce rdv', action: handleCopyAndPastEvent,}},
        {perm: "cut", config: {hasDivider: false,  icon: <ContentCutOutlinedIcon />, label: 'Couper - Coller ce rdv', action: handleCutAndPastEvent,}},
        {perm: "move", config: {hasDivider: false,  icon: <ArrowForwardOutlinedIcon />, label: 'Déplacer le rdv', action: handleMoveEvent,}},
        {perm: "delete", config: {hasDivider: false,  icon: <DeleteOutlineOutlinedIcon />, label: 'Supprimer le rdv', action: handleDeleteEvent,}},
        {perm: "print", config: {hasDivider: false,  icon: <PrintOutlinedIcon />, label: 'Imprimer le rdv', action: handlePrintEvent,}},
        {perm: "receipt", config: {hasDivider: true,  icon: <EuroOutlinedIcon />, label: 'Encaissement', action: handleReceiptEvent,}},
        {perm: "abort", config: {hasDivider: false,  icon: <BlockOutlinedIcon />, label: 'Le praticien annule le rdv', action: handleAbortEvent,}},
        {perm: "justify", config: {hasDivider: true,  icon: <CheckOutlinedIcon />, label: 'Absence excusée', action: handleEventAbsenceJustify,}},
        {perm: "discuss", config: {hasDivider: false,  icon: <LocalPhoneOutlinedIcon />, label: 'Communiquer avec le patient', action: handleEventPatientDiscuss,}},
        {perm: "profiling", config: {hasDivider: false,  icon: <EmailOutlinedIcon />, label: 'Profilage du rdv', action: handleEventProfiling,}},
        {perm: "urgence", config: {hasDivider: true,  icon: <ErrorOutlineOutlinedIcon />, label: 'Appel Urgence', action: handleEventUrgence,}},
    ];