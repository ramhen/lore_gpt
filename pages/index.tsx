import { Layout, Text, Page, Link } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'
import Image from 'next/image';

function Home() {
  return (
    
    <Page className="flex flex-col gap-12 bg-zinc-900 text-white min-h-screen min-w-full px-6 items-center font-basis">
      <section className="flex flex-col gap-6 lg:w-3/4">
        <Text variant="h1">🧚🏼 WoW Lore Tracker</Text>
        <Text className="text-zinc-200">
        This is lorebot, it will help you find information about events in the World of Wacraft universe.
        </Text>
      </section>

      <section className="flex flex-col gap-3 lg:w-3/4">
        <div className="lg:w-5/3">
          <Chat />
        </div>
        <a className=" justify-center " href="https://ramhen.com">by Henry.</a>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
