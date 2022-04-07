import VaccinationCentre from "../Assets/Icons/vaccination-centre.png";

function Art() {
  return (
    <div>
      <a
        className="icons"
        href="https://www.onemap.gov.sg/main/v2/phpcmap"
        title="Art location"
        target="_blank"
      >
        <img
          src={VaccinationCentre}
          alt="vaccination-centre"
          width={"50px"}
          height={"50px"}
        />
        Click here for ART kit machines, Vaccination centres and more.
      </a>
    </div>
  );
}

export default Art;
