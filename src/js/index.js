import 'normalize.css'
import '~css/fonts.css'
import '~css/main.css'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React, {useEffect} from 'react'
import {render} from 'react-dom'

import gui from '~js/helpers/gui'

import Canvas from '~js/components/Canvas'
import Camera from '~js/components/Canvas/Camera'
import Environment from '~js/components/Canvas/Environment'

/**
 * app
 */
const App = () => {
  useEffect(() => {
    gui.init()
  }, [])

  return (
    <>
      <Canvas>
        <Camera />
        <Environment />
      </Canvas>
    </>
  )
}

/**
 * render app
 */
render(
  <App />,
  document.getElementById('app'),
)
