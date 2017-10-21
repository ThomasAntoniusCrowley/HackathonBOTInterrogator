var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var natural_language_understanding = new NaturalLanguageUnderstandingV1({
    'username': '911c9986-82b1-41d8-a1c1-4a76d0b00cbb',
    'password': '7ijwXmKEIXSw',
    'version_date': '2017-02-27'
});

//var text = 'IBM is an American multinational technology company headquartered in Armonk, New York, United States, with operations in over 170 countries.';
//var text = 'Hello I am a finance bot. I help people with their online banking. With my help you can access you online bank account. You can check you ballance, you can transfer funds and with our new feature you can even invest! When you go to New York it will be great.'

//var text = "I want to kill myself!";

//var text = "Hi, sir. How can I help you today?"
//var text = "Good afternoon. Do you have any balance enquiries or would like to pay anyone?"
var text = "If you have something in mind, just type it in. You can also browse our naturally delicious recipes. Need to start over? Type “menu” at any time. You got this."

var parameters = {

    'text': text,

    'features': 
    {
        'categories': {},
        'concepts': {},
        'emotion': {},
        'entities': 
        {
            'emotion': true,
            'sentiment': true,
            //'limit': 2
        },
        'keywords': 
        {
            'emotion': true,
            'sentiment': true,
            //'limit': 2
        },
        //'sentiment':
        //{
        //}
        'relations': {},
        'semantic_roles': {
            'entities': true,
            'keywords': true,
        }
    }
}

natural_language_understanding.analyze(parameters, function(err, response) {
    if (err)
    {
        console.log('error:', err);
    }
    else
    {
        console.log(JSON.stringify(response, null, 2));
    }
});


