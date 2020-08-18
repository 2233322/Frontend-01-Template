let Generator = require('yeoman-generator')

module.exports = class extends Generator {
    constructor(args, opts){
        super(args, opts)

  }

  collecting() {
    this.log('collectiing')
  }

  creating() {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { name: 'myweb' }
    )

    
    this.fs.copyTpl(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    )

    this.fs.copyTpl(
      this.templatePath('.nycrc'),
      this.destinationPath('.nycrc')
    )

    this.fs.copyTpl(
      this.templatePath('main.test.js'),
      this.destinationPath('test/main.test.js')
    )

    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    )

    this.fs.copyTpl(
      this.templatePath('cssLoader.js'),
      this.destinationPath('cssLoader.js')
    )

    this.fs.copyTpl(
      this.templatePath('carousel.css'),
      this.destinationPath('src/carousel.css')
    )


    this.fs.copyTpl(
      this.templatePath('react.js'),
      this.destinationPath('src/react.js')
    )

    this.fs.copyTpl(
      this.templatePath('animation.js'),
      this.destinationPath('src/animation.js')
    )

    this.fs.copyTpl(
      this.templatePath('carousel.js'),
      this.destinationPath('src/carousel.js')
    )

    this.fs.copyTpl(
      this.templatePath('gesture.js'),
      this.destinationPath('src/gesture.js')
    )

    this.fs.copyTpl(
      this.templatePath('cubicBezier.js'),
      this.destinationPath('src/cubicBezier.js')
    )

    this.fs.copyTpl(
      this.templatePath('main.js'),
      this.destinationPath('src/main.js')
    )

    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('src/template/index.html')
    )

    // this.npmInstall([
    //   '@babel/core',
    //   '@babel/plugin-transform-react-jsx',
    //   '@babel/preset-env',
    //   '@babel/register',
    //   'babel-loader',
    //   'css-loader',
    //   'style-loader',
    //   '@istanbuljs/nyc-config-babel',
    //   'babel-plugin-istanbul',
    //   'html-webpack-plugin',
    //   'mocha',
    //   'nyc',
    //   'css',
    //   'webpack',
    //   'webpack-cli',
    //   'webpack-dev-server'
    // ], {'save-dev': true})



  }

  // async prompting() {
  //   this.answers = await this.prompt([{
  //     type    : 'input',
  //     name    : 'title',
  //     message : 'Your project title',
  //   }]);
  // }

    
  // writing() {
  //   this.fs.copyTpl(
  //     this.templatePath('index.html'),
  //     this.destinationPath('public/index.html'),
  //     { title: this.answers.title }
  //   );
  // }

} 