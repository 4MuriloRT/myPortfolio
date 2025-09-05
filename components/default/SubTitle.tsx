type Props = {
  label: string;
  color: string;
};

export const SubTitle = ({ label, color }: Props) => {
  return (
    <div
      style={{ color: color }}
      className="inline-flex items-center text-xl lg:text-4xl mb-10 "
    >
      {label}
    </div>
  );
};
