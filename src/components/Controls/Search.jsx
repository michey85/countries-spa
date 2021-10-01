import styled from 'styled-components';
import { IoSearch } from "react-icons/io5";

const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;

    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 1rem;

    @media(min-width: 767px) {
        width: 280px;
        margin-bottom: 0;
    }
`;

const Input = styled.input.attrs(() => ({
    type: 'text',
    placeholder: 'Search for a country...'
}))`
    margin-left: 2rem;
    border: none;
    outline: none;
    background-color: var(--color-bg);
    color: var(--color-text);
`;

export const Search = () => (
    <InputContainer>
        <IoSearch />
        <Input />
    </InputContainer>
)