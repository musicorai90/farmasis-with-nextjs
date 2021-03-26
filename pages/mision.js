import LayoutThree from "../components/layoutThree"
import Mision from "../components/mision"
import Head from 'next/head'

function Home() {
  return (
    <LayoutThree>
      <Head>
        <title>Farmasis - Mision</title>
      </Head>
      <Mision/>
    </LayoutThree>
  )
}

export default Home;