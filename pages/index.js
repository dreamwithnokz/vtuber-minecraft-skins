import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/header';
import ButtonFilter from '../components/button-filter';
import vtubersData from '../data/vtubers.json';

export const getStaticProps = async () => ({
  props: {
    vtubersDataList: vtubersData,
  },
});

const Home = ({ vtubersDataList }) => {
  const [selectedMinecraftUUID, setSelectedMinecraftUUID] = useState('');

  const handleSelectedMinecraftUUID = (minecraftUUID) =>
    setSelectedMinecraftUUID(minecraftUUID);

  return (
    <>
      <Head>
        <title>VTuber Minecraft Skins</title>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Nokz" />
        <meta
          name="description"
          content="Check out every VTuber's Minecraft skin."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
      </Head>

      <Header />
      <ButtonFilter
        vtubers={vtubersDataList.vtubers}
        selectedMinecraftUUID={selectedMinecraftUUID}
        onSelectedMinecraftUUID={handleSelectedMinecraftUUID}
      />
    </>
  );
};

export default Home;
