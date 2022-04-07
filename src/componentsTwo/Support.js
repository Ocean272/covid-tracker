import FinancialSupport from "../Assets/Icons/financial-help.png";

function Support() {
  return (
    <div>
      <a
        className="icons"
        href="https://www.smartnation.gov.sg/combating-covid-19/economic-social-support"
        title="Support"
        target="_blank"
      >
        <img
          src={FinancialSupport}
          alt="financial-support"
          width={"50px"}
          height={"50px"}
        />
        Click here to for grants and financial support
      </a>
    </div>
  );
}

export default Support;
