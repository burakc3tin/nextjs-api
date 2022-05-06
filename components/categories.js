import React,{useEffect,useState} from 'react'
import Category from './category'
import axios from 'axios';


export default function categories({deneme}) {
  const [categories,setCategories] = useState([]);

    
    // UseEffect ile istek atarız.
useEffect(()=>{

  const categoriesData = async () => {

     const responseCategories = await axios.get('https://oggustowp.bomajans.site/wp-json/wp/v2/categories?_');

     setCategories(responseCategories.data);

  }
  categoriesData();

},[])
 

  return (

    <section className="hero-carousel mt-5">
    <div className="container-xl">
      <div className="row gy-4">
        <div className="section-header">
          <h3 className="section-title">Başlıca Kategoriler
          
          </h3>
         </div>
        <div className="row post-carousel-featured post-carousel">
          {/* Kategori isimleri basıldığı zaman carousel bozuluyor */}
       
          {
           categories.map(repo=>
           <h6>{repo.name}</h6>
           )}
     
        </div>
      </div>
    </div>
  </section>
  )
}
