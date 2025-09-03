import { Education } from "../types/Education";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Props = {
  education: Education;
};

export const CardEducation = ({ education }: Props) => {
  return (
    <Card className="space-y-6 mb-10">
      <CardHeader>
        <CardTitle className="inline-flex mx-auto  text-2xl border-b-3 border-primary">
          {education.course}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between  text-muted-foreground pa ml-10 text-xl font-bold">
        <span>{education.institution}</span>
        <span>{education.period}</span>
      </CardContent>
      <CardContent className=" flex  text-muted-foreground text-lg">
        <p>{education.description}</p>
      </CardContent>
    </Card>
  );
};
