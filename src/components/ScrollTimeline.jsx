"use client";

import { useEffect } from "react";

function ScrollingWords({
  items = [],
  animate = true,
  hue = 280,
  startVh = 50,
  spaceVh = 50,
  className = "",
}) {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.scrollAnimate = String(animate);
    root.style.setProperty("--scroll-hue", String(hue));
    root.style.setProperty("--scroll-start", `${startVh}vh`);
    root.style.setProperty("--scroll-space", `${spaceVh}vh`);
  }, [animate, hue, startVh, spaceVh]);

  return (
    <>
      <div
        className={`w-full ${className}`}
        style={{
          ["--scroll-count"]: items.length,
        }}
      >
        <div className="scroll-header">
          <section className="scroll-content">
            <h2 className="scroll-prefix">
              <span aria-hidden="true">you can&nbsp;</span>
            </h2>

            {/* Visible cycling words */}
            <ul aria-hidden="true" className="scroll-words-list">
              {items.map((word, i) => (
                <li key={i} style={{ ["--i"]: i }} className="scroll-word-item">
                  {word}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Scoped styles for the component */}
      <style jsx global>{`
        :root {
          --scroll-start: 50vh;
          --scroll-space: 50vh;
          --scroll-hue: 280;
          --scroll-accent: light-dark(
            hsl(var(--scroll-hue) 100% 50%),
            hsl(var(--scroll-hue) 90% 75%)
          );
        }

        .scroll-header {
          --font-level: 4;
          --font-size-min: 24;
          --fluid-min: calc(
            var(--font-size-min) * pow(1.1, var(--font-level, 0))
          );
          --fluid-max: calc(20 * pow(1.33, var(--font-level, 0)));
          --fluid-preferred: calc(
            (var(--fluid-max) - var(--fluid-min)) / (1500 - 375)
          );
          --fluid-type: clamp(
            calc(var(--fluid-min) / 16 * 1rem),
            calc(
              (var(--fluid-min) / 16 * 1rem) -
                ((var(--fluid-preferred) * 375 / 16) * 1rem) +
                (var(--fluid-preferred) * 100vi)
            ),
            calc(var(--fluid-max) / 16 * 1rem)
          );
          font-size: var(--fluid-type);
          position: sticky;
          top: calc((var(--scroll-count) - 1) * -1lh);
          line-height: 1.2;
          display: flex;
          align-items: start;
          width: 100%;
          margin-bottom: var(--scroll-space);
        }

        .scroll-content {
          display: flex;
          width: 100%;
          align-items: start;
          justify-content: center;
          padding-top: calc(var(--scroll-start) - 0.5lh);
        }

        .scroll-prefix {
          position: sticky;
          top: calc(var(--scroll-start) - 0.5lh);
          margin: 0;
          font-weight: 600;
          font-size: inherit;
        }

        .scroll-words-list {
          font-weight: 600;
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: inherit;
        }

        .scroll-word-item {
          --dimmed: color-mix(in oklch, canvasText, transparent 80%);
          background: linear-gradient(
            180deg,
            var(--dimmed) 0 calc(var(--scroll-start) - 0.5lh),
            var(--scroll-accent) calc(var(--scroll-start) - 0.55lh)
              calc(var(--scroll-start) + 0.55lh),
            var(--dimmed) calc(var(--scroll-start) + 0.5lh)
          );
          background-attachment: fixed;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
        }
      `}</style>
    </>
  );
}

export { ScrollingWords };
