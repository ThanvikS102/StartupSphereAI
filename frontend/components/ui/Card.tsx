interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Card({ children, ...props }: Props) {
  return (
    <div className="card" {...props}>
      {children}
    </div>
  );
}