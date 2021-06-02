function calculateTotalWeight(data) {
  const totals = [];

  data.forEach((workout) => {
    const workoutTotal = workout.exercises.reduce((total, { type, weight }) => {
      if (type === "resistance") {
        return total + weight;
      }
      return total;
    }, 0);

    totals.push(workoutTotal);
  });

  return totals;
}

function populateChart(data) {
  const durations = data.map(({ exercises }) =>
    exercises.reduce((acc, n) => acc + n.duration, 0)
  );
  const pounds = calculateTotalWeight(data);
  console.log({ durations, data });
  const line = document.querySelector("#canvas").getContext("2d");
  const bar = document.querySelector("#canvas2").getContext("2d");
  const chartData = {};

  /**
   * {
   *    'Tue, Jun 1': {durations: number, pounds: 0}
   * }
   */
  for (let i = 0; i < data.length; i += 1) {
    const date = new Date(data[i].day);
    const fDate = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    }).format(date);
    if (chartData[fDate]) {
      chartData[fDate].pounds += data[i].exercises.reduce(
        (total, { type, weight }) => {
          if (type === "resistance") {
            return total + weight;
          }
          return total;
        },
        0
      );
      chartData[fDate].durations += data[i].exercises.reduce(
        (acc, n) => acc + n.duration,
        0
      );
    } else {
      chartData[fDate] = {
        pounds: data[i].exercises.reduce((total, { type, weight }) => {
          if (type === "resistance") {
            return total + weight;
          }
          return total;
        }, 0),
        durations: data[i].exercises.reduce((acc, n) => acc + n.duration, 0),
      };
    }
  }

  console.log(chartData);
  const labels = data.map(({ day }) => {
    const date = new Date(day);

    // Use JavaScript's `Intl` object to help format dates
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    }).format(date);
  });

  let lineChart = new Chart(line, {
    type: "line",
    data: {
      labels: Object.keys(chartData),
      datasets: [
        {
          label: "Workout Duration In Minutes",
          backgroundColor: "red",
          borderColor: "red",
          data: Object.values(chartData).map(({ durations }) => durations),
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Time Spent Working Out (Last 7 days)",
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  let barChart = new Chart(bar, {
    type: "bar",
    data: {
      labels: Object.keys(chartData),
      datasets: [
        {
          label: "Pounds",
          data: Object.values(chartData).map(({ pounds }) => pounds),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Pounds Lifted (Last 7 days)",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

// get all workout data from back-end
API.getWorkoutsInRange().then(populateChart);
