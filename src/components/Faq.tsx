import { FaqList } from "./FaqList";
import { Kicker } from "./Kicker";

export function Faq() {
  return (
    <section id="faq" className="sec" data-sec="10" aria-labelledby="faq-h">
      <div className="wrap">
        <Kicker n={10}>Questions</Kicker>
        <h2 className="h2 rv" id="faq-h">Frequently asked.</h2>
        <FaqList />
      </div>
    </section>
  );
}
