import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import { ALL_COUNTRIES, searchByCountry, filterByRegion } from '../config';

import { Controls } from '../components/Controls';
import {List} from '../components/List';
import { Card } from '../components/Card';

console.log(ALL_COUNTRIES);

export const HomePage = () => {
    const [countries, setCountries] = useState([]);
    const {push} = useHistory();

    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(
            ({data}) => setCountries(data)
        );
    });

    return (
        <>
            <Controls />
            <List>
                {countries.map((country) => {
                    const countryCard = {
                        img: country.flag,
                        title: country.name,
                        info: [
                            {
                                title: 'Population', 
                                description: country.population
                            },
                            {
                                title: 'Region',
                                description: country.region
                            },
                            {
                                title: 'Capital',
                                description: country.capital
                            }
                        ]
                    }
                    return (
                        <Card
                            key={country.name}
                            onClick={() => push(`/country/${country.name}`)}
                            {...countryCard}
                        />
                    )
                })}
            </List>
        </>
    )
}
