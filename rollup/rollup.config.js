 import nodeResolve from 'rollup-plugin-node-resolve';
 import commonjs from 'rollup-plugin-commonjs';
 import babel from "rollup-plugin-babel";

 export default {
   entry: "target/main.js",
   dest: "dist/bundle.js",
   plugins: [
     nodeResolve({jsnext: true}),
     commonjs(),
     babel()
   ]
 };
