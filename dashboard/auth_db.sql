-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 04 Jul 2024 pada 06.22
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auth_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `pegawaii`
--

CREATE TABLE `pegawaii` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `npp` int(11) NOT NULL,
  `npwp` varchar(255) NOT NULL,
  `awal_masuk` date NOT NULL,
  `status_pegawai` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `jenis_kelamin` varchar(255) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `profesi` varchar(255) NOT NULL,
  `str` varchar(255) NOT NULL,
  `sip` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `no_hp` varchar(255) NOT NULL,
  `status_nikah` varchar(255) NOT NULL,
  `pendidikan` varchar(255) NOT NULL,
  `tipe_bpjs` varchar(255) NOT NULL,
  `no_bpjs` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `pegawaii`
--

INSERT INTO `pegawaii` (`id`, `uuid`, `npp`, `npwp`, `awal_masuk`, `status_pegawai`, `name`, `email`, `jenis_kelamin`, `tanggal_lahir`, `profesi`, `str`, `sip`, `alamat`, `no_hp`, `status_nikah`, `pendidikan`, `tipe_bpjs`, `no_bpjs`, `userId`, `createdAt`, `updatedAt`) VALUES
(4, '44c032b4-ea5e-4f32-b1c1-229514376a9e', 4523321, '45678762348853', '2020-02-18', 'PT', 'Saleha Aira', 'aira@gmail.com', 'Perempuan', '1995-06-24', 'Perawat', '-', '-', 'Kaliwungu 05/07 Kudus', '085674543253', 'Kawin', 'S1 Keperawatan', 'Kesehatan', '76543298443678', 1, '2024-06-24 00:38:37', '2024-07-04 04:01:04'),
(5, '56b424ef-83bc-4507-9940-8b6cd3de5936', 6547365, '2147483647', '2014-05-14', 'PT', 'Rianti Nara', 'nara@gmail.com', 'Perempuan', '1994-02-14', 'Perawat', '-', '-', 'Kudus', '087865432123', 'Kawin', 'S1 Perawat', 'Kesehatan', '2147483647', 1, '2024-06-24 00:49:21', '2024-06-24 00:49:21'),
(6, '4140884a-1761-40ca-8a10-adc123998af2', 5432467, '2147483647', '2019-07-25', 'PO', 'Suliyana', 'suli@gmail.com', 'Perempuan', '1989-02-09', 'Bidan', '-', '-', 'Semarang', '089765456223', 'Kawin', 'S1 Kebidanan', 'Kesehatan', '2147483647', 1, '2024-06-25 02:29:47', '2024-06-25 02:29:47'),
(7, '64d67de3-b527-482f-b612-d4bac1934fe1', 4326587, '2147483647', '2024-01-03', 'CP', 'Muhammad Rizki', 'rizki@gmail.com', 'Laki-Laki', '2000-03-06', 'Perawat', '-', '-', 'Kudus', '089765432345', 'Belum Kawin', 'S1 Keperawatan', 'Ketenagakerjaan', '2147483647', 1, '2024-06-25 02:41:29', '2024-06-25 02:41:29'),
(8, '42e8adfd-85b1-4828-b184-ab7e92b66ee6', 5437658, '875672345', '2022-05-24', 'CP', 'Alesha Mahira', 'alesha@gmail.com', 'Perempuan', '1998-05-13', 'Bidan', '-', '-', 'Kudus', '087653487653', 'Belum Kawin', 'S1 Kebidanan', 'Kesehatan', '2147483647', 1, '2024-06-25 02:46:41', '2024-06-25 02:46:41'),
(9, '78ff68a9-e551-43d1-9851-120c33637e50', 8765346, '2147483647', '2007-06-25', 'PT', 'Farida Maharani', 'farida@gmail.com', 'Perempuan', '1996-01-02', 'Bidan', '-', '-', 'Kudus', '089765435765', 'Kawin', 'S1 Kebidanan', 'Ketenagakerjaan', '2147483647', 1, '2024-06-25 02:54:05', '2024-06-25 02:54:05'),
(10, '35d63868-746f-4ff1-af85-3e41f3fa7496', 9652754, '2147483647', '2024-03-03', 'CP', 'Faza Faizatul', 'faza@gmail.com', 'Perempuan', '2000-02-15', 'Bidan', '-', '-', 'Demak', '085432187658', 'Belum Kawin', 'S1 Keebidanan', 'Ketenagakerjaan', '2147483647', 1, '2024-06-25 02:58:03', '2024-06-25 02:58:03');

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('bHxfr-kU-N13DqVtY31OfcKmRLnLUxUN', '2024-07-05 04:01:03', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-07-04 04:01:03', '2024-07-04 04:01:03'),
('CDd0O6hxCsGc00IDfRnp1Ww-PhTsxRp2', '2024-07-05 04:00:04', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-07-04 04:00:04', '2024-07-04 04:00:04'),
('lGDzwLj-gjfl9QHAcCpIIBBLTFn6Toe1', '2024-07-05 03:59:31', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-07-04 03:59:32', '2024-07-04 03:59:32'),
('S5DNnxfumfIUOwtGnWIwFeqSxcjWKwv2', '2024-07-05 04:01:08', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"b2e175f4-f9fa-4c85-8b62-b88a3a4477ca\"}', '2024-07-04 03:59:35', '2024-07-04 04:01:08'),
('tWPmJccQkMXxVKrrUJYTgpOE7l4PGzvi', '2024-07-05 04:00:03', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2024-07-04 04:00:03', '2024-07-04 04:00:03');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'b2e175f4-f9fa-4c85-8b62-b88a3a4477ca', 'M Fikri', 'admin@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$rAa9ZIOF/dff1KSbKOAL/g$WLfw5ZQ6SJUS8zRijj6Se2jf8yLRN8xPcSdwixWXpZc', 'admin', '2024-04-30 01:51:24', '2024-04-30 01:51:24');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `pegawaii`
--
ALTER TABLE `pegawaii`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `pegawaii`
--
ALTER TABLE `pegawaii`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `pegawaii`
--
ALTER TABLE `pegawaii`
  ADD CONSTRAINT `pegawaii_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
