import { Education } from "../types/Education";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Props = {
  education: Education;
};

export const CardEducation = ({ education }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{education.course}</CardTitle>
      </CardHeader>
      <CardContent>
        <span>{education.institution}</span>
        <span>{education.period}</span>
      </CardContent>
      <CardContent>
        <p>{education.description}</p>
      </CardContent>
    </Card>
  );
};
