import Head from 'next/head';
import Header from '../components/header';
import ButtonFilter from '../components/button-filter';

const Home = () => (
  <>
    <Head>
      <title>VTuber Minecraft Skins</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="author" content="Nokz" />
      <meta
        name="description"
        content="Check out every VTuber's Minecraft skin."
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header />
    <ButtonFilter />
  </>
);

export default Home;
