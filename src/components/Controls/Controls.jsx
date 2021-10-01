import styled from 'styled-components';

import { Search } from './Search';
import { CustomSelect } from './CustomSelect';


const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
];

export const Controls = () => {
    return (
        <Wrapper>
            <Search />
            <CustomSelect
                options={options}
                placeholder="Filter by Region"
                isClearable
                // styles={{
                //     control: (provided) => ({
                //         ...provided,
                //         backgroundColor: 'var(--colors-ui-base)',
                //         color: '--colors-text',
                //         borderRadius: 'var(--radii)',
                //         padding: '0.25rem',
                //         border: 'none',
                //         boxShadow: 'var(--shadow)',
                //     }),
                //     option: (provided, state) => ({
                //         ...provided,
                //         cursor: 'pointer',
                //         color: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-text)',
                //         backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui)'
                //       }),
                // }}
            />
        </Wrapper>
    )
}
