"use client";
import style from "./Slaider.module.css";
import { useRef, useState, useEffect } from "react";

type Props = {
    children: React.ReactNode;
};

export const Slaider = ({ children }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const [scrollLeft, setScrollLeft] = useState<number>(0);
    const [startX, setStartX] = useState<number>(0);

    useEffect(() => {
        const container = containerRef.current;

        const handleMouseDown = (e: MouseEvent) => {
            setIsMouseDown(true);
            setStartX(e.clientX - (container?.offsetLeft || 0));
            setScrollLeft(container?.scrollLeft || 0);
        };

        const handleMouseUp = () => {
            setIsMouseDown(false);
        };

        const handleMouseLeave = () => {
            setIsMouseDown(false);
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isMouseDown || !container) return;
            e.preventDefault();
            const x = e.clientX - (container.offsetLeft || 0);
            const walk = (x - startX) * 1;
            container.scrollLeft = scrollLeft - walk;
            setIsScrolling(true);
        };

        const handleClick = (e: MouseEvent) => {
            if (isScrolling) {
                e.preventDefault();
                e.stopPropagation();
            }
            setIsScrolling(false);
        };

        if (container) {
            container.addEventListener("mousedown", handleMouseDown);
            container.addEventListener("mouseup", handleMouseUp);
            container.addEventListener("mouseleave", handleMouseLeave);
            container.addEventListener("mousemove", handleMouseMove);
            container.addEventListener("click", handleClick);
        }

        return () => {
            if (container) {
                container.removeEventListener("mousedown", handleMouseDown);
                container.removeEventListener("mouseup", handleMouseUp);
                container.removeEventListener("mouseleave", handleMouseLeave);
                container.removeEventListener("mousemove", handleMouseMove);
                container.removeEventListener("click", handleClick);
            }
        };
    }, [containerRef, isMouseDown, isScrolling, startX, scrollLeft]);

    return (
        <div className={style.container} ref={containerRef}>
            {children}
        </div>
    );
};