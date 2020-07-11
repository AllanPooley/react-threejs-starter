import React, {useRef, useMemo} from 'react'
import {DoubleSide} from 'three'

import vertex from '~shaders/plane.vert'
import fragment from '~shaders/plane.frag'

export default () => {
  const mesh = useRef()

  const uniforms = useMemo(() => {
    return {
      uTime: {value: 0},
    }
  }, [])

  return (
    <>
      <mesh
        ref={mesh}
      >
        <planeBufferGeometry
          attach="geometry"
          args={[0.4, 0.6, 16, 16]}
        />
        <shaderMaterial
          args={[{
            uniforms: uniforms,
            vertexShader: vertex,
            fragmentShader: fragment,
          }]}
          wireframe
          side={DoubleSide}
          attach="material"
        />
      </mesh>
    </>
  )
}
