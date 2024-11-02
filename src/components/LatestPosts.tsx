import { Button } from "@/components/ui/button";
import { BlogPost } from './BlogPost';

export const LatestPosts = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Últimas do Blog</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((index) => (
            <BlogPost key={index} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="link" className="text-lg">
            Ver tudo
          </Button>
        </div>
      </div>
    </section>
  );
};