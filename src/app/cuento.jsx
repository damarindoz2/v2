// components/Cuento.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence} from "framer-motion";
import Corazones from "./corazones.jsx";

const frases = [
  "Había una vez una princesa que ya no creía en cuentos. Se llamaba Luna, aunque nadie sabía que antes había sido una estrella en el cielo. Estaba cansada de los finales felices que ignoraban lo difícil que era sobrevivir a los días tristes.",
  "Vivía en una torre que había construido para protegerse, no porque estuviera atrapada, sino porque creía que así tendría paz. Desde su ventana contemplaba el cielo nocturno con nostalgia, recordando cuando formaba parte de él.",
  "Lo que no sabía era que no era la única estrella que había decidido abandonar el firmamento.",
  "Una noche de tormenta, cuando el mundo parecía demasiado ruidoso y las nubes ocultaban al resto de las estrellas, un joven llamado Sol llegó a su torre.",
  "No llegó con armadura ni caballo. Llegó con ojeras, con heridas propias, y con una sonrisa cansada pero genuina.",
  "- No vengo a rescatarte, le dijo, ofreciéndole una flor que había protegido de la lluvia.",
  "- Tampoco quiero que me salves, respondió ella, pero aun así lo invitó a entrar.",
  "Lo que Luna no sabía era que Sol también había sido una estrella. Él tampoco lo recordaba, solo sentía un vacío inexplicable, como si parte de él hubiera quedado en algún lugar muy lejos de la Tierra.",
  "No fue un encuentro mágico con fuegos artificiales. Fue silencioso, fue real.",
  "Los días se convirtieron en semanas. Las semanas, en meses.",
  "Luna aprendió que Sol cargaba con el peso de un mundo que no entendía. Él la cuidaba como si fuera de cristal, pero también la admiraba como si fuera de fuego.",
  "Sol descubrió que Luna veía el mundo con ojos que parecían haber contemplado universos enteros. Ella, aunque a veces quería rendirse, siempre encontraba fuerza en su abrazo.",
  "- A veces siento que no pertenezco a este lugar, le confesó ella una noche, mientras él le cepillaba el cabello antes de dormir.",
  "- Yo tampoco, le respondió el. Pero desde que te encontré, por primera vez siento que pertenezco a alguien.",
  "Había días en que discutían, donde la torre parecía más prisión que hogar. Días en que el príncipe lloraba y la princesa se sentía frágil.",
  "Pero ninguno huyó.",
  "Porque entendieron que el verdadero amor no está hecho de guiones perfectos, sino de elección. Se eligieron cada día, incluso en los días en que todo parecía desmoronarse.",
  "Una noche particularmente estrellada, mientras observaban el cielo desde la ventana de la torre, Luna recordó súbitamente quién era.",
  "- Creo que yo era una estrella, susurró con lágrimas en los ojos. Una estrella que decidió caer.",
  "Sol la miró fijamente y, en lugar de reírse o pensar que estaba loca, tomó su mano.",
  "- Eso explicaría por qué siempre que te miro siento que estoy viendo el cielo.",
  "Esa noche, mientras dormía, Sol tuvo un sueño donde se vio a sí mismo brillando junto a Luna en el firmamento. Cuando despertó, supo la verdad.",
  "- Creo que yo también era una estrella, le dijo durante el desayuno. Quizás por eso te encontré entre millones de personas.",
  "Luna sonrió, y sus ojos según Sol, parecían contener galaxias enteras.",
  "Y así, sin planearlo, construyeron un puente desde su torre hasta el mundo. Y caminaron juntos en medio de el.",
  "El mundo a su alrededor seguía siendo imperfecto. Las noticias hablaban de crisis, las calles parecían más grises, la gente más distante. Pero ellos habían aprendido la lección más importante de las estrellas caídas: que brillar no depende del lugar donde estés, sino de la decisión de hacerlo juntos incluso en la oscuridad más profunda.",
  "Habría días difíciles, tormentas que amenazarían con derrumbar su torre. Momentos en que ella volvería a sentirse princesa encerrada y él, príncipe sin reino. Pero se tenían el uno al otro.",
  "Porque no necesitaban un cuento perfecto.",
  "Somos tú y yo contra el mundo, le susurró ella, apoyando su cabeza en el hombro de él.",
  "Sin príncipes impecables, sin princesas que necesitan ser rescatadas. Solo dos estrellas que eligieron caer juntas y que descubrieron que, a veces, la forma más valiente de enfrentar un mundo que se desmorona no es luchar contra él, sino elegirse cada día el uno al otro, sin importar la tormenta."
];
export default function Cuento() {
  const audioRef = useRef(null);
  const [musicaIniciada, setMusicaIniciada] = useState(false);
  const [texto, setTexto] = useState("");
  const [finalizado, setFinalizado] = useState(false);
  const historia = frases.join(" ");
  useEffect(() => {
    if (musicaIniciada && audioRef.current) {
      audioRef.current.play();
      audioRef.current.loop = true;
    }
    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, [musicaIniciada]);

  useEffect(() => {
  if (musicaIniciada && !finalizado) {
    const tiempo = historia.length * 40 + 1000;
    const timer = setTimeout(() => setFinalizado(true), tiempo);
    return () => clearTimeout(timer);
  }
}, [musicaIniciada, finalizado]);

  useEffect(() => {
    console.log("finalizado:", finalizado);
    }, [finalizado]);


  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-10 px-4 flex flex-col items-center justify-center">
      <audio
        ref={audioRef}
        src="/Colorofmusic_-_In_the_Name_of_Love_(Wedding,_Romantic,_Inspiring,_Sentimental)_-_Soft_Version.mp3"
      />
      {!musicaIniciada ? (
        <button
          className="text-6xl bg-transparent border-none shadow-none animate-bounce"
          style={{ background: "none", border: "none", boxShadow: "none" }}
          onClick={() => setMusicaIniciada(true)}
          aria-label="Iniciar cuento"
        >
          💖
        </button>
      ) : (
        <>
          <Corazones />
          <h1 className="text-4xl font-bold text-pink-600 font-serif mb-8 text-center">
            Lluvia de estrellas ✨
          </h1>

          <div className="bg-white/80 rounded-2xl p-6 shadow-lg max-w-2xl text-center text-lg leading-8 text-gray-700">
            {!finalizado ? (
              <Typewriter
                words={[historia]}
                loop={1}
                typeSpeed={40}
                delaySpeed={1000}
                deleteSpeed={0}
              />
            ) : (
              <span>{historia}</span>
            )}
          </div>
            <AnimatePresence>
            {finalizado && (
              <motion.div
                className="mt-12 text-pink-500 font-semibold text-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 10 }}
              >
                Creo que si algo nos enseñó este mes,
                <br />
                es que no estamos solos,
                <br />
                somos tú y yo contra el mundo. 💘
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {finalizado && (
              <motion.div
                className="mt-10 text-3xl text-pink-500 font-bold font-serif mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 15 }}
              >
                Te ama, tu princesita 💕
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
