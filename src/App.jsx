import "./App.css";
import CourseListCard from "./componets/course/course/CourseListCard";
function App() {
  const items = [
    {
      title : 'Fuck Django',
      description : 'I hate Fuck Django',
      thumnail : '/img/django.png',
    },
    {
      title : 'Fuck HTML',
      description : 'I hate Fuck HTML',
      thumnail : '/img/html.png',
    },
    {
      title : 'Fuck JS',
      description : 'I hate Fuck JS',
      thumnail : '/img/javascript.png',
    }
  ];
  return (
    <>
      <main>
        <CourseListCard items = {items} />
      </main>
    </>
  );
}

export default App;
