import React, {memo, useState, useCallback, useEffect} from 'react';
import api from '../api';
import Panel from './panel';
import Card from "./card";
import styledComponents from 'styled-components';

const CardContainer = styledComponents.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
`;

function Main () {
    const [data, setData] = useState({});
    const [country, setCountry] = useState('brazil');
    const updateAt = new Date().toLocaleString();

    const handleChange = ({ target }) => {
        const country = target.value;
        setCountry(country);
        api.getCountry(country)
            .then(data => {
                console.log(data);
                setData(data);
            });
    }

    const refresh = () => {
        api.getCountry(country)
            .then(data => {
                console.log(data);
                setData(data);
            });
    }

    useEffect(() => {
        api.getCountry(country)
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []);

    return(
        <>
            <Panel 
                data={data}
                updateAt={updateAt}
                onChange={handleChange}
                country={country}
                refresh={refresh}            
            />
            
            <CardContainer>
                <Card color="purple" value={data.cases} label="Total de casos"/>
                <Card color="yellow" value={data.todayDeaths} label="Óbitos hoje"/>
                <Card color="black" value={data.todayCases} label="Casos hoje"/>
                <Card color="pink" value={data.deaths} label="Total de mortos"/>
                <Card color="aquamarine" value={data.recovered} label="Total de recuperados"/>
            </CardContainer>
        </>
    );

}

export default memo(Main);