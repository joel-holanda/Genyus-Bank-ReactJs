import './header.scss';

interface PropsHeader {
  title?: string;
  subtitle?: string;
  description?: string;
};

export const ProcessDescriptionHeader = ({title, subtitle, description}: PropsHeader) => {
  return (
    <div>
      <h3>{subtitle}</h3>
    </div>
  );
};