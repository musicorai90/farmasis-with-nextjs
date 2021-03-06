import Head from 'next/head'
import LayoutTwo from '../components/layoutTwo'
import Login from '../components/login'

export default function Home() {
  return (
    <LayoutTwo>
      <Head>
        <title>Farmasis - Login</title>
      </Head>
      <Login/>
    </LayoutTwo>
  )
}
