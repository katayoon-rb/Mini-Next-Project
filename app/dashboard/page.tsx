import { Card } from "@/components/ui/card";

type Post = {
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 }, // ISR-like refresh
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export const metadata = {
  title: "Dashboard",
  description: "Public API data rendered on the server",
};

export default async function DashboardPage() {
  const posts = await getPosts();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-sm opacity-80">
        Showing latest posts from a public API.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {posts.slice(0, 8).map((p) => (
          <Card key={p.id} className="space-y-2">
            <h2 className="text-base font-medium">{p.title}</h2>
            <p className="text-sm opacity-90 line-clamp-3">{p.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
