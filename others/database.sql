-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2021 at 07:36 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stockbit`
--

-- --------------------------------------------------------

--
-- Table structure for table `omdb_movies`
--

CREATE TABLE `omdb_movies` (
  `id` int(10) UNSIGNED NOT NULL,
  `endpoint` varchar(255) NOT NULL,
  `parameter` varchar(255) NOT NULL,
  `datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `omdb_movies`
--

INSERT INTO `omdb_movies` (`id`, `endpoint`, `parameter`, `datetime`) VALUES
(1, '/detail?id=tt0372784&title=Batman', '{\"id\":\"tt0372784\",\"title\":\"Batman\"}', '2021-04-11 12:25:14'),
(2, '/detail?id=tt0372784', '{\"id\":\"tt0372784\"}', '2021-04-11 12:25:22'),
(3, '/detail?id=tt0372784', '{\"id\":\"tt0372784\"}', '2021-04-11 12:26:02'),
(4, '/search?title=Batman&page=2', '{\"title\":\"Batman\",\"page\":\"2\"}', '2021-04-11 12:28:10'),
(5, '/search?title=Batman&page=2', '{\"title\":\"Batman\",\"page\":\"2\"}', '2021-04-11 12:28:13'),
(6, '/search?title=Batman&page=2', '{\"title\":\"Batman\",\"page\":\"2\"}', '2021-04-11 12:29:00'),
(7, '/search?title=Batman&page=2', '{\"title\":\"Batman\",\"page\":\"2\"}', '2021-04-11 12:31:41');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `UserName` varchar(255) NOT NULL,
  `Parent` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `UserName`, `Parent`) VALUES
(1, 'Ali', 2),
(2, 'Budi', 0),
(3, 'Cecep', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `omdb_movies`
--
ALTER TABLE `omdb_movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `omdb_movies`
--
ALTER TABLE `omdb_movies`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
