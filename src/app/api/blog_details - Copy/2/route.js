import { NextResponse } from 'next/server';

const blog = [
    {
        "id": 2,
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
