// Include all components here //

import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import collection from "../components/collection";

function App() {
  return (
    <>
      <Header />
      {collection.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))}
      <Footer />
    </>
  );
}
export default App;
