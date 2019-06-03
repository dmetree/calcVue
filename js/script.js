

new Vue ({
  el: '#app',
  data: {
    slider_investment: '3',
    slider_shoulder: '2',
    slider_risk: '2',
    // number_risk: ''
  },
  computed: {
    number_investment: function(){
      return this.slider_investment * 1000
    },
    number_shoulder: function(){
      return this.slider_shoulder * 100
    },
    number_risk: function(){
      return this.slider_risk * 0.01
    },
    number_income: function(){
      return this.number_investment * this.number_shoulder * this.number_risk * 30
    }
  }
  
});


