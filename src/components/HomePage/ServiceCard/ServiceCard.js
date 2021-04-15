import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Card } from 'react-bootstrap';
import { MdDateRange } from "react-icons/md";
import { MdTimer } from "react-icons/md";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceCard = ({service}) => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.to(trans) }}
    >
      <Card className="service-card">
        <Card.Body>
          <div className="text-center pb-4">
            <img src={service.icon} alt="" />
            <h3 className="mb-0 pt-3">{service.title}</h3>
          </div>
          <p className="service-details-text mb-0">
            <spna className="service-details-icon">
              <MdDateRange />
            </spna>
            {service.classes} Tutorials
                    </p>
          <p className="service-details-text mb-0">
            <spna className="service-details-icon">
              <MdTimer />
            </spna>
            {service.duration} Month
                    </p>
        </Card.Body>
      </Card>
    </animated.div>
  )
}

export default ServiceCard;