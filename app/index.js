
/*
 * projectname grunt-multi-line
 * projecthomepage https://github.com/xxxx
 * taskname multiline
 * desciption xxxxx
 * registry
 * url
 */

var path = require('path');
var fs = require('fs');

var chalk = require('chalk');
var yosay = require('yosay');
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);
        this.config.save();
        this.data = {};
    },
    prompting: {
        askFor: function() {
            var done = this.async();

            var msg =
                'Hi there, this Guide is going to help you create a ' + 'Grunt' + ' project.\n\n' +
                'Powered By ' + chalk.red('Xiuming') + '\n';

            this.log(yosay(msg));
            var cwd = process.cwd();
            var parts = cwd.split(path.sep);
            var lastPath = parts.pop();
            var lastSecondPath = parts.pop() || lastPath;
            var isGithub = cwd.indexOf('github') !== -1;
            var isGitlab = cwd.indexOf('gitlab') !== -1;
            var defaultGroup, defaultAli;

            if(isGithub){
                defaultGroup = 'bigfactory';
                defaultAli = 0;
            }
            if(isGitlab){
                defaultGroup = lastSecondPath || 'xiaocong.hxc';
                defaultAli = 1;
            }


            var prompts = [{
                name: 'name',
                default: lastPath,
                message: '项目名称:(例如:grunt-node-json):',
                validate: function(value) {
                    if (!value) {
                        return '项目名称不能为空.';
                    }
                    return true;
                }
            },{
                name: 'group',
                default: defaultGroup,
                message: '项目所在组:(例如:'+defaultGroup+')',
                validate: function(value){
                    return true;
                }
            },{
                name: 'description',
                default: lastPath,
                message: '项目描述:',
                validate: function(value){
                    return true;
                }
            },{
                name: 'ali',
                default: defaultAli,
                message: '是否添加@ali前缀',
                validate: function(value){
                    return true;
                }
            }];

            this.prompt(prompts, function(props) {
                
                var group, registry, url, homepage;

                if(isGithub){
                    group = props.group || 'bigfactory';
                    homepage = 'https://github.com/'+group+'/'+props.name;
                    url = homepage + '.git';
                }
                if(isGitlab){
                    group = props.group || 'xiaocong.hxc';
                    registry = 'http://registry.npm.alibaba-inc.com';
                    homepage = 'https://gitlab.alibaba-inc.com/'+group+'/'+props.name;
                    url = homepage + '.git';
                }

                this.data.ali = parseInt(props.ali, 10);
                this.data.name = props.name;
                this.data.url = url;
                this.data.registry = registry;
                this.data.projectname = props.name;
                this.data.projecthomepage = homepage;
                this.data.description = props.description;

                if(this.data.ali){
                    this.data.fullname = '@ali/'+this.data.name;
                }
                else{
                    this.data.fullname = this.data.name;
                }
                this.data.taskname = this.data.name.replace('grunt-', '').replace(/\-/g, '');

                done();
            }.bind(this));
        },
    },

    writing: {
        projectfiles: function() {
            this.template('package.tpl', 'package.json');
            this.template('README.md');
            this.template('Gruntfile.js');
        },

        mkdirs: function() {
            this.dest.mkdir('test');

        },

        copy: function() {
            this.copy('_gitignore', '.gitignore');
            this.template('tasks/task.js', 'tasks/'+this.data.taskname+'.js');
        }

    },
    
    end: function() {
        var generator = this;
        this.log(chalk.green.bold('Everything is ready.'));
    }
});