import { IconType } from "react-icons";

type Props = {
  label: string;
  Icon: IconType;
};

export const SectionTitle = ({ label, Icon }: Props) => {
  return (
    <div className="inline-flex items-center text-3xl gap-5 pb-2 border-b-4 border-primary lg:text-4xl">
      {label} <Icon size={50}/>
    </div>
  );
};
