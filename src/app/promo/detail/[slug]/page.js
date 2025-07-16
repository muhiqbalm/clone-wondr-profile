// app/promo/detail/[slug]/page.tsx

import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  return {
    title: `Promo: ${slug}`,
  };
}

async function fetchPromoDetail(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/promo/detail/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function PromoDetailPage({ params }) {
  const data = await fetchPromoDetail(params.slug);

  if (!data) {
    return <div>Promo tidak ditemukan</div>;
  }

  return (
    <div className="col-12 px-4 py-8 mx-[94px]">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="flex flex-wrap space-x-2 text-sm text-gray-700">
          <li>
            <a
              href="/"
              rel="canonical"
              className="text-gray-800 hover:underline"
            >
              Home
            </a>
            <span className="mx-1">/</span>
          </li>
          <li>
            <a
              href="/promo"
              rel="canonical"
              className="text-gray-800 hover:underline"
            >
              Promo
            </a>
            <span className="mx-1">/</span>
          </li>
          <li>
            <a
              href="/promo/kategori/miscellaneous"
              rel="canonical"
              className="text-gray-800 hover:underline"
            >
              Miscellaneous
            </a>
            <span className="mx-1">/</span>
          </li>
          <li
            aria-current="page"
            className="text-breadcumb-active text-blue-500 hover:text-blue-700"
          >
            {data.title}
          </li>
        </ol>
      </nav>

      <img
        src={data.image}
        alt={data.title}
        style={{ width: "100%" }}
        className="rounded"
      />
      <h1 className="mt-4 text-2xl font-bold">{data.title}</h1>
      <h2 className="mt-2 text-semibold text-gray-700">{data.subtitle}</h2>

      <hr className="my-4 border border-dashed border-gray-300" />
      <div>
        <i className="fa-regular fa-calendar"></i> <span>{data.period}</span>
      </div>
      <hr className="my-4 border border-dashed border-gray-300" />

      <div className="w-full flex justify-center">
        <Link
          href="https://wondr.bni.co.id/?idReferral=cBCFIQxrF8DImWeVHQj8X&idProgram=REFS539640"
          className="rounded-full bg-[#e45300] border border-[#e45300] cursor-pointer hover:bg-transparent hover:text-[#e45300] focus:bg-blue-500  focus:border-blue-500 focus:text-white font-semibold transition mb-2 w-[700px] py-2 text-white flex justify-center"
        >
          Download wondr by BNI
        </Link>
      </div>

      <div className="card rounded-none p-3 mt-3 border-0">
        <h2 className="mt-2 mb-3 text-base font-bold">Syarat dan Ketentuan</h2>
        <ul className="list-disc pl-5 space-y-2">
          {data.terms.map((term, i) => (
            <li key={i}>
              {/* pastikan term.text benar-benar string */}
              <div dangerouslySetInnerHTML={{ __html: term.text }} />
              {term.image && (
                <img
                  src={term.image}
                  alt={`Term image ${i}`}
                  className="mt-2 max-w-full rounded"
                />
              )}
            </li>
          ))}
        </ul>

        {data.usageInstructions?.length > 0 && (
          <>
            <p className="mt-6 font-bold">Cara Penggunaan Voucher:</p>
            <ul className="list-disc pl-5 space-y-2">
              {data.usageInstructions.map((step, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: step }} />
              ))}
            </ul>
          </>
        )}

        <p className="my-4">
          Tingkatkan saldo &amp; transaksi dengan Kartu Debit dan wondr by BNI!
          Raih kesempatan memenangkan undian <strong>rejeki wondr BNI!</strong>
        </p>

        <p className="mb-4">
          Buat kamu yang belum punya rekening BNI, segera buka tabungan lewat{" "}
          <strong>Wondr by BNI</strong>.<br />
          Download sekarang dan nikmati berbagai keuntungannya!
          <br />
          Info lengkap cek
          <a
            href="https://www.bni.co.id/id-id/beranda/promoacara/promoperbankan/articleid/24641?utm_source=general&utm_medium=organik&utm_campaign=campaign_rejeki_wondr_bni&utm_term=campaign&utm_content=general"
            target="_blank"
            rel="noopener noreferrer"
          >
            di sini
          </a>
          .
        </p>

        <p>
          Info lebih lanjut hubungi <strong>BNI Call 1500046</strong>
        </p>
      </div>

      <hr className="my-4 border border-dashed border-gray-400" />

      <div className="bg-white rounded-none p-3 mt-3 shadow-none border-0">
        <h2 className="font-bold text-base">BNI Experience Team</h2>
        <div className="mt-2">
          BNI Experience is your everyday life companion that makes your life
          easier! It allows you to find nearest ATM and Branch for fulfilling
          your financial service needs. You won't miss any benefit as BNI
          customer because it also lets you know many promotions and discounts
          from BNI merchants. Enjoy your life experience with BNI experience!
        </div>
      </div>
    </div>
  );
}
