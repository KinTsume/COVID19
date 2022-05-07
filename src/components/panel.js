import { MenuItem, Select } from "@mui/material";
import React, { memo } from "react";
import styledComponents from "styled-components";
import COUNTRIES from "../assets/constants/countries";
import refreshIcon from "../assets/images/refresh.svg";

//Study note: Props come in one object as the parameter of the function like: function Panel(props) {}
//Here we are selecting each element using a destructuring assigment and that's why there are {} inside de parameter
function Panel({data, updateAt, onChange, country, refresh}){

    const renderItem = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value} >
            <div>
                <span style={{paddingRight: "10px"}}>{country.label}</span>
                <img src={country.flag} alt={country.label+"Flag"} />
            </div>
        </MenuItem>
    );

    const SpacedDiv = styledComponents.div`
        margin-bottom: 10px; 
    `;

    const Container = styledComponents.div`
        background-color: white;
        padding: 15px;
        padding-left: 25px;
        margin-bottom: 20px;
        border-radius: 5px;
    `;

    const RefreshSpan = styledComponents.span`
        color: red;
        margin-right: 5px;
        padding: auto;
    `;

    return (
        <Container>
            <SpacedDiv>
                <h1>COVID19</h1>
            </SpacedDiv>
            <SpacedDiv>
                <span>Painel Coronavirus</span>
            </SpacedDiv>
            <SpacedDiv>
                <RefreshSpan>Atualizado em: {updateAt}</RefreshSpan>
                <img src={refreshIcon} alt="RefreshIcon" onClick={refresh} />
            </SpacedDiv>
            <Select style={{width: "40%"}} onChange={onChange} value={country}>
                {COUNTRIES.map(renderItem)}
            </Select>  
        </Container>
    );
}

export default memo(Panel);