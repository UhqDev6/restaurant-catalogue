import Link from "next/link";
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import Card from "./styled/Card";
import Container from "./styled/Container";
import Image from "./styled/Image";
import Paragraph from "./styled/Paragraph";
import WrapperParagraph from "./styled/WrapperParagraph";
import Title from "./styled/Title";

export default function RestaurantItem({ id, pictureId, name, description, isDetails}) {
  return (
    <Card>
      <Image src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`} alt={name} />
      <Container>
        <Title>
          <Link href={`/detail/${id}`}>{name}</Link>
        </Title>
        <WrapperParagraph>
          <Paragraph className={`${isDetails ? '' : ''}`}>
            {
              description || parse(description)
            }
          </Paragraph>
        </WrapperParagraph>
        <br />
      </Container>
    </Card>
  );
}

RestaurantItem.propTypes = {
  id: PropTypes.string.isRequired,
  pictureId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isDetails: PropTypes.bool.isRequired,
}