import React, { useEffect, useRef } from "react";

// These scripts are needed for GSAP + jQuery animation
const GSAP_CDN = "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenMax.min.js";
const JQUERY_CDN = "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js";

const css = `
.svg-container {
  background: transparent;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  min-height: 400px;
  max-width: 500px;
}
.svg-container svg {
  width: 100%;
  height: auto;
  display: block;
}
.playBtn {
  padding: 1rem 1.2rem;
  font-size: 1.2rem;
  line-height: 1;
  color: #000;
  background-color: #eeeeee;
  border: 1px solid #eeeeee;
  font-weight: normal;
  vertical-align: top;
  display: inline-block;
  cursor: pointer;
  position: absolute;
  top: 30px;
  left: 30px;
  transition: background 0.7s, color 0.7s, border-color 0.7s;
}
.playBtn:focus { outline: none; }
.playBtn:hover { color: #fff; background: #000; border-color: #000; }
`;

export default function MrAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Dynamically load jQuery and GSAP if not already loaded
    function loadScript(src) {
      return new Promise((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve();
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        document.body.appendChild(script);
      });
    }

    async function runAnimation() {
      await loadScript(JQUERY_CDN);
      await loadScript(GSAP_CDN);

      // Animation code, almost identical to your original JS, adapted for React
      const $ = window.$;
      const TimelineMax = window.TimelineMax;

      var mrTraje = $('#mrTraje'),
        mrCharacter = $('.mrCharacter'),
        playBtn = $('.playBtn'),
        tl = new TimelineMax();

      function getMrAnimation() {
        var mrTimeline = new TimelineMax();
        mrTimeline
          .staggerFrom('#mrTraje *', 0.2, { y: 200, autoAlpha: 0 }, 0.05)
          .from('.cara', 0.6, { y: 100, autoAlpha: 0, ease: Power1.easeOut }, "carita")
          .from('.pelo', 0.5, { y: 60, autoAlpha: 0, ease: Power1.easeOut }, "carita")
          .from('.oreja', 0.5, { x: -30, autoAlpha: 0, ease: Bounce.easeOut }, "mrCarita")
          .from('.sombraCara', 0.3, { autoAlpha: 0 }, "mrCarita")
          .from('.barbilla', 0.5, { y: 10, ease: Bounce.easeOut, autoAlpha: 0 }, "mrCarita")
          .from('.mrCara', 0.5, { y: 30, autoAlpha: 0, ease: Elastic.easeOut }, "mrCarita")
          .from('.ojos', .6, { y: -15, autoAlpha: 0, ease: Elastic.easeOut }, "mrCarita")
          .from('.cejas', .6, { y: -12, ease: Elastic.easeOut, autoAlpha: 0 }, "mrCarita")
          .from('.pupilaDcha', 0.3, { x: 20, autoAlpha: 0, ease: Power3.easeInOut }, "mrCarita")
          .from('.pupilaIzda', 0.3, { x: 20, autoAlpha: 0, delay: .05, ease: Power3.easeInOut }, "mrCarita")
          .from('.brazoDcho', 0.5, { y: '-=40', x: '-=40', autoAlpha: 0, ease: Power3.easeOut }, "brazo")
          .from('.brazoIzdo', 0.5, { y: '-=40', x: '+=40', delay: .1, autoAlpha: 0, ease: Power3.easeOut }, "brazo")
          .from('.piernas', 0.5, { y: '-=40', autoAlpha: 0, ease: Power3.easeOut });
        return mrTimeline;
      }
      function getMr2Animation() {
        var mr2Timeline = new TimelineMax({ delay: .5, repeat: 3, repeatDelay: 1, yoyo: true });
        mr2Timeline
          .to('.mrCara', .3, { x: '+=10', rotationY: -30, ease: Back.easeInOut, transformOrigin: "left 50% -100" }, "lateral")
          .to('.oreja', .3, { x: '-=1' }, "lateral")
          .to('.cejas', .6, { x: '+=8', ease: Back.easeInOut }, "lateral")
          .to('.ojos', .3, { x: '+=8', delay: .1, ease: Back.easeInOut }, "lateral")
          .to('.pupilaas', .5, { x: '+=11', ease: Back.easeInOut }, "lateral")
          .to('.pupilaas', .5, { x: '-=8', delay: .5, ease: Back.easeInOut }, "lateral")
          .to('.barbilla', .3, { x: '+=4', ease: Back.easeInOut }, "lateral")
          .to('.brazoDcho', .6, { y: '-=13', rotation: 9, ease: Back.easeInOut }, "expresion")
          .to('.brazoIzdo', .5, { y: '-=8', rotation: -9, ease: Back.easeInOut }, "expresion")
          .to(mrTraje, .6, { y: '-=5', ease: Back.easeInOut }, "expresion")
          .to('.cara', .6, { y: '-=5', ease: Back.easeInOut }, "expresion")
          .to('.mrCara', .5, { y: '-=6', ease: Back.easeIn }, "expresion")
          .to('.oreja', .6, { y: '-=7', ease: Back.easeInOut }, "expresion")
          .to('.cejaDcha', .65, { y: '-=8', ease: Back.easeInOut }, "expresion")
          .to('.cejaIzda', .65, { y: '-=7', delay: .05, ease: Back.easeInOut }, "expresion")
          .to('.ojos', .6, { y: '-=4', ease: Back.easeInOut }, "expresion")
          .to('.pelo', .7, { y: '-=8', ease: Elastic.easeInOut }, "expresion")
          .to('.sombraCara', .6, { y: '-=6', ease: Back.easeInOut }, "expresion")
          .to('.barbilla', .6, { y: '-=6', ease: Back.easeInOut }, "expresion")
          .to('.corbataBottom', .6, { y: '-=6', rotation: 5, ease: Back.easeInOut }, "expresion")
          .to('.corbataTop', .6, { y: '-=4', delay: .05, rotation: -3, ease: Back.easeInOut }, "expresion")
          .to('.parpadoIzdo', .04, { attr: { height: 5.2 } }, "parpados")
          .to('.parpadoDcho', .04, { attr: { height: 5.2 }, delay: .03 }, "parpados")
          .to('.parpado2Izdo', .04, { attr: { height: 3.2, y: '-=2' } }, "parpados")
          .to('.parpado2Dcho', .04, { attr: { height: 3.2, y: '-=2' }, delay: .03 }, "parpados")
          .to('.parpadoIzdo', .04, { attr: { height: .01 } }, "parpados2")
          .to('.parpadoDcho', .04, { attr: { height: .01 }, delay: .03 }, "parpados2")
          .to('.parpado2Izdo', .04, { attr: { height: .01, y: '+=3' } }, "parpados2")
          .to('.parpado2Dcho', .04, { attr: { height: .01, y: '+=3' }, delay: .03 }, "parpados2");
        return mr2Timeline;
      }
      tl.add(getMrAnimation(), "mrAnimation").add(getMr2Animation(), "mrAnimation2");

      playBtn.click(function () {
        tl.play('mrAnimation2');
      });
    }

    runAnimation();
  }, []);

  // Inline style for the component (or put in your global CSS)
  useEffect(() => {
    if (!document.getElementById("mrAnimStyles")) {
      const style = document.createElement("style");
      style.id = "mrAnimStyles";
      style.innerHTML = css;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="svg-container" ref={containerRef}>
      <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 500 500">
        {/* ... put your SVG content here, EXCLUDING the <div class="svg-container"> ... */}
        {/* ... copy from your HTML above, from <radialGradient> to </svg> ... */}
        {/* (SVG content omitted for brevity, but you should paste it here) */}
      </svg>
      <button className="playBtn transition-700">Play Again</button>
    </div>
  );
}