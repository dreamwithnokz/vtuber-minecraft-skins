import Head from 'next/head';
import Header from '../components/header';

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
      <meta
        name="keywords"
        content="Vtuber, Hololive, Nijisanji, Japan, Minecraft, Game, Player"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header />
  </>
);

export default Home;
