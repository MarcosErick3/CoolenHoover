// src/utils/useOnScreen.js
import { useEffect, useState, useMemo } from 'react';

function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    const observer = useMemo(
        () =>
            new IntersectionObserver(
                ([entry]) => {
                    setIntersecting(entry.isIntersecting);
                },
                { rootMargin: '0px 0px -100px 0px' }
            ),
        [] 
    );

    useEffect(() => {
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            observer.disconnect();
        };
    }, [observer, ref]);

    return isIntersecting;
}

export default useOnScreen;
