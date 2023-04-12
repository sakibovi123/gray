import React, { useState, useEffect } from 'react'
import embrace from "../../Assets/Images/embrace-digital-future.webp"
import noImage from "../../Assets/Images/No_Image_Available.jpg"

export const BlogCard = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        fetch("http://127.0.0.1:8000/api/blogs")
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error(error))
    })

  return (
    <div className="container mx-auto flex grid grid-cols-1 md:grid-cols-3 items-center justify-center my-14">

        {
            posts.map(post=> (
                    <div key={post.id} className={"h-[550px] card-section w-full md:w-[85%] p-3 flex flex-col items-center justify-center rounded-2xl shadow-md hover:shadow-xl bg-white my-3 md:mx-2 transition-auto"}>
                        <div id={"image-section"}>

                        <img src={post.attachment} alt="" />
                        </div>
                        <div id={"title-section"}>
                            <p className={"text-2xl font-semibold p-2"}>
                                {post.title}
                            </p>
                        </div>
                        <div id={"sub-section"}>
                            <p className={"p-2 text-center"}>
                                {post.content.substring(0, 200)}
                            </p>
                            
                        </div>
                        <div id={"read-mode-section"} className={"p-5"}>
                            <button className={"border-2 border-gray-400 hover:border-none w-[300px] p-2 rounded-full hover:text-white hover:bg-gray-800  duration-500"}>
                                Read More
                            </button>
                        </div>
                    </div>
                    
            ))
            
        }      
        
    </div>
  )
}
