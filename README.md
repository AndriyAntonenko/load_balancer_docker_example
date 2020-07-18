
# Nginx load balancer example


You can run this app using **docker-compose**:
```
docker-compose up --scale app=5
```

This command will run 5 instances of node.js servers, postgresql database and nginx as load balancer.
Go to *http://localhost:3000* to see how it works
