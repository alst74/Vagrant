{
  "nodes": {
    "master": {
      ":ip": "192.168.32.5",
      "ports": [
        {
          ":host": 8111,
          ":guest": 8111,
          ":id": "demoport"
        }
      ],
      ":memory": 1024,
      ":bootstrap": "bootstrap-master.sh"
    },
    "node1": {
      ":ip": "192.168.32.10",
      "ports": [],
      ":memory": 512,
      ":bootstrap": "bootstrap-node.sh"
    },
    "node2": {
      ":ip": "192.168.32.20",
      "ports": [],
      ":memory": 512,
      ":bootstrap": "bootstrap-node.sh"
    }
  }
