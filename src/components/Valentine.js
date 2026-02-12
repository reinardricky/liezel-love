import { useState } from "react";

const Valentine = () => {
  const [revealedCards, setRevealedCards] = useState([]);
  const [showSecret, setShowSecret] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [hugged, setHugged] = useState(false);

  // Click to spawn hearts
  const spawnHeart = (e) => {
    const newHeart = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      emoji: ["💕", "💖", "💗", "❤️", "🩷", "💘"][
        Math.floor(Math.random() * 6)
      ],
    };
    setHearts((prev) => [...prev, newHeart]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1500);
  };

  // Flip card to reveal message
  const revealCard = (index) => {
    if (!revealedCards.includes(index)) {
      setRevealedCards([...revealedCards, index]);
    }
  };

  const loveMessages = [
    { image: "/images/valentine/image-1.jpg", text: "🥰" },
    { image: "/images/valentine/image-2.jpg", text: "💖" },
    { image: "/images/valentine/image-3.jpg", text: "✨" },
    { image: "/images/valentine/image-4.jpg", text: "💕" },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-pink-200 via-red-100 to-pink-300 relative overflow-hidden cursor-pointer"
      onClick={spawnHeart}
    >
      {/* Spawned hearts from clicks */}
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="fixed text-3xl pointer-events-none animate-ping z-50"
          style={{ left: heart.x - 15, top: heart.y - 15 }}
        >
          {heart.emoji}
        </span>
      ))}

      {/* Background floating emojis */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              fontSize: `${1.5 + Math.random() * 1.5}rem`,
            }}
          >
            {["💕", "💖", "🩷", "💗", "🌸"][i % 5]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Interactive Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 cursor-pointer hover:scale-110 transition-transform inline-block">
            Happy Valentine's!
          </h1>
        </div>

        {/* Photo Section - Interactive */}
        <div className="max-w-md mx-auto mb-10">
          <div
            className="bg-white/80 rounded-3xl p-6 shadow-2xl transform hover:rotate-1 transition-all cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-auto bg-gradient-to-br from-pink-100 to-red-100 rounded-2xl flex items-center justify-center border-4 border-pink-200 mb-4 overflow-hidden">
              <img
                src="/images/valentine/liezel.jpeg"
                alt="liezel"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-2xl">My Favorite Alpukayt 🥰</p>
          </div>
        </div>

        {/* Flip Cards - Tap to reveal */}
        <div className="mb-10">
          <p className="text-center text-pink-600 mb-4 text-lg">
            ✨ Tap cards to reveal! ✨
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {loveMessages.map((msg, i) => (
              <div
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  revealCard(i);
                }}
                className={`aspect-[4/5] rounded-2xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  revealedCards.includes(i)
                    ? "rotate-0"
                    : "bg-gradient-to-br from-pink-200 to-red-200 hover:rotate-3"
                } shadow-lg flex items-center justify-center overflow-hidden`}
              >
                {revealedCards.includes(i) ? (
                  <div className="relative w-full h-full">
                    <img
                      src={msg.image}
                      alt={`Our memory ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 text-3xl animate-bounce">
                      {msg.text}
                    </div>
                  </div>
                ) : (
                  <span className="text-5xl">💌</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Hug Button */}
        <div className="text-center mb-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setHugged(true);
            }}
            className={`px-8 py-4 rounded-full text-xl font-bold transition-all transform hover:scale-110 active:scale-95 ${
              hugged
                ? "bg-gradient-to-r from-pink-500 to-red-500 text-white"
                : "bg-white text-pink-500 border-4 border-pink-300"
            } shadow-xl`}
          >
            {hugged ? "🤗 *HUGGED* 🤗" : "🫂 Send a Hug?"}
          </button>
          {hugged && (
            <p className="text-pink-600 mt-3 text-lg animate-pulse">
              Warm hugs received! 💕
            </p>
          )}
        </div>

        {/* Secret Message */}
        <div className="text-center mb-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowSecret(!showSecret);
            }}
            className="text-6xl hover:scale-125 transition-transform cursor-pointer animate-bounce"
          >
            {showSecret ? "💖" : "🎁"}
          </button>
          <p className="text-pink-500 text-sm mt-1">
            {showSecret ? "" : "Psst... tap me!"}
          </p>
          {showSecret && (
            <div className="mt-4 bg-white/90 rounded-2xl p-6 max-w-sm mx-auto shadow-xl animate-pulse">
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
                I Wuff You! 💕
              </p>
              <p className="text-pink-400 mt-2">Forever & Always ∞</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <div className="flex justify-center gap-3 text-3xl mb-2">
            {["💗", "💖", "💕", "💓", "💗"].map((h, i) => (
              <span
                key={i}
                className="hover:scale-150 transition-transform cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                {h}
              </span>
            ))}
          </div>
          <p className="text-pink-500">tap anywhere for more wuff! 💖</p>
        </div>
      </div>
    </div>
  );
};

export default Valentine;
