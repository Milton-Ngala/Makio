import React, { useState } from 'react';
import { ExternalLink, Heart, MessageCircle, Camera, MapPin } from 'lucide-react';
import { InstagramOutlined } from '@ant-design/icons';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
  location: string;
  category: string;
};

const galleryImages: GalleryImage[] = [
  // --- Accommodation: Diani Sea Resort ---
  { id: 1, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316760/Diani_4_pxb5ck.jpg", alt: "Diani Sea Resort", caption: "Diani Sea Resort", location: "South Coast of Kenya", category: "Accommodation" },
  { id: 2, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316759/Diani_3_ggmzsn.jpg", alt: "Diani Sea Resort", caption: "Diani Sea Resort", location: "South Coast of Kenya", category: "Accommodation" },
  { id: 3, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316756/Diani_10_vynnxp.jpg", alt: "Diani Sea Resort", caption: "Diani Sea Resort", location: "South Coast of Kenya", category: "Accommodation" },
  { id: 4, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316755/Diani_9_kcnhvt.jpg", alt: "Diani Sea Resort", caption: "Diani Sea Resort", location: "South Coast of Kenya", category: "Accommodation" },
  { id: 5, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316754/Diani_2_j0quj8.jpg", alt: "Diani Sea Resort", caption: "Diani Sea Resort", location: "South Coast of Kenya", category: "Accommodation" },
  { id: 6, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316754/Diani_7_q540ee.jpg", alt: "Diani Sea Resort", caption: "Diani Sea Resort", location: "South Coast of Kenya", category: "Accommodation" },
  { id: 7, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316753/Diani_8_y7trif.jpg", alt: "Diani Sea Resort", caption: "Diani Sea Resort", location: "South Coast of Kenya", category: "Accommodation" },
  { id: 8, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316753/Diani_1_m6c66l.jpg", alt: "Diani Sea Resort", caption: "Diani Sea Resort", location: "South Coast of Kenya", category: "Accommodation" },
  { id: 9, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316752/Diani_5_y5rq9b.jpg", alt: "Diani Sea Resort", caption: "Diani Sea Resort", location: "South Coast of Kenya", category: "Accommodation" },
  { id: 10, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316752/Diani_6_gazxny.jpg", alt: "Diani Sea Resort", caption: "Diani Sea Resort", location: "South Coast of Kenya", category: "Accommodation" },

  // --- Accommodation: Kibo Safari Lodge ---
  { id: 11, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316835/Kibo_12_g47vhe.jpg", alt: "Kibo Safari Lodge", caption: "Kibo Safari Lodge", location: "Amboseli, Kenya", category: "Accommodation" },
  { id: 12, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316831/Kibo_9_ikoiim.jpg", alt: "Kibo Safari Lodge", caption: "Kibo Safari Lodge", location: "Amboseli, Kenya", category: "Accommodation" },
  { id: 13, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316829/Kibo_11_x62m1f.jpg", alt: "Kibo Safari Lodge", caption: "Kibo Safari Lodge", location: "Amboseli, Kenya", category: "Accommodation" },
  { id: 14, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316829/Kibo_6_vvqafi.jpg", alt: "Kibo Safari Lodge", caption: "Kibo Safari Lodge", location: "Amboseli, Kenya", category: "Accommodation" },
  { id: 15, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316828/Kibo_10_cbxu7x.jpg", alt: "Kibo Safari Lodge", caption: "Kibo Safari Lodge", location: "Amboseli, Kenya", category: "Accommodation" },
  { id: 16, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316827/Kibo_7_wyh5bq.jpg", alt: "Kibo Safari Lodge", caption: "Kibo Safari Lodge", location: "Amboseli, Kenya", category: "Accommodation" },
  { id: 17, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316827/Kibo_8_uuavpc.jpg", alt: "Kibo Safari Lodge", caption: "Kibo Safari Lodge", location: "Amboseli, Kenya", category: "Accommodation" },
  { id: 18, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316827/Kibo_2_uig5nh.jpg", alt: "Kibo Safari Lodge", caption: "Kibo Safari Lodge", location: "Amboseli, Kenya", category: "Accommodation" },
  { id: 19, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316827/Kibo_3_whltme.jpg", alt: "Kibo Safari Lodge", caption: "Kibo Safari Lodge", location: "Amboseli, Kenya", category: "Accommodation" },
  { id: 20, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316826/Kibo_5_bzrmzm.jpg", alt: "Kibo Safari Lodge", caption: "Kibo Safari Lodge", location: "Amboseli, Kenya", category: "Accommodation" },
  { id: 21, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316825/Kibo_1_ceqnfb.jpg", alt: "Kibo Safari Lodge", caption: "Kibo Safari Lodge", location: "Amboseli, Kenya", category: "Accommodation" },
  { id: 22, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316825/Kibo_4_lwfhsh.jpg", alt: "Kibo Safari Lodge", caption: "Kibo Safari Lodge", location: "Amboseli, Kenya", category: "Accommodation" },

  // --- Accommodation: Kilaguni Serena Safari Lodge ---
  { id: 23, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316890/Kilaguni_4_k5unpg.jpg", alt: "Kilaguni Serena Safari Lodge", caption: "Kilaguni Serena Safari Lodge", location: "Tsavo West, Kenya", category: "Accommodation" },
  { id: 24, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316890/Kilaguni_8_aznxrf.jpg", alt: "Kilaguni Serena Safari Lodge", caption: "Kilaguni Serena Safari Lodge", location: "Tsavo West, Kenya", category: "Accommodation" },
  { id: 25, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316889/Kilaguni_9_zvdmpg.jpg", alt: "Kilaguni Serena Safari Lodge", caption: "Kilaguni Serena Safari Lodge", location: "Tsavo West, Kenya", category: "Accommodation" },
  { id: 26, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316889/Kilaguni_7_xpo6mu.jpg", alt: "Kilaguni Serena Safari Lodge", caption: "Kilaguni Serena Safari Lodge", location: "Tsavo West, Kenya", category: "Accommodation" },
  { id: 27, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316888/Kilaguni_5_aq7i9l.jpg", alt: "Kilaguni Serena Safari Lodge", caption: "Kilaguni Serena Safari Lodge", location: "Tsavo West, Kenya", category: "Accommodation" },
  { id: 28, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316887/Kilaguni_6_zo9bwm.jpg", alt: "Kilaguni Serena Safari Lodge", caption: "Kilaguni Serena Safari Lodge", location: "Tsavo West, Kenya", category: "Accommodation" },
  { id: 29, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316886/Kilaguni_2_a637ly.jpg", alt: "Kilaguni Serena Safari Lodge", caption: "Kilaguni Serena Safari Lodge", location: "Tsavo West, Kenya", category: "Accommodation" },
  { id: 30, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316885/Kilaguni_3_gmzze4.jpg", alt: "Kilaguni Serena Safari Lodge", caption: "Kilaguni Serena Safari Lodge", location: "Tsavo West, Kenya", category: "Accommodation" },
  { id: 31, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316885/Kilaguni_1_ixkmtp.jpg", alt: "Kilaguni Serena Safari Lodge", caption: "Kilaguni Serena Safari Lodge", location: "Tsavo West, Kenya", category: "Accommodation" },

  // --- Accommodation: Mara Serena Safari Lodge ---
  { id: 32, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316989/Serena_18_lgsial.jpg", alt: "Mara Serena Safari Lodge", caption: "Mara Serena Safari Lodge", location: "Maasai Mara Game Reserve, Kenya", category: "Accommodation" },
  { id: 33, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316988/Serena_12_srivag.jpg", alt: "Mara Serena Safari Lodge", caption: "Mara Serena Safari Lodge", location: "Maasai Mara Game Reserve, Kenya", category: "Accommodation" },
  { id: 34, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316986/Serena_16_tbvjnl.jpg", alt: "Mara Serena Safari Lodge", caption: "Mara Serena Safari Lodge", location: "Maasai Mara Game Reserve, Kenya", category: "Accommodation" },
  { id: 35, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316986/Serena_17_xfcgap.jpg", alt: "Mara Serena Safari Lodge", caption: "Mara Serena Safari Lodge", location: "Maasai Mara Game Reserve, Kenya", category: "Accommodation" },
  { id: 36, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316985/Serena_11_quudaw.jpg", alt: "Mara Serena Safari Lodge", caption: "Mara Serena Safari Lodge", location: "Maasai Mara Game Reserve, Kenya", category: "Accommodation" },
  { id: 37, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316984/Serena_6_slq9kx.jpg", alt: "Mara Serena Safari Lodge", caption: "Mara Serena Safari Lodge", location: "Maasai Mara Game Reserve, Kenya", category: "Accommodation" },
  { id: 38, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316983/Serena_14_iweucm.jpg", alt: "Mara Serena Safari Lodge", caption: "Mara Serena Safari Lodge", location: "Maasai Mara Game Reserve, Kenya", category: "Accommodation" },
  { id: 39, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316983/Serena_13_ipvyoc.jpg", alt: "Mara Serena Safari Lodge", caption: "Mara Serena Safari Lodge", location: "Maasai Mara Game Reserve, Kenya", category: "Accommodation" },
  { id: 40, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316982/Serena_15_t1fput.jpg", alt: "Mara Serena Safari Lodge", caption: "Mara Serena Safari Lodge", location: "Maasai Mara Game Reserve, Kenya", category: "Accommodation" },
  { id: 41, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316980/Serena_7_ger29m.jpg", alt: "Mara Serena Safari Lodge", caption: "Mara Serena Safari Lodge", location: "Maasai Mara Game Reserve, Kenya", category: "Accommodation" },
  { id: 42, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316979/Serena_10_jpubpn.jpg", alt: "Mara Serena Safari Lodge", caption: "Mara Serena Safari Lodge", location: "Maasai Mara Game Reserve, Kenya", category: "Accommodation" },
  { id: 43, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316977/Serena_9_ebj8bh.jpg", alt: "Mara Serena Safari Lodge", caption: "Mara Serena Safari Lodge", location: "Maasai Mara Game Reserve, Kenya", category: "Accommodation" },
  { id: 44, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316976/Serena_3_h2vpo8.jpg", alt: "Mara Serena Safari Lodge", caption: "Mara Serena Safari Lodge", location: "Maasai Mara Game Reserve, Kenya", category: "Accommodation" },
  { id: 45, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316975/Serena_8_y2irkf.jpg", alt: "Mara Serena Safari Lodge", caption: "Mara Serena Safari Lodge", location: "Maasai Mara Game Reserve, Kenya", category: "Accommodation" },
  { id: 46, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316973/Serena_2_kxkbib.jpg", alt: "Mara Serena Safari Lodge", caption: "Mara Serena Safari Lodge", location: "Maasai Mara Game Reserve, Kenya", category: "Accommodation" },
  { id: 47, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316973/Serena_1_tfogi2.jpg", alt: "Mara Serena Safari Lodge", caption: "Mara Serena Safari Lodge", location: "Maasai Mara Game Reserve, Kenya", category: "Accommodation" },
  { id: 48, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316972/Serena_4_hope1v.jpg", alt: "Mara Serena Safari Lodge", caption: "Mara Serena Safari Lodge", location: "Maasai Mara Game Reserve, Kenya", category: "Accommodation" },
  { id: 49, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756316972/Serena_5_ei2euf.jpg", alt: "Mara Serena Safari Lodge", caption: "Mara Serena Safari Lodge", location: "Maasai Mara Game Reserve, Kenya", category: "Accommodation" },

  // --- Accommodation: Mbweha Camp ---
  { id: 50, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317051/Mbweha_7_zb89mq.jpg", alt: "Mbweha Camp", caption: "Mbweha Camp", location: "Lake Nakuru, Kenya", category: "Accommodation" },
  { id: 51, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317051/Mbweha_4_lxhuuh.jpg", alt: "Mbweha Camp", caption: "Mbweha Camp", location: "Lake Nakuru, Kenya", category: "Accommodation" },
  { id: 52, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317049/Mbweha_6_byva6l.jpg", alt: "Mbweha Camp", caption: "Mbweha Camp", location: "Lake Nakuru, Kenya", category: "Accommodation" },
  { id: 53, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317046/Mbweha_3_iayrsz.jpg", alt: "Mbweha Camp", caption: "Mbweha Camp", location: "Lake Nakuru, Kenya", category: "Accommodation" },
  { id: 54, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317046/Mbweha_2_wcfmv8.jpg", alt: "Mbweha Camp", caption: "Mbweha Camp", location: "Lake Nakuru, Kenya", category: "Accommodation" },
  { id: 55, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317045/Mbweha_5_ejwzzx.jpg", alt: "Mbweha Camp", caption: "Mbweha Camp", location: "Lake Nakuru, Kenya", category: "Accommodation" },
  { id: 56, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317042/Mbweha_1_dtcgt2.jpg", alt: "Mbweha Camp", caption: "Mbweha Camp", location: "Lake Nakuru, Kenya", category: "Accommodation" },

  // --- Accommodation: Oseki Maasai Mara Camp ---
  { id: 57, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317108/Oseki_10_wjuvip.jpg", alt: "Oseki Maasai Mara Camp", caption: "Oseki Maasai Mara Camp", location: "Narok, Kenya", category: "Accommodation" },
  { id: 58, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317103/Oseki_9_m0hg4h.jpg", alt: "Oseki Maasai Mara Camp", caption: "Oseki Maasai Mara Camp", location: "Narok, Kenya", category: "Accommodation" },
  { id: 59, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317102/Oseki_8_tdxqg7.jpg", alt: "Oseki Maasai Mara Camp", caption: "Oseki Maasai Mara Camp", location: "Narok, Kenya", category: "Accommodation" },
  { id: 60, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317101/Oseki_7_jaixpa.jpg", alt: "Oseki Maasai Mara Camp", caption: "Oseki Maasai Mara Camp", location: "Narok, Kenya", category: "Accommodation" },
  { id: 61, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317100/Oseki_6_wlkhwv.jpg", alt: "Oseki Maasai Mara Camp", caption: "Oseki Maasai Mara Camp", location: "Narok, Kenya", category: "Accommodation" },
  { id: 62, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317097/Oseki_5_aitmby.jpg", alt: "Oseki Maasai Mara Camp", caption: "Oseki Maasai Mara Camp", location: "Narok, Kenya", category: "Accommodation" },
  { id: 63, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317096/Oseki_4_azvk1i.jpg", alt: "Oseki Maasai Mara Camp", caption: "Oseki Maasai Mara Camp", location: "Narok, Kenya", category: "Accommodation" },
  { id: 64, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317095/Oseki_2_vuciu9.jpg", alt: "Oseki Maasai Mara Camp", caption: "Oseki Maasai Mara Camp", location: "Narok, Kenya", category: "Accommodation" },
  { id: 65, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317095/Oseki_3_jbzdv5.jpg", alt: "Oseki Maasai Mara Camp", caption: "Oseki Maasai Mara Camp", location: "Narok, Kenya", category: "Accommodation" },
  { id: 66, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317094/Oseki_1_ypo8ae.jpg", alt: "Oseki Maasai Mara Camp", caption: "Oseki Maasai Mara Camp", location: "Narok, Kenya", category: "Accommodation" },

  // --- Beach ---
  { id: 67, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317276/Beach_13_ifqyrv.jpg", alt: "Beach", caption: "Beach", location: "Kenya Coast", category: "Beach" },
  { id: 68, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317258/Beach_11_aegkyo.jpg", alt: "Beach", caption: "Beach", location: "Kenya Coast", category: "Beach" },
  { id: 69, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317258/Beach_12_novc8u.jpg", alt: "Beach", caption: "Beach", location: "Kenya Coast", category: "Beach" },
  { id: 70, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317254/Beach_10_ykcyzg.jpg", alt: "Beach", caption: "Beach", location: "Kenya Coast", category: "Beach" },
  { id: 71, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317252/Beach_9_ga58xy.jpg", alt: "Beach", caption: "Beach", location: "Kenya Coast", category: "Beach" },
  { id: 72, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317250/Beach_7_rraypu.jpg", alt: "Beach", caption: "Beach", location: "Kenya Coast", category: "Beach" },
  { id: 73, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317249/Beach_8_alwuix.jpg", alt: "Beach", caption: "Beach", location: "Kenya Coast", category: "Beach" },
  { id: 74, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317245/Beach_6_yisims.jpg", alt: "Beach", caption: "Beach", location: "Kenya Coast", category: "Beach" },
  { id: 75, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317243/Beach_5_u9qiek.jpg", alt: "Beach", caption: "Beach", location: "Kenya Coast", category: "Beach" },
  { id: 76, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317242/Beach_3_er00il.jpg", alt: "Beach", caption: "Beach", location: "Kenya Coast", category: "Beach" },
  { id: 77, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317241/Beach_4_gfdrzy.jpg", alt: "Beach", caption: "Beach", location: "Kenya Coast", category: "Beach" },
  { id: 78, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317239/Beach_2_riqp2y.jpg", alt: "Beach", caption: "Beach", location: "Kenya Coast", category: "Beach" },
  { id: 79, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317238/Beach_1_afhavo.jpg", alt: "Beach", caption: "Beach", location: "Kenya Coast", category: "Beach" },

  // --- Culture ---
  { id: 80, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317365/Culture_9_h5sbro.jpg", alt: "Culture", caption: "Culture", location: "Kenya", category: "Culture" },
  { id: 81, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317360/Culture_10_yipolh.jpg", alt: "Culture", caption: "Culture", location: "Kenya", category: "Culture" },
  { id: 82, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317359/Culture_8_ttqujk.jpg", alt: "Culture", caption: "Culture", location: "Kenya", category: "Culture" },
  { id: 83, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317357/Culture_1_mawds0.jpg", alt: "Culture", caption: "Culture", location: "Kenya", category: "Culture" },
  { id: 84, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317356/Culture_11_o4dfzn.jpg", alt: "Culture", caption: "Culture", location: "Kenya", category: "Culture" },
  { id: 85, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317354/Culture_4_fk9yia.jpg", alt: "Culture", caption: "Culture", location: "Kenya", category: "Culture" },
  { id: 86, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317352/Culture_7_r0yc3e.jpg", alt: "Culture", caption: "Culture", location: "Kenya", category: "Culture" },
  { id: 87, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317350/Culture_3_wkwegf.jpg", alt: "Culture", caption: "Culture", location: "Kenya", category: "Culture" },
  { id: 88, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317349/Culture_6_zf8ub7.jpg", alt: "Culture", caption: "Culture", location: "Kenya", category: "Culture" },
  { id: 89, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317343/Culture_2_oammxe.jpg", alt: "Culture", caption: "Culture", location: "Kenya", category: "Culture" },
  { id: 90, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756317342/Culture_5_xcexq1.jpg", alt: "Culture", caption: "Culture", location: "Kenya", category: "Culture" },

  // --- Landscapes ---
  { id: 91, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030421/Makio_142_fpzaxc.jpg", alt: "Landscapes", caption: "Landscapes", location: "Kenya", category: "Landscapes" },
  { id: 92, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030418/Makio_138_l70ciq.jpg", alt: "Landscapes", caption: "Landscapes", location: "Kenya", category: "Landscapes" },
  { id: 93, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030387/Makio_129_ms9bpf.jpg", alt: "Landscapes", caption: "Landscapes", location: "Kenya", category: "Landscapes" },
  { id: 94, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030383/Makio_125_y2aicm.jpg", alt: "Landscapes", caption: "Landscapes", location: "Kenya", category: "Landscapes" },
  { id: 95, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030346/Makio_117_a80fs2.jpg", alt: "Landscapes", caption: "Landscapes", location: "Kenya", category: "Landscapes" },
  { id: 96, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030333/Makio_103_wzersl.jpg", alt: "Landscapes", caption: "Landscapes", location: "Kenya", category: "Landscapes" },
  { id: 97, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030243/Makio_67_owwjgf.jpg", alt: "Landscapes", caption: "Landscapes", location: "Kenya", category: "Landscapes" },

  // --- Birds ---
  { id: 98, src: "https://res.cloudinary.com/dqokf2vgg/image/upload/v1751569195/Lake_Nakuru_Naivasha_trekvq.jpg", alt: "Birds", caption: "Birds", location: "Kenya", category: "Birds" },



  // --- Safari Life ---
  { id: 99, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030209/Makio_56_hyiezn.jpg", alt: "Safari Life", caption: "Safari Life", location: "Kenya", category: "Safari Life" },
  { id: 100, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030205/Makio_50_eg6ctn.jpg", alt: "Safari Life", caption: "Safari Life", location: "Kenya", category: "Safari Life" },
  { id: 101, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030204/Makio_53_e4fbrz.jpg", alt: "Safari Life", caption: "Safari Life", location: "Kenya", category: "Safari Life" },
  { id: 102, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030196/Makio_41_tsqobz.jpg", alt: "Safari Life", caption: "Safari Life", location: "Kenya", category: "Safari Life" },
  { id: 103, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030188/Makio_31_ahnn6v.jpg", alt: "Safari Life", caption: "Safari Life", location: "Kenya", category: "Safari Life" },
  { id: 104, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030192/Makio_32_zf7qer.jpg", alt: "Safari Life", caption: "Safari Life", location: "Kenya", category: "Safari Life" },
  { id: 105, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030157/Makio_1_r3q6iy.jpg", alt: "Safari Life", caption: "Safari Life", location: "Kenya", category: "Safari Life" },
  { id: 106, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030161/Makio_2_equhip.jpg", alt: "Safari Life", caption: "Safari Life", location: "Kenya", category: "Safari Life" },
  { id: 107, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030201/Makio_43_k5pqeb.jpg", alt: "Safari Life", caption: "Safari Life", location: "Kenya", category: "Safari Life" },
  { id: 108, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030197/Makio_27_gl2xmh.jpg", alt: "Safari Life", caption: "Safari Life", location: "Kenya", category: "Safari Life" },
  { id: 109, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030191/Makio_33_vwqxhy.jpg", alt: "Safari Life", caption: "Safari Life", location: "Kenya", category: "Safari Life" },
 
  // --- Wildlife ---
  { id: 110, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030213/Makio_55_zcuspb.jpg", alt: "Wildlife", caption: "Wildlife", location: "Kenya", category: "Wildlife" },
  { id: 111, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030206/Makio_52_ojhdvh.jpg", alt: "Wildlife", caption: "Wildlife", location: "Kenya", category: "Wildlife" },
  { id: 112, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030194/Makio_39_s3nkge.jpg", alt: "Wildlife", caption: "Wildlife", location: "Kenya", category: "Wildlife" },
  { id: 113, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030191/Makio_33_vwqxhy.jpg", alt: "Wildlife", caption: "Wildlife", location: "Kenya", category: "Wildlife" },
  { id: 114, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030190/Makio_28_xcdgjd.jpg", alt: "Wildlife", caption: "Wildlife", location: "Kenya", category: "Wildlife" },
  { id: 115, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030184/Makio_26_xlsj7b.jpg", alt: "Wildlife", caption: "Wildlife", location: "Kenya", category: "Wildlife" },
  { id: 116, src: "https://res.cloudinary.com/drnm7slkt/image/upload/v1756030238/Makio_59_oqamqs.jpg", alt: "Wildlife", caption: "Wildlife", location: "Kenya", category: "Wildlife" },
];


const categories = ["All", "Wildlife", "Beach", "Landscapes", "Accommodation", "Birds", "Culture", "Safari Life"];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openInstagram = () => {
    window.open('https://www.instagram.com/makio_tours_and_travel', '_blank');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-safari-green to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-montserrat font-bold mb-6">
              Safari <span className="text-sunset-gold">Gallery</span>
            </h1>
            <p className="text-xl font-opensans max-w-3xl mx-auto mb-8">
              Get inspired by breathtaking moments captured during our safari adventures. 
              Follow us on Instagram for daily wildlife photography.
            </p>
            
            <button 
              onClick={openInstagram}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-opensans font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group"
            >
              <InstagramOutlined className="mr-2 h-5 w-5" style={{fontSize: '24px'}} />
              Follow us now
              <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-opensans font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-safari-green text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
            <div>
              <div className="text-3xl font-montserrat font-bold text-safari-green mb-2">500+</div>
              <div className="font-opensans text-gray-600">Photos Captured</div>
            </div>
            <div>
              <div className="text-3xl font-montserrat font-bold text-safari-green mb-2">10+</div>
              <div className="font-opensans text-gray-600">Locations Visited</div>
            </div>
            <div>
              <div className="text-3xl font-montserrat font-bold text-safari-green mb-2">5+</div>
              <div className="font-opensans text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-montserrat font-bold text-safari-green mb-2">10K+</div>
              <div className="font-opensans text-gray-600">Instagram Followers</div>
            </div>
          </div>

          {/* Masonry Gallery */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                className="break-inside-avoid bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Camera className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-safari-green text-white px-3 py-1 rounded-full text-sm font-opensans font-semibold">
                    {image.category}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="font-opensans text-sm">{image.location}</span>
                  </div>
                  <p className="font-opensans text-gray-700 mb-3">{image.caption}</p>
                  <div className="flex items-center space-x-4 text-gray-500">
                    {/* <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1 text-red-500" />
                      <span className="font-opensans text-sm">{image.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span className="font-opensans text-sm">{image.comments}</span>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-safari-green to-green-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              Want to See More Amazing Wildlife Photos?
            </h3>
            <p className="text-lg font-opensans mb-6 max-w-2xl mx-auto">
              Follow our Instagram for daily safari updates, wildlife photography tips, 
              and behind-the-scenes content from our adventures.
            </p>
            <button 
              onClick={openInstagram}
              className="bg-sunset-gold hover:bg-yellow-500 text-gray-900 font-opensans font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group"
            >
              <InstagramOutlined className="mr-2 h-5 w-5" style={{fontSize: '24px'}}/>
              Follow us now
              <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Modal for selected image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white rounded-2xl max-w-4xl max-h-full overflow-auto" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-safari-green" />
                  <span className="font-opensans font-semibold text-gray-900">{selectedImage.location}</span>
                  <span className="ml-4 bg-safari-green text-white px-3 py-1 rounded-full text-sm font-opensans">
                    {selectedImage.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <p className="font-opensans text-gray-700 mb-4">{selectedImage.caption}</p>
              {/* <div className="flex items-center space-x-6 text-gray-500">
                <div className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-red-500" />
                  <span className="font-opensans">{selectedImage.likes} likes</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  <span className="font-opensans">{selectedImage.comments} comments</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;