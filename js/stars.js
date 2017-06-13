var closedFilterHeight = "25px";

var homepage = new Vue({
  el: '#target',
  data: function(){
    return {
      s:s, //s is for app State
      showHero: true,
      searchQuery: null,
      showMyPrograms:false
    }
  },
  mounted: function() {
    console.log("mounted");
    $(".filter-box").each(function(index,filterBox){

      var topHeight     = $(filterBox).find(".filter-toggle-control").outerHeight();
      var bottomHeight  = $(filterBox).find(".filter-items").outerHeight();
      var totalHeight = topHeight + bottomHeight + 30;

      var heightString = totalHeight + "px";
      var filterIndex = $(filterBox).attr('groupname');

      s.filters[filterIndex].maxHeight = heightString;
    });


    var ctx = $("#donut-chart");

    //get chart data array from data
    var chartLabels = [];
    var chartData = [];
    $.each(s.dashboard.zones,function(index,zone){
      chartLabels.push(zone.name);
      chartData.push(zone.value);
    });

    var data = {
        labels: chartLabels,
        datasets: [
            {
                data: chartData,
                backgroundColor: [
                    "#107493",
                    "#168ab6",
                    "#28b1df",
                    "#5acbee"
                ]
            }]
    };


    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
          cutoutPercentage: 60,
          legend: {
              display: false
          }
        }
    });

  },
  updated: function() {
    console.log("updated");
  },
  methods: {
    toggleGroup: function(group){
      if (group.currentHeight == closedFilterHeight){
        group.currentHeight = group.maxHeight;
        group.open = !group.open;
      } else {
        group.currentHeight = closedFilterHeight;
        group.open = !group.open;
      }
    }
  }
});
