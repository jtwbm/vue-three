import BoxGeometry from '@/modules/box'
import CircleGeometry from '@/modules/circle'
import TorusGeometry from '@/modules/torus'
import ConeGeometry from '@/modules/cone'
import CylinderGeometry from '@/modules/cylinder'
import DodecahedronGeometry from '@/modules/dodecahedron'
import IcosahedronGeometry from '@/modules/icosahedron'
import OctahedronGeometry from '@/modules/octahedron'
import ParametricGeometry from '@/modules/parametric'
import PlaneGeometry from '@/modules/plane'

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
  if (type === 'icosahedron') {
    return new IcosahedronGeometry(config)
  }
  if (type === 'octahedron') {
    return new OctahedronGeometry(config)
  }
  if (type === 'parametric') {
    return new ParametricGeometry(config)
  }
  if (type === 'plane') {
    return new PlaneGeometry(config)
  }
}
