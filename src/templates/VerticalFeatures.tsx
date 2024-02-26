import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Other Films"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <VerticalFeatureRow
      title="Indonesia Dari Timur"
      description="Edu (Ibnu Jamil) dan Coach John (Ari Sihasale) berkolaborasi untuk, sebuah project Tim Sepak Bola yang diinisiasi oleh Perusahaan yang dipimpin oleh Edu atas suruhan rekannya Simon (Donny Alamsyah) untuk mengumpulkan kembali putra terbaik Papua, Tim Sepak Bola yang sebelumnya memenangkan Kejuaraan Nasional dan dalam kondisi tercerai-berai, karena kecewa atas bonus yang tidak diberikan oleh Prijanto (Marcelino Leifrand). Terlalu sibuk dengan project ini, Anya (Dinda Ghania) merasa Edu, ayahnya, tidak memberikan perhatian yang cukup, walaupun Anya sudah pindah ke Papua dari Jakarta. Andi (Damara Finsch) yang bukan putra asli papua menjadi pengikat persatuan dari tim ini, sehingga bisa menjadi tim yang solid dan membanggakan."
      image="/assets/images/IndonesiaDariTimur.jpg"
      imageAlt="IndonesiaDariTimur"
    />
    <VerticalFeatureRow
      title="Munkar"
      description="Berusaha menyelamatkan diri dari bully-an yang ia terima, seorang santriwati malah mengalami kecelakaan dan menghilang. Namun tiba-tiba ia kembali ke Pondok Pesantren secara misterius. Sejak itu mulai muncul keanehan dan teror yang berhubungan dengan santriwati tersebut. Guru dan murid-murid di Pondok Pesantren pun mulai mengalami kengerian demi kengerian yang mengancam nyawa."
      image="/assets/images/Munkar.jpg"
      imageAlt="Munkar"
      reverse
    />
    <VerticalFeatureRow
      title="Pemandi Jenazah"
      description="Setelah kehilangan ibunya dalam serangkaian kematian misterius, Lela (Aghniny Haque), seorang pemandi jenazah, berusaha mengungkap kebenaran dengan mengikuti petunjuk saat memandikan setiap korban, namun selama proses itu, dia dihantui oleh roh dan terbebani oleh beban karena tidak mengungkapkan rahasia masa lalu mereka."
      image="/assets/images/PemandiJenazah.jpg"
      imageAlt="PemandiJenazah"
    />
  </Section>
);

export { VerticalFeatures };
