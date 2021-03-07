import { MeshBasicMaterial, Mesh } from 'three'

export class Figure {
  constructor ({ id, config }) {
    this.id = id
    this.config = config

    this.geometry = null
    this.material = null
  }

  createGeometry () {
    throw new Error('Нужно вызывать метод create() из дочернего класса!')
  }

  createMaterial () {
    this.material = new MeshBasicMaterial({
      color: this.config.color,
      wireframe: this.config.wireframe
    })
  }

  createFigure () {
    const mesh = new Mesh(this.geometry, this.createMaterial())
    mesh.name = this.id
    return mesh
  }

  create () {
    this.createGeometry()
    this.createMaterial()
    return this.createFigure()
  }

  update () {}
}
