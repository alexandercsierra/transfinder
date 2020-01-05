import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import Rating from './Rating'
import styled from 'styled-components'

const StyledCard = styled(Card)`
    margin-top: 4%;
    width: 50%;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
`;

const TheCard = (props) => {
  const {type, imgUrl, name, formattedAddress} = props;
  return (
    <div>
      <StyledCard>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{formattedAddress}</CardSubtitle>
        </CardBody>
        <img width="100%" src={imgUrl} alt="Card image cap" />
        <CardBody>
          <CardText>{type}</CardText>
          {/* <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink> */}
          <Rating/>
        </CardBody>
      </StyledCard>
    </div>
  );
};

export default TheCard;