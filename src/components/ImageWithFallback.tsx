/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

interface ImageWithFallbackProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  localName: 'presentacion_anita' | 'presentacion_brenda';
  fallbackSrc: string;
}

export default function ImageWithFallback({ localName, fallbackSrc, alt, ...props }: ImageWithFallbackProps) {
  // We will try several potential paths to pick up any uploaded file on the server or in public directories
  const paths = localName === 'presentacion_anita' 
    ? [
        `/assets/presentacion_anita.png`,
        `/assets/presentacion_anita.jpg`,
        `/presentacion_anita.png`,
        `/presentacion_anita.jpg`,
        `/assets/input_file_1.png`,
        `/input_file_1.png`,
        `/assets/input_file_1.jpg`,
        `/input_file_1.jpg`,
        `/assets/input_file_0.png`,
        `/input_file_0.png`,
        fallbackSrc // static high-quality fallback
      ]
    : [
        `/assets/presentacion_brenda.png`,
        `/assets/presentacion_brenda.png`,
        `/presentacion_brenda.png`,
        `/presentacion_brenda.png`,
        `/assets/input_file_0.png`,
        `/input_file_0.png`,
        `/assets/input_file_0.png`,
        `/input_file_0.png`,
        `/assets/input_file_1.png`,
        `/input_file_1.png`,
        fallbackSrc // static high-quality fallback
      ];

  const [pathIndex, setPathIndex] = useState(0);
  const [currentSrc, setCurrentSrc] = useState(paths[0]);

  useEffect(() => {
    setCurrentSrc(paths[pathIndex]);
  }, [pathIndex]);

  const handleError = () => {
    if (pathIndex < paths.length - 1) {
      setPathIndex(prev => prev + 1);
    }
  };

  return (
    <img
      src={currentSrc}
      onError={handleError}
      alt={alt}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
