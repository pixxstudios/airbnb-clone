import type { NextPage } from 'next'
import { Nunito } from 'next/font/google'

const font = Nunito({
  subsets: ['latin']
})

const Home: NextPage = () => {
  return (
    <div className={font.className}>
      <div className="text-rose-500 text-2xl">Hello Airbnb!</div>
    </div>
  )
}

export default Home
