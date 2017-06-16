var gauge;

  var homepage = new Vue({
  el: '#target',
  data: function(){

    return {
      s:s,//s is for app State
      gaugeValue: 8,
      gaugeLabel: "8 - Worth Your time",
      selectedShow: null,
      selectedShowTitle:null,
      selectedShowImage:null,
      comment:null,
      isInputActive:false,
      isFormOpen: false
    }

  },
  mounted: function() {

    console.log("mounted");
    Vue.config.devtools = true;

    var opts = {
      angle: 0.01, // The span of the gauge arc
      lineWidth: 0.07, // The line thickness
      radiusScale: 1, // Relative radius
      pointer: {
        length: 0.54, // // Relative to gauge radius
        strokeWidth: 0.026, // The thickness
        color: '#ffffff' // Fill color
      },
      limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
      limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually
      colorStart: '#fe001a',   // Colors
      colorStop: '#fe001a',    // just experiment with them
      strokeColor: '#E0E0E0',  // to see which ones work best for you
      generateGradient: true,
      highDpiSupport: true     // High resolution support
    };
    var target = document.getElementById('gauge'); // your canvas element
    gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 180; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 30; // set animation speed (32 is default value)
    gauge.set(145); // set actual value



  },
  updated: function() {

    console.log("updated");

  },
  methods: {
    submitPost: function(){

      var newPost = {
        author: "JohnFord",
        show: this.selectedShow,
        comment: this.comment,
        rating: this.gaugeValue
      };

      s.posts.unshift(newPost);

      this.isFormOpen = false;
    },
    chooseOption: function(index){


      console.log(index);

      var show = s.shows[index];
      this.selectedShow = show;
      this.selectedShowTitle = show.title;

    },
    setGauge: function(event){


      var p2 = {
      	x: 188,
      	y: 293
      };

      var p1 = {
      	x: event.center.x,
      	y: event.center.y
      };

      // angle in radians
      var angleRadians = Math.atan2(p2.y - p1.y, p2.x - p1.x);

      // angle in degrees
      var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;

      gauge.set(angleDeg);

      this.gaugeValue = roundHalf( (angleDeg/180)*10 );

      var vThis = this;

      $.each(s.thresholds,function(index,thresh){


          if (thresh.value <= vThis.gaugeValue){
            vThis.gaugeLabel = vThis.gaugeValue + " - " + thresh.text;
          }

      });

    }
  }
});


function roundHalf(num) {
    return Math.round(num*2)/2;
}
