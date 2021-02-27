import BoxGeometry from '@/modules/box'
import CircleGeometry from '@/modules/circle'
import TorusGeometry from '@/modules/torus'
import ConeGeometry from '@/modules/cone'
import CylinderGeometry from '@/modules/cylinder'
import DodecahedronGeometry from '@/modules/dodecahedron'

export default function (type, config) {
  if (type === 'box') {
    return new BoxGeometry(config)
  }
  if (type === 'circle') {
    return new CircleGeometry(config)
  }
  if (type === 'torus') {
    return new TorusGeometry(config)
  }
  if (type === 'cone') {
    return new ConeGeometry(config)
  }
  if (type === 'cylinder') {
    return new CylinderGeometry(config)
  }
  if (type === 'dodecahedron') {
    return new DodecahedronGeometry(config)
  }
}
