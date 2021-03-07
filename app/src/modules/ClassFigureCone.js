import { ConeGeometry } from 'three'
import { Figure } from '@/modules/ClassFigure'

export class Box extends Figure {
  createGeometry () {
    const {
      radius = 1,
      height = 3,
      radialSegments = 5,
      heightSegments = 10,
      openEnded = false,
      thetaStart = 0,
      thetaLength = 2 * Math.PI
    } = this.config
    this.geometry = new ConeGeometry(
      radius,
      height,
      radialSegments,
      heightSegments,
      openEnded,
      thetaStart,
      thetaLength
    )
  }
}
