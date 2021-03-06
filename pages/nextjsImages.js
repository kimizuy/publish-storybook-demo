import { Links } from 'components/Links'
import Image from 'next/image'
import Head from 'next/head'

export default function NextjsImages() {
  return (
    <div>
      <Head>
        <title>Nextjs Images</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Links />
      <main>
        <h2>This image uses a remote image</h2>
        <Image src="/vercel.svg" alt="Vercel Logo" width={200} height={200} />
        <h2>This image uses a static import with a "placeholder="blur"</h2>
        <Image
          src="/nyan-cat.png"
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
          alt="Nyan Cat"
          width="100px"
          height="100px"
        />
      </main>
    </div>
  )
}
