import styled from 'styled-components';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

export const StyledEyeIcon = styled(RemoveRedEyeOutlinedIcon)`
    color: var(--light-gray);
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
`;

export const StyledEyeOffIcon = styled(VisibilityOffOutlinedIcon)`
    color: var(--light-gray);
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
`;