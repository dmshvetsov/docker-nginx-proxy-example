# Docker nginx-proxy example

nginx-proxy sets up a container running nginx and docker-gen. docker-gen generates reverse proxy configs for nginx and reloads nginx when containers are started and stopped.

See Automated Nginx Reverse Proxy for Docker for why you might want to use this.

[source](https://github.com/jwilder/nginx-proxy)

## Run

In order to run example execute in root of the cloned repo:

    $ docker-compose up

It will run 4 node.js HTTP servers [a.localhost:8080](http://a.localhost:8080), [b.localhost:8080](http://b.localhost:8080), [c.localhost:8080](http://c.localhost:8080), [d.localhost:8080](http://d.localhost:8080). The servers responds with plain text.
