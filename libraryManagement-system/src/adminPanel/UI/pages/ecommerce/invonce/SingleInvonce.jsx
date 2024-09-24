const SingleInvonce = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto ">
        <header className="mb-5 pb-5 flex justify-between items-center border-b border-gray-200 dark:border-neutral-700">
          <h2 className="text-2xl font-semibold text-gray-800   ">Invoice</h2>
          <div className="inline-flex gap-x-2">
            <a
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border  bg-white text-gray-800 shadow-sm  dark:bg-transparent border-neutral-700  hover:bg-neutral-800"
              href="#"
            >
              <svg
                className="shrink-0 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Invoice PDF
            </a>
            <button
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => window.print()}
            >
              <svg
                className="shrink-0 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect width="12" height="8" x="6" y="14" />
              </svg>
              Print
            </button>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-3">
          <section>
            <div className="grid space-y-3">
              <dl className="flex flex-col sm:flex-row gap-x-3 text-sm">
                <dt className="min-w-[200px] text-gray-500 dark:text-neutral-500">
                  Billed to:
                </dt>
                <dd className="text-gray-800   ">
                  <a
                    className="inline-flex items-center gap-x-1.5 text-blue-600 hover:underline dark:text-blue-500"
                    href="mailto:sara@site.com"
                  >
                    sara@site.com
                  </a>
                </dd>
              </dl>

              <dl className="flex flex-col sm:flex-row gap-x-3 text-sm">
                <dt className="min-w-[200px] text-gray-500 dark:text-neutral-500">
                  Billing details:
                </dt>
                <dd className="font-medium text-gray-800   ">
                  <span className="block font-semibold">Sara Williams</span>
                  <address className="not-italic font-normal">
                    280 Suzanne Throughway,
                    <br />
                    Breannabury, OR 45801,
                    <br />
                    United States
                  </address>
                </dd>
              </dl>

              <dl className="flex flex-col sm:flex-row gap-x-3 text-sm">
                <dt className="min-w-[200px] text-gray-500 dark:text-neutral-500">
                  Shipping details:
                </dt>
                <dd className="font-medium text-gray-800   ">
                  <span className="block font-semibold">Sara Williams</span>
                  <address className="not-italic font-normal">
                    280 Suzanne Throughway,
                    <br />
                    Breannabury, OR 45801,
                    <br />
                    United States
                  </address>
                </dd>
              </dl>
            </div>
          </section>

          <section>
            <div className="grid space-y-3">
              <dl className="flex flex-col sm:flex-row gap-x-3 text-sm">
                <dt className="min-w-[200px] text-gray-500 dark:text-neutral-500">
                  Invoice number:
                </dt>
                <dd className="font-medium text-gray-800   ">
                  ADUQ2189H1-0038
                </dd>
              </dl>

              <dl className="flex flex-col sm:flex-row gap-x-3 text-sm">
                <dt className="min-w-[200px] text-gray-500 dark:text-neutral-500">
                  Currency:
                </dt>
                <dd className="font-medium text-gray-800   ">
                  USD - US Dollar
                </dd>
              </dl>

              <dl className="flex flex-col sm:flex-row gap-x-3 text-sm">
                <dt className="min-w-[200px] text-gray-500 dark:text-neutral-500">
                  Due date:
                </dt>
                <dd className="font-medium text-gray-800   ">10 Jan 2023</dd>
              </dl>

              <dl className="flex flex-col sm:flex-row gap-x-3 text-sm">
                <dt className="min-w-[200px] text-gray-500 dark:text-neutral-500">
                  Billing method:
                </dt>
                <dd className="font-medium text-gray-800   ">Send invoice</dd>
              </dl>
            </div>
          </section>
        </div>

        <section className="mt-6 border border-gray-200 p-4 rounded-lg space-y-4 dark:border-neutral-700">
          <div className="hidden sm:grid sm:grid-cols-5">
            <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
              Item
            </div>
            <div className="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
              Qty
            </div>
            <div className="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
              Rate
            </div>
            <div className="text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
              Amount
            </div>
          </div>

          <div className="hidden sm:block border-b border-gray-200 dark:border-neutral-700"></div>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            <div className="col-span-full sm:col-span-2">
              <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                Item
              </h5>
              <p className="font-medium text-gray-800   ">Design UX and UI</p>
            </div>
            <div>
              <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                Qty
              </h5>
              <p className="text-gray-800   ">1</p>
            </div>
            <div>
              <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                Rate
              </h5>
              <p className="text-gray-800   ">5</p>
            </div>
            <div>
              <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                Amount
              </h5>
              <p className="sm:text-end text-gray-800   ">$500</p>
            </div>
          </div>

          <div className="sm:hidden border-b border-gray-200 dark:border-neutral-700"></div>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            <div className="col-span-full sm:col-span-2">
              <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                Item
              </h5>
              <p className="font-medium text-gray-800   ">Web project</p>
            </div>
            <div>
              <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                Qty
              </h5>
              <p className="text-gray-800   ">1</p>
            </div>
            <div>
              <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                Rate
              </h5>
              <p className="text-gray-800   ">24</p>
            </div>
            <div>
              <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                Amount
              </h5>
              <p className="sm:text-end text-gray-800   ">$1250</p>
            </div>
          </div>

          <div className="sm:hidden border-b border-gray-200 dark:border-neutral-700"></div>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            <div className="col-span-full sm:col-span-2">
              <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                Item
              </h5>
              <p className="font-medium text-gray-800   ">SEO</p>
            </div>
            <div>
              <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                Qty
              </h5>
              <p className="text-gray-800   ">1</p>
            </div>
            <div>
              <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                Rate
              </h5>
              <p className="text-gray-800   ">6</p>
            </div>
            <div>
              <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                Amount
              </h5>
              <p className="sm:text-end text-gray-800   ">$2000</p>
            </div>
          </div>
        </section>

        <section className="mt-8 flex sm:justify-end">
          <div className="w-full max-w-2xl sm:text-end space-y-2">
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
              <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                <dt className="col-span-3 text-gray-500 dark:text-neutral-500">
                  Subtotal:
                </dt>
                <dd className="col-span-2 font-medium text-gray-800   ">
                  $2750.00
                </dd>
              </dl>

              <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                <dt className="col-span-3 text-gray-500 dark:text-neutral-500">
                  Total:
                </dt>
                <dd className="col-span-2 font-medium text-gray-800   ">
                  $2750.00
                </dd>
              </dl>

              <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                <dt className="col-span-3 text-gray-500 dark:text-neutral-500">
                  Tax:
                </dt>
                <dd className="col-span-2 font-medium text-gray-800   ">
                  $39.00
                </dd>
              </dl>

              <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                <dt className="col-span-3 text-gray-500 dark:text-neutral-500">
                  Amount paid:
                </dt>
                <dd className="col-span-2 font-medium text-gray-800   ">
                  $2789.00
                </dd>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default SingleInvonce;
