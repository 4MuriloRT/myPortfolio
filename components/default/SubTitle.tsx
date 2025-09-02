type Props = {
  label: string;
};

export const SubTitle = ({ label }: Props) => {
  return (
    <div className="inline-flex items-center text-xl lg:text-4xl mb-10">
      {label}
    </div>
  );
};
