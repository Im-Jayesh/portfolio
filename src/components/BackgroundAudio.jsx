import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react"; 

export default function BackgroundAudio() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.2; // reduce volume
      audio.loop = true;
      audio.play().catch(err => {
        console.warn("Autoplay might be blocked until user interacts:", err);
      });
    }
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isMuted) {
        audio.muted = false;
        audio.play();
      } else {
        audio.muted = true;
      }
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <audio ref={audioRef} src="/sound_effects/fire.mp3" />
      <button
        onClick={toggleMute}
        className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
}
