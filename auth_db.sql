-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 14 Jun 2023 pada 12.36
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.1.12

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
-- Struktur dari tabel `pm`
--

CREATE TABLE `pm` (
  `id` int(11) NOT NULL,
  `sideId` varchar(255) DEFAULT NULL,
  `tanggal` date DEFAULT NULL,
  `namaSide` varchar(255) DEFAULT NULL,
  `koordinatSite` varchar(255) DEFAULT NULL,
  `tipeSite` varchar(255) DEFAULT NULL,
  `modelSite` varchar(255) DEFAULT NULL,
  `idCustomer` int(11) DEFAULT NULL,
  `phasa` int(11) DEFAULT NULL,
  `dayaKVA` int(11) DEFAULT NULL,
  `rAmpere` int(11) DEFAULT NULL,
  `sAmpere` int(11) DEFAULT NULL,
  `tAmpere` int(11) DEFAULT NULL,
  `rnVoltage` int(11) DEFAULT NULL,
  `ngVoltage` int(11) DEFAULT NULL,
  `tAmpereP` int(11) DEFAULT NULL,
  `snVoltage` int(11) DEFAULT NULL,
  `rAmpereP` int(11) DEFAULT NULL,
  `tnVoltage` int(11) DEFAULT NULL,
  `sAmpereP` int(11) DEFAULT NULL,
  `COS` varchar(255) DEFAULT NULL,
  `tipeCOS` varchar(255) DEFAULT NULL,
  `arester` varchar(255) DEFAULT NULL,
  `tipeArester` varchar(255) DEFAULT NULL,
  `rWarna` varchar(255) DEFAULT NULL,
  `tWarna` varchar(255) DEFAULT NULL,
  `gWarna` varchar(255) DEFAULT NULL,
  `sWarna` varchar(255) DEFAULT NULL,
  `nWarna` varchar(255) DEFAULT NULL,
  `rMM` int(11) DEFAULT NULL,
  `tMM` int(11) DEFAULT NULL,
  `gMM` int(11) DEFAULT NULL,
  `sMM` int(11) DEFAULT NULL,
  `nMM` int(11) DEFAULT NULL,
  `temuanKWH` varchar(255) DEFAULT NULL,
  `rekomendasiKWH` varchar(255) DEFAULT NULL,
  `suhu` int(11) DEFAULT NULL,
  `tanggalAC` date DEFAULT NULL,
  `externalAlarm` varchar(255) DEFAULT NULL,
  `doorOpen` varchar(255) DEFAULT NULL,
  `PLNof` varchar(255) DEFAULT NULL,
  `hightTemp` varchar(255) DEFAULT NULL,
  `genset` varchar(255) DEFAULT NULL,
  `smokeFire` varchar(255) DEFAULT NULL,
  `perangkatEA` varchar(255) DEFAULT NULL,
  `exhaustFan` varchar(255) DEFAULT NULL,
  `lampu` varchar(255) DEFAULT NULL,
  `bangunanFisik` varchar(255) DEFAULT NULL,
  `pintuShelter` varchar(255) DEFAULT NULL,
  `temuanEnv` varchar(255) DEFAULT NULL,
  `rekomendasiEnv` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `pm`
--

INSERT INTO `pm` (`id`, `sideId`, `tanggal`, `namaSide`, `koordinatSite`, `tipeSite`, `modelSite`, `idCustomer`, `phasa`, `dayaKVA`, `rAmpere`, `sAmpere`, `tAmpere`, `rnVoltage`, `ngVoltage`, `tAmpereP`, `snVoltage`, `rAmpereP`, `tnVoltage`, `sAmpereP`, `COS`, `tipeCOS`, `arester`, `tipeArester`, `rWarna`, `tWarna`, `gWarna`, `sWarna`, `nWarna`, `rMM`, `tMM`, `gMM`, `sMM`, `nMM`, `temuanKWH`, `rekomendasiKWH`, `suhu`, `tanggalAC`, `externalAlarm`, `doorOpen`, `PLNof`, `hightTemp`, `genset`, `smokeFire`, `perangkatEA`, `exhaustFan`, `lampu`, `bangunanFisik`, `pintuShelter`, `temuanEnv`, `rekomendasiEnv`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'POP kdahfasd', '2023-06-08', 'das', 'das', 'Super Backbone', 'Distribusi', 324242, 8, 29, 2, 7, 8, 28, 28, 28, 282, 82, 8, 8, 'Ada', 'kj', 'Ada', 'lkj', 'k', 'kj', 'kj', 'k', 'j', 2, 8, 9, 8, 7, 'mnd', 'kjkj', 21, '2023-06-16', 'OK', 'OK', 'NOT OK', NULL, 'NOT OK', 'OK', 'dsa', 'OK', 'OK', 'OK', 'NOT OK', 'dfas', 'sda', 'Good', '2023-06-04 07:34:43', '2023-06-04 07:34:43'),
(2, 'fdsafjkl', '2023-06-02', 'fsad', 'kllk', 'Super Backbone', 'Shelter Permanen', 3223, 89, 89, 9, 9, 8, 7, 8, 7, 8, 8, 9, 8, 'Ada', 'j', 'Ada', 'lk', 'df', 'klj', 'kl', 'kl', 'j', 8, 7, 6, 8, 8, 'jlk', 'lkj', 21, '2023-06-08', 'OK', 'OK', 'OK', NULL, 'NOT OK', 'NOT OK', 'dsa', 'NOT OK', 'NOT OK', 'NOT OK', 'NOT OK', 'dsa', 'sda', 'Warning', '2023-06-04 07:36:54', '2023-06-04 07:36:54'),
(3, 'fkddas', '2023-06-13', 'sad', 'k', 'Super Backbone', 'Mikro POP', 979, 8, 7, 9, 7, 9, 7, 8, 98, 98, 8, 8, 7, 'Ada', 'hj', 'Ada', 'klj', 'sd', 'jlk', 'lkj', 'lk', 'lk', 3, 2, 3, 2, 2, 'lk', 'kl', 32, '2023-06-23', 'OK', 'NOT OK', 'NOT OK', NULL, 'NOT OK', 'NOT OK', 'dsa', 'NOT OK', 'NOT OK', 'NOT OK', 'NOT OK', 'dsa', 'sda', 'Danger', '2023-06-04 07:38:57', '2023-06-04 07:38:57'),
(4, 'dsafdas', '2023-06-05', 'daf', 'dfa', 'Backbone', 'Shelter CKD', 322, 9, 89, 7, 8, 9, 7, 9, 8, 9, 7, 8, 7, 'Ada', 'jk', 'Ada', 'jk', 'kj', 'jk', 'kj', 'jk', 'kj', 8, 7, 8, 8, 8, 'jk', 'kj', 22, '2023-06-13', 'NOT OK', 'OK', 'NOT OK', NULL, 'OK', 'OK', 'sd', 'OK', 'OK', 'NOT OK', 'OK', 'sd', 'df', 'Warning', '2023-06-07 15:53:25', '2023-06-07 15:53:25'),
(5, 'dsfafa', '2023-06-10', 'dfas', 'dasf', 'Backbone', 'Distribusi', 2342, 8787, 78, 87, 6, 7, 8, 7, 8, 7, 8, 7, 8, 'Ada', 'kjjk', 'Ada', 'hjh', 'hj', 'hj', 'hj', 'hj', 'hj', 8, 8, 8, 7, 7, 'dssd', 'hk', 21, '2023-06-16', 'OK', 'OK', 'OK', NULL, 'OK', 'OK', 'sdsds', 'OK', 'NOT OK', 'OK', 'OK', 'dfwd', 'dfsa', 'Danger', '2023-06-14 07:50:48', '2023-06-14 07:50:48'),
(6, 'dsfafa', '2023-06-10', 'dfas', 'dasf', 'Backbone', 'Distribusi', 2342, 8787, 78, 87, 6, 7, 8, 7, 8, 7, 8, 7, 8, 'Ada', 'kjjk', 'Ada', 'hjh', 'hj', 'hj', 'hj', 'hj', 'hj', 8, 8, 8, 7, 7, 'dssd', 'hk', 21, '2023-06-16', 'OK', 'OK', 'OK', NULL, 'OK', 'OK', 'sdsds', 'OK', 'NOT OK', 'OK', 'OK', 'dfwd', 'dfsa', 'Danger', '2023-06-14 07:50:48', '2023-06-14 07:50:48');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'Demak', 'demak@gmail.com', '$2b$10$WUBjzsaVJs4Ge6lgktchn.K.WeZNmhOeqW3L57zZFk.l6u.FDfCu6', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJEZW1hayIsImVtYWlsIjoiZGVtYWtAZ21haWwuY29tIiwiaWF0IjoxNjg0MTE5Mjk1LCJleHAiOjE2ODQyMDU2OTV9.KoJCkEzOyywDZ8Bqgy84AsDVdt77v7KYPkmFFJkvBqg', '2023-05-07 17:01:22', '2023-05-15 02:54:55'),
(2, 'dodi', 'dodi@gmail.com', '$2b$10$PQeBhFTzf56uztBJaro1.eEMijHaaHVZll67iWJ9rEp/AbKHycNVW', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsIm5hbWUiOiJkb2RpIiwiZW1haWwiOiJkb2RpQGdtYWlsLmNvbSIsImlhdCI6MTY4MzY0NDU3MywiZXhwIjoxNjgzNzMwOTczfQ.nvQDxkoSUNcunpPsx8ogkN88W_h5D3mHjtZCNcdmThg', '2023-05-09 14:49:59', '2023-05-09 15:02:53'),
(3, 'intan', 'intan@gmail.com', '$2b$10$kMqA/05DS6g0LGz.PG9lDe8CcXmUj8BA66ohPOA0WJdZKnEjBWjP.', NULL, '2023-05-09 15:04:09', '2023-05-09 15:04:09'),
(4, 'budi', 'budi@gmail.com', '$2b$10$krfgnCl84vwCStfEljuhZeAunnUfx4prGE.fnABLxlBnx7mSnP1l2', NULL, '2023-05-09 15:04:55', '2023-05-09 15:04:55'),
(5, 'lili', 'lili@gmail.com', '$2b$10$4YwFaCIbbdSKaDCXNwNIseAz5QWg0xXbbxwWSRV813ph/89gHf2O.', NULL, '2023-05-09 15:07:28', '2023-05-09 15:07:28'),
(6, 'wili', 'wili@gmail.com', '$2b$10$bINitkW8cQyC.wNVPVgyDu717h5BFPfrO4hWgGCbFUylB5yjLu7vu', NULL, '2023-05-10 17:40:59', '2023-05-10 17:40:59'),
(7, 'd', 'dfa@gadfa.com', '$2b$10$AQw3YEMXpx6DNfjSmv0Wa.jF8UqK7uQdc2MLTu6cFBYSFh2KQH8bC', NULL, '2023-05-10 17:42:38', '2023-05-10 17:42:38'),
(8, 'loli', 'loli@gmail.com', '$2b$10$lVqzQEdgLNGEFG0WHMCFW.qNwdTpTYZRYvxv.HVuJYgl2l5dUUotG', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsIm5hbWUiOiJsb2xpIiwiZW1haWwiOiJsb2xpQGdtYWlsLmNvbSIsImlhdCI6MTY4NDE1ODk1NywiZXhwIjoxNjg0MjQ1MzU3fQ.TNuVQa9AvdCHsMZCVNNlrKJLDtcWO6di3SIIBSESYo8', '2023-05-15 13:55:44', '2023-05-15 13:55:57');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `pm`
--
ALTER TABLE `pm`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `pm`
--
ALTER TABLE `pm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
