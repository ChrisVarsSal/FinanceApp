import { useNavigate } from "react-router-dom";

export function useSubmit() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return { handleSubmit };
}
