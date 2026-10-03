import { useState } from "react";
import { Image } from "@/components/ui/image";
import { MoveHorizontal } from "lucide-react";

/**
 * Before / After comparison slider. Drag the brass handle (or use the
 * invisible range input, which also works with a keyboard) to reveal
 * the "after" image.
 */
export default function BeforeAfter({ before, after }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative aspect-[16/10] overflow-hidden select-none bg-sand">
      {/* After image sits underneath */}
      <div className="absolute inset-0">
        <Image
          src={after.url}
          alt={after.alt}
          fittingType="fill"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      {/* Before image is clipped from the right, up to the handle */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image
          src={before.url}
          alt={before.alt}
          fittingType="fill"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 w-px bg-brass pointer-events-none"
        style={{ left: `${pos}%` }}
        aria-hidden="true"
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brass flex items-center justify-center [box-shadow:0_6px_20px_rgba(28,21,18,0.35)]">
          <MoveHorizontal size={18} strokeWidth={1.5} className="text-espresso" />
        </span>
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 label text-ivory bg-espresso/80 px-3 py-2">
        Before
      </span>
      <span className="absolute top-4 right-4 label text-espresso bg-brass px-3 py-2">
        After
      </span>

      {/* Invisible, keyboard-accessible control */}
      <input
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare before and after"
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />
    </div>
  );
}