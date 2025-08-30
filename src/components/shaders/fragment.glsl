varying float noiseVal;
varying float vDepth;
varying float vCornerDist;
uniform float colorVariance;
uniform float u_time;

// reference: https://www.shadertoy.com/view/XljGzV
// h,s,l components are expected to be in [0..1]
vec3 hsl2rgb( in vec3 c ) {
    vec3 rgb = clamp( abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );

    return c.z + c.y * (rgb-0.5)*(1.0-abs(2.0*c.z-1.0));
}

void main() {
    // Make points circular
    vec2 c = gl_PointCoord - vec2(0.5);
    if (length(c) > 0.5) discard;
    // Fade based on distance from the chosen corner
    float minDist = 0.0;
    float maxDist = 3.0; // make fade sharper and more visible
    float fade = 1.0 - clamp((vCornerDist - minDist) / (maxDist - minDist), 0.0, 1.0);
    fade = clamp(fade, 0.1, 1.0); // ensure some minimum brightness

    // Use a static color (lime green) for all points
    vec3 color = vec3(1.0, 1.0, 1.0); // lime green
    gl_FragColor = vec4(color * fade, fade);
}