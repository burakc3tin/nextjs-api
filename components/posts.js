import React,{useState,useEffect} from 'react'
import Post from './post'
import axios from 'axios';

export default function posts() {

//Post'ları listelemek için statleri oluşturuyoruz...
const [posts,setPosts] = useState([]);
 

//UseEffect ile istek atarız.
useEffect(()=>{

  const fetchData = async () => {

    const responsePosts = await axios.get('https://oggustowp.bomajans.site/wp-json/wp/v2/posts?_embedded[%27wp:featuredmedia%27][%270%27].source_url%20&');
 
    setPosts(responsePosts.data);
 
  }

    fetchData();
},[])
 
  return (
    <section className="main-content">
    <div className="container-xl">
      <div className="row gy-4">
        <div className="col-lg-12">
          <div className="row gy-4">
            <div className="section-header">
              <h3 className="section-title">Popüler Yazılar</h3>
            </div>
           
         {
           posts.map(repo=>
           
            //Burada post resmi , başlığı ve özeti alınıyor
            //özet kısmında <p> etiketide API içerisinde olduğu için bunu substr metodu ile çıkarttık.
           <Post
            key = {repo.id}
            img = {repo.img_url}
            title = {repo.title.rendered}
            text = {repo.excerpt.rendered.substr(3,repo.excerpt.rendered.length-8)}
            />
           )
         }
           
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
