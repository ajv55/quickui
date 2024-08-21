'use client';
import { FC, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const DetailedSphere: FC = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const orbitSpheresRef = useRef<THREE.Mesh[]>([]);

  // Define the colors to be used in the gradient
  const colors = [
    new THREE.Color(0x6366F1), 
    new THREE.Color(0x2DD4BF),  
    new THREE.Color(0x1F2937),
    new THREE.Color(0xF3F4F6),  
      
  ];

  const uniforms = {
    time: { value: 0 },
    scale: { value: 1 },
    colors: { value: colors }
  };

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    uniforms.time.value = time;

    // Breathing effect
    uniforms.scale.value = 1 + 0.2 * Math.sin(time * 0.5);

    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;
    }

    orbitSpheresRef.current.forEach((mesh, index) => {
      if (mesh) {
        const angle = time * 0.5 + index * (Math.PI / 3);
        mesh.position.set(
          7 * Math.cos(angle),
          2 * Math.sin(angle),
          3 * Math.sin(angle * 2)
        );
      }
    });
  });

  return (
    <>
      {/* Main Breathing Blob-Like Sphere */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[1.5, 128, 128]} />
        <shaderMaterial
          vertexShader={`
            uniform float time;
            uniform float scale;
            varying vec3 vPosition;

            // Noise function for creating organic deformations
            vec3 mod289(vec3 x) {
              return x - floor(x * (1.0 / 289.0)) * 289.0;
            }

            vec4 mod289(vec4 x) {
              return x - floor(x * (1.0 / 289.0)) * 289.0;
            }

            vec4 permute(vec4 x) {
              return mod289(((x*34.0)+1.0)*x);
            }

            vec4 taylorInvSqrt(vec4 r) {
              return 1.79284291400159 - 0.85373472095314 * r;
            }

            float snoise(vec3 v) { 
              const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
              const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

              vec3 i  = floor(v + dot(v, C.yyy) );
              vec3 x0 =   v - i + dot(i, C.xxx) ;

              vec3 g = step(x0.yzx, x0.xyz);
              vec3 l = 1.0 - g;
              vec3 i1 = min( g.xyz, l.zxy );
              vec3 i2 = max( g.xyz, l.zxy );

              vec3 x1 = x0 - i1 + C.xxx;
              vec3 x2 = x0 - i2 + C.yyy; 
              vec3 x3 = x0 - D.yyy;      

              i = mod289(i); 
              vec4 p = permute( permute( permute( 
                         i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                       + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
                       + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

              float n_ = 0.142857142857; 
              vec3  ns = n_ * D.wyz - D.xzx;

              vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  
              vec4 x_ = floor(j * ns.z);
              vec4 y_ = floor(j - 7.0 * x_ );    

              vec4 x = x_ *ns.x + ns.yyyy;
              vec4 y = y_ *ns.x + ns.yyyy;
              vec4 h = 1.0 - abs(x) - abs(y);

              vec4 b0 = vec4( x.xy, y.xy );
              vec4 b1 = vec4( x.zw, y.zw );

              vec4 s0 = floor(b0)*2.0 + 1.0;
              vec4 s1 = floor(b1)*2.0 + 1.0;
              vec4 sh = -step(h, vec4(0.0));

              vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
              vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

              vec3 p0 = vec3(a0.xy,h.x);
              vec3 p1 = vec3(a0.zw,h.y);
              vec3 p2 = vec3(a1.xy,h.z);
              vec3 p3 = vec3(a1.zw,h.w);

              vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
              p0 *= norm.x;
              p1 *= norm.y;
              p2 *= norm.z;
              p3 *= norm.w;

              vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
              return 42.0 * dot(m*m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
            }

            void main() {
              vec3 pos = position;
              float noise = snoise(vec3(pos.x * 10.0, pos.y * 10.0, time * 0.5));
              float spikeLength = 0.3 * noise;
              vec3 spike = normal * spikeLength;
              vPosition = pos + spike;
              vPosition *= scale; // Apply breathing scale
              gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
            }
          `}
          fragmentShader={`
            uniform vec3 colors[4];
            varying vec3 vPosition;

            // Function to get gradient color
            vec3 getGradientColor(float t) {
              return mix(mix(colors[0], colors[1], t), mix(colors[2], colors[3], t), 0.5);
            }

            void main() {
              float len = length(vPosition);
              float t = mod(len * 0.5 + gl_FragCoord.y * 0.01, 1.0); // Dynamic factor for color transition
              vec3 color = getGradientColor(t);
              gl_FragColor = vec4(color, 1.0);
            }
          `}
          uniforms={uniforms}
          side={THREE.DoubleSide}
          transparent
        />
      </mesh>

      {/* Orbiting Spheres */}
      {[...Array(10)].map((_, i) => (
        <mesh
          key={i}
          ref={(el: any) => (orbitSpheresRef.current[i] = el)}
          scale={0.9}
        >
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color={new THREE.Color(`hsl(${i * 70}, 100%, 50%)`)} />
        </mesh>
      ))}
    </>
  );
};

const MobileSphereCanvas: FC = () => {
  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 5, 5], fov: 75 }}>
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={3} />
      <spotLight position={[0, 5, 5]} angle={0.8} penumbra={8} intensity={8} />
      <DetailedSphere />
    </Canvas>
  );
};

export default MobileSphereCanvas;
