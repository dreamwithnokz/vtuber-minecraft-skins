import styled from 'styled-components';
import Image from 'next/image';
import { Button, Carousel } from 'react-bootstrap';

const Wrapper = styled.div`
  margin: 0 1rem 1rem 1rem;
`;

const Container = styled.div`
  margin: 4px;
  border: 1px solid #999999;
  border-radius: 10px;
  padding: 10px;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoLeftInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageLeftInnerContainer = styled.div``;

const Name = styled.h3`
  margin: 0;
  color: #ffffff;
  font-size: 1.2em;
  font-weight: bold;
  flex-grow: 1;
`;

const MinecraftInfo = ({ vtuberName, minecraftUUID }) => (
  <>
    <Wrapper>
      <Container>
        <LeftContainer>
          <InfoLeftInnerContainer>
            <Name>{vtuberName}</Name>
            <Button
              variant="success"
              href={`https://mc-heads.net/download/${minecraftUUID}`}
            >
              Download Skin
            </Button>
          </InfoLeftInnerContainer>
          <ImageLeftInnerContainer>
            <Image
              src={`https://www.mc-heads.net/head/${minecraftUUID}/left`}
              height={100}
              width={100}
            />
          </ImageLeftInnerContainer>
        </LeftContainer>
      </Container>
      <Container>
        <Carousel>
          <Carousel.Item className="">
            <div className="d-flex justify-content-center w-100">
              <Image
                src={`https://www.mc-heads.net/player/${minecraftUUID}`}
                height={200}
                width={100}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center w-100">
              <Image
                src={`https://www.mc-heads.net/body/${minecraftUUID}/left`}
                height={230}
                width={100}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center w-100">
              <Image
                src={`https://www.mc-heads.net/body/${minecraftUUID}/right`}
                height={230}
                width={100}
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Wrapper>
  </>
);

export default MinecraftInfo;
