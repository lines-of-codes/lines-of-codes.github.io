import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
    const blog = await getCollection("blog");
    return rss({
        title: "Satakun’s Blog",
        description:
            "Personal blog documenting learning journeys and opinions of the world",
        site: context.site,
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            link: `/blog/${post.id}/`,
        })),
    });
}
