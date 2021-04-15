import './ServiceCard.css';
import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Card } from 'react-bootstrap';
import { MdDateRange } from "react-icons/md";
import { MdTimer } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceCard = ({ service }) => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.to(trans) }}
    >
      <Card className="service-card" data-aos="fade-up">
        <Card.Body>
          <div className="text-center pb-4">
            <img src={service.icon} alt="" />
            <h3 className="mb-0 pt-3">{service.title}</h3>
          </div>
          <p className="service-details-text mb-0">
            <span className="service-details-icon">
              <MdDateRange />
            </span>
            {service.classes} Tutorials
          </p>
          <p className="service-details-text mb-0">
            <span className="service-details-icon">
              <MdTimer />
            </span>
            {service.duration} Month
          </p>
          <p className="service-details-text mb-0">
            <span className="service-details-icon">
              <RiMoneyDollarCircleLine />
            </span>
            {service.price}$
          </p>
        </Card.Body>
      </Card>
    </animated.div>
  )
}

export default ServiceCard;