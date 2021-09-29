import styled from 'styled-components';

import Select from 'react-select';
import { Search } from './Search'


const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const options = [
    {value: '', label: 'All'},
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
];
// const Select = styled.select.attrs()``;

export const Controls = () => {
    return (
        <Wrapper>
            <Search />
            <Select options={options} placeholder="Filter by Region" />
        </Wrapper>
    )
}
