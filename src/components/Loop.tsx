import { Kicker } from "./Kicker";
import { LoopDial } from "./LoopDial";

export function Loop() {
  return (
    <section id="loop" className="sec" data-sec="3" aria-labelledby="loop-h">
      <div className="wrap">
        <Kicker n={3} pill="In development">The loop</Kicker>
        <h2 className="h2 rv" id="loop-h">Four steps, repeated, getting sharper each time.</h2>
        <LoopDial />
      </div>
    </section>
  );
}
