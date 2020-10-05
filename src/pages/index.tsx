import { useEffect } from 'react'

// import * as BABYLON from 'babylonjs'
// import { Engine } from 'babylonjs'

// const createScene = (canvas: HTMLCanvasElement, engine: Engine) => {
//   const scene = new BABYLON.Scene(engine)

//   const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5, -10), scene)

//   camera.setTarget(BABYLON.Vector3.Zero())

//   camera.attachControl(canvas, false)

//   new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene)

//   const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', { segments: 16, diameter: 2 }, scene)

//   sphere.position.y = 1

//   BABYLON.MeshBuilder.CreateGround(
//     'ground1',
//     { height: 6, width: 6, subdivisions: 2 },
//     scene
//   )

//   return scene
// }

const IndexPage = () => {
  useEffect(() => {
    // const canvas = document.getElementById('canvas') as HTMLCanvasElement
    // const engine = new BABYLON.Engine(canvas, true)
    // const scene = createScene(canvas, engine)
    // engine.runRenderLoop(() => scene.render())
    // window.addEventListener('resize', () => engine.resize())
  }, [])

  return <canvas id="canvas" />
}

export default IndexPage
