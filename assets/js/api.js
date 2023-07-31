async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/gilmargomes/Projeto-feito-no-curso-Js-developer-da-Dio-P-gina-Portf-lio-/main/data/profile.json";
  const response = await fetch(url);
  const profileData = await response.json();
  return profileData;
}
