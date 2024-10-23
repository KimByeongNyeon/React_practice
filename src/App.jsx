import "./App.css";
import CourseListCard from "./componets/course/course/CourseListCard";
function App() {
  const items = [
    {
      title : 'Fuck Django',
      description : 'I hate Fuck Django',
      thumnail : '/img/django.png',
      isFavorite: true,
      link : 'https://www.djangoproject.com/',
    },
    {
      title : 'Fuck HTML',
      description : 'I hate Fuck HTML',
      thumnail : '/img/html.png',
      isFavorite: false,
      link : 'https://developer.mozilla.org/ko/docs/Glossary/HTML5',
    },
    {
      title : 'Fuck JS',
      description : 'I hate Fuck JS',
      thumnail : '/img/javascript.png',
      isFavorite: true,
      link : 'https://developer.mozilla.org/ko/docs/Web/JavaScript',
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
