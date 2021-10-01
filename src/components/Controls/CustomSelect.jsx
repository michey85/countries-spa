import styled from 'styled-components';

import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-ui-base)',
            color: '--colors-text',
            borderRadius: 'var(--radii)',
            padding: '0.25rem',
            border: 'none',
            boxShadow: 'var(--shadow)',
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-text)',
            backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui)'
          }),
    }
})`
    width: 200px;
    border-radius: var(--radii);
    font-family: var(--family);
    border: none;
    
    & > * {
        box-shadow: var(--shadow);
        
    }

    & input {
        padding-left: 0.25rem;
    }

    & * {
        font-family: var(--family) !important;
        color: var(--colors-text) !important;
    }

    & div[id]:last-child {
        background-color: var(--colors-ui);
    }
`;