import { NextResponse } from 'next/server';
export function GET(request){
    const blog = [
        {
            "id": 2,
            "heading": "Prawaas 4.0: Pioneering the Future of India’s Multimodal Transport Sector",
            "author": "Nitin",
            "author_image": "/images/blog/img_1.png",
            "date": "August 31, 2024",
            "no_of_comments": "0",
            "no_of_views": "[Pending]",
            "tags": ["#Prawaas", "#Mobility", "#Transport", "#Exhibition"],
            "tldr": "Prawaas 4.0, hosted by the Bus and Car Operators Confederation of India (BOCI), celebrated the strides made in India’s multimodal transport sector. The event saw record participation with over 6,153 operators, 171 exhibitors, and 10,000+ visitors.",
            "image": "/images/blog/prawaas.webp",
            "first_paragraph": "Prawaas 4.0, held in Bengaluru for the first time, marked a historic moment for India's transport sector. Organized by BOCI, the event attracted a record-breaking number of participants, highlighting the country’s growing focus on sustainable and multimodal transport solutions. ScaleUP was proud to partner with Prawaas, designing captivating exhibition booths that showcased the best of India's transport innovation.",
            "subtopics": "The Future of India’s Transport, Key Takeaways from Prawaas 4.0, ScaleUP’s Contribution to Exhibition Design",
            "info": "With 6,153 operators, 171 exhibitors, and 10,000+ visitors from across India, Prawaas 4.0 set a new benchmark for the transport sector. The event showcased the latest in mobility technology, policies, and innovations aimed at modernizing India’s transport infrastructure.",
            "point1": "Multimodal Transport Innovation: Prawaas 4.0 highlighted how India’s transport sector is evolving, with a special focus on multimodal transport solutions that integrate various modes of transit for better efficiency.",
            "point2": "Exhibitor Showcase: Over 171 exhibitors, including ScaleUP, presented their latest innovations in the transport space. Our team designed stalls that effectively communicated the brands' forward-thinking solutions for transport.",
            "point3": "Government Support: The event was backed by key ministries, including the Ministry of Road Transport and Highways, underscoring the importance of transport innovation to India’s growth agenda.",
            "insights": "ScaleUP’s stalls not only attracted attention but also provided exhibitors with the space and visibility they needed to showcase their contributions to India’s evolving transport sector.",
            "summary": "Prawaas 4.0 wasn’t just an exhibition—it was a celebration of India’s mobility future. With a spotlight on multimodal transport and sustainability, ScaleUP played a pivotal role in ensuring that the event's exhibition spaces were visually stunning and aligned with the innovative spirit of the event.",
            "popular_tags": ["#Prawaas4", "#MobilityIndia", "#TransportInnovation", "#ExhibitionDesign"]
        },
    ];
    return NextResponse.json(blog);
}

//post function
export async function POST(req){
    //console.log(req)
    return req
}