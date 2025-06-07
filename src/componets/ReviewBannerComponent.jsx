import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "../css/components/review-banner.css";

function ReviewBannerComponent(props) {
  const { ref, inView } = useInView({
    triggerOnce: true, // solo una vez
    threshold: 0.4,     // 40% del componente visible
  });

  return (
    <section ref={ref} className="review-highlight" aria-labelledby="review-title">
      <blockquote className="review-highlight__quote">
        <p data-aos="fade-up" id="review-title" className="review-highlight__text poppins-regular">
          {props.p}
        </p>
        <footer data-aos="fade-up" className="review-highlight__author poppins-light">{props.autor}</footer>
      </blockquote>
      <aside className="review-highlight__stats poppins-regular" aria-label="Five star reviews">
        <strong className="review-highlight__number">
          {inView ? (
            <CountUp
              start={props.start || 0}
              end={props.end || 270}
              duration={2}
              suffix="+"
            />
          ) : (
            props.start || 0
          )}
        </strong>
        <span className="review-highlight__label">{props.exito}</span>
      </aside>
    </section>
  );
}

export default ReviewBannerComponent;
