import Image from "next/image";

import AccountComponent from "./components/accounts";
import { PayoutRequestComponent } from "./components/createPayout";
import ViewPayouts from "./components/viewPayouts";
export default function Home() {
  console.log(process.env.API_TOKEN)
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <AccountComponent />
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <PayoutRequestComponent />
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <ViewPayouts />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
