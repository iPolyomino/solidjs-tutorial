import { createSignal, Switch, Match } from "solid-js";
import "./ControlButton.css";

export default function ControlButton({
  setStatus,
}: {
  setStatus: (status: string) => void;
}) {
  const [started, setStarted] = createSignal(false);
  const [clicktime, setClicktime] = createSignal(0);

  const clickAction = () => {
    const current = new Date().getTime();
    if (clicktime() === 0) {
      setClicktime(current);
      setStarted(true);
      setStatus("Click the stop button after 10 seconds");
      return;
    }
    if (started()) {
      setStarted(false);
      setStatus(`${(current - clicktime()) / 1000}`);
      return;
    }
    setStatus("Click the start button");
    setClicktime(0);
  };

  return (
    <button class="increment" onClick={clickAction}>
      <Switch fallback={<>Reset</>}>
        <Match when={clicktime() === 0}>Start</Match>
        <Match when={started()}>Stop</Match>
      </Switch>
    </button>
  );
}
