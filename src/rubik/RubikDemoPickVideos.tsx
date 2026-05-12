import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { RUBIK_DEMO_VIDEOS } from './constants/demoVideos'
import {
  isYouTubeShortsUrl,
  isYouTubeUrl,
  toYouTubeEmbedUrl,
} from './youtubeEmbed'

/**
 * Demo video: mặc định ẩn — một nút chuyển tiếp mở panel hai clip,
 * tránh chiếm visual khi vừa vào splash.
 */
export function RubikDemoPickVideos() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerId = useId();

  return (
    <section
      className={`w-full max-w-[1280px] ${open ? "mb-10 md:mb-12" : "mb-6 md:mb-8"}`}
      aria-label="Demo tốc độ solve"
    >
      <div className="flex flex-col items-center gap-2">
        <button
          id={triggerId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="group inline-flex max-w-full items-center gap-2.5 rounded-full border border-outline-variant/80 bg-surface-container-lowest/90 py-2 pl-3.5 pr-3 text-left shadow-sm backdrop-blur-sm transition hover:border-primary/35 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:gap-3 md:py-2.5 md:pl-4 md:pr-3.5"
        >
          <span className="material-symbols-outlined shrink-0 text-2xl text-primary/90 transition-transform group-hover:scale-105">
            {open ? "expand_less" : "play_circle"}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-rubik text-sm font-medium leading-tight text-on-surface md:text-[0.9375rem]">
              {open ? "Thu gọn demo" : "Xem demo"}
            </span>
            <span className="mt-0.5 block font-mono-label text-[0.65rem] font-medium uppercase tracking-[0.12em] text-on-surface-variant md:text-xs">
              {open ? "Ẩn hai clip thực chiến" : "sub ~11s & sub ~25s"}
            </span>
          </span>
          <span
            className={`material-symbols-outlined shrink-0 text-xl text-on-surface-variant transition-transform duration-300 ease-out ${open ? "rotate-180" : ""}`}
            aria-hidden
          >
            expand_more
          </span>
        </button>
        {!open ? (
          <p className="text-center text-xs leading-relaxed text-on-surface-variant/90">
            Gợi ý nhẹ — chỉ mở khi bạn muốn “thử sản phẩm” trước khi chọn cấp
            học.
          </p>
        ) : null}
      </div>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? "max-h-[8000px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="border-t border-outline-variant/50 pt-6 md:pt-8">
          <div className="rounded-2xl border border-outline-variant/60 bg-surface-container-low/80 p-5 shadow-sm md:p-7">
            <p className="font-mono-label text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary">
              Thực chiến
            </p>
            <h3 className="mt-1.5 font-rubik text-lg font-semibold text-on-surface md:text-xl">
              Góc nhìn tốc độ
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-5 md:mt-7 md:grid-cols-2 md:gap-6">
              {RUBIK_DEMO_VIDEOS.map((demo) => (
                <article
                  key={demo.id}
                  className={
                    demo.variant === "speed"
                      ? "flex flex-col overflow-hidden rounded-xl border border-tertiary-fixed/25 bg-[#141018] text-left shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
                      : "flex flex-col overflow-hidden rounded-xl border border-primary/12 bg-surface-container-lowest text-left shadow-[0_6px_24px_rgba(79,55,138,0.06)]"
                  }
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 px-3.5 pb-2.5 pt-3.5 md:px-4 md:pt-4">
                    <div>
                      <h4
                        className={
                          demo.variant === "speed"
                            ? "font-space text-base font-bold tracking-tight text-tertiary-fixed md:text-lg"
                            : "font-rubik text-base font-semibold text-primary md:text-lg"
                        }
                      >
                        {demo.title}
                      </h4>
                      <p
                        className={
                          demo.variant === "speed"
                            ? "mt-0.5 text-xs text-zinc-400 md:text-sm"
                            : "mt-0.5 text-xs text-on-surface-variant md:text-sm"
                        }
                      >
                        {demo.tagline}
                      </p>
                    </div>
                    <span
                      className={
                        demo.variant === "speed"
                          ? "shrink-0 rounded-full border border-tertiary-fixed/30 bg-tertiary/12 px-2 py-0.5 font-mono-label text-[0.65rem] font-bold tabular-nums text-tertiary-fixed md:text-xs"
                          : "shrink-0 rounded-full bg-primary/10 px-2 py-0.5 font-mono-label text-[0.65rem] font-bold tabular-nums text-primary md:text-xs"
                      }
                    >
                      {demo.durationLabel}
                    </span>
                  </div>

                  <div className="px-3.5 md:px-4">
                    {demo.src ? (
                      open ? (
                        isYouTubeUrl(demo.src) ? (
                          <div
                            className={
                              isYouTubeShortsUrl(demo.src)
                                ? "relative mx-auto h-[min(50svh,380px)] w-[min(100%,min(18rem,calc(min(50svh,380px)*9/16)))] overflow-hidden rounded-lg bg-black ring-1 ring-white/10 md:h-[min(74dvh,640px)] md:w-[min(100%,min(25rem,calc(min(74dvh,640px)*9/16)))] lg:h-[min(78dvh,680px)] lg:w-[min(100%,min(26rem,calc(min(78dvh,680px)*9/16)))]"
                                : "relative aspect-video w-full overflow-hidden rounded-lg bg-black ring-1 ring-white/10"
                            }
                          >
                            <iframe
                              className="absolute inset-0 h-full w-full"
                              src={toYouTubeEmbedUrl(demo.src)!}
                              title={`YouTube — ${demo.title}`}
                              loading="lazy"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              referrerPolicy="strict-origin-when-cross-origin"
                            />
                          </div>
                        ) : (
                          <div className="overflow-hidden rounded-lg bg-black ring-1 ring-white/10">
                            <video
                              className="aspect-video w-full object-cover"
                              controls
                              playsInline
                              preload="metadata"
                              src={demo.src}
                              aria-label={`Video demo: ${demo.title}`}
                            />
                          </div>
                        )
                      ) : null
                    ) : (
                      <div
                        className={
                          demo.variant === "speed"
                            ? "flex aspect-video w-full flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-gradient-to-b from-zinc-900/90 to-black text-center"
                            : "flex aspect-video w-full flex-col items-center justify-center gap-1.5 rounded-lg border border-primary/12 bg-gradient-to-br from-surface-container to-surface-container-high text-center"
                        }
                        role="status"
                        aria-label={`Chưa gắn file video cho: ${demo.title}`}
                      >
                        <span
                          className={
                            demo.variant === "speed"
                              ? "material-symbols-outlined text-3xl text-tertiary-fixed/75"
                              : "material-symbols-outlined text-3xl text-primary/65"
                          }
                        >
                          smart_display
                        </span>
                        <p
                          className={
                            demo.variant === "speed"
                              ? "max-w-[12.5rem] px-2 text-[0.65rem] leading-relaxed text-zinc-500"
                              : "max-w-[12.5rem] px-2 text-[0.65rem] leading-relaxed text-on-surface-variant"
                          }
                        >
                          Thêm{" "}
                          <code className="rounded bg-black/25 px-1 py-px font-mono text-[0.6rem] text-zinc-300">
                            VITE_RUBIK_DEMO_
                            {demo.id === "advanced" ? "ADVANCED" : "BASIC"}
                            _URL
                          </code>{" "}
                          — file .mp4/.webm hoặc link YouTube (Shorts / watch).
                        </p>
                      </div>
                    )}
                  </div>

                  <p
                    className={
                      demo.variant === "speed"
                        ? "px-3.5 py-2.5 text-xs leading-relaxed text-zinc-400 md:px-4 md:text-sm"
                        : "px-3.5 py-2.5 text-xs leading-relaxed text-on-surface-variant md:px-4 md:text-sm"
                    }
                  >
                    {demo.promise}
                  </p>

                  <div
                    className={
                      demo.variant === "speed"
                        ? "mt-auto border-t border-white/10 px-3.5 py-2.5 md:px-4"
                        : "mt-auto border-t border-outline-variant/55 px-3.5 py-2.5 md:px-4"
                    }
                  >
                    <Link
                      to={demo.matchHref}
                      className={
                        demo.variant === "speed"
                          ? "group/lnk inline-flex items-center gap-1 font-mono-label text-[0.65rem] font-semibold uppercase tracking-wide text-tertiary-fixed transition-colors hover:text-tertiary-fixed-dim md:text-xs"
                          : "group/lnk inline-flex items-center gap-1 font-mono-label text-[0.65rem] font-semibold uppercase tracking-wide text-primary transition-colors hover:text-primary-container md:text-xs"
                      }
                    >
                      {demo.matchLabel}
                      <span className="material-symbols-outlined text-sm transition-transform group-hover/lnk:translate-x-0.5">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
