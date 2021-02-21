<template>
  <div ref="canvas">
    <slot  />
  </div>
</template>
<script>
import * as THREE from 'three'

export default {
  props: {
    scene: {
      type: Object,
      default: function () {
        return {
          background: 0xcccccc,
        };
      },
    },
    camera: {
      type: Object,
      default: function () {
        return {
          // локальная камера
          fov: 75,
        };
      },
    },
  },
  data() {
    return {
      winW: window.innerWidth || 100,
      winH: window.innerHeight || 100,
    };
  },
  methods: {
    init() {
      this._scene = new THREE.Scene();
      this._scene.background = new THREE.Color(this.scene.background);
      
      this._camera = new THREE.PerspectiveCamera(this.camera.fov, this.winW / this.winH, 1, 1000);
      this._camera.position.z = 5;
      this._camera.position.y = 1;
      this._camera.position.x = 1;
      
      let axes = new THREE.AxesHelper(5);
      this._scene.add(axes);

      this.$slots.default().forEach((slot) => {
        this.donut = slot.type.methods.init(slot.props);
        this._scene.add(this.donut);
      })

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(this.winW, this.winH);
      
      this.$refs.canvas.appendChild(this.renderer.domElement); // добавляем визаулизатор в DOM
    },
    loop() {
      this.renderer.render(this._scene, this._camera); // рендер сцены
      if (this.donut) {
        this.donut.rotation.y -= .01;
        this.donut.rotation.z += .01;
        this.donut.rotation.x += .01;
      }

      requestAnimationFrame(this.loop);
    },
  },
  mounted() {
    this.init();
    this.loop();
  },
}
</script>