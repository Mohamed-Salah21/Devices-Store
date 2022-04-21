import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function ScrollToTop() {
  const routing = useLocation();
  function ToTop() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    ToTop();
  }, [routing]);
  return null;
}
export default ScrollToTop;
