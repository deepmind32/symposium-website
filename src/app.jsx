import Navbar from "./components/navbar/navbar";

const menu_items = [{ href: "/", text: "Home" }];

const cta_item = {
  href: "https://forms.gle/gpUVx16gSf5jsM5x7",
  text: "Register Now",
};

export default function App() {
  return (
    <Navbar
      menu_items={menu_items}
      cta_item={cta_item}
      pictorial="/pictorial.png"
      wordmark="/logo--white.png"
    />
  );
}
