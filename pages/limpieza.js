import Layout from "../components/layout"
import Product from "../components/product"
import Head from 'next/head'

function Home() {
  const imagen = "/img/photo2.jpg"
  
  return (
    <Layout>
      <Head>
        <title>Farmasis - Limpieza</title>
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
