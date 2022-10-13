import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react';

const Home: NextPage = () => {
  const [url, setURL] = useState<string>("");
  return (
    <>
      <input type="date" onChange={e => { setURL("/result/" + e.currentTarget.value) }} />
      <Link href={url} >
        <button>Jump!</button>
      </Link>
    </>
  )
}

export default Home
