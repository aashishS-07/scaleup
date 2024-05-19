import { NextResponse } from 'next/server';
export function GET(reuqest){
    const blog = [
        {
        "heading": "10 amazing sites to download stock photos & digital assets for free",
        "author": "Manish Sharma",
        "author_image":"/images/blog/author-02.png",
        "date": "June 20, 2022",
        "no_of_comments": "1000",
        "no_of_views": "10000",
        "tags": ["photography", "digital", "stock"],
        "tldr": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
        "image": "/images/blog/blog-details-02.jpg",
        "first_paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "subtopics":"Digital marketplace for Ui/Ux designers.",
        "info":"consectetur adipiscing elit in voluptate velit esse illum dolore eu fugiat nulla pariatur. Excepteur sint occaecat mattis vulputate cupidatat.",
        "point1":"Consectetur adipiscing elit in voluptate velit.",
        "point2":"Mattis vulputate cupidatat",
        "point3":" Vulputate enim nulla aliquet porttitor odio pellentesque.",
        "insights": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt utionals labore et dolore magna aliqua. Quis lobortis scelerisque fermentum, The Neque ut etiam sit amet.",
        "summary":"consectetur adipiscing elit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat mattis vulputate cupidatat.",
        "popular_tags": ["Design", "Development", "Info"]
      },
    ];
    return NextResponse.json(blog);
}

//post function
export async function POST(req){
    console.log(req)
    return req
}