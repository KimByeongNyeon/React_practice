import "./App.css";
import CourseListCard from "./componets/course/course/CourseListCard";
import Header from "./componets/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';
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
  const nonFavoriteItems = items.filter(item => item.isFavorite === false);
  return (
    <>
    <Header />
    <div style={{ backgroundColor: '#282828', minHeight: '100vh' }}>
        <Container className="py-4">
          <div className="mb-4">
            <CourseListCard title="강의 목록" items={items} />
          </div>
          <Row className="g-4">
            <Col xs={12}lg = {6}>
              <CourseListCard title="관심 목록" items={FavoriteItems} />
            </Col>
            <Col xs={12}lg = {6}>
              <CourseListCard title="관심 없는 목록" items={nonFavoriteItems} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
