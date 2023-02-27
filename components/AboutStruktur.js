import React from "react"
import styles from "../styles/HomeAbout.module.css"
import Link from "next/link"
function AboutStruktur() {
  return (
    <>
      <div className={styles.halaman}>
        <h1 className={styles.nmablog}>
          Daftar Peserta Musyawarah Kerja Nasional
        </h1>
        <div className={styles.accordion}>
          <div className={styles.contoh}>
            <input
              type="checkbox"
              name="example_acordion"
              id="section1"
              className={styles.accordion__input}
            />
            <label htmlFor="section1" className={styles.accordion__label}>
              MAJELIS PUSAT
            </label>
            <div className={styles.accordion__content}>
              <table className={styles.table1}>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Jabatan</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Pdt. Paul Daniel Massie</td>
                  <td>Ketua Umum</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Pdt. Ariel Massie</td>
                  <td>Kabid Penatalayanan</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Pdt. Danie F. Wulur</td>
                  <td>Kabid Pendidikan & Misi</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Pdt. Samuel St. Silas</td>
                  <td>Kabid Penggembalaan</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Pdt. Ronni Wowor</td>
                  <td>Kabid Pelayanan Masyarakat</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Pdt. Giarto</td>
                  <td>Sekretaris Umum</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Pdt. Victor Philipus Chandra</td>
                  <td>Sekretaris 1</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Pdt. Djems Djemy Kaloh</td>
                  <td>Sekretaris 2</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Pdt. Merryam Jone Onibala</td>
                  <td>Bendahara Umum</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Pdm. Netty Sulaeman</td>
                  <td>Bendahara</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Pdt. Jacky Kembuan</td>
                  <td>Dept. Hukum & Peraturan GSPDI</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Pdm. Ivan Samuel Heydemans</td>
                  <td>Dept. Hubungan Antar Lembaga</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Pdt. Irene Debora Lesar</td>
                  <td>Dept. Pemuda & Anak Hamba Tuhan</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Pdt. Sarah Hetty Sritati</td>
                  <td>Dept. Wanita</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Pdt. Markus Margono Pratigno</td>
                  <td>Dept. Anak Guru Sekolah Minggu</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Pdt. Manahan Uji Simanjuntak</td>
                  <td>Dept. Pendidikan & Pengajaran</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Pdt. Nicolas Ricky Prins Mawuntu</td>
                  <td>Dept. Misi</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Pdt. Serfie Bernard Liando</td>
                  <td>Dept. Penanaman Gereja</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Pdm. Ray Gutafson Manurung</td>
                  <td>Dept. IT, Multimedia & Profesi</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Pdt. Jessy Massie</td>
                  <td>Dept. Diakonia</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Pdt. Donny Wakary</td>
                  <td>Dept. Sosial</td>
                </tr>
              </table>
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              name="example_acordion"
              id="section2"
              className={styles.accordion__input}
            />
            <label htmlFor="section2" className={styles.accordion__label}>
              MAJELIS PEMBINA ROHANI
            </label>
            <div className={styles.accordion__content}>
              <table className={styles.table1}>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Jabatan</th>
                </tr>

                <tr>
                  <td>22</td>
                  <td>Pdt. Mulyadi Sulaeman</td>
                  <td>Ketua</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Pdt. Tono Yoshua Ray</td>
                  <td>Sekretaris</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Pdt. Freddy E. Zacharia</td>
                  <td>Bendahara</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Pdt. Jacky Heydemans</td>
                  <td>Anggota</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Pdt. Johanes Djumari</td>
                  <td>Anggota</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Pdt. Chrisman Hutabarat</td>
                  <td>Anggota</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Pdt. Benny Raya Korompis</td>
                  <td>Anggota</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Pdt. Johny J. Kembuan</td>
                  <td>Anggota</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Pdt. Tommy R. Lesar</td>
                  <td>Anggota</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Pdt. Herry Pramono</td>
                  <td>Anggota</td>
                </tr>
              </table>
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              name="example_acordion"
              id="section3"
              className={styles.accordion__input}
            />
            <label htmlFor="section3" className={styles.accordion__label}>
              MAJELIS DAERAH FILADELFIA 1 – SUMATERA UTARA & ACEH{" "}
            </label>
            <div className={styles.accordion__content}>
              <table className={styles.table1}>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Jabatan</th>
                </tr>

                <tr>
                  <td>32</td>
                  <td>Pdt. Erikson LM. Simamora</td>
                  <td>Ketua</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Pdt. Hisar Gurning</td>
                  <td>Wakil Ketua</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Pdm. Joseph Sianturi</td>
                  <td>Sekretaris</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Pdt. Pascal Jemalut</td>
                  <td>Bendahara</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>Pdm. Gloria Simarmata</td>
                  <td>Biro Wanita & Anak</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>Pdm. Sapril Sianipar</td>
                  <td>Biro Pemuda & Anak Hamba Tuhan</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>Pdt. Rudi Hartono Situmorang</td>
                  <td>Biro Misi & Penginjilan</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>Pdt. Darlin Timothy Siahaan</td>
                  <td>Biro Pendidikan & Pengajaran</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>Pdt. Saur Silalahi</td>
                  <td>Biro Diakonia & Sosial</td>
                </tr>
              </table>
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              name="example_acordion"
              id="section4"
              className={styles.accordion__input}
            />
            <label htmlFor="section4" className={styles.accordion__label}>
              MAJELIS DAERAH FILADELFIA 2 – RIAU{" "}
            </label>
            <div className={styles.accordion__content}>
              <table className={styles.table1}>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Jabatan</th>
                </tr>
                <tr>
                  <td>41</td>
                  <td>Pdt. Ricson Sitorus</td>
                  <td>Ketua</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Pdt. Daniel Sitorus</td>
                  <td>Wakil Ketua Ur. Penatalayanan</td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>Pdt. Pantas Panjaitan</td>
                  <td>Wakil Ketua Ur. Penggembalaan</td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>Pdt. Erni Hutauruk</td>
                  <td>Sekretaris</td>
                </tr>
                <tr>
                  <td>45</td>
                  <td>Pdt. Jhonwesly Siahaan</td>
                  <td>Wakil Sekretaris</td>
                </tr>
                <tr>
                  <td>46</td>
                  <td>Pdt. Juni Anna Silitonga</td>
                  <td>Bendahara</td>
                </tr>
                <tr>
                  <td>47</td>
                  <td>Pdt. Diana Naomi Gultom</td>
                  <td>Wakil Bendahara</td>
                </tr>
                <tr>
                  <td>48</td>
                  <td>Pdm. Daniel Tarihoran</td>
                  <td>Biro Hubungan Antar Lembaga</td>
                </tr>
                <tr>
                  <td>49</td>
                  <td>Pdm. Jeremy Sunday Sitorus</td>
                  <td>Biro Pemuda & Anak Hamba Tuhan</td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>Pdt. Suzana Cheng</td>
                  <td>Biro Wanita, Diakonia & Sosial</td>
                </tr>
                <tr>
                  <td>51</td>
                  <td>Pdm. Kartini Gultom</td>
                  <td>Biro Anak & Guru Sekolah Minggu</td>
                </tr>
                <tr>
                  <td>52</td>
                  <td>Pdt. Ruth Manulang</td>
                  <td>Biro Misi</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>Pdm. Amsal Marbun</td>
                  <td>Biro IT & Multimedia</td>
                </tr>
                <tr>
                  <td>54</td>
                  <td>Pdt. Jusni Tamba</td>
                  <td>Biro Pendidikan</td>
                </tr>
              </table>
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              name="example_acordion"
              id="section5"
              className={styles.accordion__input}
            />
            <label htmlFor="section5" className={styles.accordion__label}>
              MAJELIS DAERAH FILADELFIA 3 – DKI, BANTEN, LAMPUNG, BABEL{" "}
            </label>
            <div className={styles.accordion__content}>
              <table className={styles.table1}>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Jabatan</th>
                </tr>
                <tr>
                  <td>55</td>
                  <td>Pdt. Simon A. Torrys</td>
                  <td>Ketua</td>
                </tr>
                <tr>
                  <td>56</td>
                  <td>Pdm. Netty Sulaeman</td>
                  <td>Wakil Ketua</td>
                </tr>
                <tr>
                  <td>57</td>
                  <td>Pdm. Ivan Heydemans</td>
                  <td>Sekretaris</td>
                </tr>
                <tr>
                  <td>58</td>
                  <td>Pdp. Elsa Maria Sugianto</td>
                  <td>Wakil Sekretaris</td>
                </tr>
                <tr>
                  <td>59</td>
                  <td>Pdm. Krisianty Suhartono</td>
                  <td>Bendahara</td>
                </tr>
                <tr>
                  <td>60</td>
                  <td>Pdt. Phebe Latif</td>
                  <td>Wakil Bendahara</td>
                </tr>
                <tr>
                  <td>61</td>
                  <td>Pdt. Bambang Iman S.</td>
                  <td>Biro Hubungan Antar Lembaga</td>
                </tr>
                <tr>
                  <td>62</td>
                  <td>Pdt. Ricky Mawuntu</td>
                  <td>Biro Misi & Penanaman Gereja</td>
                </tr>
                <tr>
                  <td>63</td>
                  <td>Pdm. Yanti Yap</td>
                  <td>Biro Pemuda & Anak Hamba Tuhan</td>
                </tr>
                <tr>
                  <td>64</td>
                  <td>Pdm. Lena Magdalena W.</td>
                  <td>Biro Wanita</td>
                </tr>
                <tr>
                  <td>65</td>
                  <td>Pdm. Belly Chevren Torris</td>
                  <td>Biro Anak & Guru Sekolah Minggu</td>
                </tr>
                <tr>
                  <td>66</td>
                  <td>Pdm. Heppy Yohanes</td>
                  <td>Biro InhtmlFormasi Teknologi & Multimedia</td>
                </tr>
                <tr>
                  <td>67</td>
                  <td>Pdm. Lauw Merry</td>
                  <td>Biro Diakonia & Sosial</td>
                </tr>
                <tr>
                  <td>68</td>
                  <td>Pdm. Stevanus E. Torrys</td>
                  <td>Biro Pendidikan & Pengajaran</td>
                </tr>
                <tr>
                  <td>69</td>
                  <td>Pdp. Ribka Fransilia</td>
                  <td>Biro Hukum</td>
                </tr>
              </table>
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              name="example_acordion"
              id="section6"
              className={styles.accordion__input}
            />
            <label htmlFor="section6" className={styles.accordion__label}>
              MAJELIS DAERAH FILADELFIA 4 – JAWA BARAT{" "}
            </label>
            <div className={styles.accordion__content}>
              <table className={styles.table1}>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Jabatan</th>
                </tr>
                <tr>
                  <td>70</td>
                  <td>Pdt. Markus Pratigno</td>
                  <td>Ketua</td>
                </tr>
                <tr>
                  <td>71</td>
                  <td>Pdt. Ronni Wowor</td>
                  <td>Wakil Ketua</td>
                </tr>
                <tr>
                  <td>72</td>
                  <td>Pdt. Ariel Massie</td>
                  <td>Sekretaris</td>
                </tr>
                <tr>
                  <td>73</td>
                  <td>Pdm. Daniel Gunawan</td>
                  <td>Wakil Sekretaris</td>
                </tr>
                <tr>
                  <td>74</td>
                  <td>Pdp. Libertina Timotheus Manurung</td>
                  <td>Bendahara</td>
                </tr>
                <tr>
                  <td>75</td>
                  <td>Pdm. Veronicha Nussa</td>
                  <td>Wakil Bendahara</td>
                </tr>
                <tr>
                  <td>76</td>
                  <td>Pdt. John Wesley Onibala</td>
                  <td>Biro Hukum & Hubungan Antar Lembaga</td>
                </tr>
                <tr>
                  <td>77</td>
                  <td>Pdt. Harun Wiyanto</td>
                  <td>Biro Pendidikan & Misi</td>
                </tr>
                <tr>
                  <td>78</td>
                  <td>Pdp. Yemima CM. Korompis</td>
                  <td>Biro Pemuda & Anak Hamba Tuhan</td>
                </tr>
                <tr>
                  <td>79</td>
                  <td>Pdt. Senny Rosiany Korompis</td>
                  <td>Biro Wanita</td>
                </tr>
                <tr>
                  <td>80</td>
                  <td>Pdp. Sanni Simare mare</td>
                  <td>Biro Anak & Guru Sekolah Minggu</td>
                </tr>
                <tr>
                  <td>81</td>
                  <td>Pdp. Mikhael Mordekhai Massie</td>
                  <td>Biro IT & Multimedia</td>
                </tr>
                <tr>
                  <td>82</td>
                  <td>Pdt. Haniel Yafia Massie</td>
                  <td>Biro Diakonia & Sosial</td>
                </tr>
              </table>
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              name="example_acordion"
              id="section7"
              className={styles.accordion__input}
            />
            <label htmlFor="section7" className={styles.accordion__label}>
              MAJELIS DAERAH FILADELFIA 5 – JAWA TENGAH & DI. YOGYAKARTA{" "}
            </label>
            <div className={styles.accordion__content}>
              <table className={styles.table1}>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Jabatan</th>
                </tr>

                <tr>
                  <td>83</td>
                  <td>Pdt. Sarah Hetty Sritati</td>
                  <td>Ketua</td>
                </tr>
                <tr>
                  <td>84</td>
                  <td>Pdt. Danie F. Wulur</td>
                  <td>Wakil Ketua</td>
                </tr>
                <tr>
                  <td>85</td>
                  <td>Pdt. Agung Djumari</td>
                  <td>Sekretaris</td>
                </tr>
                <tr>
                  <td>86</td>
                  <td>Pdm. Yohanes Kristiawan</td>
                  <td>Wakil Sekretaris</td>
                </tr>
                <tr>
                  <td>87</td>
                  <td>Pdt. Victor Philipus Chandra</td>
                  <td>Bendahara</td>
                </tr>
                <tr>
                  <td>88</td>
                  <td>Pdt. Zefanya Peter</td>
                  <td>Biro Penatalayanan</td>
                </tr>
                <tr>
                  <td>89</td>
                  <td>Pdt. Indra Tarigan</td>
                  <td>Biro Pendidikan & Kaderisasi</td>
                </tr>
                <tr>
                  <td>90</td>
                  <td>Pdt. Hengky Tabang</td>
                  <td>Biro Misi</td>
                </tr>
                <tr>
                  <td>91</td>
                  <td>Pdm. Trivena Mami Suparmi</td>
                  <td>Biro Wanita & Anak</td>
                </tr>
                <tr>
                  <td>92</td>
                  <td>Pdm. David Sutomo</td>
                  <td>Biro Pemuda & Anak Hamba Tuhan</td>
                </tr>
                <tr>
                  <td>93</td>
                  <td>Pdt. Shinta Veronicha T.</td>
                  <td>Biro Diakonia</td>
                </tr>
              </table>
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              name="example_acordion"
              id="section8"
              className={styles.accordion__input}
            />
            <label htmlFor="section8" className={styles.accordion__label}>
              MAJELIS DAERAH FILADELFIA 6 – JAWA TIMUR & BALI{" "}
            </label>
            <div className={styles.accordion__content}>
              <table className={styles.table1}>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Jabatan</th>
                </tr>
                <tr>
                  <td>94</td>
                  <td>Pdt.Johanes Naftali</td>
                  <td>Ketua</td>
                </tr>
                <tr>
                  <td>95</td>
                  <td>Pdt. Abetnego</td>
                  <td>Wakil Ketua</td>
                </tr>
                <tr>
                  <td>96</td>
                  <td>Pdt. Piter Christop Sarumaha</td>
                  <td>Sekretaris</td>
                </tr>
                <tr>
                  <td>97</td>
                  <td>Pdt. David Kirojan</td>
                  <td>Wakil Sekretaris</td>
                </tr>
                <tr>
                  <td>98</td>
                  <td>Pdt. Djems Djemy Kaloh</td>
                  <td>Bendahara</td>
                </tr>
                <tr>
                  <td>99</td>
                  <td>Pdt. Donny Kaleb Setiawan</td>
                  <td>Wakil Bendahara</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>Pdt. Rionald RP. Raintung</td>
                  <td>Biro Misi & Penanaman Gereja</td>
                </tr>
                <tr>
                  <td>101</td>
                  <td>Pdp. Yusuf Permata Mega</td>
                  <td>Biro Doa, Ibadah, & Multimedia</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>Pdt. Debora DHEK</td>
                  <td>Biro Sosial & Diakonia</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>Pdm. Sonya Schramm</td>
                  <td>Biro Anak & Guru Sekolah Minggu</td>
                </tr>
                <tr>
                  <td>104</td>
                  <td>Pdm. Louis William Schramm</td>
                  <td>Biro Pemuda & Anak Hamba Tuhan</td>
                </tr>
                <tr>
                  <td>105</td>
                  <td>Pdm. Vivy Nanlohy</td>
                  <td>Biro Wanita</td>
                </tr>
              </table>
            </div>
          </div>

          <div>
            <input
              type="checkbox"
              name="example_acordion"
              id="section10"
              className={styles.accordion__input}
            />
            <label htmlFor="section10" className={styles.accordion__label}>
              MAJELIS DAERAH FILADELFIA 7 – SULAWESI SELATAN & SULAWESI TENGAH
            </label>
            <div className={styles.accordion__content}>
              <table className={styles.table1}>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Jabatan</th>
                </tr>
                <tr>
                  <td>106</td>
                  <td>Pdt. Magda Lenny da Costa</td>
                  <td>Ketua</td>
                </tr>
                <tr>
                  <td>107</td>
                  <td>Pdt. Anthonius R. Mappadang</td>
                  <td>Wakil Ketua</td>
                </tr>
                <tr>
                  <td>108</td>
                  <td>Pdt. Yan Kabanga</td>
                  <td>Sekretaris</td>
                </tr>
                <tr>
                  <td>109</td>
                  <td>Pdm. Jimmy Lengkong</td>
                  <td>Bendahara</td>
                </tr>
                <tr>
                  <td>110</td>
                  <td>Pdt. Rizard MA. da Costa</td>
                  <td>Biro Penatalayanan</td>
                </tr>
                <tr>
                  <td>111</td>
                  <td>Pdm. Martinus Sirua Matangkin</td>
                  <td>Biro Misi</td>
                </tr>
                <tr>
                  <td>112</td>
                  <td>Pdt. Esky Danielle Tonto&apos;u</td>
                  <td>Biro Pemuda & Anak Hamba Tuhan</td>
                </tr>
                <tr>
                  <td>113</td>
                  <td>Pdm. Missiyon Towelo</td>
                  <td>Biro WAnita</td>
                </tr>
                <tr>
                  <td>114</td>
                  <td>Pdt. Julien VE. Pereman</td>
                  <td>Biro Anak & Guru Sekolah Minggu</td>
                </tr>
                <tr>
                  <td>115</td>
                  <td>Pdp. Agustin</td>
                  <td>Biro Diakonia & Sosial</td>
                </tr>
              </table>
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              name="example_acordion"
              id="section11"
              className={styles.accordion__input}
            />
            <label htmlFor="section11" className={styles.accordion__label}>
              MAJELIS DAERAH FILADELFIA 8 – SULAWESI UTARA{" "}
            </label>
            <div className={styles.accordion__content}>
              <table className={styles.table1}>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Jabatan</th>
                </tr>

                <tr>
                  <td>116</td>
                  <td>Pdt. Merryam Jone Anibala</td>
                  <td>Ketua</td>
                </tr>
                <tr>
                  <td>117</td>
                  <td>Pdt. Feckie Mawuntu</td>
                  <td>Wakil Ketua Penatalayan</td>
                </tr>
                <tr>
                  <td>118</td>
                  <td>Pdt. Robby Karamoy</td>
                  <td>Wakil Ketua Pendidikan & Misi</td>
                </tr>
                <tr>
                  <td>119</td>
                  <td>Pdt. Ivan Heydemans</td>
                  <td>Sekretaris</td>
                </tr>
                <tr>
                  <td>120</td>
                  <td>Pdt. Hizkia Ivert Sarempaa</td>
                  <td>Wakil Ketua Pengembalaan</td>
                </tr>
                <tr>
                  <td>121</td>
                  <td>Pdt. Harry Polii</td>
                  <td>Wakil Ketua Pelayanan Masyarakat</td>
                </tr>
                <tr>
                  <td>122</td>
                  <td>Pdt.David Oldy Rawung</td>
                  <td>Wakil Ketua Verifikasi & Aset</td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>Pdt. Herman Lius</td>
                  <td>Sekretaris</td>
                </tr>
                <tr>
                  <td>124</td>
                  <td>Pdt. Jacky Kambuan</td>
                  <td>Wakil Sekretaris</td>
                </tr>
                <tr>
                  <td>125</td>
                  <td>Pdt. Debby Sangian</td>
                  <td>Bendahara</td>
                </tr>
                <tr>
                  <td>126</td>
                  <td>Pdt. Refly Paat</td>
                  <td>Wakil Bendahara</td>
                </tr>
                <tr>
                  <td>127</td>
                  <td>Pdt. Izakh Palar</td>
                  <td>Biro Hubungan Antar Lembaga</td>
                </tr>
                <tr>
                  <td>128</td>
                  <td>Pdt. Philip Mongie</td>
                  <td>Biro Pemuda & Anak Hamba Tuhan</td>
                </tr>
                <tr>
                  <td>129</td>
                  <td>Pdt. Irene D. Lesar</td>
                  <td>Biro Wanita</td>
                </tr>
                <tr>
                  <td>130</td>
                  <td>Pdt. Femi Poluan</td>
                  <td>Biro Anak & Guru Sekolah Minggu</td>
                </tr>
                <tr>
                  <td>131</td>
                  <td>Pdt. Stenly RAsubala</td>
                  <td>Biro Misi & Penanaman Gereja</td>
                </tr>
                <tr>
                  <td>132</td>
                  <td>Pdt. Devry Schalwijk</td>
                  <td>Biro Pendidikan & Pengajaran</td>
                </tr>
                <tr>
                  <td>133</td>
                  <td>Pdt. Epha Jay Metia</td>
                  <td>Biro IT & Multimedia</td>
                </tr>
                <tr>
                  <td>134</td>
                  <td>Pdt. Sonny J. Oroh </td>
                  <td>Biro Diankonia & Sosial</td>
                </tr>
                <tr>
                  <td>135</td>
                  <td>Ferry Rondonuwu</td>
                  <td>Biro Hukum & Peraturan Gereja</td>
                </tr>
              </table>
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              name="example_acordion"
              id="section12"
              className={styles.accordion__input}
            />
            <label htmlFor="section12" className={styles.accordion__label}>
              MAJELIS DAERAH FILADELFIA 9 - KALIMANTAN{" "}
            </label>
            <div className={styles.accordion__content}>
              <table className={styles.table1}>
                <tr>
                  <th>136</th>
                  <th>Nama</th>
                  <th>Jabatan</th>
                </tr>

                <tr>
                  <td>137</td>
                  <td>Pdt. Anthon Arman</td>
                  <td>Ketua</td>
                </tr>
                <tr>
                  <td>138</td>
                  <td>Pdt. Yakobus Sunarto</td>
                  <td>Wakil Ketua</td>
                </tr>
                <tr>
                  <td>139</td>
                  <td>Pdt. Aneke Sagai</td>
                  <td>Sekretaris</td>
                </tr>
                <tr>
                  <td>140</td>
                  <td>Pdt. Ketrina </td>
                  <td>Bendahara</td>
                </tr>
                <tr>
                  <td>141</td>
                  <td>Pdm. Maleaki Ladung</td>
                  <td>Biro Pemuda & Anak Hamba Tuhan</td>
                </tr>
                <tr>
                  <td>142</td>
                  <td>Pdt. Martina</td>
                  <td>Biro Doa</td>
                </tr>
                <tr>
                  <td>143</td>
                  <td>Pdt. Jefri Mokodompit</td>
                  <td>Biro Anak & Guru Sekolah Minggu</td>
                </tr>
                <tr>
                  <td>144</td>
                  <td>Pdt. Julmawardin Zebua</td>
                  <td>Biro Pendidikan</td>
                </tr>
                <tr>
                  <td>145</td>
                  <td>Pdm. Yulius S. Pambudi</td>
                  <td>Biro Penanaman Gereja</td>
                </tr>
                <tr>
                  <td>146</td>
                  <td>Pdp. Adrianus Minen</td>
                  <td>Biro Penanaman Gereja</td>
                </tr>
                <tr>
                  <td>147</td>
                  <td>Pdm. Koestina</td>
                  <td>Biro Wanita</td>
                </tr>
                <tr>
                  <td>148</td>
                  <td>Pdm.Yusak Hadi Prayitno</td>
                  <td>Biro Penatalayanan</td>
                </tr>
              </table>
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              name="example_acordion"
              id="section13"
              className={styles.accordion__input}
            />
            <label htmlFor="section13" className={styles.accordion__label}>
              MAJELIS DAERAH FILADELFIA 10 – KEPULAUAN RIAU{" "}
            </label>
            <div className={styles.accordion__content}>
              <table className={styles.table1}>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Jabatan</th>
                </tr>

                <tr>
                  <td>149</td>
                  <td>Pdt. Daniel Duma Tandi</td>
                  <td>Ketua</td>
                </tr>
                <tr>
                  <td>150</td>
                  <td>Pdt. Manahan Simanjuntak</td>
                  <td>Sekretaris</td>
                </tr>
                <tr>
                  <td>151</td>
                  <td>Pdt. Khin Sun (Yermia Chung)</td>
                  <td>Bendahara</td>
                </tr>
                <tr>
                  <td>152</td>
                  <td>Pdt. Mardius Tarigan</td>
                  <td>Biro Penginjilan & Misi</td>
                </tr>
                <tr>
                  <td>153</td>
                  <td>Pdm. Hotmaida Nababan</td>
                  <td>Biro Wanita</td>
                </tr>
                <tr>
                  <td>154</td>
                  <td>Pdt. Julius Sutarwi</td>
                  <td>Biro Pemuda & Anak Hamba Tuhan</td>
                </tr>
                <tr>
                  <td>155</td>
                  <td>Pdp. Sabatani Waruwu</td>
                  <td>Biro Diakonia & Sosial</td>
                </tr>
              </table>
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              name="example_acordion"
              id="section14"
              className={styles.accordion__input}
            />
            <label htmlFor="section14" className={styles.accordion__label}>
              MAJELIS DAERAH FILADELFIA 11 – PAPUA, PAPUA BARAT, MALUKU & MALUKU
              UTARA{" "}
            </label>
            <div className={styles.accordion__content}>
              <table className={styles.table1}>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Jabatan</th>
                </tr>

                <tr>
                  <td>156</td>
                  <td>Pdt. Reynold Tuwo</td>
                  <td>Ketua</td>
                </tr>
                <tr>
                  <td>157</td>
                  <td>Pdt. Harold Manoppo</td>
                  <td>Sekretaris</td>
                </tr>
                <tr>
                  <td>158</td>
                  <td>Pdt. Youtje Angkouw</td>
                  <td>Bendahara</td>
                </tr>
                <tr>
                  <td>159</td>
                  <td>Pdt. Johny Warouw</td>
                  <td>Biro Pendidikan & Pengajaran</td>
                </tr>
                <tr>
                  <td>160</td>
                  <td>Pdt. William P. Tuwo</td>
                  <td>Biro Pemuda & Anak Hamba Tuhan</td>
                </tr>
                <tr>
                  <td>161</td>
                  <td>Pdm. Agnes Rumbajan</td>
                  <td>Biro Anak & Guru Sekolah Minggu</td>
                </tr>
                <tr>
                  <td>162</td>
                  <td>Pdm. Albert Samangun</td>
                  <td>Biro Penginjilan & Misi</td>
                </tr>
                <tr>
                  <td>163</td>
                  <td>Pdm. Yardi Surabi</td>
                  <td>Biro Diakonia & Sosial</td>
                </tr>
                <tr>
                  <td>164</td>
                  <td>Pdt. Natanael Makarawung</td>
                  <td>Penelitian & Pengembangan (Ketua)</td>
                </tr>
                <tr>
                  <td>165</td>
                  <td>Pdt. Yoseph Sianturi / Hisar Gurning</td>
                  <td>Penelitian & Pengembangan</td>
                </tr>
                <tr>
                  <td>166</td>
                  <td>Pdt. Rionald Raintung</td>
                  <td>Penelitian & Pengembangan</td>
                </tr>
                <tr>
                  <td>167</td>
                  <td>Pdt. David Oldy Rawung</td>
                  <td>Etika, Hukum & Peraturan Gereja (Ketua)</td>
                </tr>
                <tr>
                  <td>168</td>
                  <td>Pdt. Charles Pakpahan</td>
                  <td>Etika, Hukum & Peraturan Gereja</td>
                </tr>
                <tr>
                  <td>169</td>
                  <td>Pdt. Rizard Mac Arthur da Costa</td>
                  <td>Etika, Hukum & Peraturan Gereja</td>
                </tr>
                <tr>
                  <td>170</td>
                  <td>Pdt. Anthonius R. Mappadang</td>
                  <td>Penginjilan</td>
                </tr>
                <tr>
                  <td>171</td>
                  <td>Pdt. Ivert Sarempaa</td>
                  <td>Penginjilan</td>
                </tr>
                <tr>
                  <td>172</td>
                  <td>Pdt. Albert Samangun</td>
                  <td>Penginjilan</td>
                </tr>
                <tr>
                  <td>173</td>
                  <td>Pdm. Vivy Nanlohy</td>
                  <td>Wanita</td>
                </tr>
                <tr>
                  <td>174</td>
                  <td>Pdm. Gloria Simarmata</td>
                  <td>Wanita</td>
                </tr>
                <tr>
                  <td>175</td>
                  <td>Pdm. Sem da Costa</td>
                  <td>Pemuda & Remaja</td>
                </tr>
                <tr>
                  <td>176</td>
                  <td>Pdp. Yemima Korompis</td>
                  <td>Pemuda & Remaja</td>
                </tr>
                <tr>
                  <td>177</td>
                  <td>Pdm. Stefanus E. Torrys</td>
                  <td>Anak Hamba Tuhan</td>
                </tr>
                <tr>
                  <td>178</td>
                  <td>Pdm. Jeremy Sunday</td>
                  <td>Anak Hamba Tuhan</td>
                </tr>
                <tr>
                  <td>179</td>
                  <td>Pdp. Mikhael Mordekhai Massie</td>
                  <td>Anak Hamba Tuhan</td>
                </tr>
                <tr>
                  <td>180</td>
                  <td>Pdm. Gery Seroh</td>
                  <td>Anak & Guru Sekolah Minggu</td>
                </tr>
                <tr>
                  <td>181</td>
                  <td>Pdm. Ernest Torrys</td>
                  <td>Konseling</td>
                </tr>
                <tr>
                  <td>182</td>
                  <td>Pdt. Abetnego</td>
                  <td>Konseling</td>
                </tr>
                <tr>
                  <td>183</td>
                  <td>Pdt. Yusuf Kurnia</td>
                  <td>Pemuridan</td>
                </tr>
                <tr>
                  <td>184</td>
                  <td>Pdt. Robby H. Karamoy</td>
                  <td>Pemuridan</td>
                </tr>
                <tr>
                  <td>185</td>
                  <td>Pdt. Zefanya Peter</td>
                  <td>IT & Multimedia</td>
                </tr>
                <tr>
                  <td>186</td>
                  <td>Pdm. William Schramm</td>
                  <td>IT & Multimedia</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AboutStruktur
