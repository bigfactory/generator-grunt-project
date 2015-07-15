# <%=data.projectname%>

> <%=data.description%>

## Environment
Grunt `~0.4.5`

## Install
```
$ npm install <%=data.projectname%> --save-dev
```

## Config
```
grunt.loadNpmTasks('<%=data.projectname%>');
```

## Task Config

```
grunt.initConfig({
    <%=data.taskname%>: {
        options: {
        
        }
    }
});
```

## Usage

```
$ grunt <%=data.taskname%>
```