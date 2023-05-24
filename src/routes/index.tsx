import { Title } from "solid-start";
import { createSignal } from "solid-js";
import ControlButton from "~/components/ControlButton";

export default function Home() {
  const [status, setStatus] = createSignal("start");
  return (
    <main>
      <Title>Stop after 10 seconds exactly</Title>
      <h2>Stop after 10 seconds exactly</h2>
      <p>{status()}</p>
      <ControlButton setStatus={setStatus} />
    </main>
  );
}
