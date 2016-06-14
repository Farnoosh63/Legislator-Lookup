import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=533b55cca3194420997cf563616c73d2&zip=' + params.zip;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});
