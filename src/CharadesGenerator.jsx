// CharadesGenerator.jsx
// Juego de Mímica — React + Tailwind CSS
// Requisitos: React 18+, Tailwind CSS, lucide-react

import React, { useState } from 'react';
import { Shuffle } from 'lucide-react';

const CharadesGenerator = () => {
  const [currentWord, setCurrentWord] = useState('');
  const [difficulty, setDifficulty] = useState('medio');
  const [category, setCategory] = useState('');
  const [usedWords, setUsedWords] = useState(new Set());

  const words = {
    facil: {
      animales: ['Perro', 'Gato', 'Pájaro', 'Pez', 'Conejo', 'Gallina', 'Vaca', 'Caballo', 'Oveja', 'Cerdo', 'Ratón', 'Mono', 'León', 'Tigre', 'Oso', 'Lobo', 'Zorro', 'Pato', 'Búho', 'Abeja', 'Hormiga', 'Araña', 'Mosca', 'Mariposa', 'Rana', 'Caracol', 'Cangrejo', 'Elefante', 'Jirafa', 'Cebra'],
      verbos: ['Correr', 'Saltar', 'Dormir', 'Comer', 'Bailar', 'Nadar', 'Reír', 'Llorar', 'Caminar', 'Jugar', 'Cantar', 'Gritar', 'Beber', 'Tocar', 'Mirar', 'Escuchar', 'Sentarse', 'Levantarse', 'Caer', 'Subir', 'Bajar', 'Abrir', 'Cerrar', 'Tirar', 'Empujar', 'Aplaudir', 'Saludar', 'Soplar', 'Besar', 'Abrazar'],
      cosas: ['Mesa', 'Silla', 'Pelota', 'Libro', 'Coche', 'Casa', 'Árbol', 'Flor', 'Sol', 'Luna', 'Estrella', 'Cama', 'Puerta', 'Ventana', 'Taza', 'Plato', 'Cuchara', 'Zapato', 'Gorro', 'Bolsa', 'Lápiz', 'Papel', 'Caja', 'Botella', 'Reloj', 'Lámpara', 'Cubo', 'Pala', 'Globo', 'Bandera']
    },
    medio: {
      animales: ['Pingüino', 'Canguro', 'Cocodrilo', 'Serpiente', 'Delfín', 'Águila', 'Tortuga', 'Murciélago', 'Tiburón', 'Ballena', 'Foca', 'Camello', 'Rinoceronte', 'Hipopótamo', 'Gorila', 'Leopardo', 'Pantera', 'Búfalo', 'Ciervo', 'Castor', 'Mapache', 'Ardilla', 'Erizo', 'Topo', 'Nutria', 'Pelícano', 'Flamenco', 'Tucán', 'Gaviota', 'Garza', 'Cigüeña', 'Loro', 'Pavo', 'Cisne', 'Halcón'],
      verbos: ['Planchar', 'Cocinar', 'Pintar', 'Esquiar', 'Bucear', 'Fotografiar', 'Peinar', 'Barrer', 'Estudiar', 'Conducir', 'Escalar', 'Patinar', 'Boxear', 'Pescar', 'Coser', 'Martillar', 'Serruchar', 'Regar', 'Sembrar', 'Cosechar', 'Lavar', 'Tender', 'Fregar', 'Amasar', 'Batir', 'Picar', 'Rallar', 'Mezclar', 'Hornear', 'Freír', 'Hervir', 'Asar', 'Limpiar', 'Aspirar', 'Sacudir'],
      cosas: ['Guitarra', 'Teléfono', 'Reloj', 'Espejo', 'Paraguas', 'Escalera', 'Piano', 'Televisor', 'Bicicleta', 'Avión', 'Barco', 'Tren', 'Helicóptero', 'Moto', 'Camión', 'Autobús', 'Semáforo', 'Puente', 'Fuente', 'Estatua', 'Columna', 'Arco', 'Torre', 'Castillo', 'Faro', 'Molino', 'Pozo', 'Horno', 'Nevera', 'Microondas', 'Lavadora', 'Plancha', 'Batidora', 'Licuadora', 'Cafetera']
    },
    dificil: {
      animales: ['Ornitorrinco', 'Camaleón', 'Medusa', 'Pulpo', 'Suricata', 'Avestruz', 'Koala', 'Armadillo', 'Lémur', 'Ñandú', 'Quetzal', 'Iguana', 'Salamandra', 'Axolote', 'Mantarraya', 'Pez espada', 'Barracuda', 'Morena', 'Calamar', 'Sepia', 'Nautilo', 'Estrella de mar', 'Erizo de mar', 'Anémona', 'Coral', 'Esponja marina', 'Tarántula', 'Escorpión', 'Ciempiés', 'Libélula', 'Mantis', 'Escarabajo', 'Luciérnaga', 'Cigarra', 'Grillo'],
      verbos: ['Meditar', 'Esculpir', 'Surfear', 'Malabarear', 'Tejer', 'Remar', 'Soldar', 'Silbar', 'Estornudar', 'Bostezar', 'Hipo', 'Roncar', 'Masticar', 'Tragar', 'Digerir', 'Respirar', 'Parpadear', 'Guiñar', 'Fruncir', 'Arquear', 'Encogerse', 'Estirarse', 'Agacharse', 'Arrodillarse', 'Gatear', 'Arrastrarse', 'Trepar', 'Balancearse', 'Tambalearse', 'Tropezar', 'Resbalarse', 'Deslizarse', 'Girar', 'Voltear', 'Rodar'],
      cosas: ['Telescopio', 'Microscopio', 'Brújula', 'Ancla', 'Violín', 'Trompeta', 'Columpio', 'Hamaca', 'Acordeón', 'Ajedrez', 'Dominó', 'Dardos', 'Billar', 'Ruleta', 'Dado', 'Péndulo', 'Metrónomo', 'Astrolabio', 'Sextante', 'Catalejo', 'Lupa', 'Caleidoscopio', 'Prismáticos', 'Periscopio', 'Diapasón', 'Armónica', 'Xilófono', 'Maracas', 'Pandereta', 'Triángulo', 'Címbalos', 'Gong', 'Arpa', 'Flauta', 'Oboe']
    }
  };

  const generateWord = () => {
    const categories = ['animales', 'verbos', 'cosas'];
    let attempts = 0;
    let randomWord, randomCategory;

    do {
      randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const wordList = words[difficulty][randomCategory];
      randomWord = wordList[Math.floor(Math.random() * wordList.length)];
      attempts++;
      if (attempts > 50) break;
    } while (usedWords.has(randomWord.toLowerCase()));

    setCurrentWord(randomWord);
    setCategory(randomCategory);
    setUsedWords(prev => new Set([...prev, randomWord.toLowerCase()]));
  };

  const resetGame = () => {
    setCurrentWord('');
    setCategory('');
    setUsedWords(new Set());
  };

  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'facil': return 'bg-green-500';
      case 'medio': return 'bg-yellow-500';
      case 'dificil': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  const getCategoryEmoji = () => {
    switch (category) {
      case 'animales': return '🐾';
      case 'verbos': return '🎭';
      case 'cosas': return '📦';
      default: return '';
    }
  };

  const getCategoryName = () => {
    switch (category) {
      case 'animales': return 'Animal';
      case 'verbos': return 'Acción';
      case 'cosas': return 'Objeto';
      default: return '';
    }
  };

  const totalWords =
    words[difficulty].animales.length +
    words[difficulty].verbos.length +
    words[difficulty].cosas.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-4 drop-shadow-lg">
          🎭 Juego de Mímica
        </h1>
        <p className="text-white text-center mb-8 text-lg">¡Gesticula y adivina!</p>

        {/* Selector de dificultad */}
        <div className="bg-white rounded-2xl p-6 shadow-2xl mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Selecciona la dificultad
          </h2>
          <div className="flex gap-3 justify-center flex-wrap">
            {[
              { key: 'facil', label: '⭐ Fácil', active: 'bg-green-500' },
              { key: 'medio', label: '⭐⭐ Medio', active: 'bg-yellow-500' },
              { key: 'dificil', label: '⭐⭐⭐ Difícil', active: 'bg-red-500' },
            ].map(({ key, label, active }) => (
              <button
                key={key}
                onClick={() => { setDifficulty(key); resetGame(); }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                  difficulty === key
                    ? `${active} text-white shadow-lg`
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Tarjeta de palabra */}
        <div className="bg-white rounded-2xl p-12 shadow-2xl mb-6 min-h-64 flex flex-col items-center justify-center">
          {currentWord ? (
            <>
              <div className={`${getDifficultyColor()} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </div>
              <div className="text-6xl mb-4">{getCategoryEmoji()}</div>
              <h2 className="text-6xl font-bold text-gray-800 text-center mb-2">{currentWord}</h2>
              <p className="text-gray-500 text-lg">({getCategoryName()})</p>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  Palabras únicas: {usedWords.size} / {totalWords}
                </p>
                <div className="w-64 bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(usedWords.size / totalWords) * 100}%` }}
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="text-8xl mb-4">🎪</div>
              <p className="text-2xl text-gray-400 mb-2">
                Pulsa el botón para generar una palabra
              </p>
              <p className="text-sm text-gray-500">
                {totalWords} palabras disponibles en este nivel
              </p>
            </div>
          )}
        </div>

        {/* Botones */}
        <div className="space-y-3">
          <button
            onClick={generateWord}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 rounded-2xl font-bold text-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 flex items-center justify-center gap-3"
          >
            <Shuffle size={32} />
            {currentWord ? 'Generar Nueva Palabra' : 'Comenzar a Jugar'}
          </button>

          {usedWords.size > 0 && (
            <button
              onClick={resetGame}
              className="w-full bg-gray-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-700 transition-all"
            >
              Reiniciar Juego
            </button>
          )}
        </div>

        {/* Instrucciones */}
        <div className="mt-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 text-white">
          <h3 className="font-bold text-xl mb-3">📋 Cómo jugar:</h3>
          <ol className="space-y-2 list-decimal list-inside">
            <li>Elige el nivel de dificultad apropiado</li>
            <li>Pulsa el botón para generar una palabra</li>
            <li>¡Gesticula la palabra sin hablar ni hacer sonidos!</li>
            <li>Los demás jugadores deben adivinar qué palabra es</li>
            <li>Genera una nueva palabra cuando estén listos</li>
          </ol>
          <p className="mt-4 text-sm opacity-90">
            ✨ El sistema evita repetir palabras. Pulsa "Reiniciar" para empezar de nuevo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharadesGenerator;
