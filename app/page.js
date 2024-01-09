import Header from "./header";
import Nav from "./nav";
import Content from "./content";
import Music from "./music";
import Chat from "./chat";

export default function HomePage() {
  return (
    <main className="transition-all h-screen p-5 lg:p-10 xl:px-24 2xl:px-48 space-y-2 lg:space-y-4 2xl:space-y-6 bg-primaryBackground">
        <div className="flex h-1/5">
          <Header />
        </div>
      <div className="flex h-4/5 gap-2 lg:gap-4">
        <Nav />
        <div className="flex lg:flex-row flex-col w-full gap-2 lg:gap-4 ">
          <Content/>
          <div className="flex lg:flex-col flex-row lg:w-1/4 h-1/4 lg:h-full gap-2 lg:gap-4">
            <Music />
            <Chat />
          </div>
        </div>
      </div>
    </main>
  );
}
