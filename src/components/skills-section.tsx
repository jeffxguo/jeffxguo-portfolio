import { skillsData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SkillsSection() {
    return (
        <section id="skills" className="w-full py-24 sm:py-32">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                    Skills
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {skillsData.map((category) => (
                        <Card key={category.title} className="h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
                            <CardHeader>
                                <CardTitle>{category.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <Badge key={skill} variant="secondary">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
