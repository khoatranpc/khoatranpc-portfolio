import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { PROJECT_IMAGES } from "../data/projectMedia";
import { useI18n } from "../i18n/useI18n";

export function ProjectsPage() {
  const { t } = useI18n();

  return (
    <div className="pb-xl pt-xl">
      <Seo
        title={t("seo.projects.title")}
        description={t("seo.projects.description")}
        path="/projects"
      />
      <section className="mx-auto max-w-max-width px-gutter py-xl">
        <div className="mb-lg border-l-4 border-secondary pl-md">
          <h1 className="mb-xs font-display-lg text-display-lg">
            {t("projects.title")}
          </h1>
          <p className="max-w-2xl font-body-md text-on-surface-variant">
            {t("projects.intro")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-md md:grid-cols-12">
          <div className="project-card group relative overflow-hidden rounded-lg border border-outline-variant bg-surface-container transition-all duration-300 hover:border-secondary/50 md:col-span-8">
            <div className="aspect-video w-full overflow-hidden">
              <img
                alt="FPT LMS"
                className="project-image h-full w-full object-cover transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9UIfIuxeZ7MpiMC4b9Ybt3SQYtg3iCPw1CSFF879zd_DxmrmF28ZklQ2UvYH8aInbvqJmmvXkAzpwF19e62xLUNAGN01jmyO4_8mVnSMc2-sIDrAY24KWd3D1UJRM2dDwrisl3foBMcbWXkgypPFukOEhjpWF4XbP0dbJJTxBqSjzVGQxy9vrrZkfc9JMTvmBMRcn7CrKpJZxt-PK7o9eBWX68RKWChFQAOXEC3ljH0M9XbKTK45DsADiavQjzTHONNpctFtEd2k"
              />
            </div>
            <div className="p-md">
              <div className="mb-xs flex flex-wrap gap-xs">
                <span className="rounded bg-primary-container px-xs py-0.5 font-code-sm text-code-sm text-on-primary-container">
                  Node.js
                </span>
                <span className="rounded bg-primary-container px-xs py-0.5 font-code-sm text-code-sm text-on-primary-container">
                  {t("projects.tagHighLoad")}
                </span>
                <span className="rounded bg-primary-container px-xs py-0.5 font-code-sm text-code-sm text-on-primary-container">
                  MongoDB
                </span>
              </div>
              <h3 className="mb-xs font-headline-lg text-headline-lg">
                {t("projects.fptTitle")}
              </h3>
              <p className="mb-md font-body-md text-on-surface-variant">
                {t("projects.fptDesc")}
              </p>
              <div className="rounded border-l-2 border-secondary bg-surface-container-low p-sm">
                <span className="mb-1 block font-label-caps text-label-caps text-secondary">
                  {t("common.valueDelivered")}
                </span>
                <p className="font-body-md italic text-on-surface">
                  {t("projects.fptValue")}
                </p>
              </div>
            </div>
          </div>

          <div className="project-card group relative overflow-hidden rounded-lg border border-outline-variant bg-surface-container transition-all duration-300 hover:border-secondary/50 md:col-span-4">
            <div className="aspect-square w-full overflow-hidden">
              <img
                alt="Trading"
                className="project-image h-full w-full object-cover transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2S4tTT9r4S_lHz7YV9TF-RVMfrz3mKwehyFV8WqwrEUPzbVWZ9y1rTOrwd-XCBblMyqse1MKH-8Jb2TSmHW8JQC0y7ls1JDDRZZA_ND10AruGLlWQPcFIyxVwRqlbAv3ewBkVQjOhnZzJbHoaeRmJZO0pvwLvFvNMMKvF0OZ9x4J3Rf648eZL6UQXmwRid2iosuwyOZcCPiG7Spp4Aihw4P1qD40GBlfmtm_SKgXljfNt5kNY2qd_ls4tftF7GrG-wyGD3zOQg_M"
              />
            </div>
            <div className="p-md">
              <div className="mb-xs flex flex-wrap gap-xs">
                <span className="rounded bg-primary-container px-xs py-0.5 font-code-sm text-code-sm text-on-primary-container">
                  Real-time
                </span>
                <span className="rounded bg-primary-container px-xs py-0.5 font-code-sm text-code-sm text-on-primary-container">
                  React
                </span>
                <span className="rounded bg-primary-container px-xs py-0.5 font-code-sm text-code-sm text-on-primary-container">
                  WebSocket
                </span>
              </div>
              <h3 className="mb-xs font-headline-lg text-headline-lg-mobile">
                {t("projects.tradeTitle")}
              </h3>
              <p className="mb-md font-body-md text-sm text-on-surface-variant">
                {t("projects.tradeDesc")}
              </p>
              <div className="rounded border-l-2 border-secondary bg-surface-container-low p-sm">
                <span className="mb-1 block font-label-caps text-label-caps text-secondary">
                  {t("common.valueDelivered")}
                </span>
                <p className="font-body-md italic text-sm text-on-surface">
                  {t("projects.tradeValue")}
                </p>
              </div>
            </div>
          </div>

          <div className="project-card group relative overflow-hidden rounded-lg border border-outline-variant bg-surface-container transition-all duration-300 hover:border-secondary/50 md:col-span-4">
            <div className="aspect-video w-full overflow-hidden">
              <img
                alt="AI EdTech"
                className="project-image h-full w-full object-cover transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZudHJ30wCmF7li3zNGInazw02ixVr5HXH-5fmmJP316suqbfhdDA6mv8PybOMtipx_oqBH646AHgCBaDUzUju1gUDR75vdXWuZhQeP1DXgG_EIR9H5tWZtSnHjSLJ9Wk82pRguKykpQyDYLQrSy1DCLs4CeJLQ3fDmdnBrUIAla-hgTxI24SPTrQHF_rppedrPpO3bQiEZOXeyOzO4_nFqytmIITzw5OAvxEPPbtJ21fyxmm_8vCXjTiZA0aX-QIN2vsH2T3Uog0"
              />
            </div>
            <div className="p-md">
              <div className="mb-xs flex flex-wrap gap-xs">
                <span className="rounded bg-primary-container px-xs py-0.5 font-code-sm text-code-sm text-on-primary-container">
                  AI/ML
                </span>
                <span className="rounded bg-primary-container px-xs py-0.5 font-code-sm text-code-sm text-on-primary-container">
                  Next.js
                </span>
                <span className="rounded bg-primary-container px-xs py-0.5 font-code-sm text-code-sm text-on-primary-container">
                  Python
                </span>
              </div>
              <h3 className="mb-xs font-headline-lg text-headline-lg-mobile">
                {t("projects.mindxTitle")}
              </h3>
              <div className="rounded border-l-2 border-secondary bg-surface-container-low p-sm">
                <span className="mb-1 block font-label-caps text-label-caps text-secondary">
                  {t("common.valueDelivered")}
                </span>
                <p className="font-body-md italic text-sm text-on-surface">
                  {t("projects.mindxValue")}
                </p>
              </div>
            </div>
          </div>

          <div className="project-card group relative overflow-hidden rounded-lg border border-outline-variant bg-surface-container transition-all duration-300 hover:border-secondary/50 md:col-span-4">
            <div className="aspect-video w-full overflow-hidden">
              <img
                alt={t("projects.rentImgAlt")}
                className="project-image h-full w-full object-cover transition-transform duration-500"
                src={PROJECT_IMAGES.rentShop}
              />
            </div>
            <div className="p-md">
              <div className="mb-xs flex flex-wrap gap-xs">
                <span className="rounded bg-primary-container px-xs py-0.5 font-code-sm text-code-sm text-on-primary-container">
                  Management
                </span>
                <span className="rounded bg-primary-container px-xs py-0.5 font-code-sm text-code-sm text-on-primary-container">
                  ERP
                </span>
              </div>
              <h3 className="mb-xs font-headline-lg text-headline-lg-mobile">
                {t("projects.rentTitle")}
              </h3>
              <p className="mb-md font-body-md text-sm text-on-surface-variant">
                {t("projects.rentDesc")}
              </p>
              <div className="rounded border-l-2 border-secondary bg-surface-container-low p-sm">
                <span className="mb-1 block font-label-caps text-label-caps text-secondary">
                  {t("common.valueDelivered")}
                </span>
                <p className="font-body-md italic text-sm text-on-surface">
                  {t("projects.rentValue")}
                </p>
              </div>
            </div>
          </div>

          <div className="project-card group relative overflow-hidden rounded-lg border border-outline-variant bg-surface-container transition-all duration-300 hover:border-secondary/50 md:col-span-4">
            <div className="aspect-video w-full overflow-hidden">
              <img
                alt="Japan jobs"
                className="project-image h-full w-full object-cover transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWGtPFJJynN3Sl0zOiFl3YsHV_RlAkPqCRixFvtGc_WZ_8DvQBbEjjuagghq4nthOdp9sxBBJ9kMoRC3RCYZWftLuTNLeCz3nNZ1NPnYinpjI8BcdIJTYL3lc5P-ra_XuSfSv3qXinTRilVN4ks-fUxnz1oEwWrw0Phl-xWGhHpEUFpHI7ZN3i8dsUnzpEc9F_RMBm8IqHcGdbeqTEZEWiDcxL4XYJF0CpeyIZLLlJC2X4QG6yKXmlT55SzQTFH51FY4TOEyLi0Rc"
              />
            </div>
            <div className="p-md">
              <div className="mb-xs flex flex-wrap gap-xs">
                <span className="rounded bg-primary-container px-xs py-0.5 font-code-sm text-code-sm text-on-primary-container">
                  SEO
                </span>
                <span className="rounded bg-primary-container px-xs py-0.5 font-code-sm text-code-sm text-on-primary-container">
                  Nuxt.js
                </span>
              </div>
              <h3 className="mb-xs font-headline-lg text-headline-lg-mobile">
                {t("projects.japanTitle")}
              </h3>
              <div className="rounded border-l-2 border-secondary bg-surface-container-low p-sm">
                <span className="mb-1 block font-label-caps text-label-caps text-secondary">
                  {t("common.valueDelivered")}
                </span>
                <p className="font-body-md italic text-sm text-on-surface">
                  {t("projects.japanValue")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-max-width px-gutter py-xl text-center">
        <div className="rounded-xl border border-outline-variant bg-surface-container-high p-lg">
          <h2 className="mb-md font-headline-lg text-headline-lg">
            {t("projects.ctaTitle")}
          </h2>
          <p className="mx-auto mb-lg font-body-md text-on-surface-variant">
            {t("projects.ctaBody")}
          </p>
          <div className="flex flex-col justify-center gap-md md:flex-row">
            <a
              className="rounded-lg bg-secondary px-lg py-sm font-label-caps text-label-caps text-on-secondary transition-all hover:brightness-110 active:scale-95"
              href="mailto:khoatranpc603@gmail.com"
            >
              {t("projects.ctaContact")}
            </a>
            <Link
              to="/experience"
              className="rounded-lg border border-outline px-lg py-sm font-label-caps text-label-caps text-on-surface transition-all hover:bg-surface-container-low active:scale-95"
            >
              {t("projects.ctaExperience")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
