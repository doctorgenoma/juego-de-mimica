// CharadesGenerator.jsx — sin dependencia de Tailwind, CSS inline puro

import React, { useState } from 'react';

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
    let attempts = 0, randomWord, randomCategory;
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

  const resetGame = () => { setCurrentWord(''); setCategory(''); setUsedWords(new Set()); };

  const totalWords = words[difficulty].animales.length + words[difficulty].verbos.length + words[difficulty].cosas.length;

  const diffColor = { facil: '#22c55e', medio: '#eab308', dificil: '#ef4444' }[difficulty];
  const catEmoji = { animales: '🐾', verbos: '🎭', cosas: '📦' }[category] || '';
  const catName  = { animales: 'Animal', verbos: 'Acción', cosas: 'Objeto' }[category] || '';

  const s = {
    page: { minHeight: '100vh', background: 'linear-gradient(135deg, #a855f7, #ec4899, #f97316)', padding: '2rem', fontFamily: 'sans-serif' },
    center: { maxWidth: 600, margin: '0 auto' },
    title: { fontSize: '2.8rem', fontWeight: 900, color: '#fff', textAlign: 'center', marginBottom: '0.5rem', textShadow: '0 2px 8px rgba(0,0,0,0.2)' },
    subtitle: { color: '#fff', textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem' },
    card: { background: '#fff', borderRadius: '1.2rem', padding: '1.5rem', boxShadow: '0 10px 40px rgba(0,0,0,0.15)', marginBottom: '1.2rem' },
    diffTitle: { fontSize: '1.1rem', fontWeight: 600, color: '#374151', textAlign: 'center', marginBottom: '1rem' },
    btnRow: { display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' },
    wordCard: { background: '#fff', borderRadius: '1.2rem', padding: '3rem 2rem', boxShadow: '0 10px 40px rgba(0,0,0,0.15)', marginBottom: '1.2rem', minHeight: 240, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
    bigWord: { fontSize: '3.5rem', fontWeight: 900, color: '#1f2937', textAlign: 'center', margin: '0.5rem 0' },
    catLabel: { color: '#9ca3af', fontSize: '1rem' },
    progressWrap: { marginTop: '1.2rem', textAlign: 'center' },
    progressText: { fontSize: '0.8rem', color: '#9ca3af', marginBottom: 6 },
    progressBar: { width: 240, height: 8, background: '#e5e7eb', borderRadius: 999, overflow: 'hidden', margin: '0 auto' },
    progressFill: (pct) => ({ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg, #a855f7, #ec4899)', borderRadius: 999, transition: 'width 0.5s' }),
    placeholder: { textAlign: 'center' },
    placeholderEmoji: { fontSize: '5rem', marginBottom: '1rem' },
    placeholderText: { fontSize: '1.3rem', color: '#9ca3af', marginBottom: '0.5rem' },
    placeholderSub: { fontSize: '0.85rem', color: '#d1d5db' },
    mainBtn: { width: '100%', background: 'linear-gradient(90deg, #3b82f6, #7c3aed)', color: '#fff', border: 'none', padding: '1.2rem', borderRadius: '1rem', fontWeight: 800, fontSize: '1.4rem', cursor: 'pointer', boxShadow: '0 6px 24px rgba(124,58,237,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem', transition: 'transform 0.1s' },
    resetBtn: { width: '100%', background: '#4b5563', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '0.75rem', fontWeight: 600, fontSize: '1rem', cursor: 'pointer' },
    instructions: { marginTop: '2rem', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', borderRadius: '1.2rem', padding: '1.5rem', color: '#fff' },
    instrTitle: { fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' },
    ol: { paddingLeft: '1.2rem', lineHeight: 2 },
    instrNote: { marginTop: '0.75rem', fontSize: '0.85rem', opacity: 0.9 },
  };

  return (
    <div style={s.page}>
      <div style={s.center}>
        <h1 style={s.title}>🎭 Juego de Mímica</h1>
        <p style={s.subtitle}>¡Gesticula y adivina!</p>

        {/* Dificultad */}
        <div style={s.card}>
          <p style={s.diffTitle}>Selecciona la dificultad</p>
          <div style={s.btnRow}>
            {[['facil','⭐ Fácil','#22c55e'], ['medio','⭐⭐ Medio','#eab308'], ['dificil','⭐⭐⭐ Difícil','#ef4444']].map(([key, label, color]) => (
              <button
                key={key}
                onClick={() => { setDifficulty(key); resetGame(); }}
                style={{
                  padding: '0.65rem 1.4rem', borderRadius: '0.75rem', fontWeight: 600, border: 'none', cursor: 'pointer', fontSize: '0.95rem', transition: 'transform 0.1s',
                  background: difficulty === key ? color : '#e5e7eb',
                  color: difficulty === key ? '#fff' : '#374151',
                  boxShadow: difficulty === key ? `0 4px 14px ${color}88` : 'none',
                }}
              >{label}</button>
            ))}
          </div>
        </div>

        {/* Tarjeta de palabra */}
        <div style={s.wordCard}>
          {currentWord ? (
            <>
              <span style={{ background: diffColor, color: '#fff', borderRadius: 999, padding: '0.3rem 1rem', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </span>
              <div style={{ fontSize: '3.5rem' }}>{catEmoji}</div>
              <h2 style={s.bigWord}>{currentWord}</h2>
              <p style={s.catLabel}>({catName})</p>
              <div style={s.progressWrap}>
                <p style={s.progressText}>Palabras únicas: {usedWords.size} / {totalWords}</p>
                <div style={s.progressBar}>
                  <div style={s.progressFill((usedWords.size / totalWords) * 100)} />
                </div>
              </div>
            </>
          ) : (
            <div style={s.placeholder}>
              <div style={s.placeholderEmoji}>🎪</div>
              <p style={s.placeholderText}>Pulsa el botón para generar una palabra</p>
              <p style={s.placeholderSub}>{totalWords} palabras disponibles en este nivel</p>
            </div>
          )}
        </div>

        {/* Botones */}
        <button style={s.mainBtn} onClick={generateWord}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          🔀 {currentWord ? 'Generar Nueva Palabra' : 'Comenzar a Jugar'}
        </button>
        {usedWords.size > 0 && (
          <button style={s.resetBtn} onClick={resetGame}>Reiniciar Juego</button>
        )}

        {/* Instrucciones */}
        <div style={s.instructions}>
          <p style={s.instrTitle}>📋 Cómo jugar:</p>
          <ol style={s.ol}>
            <li>Elige el nivel de dificultad apropiado</li>
            <li>Pulsa el botón para generar una palabra</li>
            <li>¡Gesticula la palabra sin hablar ni hacer sonidos!</li>
            <li>Los demás jugadores deben adivinar qué palabra es</li>
            <li>Genera una nueva palabra cuando estén listos</li>
          </ol>
          <p style={s.instrNote}>✨ El sistema evita repetir palabras. Pulsa "Reiniciar" para empezar de nuevo.</p>
        </div>
      </div>
    </div>
  );
};

export default CharadesGenerator;
