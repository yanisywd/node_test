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

function createpost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}
createpost({title:"post tree",body:'post 3 bod'},getposts);