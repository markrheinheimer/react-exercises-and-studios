export default function HobbyLinks() {
  let hobbyLinks = [
    'http://www.oldsharkshockeyclub.com/',
    'https://monkeytype.com/',
  ];
  return (
    <div>
      <a href={hobbyLinks[0]}>Hockey</a>
      <br></br>
      <a href={hobbyLinks[1]}>Typing</a>
    </div>
  );
}
