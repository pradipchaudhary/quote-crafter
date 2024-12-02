import { useEffect, useCallback } from "react";

const INTERSECTION_THRESHOLD = 0.1;

export function useScrollAnimation() {
    const handleIntersection = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                }
            });
        },
        []
    );

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: INTERSECTION_THRESHOLD,
        });

        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [handleIntersection]);
}
