import { NextResponse } from "next/server";

const promoDatabase = {
  "dapatkan-e-voucher-gopay-rp25000-efwivb": {
    title: "Dapatkan e-Voucher GoPay Rp25.000",
    subtitle:
      "Transfer BI-FAST, SKN (Sistem Kliring Nasional), dan RTOL (Real Time Online) dengan wondr by BNI",
    image:
      "https://admin.bniexperience.com/uploads/f201bf994c28d94e4e131eb19979e17d.webp",
    period: "Periode 5 - 31 Juli 2025",
    applyUrl: "https://referral-wondr.bni.co.id/fQPW",
    terms: [
      {
        text: "Dapatkan e-Voucher GoPay Rp25.000 untuk Nasabah yang melakukan minimal 5 (lima) kali transfer BI-FAST, SKN dan RTOL minimum total transaksi Rp500.000 dengan wondr by BNI.",
      },
      {
        text: "Berlaku untuk Pengguna Baru wondr by BNI yang pertama kali melakukan aktivasi selama periode 5 - 31 Juli 2025.",
      },
      {
        text: "Kuota promo 8.000 Pengguna tercepat sesuai ketentuan selama periode program.",
        image:
          "https://admin.bniexperience.com/uploads/cde7b019e467e03871f88bbe04cde328.png",
      },
      {
        text: "Frekuensi transaksi yang diperhitungkan adalah transaksi yang dilakukan dalam satu periode.",
      },
      {
        text: "e-Voucher akan dikirimkan ke nomor Nasabah melalui WhatsApp resmi BNI.",
      },
      {
        text: "Promo tidak berlaku untuk karyawan BNI.",
      },
      {
        text: "Program tidak berlaku kelipatan dan hanya 1x/user/periode.",
      },
      {
        text: "Program tidak dapat digabungkan dengan Program lain di periode HUT BNI.",
      },
      {
        text: "Contoh e-Voucher GoPay yang akan diterima Nasabah:",
      },
    ],
    usageInstructions: [
      "Nasabah akan mendapatkan e-voucher berupa URL link melalui WhatsApp resmi BNI.",
      "Klik URL link untuk menggunakan voucher.",
      "Klik “Redeem Voucher” untuk menampilkan QR Code Voucher.",
    ],
    additionalInfo:
      "Tingkatkan saldo & transaksi dengan Kartu Debit dan wondr by BNI!",
    contact: "BNI Call 1500046",
    teamInfo: {
      name: "BNI Experience Team",
      description: "BNI Experience is your everyday life companion...",
    },
  },
};

export async function GET(req, context) {
  const { slug } = await context.params;

  const promo = promoDatabase[slug];

  if (!promo) {
    return NextResponse.json({ error: "Promo not found" }, { status: 404 });
  }

  return NextResponse.json(promo);
}
