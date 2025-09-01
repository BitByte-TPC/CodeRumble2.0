
// --- Perlin noise (cnoise) implementation ---
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x) {
  return mod289(((x*34.0)+10.0)*x);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}
float cnoise(vec3 P) {
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;
  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);
  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);
  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);
  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;
  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);
  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

// --- Voronoi implementation ---
vec3 hash3d(vec3 p) {
  return fract(
      sin(vec3(dot(p, vec3(1.0, 57.0, 113.0)), dot(p, vec3(57.0, 113.0, 1.0)),
               dot(p, vec3(113.0, 1.0, 57.0)))) *
      43758.5453);
}
vec2 voronoi( in vec3 x, in float time ) {
    vec3 n = floor(x);
    vec3 f = fract(x);
    vec4 m = vec4(8.0);
    for( int k=-1; k<=1; k++ ) {
        for( int j=-1; j<=1; j++ ) {
            for( int i=-1; i<=1; i++ ) {
                vec3 g = vec3(float(i),float(j),float(k));
                vec3 o = hash3d( n + g );
                vec3 r = g + (0.5+0.5*sin(vec3(time)+6.2831*o)) - f;
                float d = dot(r,r);
                if( d<m.x ) {
                    m = vec4( d, o );
                }
            }
        }
    }
    return vec2(m.x, m.y+m.z+m.w);
}

float PI = 3.141592653589793238;
uniform float u_time;
uniform int noiseAlgo;
uniform float noiseRange;
uniform float randomFactor;

attribute vec2 reference;
attribute vec3 basePosition;
varying float noiseVal;
varying float vDepth;
varying float vCornerDist;

float random (vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233)))*43758.5453123);
}

void main() {
  float rF = randomFactor;
  vec3 tweakedPos = basePosition + vec3(random(reference.xy), random(reference.yx * vec2(3.0)), random(reference.xy * vec2(5.0))) * rF;

  // Pick a random corner (for now, use (-1, 0, -1) for consistency)
  vec3 corner = vec3(-1.0, 0.0, -1.0);
  vCornerDist = distance(basePosition, corner);

  float fF = 3.;
  float ps = 0.;
  float ps2 = 0.;
  float edgeFactor = 4.0;
  float xy = abs(basePosition.x)*abs(basePosition.y);
  float xz = abs(basePosition.x)*abs(basePosition.z);
  float yz = abs(basePosition.z)*abs(basePosition.y);
  float tmp = max(xy,xz);
  tmp = max(tmp,yz);
  ps2 = smoothstep(0.8, 1.0, tmp);

  float noiseHeight = 0.0;
  float smoothScale = 2.2; // smaller = smoother
  vec3 timeOffset = vec3(u_time * 0.3, 0.0, u_time * 0.3);
  if (noiseAlgo == 1) {
    noiseVal = cnoise(basePosition * smoothScale + timeOffset);
    noiseHeight = noiseVal * 0.2; // scale height effect
  }

  tweakedPos.y += noiseHeight+0.4; // Offset plane up by 0.5 units
  vec4 mvPosition = modelViewMatrix * vec4(tweakedPos, 1.);
  vDepth = -mvPosition.z; // positive depth value

  // Dots closer to the corner are bigger, farther are smaller
  float minDist = 0.0;
  float maxDist = 3.0;
  float sizeFade = 1.0 - clamp((vCornerDist - minDist) / (maxDist - minDist), 0.0, 1.0);
  float minSize = 1.0;
  float maxSize = 15.0;
  gl_PointSize = mix(minSize, maxSize, sizeFade);
  gl_Position = projectionMatrix * mvPosition;
}