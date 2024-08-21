'use client';
import { FC, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Define the Mobius Curve
class MobiusCurve extends THREE.Curve<THREE.Vector3> {
  radius: number;
  tubeRadius: number;
  twist: number;

  constructor(radius: number, tubeRadius: number, twist: number) {
    super();
    this.radius = radius;
    this.tubeRadius = tubeRadius;
    this.twist = twist;
  }

  getPoint(t: number): THREE.Vector3 {
    const theta = t * this.twist;
    const phi = Math.PI * 2 * t;
    const x = (this.radius + this.tubeRadius * Math.cos(theta)) * Math.cos(phi);
    const y = (this.radius + this.tubeRadius * Math.cos(theta)) * Math.sin(phi);
    const z = this.tubeRadius * Math.sin(theta);
    return new THREE.Vector3(x, y, z);
  }
}

const MobiusStrip: FC = () => {
  const mobiusRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);

  // Create Mobius Strip Geometry
  const radius = 2.5;
  const tubeRadius = 0.3;
  const segments = 200;
  const radialSegments = 8;
  const twist = Math.PI * 2; // Twist amount for the Mobius strip

  const geometry = new THREE.TubeGeometry(
    new MobiusCurve(radius, tubeRadius, twist),
    segments,
    tubeRadius,
    radialSegments,
    false
  );

  useFrame(({ clock }) => {
    if (mobiusRef.current) {
      mobiusRef.current.rotation.x += 0.01;
      mobiusRef.current.rotation.y += 0.01;
    }
    timeRef.current += clock.getDelta();
  });

  return (
    <mesh ref={mobiusRef} geometry={geometry}>
      <shaderMaterial
        vertexShader={`
          uniform float time;
          varying vec3 vPosition;

          void main() {
            vPosition = position;
            vec3 p = position;
            float len = length(p);
            p.z += 0.2 * sin(time + len * 2.0); // Wave effect
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `}
        fragmentShader={`
          varying vec3 vPosition;

          void main() {
            float len = length(vPosition);
            vec3 color = vec3(0.5 + 0.5 * sin(len * 5.0), 0.5 + 0.5 * cos(len * 5.0), 0.5); // Color gradient
            gl_FragColor = vec4(color, 1.0);
          }
        `}
        uniforms={{ time: { value: timeRef.current } }}
        side={THREE.DoubleSide}
        transparent
      />
    </mesh>
  );
};

const MobileMobiusCanvas: FC = () => {
  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 4, 5], fov: 75 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight position={[0, 0, 5]} angle={0.8} penumbra={1} intensity={2} />
      <MobiusStrip />
    </Canvas>
  );
};

export default MobileMobiusCanvas;
