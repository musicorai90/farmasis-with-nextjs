import LayoutThree from "../components/layoutThree"
import Vision from "../components/vision"
import Head from 'next/head'

function Home() {
  return (
    <LayoutThree>
      <Head>
        <title>Farmasis - Vision</title>
      </Head>
      <Vision/>
    </LayoutThree>
  )
}

export default Home;