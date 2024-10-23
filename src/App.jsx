import "./App.css";
import CourseListCard from "./componets/course/course/CourseListCard";
function App() {
  const items = [
    {
      id: 0,
      title : 'Fuck Django',
      description : 'I hate Fuck Django',
      thumnail : '/img/django.png',
      isFavorite: true,
      link : 'https://www.djangoproject.com/',
    },
    {
      id: 1,
      title : 'Fuck HTML',
      description : 'I hate Fuck HTML',
      thumnail : '/img/html.png',
      isFavorite: false,
      link : 'https://developer.mozilla.org/ko/docs/Glossary/HTML5',
    },
    {
      id: 2,
      title : 'Fuck JS',
      description : 'I hate Fuck JS',
      thumnail : '/img/javascript.png',
      isFavorite: true,
      link : 'https://developer.mozilla.org/ko/docs/Web/JavaScript',
    }
  ];

  const FavoriteItems = items.filter(item => item.isFavorite);
  return (
    <>
      <main style={{flexDirection: 'column', gap : '1rem'}}>
        <CourseListCard title="강의 목록" items = {items} />
        <CourseListCard title="관심 목록" items = {FavoriteItems} />
      </main>
    </>
  );
}

export default App;
