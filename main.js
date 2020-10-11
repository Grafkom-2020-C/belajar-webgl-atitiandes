function main(){
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");
  
    var vertexShaderSource = `
      void main(){
        gl_PointSize = 25.0;
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
      }
    `;
    var fragmentShaderSource = `
      void main(){
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
      }
    `;
  
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
  
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
  
    var shaderProgram = gl.createProgram();
  
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
  
    gl.linkProgram(shaderProgram);
  
    gl.useProgram(shaderProgram);
  
    gl.clearColor(0.0, 0.22, 0.5, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  
    gl.drawArrays(gl.POINTS, 0, 1);
  }