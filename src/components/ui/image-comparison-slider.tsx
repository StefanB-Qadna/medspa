import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageComparisonSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  leftImage: string;
  rightImage: string;
  altLeft?: string;
  altRight?: string;
  initialPosition?: number;
}

export const ImageComparisonSlider = React.forwardRef<
  HTMLDivElement,
  ImageComparisonSliderProps
>(
  (
    {
      className,
      leftImage,
      rightImage,
      altLeft = "Left image",
      altRight = "Right image",
      initialPosition = 50,
      ...props
    },
    ref
  ) => {
    const [sliderPosition, setSliderPosition] = React.useState(initialPosition);
    const [isDragging, setIsDragging] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const handleMove = React.useCallback((clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let newPosition = (x / rect.width) * 100;
      newPosition = Math.max(0, Math.min(100, newPosition));
      setSliderPosition(newPosition);
    }, []);

    const handlePointerDown = React.useCallback(
      (e: React.PointerEvent) => {
        setIsDragging(true);
        // Capture pointer so events route here even if finger leaves bounds
        e.currentTarget.setPointerCapture(e.pointerId);
        handleMove(e.clientX);
      },
      [handleMove]
    );

    const handlePointerMove = React.useCallback(
      (e: React.PointerEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
      },
      [isDragging, handleMove]
    );

    const handlePointerUp = React.useCallback(() => {
      setIsDragging(false);
    }, []);

    // Keyboard support for the slider handle
    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent) => {
        let newPos = sliderPosition;
        switch (e.key) {
          case "ArrowLeft":
          case "ArrowDown":
            newPos = Math.max(0, sliderPosition - 2);
            break;
          case "ArrowRight":
          case "ArrowUp":
            newPos = Math.min(100, sliderPosition + 2);
            break;
          case "PageDown":
            newPos = Math.max(0, sliderPosition - 10);
            break;
          case "PageUp":
            newPos = Math.min(100, sliderPosition + 10);
            break;
          case "Home":
            newPos = 0;
            break;
          case "End":
            newPos = 100;
            break;
          default:
            return;
        }
        e.preventDefault();
        setSliderPosition(newPos);
      },
      [sliderPosition]
    );

    // Set cursor during drag
    React.useEffect(() => {
      if (isDragging) {
        document.body.style.cursor = "ew-resize";
      } else {
        document.body.style.cursor = "";
      }
      return () => {
        document.body.style.cursor = "";
      };
    }, [isDragging]);

    const imgClass =
      "absolute inset-0 w-full h-full object-cover object-top pointer-events-none";

    return (
      <div
        ref={containerRef}
        className={cn(
          "relative w-full h-full overflow-hidden select-none group touch-none",
          className
        )}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        {...props}
      >
        {/* Right Image (After - bottom layer) */}
        <img
          src={rightImage}
          alt={altRight}
          className={imgClass}
          draggable={false}
        />

        {/* Left Image (Before - top layer, clipped) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none will-change-[clip-path]"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        >
          <img
            src={leftImage}
            alt={altLeft}
            className={imgClass}
            draggable={false}
          />
        </div>

        {/* Before / After labels */}
        <div
          className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-eyebrow font-sans font-medium uppercase tracking-wider pointer-events-none transition-opacity duration-300"
          style={{
            backgroundColor: "rgba(61, 53, 48, 0.7)",
            color: "#FDFBF7",
            opacity: sliderPosition > 10 ? 1 : 0,
          }}
        >
          Before
        </div>
        <div
          className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-eyebrow font-sans font-medium uppercase tracking-wider pointer-events-none transition-opacity duration-300"
          style={{
            backgroundColor: "rgba(61, 53, 48, 0.7)",
            color: "#FDFBF7",
            opacity: sliderPosition < 90 ? 1 : 0,
          }}
        >
          After
        </div>

        {/* Slider Handle and Divider */}
        <div
          className="absolute top-0 h-full w-1 cursor-ew-resize"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          {/* Divider Line */}
          <div className="absolute inset-y-0 w-0.5 bg-cream" />

          {/* Handle */}
          <div
            className={cn(
              "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 flex items-center justify-center rounded-full bg-cream text-brass shadow-md",
              "transition-all duration-300 ease-in-out",
              "group-hover:scale-105",
              "focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:outline-none",
              isDragging && "scale-105 shadow-lg"
            )}
            role="slider"
            tabIndex={0}
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuetext={`After visible at ${Math.round(100 - sliderPosition)}%`}
            aria-orientation="horizontal"
            aria-label="Image comparison slider"
            onKeyDown={handleKeyDown}
          >
            <div className="flex items-center">
              <ChevronLeft className="h-5 w-5 drop-shadow-md" />
              <ChevronRight className="h-5 w-5 drop-shadow-md" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ImageComparisonSlider.displayName = "ImageComparisonSlider";
