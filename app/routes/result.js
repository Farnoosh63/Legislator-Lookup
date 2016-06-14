import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
   var url = 'http://http://congress.api.sunlightfoundation.com/legislators/locate?zip=97201&apikey=533b55cca3194420997cf563616c73d2' + params.zip;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});
