import { NextResponse } from 'next/server';

const blog = [
    {
        "id": 1,
        "heading": "Bengaluru Tech Summit 2023: Shaping the Future of Global Technology Solutions",
        "author": "Nitin",
        "date": "October 12, 2023",
        "no_of_comments": "0",
        "no_of_views": "[Pending]",
        "tags": ["#Technology", "#Innovation", "#BTS2023"],
        "tldr": "The 26th edition of the Bengaluru Tech Summit is set to take place from November 19-21, 2023. With over 85 conference sessions and 450 speakers, the event provides a platform for global innovators, tech leaders, and researchers to connect and collaborate.",
        "image": "/images/blog/bts.png",
        "first_paragraph": "The Bengaluru Tech Summit (BTS) 2023, a cornerstone event in India’s technology landscape, returns for its 26th edition from November 19-21, 2023, at Bangalore Palace. Hosted by the Government of Karnataka’s Department of E, IT, and Bt, this summit is more than just a tech event—it's a global platform that fosters cross-industry and cross-border collaborations to solve real-world technology challenges. ScaleUP proudly contributed to the event, designing an interactive and engaging exhibition pavilion that left a lasting impression on attendees.",
        "subtopics": "A Global Tech Platform, Key Highlights of BTS 2023, ScaleUP’s Role in the Exhibition Design",
        "info": "This year’s summit includes 85+ conference sessions and over 450 speakers from diverse sectors, offering a golden opportunity for innovators, governments, and industries to come together and explore technological solutions. BTS 2023 is expected to attract leaders from around the world to discuss topics such as AI, Blockchain, and Sustainability.",
        "point1": "A Unified Tech Ecosystem: BTS 2023 brings together tech communities, industries, and government bodies to explore and develop cutting-edge solutions for a better future.",
        "point2": "Multi-Pavilion Exhibition: Attendees can explore a multi-pavilion exhibition where innovations in technology will be on full display. ScaleUP is responsible for designing several interactive stalls, bringing brands and technology to life.",
        "point3": "International Collaboration: With participants from over 30 countries, the summit offers a unique opportunity to forge partnerships that transcend borders and industries.",
        "insights": "ScaleUP’s innovative stall designs attracted visitors and innovators from across sectors, providing a space where technology, creativity, and business intersected seamlessly.",
        "summary": "The Bengaluru Tech Summit 2023 isn’t just an event—it’s a movement that unites the world of technology and innovation. ScaleUP’s design expertise added to the visual impact of this landmark event, helping brands engage with a global audience.",
        "popular_tags": ["#BengaluruTechSummit", "#GlobalInnovation", "#ExhibitionDesign"]
    },
    {
        "id": 2,
        "heading": "Prawaas 4.0: Pioneering the Future of India’s Multimodal Transport Sector",
        "author": "Nitin",
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
    }
];

// GET request handler
export function GET(request) {
    // Extract the id from the URL
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop(); // Extract the last part of the path

    // If no id is provided, return all blog posts
    if (id === 'blog_details') {
        return NextResponse.json(blog);
    }

    // Find the blog post by id
    const post = blog.find((entry) => entry.id === parseInt(id));

    // If post is found, return it; otherwise, return an error
    if (post) {
        return NextResponse.json(post);
    } else {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
}

// POST request handler
export async function POST(req) {
    // Assuming you're handling POST requests in some way
    const body = await req.json();
    console.log(body);
    return NextResponse.json(body);
}
