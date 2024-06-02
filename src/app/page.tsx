import Image from "next/image";
import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';

const appInfo = {
  name: "Send Multichain Message form Facaster frames using Axelar GMP",
  description: "My first facaster frame for sending Multichain Message form Facaster frames using Axelar GMP",
  image:"http://localhost:3000/home-frame.png",
  postUrl:"http://localhost:3000/api/home"
}

const frameMetadata = getFrameMetadata({
  buttons:[
    {
      label:"Send Message"
    }
  ],
  image: appInfo.image,
  postUrl: appInfo.postUrl
});

export const metadata: Metadata = {
  title: appInfo.name,
  description: appInfo.description,
  openGraph:{
    title: appInfo.name,
    description: appInfo.description,
    images: [
      {
        url: appInfo.image,
        width: "1366",
        height: "1024",
        alt: appInfo.name
      }
    ]
  },
  other:{
    ...frameMetadata
  }
}

export default function Home() {
  return (
    <main className="h-screen w-full flex">
      <div className="w-1/2 h-full bg-blue-500 p-24">
        <h1 className="text-white text-center text-5xl font-bold leading-loose pt-20 mt-2">
          Cross-Chain Messenger
        </h1>
        <p className="text-2xl text-white py-28 text-center">Send an onchain message from one chain to another directly from your feed, using the power of <span className="text-yellow-500">Farcaster frames</span> and <span className="text-yellow-500">Axelar GMP</span>.</p>

        <div className="flex gap-x-8 justify-center items-center">
          <Image 
          className="w-16 h-16"
            width={400}
            height={400}
            src='/facaster.png'
            alt="chains"
          />
          <span className="text-4xl font-extrabold  text-white pl-8 text-yellow-500">X</span>
        <Image 
            className="w-60 h-auto"
            width={558}
            height={165}
            src='/axelar.png'
            alt="chains"
          />
        </div>
      </div>

      <div className="w-1/2 h-full">
        <Image 
        className="object-cover w-full h-full"
          width={1024}
          height={633}
          src='/ethereum.jpg'
          alt="chains"
        />
      </div>
    </main>
  );
}
