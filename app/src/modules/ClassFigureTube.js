import { TubeGeometry } from 'three'
import { Figure } from '@/modules/ClassFigure'

export class Box extends Figure {
  createGeometry () {
    const {
      path,
      tubularSegments = 64,
      radius = 1,
      radialSegments = 8,
      closed = false
    } = this.config
    this.geometry = new TubeGeometry(
      path,
      tubularSegments,
      radius,
      radialSegments,
      closed
    )
  }
}
