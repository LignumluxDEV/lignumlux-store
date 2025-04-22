import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>LignumLux</title>
        <meta name="description" content="Premium design with crypto cashback" />
      </Head>
      <nav className="flex justify-between items-center px-6 py-4 border-b border-[#C6A96A] bg-black text-[#C6A96A]">
        <img src="/logo.png" alt="LignumLux Logo" className="h-10" />
        <ul className="flex space-x-6">
          <li><a href="#info" className="hover:underline">Info</a></li>
          <li><a href="#products" className="hover:underline">Products</a></li>
          <li><a href="#custom" className="hover:underline">Custom Request</a></li>
          <li><a href="#wallet" className="hover:underline">My LIGX</a></li>
        </ul>
        <select className="bg-black border border-[#C6A96A] text-[#C6A96A] px-2 py-1 rounded">
          <option value="en" selected>EN</option>
          <option value="nl">NL</option>
          <option value="fr">FR</option>
          <option value="de">DE</option>
        </select>
      </nav>

      <main className="bg-black text-[#C6A96A]">
        <section id="info" className="p-8">
          <h2 className="text-3xl font-bold mb-4">About LignumLux</h2>
          <p>We create interior and exterior design pieces with crypto cashback rewards. Every order earns you LIGX tokens on Solana.</p>
        </section>

        <section id="products" className="p-8">
          <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-[#C6A96A] rounded p-4">
              <img src="/placeholder1.jpg" alt="Product 1" className="w-full mb-2" />
              <h3 className="text-xl font-semibold">Product Title 1</h3>
              <p>Short product description goes here.</p>
            </div>
            <div className="border border-[#C6A96A] rounded p-4">
              <img src="/placeholder2.jpg" alt="Product 2" className="w-full mb-2" />
              <h3 className="text-xl font-semibold">Product Title 2</h3>
              <p>Short product description goes here.</p>
            </div>
            <div className="border border-[#C6A96A] rounded p-4">
              <img src="/placeholder3.jpg" alt="Product 3" className="w-full mb-2" />
              <h3 className="text-xl font-semibold">Product Title 3</h3>
              <p>Short product description goes here.</p>
            </div>
          </div>
        </section>

        <section id="custom" className="p-8">
          <h2 className="text-3xl font-bold mb-4">Request Custom Work</h2>
          <p>Have something special in mind? Reach out and we'll craft it for you.</p>
        </section>

        <section id="wallet" className="p-8">
          <h2 className="text-3xl font-bold mb-4">Your LIGX Tokens</h2>
          <button className="bg-[#C6A96A] text-black px-4 py-2 rounded hover:bg-[#b08c54]">Connect Wallet</button>
          <p className="mt-2">Balance: <span id="ligx-balance">0 LIGX</span></p>
        </section>
      </main>

      <footer className="text-center text-sm py-6 border-t border-[#C6A96A] text-[#C6A96A]">
        <img src="/logo.png" alt="LignumLux Logo" className="mx-auto h-6 mb-2" />
        <p>© 2025 LignumLux – Light from wood. Crypto in your pocket.</p>
      </footer>
    </>
  );
}
