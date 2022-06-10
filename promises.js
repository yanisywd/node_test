const posts=[
    {title:'post one', body:'heda body te3O'},
    {title:'post two', body:"heda body teni"}
];
function getposts(){
 setTimeout(() => {
     let output='';
     posts.forEach((post,index)=>{
         output+=`<li> ${post.title}</li>`;
     });
     document.body.innerHTML=output;
 }, 1000);
}

function createpost(post, ){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);
            const error=false;
            if(!error){resolve();}
            else{reject('error')}
        }, 2000);
    });
  
}
createpost({title:"post tree",body:'post 3 bod'},)
.then(getposts)
.catch(err=>console.log(err));