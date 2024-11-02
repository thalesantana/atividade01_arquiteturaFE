import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const BlogPost = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>5 dicas para sua carreira profissional</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Descubra as principais estratégias para impulsionar sua 
          carreira na área de tecnologia. Aprenda com experiências 
          reais e dicas práticas que podem fazer a diferença em 
          sua jornada profissional.
        </p>
      </CardContent>
    </Card>
  );
};