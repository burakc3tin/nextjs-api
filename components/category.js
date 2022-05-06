 import axios from 'axios';
import React,{useEffect,useState} from 'react'




 export default function category({categoryName}) {

    const [categories,setCategories] = useState([]);

    useEffect(()=>{

        const categoriesData = async () => {
      
           const responseCategories = await axios.get('https://oggustowp.bomajans.site/wp-json/wp/v2/categories?_');
      
           setCategories(responseCategories.data);
      
        }
        categoriesData();
      
      },[])


    return (
        <div>
        <div className="post featured-post-md">
            <div className="details clearfix">
                <h4 className="post-title">
                    <a href="#">Test</a>
                </h4>
            </div>
            <a href="#">
                <div className="thumb rounded">
                    <div
                        className="inner data-bg-image"
                        data-bg-image="images/category-webTasarim.jpg"
                    />
                </div>
            </a>
        </div>

        </div>
    )
}
