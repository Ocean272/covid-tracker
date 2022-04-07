import { useState, useEffect } from "react";

const CaseList = (data) => {
  const [posts, setPosts] = useState("");

  this.getchartData = this.getchartData.bind(this);

  useEffect(() => {
    const { posts } = setPosts;
    let states = [];
    let num = [];

    for (let i = 1; i < posts.length; i += 1) {
      states[i - 1] = posts[i];
      num[i - 1] = posts[i].confirmed;
    }
    this.getchartData(states, num);
  });

  const getchartData = (states, num) => {
    setPosts({
      chartData: {
        labels: states,
        datasets: [
          {
            label: "Complete Full Regimen",
            data: num,
            backgroundColor: [
              "rgba(255,3,0,1)",
              "rgba(219,3,0,1)",
              "rgba(152,3,0,1)",
              "rgba(255,3,0,0.7)",
              "rgba(101,191,217,1)",
              "rgba(101,191,217,0.59)",
              "rgba(101,79,161,0.98)",
              "rgba(208,79,197,0.98)",
              "rgba(208,79,197,0.65)",
              "rgba(43,144,197,1)",
            ],
          },
        ],
      },
    });
  };

  return (
    <>
      <div>
        <Chart chartData={posts.chartData} />
      </div>
    </>
  );
};

export default CaseList;
