import Image from "next/image";
import { css } from "@styled-system/css";

export default function Home() {
  return (
    <main>
      <div>
        <p className={css({ fontSize: "4xl" })}>
          Get started by editing&nbsp;
          <code>app/page.tsx</code>
        </p>
      </div>
    </main>
  );
}
