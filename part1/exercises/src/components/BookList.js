export default function BookList() {
  let pageTitle = 'Good Books';
  let book1 =
    'https://images-na.ssl-images-amazon.com/images/I/81+ZyXVB6lL._AC_UL127_SR127,127_.jpg';
  let book2 =
    'https://images-na.ssl-images-amazon.com/images/I/61jLcNyGeoL._AC_UL127_SR127,127_.jpg';
  let book3 =
    'https://images-na.ssl-images-amazon.com/images/I/710tAfTSp3L._AC_UL127_SR127,127_.jpg';

  return (
    <div>
      <h3>{pageTitle}</h3>
      <img src={book1} alt="The World Atlas of Coffee" />
      <img src={book2} alt="Deliverance Prayers" />
      <img src={book3} alt="Hunger Games" />
    </div>
  );
}
