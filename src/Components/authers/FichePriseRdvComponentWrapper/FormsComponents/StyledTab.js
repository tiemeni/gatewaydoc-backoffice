import Tab from '@mui/material/Tab';
import { styled } from '@mui/system';
import { styleAntTab } from './style'

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(styleAntTab);

export default StyledTab;