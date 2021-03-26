import Layout from "../components/layout"
import Product from "../components/product"
import Head from 'next/head'

function Home() {
  const imagen = "/img/photo3.jpg"
  
  return (
    <Layout>
      <Head>
        <title>Farmasis - Medicamentos</title>
      </Head>
      <Product photo={imagen} />
      <Product photo={imagen} />
      <Product photo={imagen} />
      <Product photo={imagen} />
      <Product photo={imagen} />
      <Product photo={imagen} />
      <Product photo={imagen} />
      <Product photo={imagen} />
      <Product photo={imagen} />
    </Layout>
  )
}

export default Home;