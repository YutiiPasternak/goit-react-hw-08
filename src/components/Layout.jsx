import AppBar from "./appBar";

export default function Layout({ children }) {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
}
