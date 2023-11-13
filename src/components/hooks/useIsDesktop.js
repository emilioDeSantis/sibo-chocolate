import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";

export const useIsDesktop = () => {
    const { width } = useWindowSize();
    const [isDesktop, setIsDesktop] = useState(null);

    useEffect(() => {
        setIsDesktop(width > 768);
    }, [width]);

    return isDesktop;
};
