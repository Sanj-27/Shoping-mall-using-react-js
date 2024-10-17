import React from "react";

import {Card, CardBody, CardText} from "reactstrap";

const Shops=({st})=>{
    return(
        <Card>
            <CardBody>
                {/*<CardText>ID : {st.id}</CardText>*/}
                <CardText>Name : {st.category}</CardText>
                <CardText>Category : {st.Name}</CardText>   
                <CardText>Status : {st.status}</CardText>   
                <CardText>Owner : {st.Owner}</CardText>      
                <CardText>Lease status : {st.leasestatus}</CardText>   
            </CardBody>
        </Card>

    )
}

export default Shops;
