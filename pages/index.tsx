import type { NextPage } from 'next'
import { Nunito } from 'next/font/google'

const font = Nunito({
  subsets: ['latin']
})

const Home: NextPage = () => {
  return (
   <div className={font.className}>Hello Airbnb!</div>
  )
}

export default Home
