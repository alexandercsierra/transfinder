import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import styled from 'styled-components'

const StyledCard = styled(Card)`
    width: 30%;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
`;

const TheCard = (props) => {
  return (
    <div>
      <StyledCard>
        <CardBody>
          <CardTitle>Business Name</CardTitle>
          <CardSubtitle>Anytown, USA</CardSubtitle>
        </CardBody>
        <img width="100%" src="https://www.inquirer.com/resizer/ZwGpSBfS9CJYW38ZHXoOCMHMxuw=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/FX3JJ75GWNFL5CWJU2KQEE7GT4.jpg" alt="Card image cap" />
        <CardBody>
          <CardText>Here's a description of what this business is and the sorts of services that it may offer.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </StyledCard>
    </div>
  );
};

export default TheCard;