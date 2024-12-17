import React, { useEffect } from "react";

// Definimos la interfaz para las partículas de confeti
interface ConfettiParticle {
  x: number;
  y: number;
  r: number;
  d: number;
  color: string;
  tilt: number;
  tiltAngleIncremental: number;
  tiltAngle: number;
  draw: () => void;
}

const Confite: React.FC = () => {
  useEffect(() => {
    let W = window.innerWidth;
    let H = window.innerHeight;
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d");
    const maxConfettis = 150;
    const particles: ConfettiParticle[] = []; // Usamos la interfaz ConfettiParticle

    const possibleColors = [
      "DodgerBlue",
      "OliveDrab",
      "Gold",
      "Pink",
      "SlateBlue",
      "LightBlue",
      "Gold",
      "Violet",
      "PaleGreen",
      "SteelBlue",
      "SandyBrown",
      "Chocolate",
      "Crimson"
    ];

    function randomFromTo(from: number, to: number) {
      return Math.floor(Math.random() * (to - from + 1) + from);
    }

    // Definimos la clase confettiParticle
    function confettiParticle(): ConfettiParticle {
      return {
        x: Math.random() * W,
        y: Math.random() * H - H,
        r: randomFromTo(11, 33),
        d: Math.random() * maxConfettis + 11,
        color: possibleColors[Math.floor(Math.random() * possibleColors.length)],
        tilt: Math.floor(Math.random() * 33) - 11,
        tiltAngleIncremental: Math.random() * 0.07 + 0.05,
        tiltAngle: 0,
        draw: function () {
          context!.beginPath();
          context!.lineWidth = this.r / 2;
          context!.strokeStyle = this.color;
          context!.moveTo(this.x + this.tilt + this.r / 3, this.y);
          context!.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
          return context!.stroke();
        }
      };
    }

    function Draw() {
      const results: void[] = [];

      requestAnimationFrame(Draw);
      context!.clearRect(0, 0, W, window.innerHeight);

      for (let i = 0; i < maxConfettis; i++) {
        results.push(particles[i].draw());
      }

      let particle: ConfettiParticle;
      let remainingFlakes = 0;
      for (let i = 0; i < maxConfettis; i++) {
        particle = particles[i];

        particle.tiltAngle += particle.tiltAngleIncremental;
        particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
        particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

        if (particle.y <= H) remainingFlakes++;

        if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
          particle.x = Math.random() * W;
          particle.y = -30;
          particle.tilt = Math.floor(Math.random() * 10) - 20;
        }
      }

      return results;
    }

    window.addEventListener(
      "resize",
      function () {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      },
      false
    );

    // Crear las partículas
    for (let i = 0; i < maxConfettis; i++) {
      particles.push(confettiParticle());
    }

    canvas.width = W;
    canvas.height = H;
    Draw();

    return () => {
      canvas.remove();
    };
  }, []);

  return (
    <div>
      <h1>¡Felicidades!</h1>
      <canvas id="canvas" style={{ position: "fixed", top: 0, left: 0 }}></canvas>
    </div>
  );
};

export default Confite;
