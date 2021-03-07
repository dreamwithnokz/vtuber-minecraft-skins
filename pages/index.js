import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/header';
import MinecraftInfo from '../components/minecraft-info';
import Footer from '../components/footer';
import vtubersData from '../data/vtubers.json';
import Filters from '../components/filters';

export const getStaticProps = async () => ({
  props: {
    vtubersDataList: vtubersData,
  },
});

const Wrapper = styled.div`
  min-height: calc(100vh - 209px);
  margin-bottom: 4rem;
`;

const Home = ({ vtubersDataList }) => {
  const [selectedAffiliation, setSelectedAffiliation] = useState(null);
  const [selectedVtuberName, setSelectedVtuberName] = useState(null);
  const [selectedMinecraftUUID, setSelectedMinecraftUUID] = useState('');

  const getInitialVtuber = (affiliation) => {
    const affiliationVtubers = vtubersDataList.vtubers[affiliation] || [];
    return affiliationVtubers.length > 0
      ? vtubersDataList.vtubers[affiliation][0]
      : null;
  };

  const handleSelected = (vtuberName, minecraftUUID) => {
    setSelectedVtuberName(vtuberName);
    setSelectedMinecraftUUID(minecraftUUID);
  };

  const handleAffiliationChange = (key) => {
    setSelectedAffiliation(key);
    setSelectedVtuberName(getInitialVtuber(key).name);
    setSelectedMinecraftUUID(getInitialVtuber(key).minecraftUUID);
  };

  const handleMinecraftUUIDChange = (key) => {
    setSelectedMinecraftUUID(key);
  };

  useEffect(() => {
    const affiliations = Object.keys(vtubersDataList.vtubers) || null;
    const initialAffiliation =
      affiliations && affiliations.length > 0 ? affiliations[0] : '';

    setSelectedAffiliation(initialAffiliation);
    setSelectedVtuberName(getInitialVtuber(initialAffiliation).name);
    setSelectedMinecraftUUID(
      getInitialVtuber(initialAffiliation).minecraftUUID,
    );
  }, []);

  return (
    <>
      <Head>
        <title>VTuber Minecraft Skins</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Nokz" />
        <meta
          name="description"
          content="Check out every VTuber's Minecraft skin."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Wrapper>
        <Container>
          <Header />
          <Filters
            data={vtubersDataList}
            affiliationKey={selectedAffiliation}
            onAffiliationChange={handleAffiliationChange}
            onMinecraftUUIDChange={handleMinecraftUUIDChange}
          />
          {selectedMinecraftUUID ? (
            <MinecraftInfo
              vtuberName={selectedVtuberName}
              minecraftUUID={selectedMinecraftUUID}
            />
          ) : null}
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Home;
