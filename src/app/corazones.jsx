// components/Corazones.tsx
"use client";
import { useEffect } from "react";

export default function Corazones() {
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement("div");
      heart.innerText = "💖";
      heart.className = "floating-heart";
      heart.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 4000);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <style>{`
      .floating-heart {
        position: fixed;
        top: 100vh;
        font-size: 2rem;
        animation: floatUp 4s linear forwards;
        z-index: 50;
      }
      @keyframes floatUp {
        to {
          transform: translateY(-110vh);
          opacity: 0;
        }
      }
    `}</style>
  );
}
