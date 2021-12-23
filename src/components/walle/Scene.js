/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Janis Zeps (https://sketchfab.com/zeps9001)
license: SKETCHFAB Standard (https://sketchfab.com/licenses)
source: https://sketchfab.com/3d-models/wall-eanimated-a6758de2e5a04f9e821596592ef4279c
title: Wall-E(Animated)
*/

import { useRef, useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'


export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)
//Uncomment this code to see animation play. I need the animation to move on the spot.
  //useEffect(() =>{  
   // actions.Scene.play()
  //})
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 49.74, -85.99]} rotation={[2.2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.trackGears1_low_wall_e_0.geometry}
              material={nodes.trackGears1_low_wall_e_0.material}
            />
          </group>
          <group position={[0, 390.62, -34.01]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.eyes_low_wall_e_0.geometry} material={nodes.eyes_low_wall_e_0.material} />
          </group>
          <group position={[0, 298.64, -50.86]} rotation={[-1.73, 0, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.neck_low_wall_e_0.geometry} material={nodes.neck_low_wall_e_0.material} />
          </group>
          <group position={[-150.62, 272.83, -20.01]} rotation={[-2.18, 0, 0]} scale={100}>
            <mesh geometry={nodes.hand_low_wall_e_0.geometry} material={nodes.hand_low_wall_e_0.material} />
          </group>
          <group position={[0, 46.01, 69.71]} rotation={[2.2, 0, 0]} scale={[100, 89.33, 89.33]}>
            <mesh
              geometry={nodes.trackGears2_low_wall_e_0.geometry}
              material={nodes.trackGears2_low_wall_e_0.material}
            />
          </group>
          <group position={[0, 160.09, -59.87]} rotation={[2.2, 0, 0]} scale={[100, 69.85, 69.85]}>
            <mesh
              geometry={nodes.trackGears4_low_wall_e_0.geometry}
              material={nodes.trackGears4_low_wall_e_0.material}
            />
          </group>
          <group position={[0, 111.77, 33.01]} rotation={[2.2, 0, 0]} scale={[100, 54.08, 54.08]}>
            <mesh
              geometry={nodes.trackGears3_low_wall_e_0.geometry}
              material={nodes.trackGears3_low_wall_e_0.material}
            />
          </group>
          <group position={[0, 390.62, -0.96]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.eyes_low001_eyes_0.geometry} material={materials.eyes} />
          </group>
          <group position={[149.8, 248, -56.57]} rotation={[-1.45, 0, 0]} scale={100}>
            <mesh geometry={nodes.hand_low001_wall_e_0.geometry} material={nodes.hand_low001_wall_e_0.material} />
          </group>
          <group position={[-93.37, 396.86, 157.78]} rotation={[-1.62, 0, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.hand_low002_wall_e_0.geometry} material={nodes.hand_low002_wall_e_0.material} />
          </group>
          <group position={[0.24, 85.08, 92.35]} rotation={[2.51, -0.01, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.track_low_wall_e_0.geometry} material={nodes.track_low_wall_e_0.material} />
          </group>
          <group position={[0.24, 103.85, 76.21]} rotation={[2.38, -0.01, 0]} scale={100}>
            <mesh geometry={nodes.track_low001_wall_e_0.geometry} material={nodes.track_low001_wall_e_0.material} />
          </group>
          <group position={[0.26, 120.86, 58.15]} rotation={[2.29, -0.01, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.track_low002_wall_e_0.geometry} material={nodes.track_low002_wall_e_0.material} />
          </group>
          <group position={[0.27, 136.58, 38.79]} rotation={[2.24, -0.01, 0]} scale={100}>
            <mesh geometry={nodes.track_low003_wall_e_0.geometry} material={nodes.track_low003_wall_e_0.material} />
          </group>
          <group position={[0.38, 152.1, 18.39]} rotation={[2.21, -0.01, 0.01]} scale={100}>
            <mesh geometry={nodes.track_low004_wall_e_0.geometry} material={nodes.track_low004_wall_e_0.material} />
          </group>
          <group position={[0.05, 58.34, -129.46]} rotation={[0.01, 0, 0]} scale={100}>
            <mesh geometry={nodes.track_low005_wall_e_0.geometry} material={nodes.track_low005_wall_e_0.material} />
          </group>
          <group position={[0.79, 179.07, -22.68]} rotation={[2.04, -0.01, 0.01]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.track_low006_wall_e_0.geometry} material={nodes.track_low006_wall_e_0.material} />
          </group>
          <group position={[0.89, 187.6, -44.07]} rotation={[1.8, -0.01, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.track_low007_wall_e_0.geometry} material={nodes.track_low007_wall_e_0.material} />
          </group>
          <group position={[0.72, 188.39, -65.82]} rotation={[1.31, -0.01, -0.02]} scale={100}>
            <mesh geometry={nodes.track_low008_wall_e_0.geometry} material={nodes.track_low008_wall_e_0.material} />
          </group>
          <group position={[0.16, 175.67, -86.66]} rotation={[0.68, 0, -0.01]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.track_low009_wall_e_0.geometry} material={nodes.track_low009_wall_e_0.material} />
          </group>
          <group position={[-0.04, 152.5, -100.92]} rotation={[0.49, 0, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.track_low010_wall_e_0.geometry} material={nodes.track_low010_wall_e_0.material} />
          </group>
          <group position={[-0.07, 127.61, -113.09]} rotation={[0.39, 0, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.track_low011_wall_e_0.geometry} material={nodes.track_low011_wall_e_0.material} />
          </group>
          <group position={[-0.05, 104.51, -122.94]} rotation={[0.3, 0, 0]} scale={100}>
            <mesh geometry={nodes.track_low012_wall_e_0.geometry} material={nodes.track_low012_wall_e_0.material} />
          </group>
          <group position={[0.59, 167.26, 0.04]} rotation={[2.16, -0.01, 0.01]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.track_low013_wall_e_0.geometry} material={nodes.track_low013_wall_e_0.material} />
          </group>
          <group position={[-0.03, 82.79, -128.36]} rotation={[0.19, 0, 0]} scale={100}>
            <mesh geometry={nodes.track_low014_wall_e_0.geometry} material={nodes.track_low014_wall_e_0.material} />
          </group>
          <group position={[0.14, 33.62, -128.53]} rotation={[-0.31, 0, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.track_low015_wall_e_0.geometry} material={nodes.track_low015_wall_e_0.material} />
          </group>
          <group position={[0.23, 13.14, -115.67]} rotation={[-0.86, 0, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.track_low016_wall_e_0.geometry} material={nodes.track_low016_wall_e_0.material} />
          </group>
          <group position={[0.27, 3.26, -93.53]} rotation={[-1.34, -0.01, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.track_low017_wall_e_0.geometry} material={nodes.track_low017_wall_e_0.material} />
          </group>
          <group position={[0.28, 1.51, -68.91]} rotation={[-1.59, -0.01, 0]} scale={100}>
            <mesh geometry={nodes.track_low018_wall_e_0.geometry} material={nodes.track_low018_wall_e_0.material} />
          </group>
          <group position={[0.27, 2.75, -44.09]} rotation={[-1.62, -0.01, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.track_low019_wall_e_0.geometry} material={nodes.track_low019_wall_e_0.material} />
          </group>
          <group position={[0.27, 4.18, -19.05]} rotation={[-1.61, -0.01, 0]} scale={100}>
            <mesh geometry={nodes.track_low020_wall_e_0.geometry} material={nodes.track_low020_wall_e_0.material} />
          </group>
          <group position={[0.72, 189.3, -65.89]} rotation={[1.35, -0.01, -0.02]} scale={100}>
            <mesh geometry={nodes.track_low021_wall_e_0.geometry} material={nodes.track_low021_wall_e_0.material} />
          </group>
          <group position={[0.27, 4.79, 6.05]} rotation={[-1.57, -0.01, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.track_low022_wall_e_0.geometry} material={nodes.track_low022_wall_e_0.material} />
          </group>
          <group position={[0.28, 4.29, 30.85]} rotation={[-1.53, -0.01, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.track_low023_wall_e_0.geometry} material={nodes.track_low023_wall_e_0.material} />
          </group>
          <group position={[0.27, 3.06, 55.62]} rotation={[-1.56, -0.01, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.track_low024_wall_e_0.geometry} material={nodes.track_low024_wall_e_0.material} />
          </group>
          <group position={[0.26, 5.26, 80.22]} rotation={[-1.83, -0.01, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.track_low025_wall_e_0.geometry} material={nodes.track_low025_wall_e_0.material} />
          </group>
          <group position={[0.25, 17.05, 101.68]} rotation={[-2.39, -0.01, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.track_low026_wall_e_0.geometry} material={nodes.track_low026_wall_e_0.material} />
          </group>
          <group position={[0.24, 39.66, 110.6]} rotation={[-3.11, -0.01, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.track_low027_wall_e_0.geometry} material={nodes.track_low027_wall_e_0.material} />
          </group>
          <group
            name="track_low028"
            position={[0.23, 63.8, 105.14]}
            rotation={[2.74, -0.01, 0]}
            scale={[100, 100, 100]}>
            <mesh geometry={nodes.track_low028_wall_e_0.geometry} material={nodes.track_low028_wall_e_0.material} />
          </group>
          <group position={[0, 182.18, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.body_low_wall_e_0.geometry} material={nodes.body_low_wall_e_0.material} />
          </group>
          <group position={[0, 180.11, -92.2]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.back_low_wall_e_0.geometry} material={nodes.back_low_wall_e_0.material} />
          </group>
          <group position={[0, 80.62, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={205.08}>
            <mesh geometry={nodes.base_low_wall_e_0.geometry} material={nodes.base_low_wall_e_0.material} />
          </group>
          <group position={[-0.79, -11.52, -10.64]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.trackDetails001_low_wall_e_0.geometry}
              material={nodes.trackDetails001_low_wall_e_0.material}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
