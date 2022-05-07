import React, { memo } from "react";
import styledComponents from "styled-components";

function Card({color, value, label}) {

    const Container = styledComponents.div`
        width: 22%;
        margin-bottom: 10px;        
    `;

    const ColorArea = styledComponents.div`
        background-color: ${color};
        margin: 0;
        border-radius: 5px;
    `;

    const ValueArea = styledComponents.div`
        background-color: white;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        padding-left: 10px;
        border-radius: 5px;
    `;

    return (
        <Container>
            <ColorArea>
                <ValueArea>
                    <h2>{parseInt(value).toLocaleString(undefined, {minimumFractionDigits: 0})}</h2>
                    <h4>{label}</h4>
                </ValueArea>
            </ColorArea>            
        </Container>
    );
}

export default memo(Card);