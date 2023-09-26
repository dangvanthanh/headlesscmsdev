import { css } from "@styled-system/css";

export default function Home() {
  return (
    <main role="main">
      <p className={css({ fontSize: "lg", textAlign: "center", py: "8" })}>
        Get started by editing&nbsp;
        <code>app/page.tsx</code>
      </p>
    </main>
  );
}
