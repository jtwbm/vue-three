<template>
  <div ref="canvas">
    <slot />
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
          fov: 75,
          position: {
            x: 1,
            y: 1,
            z: 5,
          },
        };
      },
    },
  },
  data() {
    return {
    };
  },
  computed: {
    cWidth() {
      return this.$refs.canvas.clientWidth;
    },
    cHeight() {
      return this.$refs.canvas.clientHeight;
    },
  },
  methods: {
    createScene() {
      this._scene = new THREE.Scene();
      this._scene.background = new THREE.Color(this.scene.background);
    },
    createCamera() {
      this._camera = new THREE.PerspectiveCamera(this.camera.fov, this.cWidth / this.cHeight, 1, 1000);
      this._camera.position.x = this.camera.position.x;
      this._camera.position.y = this.camera.position.y;
      this._camera.position.z = this.camera.position.z;
    },
    createRenderer() {
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(this.cWidth, this.cHeight);
      
      this.$refs.canvas.appendChild(this.renderer.domElement);
    },
    init() {
      this.createScene();
      this.createCamera();

      this.$slots.default().forEach((slot) => {
        this.item = slot.type.methods.init(slot.props);
        this._scene.add(this.item);
      })

      this.createRenderer();
    },
    loop() {
      this.renderer.render(this._scene, this._camera);
      if (this.item) {
        this.item.rotation.y -= .01;
        this.item.rotation.z += .01;
        this.item.rotation.x += .01;
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