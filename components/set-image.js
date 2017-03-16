/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('set-image', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'},
    dur: {type: 'number', default: 300}
  },

  init: function () {
    var content = [
      {
        key: 0,
        image: '#tour_0',
        position: '0 -2 -4',
        phiStart: 50,
        nextImageKey: 1
      },
      {
        key: 1,
        image: '#tour_1',
        position: '0 -1 -4',
        phiStart: 50,
        nextImageKey: 2
      },
      {
        key: 2,
        image: '#tour_2',
        position: '0 -2 -4',
        phiStart: 50,
        nextImageKey: 1
      }
    ];
    var data = this.data,
      el = this.el,
      imageToLoad = '#tour_2';

    this.setupFadeAnimation();

    el.addEventListener(data.on, function () {
      // Fade out image.
      data.target.emit('set-image-fade');
      // Wait for fade to complete.
      setTimeout(function () {
        // Set image.
        data.target.setAttribute('material', 'src', content[data.key].image);
        el.setAttribute('position', content[data.key].position);
        data.src = content[data.key].image;
        data.key = content[data.key].nextImageKey;
        console.log('__element', el, data);
      }, data.dur);
    });
  },

  /**
   * Setup fade-in + fade-out.
   */
  setupFadeAnimation: function () {
    var data = this.data;
    var targetEl = this.data.target;

    // Only set up once.
    if (targetEl.dataset.setImageFadeSetup) { return; }
    targetEl.dataset.setImageFadeSetup = true;

    // Create animation.
    targetEl.setAttribute('animation__fade', {
      property: 'material.color',
      startEvents: 'set-image-fade',
      dir: 'alternate',
      dur: data.dur,
      from: '#FFF',
      to: '#000'
    });
  }
});
