import styled from 'styled-components';
import Image from 'next/image';
import { Row, Col, Button, Carousel, Spinner } from 'react-bootstrap';

const Name = styled.h3`
  display: block;
  color: rgb(240, 240, 240);
  text-shadow: 0 -1px rgba(0, 0, 0, 0.8);
`;

const Panel = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.25em;
  padding: 1.25em;
  margin-bottom: 1em;
  box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.2);
  height: 18em;
`;

const MinecraftInfo = ({ vtuberName, minecraftUUID }) => (
  <Row className="mt-3">
    <Col md className="text-center">
      <Panel>
        <Name>{vtuberName}</Name>
        <div className="mt-4">
          <Image
            src={`https://www.mc-heads.net/head/${minecraftUUID}/left`}
            height={100}
            width={100}
          />
        </div>
        <Button
          variant="danger"
          href={`https://mc-heads.net/download/${minecraftUUID}`}
          className="mt-4 shadow">
          Download Skin
        </Button>
      </Panel>
    </Col>
    <Col>
      <Panel>
        <Carousel className="h-100">
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
      </Panel>
    </Col>
  </Row>
);

export default MinecraftInfo;
