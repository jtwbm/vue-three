import { RingGeometry } from 'three'
import { Figure } from '@/modules/ClassFigure'

export class Box extends Figure {
  createGeometry () {
    const {
      innerRadius = 0.5,
      outerRadius = 1,
      thetaSegments = 8,
      phiSegments = 1,
      thetaStart = 0,
      thetaLength = Math.PI * 2
    } = this.config
    this.geometry = new RingGeometry(
      innerRadius,
      outerRadius,
      thetaSegments,
      phiSegments,
      thetaStart,
      thetaLength
    )
  }
}
