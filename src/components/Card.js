export default function Card(props) {
  const { picture } = props;
  return (
    <div className="card">
      <div>
        <img src={picture.toString()} alt="guess name" />
      </div>
    </div>
  );
}
