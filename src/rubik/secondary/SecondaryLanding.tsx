import { type FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAV5s9vNoDZRNwztoBk6-E1G8uxxNwNSWl8P1wWSWdZqSpxzzQwe0WLgUM4Xa2LbDjdCoESbUXa1ZkZQaBp3weS2ZCq5afu1mkLs4Tv9RLDG-MfLCZ5_wsipguIYpV5Vz3zPQBBI1WPj-GbVwKAZm7h4fjaPq5M2eA-ieGl1AEeiwMQXb-T3H990AemeOPIz5fyo0I0fwQnMs51w2E11MRrtENGTV85qUFdklR9c_jW9tXWzsAnCm99I53PInexnh71r1jMCQV6PKI";

const INSTRUCTOR_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBZiiFnk_E-GdS877YE54Qm5G5_7uyrwgjlbgizu9edNjbu20E55zZ9CtxZQRNP-qU9hAAhKDDs_7vCPMfNTJc9nUdFwKwZ0IdPjSTgoQw88c99uPubRdQEIclvKG3ObQLavWAIqIOkdNpxXUMUsY0gC-nkW8aTCXKsOVSTmGe-d9wr3wJFOZKefQ-PZT5ntBEOYAtjQPNsKrIJtRjnWOt3ZuEDKsavjpNfLRIYcy3Loe9EChIA9QJU0ry3juva64CAR-Ob7B97Hhc";

const CFOP_CARDS = [
  {
    span: "md:col-span-2",
    icon: "layers",
    iconWrap:
      "border border-violet-300/70 bg-violet-500/35 text-violet-50 shadow-inner shadow-violet-900/20",
    title: "CROSS",
    body: "Nền móng tốc độ. Xây dựng dấu cộng ở mặt đáy trong tối đa 8 bước chuyển động.",
    footer: "01 // INITIALIZATION",
    footerClass: "text-violet-200",
    neon: true,
  },
  {
    span: "",
    icon: "grid_4x4",
    iconWrap:
      "border border-amber-300/70 bg-amber-500/30 text-amber-50 shadow-inner shadow-amber-900/20",
    title: "F2L",
    body: "First Two Layers. Kỹ thuật ghép cặp đỉnh-cạnh để hoàn thiện 2 tầng cùng lúc.",
    footer: "02 // CONSOLIDATION",
    footerClass: "text-amber-200",
    neon: false,
  },
  {
    span: "",
    icon: "texture",
    iconWrap:
      "border border-emerald-300/65 bg-emerald-500/25 text-emerald-50 shadow-inner shadow-emerald-900/20",
    title: "OLL",
    body: "Orient Last Layer. Xoay hướng toàn bộ mặt vàng chỉ bằng một thuật toán duy nhất.",
    footer: "03 // ORIENTATION",
    footerClass: "text-emerald-200",
    neon: false,
  },
] as const;

const SESSIONS = [
  {
    border: "border-l-4 border-violet-400",
    labelClass: "font-bold tracking-wide text-violet-200",
    label: "SESSION 01",
    title: "Daisy & Cross Initialization",
    desc: "Thiết lập cấu trúc cơ bản. Tối ưu hóa việc quan sát và thực hiện Cross không cần nhìn (Blind Cross).",
  },
  {
    border: "border-l-4 border-violet-400",
    labelClass: "font-bold tracking-wide text-violet-200",
    label: "SESSION 02",
    title: "Sexy Move & Trigger Mechanics",
    desc: "Làm chủ các tổ hợp moves cơ bản. Rèn luyện Finger Tricks để đạt tốc độ xoay tối đa.",
  },
  {
    border: "border-l-4 border-violet-400",
    labelClass: "font-bold tracking-wide text-violet-200",
    label: "SESSION 03",
    title: "F2L Pattern Recognition",
    desc: "Nhận diện 41 trường hợp F2L. Kỹ thuật chèn cặp từ nhiều góc độ khác nhau (Multi-slotting).",
  },
  {
    border: "border-l-4 border-amber-400",
    labelClass: "font-bold tracking-wide text-amber-200",
    label: "SESSION 04",
    title: "OLL & Sune Algorithm Stack",
    desc: "Phân tích hệ thống Sune và Anti-Sune. Tối ưu hóa thời gian định hướng mặt trên.",
  },
  {
    border: "border-l-4 border-amber-400",
    labelClass: "font-bold tracking-wide text-amber-200",
    label: "SESSION 05",
    title: "PLL & Niklas Execution",
    desc: "Hoàn tất khối Rubik với PLL. Kỹ thuật AUF (Adjust Upper Face) để kết thúc solve tức thì.",
  },
  {
    border: "border-l-4 border-rose-400",
    labelClass: "font-bold tracking-wide text-rose-200",
    label: "SESSION 06",
    title: "Debug & Speed Mastery",
    desc: "Phân tích lỗi (Solve Reconstruction). Kiểm tra cuối khóa và thiết lập mục tiêu Sub-20.",
  },
] as const;

export function SecondaryLanding() {
  return (
    <div className="min-h-[max(884px,100dvh)] w-full min-w-0 overflow-x-hidden bg-surface pb-[calc(5rem+env(safe-area-inset-bottom,0px))] selection:bg-tertiary-fixed selection:text-on-tertiary-fixed md:pb-0">
      <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-outline-variant bg-surface px-4 shadow-sm md:px-6">
        <Link
          to="/rubik"
          className="flex cursor-pointer items-center gap-2 text-inherit no-underline transition-transform duration-100 active:scale-95"
        >
          <span className="material-symbols-outlined text-2xl text-primary">
            grid_view
          </span>
          <span className="font-space text-xl font-bold uppercase tracking-tighter text-primary md:text-[32px] md:leading-tight">
            Cube Mastery
          </span>
        </Link>
        <button
          type="button"
          className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container-high"
          aria-label="Tài khoản"
        >
          <span className="material-symbols-outlined">account_circle</span>
        </button>
      </header>

      <div className="min-h-screen w-full">
        <section
          id="hero"
          className="relative flex flex-col items-center overflow-hidden px-4 pb-32 pt-12 text-center md:px-10 lg:px-40"
        >
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-25"
            aria-hidden
          >
            <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-tertiary-container blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <span className="mb-6 inline-block rounded bg-tertiary/10 px-3 py-1 font-mono-label text-sm font-medium uppercase tracking-widest text-tertiary">
              System Version 2.0 // High School Edition
            </span>
            <h1 className="mb-8 font-space text-[clamp(2rem,6vw,4rem)] font-bold leading-none tracking-tight text-on-surface md:text-[64px]">
              Chinh Phục Rubik 3×3 - Phá Bỏ Giới Hạn Tốc Độ! ⚡
            </h1>
            <p className="mx-auto mb-12 max-w-2xl font-rubik text-lg leading-relaxed text-on-surface-variant">
              Nâng cấp tư duy logic, tối ưu hóa thuật toán và bứt phá giới hạn
              cá nhân cùng hệ thống đào tạo chuyên sâu chuẩn Speedcuber.
            </p>
            <div className="flex flex-col justify-center gap-4 md:flex-row">
              <a
                href="#dang-ky"
                className="flex items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 font-bold text-on-primary shadow-lg shadow-primary/20 transition-transform hover:scale-105"
              >
                Đăng ký Test trình độ &amp; Nhận lộ trình Sub-2 ngay
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  bolt
                </span>
              </a>
            </div>
          </div>

          <div className="relative mt-20 aspect-video w-full max-w-5xl overflow-hidden rounded-2xl glass-speed neon-speed">
            <img
              src={HERO_IMG}
              alt="Tay Speedcuber xoay khối Rubik tốc độ cao"
              className="h-full w-full object-cover grayscale brightness-75 contrast-125"
              decoding="async"
            />
            <div className="absolute bottom-6 left-6 flex gap-4">
              <div className="glass-speed rounded-lg border border-primary/30 px-4 py-2">
                <p className="font-mono-label text-xs text-zinc-300">
                  CURRENT STATE
                </p>
                <p className="font-space text-xl text-tertiary-fixed">
                  SUB-15 READY
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="cfop"
          className="mx-auto max-w-[1280px] px-4 py-10 md:px-6"
        >
          <div className="mb-12">
            <h2 className="mb-2 font-space text-[32px] font-semibold uppercase text-primary">
              Phương Pháp CFOP Là Gì?
            </h2>
            <p className="font-mono-label text-on-surface-variant">
              C-F-O-P TECHNICAL SYSTEM DECONSTRUCTION
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {CFOP_CARDS.map((c) => (
              <div
                key={c.title}
                className={`glass-speed flex min-h-[300px] flex-col justify-between rounded-xl p-4 md:p-6 ${c.span} ${c.neon ? "neon-speed" : ""}`}
              >
                <div>
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg ${c.iconWrap}`}
                  >
                    <span className="material-symbols-outlined">{c.icon}</span>
                  </div>
                  <h3 className="mb-2 font-space text-2xl font-semibold text-inverse-on-surface md:text-[28px]">
                    {c.title}
                  </h3>
                  <p className="font-rubik text-lg leading-relaxed text-glass-body">
                    {c.body}
                  </p>
                </div>
                <div
                  className={`mt-4 border-t border-white/20 pt-4 font-mono-label text-xs font-semibold tracking-wider ${c.footerClass}`}
                >
                  {c.footer}
                </div>
              </div>
            ))}

            <div className="glass-speed group relative flex flex-col items-center gap-8 overflow-hidden rounded-xl p-4 md:col-span-4 md:flex-row md:p-6">
              <div className="z-10 flex-1">
                <h3 className="mb-2 font-space text-[32px] font-semibold text-inverse-on-surface">
                  PLL
                </h3>
                <p className=" font-rubik text-lg leading-relaxed text-glass-body">
                  Permute Last Layer. Bước cuối cùng để hoán vị các khối còn
                  lại, hoàn thành khối Rubik. Hệ thống 21 thuật toán chuẩn thi
                  đấu.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["T-PERM", "Y-PERM", "U-PERM"].map((t) => (
                    <span
                      key={t}
                      className="rounded border border-white/15 bg-white/10 px-2 py-1 font-mono-label text-xs font-medium text-zinc-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute bottom-[-20px] right-[-20px] hidden opacity-10 transition-opacity group-hover:opacity-20 md:block">
                <span className="material-symbols-outlined text-[200px] text-inverse-on-surface">
                  terminal
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="roadmap"
          className="scroll-mt-20 bg-surface-dim py-10 md:py-16"
        >
          <div className="mx-auto max-w-[1280px] px-4 md:px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-space text-[32px] font-semibold uppercase text-on-surface">
                Lộ Trình Đào Tạo 6 Buổi
              </h2>
              <div className="mx-auto h-1 w-24 bg-primary" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SESSIONS.map((s) => (
                <div
                  key={s.label}
                  className={`glass-speed rounded-r-xl p-6 ${s.border}`}
                >
                  <div className={`mb-2 font-mono-label ${s.labelClass}`}>
                    {s.label}
                  </div>
                  <h3 className="mb-4 font-space text-xl font-semibold text-inverse-on-surface">
                    {s.title}
                  </h3>
                  <p className="font-rubik text-sm leading-relaxed text-glass-body">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] overflow-hidden px-4 py-16 md:px-6">
          <div className="flex flex-col items-center gap-16 md:flex-row">
            <div className="relative w-full md:w-1/2">
              <div className="absolute inset-0 rotate-3 rounded-2xl bg-primary/20" />
              <img
                src={INSTRUCTOR_IMG}
                alt="Khoa Trần — giảng viên"
                className="relative z-10 h-[400px] w-full rounded-2xl object-cover grayscale md:h-[500px]"
                decoding="async"
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="mb-4 block font-mono-label uppercase text-tertiary">
                Main Instructor
              </span>
              <h2 className="mb-6 font-space text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-on-surface">
                Khoa Trần
              </h2>
              <div className="mb-8 flex flex-wrap gap-4">
                <span className="rounded border border-outline-variant bg-surface-container px-3 py-1 font-mono-label text-xs text-on-surface">
                  SPEEDCUBER SUB-15
                </span>
                <span className="rounded border border-outline-variant bg-surface-container px-3 py-1 font-mono-label text-xs text-on-surface">
                  SOFTWARE ENGINEER
                </span>
              </div>
              <p className="mb-8 font-rubik text-lg leading-relaxed text-on-surface-variant">
                &quot;Rubik không chỉ là một trò chơi, đó là một bài toán về tối
                ưu hóa thuật toán và tốc độ xử lý thông tin. Với tư duy của một
                Kỹ sư Phần mềm, tôi sẽ giúp bạn &apos;debug&apos; từng bước
                xoay, xây dựng hệ thống xử lý logic để chinh phục những giới hạn
                thời gian mà bạn từng nghĩ là không thể.&quot;
              </p>
              <div className="glass-speed flex items-center gap-6 rounded-xl border border-white/15 p-6">
                <div>
                  <p className="font-space text-2xl text-tertiary-fixed">
                    1,5tr+
                  </p>
                  <p className="font-mono-label text-xs text-glass-muted">
                    SOLVES LOGGED
                  </p>
                </div>
                <div className="h-10 w-px bg-white/20" />
                <div>
                  <p className="font-space text-2xl text-tertiary-fixed">
                    7.00s
                  </p>
                  <p className="font-mono-label text-xs text-glass-muted">
                    PERSONAL BEST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="dang-ky" className="scroll-mt-20 px-4 py-16">
          <div className="glass-speed neon-speed relative mx-auto max-w-4xl overflow-hidden rounded-3xl p-10 text-center md:p-16">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-tertiary-container/10 blur-[60px]"
              aria-hidden
            />
            <h2 className="mb-6 font-space text-[32px] font-semibold uppercase text-inverse-on-surface">
              Quà Tặng Đặc Biệt Cho Học Viên
            </h2>
            <p className="mb-12 font-rubik text-lg text-glass-body">
              Khi tham gia khóa học, bạn sẽ nhận ngay bộ công cụ Speedcuber
              chuyên nghiệp để bắt đầu hành trình.
            </p>
            <div className="mb-12 grid grid-cols-1 gap-8 text-left md:grid-cols-2">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-8">
                <span
                  className="material-symbols-outlined mb-4 block text-4xl text-tertiary-fixed"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  package_2
                </span>
                <h3 className="mb-2 font-bold text-inverse-on-surface">
                  Speedcube Rubik 3×3
                </h3>
                <p className="text-sm leading-relaxed text-glass-body">
                  Khối Rubik chuyên dụng cho quá trình tập luyện speedcubing.
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-8">
                <span
                  className="material-symbols-outlined mb-4 block text-4xl text-violet-200"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  menu_book
                </span>
                <h3 className="mb-2 font-bold text-inverse-on-surface">
                  Speedcuber Handbook
                </h3>
                <p className="text-sm leading-relaxed text-glass-body">
                  Sổ tay tổng hợp 100+ công thức CFOP nâng cao và bảng theo dõi
                  tiến độ.
                </p>
              </div>
            </div>
            <SecondaryLeadForm />
          </div>
        </section>
      </div>

      <footer className="flex w-full flex-col items-center justify-between gap-6 border-t border-outline-variant bg-surface-container-lowest px-4 py-8 md:flex-row md:px-6">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <p className="font-space text-lg font-black uppercase text-on-surface">
            Cube Mastery
          </p>
          <p className="font-mono-label text-sm opacity-60 text-on-surface-variant">
            © 2026 Cube Mastery Academy. Solve the Impossible.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 font-mono-label text-sm">
          <a className="text-on-surface-variant hover:text-primary" href="#">
            Privacy
          </a>
          <a className="text-on-surface-variant hover:text-primary" href="#">
            Terms
          </a>
          <a className="text-on-surface-variant hover:text-primary" href="#">
            Support
          </a>
          <a className="font-bold text-primary underline" href="#">
            Coach Login
          </a>
        </nav>
      </footer>

      <nav
        className="fixed bottom-0 left-0 z-50 flex h-20 w-full items-center justify-around rounded-t-xl border-t border-outline-variant bg-surface-container px-4 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-4px_10px_rgba(0,0,0,0.08)] md:hidden"
        aria-label="Điều hướng nhanh"
      >
        <a
          href="#hero"
          className="flex flex-col items-center justify-center rounded-full bg-primary-container px-4 py-1 text-on-primary-container transition-transform active:translate-y-0.5"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            school
          </span>
          <span className="font-mono-label text-[10px] uppercase">Learn</span>
        </a>
        <a
          href="#roadmap"
          className="flex flex-col items-center justify-center text-on-surface-variant transition-transform active:translate-y-0.5"
        >
          <span className="material-symbols-outlined">map</span>
          <span className="font-mono-label text-[10px] uppercase">Roadmap</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center text-on-surface-variant transition-transform active:translate-y-0.5"
        >
          <span className="material-symbols-outlined">timer</span>
          <span className="font-mono-label text-[10px] uppercase">Timer</span>
        </a>
        <span className="flex flex-col items-center justify-center text-on-surface-variant">
          <span className="material-symbols-outlined">person</span>
          <span className="font-mono-label text-[10px] uppercase">Profile</span>
        </span>
      </nav>
    </div>
  );
}

function SecondaryLeadForm() {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.info("[đăng ký trung học]", { name, grade, phone });
    alert("Đã ghi nhận. Chúng tôi sẽ liên hệ! (Demo)");
  }

  const field =
    "w-full rounded-xl border border-white/25 bg-black/25 px-4 py-3 text-zinc-50 placeholder:text-zinc-400 focus:border-tertiary-fixed focus:outline-none focus:ring-2 focus:ring-tertiary-fixed/40";

  return (
    <form className="mx-auto mt-2 text-left" onSubmit={handleSubmit} noValidate>
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1">
          <span className="font-mono-label text-xs font-medium text-glass-muted">
            Họ tên
          </span>
          <input
            className={field}
            name="name"
            autoComplete="name"
            placeholder="Nguyễn Văn A"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-mono-label text-xs font-medium text-glass-muted">
            Lớp
          </span>
          <input
            className={field}
            name="grade"
            inputMode="numeric"
            placeholder="10"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </label>
      </div>
      <label className="mb-6 flex flex-col gap-1">
        <span className="font-mono-label text-xs font-medium text-glass-muted">
          Số điện thoại
        </span>
        <input
          className={field}
          name="phone"
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
        className="w-full rounded-full bg-tertiary-fixed px-10 py-5 font-space text-xl font-bold uppercase tracking-tight text-on-tertiary-fixed transition-all hover:shadow-[0_0_20px_rgba(231,195,101,0.5)]"
      >
        Đăng ký khóa học ngay
      </button>
    </form>
  );
}
