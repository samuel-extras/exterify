import React, { useState } from 'react';

const sidebarMenu = [
  { menu: 'Dashboard', id: 1 },
  { menu: 'Expenses', id: 2 },
  { menu: 'Wallets', id: 3 },
  { menu: 'Summary', id: 4 },
  { menu: 'Accounts', id: 5 },
  { menu: 'Settings', id: 6 },
];

const transactions = [
  {
    name: 'Jumia food',
    amount: '10800',
    type: 'Credit',
    date: '11-11-2021',
    time: '10:12 am',
    image: 'cart',
    id: '1',
  },
  {
    name: 'Uber VIA Flutterwave',
    amount: '15000',
    type: 'Credit',
    date: '10-11-2021',
    time: '8:12 pm',
    image: 'bus',
    id: '2',
  },
  {
    name: 'House Rent VIA Paystack',
    amount: '185750',
    type: 'Credit',
    date: '10-11-2021',
    time: '6:10 pm ',
    image: 'house',
    id: '3',
  },
  {
    name: 'Our Eden life Subcription',
    amount: '56000',
    type: 'Credit',
    date: '10-11-2021',
    time: '5:40 pm',
    image: 'lamp',
    id: '4',
  },
  {
    name: 'Netflix subcription',
    amount: '35200',
    type: 'Credit',
    date: '10-11-2021',
    time: '5:12 pm',
    image: 'play',
    id: '5',
  },
];

const banks = [
  { name: 'gtb', logo: 'gtb', id: '1' },
  { name: 'stanbic', logo: 'stanbic', id: '2' },
  { name: 'credpal', logo: 'credpal', id: '3' },
];

const summaries = [
  { name: 'Food and Drinks', amount: '872.400' },
  { name: 'Shopping', amount: '1378.200' },
  { name: 'Housing', amount: '928.500' },
  { name: 'Transportation', amount: '420.700' },
];

const expensesHeight = [
  4, 6, 5, 4, 7, 3, 4, 3, 7, 2, 6, 4, 2, 7, 4, 5, 3, 2, 6, 8, 4,
];

