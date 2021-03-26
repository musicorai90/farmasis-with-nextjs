import LayoutThree from "../components/layoutThree"
import Nosotros from "../components/nosotros"
import Head from 'next/head'

function Home() {
  return (
    <LayoutThree>
      <Head>
        <title>Farmasis - Nosotros</title>
      </Head>
      <Nosotros/>
    </LayoutThree>
  )
}

export default Home;