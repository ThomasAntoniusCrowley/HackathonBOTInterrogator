'use strict';

const PersonalityInsightsV2 = require('watson-developer-cloud/personality-insights/v2');
const fs = require('fs');

const personality_insights = new PersonalityInsightsV2({
  username: '54ea0928-c45c-4fba-8551-c44111d136b7',
  password: '3zSJ0F1Z5KRO'
});

function saveJsonFile(filename, data) {
    fs.writeFile(filename, JSON.stringify(data), function(err){
          if(err){console.log(err);} else {console.log("Success.");}
    });
}

var file = process.argv.slice(2)[0];

function getPersonalityInsights(file, callback) {
    fs.readFile(file, function(err, data){ 

        if (err)
        {
            console.log(err)
        }
        else
        {
            personality_insights.profile(
                {
                    text: data.toString()
                },
                function(err, response) 
                {

                    if (err) {
                        console.log('error:', err);
                    } else {
                        //console.log(JSON.stringify(response, null, 2));
                        var big5 = {
                            openness: response.tree.children[0].children[0].children[0],
                            conscientiousness: response.tree.children[0].children[0].children[1],
                            extraversion: response.tree.children[0].children[0].children[2],
                            agreeableness: response.tree.children[0].children[0].children[3],
                            neuroticism: response.tree.children[0].children[0].children[4],
                        };

                        callback(big5);
                        //saveJsonFile("big5.json", response);

                        //console.log(big5);
                    }
                }
            );
        }
    });
}

module.exports = {
    getPersonalityInsights: getPersonalityInsights
}
