import { useAddress } from '@thirdweb-dev/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import ConnectButton from '~/components/container/header/connect-button'
import HomeDemoPng from '~/public/images/homedemo.png'

const Home: NextPage = () => {
  const address = useAddress()
  return (
    <>
      <section className="mt-28 mb-24 flex font-bold">
        <div className="text-sm lg:w-2/3">
          <div>BEST ASSETS FOR NET WEB</div>
          <div className="my-5  text-7xl">
            Collect super rare digital assets.
          </div>
          <div className="my-10 w-3/4 text-gray-600">
            Digital marketplace for crypto collectibles and non-fungible
            tokens(NFTS). Buy,sell and discover exclusive digital assets.
          </div>
          <div className="flex gap-5">
            <button className="flex items-center rounded-full bg-blue-500 p-5 px-8 text-lg font-semibold text-white hover:bg-blue-400">
              Explore
            </button>
            {address ? (
              <button className="rounded-full border p-2 px-8 text-lg font-semibold hover:bg-gray-200 dark:border-gray-500 dark:hover:bg-gray-900">
                Profile
              </button>
            ) : (
              <ConnectButton className="px-8 text-lg" />
            )}
          </div>
        </div>
        <div className="relative hidden w-1/3 lg:inline-block">
          <div className="overflow-hidden rounded-3xl">
            <Image src={HomeDemoPng} alt="demo" width={500} />
          </div>
        </div>
      </section>
      <section>
        <div className="text-3xl">Hot bid</div>
        <div></div>
      </section>
    </>
  )
}

export default Home
