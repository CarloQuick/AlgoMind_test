export default function WrongAnswerMessage({ correct }) {
  if (!correct) {
    return <div>That's incorrect. Try again!</div>;
  }
}
