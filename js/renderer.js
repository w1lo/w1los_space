
function CreateShater(vertSrc, fragSrc) {

    var vert = GL.createShader(GL.VERTEX_SHADER);
	var frag = GL.createShader(GL.FRAGMENT_SHADER);

	GL.shaderSource(vert, vertSrc);
	GL.shaderSource(frag, fragSrc);

	GL.compileShader(vert);
	if(!GL.getShaderParameter(vert, GL.COMPILE_STATUS)) {
		console.error('ERROR compiling vertex shader!', GL.getShaderInfoLog(vertexShader));
		return;
	}

	GL.compileShader(frag);
	if(!GL.getShaderParameter(frag, GL.COMPILE_STATUS)) {
		console.error('ERROR compiling fragment shader!', GL.getShaderInfoLog(fragmentShader));
		return;
	}

	var program = GL.createProgram();
	GL.attachShader(program, vert);
	GL.attachShader(program, frag);
	GL.linkProgram(program);
	if(!GL.getProgramParameter(program, GL.LINK_STATUS)) {
		console.error('ERROR linking program!', GL.getProgramInfoLog(program));
		return;
	}
	GL.validateProgram(program);
	if(!GL.getProgramParameter(program, GL.VALIDATE_STATUS)) {
		console.error('ERROR validating program!', GL.getProgramInfoLog(program));
		return;
	}
    return program;
}

function NextFrame() {

    TimeNow = performance.now();
    TimeElapsed = TimeNow - TimePrev;
    TimePrev = TimeNow;


    

    GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);

    //Render all models
    for(var i = 0; i < ModelQueue.length; i++) {
        gl.bindBuffer(gl.ARRAY_BUFFER, ModelQueue[i].v_buff);
	    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ModelQueue.e_buff);
    
        //Create Matrices
    

        GL.drawElements(GL.TRIANGLES, ModelQueue[i].e_length, GL.UNSIGNED_SHORT, 0);
    }

    requestAnimationFrame(NextFrame);
}