import styled from 'styled-components';

const Wrapper = styled.article`
    border-radius: var(--radii);

`;

const CardImage = styled.img`
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: center;
`;

const CardBody = styled.div`
    padding: 1rem;
`;

const CardTitle = styled.h3`
    margin: 0;
    font-size: var(--fs-sm);
    font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
    padding: 1rem 0 0;
    list-style: none;
`;

const CardListItem = styled.li`
    font-size: var(--fs-sm);
    font-weight: var(--fw-light);
`;

export const Card = ({img, title, info = []}) => {
    return (
        <Wrapper>
            <CardImage src={img} alt={title} />
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardList>
                    {info.map(el => (
                        <CardListItem key={el.title}>
                            <b>{el.title}:</b> {el.description}
                        </CardListItem>
                    ))}
                </CardList>
            </CardBody>
        </Wrapper>
    )
}
