import { useEffect, useState } from "react";
import { mediaBreakpoints } from "@styles/breakpoints";

const useMobileMode = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= parseInt(mediaBreakpoints.sm));
    };

    // 初始化並添加事件監聽器
    handleResize();
    window.addEventListener("resize", handleResize);

    // 清除事件監聽器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useMobileMode;
