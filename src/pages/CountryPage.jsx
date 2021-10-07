import axios from 'axios';
import {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";

import { searchByCountry } from '../config';
import { Details } from '../components/Details/Details';
import { Button } from '../components/Button/Button';


export const CountryPage = ({selectByCode}) => {
    const {goBack, push} = useHistory();
    const {name} = useParams();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios.get(searchByCountry(name)).then(
            ({data}) => setCountry(data[0])
        );
    }, [name]);

    return (
        <div>
            <Button onClick={goBack}>
                <IoArrowBack size="14" /> Back
            </Button>
            {country && (
                <Details selectByCode={selectByCode} push={push} {...country} />
            )}
        </div>
    )
}
