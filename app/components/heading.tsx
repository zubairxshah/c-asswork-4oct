interface Props {
  text: string;
  }
export default function Heading(props: Props) {
  return (
    <div>
      <h1 className="text-xl mb-4 underline">{`${props.text}`}</h1>
    </div>
  );
}