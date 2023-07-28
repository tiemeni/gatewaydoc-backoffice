import Tab from '@mui/material/Tab';
import { styled } from '@mui/system';
import { styleTab } from './style'

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(styleTab);

export default StyledTab;