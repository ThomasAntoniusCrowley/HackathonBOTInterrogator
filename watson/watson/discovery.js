//const fs = require('fs');
var DiscoveryV1 = require('watson-developer-cloud/discovery/v1');

var discovery = new DiscoveryV1({
  username: '63809e04-c96f-46d7-8b67-8859268ea610',
  password: 'Qsy2W2cvTwGQ',
  version_date: '2017-10-16'
});

var properties = {
    configuration_id: 'e7271b3a-dc0a-4b60-93e0-cc97cb639363',

    environment_id: 'b2992b00-1ff7-4380-9018-ce03fdebce61',
    collection_id:  'cb8bd004-efc5-46f1-a547-d4983070c256',
    document_id: 'e93de23b-b734-4087-8a43-7d6fe7c89d91'

    //collection_name: "test-collection",
    //name: "testy",
    //language: "en_us",
    //description: "This is a cool description."
};

discovery.getDocument(properties, function(error, data) {
    if (error)
    {
        console.log(error);
    }
    else
    {
        console.log(JSON.stringify(data, null, 2));
    }
});

//var file = fs.readFileSync('./profiles/context.txt');

//console.log(file.toString());

//discovery.addDocument(properties, file, function(error, data) {
    //if (error)
    //{
        //console.log(error);
    //}
    //else
    //{
        //console.log(JSON.stringify(data, null, 2));
    //}
//});

// vaporcloud

//discovery.getCollections(properties, function(error, data) {
    //if (error)
    //{
        //console.log(error);
    //}
    //else
    //{
        //console.log(JSON.stringify(data, null, 2));
    //}
//});

//discovery.createCollection(properties, function(error, data) {
    //if (error)
    //{
        //console.log(error);
    //}
    //else
    //{
        //console.log(JSON.stringify(data, null, 2));
    //}
//});

//discovery.listCollectionFields(properties, function(error, data) {
    //console.log(JSON.stringify(data, null, 2));
//});

//discovery.deleteCollection(properties, function(error, data) {
    //if (error)
    //{
        //console.log(error);
    //}
    //else
    //{
        //console.log(JSON.stringify(data, null, 2));
    //}
//});

//discovery.getEnvironments({}, function(error, data) {
  //console.log(JSON.stringify(data, null, 2));
//});

//discovery.getConfigurations(properties, function(error, data) {
    //if (error)
    //{
        //console.log(error);
    //}
    //else
    //{
        //console.log(JSON.stringify(data, null, 2));
    //}
//});

//discovery.getCollections(properties, function(error, data) {
    //if (error)
    //{
        //console.log(error);
    //}
    //else
    //{
        //console.log(JSON.stringify(data, null, 2));
    //}
//});

//discovery.getCollections((properties.environment_id), function(error, data) {
    //if (error)
    //{
        //console.log(error);
    //}
  //console.log(JSON.stringify(data, null, 2));
//});
