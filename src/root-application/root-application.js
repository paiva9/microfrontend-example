import { registerApplication, start } from 'single-spa';

registerApplication(
  'app-1', 
  () => import ('../app1/app1.js'), 
  pathPrefix('/app1')
);

registerApplication(
  'app-2', 
  () => import ('../app2/app2.js'), 
  pathPrefix('/app2')
);

registerApplication(
  'app-3',
  () => import ('../app3/vue.app'),
  (pathPrefix('/app3'))
)
 
start();

function pathPrefix(prefix) {
  return function(location) {  
    return true;
    return location.pathname.startsWith(`${prefix}`);
  }
}