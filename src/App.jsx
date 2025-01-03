import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
          <sphereGeometry />
          <meshBasicMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
