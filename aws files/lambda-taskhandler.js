export const handler = async (event) => {
  const tasks = [
      { id: 1, task: "Learn AWS" },
      { id: 2, task: "Build a serverless app" }
  ];
  return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tasks)
  };
};
