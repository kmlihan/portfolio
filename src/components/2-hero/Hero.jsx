import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./image.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Junior Full Stack Developer.
        </motion.h1>

        <p className="sub-title">
         Hey there! 👋 I’m KHALED MLIHAN, a Junior Full Stack Developer who
          enjoys transforming ideas into real-world applications. My journey in
          coding started with Java, and I quickly fell in love with backend
          development using Spring Boot and building dynamic UIs with Angular and  React. I
          thrive in solving complex problems, optimizing performance, and
          learning new technologies. Right now, I’m exploring microservices
          architecture and cloud computing. When I’m not coding, you’ll find me
          exploring new tech trends, solving coding challenges, or contributing
          to open-source projects. Let’s build something amazing together! 🚀
        </p>

        <div className="all-icons flex">
          <a href="https://github.com/kmlihan" target="_blank">
            <div className="icon icon-github"></div>
          </a>
          <a href="https://www.linkedin.com/in/khaled-mlihan-250057208/" target="_blank" >
            <div className="icon icon-linkedin-square"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
