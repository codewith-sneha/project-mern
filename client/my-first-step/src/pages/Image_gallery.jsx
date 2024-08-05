import LightGallery from 'lightgallery/react';
import axios from 'axios';
import { useState ,useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
// import styles

export function Image_gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    // const data=[
    //     {src:"./src/assets/photogallery/1.jpeg" ,alt:1},
    //     {src:"./src/assets/photogallery/2.jpeg" ,alt:2},
    //     {src:"./src/assets/photogallery/3.jpeg" ,alt:3},
    //     {src:"./src/assets/photogallery/4.jpeg" ,alt:4},
    //     {src:"./src/assets/photogallery/5.jpeg" ,alt:5},
    //     {src:"./src/assets/photogallery/6.jpeg" ,alt:6},
    //     {src:"./src/assets/photogallery/7.jpeg" ,alt:7},
    //     {src:"./src/assets/photogallery/8.jpeg" ,alt:8},
    //     {src:"./src/assets/photogallery/9.jpeg" ,alt:9},
    //     {src:"./src/assets/photogallery/10.jpeg" ,alt:10},
    //     {src:"./src/assets/photogallery/11.jpeg" ,alt:11},
    //     {src:"./src/assets/photogallery/12.jpeg",alt:12},
    //     {src:"./src/assets/photogallery/13.jpeg",alt:13},
    //     {src:"./src/assets/photogallery/14.jpeg",alt:14},
    //     {src:"./src/assets/photogallery/15.jpeg",alt:15},
    //     {src:"./src/assets/photogallery/16.jpeg",alt:16},
    //     {src:"./src/assets/photogallery/17.jpeg",alt:17},
    //     {src:"./src/assets/photogallery/18.jpeg",alt:18},
    //     {src:"./src/assets/photogallery/19.jpeg",alt:19},
    //     {src:"./src/assets/photogallery/20.jpeg",alt:20},
    //     {src:"./src/assets/photogallery/21.jpeg",alt:21},
    //     {src:"./src/assets/photogallery/22.jpeg",alt:22},
    //     {src:"./src/assets/photogallery/23.jpeg",alt:23}
    // ]
   
    const [data,setData]=useState([]);
    const getPosts = async () => {
      try {
        let res = await axios.get("http://localhost:3387/api/get_all_images");
        let dataa = res.data;
        setData(dataa);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
  
  
    useEffect(() => {
      getPosts();
    }, []);  // 
    return (
<div className='w-full h-full flex-col bg-slate-100 flex items-center justify-center py-2 overflow-hidden
    relative'>
         <div className='capitalize text-4xl text-center m-5 home_heading '>
                <p>our image gallery</p>
            </div>
         <div className="rounded sm:columns-2 md:columns-3 xl:columns-4 gap-1 w-11/12 box-border gallery">
        {/* Rendering Image component for every image url in our api*/}
   {data.map((v,i)=>{
    return(
        <div className='rounded-lg p-1'>
            <Link to={`/View_galleryImage/${v._id}`}>
            <img src={`http://localhost:3387/${v.image}`} alt={i+1} className='rounded-lg' />
            </Link>
        </div>
    )
   })}
      </div>
    
</div>


//         <div className='bg-[#D6EFD8] p-3 m-3'>
           
//         <div className="App gallery">
//             <LightGallery
//                 onInit={onInit}
//                 speed={500}
//                 plugins={[lgThumbnail, lgZoom,lgFullscreen,lgRotate]}
//             >


// {data.map((v,index)=>{
//     return(
//         <div>
//          <img src={v.src} alt={index} />
//         </div>
//     )
//    })}  
//             </LightGallery>
//         </div>
//         </div>
    )
}


{/* /*             
 <a href="./src/assets/photogallery/1.jpeg">
<img alt="img1" src="./src/assets/photogallery/1.jpeg" />
</a>
<a href="./src/assets/photogallery/2.jpeg">
<img alt="img1" src="./src/assets/photogallery/2.jpeg" />
</a>
<a href="./src/assets/photogallery/3.jpeg">
<img alt="img1" src="./src/assets/photogallery/3.jpeg" />
</a>
<a href="./src/assets/photogallery/4.jpeg">
<img alt="img1" src="./src/assets/photogallery/4.jpeg" />
</a>
<a href="./src/assets/photogallery/5.jpeg">
<img alt="img1" src="./src/assets/photogallery/5.jpeg" />
</a>
<a href="./src/assets/photogallery/6.jpeg">
<img alt="img1" src="./src/assets/photogallery/6.jpeg" />
</a>
<a href="./src/assets/photogallery/7.jpeg">
<img alt="img1" src="./src/assets/photogallery/7.jpeg" />
</a>
<a href="./src/assets/photogallery/8.jpeg">
<img alt="img1" src="./src/assets/photogallery/8.jpeg" />
</a>
<a href="./src/assets/photogallery/9.jpeg">
<img alt="img1" src="./src/assets/photogallery/9.jpeg" />
</a>
<a href="./src/assets/photogallery/10.jpeg">
<img alt="img1" src="./src/assets/photogallery/10.jpeg" />
</a>
<a href="./src/assets/photogallery/11.jpeg">
<img alt="img1" src="./src/assets/photogallery/11.jpeg" />
</a>
<a href="./src/assets/photogallery/12.jpeg">
<img alt="img1" src="./src/assets/photogallery/12.jpeg" />
</a>
<a href="./src/assets/photogallery/13.jpeg">
<img alt="img1" src="./src/assets/photogallery/13.jpeg" />
</a>
<a href="./src/assets/photogallery/14.jpeg">
<img alt="img1" src="./src/assets/photogallery/14.jpeg" />
</a>
<a href="./src/assets/photogallery/15.jpeg">
<img alt="img1" src="./src/assets/photogallery/15.jpeg" />
</a>
<a href="./src/assets/photogallery/16.jpeg">
<img alt="img1" src="./src/assets/photogallery/16.jpeg" />
</a>
<a href="./src/assets/photogallery/17.jpeg">
<img alt="img1" src="./src/assets/photogallery/17.jpeg" />
</a>
<a href="./src/assets/photogallery/18.jpeg">
<img alt="img1" src="./src/assets/photogallery/18.jpeg" />
</a>
<a href="./src/assets/photogallery/19.jpeg">
<img alt="img1" src="./src/assets/photogallery/19.jpeg" />
</a>
<a href="./src/assets/photogallery/20.jpeg">
<img alt="img1" src="./src/assets/photogallery/20.jpeg" />
</a>
<a href="./src/assets/photogallery/21.jpeg">
<img alt="img1" src="./src/assets/photogallery/21.jpeg" />
</a>
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/22.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/23.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/24.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/25.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/26.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/27.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/28.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/29.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/30.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/31.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/32.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/33.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/34.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/35.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/36.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/37.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/38.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/39.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/40.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/41.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/42.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/43.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/44.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/45.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/46.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/47.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/48.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/49.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/50.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/51.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/52.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/53.jpeg" />
</a> 
<a href="./src/assets/photogallery/22.jpeg">
<img alt="img1" src="./src/assets/photogallery/54.jpeg" />
</a>  */} 

