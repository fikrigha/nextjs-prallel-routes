import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <Link href={"/login"}>Log in</Link>
      </header>
      <h1>Hello world!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id quam ut
        magna fermentum posuere in egestas justo. Fusce id scelerisque odio.
        Mauris a diam massa. Fusce efficitur viverra dui, eu porta nisi lobortis
        ac. In eget nulla felis. Morbi eu scelerisque libero. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Aliquam eu libero libero. In hac habitasse platea dictumst.
        Phasellus nec consectetur velit, a accumsan nulla. Integer a velit in
        arcu euismod auctor. In hac habitasse platea dictumst. In eu gravida
        ipsum, a efficitur ligula.
      </p>
    </main>
  );
}
