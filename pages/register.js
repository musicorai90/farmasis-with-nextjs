import Head from 'next/head'
import LayoutTwo from '../components/layoutTwo'
import Register from '../components/register'
import Head from 'next/head'

export default function Home() {
  return (
    <LayoutTwo>
      <Head>
        <title>Farmasis - Registrate</title>
      </Head>
      <Register/>
    </LayoutTwo>
  )
}
