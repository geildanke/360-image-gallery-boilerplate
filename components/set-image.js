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
    dur: {type: 'number', default: 300},
    key: {type: 'number'}
  },

  init: function () {
    var content = [
      {
        key: 0,
        nextImage: '#tour_1',
        nextPosition: '-4 -1 0',
        nextRotation: '0 90 0',
        nextPhiStart: 0,
        nextImageKey: 1
      },
      {
        key: 1,
        nextImage: '#tour_2',
        nextPosition: '-4 -1 0',
        nextRotation: '0 90 0',
        nextPhiStart: 0,
        nextImageKey: 2
      },
      {
        key: 2,
        nextImage: '#tour_3',
        nextPosition: '-4 -1 0',
        nextRotation: '0 90 0',
        nextPhiStart: 0,
        nextImageKey: 3
      },
      {
        key: 3,
        nextImage: '#tour_4',
        nextPosition: '-4 -1 0',
        nextRotation: '0 90 0',
        nextPhiStart: 0,
        nextImageKey: 4
      },
      {
        key: 4,
        nextImage: '#tour_5',
        nextPosition: '-4 -1 0',
        nextRotation: '0 90 0',
        nextPhiStart: 0,
        nextImageKey: 5
      },
      {
        key: 5,
        nextImage: '#tour_6',
        nextPosition: '-4 -1 0',
        nextRotation: '0 90 0',
        nextPhiStart: 0,
        nextImageKey: 6
      },
      {
        key: 6,
        nextImage: '#tour_7',
        nextPosition: '-4 -1 0',
        nextRotation: '0 90 0',
        nextPhiStart: 0,
        nextImageKey: 7
      },
      {
        key: 7,
        nextImage: '#tour_8',
        nextPosition: '-4 -1 0',
        nextRotation: '0 90 0',
        nextPhiStart: 0,
        nextImageKey: 8
      },
      {
        key: 8,
        nextImage: '#tour_9',
        nextPosition: '-4 -1 0',
        nextRotation: '0 90 0',
        nextPhiStart: 0,
        nextImageKey: 9
      },      {
        key: 9,
        nextImage: '#tour_10',
        nextPosition: '-4 -1 0',
        nextRotation: '0 90 0',
        nextPhiStart: 90,
        nextImageKey: 10
      },
      {
        key: 10,
        nextImage: '#tour_11',
        nextPosition: '-4 -1 0',
        nextRotation: '0 90 0',
        nextPhiStart: 310,
        nextImageKey: 11
      },
      {
        key: 11,
        nextImage: '#tour_12',
        nextPosition: '-4 -1 0',
        nextRotation: '0 90 0',
        nextPhiStart: 0,
        nextImageKey: 12
      },
      {
        key: 12,
        nextImage: '#tour_13',
        nextPosition: '-4 -1 0',
        nextRotation: '0 90 0',
        nextPhiStart: 280,
        nextImageKey: 13
      },
      {
        key: 13,
        nextImage: '#tour_0',
        nextPosition: '-3 -1 0',
        nextRotation: '0 0 0',
        nextPhiStart: 290,
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
        data.target.setAttribute('material', 'src', content[data.key].nextImage);
        data.target.setAttribute('phi-start', content[data.key].nextPhiStart);
        // Set button position and configure button to load next image on click.
        el.setAttribute('position', content[data.key].nextPosition);
        el.setAttribute('rotation', content[data.key].nextRotation);
        data.src = content[data.key].nextImage;
        data.key = content[data.key].nextImageKey;
        // console.log('__Current Config__', content[data.key]);
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
