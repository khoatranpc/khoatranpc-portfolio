import { Link } from 'react-router-dom'
import { RubikDemoPickVideos } from './RubikDemoPickVideos'

/** Minh họa Story Mode — theo intro.html */
const IMG_STORY_DECO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC0luJK4YcyXzQPY53enW1z2xG4arqolpKGA7tezM_47Kd1YgTCqp8NFFqeyqGoFEpEN6VX6G3mUl4SVTJ8BIPFvIv3bUA9tEzDhgOT5_GCvP7fTIlAEdBzewNYX0RBwigfPdvhM2-K36nZSUNNFP2FglaK4_wNzqjHfEA52-5xO7xyfVfz5Gvq8HxiBSMttlajkHo7jjYABNH4l68TRbruJQrHnYxShpTC363YuhM2PIcJQDNUbGFROs6qswsd6xt4JX4IDtym6SQ";

/** Minh họa Speed Mode — theo intro.html */
const IMG_SPEED_DECO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAzBH_Lm5IlFib5YLp7_XXrVC76feUVbHluQR_D-VZ0YZ_EGO6G7J3izC3EBvWgaxw3exIFUTjtAWBENZe9PxQ1rvaQKZ-gzcl1mgjaFGw_wyA9v34uK2KDfTmb8hmcbrewPXLHION7xHGgItqT6Q7vDHp7dVmD7g1vtFmJ9VrPAG2Lzk6GO_m-h2ar8v6SLVCbIccqdy4TgWuOJas3imv047nBtn4GhAW7KCwV4lkrgrKecfMPY67DVlDjdZ8V9IDCpq8KmHsB6kY";

export function SplashPage() {
  return (
    <div className="flex min-h-[max(884px,100dvh)] flex-col overflow-x-hidden bg-surface font-rubik text-on-surface">
      <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-outline-variant bg-surface px-4 shadow-sm md:px-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-2xl text-primary">
            grid_view
          </span>
          <h1 className="font-space text-2xl font-bold tracking-tighter text-primary md:text-[32px] md:leading-tight">
            CUBE MASTERY
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-2xl text-on-surface-variant">
            account_circle
          </span>
        </div>
      </header>

      <main className="relative flex flex-1 flex-col items-center justify-center px-4 py-8 md:px-6">
        <div
          className="pointer-events-none absolute left-0 top-1/4 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-1/4 right-0 -z-10 h-64 w-64 rounded-full bg-tertiary/10 blur-[100px]"
          aria-hidden
        />

        <div className="mb-8 max-w-2xl text-center">
          <h2 className="mb-4 font-rubik text-[clamp(2rem,5vw,3rem)] font-bold leading-none tracking-tight text-on-surface">
            Bạn / Con đang học ở cấp bậc nào?
          </h2>
          <p className="font-mono-label text-sm font-semibold uppercase leading-snug tracking-wide text-primary">
            Hãy chọn thế giới phù hợp để bắt đầu hành trình chinh phục khối
            Rubik
          </p>
        </div>

        <RubikDemoPickVideos />

        <div className="grid w-full max-w-[1280px] grid-cols-1 gap-8 md:grid-cols-2">
          <Link
            to="/rubik?btype=tieu_hoc"
            className="group relative overflow-hidden rounded-[2rem] border-4 border-primary-container/30 bg-surface-container-lowest p-8 text-left shadow-[0_8px_0_0_rgba(103,80,164,0.3)] transition-all duration-200 hover:border-primary hover:-translate-y-0.5 active:translate-y-1.5 active:shadow-[0_2px_0_0_rgba(103,80,164,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <div className="relative z-10 flex h-full flex-col justify-between gap-4">
              <div className="flex items-start justify-between">
                <div className="rounded-2xl bg-primary-container p-4 text-on-primary-container">
                  <span className="text-4xl">🧸</span>
                </div>
                <span className="rounded-full bg-primary-container px-3 py-1 font-mono-label text-xs font-bold uppercase tracking-wide text-on-primary-container">
                  Story Mode
                </span>
              </div>
              <div>
                <h3 className="mb-2 font-rubik text-[32px] font-semibold leading-tight tracking-normal text-primary">
                  Tiểu học (Lớp 1 - 5)
                </h3>
                <p className="text-lg leading-relaxed text-on-surface">
                  Học qua kể chuyện, tư duy hình ảnh, dễ hiểu. Biến những công
                  thức khô khan thành những người bạn nhỏ trong cuộc phiêu lưu
                  sắc màu.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 font-bold text-primary">
                Bắt đầu khám phá
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
                  arrow_forward
                </span>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 opacity-10">
              <img
                src={IMG_STORY_DECO}
                alt=""
                className="h-full w-full object-contain"
                decoding="async"
              />
            </div>
          </Link>

          <Link
            to="/rubik?btype=trung_hoc"
            className="group relative overflow-hidden rounded-xl border border-tertiary-fixed-dim/40 bg-[#121212] p-8 text-left shadow-[0_0_20px_rgba(231,195,101,0.15)] transition-all duration-300 hover:bg-[rgba(231,195,101,0.08)] hover:shadow-[0_0_30px_rgba(231,195,101,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary-fixed"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(#ffdf93 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
              aria-hidden
            />
            <div className="relative z-10 flex h-full flex-col justify-between gap-4">
              <div className="flex items-start justify-between">
                <div className="rounded-lg border border-tertiary-fixed/40 bg-tertiary/20 p-4 text-tertiary-fixed">
                  <span className="text-4xl">⚡</span>
                </div>
                <span className="rounded border border-tertiary-fixed/30 bg-tertiary/10 px-3 py-1 font-mono-label text-xs font-bold uppercase tracking-wide text-tertiary-fixed">
                  Speed Mode
                </span>
              </div>
              <div>
                <h3 className="mb-2 font-space text-[32px] font-semibold leading-tight tracking-normal text-tertiary-fixed">
                  Trung học (Lớp 6 - 12)
                </h3>
                <p className="text-lg leading-relaxed text-zinc-300">
                  Chuẩn hóa kỹ thuật (F2L, OLL, PLL), tối ưu Finger-trick và tốc
                  độ. Dành cho những Cubers muốn phá vỡ giới hạn thời gian.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 font-space font-bold text-tertiary-fixed">
                BẮT ĐẦU HUẤN LUYỆN
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
                  bolt
                </span>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 opacity-20 blur-sm">
              <img
                src={IMG_SPEED_DECO}
                alt=""
                className="h-full w-full object-contain"
                decoding="async"
              />
            </div>
          </Link>
        </div>
      </main>

      <footer className="mt-auto flex w-full flex-col items-center justify-between gap-6 border-t border-outline-variant bg-surface-container-lowest px-4 py-8 md:flex-row md:px-6">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <span className="font-space text-lg font-black uppercase tracking-tighter text-on-surface">
            Cube Mastery Academy
          </span>
          <p className="font-mono-label text-sm font-medium text-on-surface-variant">
            © 2026 Cube Mastery Academy. Solve the Impossible.
          </p>
        </div>
        <nav
          className="flex flex-wrap justify-center gap-6 font-mono-label text-sm font-medium"
          aria-label="Liên kết chân trang"
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
          <a
            className="font-bold text-primary underline decoration-primary/40 underline-offset-2"
            href="#"
          >
            Coach Login
          </a>
        </nav>
      </footer>
    </div>
  );
}