const Home = () => {
  const [linked, setLinked] = useState(false);

  let total = 0;
  summaries.forEach((summary) => {
    total = Math.round(total + Number(summary.amount));
  });

  const percentage = (value: number) => {
    return (value * 100) / total;
  };

  return (
    <div>
      <div className="flex overflow-hidden bg-white">
        <aside
          id="sidebar"
          className="fixed hidden z-20 h-full top-0 left-0 lg:flex flex-shrink-0 flex-col w-[246px] transition-width duration-75"
          aria-label="Sidebar"
        >
          <div
            className={`relative flex-1 flex flex-col min-h-0 ${
              linked ? 'bg-[#101010] ' : 'bg-[#515151] '
            }  pt-0`}
          >
            {!linked && (
              <div className="mb-4">
                <div className="flex p-6  ">
                  <img
                    src="./Group.svg"
                    className="h-5 -mr-4"
                    alt="Mono Logo"
                  />
                </div>
              </div>
            )}

            {linked && (
              <div className="px-3 py-6 mt-6 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-center">
                  <img
                    src="./Group.svg"
                    className="h-5 -mr-4"
                    alt="Mono Logo"
                  />
                </div>
              </div>
            )}
            {linked && (
              <div className="flex-1 flex flex-col items-center justify-center pt-5 pb-4 overflow-y-auto">
                <div className="flex-1 px-3  divide-y space-y-1">
                  <ul className="space-y-8  ">
                    {sidebarMenu.map((menu) => (
                      <li className="text-white text-lg font-light ">
                        {menu.menu}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {!linked && (
              <div
                role="status"
                className="max-w-sm animate-pulse p-6 flex flex-col"
              >
                <div className="h-1.5 bg-gray-200 rounded-full self-end w-9/12 mb-5"></div>
                <div className="h-1.5 bg-gray-200 rounded-full max-w-[360px] w-9/12 mb-5"></div>
                <div className="h-1.5 bg-gray-200 rounded-full  mb-5"></div>
                <div className="h-1.5 bg-[#5D66B0] rounded-full max-w-[330px] mb-5"></div>

                <span className="sr-only">Loading...</span>
              </div>
            )}
          </div>
        </aside>

        {linked && (
          <div
            id="main-content"
            className="h-full w-full marker:relative overflow-y-auto lg:ml-[248px]"
          >
            <main>
              <div className="px-4">
                <div className="w-full grid grid-cols-1 lg:grid-cols-9 2xl:grid-cols-3 ">
                  <div className="bg-white mt-8  col-span-5 2xl:col-span-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img
                          className="w-10 h-10 rounded-full"
                          src="./Profile.png"
                          alt="profile"
                        />
                        <div className="font-medium dark:text-white">
                          <div className="text-xs font-bold -ml-3 text-black ">
                            Good morning, Ola{' '}
                          </div>
                        </div>
                      </div>
                      <div className="relative flex p-1 rounded-md cursor-pointer border border-gray-300">
                        <p className="pr-2">Today</p>{' '}
                        <img src="./calenda.svg" alt="calenda" />
                      </div>
                    </div>
                    <div className="py-8">
                      <div className="flex justify-center items-center">
                        <p className="text-lg font-bold">Expense Tracker</p>
                      </div>
                      <div
                        id="main-chart"
                        className="h-36 p-2 flex items-end space-x-2 overflow-hidden"
                      >
                        {expensesHeight.map((height) => (
                          <div className="relative ">
                            <div
                              className={`relative flex justify-center w-4 h-${
                                height * 4
                              } ${
                                height < 8
                                  ? 'bg-[#9DC8FF] opacity-20'
                                  : 'bg-[#157AFF]'
                              }`}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="">
                      <div className="bg-white  h-full">
                        <div className="flex items-center justify-between p-3 mb-4  border-b border-gray-200">
                          <p className="text-lg font-light leading-none text-gray-900">
                            Latest Transactions{' '}
                          </p>
                          <div className="p-2 ">
                            <p className="text-lg ml-4 cursor-pointer text-gray-300 font-extrabold leading-6 ">
                              . . .
                            </p>
                          </div>
                        </div>
                        <div className="flow-root">
                          <ul className="">
                            {transactions.map((transaction) => (
                              <li className="py-2 sm:py-3">
                                <div className="flex space-x-4">
                                  <div className="flex-shrink-0">
                                    <img
                                      className="h-12 w-12 rounded-full"
                                      src={`../${transaction.image}.svg`}
                                      alt={transaction.name}
                                    />
                                  </div>
                                  <div className="flex-1  min-w-0">
                                    <p className="text-md font-semibold text-gray-900 truncate">
                                      {transaction.name}
                                    </p>
                                    <p className="text-sm mt-1 text-[#404852] opacity-50 truncate">
                                      <span>{transaction.date} </span>
                                      <span>• {transaction.time} </span>
                                      <span>• {transaction.type}</span>
                                    </p>
                                  </div>
                                  <div className="inline-flex text-lg items- text-left font-bold text-[#273240]">
                                    -{transaction.amount}
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex justify-center items-center">
                          <p className="text-[#404852] font-light text-xs">
                            VIEW ALL
                          </p>
                          <p className="text-[#404852] font-light text-xs">
                            {' '}
                            &gt;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white flex flex-col col-span-4 xl:px-10 pt-16 items-center  ">
                    <div className="px-8 w-[94%] flex flex-col items-center justify-center rounded-lg">
                      <p className="text-xl font-semibold">TOTAL BALANCE</p>
                      <p className="text-5xl font-bold py-4 ">30,000,000</p>
                      <p className="text-[#404852] text-sm font-light">
                        Your balance across all Banks
                      </p>
                      <div className="flex py-8 ">
                        {banks.map((bank) => (
                          <img
                            className="h-8 w-8 -ml-2 rounded-full"
                            src={`../${bank.logo}.svg`}
                            alt={bank.name}
                          />
                        ))}
                        <img
                          className="h-8 w-8 ml-2 rounded-full"
                          src="../addbank.svg"
                          alt="add"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#FFF4F4] my-4 py-4 uppercase text-md rounded-lg text-[#F22828] font-semibold"
                      >
                        UNLINK BANK ACCOUNT{' '}
                      </button>
                    </div>
                    <div className="w-full px-8 pt-8">
                      {' '}
                      <div className="flex items-center justify-between mb-6  p-4 border-b border-gray-200">
                        <p className="text-lg font-light leading-none text-gray-900">
                          Where your money go?{' '}
                        </p>
                        <div className="p-2 ">
                          <p className="text-lg ml-4 cursor-pointer text-gray-300 font-extrabold leading-6 ">
                            . . .
                          </p>
                        </div>
                      </div>
                      <div className="">
                        {summaries.map((summary) => (
                          <div className="flex space-y-4 flex-col mb-6">
                            {' '}
                            <div className="flex justify-between">
                              <p className="font-medium text-md">
                                {summary.name}
                              </p>
                              <p className="font-normal">{summary.amount}</p>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 ">
                              <div
                                className="bg-[#FFB1B1] h-1.5 rounded-full "
                                style={{
                                  width: `${Math.round(
                                    percentage(Number(summary.amount))
                                  )}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        )}
        {!linked && (
          <div className="flex justify-center p-2 items-center w-full h-screen lg:ml-[300px]">
            <div className="flex flex-col justify-center items-center px-4 md:px-12 py-8 max-w-sm bg-[#101010] rounded-lg border border-gray-200 shadow-md  ">
              <img src="./padlock.svg" alt="lock" />
              <p className="text-3xl text-white font-light p-4">Final Step</p>
              <p className="text-md text-white m-4">
                Link your Bank Account in seconds
              </p>
              <button
                type="submit"
                className="flex  items-center justify-center bg-white mt-7 px-6 p-2 uppercase text-md rounded-sm text-[#182CD1] font-semibold ring-0 hover:shadow-sm hover:shadow-white"
              >
                LINK NOW <img className="ml-2" src="./arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
