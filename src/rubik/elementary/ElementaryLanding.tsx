import { type FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDGnFd14LlDKlxpB9TYzSwltJNLnCaZ4u0fRQQTPx18hM9pY1sH0PCJjTzKZwLP_SDxa2_DN1f15R5OJqIsoSnQi65OZlB-Iw2ETNvTv3GW_eMVyNFUDAWzQhC1THACpKSJ62ZgpIT3bG3IV4h3Ru5Kd-2l58iTEnHoLAgkNZa2SQEMkn8u46J4vWA4SR3Jq_yMLmveZIzXIav1e1u-TqU0_2qgrVFNsot0hJDzQDmHUdqqfoo65Z-2y-IDTEW-fbMlh3luR5UGOBk";

const INSTRUCTOR_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBuw17Nx8cxGOBwu_m1LlPBUk3gYw51Anez-6i-oncRsqLpztl5qfpnHKsDeLmhjYxsra0LXl1fFx9wNBmXGSJsiAIK6rHotSOPGX3qEodIZGUrg27ffWVqwyU6ionX6rnCwxjH1jKr_TrgEk1Qx44Jwk3XVCzvd4zD35Amab_4c5cGTcHKn_xoY7TYiNvmLvMxycp49y28OABN9Dnnf7yj4XMTc92TBq0_ayBs0uIbzcNouTYgXcoxI77rs5HlwT_EKoDkNa4ABJc";

const METHOD_FEATURES = [
  {
    icon: "auto_stories",
    iconBg: "bg-error-container",
    iconText: "text-on-error-container",
    title: "Cổ Tích Hóa",
    body: "Mỗi bước xoay là một hành trình của nhân vật: Thỏ trắng, Cá vàng, hay Em bé tìm đường về nhà.",
  },
  {
    icon: "psychology",
    iconBg: "bg-primary-container",
    iconText: "text-on-primary-container",
    title: "Tư Duy Hình Khối",
    body: "Giúp bé phát triển khả năng tưởng tượng không gian 3D thông qua việc quan sát các mặt màu sắc.",
  },
  {
    icon: "celebration",
    iconBg: "bg-tertiary-container",
    iconText: "text-on-tertiary-container",
    title: "Vui Là Chính",
    body: "Mỗi khi hoàn thành 1 mặt hoặc 1 tầng, bé sẽ nhận được những huy hiệu ảo cực kỳ đáng yêu.",
  },
] as const;

type RoadmapStep = {
  badgeClass: string;
  title: string;
  description: string;
  icon: string;
  cardBorder: string;
  circleClass: string;
};

const ROADMAP_STEPS: readonly RoadmapStep[] = [
  {
    badgeClass: "font-mono-label font-bold text-primary",
    title: "Xin chào Rubik",
    description: "Làm quen với người bạn 6 màu, học cách xoay các tầng cơ bản.",
    icon: "waving_hand",
    cardBorder: "border-2 border-primary-container",
    circleClass: "bg-primary text-on-primary",
  },
  {
    badgeClass: "font-mono-label font-bold text-tertiary",
    title: "Đưa em bé về nhà",
    description:
      "Hoàn thành mặt trắng đầu tiên — Câu chuyện về những em bé tìm đúng nhà của mình.",
    icon: "child_care",
    cardBorder: "border-2 border-tertiary-container",
    circleClass: "bg-tertiary-container text-on-tertiary-container",
  },
  {
    badgeClass: "font-mono-label font-bold text-secondary",
    title: "Thỏ đi chơi xa",
    description: "Giải quyết tầng 2 — Chú thỏ đi dạo qua các lùm cây màu sắc.",
    icon: "cruelty_free",
    cardBorder: "border-2 border-secondary-container",
    circleClass: "bg-secondary text-on-secondary",
  },
  {
    badgeClass: "font-mono-label font-bold text-primary",
    title: "Con cá",
    description:
      "Lật mặt vàng — Kỹ thuật “Con cá” huyền thoại để hoàn thiện tầng cuối.",
    icon: "set_meal",
    cardBorder: "border-2 border-primary-container",
    circleClass: "bg-primary-container text-on-primary-container",
  },
  {
    badgeClass: "font-mono-label font-bold text-error",
    title: "Bứt tốc",
    description: "Hoàn thành cả khối Rubik và học cách tối ưu các bước xoay.",
    icon: "speed",
    cardBorder: "border-2 border-error-container",
    circleClass: "bg-error text-on-error",
  },
  {
    badgeClass: "font-mono-label font-bold text-tertiary",
    title: "Vinh danh Master",
    description:
      "Giải Rubik trong thời gian ngắn và nhận chứng chỉ hoàn thành.",
    icon: "emoji_events",
    cardBorder: "border-2 border-tertiary-fixed",
    circleClass: "bg-tertiary-fixed text-on-tertiary-fixed",
  },
];

export function ElementaryLanding() {
  return (
    <div className="min-h-[max(884px,100dvh)] w-full min-w-0 overflow-x-hidden bg-surface pb-[calc(5rem+env(safe-area-inset-bottom,0px))] font-rubik text-on-surface md:pb-0">
      <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-outline-variant bg-surface px-4 shadow-sm md:px-6">
        <Link
          to="/rubik"
          className="flex items-center gap-2 text-inherit no-underline"
        >
          <span className="material-symbols-outlined text-2xl text-primary">
            grid_view
          </span>
          <span className="font-space text-[clamp(1.25rem,3vw,2rem)] font-bold tracking-tighter text-primary">
            CUBE MASTERY
          </span>
        </Link>
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Điều hướng chính"
        >
          <a
            className="flex h-16 items-center border-b-4 border-primary px-2 font-medium text-primary"
            href="#hero"
          >
            Learn
          </a>
          <a
            className="rounded-lg px-4 py-2 text-on-surface-variant transition-colors hover:bg-surface-container-high"
            href="#roadmap"
          >
            Roadmap
          </a>
          <a
            className="rounded-lg px-4 py-2 text-on-surface-variant transition-colors hover:bg-surface-container-high"
            href="#"
          >
            Timer
          </a>
        </nav>
        <span className="material-symbols-outlined text-2xl text-on-surface-variant">
          account_circle
        </span>
      </header>

      <div className="mx-auto w-full max-w-[1280px]">
        <section
          id="hero"
          className="relative overflow-hidden px-4 pb-24 pt-10 md:py-24 md:pt-10"
        >
          <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row">
            <div className="space-y-4 text-center md:w-1/2 md:text-left">
              <span className="inline-block rounded-full bg-tertiary-container px-4 py-1 font-mono-label text-sm font-medium uppercase tracking-wide text-on-tertiary-container">
                Học mà chơi — Khơi tư duy
              </span>
              <h1 className="font-rubik text-[clamp(2rem,5vw,3rem)] font-bold leading-tight tracking-tight text-primary">
                Giải Mã Rubik - Vui Chơi Mở Khóa Tư Duy!{" "}
                <span className="inline-block animate-el-float" aria-hidden>
                  🚀
                </span>
              </h1>
              <p className="font-rubik text-lg leading-relaxed text-on-surface-variant">
                Khám phá thế giới sắc màu cùng Thầy Khoa. Biến những khối vuông
                phức tạp thành những câu chuyện cổ tích kỳ diệu dễ hiểu cho bé.
              </p>
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <a
                  href="#dang-ky"
                  className="rounded-xl bg-primary px-8 py-4 text-center text-lg font-bold text-on-primary story-shadow transition-all active:translate-y-1 active:shadow-[0_0_0_0_rgba(79,55,138,0.3)]"
                >
                  Đăng ký cho bé trải nghiệm miễn phí
                </a>
                <a
                  href="#roadmap"
                  className="rounded-xl border-2 border-primary px-8 py-4 text-center text-lg font-bold text-primary transition-colors hover:bg-primary-container/10"
                >
                  Xem lộ trình học
                </a>
              </div>
            </div>
            <div className="relative md:w-1/2">
              <div className="story-shadow aspect-square w-full overflow-hidden rounded-[3rem] bg-gradient-to-tr from-primary-container to-tertiary-container">
                <img
                  src={HERO_IMG}
                  alt="Bé cầm khối Rubik đầy màu trong không gian vui học"
                  className="h-full w-full object-cover opacity-80 mix-blend-overlay"
                  decoding="async"
                />
              </div>
              <div className="absolute -right-6 -top-6 flex h-24 w-24 rotate-12 items-center justify-center rounded-2xl bg-tertiary-fixed shadow-lg">
                <span className="material-symbols-outlined text-4xl text-on-tertiary-fixed">
                  rocket_launch
                </span>
              </div>
              <div className="absolute -bottom-6 -left-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary-fixed shadow-lg">
                <span className="material-symbols-outlined text-3xl text-on-secondary-fixed">
                  star
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="method"
          className="bg-surface-container-low px-4 py-24"
          aria-labelledby="method-heading"
        >
          <div className="mb-16 text-center">
            <h2
              id="method-heading"
              className="font-rubik text-[32px] font-semibold leading-tight text-primary"
            >
              Phương Pháp Học Có Gì Đặc Biệt?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-on-surface-variant">
              Chúng tôi không dạy công thức khô khan. Chúng tôi kể những câu
              chuyện để bé ghi nhớ một cách tự nhiên nhất.
            </p>
          </div>
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 md:grid-cols-3">
            {METHOD_FEATURES.map((m) => (
              <div
                key={m.title}
                className="flex flex-col items-center rounded-3xl border border-outline-variant bg-surface p-8 text-center story-shadow"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${m.iconBg}`}
                >
                  <span
                    className={`material-symbols-outlined text-3xl ${m.iconText}`}
                  >
                    {m.icon}
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-on-surface">
                  {m.title}
                </h3>
                <p className="text-lg text-on-surface-variant">{m.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="roadmap" className="scroll-mt-20 px-4 py-24">
          <h2 className="mb-16 text-center font-rubik text-[32px] font-semibold text-primary">
            Lộ Trình 6 Buổi Chinh Phục Rubik
          </h2>
          <div className="relative mx-auto max-w-4xl">
            <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-1 -translate-x-1/2 border-l-4 border-dashed border-primary-container/30 md:block" />
            <div className="space-y-12">
              {ROADMAP_STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="flex flex-col items-center gap-8 md:flex-row md:even:flex-row-reverse"
                >
                  <div className="flex w-full justify-center md:w-1/2 md:justify-end md:even:justify-start">
                    <div
                      className={`w-full rounded-2xl bg-surface-container p-6 story-shadow ${step.cardBorder}`}
                    >
                      <div className="mb-2 flex flex-wrap items-center gap-4">
                        <span className={step.badgeClass}>
                          BUỔI {index + 1}
                        </span>
                        <h4 className="text-xl font-bold text-on-surface">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-on-surface-variant">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-xl font-bold shadow-lg ${step.circleClass}`}
                  >
                    <span className="material-symbols-outlined">
                      {step.icon}
                    </span>
                  </div>
                  <div className="hidden md:block md:w-1/2" aria-hidden />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-4 mb-24 rounded-[3rem] bg-primary-fixed px-4 py-24">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row">
            <div className="h-48 w-48 shrink-0 overflow-hidden rounded-full border-8 border-white shadow-xl">
              <img
                src={INSTRUCTOR_IMG}
                alt="Thầy Khoa — giảng viên khóa học"
                className="h-full w-full object-cover"
                decoding="async"
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-[32px] font-bold text-on-primary-fixed">
                Người truyền lửa - Thầy Khoa
              </h2>
              <p className="font-mono-label text-on-primary-fixed-variant">
                Fullstack Software Engineer &amp; Speedcuber
              </p>
              <p className="font-rubik text-lg italic text-on-primary-fixed-variant">
                &quot;Chào các bậc phụ huynh và các bạn nhỏ! Mình tin rằng mỗi
                khối Rubik không chỉ là một món đồ chơi, mà là một bài toán
                logic đầy thú vị giúp rèn luyện sự kiên nhẫn và khả năng tập
                trung. Thầy rất mong được đồng hành cùng các con trên con đường
                chinh phục những khối màu!&quot;
              </p>
            </div>
          </div>
        </section>

        <section
          id="dang-ky"
          className="scroll-mt-20 px-4 pb-24 pt-8 text-center"
        >
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-tertiary-container to-secondary-container p-10 story-shadow md:p-12">
            <div className="relative z-10">
              <h2 className="mb-6 text-[32px] font-bold text-on-tertiary-container">
                Quà Tặng Đặc Biệt Cho Học Viên Mới
              </h2>
              <p className="mb-8 font-rubik text-lg text-on-tertiary-container">
                Đăng ký ngay hôm nay để nhận trọn bộ combo:
              </p>
              <div className="mb-10 flex flex-col justify-center gap-8 md:flex-row">
                <div className="flex items-center gap-4 rounded-2xl bg-white/50 p-6 backdrop-blur-md">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    inventory_2
                  </span>
                  <div className="text-left">
                    <p className="font-bold text-on-surface">
                      Rubik 3×3 xịn xò
                    </p>
                    <p className="text-sm text-on-surface-variant">
                      Xoay cực mượt, không kẹt
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl bg-white/50 p-6 backdrop-blur-md">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    menu_book
                  </span>
                  <div className="text-left">
                    <p className="font-bold text-on-surface">Sổ tay hình ảnh</p>
                    <p className="text-sm text-on-surface-variant">
                      In màu 100%, dễ hiểu
                    </p>
                  </div>
                </div>
              </div>
              <LeadForm />
            </div>
            <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
          </div>
        </section>
      </div>

      <footer className="mt-auto flex w-full flex-col items-center justify-between gap-6 border-t border-outline-variant bg-surface-container-lowest px-4 py-8 md:flex-row md:px-6">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <span className="font-space text-lg font-black uppercase tracking-tighter text-on-surface">
            Cube Mastery
          </span>
          <p className="font-mono-label text-sm text-secondary-fixed-dim">
            © 2026 Cube Mastery Academy. Solve the Impossible.
          </p>
        </div>
        <nav
          className="flex flex-wrap justify-center gap-6 font-mono-label text-sm"
          aria-label="Chân trang"
        >
          <a
            className="text-on-surface-variant transition-colors hover:text-primary"
            href="#"
          >
            Privacy
          </a>
          <a
            className="text-on-surface-variant transition-colors hover:text-primary"
            href="#"
          >
            Terms
          </a>
          <a
            className="text-on-surface-variant transition-colors hover:text-primary"
            href="#"
          >
            Support
          </a>
          <a className="font-bold text-primary underline" href="#">
            Coach Login
          </a>
        </nav>
      </footer>

      <nav
        className="fixed bottom-0 left-0 z-50 flex h-20 w-full items-center justify-around rounded-t-xl border-t border-outline-variant bg-surface-container px-4 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:hidden"
        aria-label="Điều hướng nhanh"
      >
        <a
          href="#hero"
          className="flex flex-col items-center justify-center rounded-full bg-primary-container px-4 py-1 text-on-primary-container transition-transform active:translate-y-0.5"
        >
          <span className="material-symbols-outlined">school</span>
          <span className="font-mono-label text-[10px]">Learn</span>
        </a>
        <a
          href="#roadmap"
          className="flex flex-col items-center justify-center text-on-surface-variant transition-transform active:translate-y-0.5"
        >
          <span className="material-symbols-outlined">map</span>
          <span className="font-mono-label text-[10px]">Roadmap</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center text-on-surface-variant transition-transform active:translate-y-0.5"
        >
          <span className="material-symbols-outlined">timer</span>
          <span className="font-mono-label text-[10px]">Timer</span>
        </a>
        <span className="flex flex-col items-center justify-center text-on-surface-variant">
          <span className="material-symbols-outlined">person</span>
          <span className="font-mono-label text-[10px]">Profile</span>
        </span>
      </nav>
    </div>
  );
}

function LeadForm() {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.info("[đăng ký tiểu học]", { name, grade, parentPhone: phone });
    alert("Cảm ơn ba mẹ! Chúng tôi sẽ liên hệ sớm. (Demo — chưa gửi server)");
  }

  const field =
    "w-full rounded-xl border border-outline-variant bg-white/90 px-3.5 py-2.5 text-base text-on-surface placeholder:text-on-surface-variant/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25";

  return (
    <form
      className="mx-auto mt-2 rounded-2xl border border-white/40 bg-white/30 p-6 text-left backdrop-blur-md"
      onSubmit={handleSubmit}
      noValidate
    >
      <p className="mb-4 text-center text-sm text-on-tertiary-container">
        Điền thông tin — chúng tôi sẽ gọi tư vấn lịch học cho bé.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-left">
          <span className="text-xs font-bold text-on-tertiary-container">
            Tên bé
          </span>
          <input
            className={field}
            name="childName"
            type="text"
            autoComplete="name"
            placeholder="Minh Anh"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col gap-1 text-left">
          <span className="text-xs font-bold text-on-tertiary-container">
            Lớp
          </span>
          <input
            className={field}
            name="grade"
            inputMode="numeric"
            placeholder="3"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </label>
      </div>
      <label className="mt-4 flex flex-col gap-1 text-left">
        <span className="text-xs font-bold text-on-tertiary-container">
          SĐT ba/mẹ
        </span>
        <input
          className={field}
          name="parentPhone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="09xx xxx xxx"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>
      <button
        type="submit"
        className="mt-6 w-full rounded-2xl bg-on-surface py-5 font-bold text-surface text-xl transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Nhận quà &amp; tư vấn ngay
      </button>
    </form>
  );
}
