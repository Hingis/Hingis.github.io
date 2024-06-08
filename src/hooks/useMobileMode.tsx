import { useEffect, useState } from "react";
import { mediaBreakpoints } from "@styles/breakpoints";

const useMobileMode = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 检查 window 是否存在，以确保代码只在客户端执行
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= parseInt(mediaBreakpoints.sm));
      };

      // 初始化并添加事件监听器
      handleResize();
      window.addEventListener("resize", handleResize);

      // 清除事件监听器
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return isMobile;
};

export default useMobileMode;
