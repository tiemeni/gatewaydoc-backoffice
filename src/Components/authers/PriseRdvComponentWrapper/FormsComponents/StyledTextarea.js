import { styled } from '@mui/system';
import style from './style';
import { TextareaAutosize } from '@mui/base';
const StyledTextarea = styled(TextareaAutosize)(
  style.styleTextarea
  );

export default StyledTextarea;