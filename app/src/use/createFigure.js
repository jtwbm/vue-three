import { MeshBasicMaterial, Mesh } from 'three'
import createGeometry from '@/modules/createGeometry.js'

export function useCreateFigure (props) {
  const {
    color,
    wireframe
  } = props.config

  const geometry = createGeometry(props.type, props.config)
  const material = new MeshBasicMaterial({
    color,
    wireframe
  })
  const item = new Mesh(geometry, material)
  item.name = props.id

  if (props.config.position) {
    const { x, y, z } = props.config.position
    item.position.set(x, y, z)
  }

  if (props.config.rotation) {
    item.rotation.x = props.config.rotation.x
    item.rotation.y = props.config.rotation.y
    item.rotation.z = props.config.rotation.z
  }

  return item
}
