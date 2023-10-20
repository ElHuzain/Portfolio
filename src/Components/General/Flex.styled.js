import {styled} from 'styled-components';

const Flex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction || 'row'};
    gap: ${({gap}) => `var(--spacing-${gap})` || '0'};
    ${({type}) => type === 'text' ? 'gap: 5px;' : ''};
    ${({width}) => `width: ${width};` || 'width: fit-content'};
`

export default Flex;