# Universal API Converter

cd into ```universal_converter```

Use ```npm start``` to run the server.

Use the following curl after replacing the path to your local OpenAPI document that you want to convert:

```
curl --location --request POST 'localhost:3001/converter?type=string&format=openapi&convertTo=postman' \
--form 'file=@"/home/sarthak/code/openapi-to-postman/example-spec.yaml"' \
--form 'type="string"' \
--form 'format="openapi"' \
--form 'convertTo="postman"'
```