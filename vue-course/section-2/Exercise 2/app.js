new Vue({
    el: '#exercise',
    data: {
        value: '',
        valueTwo: ''
    },
    methods: {
      showAlert: function() {
        alert('hi!')
      },
      updateTextTwo: function(e) {
        this.valueTwo = e.target.value
      }
    }
});