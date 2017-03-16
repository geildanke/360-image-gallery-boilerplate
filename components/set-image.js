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
        nextImageKey: 3
      },
      {
        key: 3,
        image: '#tour_3',
        position: '0 -2 -4',
        phiStart: 50,
        nextImageKey: 4
      },
      {
        key: 4,
        image: '#tour_4',
        position: '0 -2 -4',
        phiStart: 50,
        nextImageKey: 5
      },
      {
        key: 5,
        image: '#tour_5',
        position: '0 -2 -4',
        phiStart: 50,
        nextImageKey: 6
      },
      {
        key: 6,
        image: '#tour_6',
        position: '0 -2 -4',
        phiStart: 50,
        nextImageKey: 7
      },
      {
        key: 7,
        image: '#tour_7',
        position: '0 -2 -4',
        phiStart: 50,
        nextImageKey: 8
      },
      {
        key: 8,
        image: '#tour_8',
        position: '0 -2 -4',
        phiStart: 50,
        nextImageKey: 9
      },
      {
        key: 9,
        image: '#tour_9',
        position: '0 -2 -4',
        phiStart: 50,
        nextImageKey: 10
      },
      {
        key: 10,
        image: '#tour_10',
        position: '0 -2 -4',
        phiStart: 50,
        nextImageKey: 11
      },
      {
        key: 11,
        image: '#tour_11',
        position: '0 -2 -4',
        phiStart: 50,
        nextImageKey: 12
      },
      {
        key: 12,
        image: '#tour_12',
        position: '0 -2 -4',
        phiStart: 50,
        nextImageKey: 13
      },
      {
        key: 13,
        image: '#tour_13',
        position: '0 -2 -4',
        phiStart: 50,
        nextImageKey: 0
      }
    ],
    data = this.data,
    el = this.el;

    this.setupFadeAnimation();

    el.addEventListener(data.on, function () {
      // Fade out image.
      data.target.emit('set-image-fade');
      // Wait for fade to complete.
      setTimeout(function () {
        // Set image and image phi start.
        data.target.setAttribute('material', 'src', content[data.key].image);
        data.target.setAttribute('phi-start', content[data.key].phiStart);
        // Set button position and configure button to load next image on click.
        el.setAttribute('position', content[data.key].position);
        data.src = content[data.key].image;
        data.key = content[data.key].nextImageKey;
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
