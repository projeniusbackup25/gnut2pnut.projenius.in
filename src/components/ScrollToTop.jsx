import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This will scroll the window to the top (0, 0)
    // every time the pathname changes.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything.
}

export default ScrollToTop;