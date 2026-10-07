'use client';

import { MotionValue, useMotionValueEvent } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface ZondaScrollCanvasProps {
    scrollYProgress: MotionValue<number>;
    totalFrames?: number;
    imageFolderPath?: string;
}

export default function ZondaScrollCanvas({
    scrollYProgress,
    totalFrames = 240,
    imageFolderPath = '/images/zonda-sequence/'
}: ZondaScrollCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Preload Images
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        // We strictly assume frames are named ezgif-frame-001.jpg, etc.
        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            const paddedIndex = i.toString().padStart(3, '0');
            img.src = `${imageFolderPath}ezgif-frame-${paddedIndex}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalFrames) {
                    setImages(loadedImages);
                    setIsLoaded(true);
                }
            };
            // Ensure index matches frame number (frame 1 at index 0)
            loadedImages[i - 1] = img;
        }
    }, [totalFrames, imageFolderPath]);

    // Draw Logic
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = images[index];

        // Handle High DPI
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;

        ctx.scale(dpr, dpr);

        // Object-fit: contain logic for Canvas
        const canvasWidth = window.innerWidth;
        const canvasHeight = window.innerHeight;
        const imgRatio = img.width / img.height;
        const canvasRatio = canvasWidth / canvasHeight;

        let renderWidth, renderHeight, offsetX, offsetY;

        // Contain within canvas
        if (canvasRatio > imgRatio) {
            renderHeight = canvasHeight;
            renderWidth = img.width * (canvasHeight / img.height);
            offsetX = (canvasWidth - renderWidth) / 2;
            offsetY = 0;
        } else {
            renderWidth = canvasWidth;
            renderHeight = img.height * (canvasWidth / img.width);
            offsetX = 0;
            offsetY = (canvasHeight - renderHeight) / 2;
        }

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        const frameIndex = Math.min(
            totalFrames - 1,
            Math.floor(latest * totalFrames)
        );

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    // Initial draw once loaded
    useEffect(() => {
        if (isLoaded) {
            renderFrame(0);
        }
    }, [isLoaded]);

    return (
        <div className="fixed inset-0 z-0 bg-pagani-black">
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
                style={{ width: '100vw', height: '100vh' }}
            />
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center text-pagani-gold font-display tracking-widest animate-pulse">
                    LOADING EXPERIENCE...
                </div>
            )}
        </div>
    );
}
