import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => (
  <main className="p-3 md:container md:mx-auto">{children}</main>
);

export default Main;
