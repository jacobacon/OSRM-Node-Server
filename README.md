## A Simple Node.js wrapper for OSRM that exposes the 'trip' api to '/trip' and allows POST requests.


### To Install:
    1. [Install Node.js](https://nodejs.org/en/download/)
    2. Clone the repo to wherever you want.
    3. Run 'npm install' from the root of the project.
    4. Create an *.osrm file.
    5. Run 'node bin/osrm-server {path to *.osrm} {--port X}'
    6. Send POST requests to '{IP_ADDRESS}/trip'


### An example request:

* POST:
    {
      "source": "first",
      "destination": "last",
      "coordinates":
      [
        [13.36761474609375, 52.51663871100423],
            [13.374481201171875, 52.506191342034576], [long, lat]
       ]
    }
    
#### The response time for large (>500) requests is fairly long.

* A request with ~2000 coordinates takes ~1 minute to respond. Make sure to set your timeout on the client-side accordingly.