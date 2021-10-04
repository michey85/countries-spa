import axios from 'axios';
import { useState, useEffect } from 'react';

import { ALL_COUNTRIES } from '../config';

import { Controls } from '../components/Controls';
import {List} from '../components/List';
import { Card } from '../components/Card';

console.log(ALL_COUNTRIES);

export const HomePage = ({history: {push}}) => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    const handleSearch = (search, {value: region} = {}) => {
        let data = [...countries];

        if (region) {
            data = data.filter(c => c.region.includes(region))
        }

        if (search) {
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        }

        setFilteredCountries(data);
    }

    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(
            ({data}) => (setCountries(data), handleSearch())
        );
    }, []);

    return (
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {filteredCountries.map((country) => {
                    const countryCard = {
                        img: country.flags.png,
                        title: country.name,
                        info: [
                            {
                                title: 'Population', 
                                description: country.population.toLocaleString()
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
