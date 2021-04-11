# Universal API Converter

Live at : http://converterbackend.herokuapp.com/

# Running the server locally

cd into the ```universal_converter``` directory.

Use ```npm start``` to run the server.

Use the following cURL after replacing the path with the path to your local OpenAPI3 / Swagger2 document that you want to convert. Also, change the ```format``` and ```convertTo``` accordingly.

```
curl --location --request POST 'localhost:3001/converter?type=string&format=openapi3&convertTo=postman2' \
--form 'file=@"/home/sarthak/code/openapi-to-postman/example-spec.yaml"'
```
