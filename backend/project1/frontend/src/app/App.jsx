import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";

const demodata = [
  { originalUrl: "https://github.com", shortCode: "qqqqqq", clicks: 6 },
];

function App() {
  const [urls, setUrls] = useState(demodata);
  const [inputValue, setInputValue] = useState("");
  const [currentUrl, setCurrentUrl] = useState(null);

  async function fetchUrls() {
    const response = await axios.get("http://localhost:5173/api/url");
    const responseData = response.data;
    // setUrls(responseData.data.urls);

    console.log(response);
  }

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f7fb] px-6 py-12 font-sans text-[#172033]">
      <section className="mx-auto max-w-[1000px]">
        <header className="mb-8">
          <p className="m-0 text-[13px] font-extrabold tracking-[1.5px] text-[#5865f2]">
            LINKLY
          </p>
          <h1 className="my-2 text-[clamp(2rem,5vw,3.4rem)] tracking-[-1px]">
            Your links, simplified.
          </h1>
          <p className="m-0 text-base text-[#687386]">
            Create and manage short links from one simple dashboard.
          </p>
        </header>

        <section className="mb-7 rounded-[18px] bg-gradient-to-br from-[#5865f2] to-[#7a5cf5] p-5 shadow-[0_12px_30px_#5865f238]">
          <div className="flex flex-wrap gap-3">
            <input
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Paste your long URL here..."
              className="min-w-[220px] flex-1 rounded-[10px] border-0 px-4 py-[15px] text-[15px] outline-none"
            />
            <button className="cursor-pointer rounded-[10px] border-0 bg-[#172033] px-[22px] font-bold text-white">
              SHORTEN URL
            </button>
          </div>
        </section>

        <div className="mb-[14px] flex items-center justify-between">
          <h2 className="m-0 text-xl">Your links</h2>
          <span className="text-sm text-[#687386]">{urls.length} total</span>
        </div>

        <section className="grid gap-[14px]">
          {urls.length === 0 ? (
            <div className="rounded-2xl bg-white p-12 text-center text-[#687386] shadow-[0_5px_20px_#1720330b]">
              No links yet. Add your first URL above.
            </div>
          ) : (
            urls.map((url) => (
              <article
                key={url.shortCode}
                className="rounded-2xl bg-white p-5 shadow-[0_5px_20px_#1720330b]"
              >
                <div className="flex flex-wrap items-center justify-between gap-5">
                  <div className="min-w-0">
                    <a
                      href={`http://localhost:3000/${url.shortCode}`} target="_blank"
                      className="mb-[7px] mt-0 font-bold text-[#5865f2]"
                    >
                      /{url.shortCode}
                    </a>
                    <p className="m-0 max-w-[620px] overflow-hidden text-ellipsis whitespace-nowrap text-[#687386]">
                      {url.originalUrl}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[#687386]">
                      {url.clicks} clicks
                    </span>
                    <button
                      onClick={() =>
                        navigator.clipboard?.writeText(url.shortCode)
                      }
                      className="cursor-pointer rounded-lg border border-[#dce2ec] bg-white px-[13px] py-[9px] font-bold text-[#39445a]"
                    >
                      COPY
                    </button>
                    <button className="cursor-pointer rounded-lg border-0 bg-[#fff0f0] px-[13px] py-[9px] font-bold text-[#d34b4b]">
                      DELETE
                    </button>
                  </div>
                </div>
              </article>
            ))
          )}
        </section>
      </section>
    </main>
  );
}

export default App;
