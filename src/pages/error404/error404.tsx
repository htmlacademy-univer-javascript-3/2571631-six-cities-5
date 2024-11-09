import { Link } from "react-router-dom";

export function Error404() {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <h2 className="error-message">
          Ой, кажется, вы заблудились!
          <br />
          Страница, которую вы ищете, не найдена.
        </h2>
        <Link to="/" className="error-link">
          Вернуться на главную страницу
        </Link>
      </div>
    </div>
  );
}

