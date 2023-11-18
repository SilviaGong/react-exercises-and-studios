export default function BookList() {
   let pageTitle = "shrug";
   let book1 = "https://m.media-amazon.com/images/I/91wNMialVkL._AC_SR270,180_QL70_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/81BiWYaFV5L._AC_SR270,180_QL70_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/81RLK4Dtp5L._AC_SR270,180_QL70_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Romantic Comedy by Curtis Sittenfield" />
         <img src={book2} alt="Tress of the Emerald Sea by Brandon Sanderson" />
         <img src={book3} alt="The London Seance Society by Sarah Penner" />
      </div>
   );
}