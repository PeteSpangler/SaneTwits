export const getUserData = () => {
  return new Promise((resolve, reject) => {
    const data = [
      {
        name: 'Bob',
        id: 1,
      },
      {
        name: 'Albert',
        id: 2,
      },
      {
        name: 'Shania',
        id: 3,
      },
      {
        name: 'Erika',
        id: 4,
      },
      {
        name: 'Desmond',
        id: 5,
      },
      {
        name: 'Shai',
        id: 6,
      },
    ];
    setTimeout(() => resolve(data), 1000);
  });
};
