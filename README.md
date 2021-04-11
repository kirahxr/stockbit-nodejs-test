# Stockbit NodeJS Test

### Annagram, Refactoring, Query and Databases.
folder: others
- Demo for question 3 & 4: <https://replit.com/@makira/stockbit-test>
- PhpMyAdmin for the database and query testing: <https://pma.archv.id/>
```
user: stockbit
pass: S3cr3t123!!
```

### Express API.
- Search: <https://stockbit.makira.id/search?title=Batman&page=2>
- Detail: <https://stockbit.makira.id/detail?id=tt0372784>
- Postman Collection: <https://www.postman.com/collections/00ebe95dce2681e8f09b>

### Usage.
```
Endpoint: /search
Method: GET
Params: 
- title = Movie title to search for.
- Page = Page number to return.

Endpoint: /detail
Method: GET
Params: 
- id = A valid IMDb ID (e.g. tt1285016) *required
```

### Return.
|err |message|data |totalData |  datetime  | responseCode |
|:--:|:-----:|:---:|:--------:|:----------:|:------------:|
|null|success|JSON |  number  |  datetime  | 200          |
|true|failed |  -  |     -    |  datetime  | 500          |

### Author
<risky@makira.id>
