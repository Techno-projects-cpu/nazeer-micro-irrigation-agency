/**
 * Without JavaScript the reveal never fires, so the resting state is retired
 * here rather than leaving anything invisible. Rendered in every root layout.
 */
export function RevealFallback() {
  return (
    <noscript>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "[data-reveal]{opacity:1 !important;transform:none !important}" +
            "[data-reveal] .word-rise>span{transform:none !important}" +
            "[data-reveal] .plate-zoom img{transform:none !important}" +
            ".rule-draw::before,.rule-draw-once::before{transform:none !important;animation:none !important}",
        }}
      />
    </noscript>
  );
}
