import { Education } from "../types/Education";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Props = {
  education: Education;
};

export const CardEducation = ({ education }: Props) => {
  return (
    
      <Card
        className={
          "flex rounded-xl bg-background"
        }
      >
        <CardHeader className="flex justify-center pb-2">
          <CardTitle className="text-2xl font-semibold text-foreground border-b-2 border-violet-300">
            {education.course}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex justify-between items-center text-muted-foreground font-medium">
          <span className="text-xl">{education.institution}</span>
          <span className="text-lg text-primary font-semibold">
            {education.period}
          </span>
        </CardContent>

        <CardContent className="text-muted-foreground text-lg leading-relaxed">
          <p>{education.description}</p>
        </CardContent>
      </Card>
  );
};
