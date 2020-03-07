import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import Rating from './Rating'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const StyledCard = styled(Card)`
    margin-top: 4%;
    width: 50%;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
`;





const TheCard = (props) => {
  const history = useHistory();

const rating = ()=>{
  history.push('/review')
}
  const {type, imgUrl, name, formattedAddress} = props;
  return (
    <div>
      <StyledCard>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{formattedAddress}</CardSubtitle>
        </CardBody>
        <img width="50%" src={imgUrl} alt="Card image cap" />
        <CardBody>
          <CardText>{type}</CardText>
          {/* <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink> */}
          {/* <Rating/> */}
          <button onClick={rating}>Submit a rating</button>
        </CardBody>
      </StyledCard>
    </div>
  );
};

export default TheCard;