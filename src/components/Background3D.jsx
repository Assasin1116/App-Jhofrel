import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Background3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Configuración de la escena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Cargar la textura del logo
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/image.png"); // Ajusta la ruta según la ubicación de tu imagen

    // Crear un plano con la textura del logo
    const geometry = new THREE.PlaneGeometry(3, 3);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide, // Visible en ambos lados
    });

    const logo = new THREE.Mesh(geometry, material);
    scene.add(logo);

    // Posicionar la cámara
    camera.position.z = 5;

    // Animación del logo
    const animate = () => {
      requestAnimationFrame(animate);
      logo.rotation.y += 0.01; // Rotación continua
      renderer.render(scene, camera);
    };

    animate();

    // Ajustar tamaño al redimensionar
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default Background3D;
