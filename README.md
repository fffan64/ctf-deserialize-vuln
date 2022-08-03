# Build
Replace env var FLAG with desired flag val and run (build env var only)

```
docker build --build-arg FLAG=flag{MYAWESOMEFLAG} . -t ctf-deserialize-vuln
```

# Run
```
docker run -p 8080:8080 -d --name ctf-deserialize-vuln --rm ctf-deserialize-vuln
```

# Get container ID
```
docker ps
```

# Print app output
```
docker logs <container id>
```

# App access
Running on http://localhost:8080

# Enter the container
```
docker exec -it <container id> /bin/bash
```

# Stop container
```
docker stop ctf-deserialize-vuln
```