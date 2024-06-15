/*
JavaScript

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
*/

function domainName(url){
    // array for indexes where somain name starts and ends
    let indexes = []
    // when url has "//www.""
    if ( url.search("//") != -1 && url.search("www") == -1){
      indexes.push(url.indexOf("//")+2);
      indexes.push(url.indexOf("."));
    }
    //when url doesnt have www or //
    else if ( (url.search("//") == -1) && url.search("www") == -1 ){
      indexes.push(0);
      indexes.push(url.indexOf("."));
    }
    else{
      url.split("").forEach((x,i)=> x === "." ? indexes.push(i) : 0);
      indexes[0]++;
    }
    
    return url.slice(indexes[0],indexes[1]);
  }