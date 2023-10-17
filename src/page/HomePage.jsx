import DisplayNote from "../component/DisplayNote";

function HomePage() {
  return (
    <>
      <Header />
      <DisplayNote />
    </>
  );
}

function Header() {
  return (
    <header>
      <ul>
        <li>Beranda</li>
        <li>Tulis Catatan</li>
      </ul>
    </header>
  );
}
export default HomePage;
