/* import React from 'react'
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Scrollbar } from 'react-smooth-scrollbar'
function SmoothScrollbar({ children }) {
  const ref = useRef(null)
  const { pathname } = useLocation();
  useEffect(() => {
    const { scrollbar } = ref.current;
    scrollbar.setPosition(0, 0)
  }, [pathname])
  return (
    <Scrollbar ref={ref} damping=".09" >
      {children}
    </Scrollbar>
  );
}

export default SmoothScrollbar */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

