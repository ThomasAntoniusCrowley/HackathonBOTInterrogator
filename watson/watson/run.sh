#
### Personality Insights
#
#curl -X POST --user 54ea0928-c45c-4fba-8551-c44111d136b7:3zSJ0F1Z5KRO \
#--header "Content-Type: text/plain;charset=utf-8" \
#--data-binary "@profile.txt" \
#"https://gateway.watsonplatform.net/personality-insights/api/v3/profile?version=2017-10-13"

#
### Natural Language Understanding
#
curl --user "911c9986-82b1-41d8-a1c1-4a76d0b00cbb":"7ijwXmKEIXSw" "https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2017-02-27&text="\
"I%20ate%20a%20pie%20and%20I%20liked%20it.%20It%20was%20amazing%20and%20I%20am%20now%20a%20slave%20to%20pieness."\
".&features=sentiment,keywords&keywords.sentiment=true"
#".&features=sentiment,keywords"

#"I%20still%20have%20a%20dream%2C%20a%20dream%20deeply%20rooted%20in%20the%20American%20dream%20%E2%80%93%20one%20day%20this%20nation%20will%20rise%20up%20and%20live%20up%20to%20its%20creed%2C%20%22We%20hold%20these%20truths%20to%20be%20self%20evident%3A%20that%20all%20men%20are%20created%20equal"\



#
### Dicovery 
#
# Making an environment.
#
#curl -X POST -u "63809e04-c96f-46d7-8b67-8859268ea610":"Qsy2W2cvTwGQ" -H "Content-Type: application/json" -d '{ "name":"my-first-environment", "description":"exploring environments"}' "https://gateway.watsonplatform.net/discovery/api/v1/environments?version=2017-10-16"

# Responce
#{
  #"environment_id" : "b2992b00-1ff7-4380-9018-ce03fdebce61",
  #"name" : "my-first-environment",
  #"description" : "exploring environments",
  #"created" : "2017-10-21T16:04:50.034Z",
  #"updated" : "2017-10-21T16:04:50.034Z",
  #"status" : "active",
  #"read_only" : false,
  #"index_capacity" : {
    #"documents" : {
      #"available" : 0,
      #"maximum_allowed" : 2000
    #},
    #"disk_usage" : {
      #"used_bytes" : 0,
      #"maximum_allowed_bytes" : 200000000
    #},
    #"collections" : {
      #"available" : 0,
      #"maximum_allowed" : 0
    #}
  #}
#}% 


# Check if you environment is active.
#
#curl -u "63809e04-c96f-46d7-8b67-8859268ea610":"Qsy2W2cvTwGQ" https://gateway.watsonplatform.net/discovery/api/v1/environments/b2992b00-1ff7-4380-9018-ce03fdebce61?version=2017-10-16

# Get Default Configuration ID
#
#curl -u "63809e04-c96f-46d7-8b67-8859268ea610":"Qsy2W2cvTwGQ" https://gateway.watsonplatform.net/discovery/api/v1/environments/b2992b00-1ff7-4380-9018-ce03fdebce61/configurations?version=2017-10-16

# Create a Collection
#
#curl -X POST -u "63809e04-c96f-46d7-8b67-8859268ea610":"Qsy2W2cvTwGQ" -H "Content-Type: application/json" -d '{"name": "my-first-collection", "description": "exploring collections", "configuration_id":"e7271b3a-dc0a-4b60-93e0-cc97cb639363" , "language": "en_us"}' https://gateway.watsonplatform.net/discovery/api/v1/environments/b2992b00-1ff7-4380-9018-ce03fdebce61/collections?version=2017-10-16

# Upload Files
#
#curl -X POST -u "63809e04-c96f-46d7-8b67-8859268ea610":"Qsy2W2cvTwGQ" -F "file=@./profiles/context.html" https://gateway.watsonplatform.net/discovery/api/v1/environments/b2992b00-1ff7-4380-9018-ce03fdebce61/collections/cb8bd004-efc5-46f1-a547-d4983070c256/documents?version=2017-10-16


#
# Delete Files
#
#curl -X DELETE \
#-u "63809e04-c96f-46d7-8b67-8859268ea610":"Qsy2W2cvTwGQ" "https://gateway.watsonplatform.net/discovery/api/v1/environments/b2992b00-1ff7-4380-9018-ce03fdebce61/collections/2a61d5b3-977e-4612-aaaa-3926a8715c5f/documents/{document_id}?version=2017-10-16"



# Query your collection
# 
#curl -u "63809e04-c96f-46d7-8b67-8859268ea610":"Qsy2W2cvTwGQ" 'https://gateway.watsonplatform.net/discovery/api/v1/environments/b2992b00-1ff7-4380-9018-ce03fdebce61/collections/cb8bd004-efc5-46f1-a547-d4983070c256/query?version=2017-10-16&query=enriched_text.entities.text:delicious'


# Get Document
#curl -u "63809e04-c96f-46d7-8b67-8859268ea610":"Qsy2W2cvTwGQ" "https://gateway.watsonplatform.net/discovery/api/v1/environments/b2992b00-1ff7-4380-9018-ce03fdebce61/collections/cb8bd004-efc5-46f1-a547-d4983070c256/documents/e93de23b-b734-4087-8a43-7d6fe7c89d91?version=2017-10-16"


#curl \
#-u "63809e04-c96f-46d7-8b67-8859268ea610":"Qsy2W2cvTwGQ" "https://gateway.watsonplatform.net/discovery/api/v1/environments/b2992b00-1ff7-4380-9018-ce03fdebce61/configurations?version=2017-10-16"




# Document IDs
# context.html - a9c1ad79-6a3e-4b8b-89e0-6a219499f17c
