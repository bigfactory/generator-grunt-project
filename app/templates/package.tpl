{
  "name": "<%= data.fullname %>",
  "version": "0.0.1",
  "description": "<%=data.description%>",
  "keywords": [
    "gruntplugin"
  ],
  "main": "tasks/<%=data.taskname%>.js",
  "homepage": "<%=data.projecthomepage%>",
  "scripts": {
    "test": "grunt"
  },
  "devDependencies": {
      "grunt-contrib-jshint": "^0.9.2",
      "grunt-contrib-clean": "^0.5.0",
      "grunt-contrib-nodeunit": "^0.3.3",
      "grunt": "~0.4.5"
  },
  "dependencies": {
    "chalk": "^1.0.0"
  },
  "peerDependencies": {
    "grunt": "~0.4.5"
  },
  "author": "",
  "repository": {
    "type": "git",
    "url": "<%= data.url %>"
  },
  <% if(data.registry){ %>
  "publishConfig": {
    "registry": "<%= data.registry %>"
  },
  <% } %>
  "license": "ISC"
}