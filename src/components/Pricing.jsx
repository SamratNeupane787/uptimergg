import React from 'react'
export default function PricingSection() {
  return (
    <div className=" pb-8">
      <div className=" py-12" id="pricing">
        <h1 className=" text-5xl text-center font-semibold">Our Pricing</h1>
      </div>
      <div className=" bg-black text-white flex items-center justify-center  px-4">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8">
          <div className="h-[32rem] bg-zinc-900 rounded-2xl p-8 shadow-xl border border-zinc-800 flex flex-col">
            <div className="mb-4">
              <div className="text-3xl font-semibold text-red-600">
                $15<span className="text-base font-normal">/month</span>
              </div>
              <div className="text-gray-400 mt-1">
                Perfect for individuals and small projects
              </div>
            </div>
            <ul className="mt-6 space-y-4 text-sm text-gray-300">
              <li>✅ 50 monitors</li>
              <li>✅ 5-minute monitoring interval</li>
              <li>✅ HTTP, port & ping monitoring</li>
              <li>✅ Keyword monitoring</li>
              <li>✅ SSL & Domain expiration monitoring</li>
              <li>✅ Basic status pages</li>
            </ul>
            <button className="mt-auto bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl py-2 px-4 mt-8 transition">
              Get started →
            </button>
          </div>

          <div className=" bg-zinc-900 rounded-2xl p-8 shadow-xl border border-zinc-800 flex flex-col relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              Most Popular
            </div>
            <div className="mb-4">
              <div className="text-3xl font-semibold text-red-600">
                $49<span className="text-base font-normal">/month</span>
              </div>
              <div className="text-gray-400 mt-1">
                Ideal for growing teams and businesses
              </div>
            </div>
            <ul className="mt-6 space-y-4 text-sm text-gray-300">
              <li>✅ 100 monitors</li>
              <li>✅ 60-second monitoring interval</li>
              <li>✅ HTTP, port & ping monitoring</li>
              <li>✅ Keyword monitoring</li>
              <li>✅ SSL & Domain expiration monitoring</li>
              <li>✅ Full-featured status pages</li>
              <li>✅ 3 login seats included</li>
              <li>✅ All 12 integrations</li>
            </ul>
            <button className="mt-auto bg-red-600 text-white hover:bg-gray-200 rounded-xl py-2 px-4 mt-8 font-semibold transition ">
              Buy now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}