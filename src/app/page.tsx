import Link from "next/link";

const tasks = [
  { title: "回覆 K-WON 合約", priority: "高優先" },
  { title: "確認場地尾款", priority: "高優先" },
  { title: "完成 Sponsor Proposal", priority: "中優先" },
  { title: "Workshop 宣傳排程", priority: "中優先" },
];

const events = [
  { name: "Yu6iao Vol.5", progress: 72 },
  { name: "YuBi Side", progress: 31 },
  { name: "Bangkok Trip", progress: 83 },
];

export default function DashboardPage() {
  return (
    <div className="ml-60 min-h-screen bg-[#0b0d10] p-10 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Mission Control</p>

            <h1 className="mt-2 text-5xl font-bold tracking-tight">
              Dashboard
            </h1>

            <p className="mt-3 text-gray-500">
              今天最重要的任務、活動與財務概況。
            </p>
          </div>

          <Link
            href="/events/new"
            className="rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-105"
          >
            ＋ New Event
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* 左側 */}
          <div className="col-span-2 space-y-6">
            <section className="rounded-2xl border border-white/10 bg-[#15181f] p-6">
              <div className="mb-5 flex justify-between">
                <h2 className="text-xl font-semibold">
                  Today's Tasks
                </h2>

                <span className="text-gray-500">
                  {tasks.length} 件待辦
                </span>
              </div>

              <div className="space-y-4">
                {tasks.map((task) => (
                  <div
                    key={task.title}
                    className="flex items-center justify-between rounded-xl bg-[#1d2129] px-5 py-4"
                  >
                    <div>
                      <div className="font-medium">
                        {task.title}
                      </div>

                      <div className="text-sm text-yellow-400">
                        {task.priority}
                      </div>
                    </div>

                    <input
                      type="checkbox"
                      className="h-5 w-5"
                    />
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-[#15181f] p-6">
              <h2 className="mb-5 text-xl font-semibold">
                Monthly Finance
              </h2>

              <div className="grid grid-cols-3 gap-4">
                <FinanceCard
                  title="收入"
                  value="NT$168,000"
                />

                <FinanceCard
                  title="支出"
                  value="NT$121,000"
                />

                <FinanceCard
                  title="盈餘"
                  value="+NT$47,000"
                  green
                />
              </div>
            </section>
          </div>

          {/* 右側 */}
          <div className="space-y-6">
            <section className="rounded-2xl border border-white/10 bg-[#15181f] p-6">
              <h2 className="mb-5 text-xl font-semibold">
                Events
              </h2>

              <div className="space-y-5">
                {events.map((event) => (
                  <div key={event.name}>
                    <div className="mb-2 flex justify-between">
                      <span>{event.name}</span>

                      <span>{event.progress}%</span>
                    </div>

                    <div className="h-2 rounded-full bg-[#272c36]">
                      <div
                        className="h-2 rounded-full bg-violet-500"
                        style={{
                          width: `${event.progress}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-[#15181f] p-6">
              <h2 className="mb-5 text-xl font-semibold">
                Quick Actions
              </h2>

              <div className="grid grid-cols-2 gap-3">
                <QuickButton text="＋ Event" />
                <QuickButton text="＋ Expense" />
                <QuickButton text="＋ Contact" />
                <QuickButton text="＋ Task" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function FinanceCard({
  title,
  value,
  green,
}: {
  title: string;
  value: string;
  green?: boolean;
}) {
  return (
    <div className="rounded-xl bg-[#1d2129] p-5">
      <p className="text-sm text-gray-400">
        {title}
      </p>

      <p
        className={`mt-2 text-2xl font-bold ${
          green ? "text-green-400" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function QuickButton({
  text,
}: {
  text: string;
}) {
  return (
    <button className="rounded-xl border border-white/10 bg-[#1d2129] p-4 transition hover:bg-[#252a35]">
      {text}
    </button>
  );
}
