import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

import { PropsWithChildren } from 'react';

function layout({ children }: PropsWithChildren) {
  return (
    <main className="grid lg:grid-cols-5 h-screen ">
      {/* first-col hide on small screen */}
      <div className="hidden lg:block lg:col-span-1 lg:h-full">
        <Sidebar />
      </div>
      {/* second-col hide dropdown on big screen */}

      <div className="lg:col-span-4 overflow-y-scroll">
        <Navbar />
        <div className="py-16 px-4 sm:px-8 lg:px-16 ">{children}</div>
      </div>
    </main>
  );
}
export default layout;
