// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports"],function(C,c){Object.defineProperty(c,"__esModule",{value:!0});(function(c){c.transformMat4=function(b,e,a){if(b.count!==e.count)console.error("input and output buffers need to have the same number of elements");else{var c=b.count,q=a[0],r=a[1],t=a[2],u=a[3],v=a[4],w=a[5],x=a[6],y=a[7],d=a[8],g=a[9],h=a[10],k=a[11],z=a[12],A=a[13],B=a[14];a=a[15];for(var f=0;f<c;f++){var m=e.get(f,0),n=e.get(f,1),p=e.get(f,2),l=u*m+y*n+k*p+a,l=l||1;b.set(f,0,(q*m+v*n+d*p+z)/l);b.set(f,
1,(r*m+w*n+g*p+A)/l);b.set(f,2,(t*m+x*n+h*p+B)/l)}}};c.transformMat3=function(b,e,a){if(b.count!==e.count)console.error("input and output buffers need to have the same number of elements");else{var c=b.count,q=a[0],r=a[1],t=a[2],u=a[3],v=a[4],w=a[5],x=a[6],y=a[7];a=a[8];for(var d=0;d<c;d++){var g=e.get(d,0),h=e.get(d,1),k=e.get(d,2);b.set(d,0,q*g+u*h+x*k);b.set(d,1,r*g+v*h+y*k);b.set(d,2,t*g+w*h+a*k)}}}})(c.vec3f||(c.vec3f={}))});