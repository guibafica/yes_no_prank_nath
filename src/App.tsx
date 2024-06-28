import { Waves } from "./components/waves";
import { Button } from "./components/button";

function App() {
  return (
    <div className="relative overflow-hidden">
      <Waves />

      <div className="w-screen bg-slate-200 h-screen flex-row items-center justify-center flex">
        <div className="h-screen w-2/4 flex-col flex items-center justify-center z-10 p-24">
          {/* textos INICIO*/}
          <div className="z-10 w-full">
            <h1 className="text-main-text text-left text-8xl font-bold -ml-[6px]">
              HI,
            </h1>

            <h1 className="text-main-text text-2xl font-semibold mt-1">
              Ea nostrud officia nulla fugiat consectetur.
            </h1>

            <h1 className="text-main-text text-sm font-semibold mt-10">
              Laborum elit occaecat fugiat ex sint.
            </h1>

            <p className="text-slate-600 text-sm font-thin mt-1">
              Laborum dolore consequat dolore non aliquip do. Do anim laborum
              proident aute. Aliquip nisi enim deserunt ex et est quis
              exercitation proident mollit ut pariatur. Laborum velit eu minim
              non sint deserunt dolore.
            </p>
          </div>
          {/* textos FINAL*/}

          <div className="w-full flex flex-row items-center justify-between mt-32">
            <Button type="YES" clickFunction={() => {}} />

            <Button type="NO" clickFunction={() => {}} />
          </div>
        </div>

        <div className="bg-blue-500 h-screen w-2/4"></div>
      </div>
    </div>
  );
}

export default App;
