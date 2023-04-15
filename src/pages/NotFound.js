import { Link } from "react-router-dom";
import css from './Module.css/MovieDetails.module.css'

export default function NotFound() {
    return (
    <div>
      <h1>Page not found</h1>
      <Link className={css.back} to="/">Home page</Link>
    </div>
  );
}