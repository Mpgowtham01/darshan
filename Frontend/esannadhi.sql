-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 18, 2024 at 04:52 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e_sannadhi`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `aboutTitle` varchar(225) NOT NULL,
  `AboutDescription` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `aboutTitle`, `AboutDescription`) VALUES
(1, 'About US', 'Templ.online is a one-stop solution for all your divine needsregarding temples. We are more than happy to render the servicethrough our website and our mobile application.\n\nIn our website, we provide all the details about the temples of India, provide contact details of the priests of the temples, provide a marketplace for the vendors and divine needs, list of auspicious days & Festivals, provide contact details of astrologers and many more.\n\n We are working towards the solution for all your temple & Astrology needs with just one click of a button.\n\n Fore more information, please contact hello@greendata.digital or +91 91088 56735');

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `address_id` int(11) NOT NULL,
  `address_name` varchar(255) NOT NULL,
  `created_time` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`address_id`, `address_name`, `created_time`, `created_by`, `is_active`) VALUES
(1, 'salem', '2020-06-18 07:34:48', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `advertisement`
--

CREATE TABLE `advertisement` (
  `id` int(11) NOT NULL,
  `vendorId` int(11) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `companyName` varchar(255) DEFAULT NULL,
  `websiteUrl` varchar(2048) DEFAULT NULL,
  `advertisement_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `advertisement`
--

INSERT INTO `advertisement` (`id`, `vendorId`, `categoryId`, `companyName`, `websiteUrl`, `advertisement_image`) VALUES
(10, 1, 1, 'cross hurdle systems', 'www.chs.com', '/public/advertisementImages/e9fd5ef45eb3b8439841e6f01b56520b.jpg'),
(11, 2, NULL, 'cross hurdle system', 'www', '/public/advertisementImages/1654509049924-2 (1).png');

-- --------------------------------------------------------

--
-- Table structure for table `all_users`
--

CREATE TABLE `all_users` (
  `id` int(11) NOT NULL,
  `role` varchar(211) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `password` varchar(211) NOT NULL,
  `password_code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `all_users`
--

INSERT INTO `all_users` (`id`, `role`, `email_id`, `password`, `password_code`) VALUES
(1, 'user', 'a.rajfteygq3ie@gmail.com', '12345678', 0),
(2, 'user', 'safwres@mail.com', '333333', 0),
(3, 'user', 'safwefews@mail.com', '111111', 0),
(4, 'user', 'safwefews@mail.com', '999999', 0),
(5, 'user', 'eafty12@mail.com', '999999', 1572),
(6, 'user', 'abcdef@mail.com', '123456', 0),
(7, 'user', 'eahhhhhhhy12@mail.com', '888888', 0),
(8, 'user', 'zzz@gmail.com', '9999999999', 0),
(9, 'user', 'daranibibu55@gmail.com', 'qwerty', 8274),
(10, 'user', 'daaru55@gmail.com', 'mnbvcx', 0),
(11, 'user', 'asdf@gmail.com', 'omsainath', 0),
(12, 'user', 'daaaru@gmail.com', 'zxcvbn', 0),
(13, 'user', 'daranib2@gmail.com', 'asdfgh', 0),
(14, 'user', 'daaru3@gmail.com', 'zaqxsw', 0),
(15, 'user', 'daary@gmail.com', 'mnbvcx', 0),
(16, 'user', 'sara87@gmail.com', 'policy', 0),
(17, 'user', 'daranid@gmail.com', 'bixbys', 0),
(18, 'user', 'jayathurgababu25@gmail.com', 'poiuyt', 0),
(19, 'user', 'sara@gmail.com', 'omsairam', 0),
(20, 'user', 'anishsubramanian@gmail.com', 'qwaszx', 0),
(21, 'user', 'parimalababu27@gmail.com', 'sitarama', 0),
(22, 'user', 'lalithaselvambiga@gmail.com', 'athilakshmi', 0),
(23, 'user', 'saranya23@gmail.com', 'murugan', 0),
(24, 'user', 'daranibubu55@gmail.com', 'babuda', 0),
(25, 'user', 'daranibalu55@gmail.com', 'daaruu', 0),
(26, 'user', 'sakthikannaiya@gmail.com', 'poojasri', 0),
(27, 'user', 'anand15@gmail.com', 'ananda', 0),
(28, 'user', 'anishsubramanian1997@gmail.com', '6385816656', 5672),
(29, 'user', 'yogaprasanna1111@gmail.com', 'prsanna', 0),
(30, 'user', 'saranya.murthyy1@gmail.com', 'Thiya1sri', 0),
(31, 'user', 'anishsubramaniantamizh1997@gmail.com', '123456', 0),
(32, 'user', 'ajithkumaryt2001@gmail.com', 'akraj2001', 0),
(33, 'user', 'pk717279@gmail.com', 'Prakash@123', 8558),
(34, 'user', 'adithi05@gmail.com', 'adithi@05', 0),
(35, 'user', 'aganya05@gmail.com', 'adithi@05', 0),
(36, 'user', 'hrithik05@gmail.com', 'hrithik@05', 0),
(37, 'user', 'hrithik06@gmail.com', 'hrithik@06', 0),
(38, 'user', 'adithi07@gmail.com', 'adithi@05', 0),
(39, 'user', 'subbucse96@gmail.com', 'subburajduari', 0),
(40, 'user', 'subburajduraics@gmail.com', 'subburajdurai', 0),
(41, 'user', 'asdfgh@gmail.com', '123456', 0),
(42, 'user', 'asdfghj123@gmail.com', '123456', 0),
(43, 'user', 'sneka09@gmail.com', 'sneka29@', 0),
(44, 'user', 'sneka08@gmail.com', 'rgrrg45', 0),
(45, 'user', 'adithi08@gmail.com', 'fg4355', 0),
(46, 'user', 'tirumalahugar01140@gail.com', 'Thiru@8247', 0),
(47, 'user', 'tirumalahugar01140@gmail.com', 'Thiru@8247', 0),
(48, 'user', 'asajithkumar17@gmail.com', '123456', 0),
(49, 'user', 'ajith@gmail.com', '123456', 0),
(50, 'user', 'mpgowtham@gmail.com', '8608204014', 0),
(51, 'user', 'ajith2@gmail.com', '8608204010', 0);

-- --------------------------------------------------------

--
-- Table structure for table `amenities`
--

CREATE TABLE `amenities` (
  `AmenitiesId` int(11) NOT NULL,
  `amenityName` varchar(100) DEFAULT NULL,
  `amenityDescription` varchar(100) DEFAULT NULL,
  `isMandatory` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `amenities`
--

INSERT INTO `amenities` (`AmenitiesId`, `amenityName`, `amenityDescription`, `isMandatory`) VALUES
(24, 'Annadhanam', 'rice.png', 1),
(25, 'Training', 'training.png', 1),
(26, 'Marriage', 'marriage.png', 1),
(27, 'Hospital', 'hospital.png', 1),
(28, 'Animal', 'elephant.png', 0);

-- --------------------------------------------------------

--
-- Table structure for table `area`
--

CREATE TABLE `area` (
  `area_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `state_id` int(11) NOT NULL,
  `district_id` int(11) NOT NULL,
  `city_id` int(11) NOT NULL,
  `area_name` varchar(500) NOT NULL,
  `is_active` varchar(20) DEFAULT NULL,
  `created_date` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `area`
--

INSERT INTO `area` (`area_id`, `country_id`, `state_id`, `district_id`, `city_id`, `area_name`, `is_active`, `created_date`) VALUES
(1, 1, 30, 401, 785, 'Therpe', '0', '2020-10-03 07:42:13'),
(4, 1, 16, 110, 1307, 'Domlur', '0', '2020-10-22 06:58:55'),
(5, 1, 30, 384, 800, 'Madurai', '0', '2020-10-28 04:36:55'),
(6, 1, 30, 291, 1204, 'Palani', '0', '2020-10-28 04:37:38'),
(7, 1, 30, 291, 1608, 'Vadamadurai', '0', '2020-10-28 04:38:28'),
(8, 1, 30, 95, 794, 'Ettayapuram Road', '0', '2020-10-28 04:45:51'),
(9, 1, 30, 291, 1516, 'Sengurichi', '0', '2020-10-28 05:13:19'),
(11, 1, 16, 110, 1307, 'Doddathoguru', '0', '2020-10-28 08:12:10'),
(12, 1, 16, 110, 1307, 'Murgesh Pallya', '0', '2020-10-29 09:19:26'),
(13, 1, 16, 110, 1307, 'Halasuru', '0', '2020-10-29 09:30:48'),
(14, 1, 16, 110, 1307, 'Basavanagudi', '0', '2020-10-29 10:01:34'),
(15, 1, 16, 110, 1307, 'RR Nagar', '0', '2020-10-30 05:50:15'),
(16, 1, 16, 110, 1307, 'Nagarathpete', '0', '2020-10-30 07:26:33'),
(17, 1, 16, 110, 1307, 'Malleshwaram', '0', '2020-10-30 09:12:00'),
(18, 1, 30, 384, 843, 'Thiruparankundram', '0', '2020-11-02 05:49:47'),
(19, 1, 16, 110, 1307, 'Jayanagar', '0', '2020-11-02 06:39:52'),
(20, 1, 30, 95, 847, 'Thiruchendur ', '0', '2020-11-02 06:53:14'),
(21, 1, 16, 110, 1307, 'Kanakapura Rd', '0', '2020-11-02 07:30:04'),
(22, 1, 30, 98, 796, 'Kumbakonam', '0', '2020-11-02 07:31:10'),
(23, 1, 16, 110, 1307, 'Banakshankari', '0', '2020-11-02 07:46:38'),
(24, 1, 30, 86, 853, 'Tiruttani', '0', '2020-11-02 07:53:04'),
(25, 1, 30, 384, 800, ' Alagar Koil', '0', '2020-11-02 09:38:01'),
(26, 1, 30, 291, 1204, 'Palani', '0', '2020-11-02 10:02:05'),
(27, 1, 30, 384, 800, 'Thirumohur', '0', '2020-11-03 08:00:57'),
(28, 1, 30, 61, 1261, 'Thiruthangal', '0', '2020-11-03 09:55:07'),
(29, 1, 30, 90, 1343, 'Srirangam', '0', '2020-11-03 11:02:27'),
(30, 1, 16, 110, 1307, 'Rajajinagar', '0', '2020-11-04 03:39:23'),
(31, 1, 16, 110, 1307, 'Koramangala', '0', '2020-11-04 04:03:08'),
(32, 1, 16, 110, 1307, 'SC Road', '0', '2020-11-04 04:15:16'),
(34, 1, 30, 61, 836, 'Thiruvannamalai', '0', '2020-11-04 07:57:53'),
(35, 1, 30, 551, 1613, 'Thirumayam', '0', '2020-11-04 09:19:06'),
(37, 1, 30, 130, 1614, 'Thiruppatur road', '0', '2020-11-04 09:38:49'),
(38, 1, 30, 299, 1615, 'Thiruppullani', '0', '2020-11-04 10:00:16'),
(39, 1, 30, 90, 1616, 'Nachiyar kovil Sannathi Street', '0', '2020-11-04 10:18:28'),
(40, 1, 30, 90, 1617, 'Trichy-Salem Main Road', '0', '2020-11-05 06:33:11'),
(41, 1, 30, 384, 1618, 'Perumal Koil Sannathi Street', '0', '2020-11-05 06:55:50'),
(42, 1, 30, 90, 1619, 'Sannathi Street', '0', '2020-11-05 07:39:51'),
(43, 1, 30, 90, 1620, 'Thiru Anbil', '0', '2020-11-05 08:10:44'),
(44, 1, 30, 98, 1464, 'Budalur taluk', '0', '2020-11-05 10:04:01'),
(45, 1, 30, 401, 1622, 'Durgadevi street', NULL, '2022-04-04 10:08:56'),
(47, 1, 111, 569, 1624, 'balaji nagar', '0', '2022-04-26 08:43:30'),
(48, 1, 111, 570, 1625, 'indrakeeladri', '0', '2022-04-28 05:39:02'),
(49, 1, 30, 65, 862, 'vellore', '1', '2022-05-24 06:56:32'),
(50, 1, 30, 62, 787, 'kalllakkurichi', '1', '2022-05-24 07:04:11'),
(51, 1, 30, 250, 774, 'cudallore', '1', '2022-05-24 07:38:25'),
(52, 1, 30, 89, 850, 'kedarakulam', '1', '2022-05-31 04:56:53'),
(54, 1, 16, 149, 1629, 'Thandige', '0', '2022-08-24 05:44:42'),
(55, 1, 16, 149, 1629, 'Kankeri', '0', '2022-08-24 05:46:25'),
(56, 1, 9, 122, 165, 'qweeee12345', 'undefined', '2022-09-16 04:15:34'),
(57, 1, 30, 61, 763, 'Thiruchuli', 'undefined', '2022-10-13 07:43:56'),
(58, 1, 30, 384, 843, 'Thirupparankundram', 'undefined', '2022-10-14 07:23:28'),
(61, 1, 30, 130, 1636, 'Pillaiyarpatti', '1', NULL),
(62, 1, 30, 85, 854, 'pavazhakundur', '1', NULL),
(63, 1, 30, 234, 1301, 'Triplicane', '1', NULL),
(64, 1, 30, 65, 784, 'Kallapadi', '1', NULL),
(65, 1, 30, 482, 789, 'Kancheepuram', '1', NULL),
(66, 1, 30, 234, 1637, 'v.o.c Nagar', '1', NULL),
(67, 1, 30, 233, 818, 'v.o.c Nagar', '1', NULL),
(68, 1, 111, 583, 1639, 'Tirumala', '1', NULL),
(69, 1, 17, 457, 1640, 'Manjeeshwaram Taluk', '1', NULL),
(70, 1, 30, 98, 839, 'Balaganapathy Nagar', '1', NULL),
(71, 1, 10, 566, 1609, 'Prabhas Patan', '1', NULL),
(72, 1, 30, 299, 829, 'Rameswaram', '1', NULL),
(73, 1, 30, 85, 1641, 'Parvathamalai Forest ', '1', NULL),
(74, 1, 30, 62, 1345, 'Gingee', '1', NULL),
(75, 1, 30, 417, 1642, 'Hillock of river kaveri', '1', NULL),
(76, 1, 30, 234, 1285, 'Mylapore', '1', NULL),
(77, 1, 30, 65, 1643, 'Sri sakthi peedam', '1', NULL),
(78, 1, 111, 585, 1645, 'Tirumala', '1', NULL),
(79, 1, 30, 340, 810, 'Thillaipuram', '1', NULL),
(80, 1, 30, 553, 1647, 'Thiruvarangam', '1', NULL),
(81, 1, 30, 553, 1647, 'Thiruvarangam', '1', NULL),
(82, 1, 30, 588, 1648, 'Tirukoyilur', '1', NULL),
(83, 1, 30, 589, 1649, 'pazhani (palani)', '1', NULL),
(84, 1, 30, 62, 1354, 'Melmaruvathur', '1', NULL),
(85, 1, 30, 482, 789, 'sannathi street,Kancheepuram', '1', NULL),
(86, 1, 30, 90, 1652, 'Samayapuram', '1', NULL),
(87, 1, 14, 591, 1653, 'Katra', '1', NULL),
(88, 1, 25, 592, 1654, 'Jajpur', '1', NULL),
(89, 1, 30, 475, 1205, 'SUCHINDRAM', '1', NULL),
(90, 1, 30, 84, 1312, 'south street', '1', NULL),
(91, 1, 35, 214, 1655, 'Labpur', '1', NULL),
(92, 1, 30, 346, 1656, 'Thoppu street', '1', NULL),
(93, 1, 30, 346, 1657, 'mannapandal', '1', NULL),
(94, 1, 30, 482, 1651, 'pandavaperumal street', '1', NULL),
(95, 1, 14, 26, 275, 'Pahalgam', '1', NULL),
(96, 1, 30, 100, 833, 'Sankarankoil', '1', NULL),
(97, 1, 30, 84, 1658, 'karaipallayur', '1', NULL),
(98, 1, 30, 98, 1659, 'Tharagar', '1', NULL),
(99, 1, 30, 65, 1660, 'Alinjikulam', '1', NULL),
(100, 1, 30, 98, 1661, 'Senthulaipattinam', '1', NULL),
(101, 1, 30, 98, 1662, 'Thiruviranallur', '1', NULL),
(102, 1, 32, 121, 1663, 'Matabari', '1', NULL),
(103, 1, 28, 192, 1664, 'Virat Nagar', '1', NULL),
(104, 1, 35, 594, 1665, 'Ketugram', '1', NULL),
(105, 1, 27, 545, 664, ' Industrial Area', '1', NULL),
(106, 1, 33, 66, 1035, 'Lahori Tola', '1', NULL),
(107, 1, 15, 266, 293, 'Shivganga Muhalla', '1', NULL),
(108, 1, 30, 291, 1666, 'Eemakkalapuram', '1', NULL),
(109, 1, 30, 551, 1667, 'Tiruvarankulam', '1', NULL),
(110, 1, 30, 90, 1668, 'sevendhinadhapuram', '1', NULL),
(111, 1, 30, 346, 1669, 'anandhanallur', '1', NULL),
(112, 1, 30, 384, 1670, 'ayyankuruvithurai', '1', NULL),
(113, 1, 30, 384, 1543, 'Pazhamudircholai', '1', NULL),
(114, 1, 30, 384, 1671, 'Pazhamudircholai', '1', NULL),
(115, 1, 30, 98, 1672, 'Swamimalai', '1', NULL),
(116, 1, 30, 100, 838, 'Tenkasi', '1', NULL),
(117, 1, 123, 595, 1673, 'Dantewada', '1', NULL),
(118, 1, 30, 95, 1235, 'Tiruvaikuntam', '1', NULL),
(119, 1, 10, 596, 1674, 'Ta.Danta', '1', NULL),
(120, 1, 30, 234, 1675, 'Thirumanam village', '1', NULL),
(121, 1, 30, 89, 1676, 'pidagai', '1', NULL),
(122, 1, 30, 346, 1677, 'Tirunanriyur', '1', NULL),
(123, 1, 30, 98, 1678, 'pasupathikovil', '1', NULL),
(124, 1, 30, 86, 1419, 'Mappedu', '1', NULL),
(125, 1, 10, 462, 1681, 'Somnath', '1', NULL),
(126, 1, 121, 602, 1682, 'Nilachal Hill', '1', NULL),
(127, 1, 16, 349, 363, 'Chamundi Hill', '1', NULL),
(128, 1, 30, 248, 1683, 'Ishana Vihar', '1', NULL),
(129, 1, 35, 422, 1684, 'Anami Sangha', '1', NULL),
(130, 1, 30, 98, 1685, 'kaduveli', '1', NULL),
(131, 1, 30, 130, 1686, 'keezha poongudi', '1', NULL),
(132, 1, 30, 65, 1365, 'thiruparkadal', '1', NULL),
(133, 1, 30, 98, 1688, 'keezha korukkai', '1', NULL),
(134, 1, 30, 346, 1689, 'tirupugalur', '1', NULL),
(135, 1, 30, 475, 1205, 'Temple Road', '1', NULL),
(136, 1, 33, 367, 1036, 'Durgapuram', '1', NULL),
(137, 1, 17, 549, 1691, 'Sabarimala', '1', NULL),
(138, 1, 30, 98, 1693, 'Ranganathapuram', '1', NULL),
(139, 1, 30, 551, 1694, 'Theeyatur', '1', NULL),
(140, 1, 30, 90, 1339, 'karukudi', '1', NULL),
(141, 1, 125, 606, 1696, 'Jhansa road', '1', NULL),
(142, 1, 30, 250, 771, 'Chidambaram', '1', NULL),
(143, 1, 19, 607, 1697, 'Maihar', '1', NULL),
(144, 1, 19, 608, 1698, 'Amarkantak', '1', NULL),
(145, 1, 19, 610, 1699, 'Amarkantak', '1', NULL),
(146, 1, 35, 141, 1700, 'Ujani', '1', NULL),
(147, 1, 111, 611, 1704, 'Kothapeta', '1', NULL),
(148, 1, 30, 95, 1701, 'Melur', '1', NULL),
(149, 1, 30, 95, 1702, 'Varagunamangai', '1', NULL),
(150, 1, 30, 90, 1343, 'Srirangam', '1', NULL),
(151, 1, 30, 90, 1705, 'Thillai nagar', '1', NULL),
(152, 1, 30, 90, 1331, 'Manachanallur', '1', NULL),
(153, 1, 30, 90, 1617, 'Uthamar koil', '1', NULL),
(154, 1, 17, 94, 398, 'Guruvayur', '1', NULL),
(155, 1, 17, 94, 398, 'East Nada', '1', NULL),
(156, 1, 30, 233, 818, 'pammal', '1', NULL),
(157, 1, 30, 482, 1707, 'Mangadu', '1', NULL),
(158, 166, 128, 612, 1708, 'Hingol National Park', '1', NULL),
(159, 1, 13, 613, 1709, 'Jawalamukhi', '1', NULL),
(160, 1, 30, 95, 1710, 'Alwar thirunagari', '1', NULL),
(161, 1, 30, 90, 1711, 'Thillampatti', '1', NULL),
(162, 1, 30, 95, 1712, 'Tiruppuliangudi', '1', NULL),
(163, 1, 30, 90, 1329, 'Anbil', '1', NULL),
(164, 1, 30, 95, 1236, 'Kuilnintar street', '1', NULL),
(165, 1, 30, 95, 1715, 'Mavadi pannai', '1', NULL),
(166, 1, 30, 98, 1716, 'Budalur Taluk', '1', NULL),
(167, 1, 30, 98, 1717, 'Thiruvayaru', '1', NULL),
(168, 1, 30, 95, 1718, 'Thirukulandhai', '1', NULL),
(169, 1, 30, 95, 1719, 'Thirutholaivillimangalam', '1', NULL),
(170, 1, 30, 98, 1720, 'Tirukudalur', '1', NULL),
(171, 1, 30, 95, 1721, 'Kilpidagai kasba', '1', NULL),
(172, 1, 17, 96, 435, 'pazhavangadi', '1', NULL),
(173, 1, 35, 352, 1722, 'Kiritkona ', '1', NULL),
(174, 1, 35, 515, 1723, 'Krishnanagar', '1', NULL),
(175, 1, 17, 13, 1724, 'Puliyoor', '1', NULL),
(176, 1, 129, 614, 1725, 'Housing Board Colony', '1', NULL),
(177, 1, 17, 13, 1726, 'Chengannur', '1', NULL),
(178, 1, 17, 549, 1727, 'Mallapuzhassery', '1', NULL),
(179, 1, 17, 549, 1728, 'Aranmula', '1', NULL),
(180, 1, 17, 13, 1726, 'Thiruvanvandoor', '1', NULL),
(181, 1, 17, 549, 434, 'Thiruvalla', '1', NULL),
(182, 18, 130, 615, 1729, 'Shikarpur', '1', NULL),
(183, 1, 17, 404, 391, 'Thrikkodithanam', '1', NULL),
(184, 1, 17, 416, 404, 'Thrikkakkara', '1', NULL),
(185, 1, 17, 416, 1730, 'Moozhikulam', '1', NULL),
(186, 1, 17, 326, 1732, 'Thiruvithuvakodu', '1', NULL),
(187, 1, 30, 616, 1733, 'Seerkazhi', '1', NULL),
(188, 1, 30, 599, 1734, 'Sirkali', '1', NULL),
(189, 1, 30, 65, 1735, 'Kondapalayam', '1', NULL),
(190, 1, 30, 90, 849, 'Maruthi Nagar', '1', NULL),
(191, 1, 17, 376, 439, 'Tirunavaya', '1', NULL),
(192, 1, 30, 61, 1258, 'Sattur', '1', NULL),
(193, 1, 30, 475, 1325, 'Kulasekharam', '1', NULL),
(194, 1, 111, 617, 1736, 'Ahobilam', '1', NULL),
(195, 1, 10, 618, 1737, 'Dwarka', '1', NULL),
(196, 1, 36, 226, 1739, 'Badrinath', '1', NULL),
(197, 1, 36, 274, 1740, 'Kedarnath', '1', NULL),
(198, 1, 30, 98, 1742, 'Eluppa thoppu street', '1', NULL),
(199, 1, 30, 98, 1743, 'Thiruvellaiyangudi', '1', NULL),
(200, 1, 30, 98, 1744, 'Solanganatham', '1', NULL),
(201, 1, 30, 98, 796, 'P Shanmugam road', '1', NULL),
(202, 153, 131, 620, 1746, 'Muktinath', '1', NULL),
(203, 1, 36, 226, 1748, 'Joshimath', '1', NULL),
(204, 1, 36, 101, 1749, 'Devprayag', '1', NULL),
(205, 1, 111, 617, 1751, 'Srisailam', '1', NULL),
(207, 1, 19, 75, 1611, 'Ujjain', '1', NULL),
(208, 1, 19, 440, 472, 'Mandhata', '1', NULL),
(209, 1, 30, 98, 1752, 'Oppiliyappan kovil street', '1', NULL),
(210, 1, 30, 98, 1752, 'Oppiliyappan kovil street', '1', NULL),
(211, 1, 30, 98, 1753, 'Nachairkovil', '1', NULL),
(212, 1, 30, 98, 1754, 'North street Tirucherai', '1', NULL),
(213, 1, 30, 384, 1543, 'Thirumaalirunsolai', '1', NULL),
(214, 1, 19, 440, 1755, 'Omkareshwar', '1', NULL),
(215, 1, 30, 84, 1756, 'Kodavasal taluk', '1', NULL),
(216, 1, 30, 84, 1757, 'Madapuram', '1', NULL),
(217, 1, 30, 346, 1758, 'Tirukannapuram', '1', NULL),
(218, 1, 30, 346, 1759, 'Therazendur', '1', NULL),
(219, 1, 30, 346, 1760, 'Melakottaivasal', '1', NULL),
(220, 1, 30, 346, 1761, 'Tiruindalur', '1', NULL),
(221, 1, 30, 346, 1762, 'Sirkali railway road', '1', NULL),
(222, 1, 30, 346, 1763, 'Nangoor', '1', NULL),
(223, 1, 30, 346, 1764, 'Melakottaivasal', '1', NULL),
(224, 1, 30, 98, 1770, 'Old tiruvaiyaru road', '1', NULL),
(225, 1, 30, 98, 1771, 'Nathankoil main road', '1', NULL),
(226, 1, 30, 98, 1772, 'Tiruvelliangudi', '1', NULL),
(227, 1, 30, 98, 1716, 'Thirupper Nagar', '1', NULL),
(228, 1, 30, 475, 1773, 'Thiruppathisaram', '1', NULL),
(229, 1, 30, 130, 1774, 'Thirukkotiyoor', '1', NULL),
(230, 1, 33, 367, 987, '	Gokul', '1', NULL),
(231, 1, 30, 384, 1776, 'Periyar', '1', NULL),
(232, 1, 30, 61, 1777, 'Irukankudi', '1', NULL),
(233, 1, 30, 346, 1765, 'Thirunangoor', '1', NULL),
(234, 1, 30, 346, 1768, 'Melasalai', '1', NULL),
(235, 1, 30, 250, 771, 'ECR road', '1', NULL),
(236, 1, 30, 346, 1766, 'Thirunangoor', '1', NULL),
(237, 1, 30, 346, 1767, 'Thirunangoor', '1', NULL),
(239, 1, 30, 95, 847, 'Kulasekarapattinam', '1', NULL),
(240, 1, 20, 31, 98, 'Ellora (Verul)', '1', NULL),
(241, 1, 30, 482, 1651, 'Nethaji nagar', '1', NULL),
(242, 1, 20, 336, 1784, 'Trimbak', '1', NULL),
(243, 1, 20, 546, 1785, 'Bhojgiri', '1', NULL),
(244, 1, 20, 510, 541, 'Aundha Nagnath', '1', NULL),
(245, 1, 30, 250, 1779, 'Thiruvaheendrapuram', '1', NULL),
(246, 1, 30, 62, 1786, 'Thirukovilur', '1', NULL),
(247, 1, 20, 623, 1787, 'Shiridi', '1', NULL),
(248, 1, 30, 95, 1788, 'kulasekarapatnam', '1', NULL),
(249, 1, 33, 66, 1035, 'Lahori Tola', '1', NULL),
(250, 1, 30, 346, 1789, '	Thirukannagudi', '1', NULL),
(251, 1, 30, 482, 789, 'Ennaikaran', '1', NULL),
(252, 1, 30, 417, 1790, 'Bannari', '1', NULL),
(253, 1, 30, 98, 1797, 'Punnainallur', '1', NULL),
(254, 1, 30, 98, 1817, 'Punnainallur', '1', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `astrologerbookings`
--

CREATE TABLE `astrologerbookings` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `countryId` int(11) NOT NULL,
  `stateId` int(11) NOT NULL,
  `districtId` int(11) NOT NULL,
  `cityId` int(11) NOT NULL,
  `areaId` int(11) NOT NULL,
  `bookingDate` varchar(100) NOT NULL,
  `bookingTime` varchar(100) NOT NULL,
  `astrologerPreferedLanguage` varchar(255) NOT NULL,
  `isAdminApproved` int(11) NOT NULL,
  `isAstrologerApproved` int(11) NOT NULL,
  `rejectedReasonByAdmin` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `astrologerbookings`
--

INSERT INTO `astrologerbookings` (`id`, `userId`, `countryId`, `stateId`, `districtId`, `cityId`, `areaId`, `bookingDate`, `bookingTime`, `astrologerPreferedLanguage`, `isAdminApproved`, `isAstrologerApproved`, `rejectedReasonByAdmin`) VALUES
(1, 4, 1, 30, 384, 800, 5, '22-04-2022', '10:30 AM', 'Tamil|Telugu|Hindi', 2, 0, 'data deleted');

-- --------------------------------------------------------

--
-- Table structure for table `blogandeventcategories`
--

CREATE TABLE `blogandeventcategories` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blogandeventcategories`
--

INSERT INTO `blogandeventcategories` (`id`, `category_name`, `created_at`, `updated_at`) VALUES
(3, 'Full Moon ', NULL, '2022-06-08 08:51:42'),
(4, 'No Moon Day', NULL, NULL),
(5, 'Shashti', NULL, NULL),
(6, 'Pradosham', NULL, NULL),
(7, 'Girivalam', NULL, NULL),
(8, 'Ganesha', NULL, NULL),
(9, 'laxman', NULL, NULL),
(10, 'shivan', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `blog_title` varchar(255) DEFAULT NULL,
  `blog_description` text DEFAULT NULL,
  `blog_source` text DEFAULT NULL,
  `blog_image` varchar(255) DEFAULT NULL,
  `blog_tags` varchar(255) DEFAULT NULL,
  `category` int(11) NOT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL,
  `show_blogs_in` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `blog_title`, `blog_description`, `blog_source`, `blog_image`, `blog_tags`, `category`, `created_date`, `created_by`, `is_active`, `show_blogs_in`) VALUES
(11, 'Srikalahasteeswara Temples', 'Srikalahasteeswara Temple (also known as Srikalahasti Temple) is one of South India’s most well-known Shiva temples. Kannappa, a famous Shiva devotee, was about to donate both of his eyeballs to cover the blood gushing from the Siva linga when Lord Siva stopped him and granted mukti. The temple is also regarded as Rahu-Ketu kshetra and Dakshina Kailasam.', '', '/public/blog_image/sivaloard.jpg', 'shiva', 5, '2020-07-31 07:03:30', 0, 1, 'both'),
(14, 'Bhairava Ashtami', 'Bhairava Ashtami is a Hindu sacred day that commemorates the birth of Bhairava, Shiva’s terrifying and furious incarnation. It occurs on the eighth lunar day (Ashtami) in the Hindu month of Kartik or Margashirsha, during the fortnight of the waning moon (Krishna paksha). Bhairava is revered for success, riches, health, and the elimination of obstacles.\r\n\r\nOn Bhairava Ashtami, a 24-hour devotion is held, with prayers, and stories about Bhairava, Shiva, and Parvati being told. An arati of Bhairava should be done at midnight with conches, bells, and drums. Observing Bhairava Ashtami is said to relieve a devotee from sin and the fear of death. Bhairava is called Dandapani, as he holds a rod or Danda to punish sinners. He rides a dog, so he is also known as Swaswa meaning “whose horse is a dog”. In Tamil Nadu medu vada maala and jaggery Pongal are offered to Bhairav. Flowers and sweets are offered to Bhairava, Shiva, Shiva’s consort Parvati, and Bhairava’s vahana, the dog. Milk, sweets, curds, and other foods are also given to dogs as gifts.', 'source', '/public/blog_image/sivanservices.jpg', 'shiva,popular,sacred', 9, '2022-03-14 09:55:34', 0, 1, 'both'),
(16, 'Shree Padmanabhaswamy Temple', 'An intricate fusion of the Chera style (Kerala Architecture) and the Malayala style (Tamil Architecture), featuring high walls, and a 16th-century gopura.\r\n\r\nThe Temple is regarded as the world’s most valuable site of worship. In Malayalam, the name ‘Thiruvananthapuram’ means “The City of Lord Ananta (Vishnu)”, referring to the deity of the Padmanabhaswamy temple. While the Ananthapura temple in Kumbla, Kasaragod, is regarded as the deity’s original seat (“Moolasthanam”), it is architecturally similar to the Adikesava Perumal temple in Thiruvattar to some extent.\r\n\r\nAccording to locals, one of the names of this temple, “The Golden Temple”, was given in recognition of the fact that the Temple was already unimaginably wealthy at the time. Many existing pieces of Sangam Tamil literature and poetry, as well as later works of Tamil poet-saints like Nammalwar from the 9th century, refer to the temple and city as having pure gold walls. In certain regions, the temple and the entire city are praised as being constructed of gold, with the temple being referred to as heaven.', 'source', '/public/blog_image/Featured-image.jpg', 'Popular,Sacred,Kerala Architecture', 4, '2022-03-14 09:56:25', 0, 1, 'both'),
(17, 'Swami Ayyappa Temple', 'Swami Ayyappa Temple is located in Sabarimala hill inside the Periyar Tiger Reserve in the Perinad Village, Pathanamthitta district, Kerala, India.\n\nThe Travancore Devaswom Board (TDB) is working on a pilgrimage circuit that will connect five temples with legendary ties to Sabarimala’s Lord Ayyappa temple. The Sastha temples at Pandalam, Kulathupuzha, Aryankavu, Achankovil, and Erumeli are included in the circuit. These shrines have a historical connection to Lord Ayyappa’s life.\n\nIt is said that the infant who later became Lord Ayyappa was found from the forest area at Kulathupuzha by the Pandalam Kings. The Pandalam Sastha temple is linked to the Pandalam royal family, where the Lord spent his childhood. The Lord’s adolescence is linked to the Aryankavu temple. Young Ayyappa studied archery with a Sourashtra Brahmin household in Madurai. Lord Ayyappa is said to have fallen in love with his guru’s daughter. Despite the fact that their marriage was set, it had to be postponed because the girl’s menstrual cycle started on that day. The fifth temple in Erumeli is associated with Ayyappa’s battle with the Maravappada and Mahisha’s death.', 'source', '/public/blog_image/Sri-Kalahasti-Temple-Srikalahasti-Andhra-Pradesh.jpg', 'tags', 3, '2022-03-14 13:53:52', 2020, 1, 'both'),
(26, 'siva temple', 'Swami Ayyappa Temple is located in Sabarimala hill inside the Periyar Tiger Reserve in the Perinad Village, Pathanamthitta district, Kerala, India. The Travancore Devaswom Board (TDB) is working on a pilgrimage circuit that will connect five temples with legendary ties to Sabarimala’s Lord Ayyappa temple. The Sastha temples at Pandalam, Kulathupuzha, Aryankavu, Achankovil, and Erumeli are included in the circuit. These shrines have a historical connection to Lord Ayyappa’s life. It is said that the infant who later became Lord Ayyappa was found from the forest area at Kulathupuzha by the Pandalam Kings. The Pandalam Sastha temple is linked to the Pandalam royal family, where the Lord spent his childhood. The Lord’s adolescence is linked to the Aryankavu temple. Young Ayyappa studied archery with a Sourashtra Brahmin household in Madurai. Lord Ayyappa is said to have fallen in love with his guru’s daughter. Despite the fact that their marriage was set, it had to be postponed because the girl’s menstrual cycle started on that day. The fifth temple in Erumeli is associated with Ayyappa’s battle with the Maravappada and Mahisha’s death.', '', '/public/blog_image/sivanservices.jpg', 'Swami Ayyappa', 3, '2022-05-07 05:40:27', 0, 1, 'both'),
(32, 'Golden Temple', 'Swami Ayyappa Temple is located in Sabarimala hill inside the Periyar Tiger Reserve in the Perinad Village, Pathanamthitta district, Kerala, India. The Travancore Devaswom Board (TDB) is working on a pilgrimage circuit that will connect five temples with legendary ties to Sabarimala’s Lord Ayyappa temple. The Sastha temples at Pandalam, Kulathupuzha, Aryankavu, Achankovil, and Erumeli are included in the circuit. These shrines have a historical connection to Lord Ayyappa’s life. It is said that the infant who later became Lord Ayyappa was found from the forest area at Kulathupuzha by the Pandalam Kings. The Pandalam Sastha temple is linked to the Pandalam royal family, where the Lord spent his childhood. The Lord’s adolescence is linked to the Aryankavu temple. Young Ayyappa studied archery with a Sourashtra Brahmin household in Madurai. Lord Ayyappa is said to have fallen in love with his guru’s daughter. Despite the fact that their marriage was set, it had to be postponed because the girl’s menstrual cycle started on that day. The fifth temple in Erumeli is associated with Ayyappa’s battle with the Maravappada and Mahisha’s death.', 'undefined', '/public/blog_image/download (4).jpeg', 'Golden Temple', 4, '2022-09-17 10:41:44', 0, 0, 'both');

-- --------------------------------------------------------

--
-- Table structure for table `booking_fields`
--

CREATE TABLE `booking_fields` (
  `id` int(11) NOT NULL,
  `name` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `booking_fields`
--

INSERT INTO `booking_fields` (`id`, `name`) VALUES
(5, 'Ther'),
(6, 'Ear boring ceremony'),
(8, 'Anna Prasanam '),
(9, 'Shashti Purti '),
(10, ' Chowla Upanayanam'),
(11, 'Seemantham'),
(12, 'Wedding (Vivaham) '),
(13, 'Punyaha Vachanam and Nama Karanam'),
(14, 'Ugra Radha Shanti / 59th Birthday'),
(15, 'Vijaya Radha Shanti'),
(16, 'Sata Abhishekam'),
(17, 'Ganapathi Homam');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `vendor_id` int(11) NOT NULL,
  `CompanyName` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `Categories` varchar(255) NOT NULL,
  `SubCategories` varchar(255) NOT NULL,
  `EmailId` varchar(50) NOT NULL,
  `WebsiteLink` text NOT NULL,
  `RegularPrice` int(11) NOT NULL,
  `DiscountPrice` int(11) NOT NULL,
  `Country` int(11) NOT NULL,
  `State` int(11) NOT NULL,
  `District` int(11) NOT NULL,
  `City` int(11) NOT NULL,
  `area` int(11) DEFAULT NULL,
  `address` text NOT NULL,
  `Tags` int(11) NOT NULL,
  `businessPhoto` varchar(255) NOT NULL,
  `TempleDistance` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `vendor_id`, `CompanyName`, `Description`, `Categories`, `SubCategories`, `EmailId`, `WebsiteLink`, `RegularPrice`, `DiscountPrice`, `Country`, `State`, `District`, `City`, `area`, `address`, `Tags`, `businessPhoto`, `TempleDistance`) VALUES
(7, 0, 'Rajan', 'ada', 'tansport', 'Tours & Travels', 'a@g.com', 'https://sdad.com', 120, 100, 1, 30, 384, 800, NULL, '', 0, '', ''),
(8, 0, 'Siva', 'asda', 'tansport', 'Auto', 'qawferwf@gmail.com', 'https://sdad.com', 130, 112, 1, 30, 384, 800, NULL, '', 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `categorieslist`
--

CREATE TABLE `categorieslist` (
  `categoryId` int(11) NOT NULL,
  `categoryName` varchar(255) DEFAULT NULL,
  `categoryimg` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categorieslist`
--

INSERT INTO `categorieslist` (`categoryId`, `categoryName`, `categoryimg`) VALUES
(3, 'tansport', 'https://icons.veryicon.com/png/o/application/akjs-mobile-icon-library/ak-jt-public-transport.png'),
(4, 'photography', 'https://icons.veryicon.com/png/o/miscellaneous/domain-icons/photography-19.png'),
(7, 'marriage', 'https://icons.veryicon.com/png/o/miscellaneous/streamline-bold-icon/couple-man-woman-2.png');

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `id` int(10) UNSIGNED NOT NULL,
  `country_id` int(10) UNSIGNED NOT NULL,
  `state_id` int(10) UNSIGNED NOT NULL,
  `district_id` int(10) UNSIGNED DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `search_key` varchar(255) DEFAULT NULL,
  `position` varchar(20) DEFAULT NULL,
  `is_active` text NOT NULL,
  `created_at` varchar(100) DEFAULT NULL,
  `updated_at` varchar(100) DEFAULT NULL,
  `districtname` varchar(255) DEFAULT NULL,
  `created_by` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`id`, `country_id`, `state_id`, `district_id`, `city`, `search_key`, `position`, `is_active`, `created_at`, `updated_at`, `districtname`, `created_by`) VALUES
(2, 2, 2, 400, 'Adoni', 'Adoni', '0', '1', '2020-05-03 08:09:05', '2020-05-03 08:09:05', 'Kurnool', NULL),
(3, 2, 2, 364, 'Alwal', 'Alwal', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Medchal-Malkajgiri ', NULL),
(4, 2, 2, 412, 'Amalapuram', 'Amalapuram', '0', '1', '2020-05-03 08:11:30', '2020-05-03 08:11:30', 'East Godavari', NULL),
(5, 2, 2, 60, 'Anakapalle', 'Anakapalle', '0', '1', '2020-05-03 08:03:42', '2020-05-03 08:03:42', 'Visakhapatnam', NULL),
(6, 2, 2, 25, 'Anantapur', 'Anantapur', '0', '1', '2020-05-03 07:58:12', '2020-05-03 07:58:12', 'Anantapur', NULL),
(7, 2, 2, 483, 'Bapatla', 'Bapatla', '0', '1', '2020-05-03 08:13:59', '2020-05-03 08:13:59', 'Guntur', NULL),
(8, 2, 2, 48, 'Bhimavaram', 'Bhimavaram', '0', '1', '2020-05-03 08:00:36', '2020-05-03 08:00:36', 'West Godavari ', NULL),
(9, 2, 2, 59, 'Bobbili', 'Bobbili', '0', '1', '2020-05-03 08:02:29', '2020-05-03 08:02:29', 'Vizianagaram', NULL),
(10, 2, 2, 483, 'Chilakalurupet', 'Chilakalurupet', '0', '1', '2020-05-03 08:14:11', '2020-05-03 08:14:11', 'Guntur', NULL),
(11, 2, 2, 251, 'Chinnachowk', 'Chinnachowk', '0', '1', '2020-05-03 08:07:18', '2020-05-03 08:07:18', 'Cuddapah', NULL),
(12, 2, 2, 0, 'Chirala', 'Chirala', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Prakasam', NULL),
(14, 2, 2, 496, 'Cuddapah', 'Cuddapah', '0', '1', '2020-05-03 08:16:42', '2020-05-03 08:16:42', 'Kadapa', NULL),
(15, 2, 2, 25, 'Dharmavaram', 'Dharmavaram', '0', '1', '2020-05-03 07:58:24', '2020-05-03 07:58:24', 'Anantapur', NULL),
(16, 2, 2, 400, 'Dhone', 'Dhone', '0', '1', '2020-05-03 08:09:16', '2020-05-03 08:09:16', 'Kurnool', NULL),
(17, 2, 2, 48, 'Eluru', 'Eluru', '0', '1', '2020-05-03 08:00:51', '2020-05-03 08:00:51', 'West Godavari ', NULL),
(18, 2, 2, 60, 'Gajuwaka', 'Gajuwaka', '0', '1', '2020-05-03 08:03:57', '2020-05-03 08:03:57', 'Visakhapatnam', NULL),
(19, 2, 2, 25, 'Gooty', 'Gooty', '0', '1', '2020-05-03 07:58:35', '2020-05-03 07:58:35', 'Anantapur', NULL),
(20, 2, 2, 402, 'Gudivada', 'Gudivada', '0', '1', '2020-05-03 08:10:23', '2020-05-03 08:10:23', 'Krishna', NULL),
(21, 2, 2, 332, 'Gudur', 'Gudur', '0', '1', '2020-05-03 08:08:18', '2020-05-03 08:08:18', 'Nellore', NULL),
(22, 2, 2, 25, 'Guntakal', 'Guntakal', '0', '1', '2020-05-03 07:58:48', '2020-05-03 07:58:48', 'Anantapur', NULL),
(23, 2, 2, 483, 'Guntur', 'Guntur', '0', '1', '2020-05-03 08:14:25', '2020-05-03 08:14:25', 'Guntur', NULL),
(24, 2, 2, 25, 'Hindupur', 'Hindupur', '0', '1', '2020-05-03 07:59:00', '2020-05-03 07:59:00', 'Anantapur', NULL),
(25, 2, 2, 527, 'Jangaon', 'Jangaon', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jangaon', NULL),
(26, 2, 2, 496, 'Kadapa', 'Kadapa', '0', '1', '2020-05-03 08:16:54', '2020-05-03 08:16:54', 'Kadapa', NULL),
(27, 2, 2, 25, 'Kadiri', 'Kadiri', '0', '1', '2020-05-03 07:59:13', '2020-05-03 07:59:13', 'Anantapur', NULL),
(28, 2, 2, 412, 'Kakinada', 'Kakinada', '0', '1', '2020-05-03 08:11:44', '2020-05-03 08:11:44', 'East Godavari', NULL),
(29, 2, 2, 0, 'Kandukur', 'Kandukur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Prakasam', NULL),
(30, 2, 2, 332, 'Kavali', 'Kavali', '0', '1', '2020-05-03 08:08:30', '2020-05-03 08:08:30', 'Nellore', NULL),
(31, 2, 2, 400, 'Kurnool', 'Kurnool', '0', '1', '2020-05-03 08:09:27', '2020-05-03 08:09:27', 'Kurnool', NULL),
(32, 2, 2, 483, 'Macherla', 'Macherla', '0', '1', '2020-05-03 08:14:38', '2020-05-03 08:14:38', 'Guntur', NULL),
(33, 2, 2, 402, 'Machilipatnam', 'Machilipatnam', '0', '1', '2020-05-03 08:10:34', '2020-05-03 08:10:34', 'Krishna', NULL),
(34, 2, 2, 244, 'Madanapalle', 'Madanapalle', '0', '1', '2020-05-03 08:05:55', '2020-05-03 08:05:55', 'Chittoor', NULL),
(35, 2, 2, 412, 'Mandapeta', 'Mandapeta', '0', '1', '2020-05-03 08:11:58', '2020-05-03 08:11:58', 'East Godavari', NULL),
(36, 2, 2, 483, 'Mangalagiri', 'Mangalagiri', '0', '1', '2020-05-03 08:14:51', '2020-05-03 08:14:51', 'Guntur', NULL),
(37, 2, 2, 0, 'Markapur', 'Markapur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Prakasam', NULL),
(38, 2, 2, 400, 'Nandyal', 'Nandyal', '0', '1', '2020-05-03 08:09:40', '2020-05-03 08:09:40', 'Kurnool', NULL),
(39, 2, 2, 483, 'Narasaraopet', 'Narasaraopet', '0', '1', '2020-05-03 08:15:05', '2020-05-03 08:15:05', 'Guntur', NULL),
(40, 2, 2, 332, 'Nellore', 'Nellore', '0', '1', '2020-05-03 08:08:42', '2020-05-03 08:08:42', 'Nellore', NULL),
(41, 2, 2, 48, 'Nidadavole', 'Nidadavole', '0', '1', '2020-05-03 08:01:04', '2020-05-03 08:01:04', 'West Godavari ', NULL),
(42, 2, 2, 402, 'Nuzvid', 'Nuzvid', '0', '1', '2020-05-03 08:10:46', '2020-05-03 08:10:46', 'Krishna', NULL),
(43, 2, 2, 0, 'Ongole', 'Ongole', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Prakasam', NULL),
(44, 2, 2, 48, 'Palacole', 'Palacole', '0', '1', '2020-05-03 08:01:17', '2020-05-03 08:01:17', 'West Godavari ', NULL),
(45, 2, 2, 117, 'Palasa Kasibugga', 'Palasa Kasibugga', '0', '1', '2020-05-03 08:04:37', '2020-05-03 08:04:37', 'Srikakulam', NULL),
(46, 2, 2, 59, 'Parvathipuram', 'Parvathipuram', '0', '1', '2020-05-03 08:02:41', '2020-05-03 08:02:41', 'Vizianagaram', NULL),
(47, 2, 2, 412, 'Peddapuram', 'Peddapuram', '0', '1', '2020-05-03 08:13:02', '2020-05-03 08:13:02', 'East Godavari ', NULL),
(48, 2, 2, 483, 'Piduguralla', 'Piduguralla', '0', '1', '2020-05-03 08:15:17', '2020-05-03 08:15:17', 'Guntur', NULL),
(49, 2, 2, 412, 'Pitapuram', 'Pitapuram', '0', '1', '2020-05-03 08:13:15', '2020-05-03 08:13:15', 'East Godavari ', NULL),
(50, 2, 2, 412, 'Pithapuram', 'Pithapuram', '0', '1', '2020-05-03 08:13:28', '2020-05-03 08:13:28', 'East Godavari ', NULL),
(51, 2, 2, 483, 'Ponnur', 'Ponnur', '0', '1', '2020-05-03 08:15:30', '2020-05-03 08:15:30', 'Guntur', NULL),
(52, 2, 2, 496, 'Proddatur', 'Proddatur', '0', '1', '2020-05-03 08:17:04', '2020-05-03 08:17:04', 'Kadapa', NULL),
(53, 2, 2, 244, 'Punganur', 'Punganur', '0', '1', '2020-05-03 08:06:06', '2020-05-03 08:06:06', 'Chittoor', NULL),
(54, 2, 2, 412, 'Rajahmundry', 'Rajahmundry', '0', '1', '2020-05-03 08:12:09', '2020-05-03 08:12:09', 'East Godavari', NULL),
(55, 2, 2, 496, 'Rajampet', 'Rajampet', '0', '1', '2020-05-03 08:17:17', '2020-05-03 08:17:17', 'Kadapa', NULL),
(56, 2, 2, 412, 'Ramachandrapuram', 'Ramachandrapuram', '0', '1', '2020-05-03 08:12:23', '2020-05-03 08:12:23', 'East Godavari', NULL),
(57, 2, 2, 496, 'Rayachoti', 'Rayachoti', '0', '1', '2020-05-03 08:17:29', '2020-05-03 08:17:29', 'Kadapa', NULL),
(58, 2, 2, 25, 'Rayadurg', 'Rayadurg', '0', '1', '2020-05-03 07:59:26', '2020-05-03 07:59:26', 'Anantapur', NULL),
(59, 2, 2, 59, 'Salur', 'Salur', '0', '1', '2020-05-03 08:02:54', '2020-05-03 08:02:54', 'Vizianagaram', NULL),
(60, 2, 2, 412, 'Samalkot', 'Samalkot', '0', '1', '2020-05-03 08:12:35', '2020-05-03 08:12:35', 'East Godavari', NULL),
(61, 2, 2, 483, 'Sattenapalle', 'Sattenapalle', '0', '1', '2020-05-03 08:15:44', '2020-05-03 08:15:44', 'Guntur', NULL),
(62, 2, 2, 117, 'Srikakulam', 'Srikakulam', '0', '1', '2020-05-03 08:04:51', '2020-05-03 08:04:51', 'Srikakulam', NULL),
(63, 2, 2, 244, 'Srikalahasti', 'Srikalahasti', '0', '1', '2020-05-03 08:06:18', '2020-05-03 08:06:18', 'Chittoor', NULL),
(64, 2, 2, 48, 'Tadepalligudem', 'Tadepalligudem', '0', '1', '2020-05-03 08:01:31', '2020-05-03 08:01:31', 'West Godavari ', NULL),
(65, 2, 2, 25, 'Tadpatri', 'Tadpatri', '0', '1', '2020-05-03 07:59:38', '2020-05-03 07:59:38', 'Anantapur', NULL),
(66, 2, 2, 48, 'Tanuku', 'Tanuku', '0', '1', '2020-05-03 08:01:44', '2020-05-03 08:01:44', 'West Godavari ', NULL),
(67, 2, 2, 483, 'Tenali', 'Tenali', '0', '1', '2020-05-03 08:15:56', '2020-05-03 08:15:56', 'Guntur', NULL),
(68, 2, 2, 244, 'Tirupati', 'Tirupati', '0', '1', '2020-05-03 08:06:30', '2020-05-03 08:06:30', 'Chittoor', NULL),
(69, 2, 2, 412, 'Tuni', 'Tuni', '0', '1', '2020-05-03 08:12:48', '2020-05-03 08:12:48', 'East Godavari', NULL),
(70, 2, 2, 402, 'Vijayawada', 'Vijayawada', '0', '1', '2020-05-03 08:10:58', '2020-05-03 08:10:58', 'Krishna', NULL),
(71, 2, 2, 483, 'Vinukonda', 'Vinukonda', '0', '1', '2020-05-03 08:16:11', '2020-05-03 08:16:11', 'Guntur', NULL),
(72, 2, 2, 60, 'Visakhapatnam', 'Visakhapatnam', '0', '1', '2020-05-03 08:04:11', '2020-05-03 08:04:11', 'Visakhapatnam', NULL),
(73, 2, 2, 59, 'Vizianagaram', 'Vizianagaram', '0', '1', '2020-05-03 08:03:07', '2020-05-03 08:03:07', 'Vizianagaram', NULL),
(74, 2, 2, 400, 'Yemmiganur', 'Yemmiganur', '0', '1', '2020-05-03 08:09:52', '2020-05-03 08:09:52', 'Kurnool', NULL),
(75, 2, 2, 382, 'Yenugonda', 'Yenugonda', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mahbubnagar', NULL),
(76, 2, 2, 181, 'Zahirabad', 'Zahirabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sangareddy', NULL),
(77, 2, 3, 6, 'Along', 'Along', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'West Siang', NULL),
(78, 2, 3, 317, 'Itanagar', 'Itanagar', '0', '1', '2020-05-03 08:08:00', '2020-05-03 08:08:00', 'Papum Pare', NULL),
(79, 2, 4, 217, 'Bongaigaon', 'Bongaigaon', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bongaigaon', NULL),
(80, 2, 4, 285, 'Dhubri', 'Dhubri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dhubri', NULL),
(81, 2, 4, 289, 'Dibrugarh', 'Dibrugarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dibrugarh', NULL),
(82, 2, 4, 467, 'Diphu', 'Diphu', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Karbi Anglong ', NULL),
(83, 2, 4, 484, 'Dispur', 'Dispur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kamrup Metropolitan', NULL),
(84, 2, 4, 468, 'Goalpara', 'Goalpara', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Goalpara', NULL),
(85, 2, 4, 487, 'Guwahati', 'Guwahati', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kamrup', NULL),
(86, 2, 4, 503, 'Jorhat', 'Jorhat', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jorhat', NULL),
(87, 2, 4, 465, 'Karimganj', 'Karimganj', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Karimganj', NULL),
(88, 2, 4, 514, 'Lumding', 'Lumding', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hojai', NULL),
(89, 2, 4, 347, 'Nagaon', 'Nagaon', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nagaon', NULL),
(90, 2, 4, 217, 'New Bongaigaon Railway Colony', 'New Bongaigaon Railway Colony', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bongaigaon', NULL),
(91, 2, 4, 396, 'North Lakhimpur', 'North Lakhimpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Lakhimpur', NULL),
(92, 2, 4, 147, 'Sibsagar', 'Sibsagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sibsagar', NULL),
(93, 2, 4, 224, 'Silchar', 'Silchar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Cachar', NULL),
(94, 2, 4, 124, 'Tezpur', 'Tezpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sonitpur', NULL),
(95, 2, 4, 92, 'Tinsukia', 'Tinsukia', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Tinsukia', NULL),
(96, 2, 5, 204, 'Ara', 'Ara', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bhojpur', NULL),
(97, 2, 5, 27, 'Araria', 'Araria', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Araria', NULL),
(98, 2, 5, 31, 'Aurangabad', 'Aurangabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Aurangabad', NULL),
(99, 2, 5, 0, 'Bagaha', 'Bagaha', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pashchim Champaran', NULL),
(100, 2, 5, 58, 'Balia', 'Balia', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ballia', NULL),
(101, 2, 5, 0, 'Barh', 'Barh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Patna', NULL),
(102, 2, 5, 165, 'Baruni', 'Baruni', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Begusarai', NULL),
(103, 2, 5, 165, 'Begusarai', 'Begusarai', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Begusarai', NULL),
(104, 2, 5, 66, 'Benipur', 'Benipur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Varanasi', NULL),
(105, 2, 5, 52, 'Bettiah', 'Bettiah', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'West Champaran', NULL),
(106, 2, 5, 187, 'Bhagalpur', 'Bhagalpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bhagalpur', NULL),
(107, 2, 5, 208, 'Bihar', 'Bihar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bihar', NULL),
(108, 2, 5, 0, 'Bihta', 'Bihta', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Patna', NULL),
(109, 2, 5, 223, 'Buxar', 'Buxar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Buxar', NULL),
(110, 2, 5, 231, 'Chapra', 'Chapra', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Chapra', NULL),
(111, 2, 5, 259, 'Darbhanga', 'Darbhanga', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Darbhanga', NULL),
(112, 2, 5, 275, 'Dehri', 'Dehri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Rohtas', NULL),
(113, 2, 5, 0, 'Dinapur Nizamat', 'Dinapur Nizamat', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Patna', NULL),
(114, 2, 5, 223, 'Dumraon', 'Dumraon', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Buxar', NULL),
(115, 2, 5, 454, 'Gaya', 'Gaya', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Gaya', NULL),
(116, 2, 5, 474, 'Gopalganj', 'Gopalganj', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Gopalganj', NULL),
(117, 2, 5, 68, 'Hajipur', 'Hajipur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Vaishali', NULL),
(118, 2, 5, 353, 'Jamalpur', 'Jamalpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Munger', NULL),
(119, 2, 5, 528, 'Jamui', 'Jamui', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jamui', NULL),
(120, 2, 5, 523, 'Jehanabad', 'Jehanabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jehanabad', NULL),
(121, 2, 5, 449, 'Katihar', 'Katihar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Katihar', NULL),
(122, 2, 5, 444, 'Khagaria', 'Khagaria', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Khagaria', NULL),
(123, 2, 5, 432, 'Kishanganj', 'Kishanganj', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kishanganj', NULL),
(124, 2, 5, 394, 'Lakhisarai', 'Lakhisarai', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Lakhisarai', NULL),
(125, 2, 5, 386, 'Madhepura', 'Madhepura', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Madhepura', NULL),
(126, 2, 5, 385, 'Madhubani', 'Madhubani', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Madhubani', NULL),
(127, 2, 5, 0, 'Masaurhi', 'Masaurhi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Patna', NULL),
(128, 2, 5, 0, 'Mokama', 'Mokama', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Patna', NULL),
(129, 2, 5, 0, 'Mokameh', 'Mokameh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Patna', NULL),
(130, 2, 5, 411, 'Motihari', 'Motihari', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'East Champaran', NULL),
(131, 2, 5, 353, 'Munger', 'Munger', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Munger', NULL),
(132, 2, 5, 350, 'Muzaffarpur', 'Muzaffarpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Muzaffarpur', NULL),
(133, 2, 5, 334, 'Nawada', 'Nawada', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nawada', NULL),
(134, 2, 5, 0, 'Patna', 'Patna', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Patna', NULL),
(135, 2, 5, 0, 'Phulwari Sharif', 'Phulwari Sharif', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Patna', NULL),
(136, 2, 5, 0, 'Purnia', 'Purnia', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Purnia', NULL),
(137, 2, 5, 193, 'Saharsa', 'Saharsa', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Saharsa', NULL),
(138, 2, 5, 184, 'Samastipur', 'Samastipur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Samastipur', NULL),
(139, 2, 5, 275, 'Sasaram', 'Sasaram', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Rohtas', NULL),
(140, 2, 5, 154, 'Sheikhpura', 'Sheikhpura', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sheikhpura', NULL),
(141, 2, 5, 132, 'Sitamarhi', 'Sitamarhi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sitamarhi', NULL),
(142, 2, 5, 129, 'Siwan', 'Siwan', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Siwan', NULL),
(143, 2, 5, 112, 'Supaul', 'Supaul', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Supaul', NULL),
(144, 2, 5, 165, 'Teghra', 'Teghra', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Begusarai', NULL),
(145, 2, 6, 106, 'Ambikapur', 'Ambikapur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Surguja', NULL),
(146, 2, 6, 104, 'Bhatapara', 'Bhatapara', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Baloda Bazar', NULL),
(147, 2, 6, 302, 'Bhilai', 'Bhilai', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Durg', NULL),
(148, 2, 6, 302, 'Bhilai Charoda', 'Bhilai Charoda', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Durg', NULL),
(149, 2, 6, 213, 'Bilaspur', 'Bilaspur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bilaspur', NULL),
(150, 2, 6, 406, 'Chirmiri', 'Chirmiri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Koriya', NULL),
(151, 2, 6, 91, 'Dalli-Rajhara', 'Dalli-Rajhara', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Balod', NULL),
(152, 2, 6, 269, 'Dhamtari', 'Dhamtari', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dhamtari', NULL),
(153, 2, 6, 302, 'Durg', 'Durg', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Durg', NULL),
(154, 2, 6, 302, 'Durg-Bhilainagar', 'Durg-Bhilainagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Durg', NULL),
(155, 2, 6, 159, 'Jagdalpur', 'Jagdalpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bastar', NULL),
(156, 2, 6, 236, 'Korba', 'Korba', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Chhattisgarh', NULL),
(157, 2, 6, 383, 'Mahasamund', 'Mahasamund', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mahasamund', NULL),
(158, 2, 6, 236, 'Raigarh', 'Raigarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Chhattisgarh', NULL),
(159, 2, 6, 307, 'Raipur', 'Raipur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Raipur', NULL),
(160, 2, 6, 304, 'Rajnandgaon', 'Rajnandgaon', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Rajnandgaon', NULL),
(161, 2, 7, 253, 'Dadra', 'Dadra', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dadra and Nagar Haveli', NULL),
(162, 2, 7, 253, 'Silvassa', 'Silvassa', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dadra and Nagar Haveli', NULL),
(163, 2, 8, 265, 'Delhi', 'Delhi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Delhi', NULL),
(164, 2, 9, 122, 'Madgaon', 'Madgaon', '0', '1', '2020-05-03 08:18:36', '2020-05-03 08:18:36', 'South Goa', NULL),
(165, 2, 9, 122, 'Margao', 'Margao', '0', '1', '2020-05-03 08:18:48', '2020-05-03 08:18:48', 'South Goa', NULL),
(166, 2, 9, 122, 'Mormugao', 'Mormugao', '0', '1', '2020-05-03 08:18:58', '2020-05-03 08:18:58', 'South Goa', NULL),
(167, 2, 9, 466, 'Panaji', 'Panaji', '0', '1', '2020-05-03 08:19:45', '2020-05-03 08:19:45', 'Goa', NULL),
(168, 2, 9, 122, 'Vasco Da Gama', 'Vasco Da Gama', '0', '1', '2020-05-03 08:19:15', '2020-05-03 08:19:15', 'South Goa', NULL),
(169, 2, 10, 0, 'Ahmedabad', 'Ahmedabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ahmedabad', NULL),
(170, 2, 10, 21, 'Amreli', 'Amreli', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Amreli', NULL),
(171, 2, 10, 24, 'Anand', 'Anand', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Anand', NULL),
(172, 2, 10, 498, 'Anjar', 'Anjar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kachchh', NULL),
(173, 2, 10, 197, 'Anklesvar', 'Anklesvar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bharuch', NULL),
(174, 2, 10, 111, 'Bardoli', 'Bardoli', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Surat', NULL),
(175, 2, 10, 197, 'Bharuch', 'Bharuch', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bharuch', NULL),
(176, 2, 10, 199, 'Bhavnagar', 'Bhavnagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bhavnagar', NULL),
(177, 2, 10, 498, 'Bhuj', 'Bhuj', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kachchh', NULL),
(178, 2, 10, 335, 'Bilimora', 'Bilimora', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Navsari', NULL),
(179, 2, 10, 24, 'Borsad', 'Borsad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Anand', NULL),
(180, 2, 10, 218, 'Botad', 'Botad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Botad', NULL),
(181, 2, 10, 445, 'Chandkheda', 'Chandkheda', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Gandhinagar', NULL),
(182, 2, 10, 0, 'Chandlodiya', 'Chandlodiya', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ahmedabad', NULL),
(183, 2, 10, 69, 'Dabhoi', 'Dabhoi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Vadodara', NULL),
(184, 2, 10, 0, 'Dholka', 'Dholka', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ahmedabad', NULL),
(185, 2, 10, 305, 'Dhoraji', 'Dhoraji', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Rajkot', NULL),
(186, 2, 10, 109, 'Dhrangadhra', 'Dhrangadhra', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Surendranagar', NULL),
(187, 2, 10, 107, 'Disa', 'Disa', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Banaskantha', NULL),
(188, 2, 10, 297, 'Dohad', 'Dohad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dohad', NULL),
(189, 2, 10, 397, 'Gandhidham', 'Gandhidham', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kutch', NULL),
(190, 2, 10, 445, 'Gandhinagar', 'Gandhinagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Gandhinagar', NULL),
(191, 2, 10, 0, 'Ghatlodiya', 'Ghatlodiya', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ahmedabad', NULL),
(192, 2, 10, 320, 'Godhra', 'Godhra', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Panchmahal', NULL),
(193, 2, 10, 305, 'Gondal', 'Gondal', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Rajkot', NULL),
(194, 2, 10, 320, 'Halol', 'Halol', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Panchmahal', NULL),
(195, 2, 10, 198, 'Himatnagar', 'Himatnagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sabarkantha', NULL),
(196, 2, 10, 530, 'Jamnagar', 'Jamnagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jamnagar', NULL),
(197, 2, 10, 305, 'Jetpur', 'Jetpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Rajkot', NULL),
(198, 2, 10, 305, 'Jetpur Navagadh', 'Jetpur Navagadh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Rajkot', NULL),
(199, 2, 10, 501, 'Junagadh', 'Junagadh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Junagadh', NULL),
(200, 2, 10, 362, 'Kadi', 'Kadi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mehsana', NULL),
(201, 2, 10, 445, 'Kalol', 'Kalol', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Gandhinagar', NULL),
(202, 2, 10, 436, 'Kapadvanj', 'Kapadvanj', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kheda', NULL),
(203, 2, 10, 501, 'Keshod', 'Keshod', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Junagadh', NULL),
(204, 2, 10, 24, 'Khambhat', 'Khambhat', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Anand', NULL),
(205, 2, 10, 380, 'Mahesana', 'Mahesana', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mahesana', NULL),
(206, 2, 10, 199, 'Mahuva', 'Mahuva', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bhavnagar', NULL),
(207, 2, 10, 111, 'Mandvi', 'Mandvi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Surat', NULL),
(208, 2, 10, 501, 'Mangrol', 'Mangrol', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Junagadh', NULL),
(209, 2, 10, 28, 'Modasa', 'Modasa', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Aravalli', NULL),
(210, 2, 10, 357, 'Morbi', 'Morbi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Morbi', NULL),
(211, 2, 10, 436, 'Nadiad', 'Nadiad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kheda', NULL),
(212, 2, 10, 335, 'Navsari', 'Navsari', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Navsari', NULL),
(213, 2, 10, 107, 'Palanpur', 'Palanpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Banaskantha', NULL),
(214, 2, 10, 199, 'Palitana', 'Palitana', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bhavnagar', NULL),
(215, 2, 10, 0, 'Patan', 'Patan', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Patan', NULL),
(216, 2, 10, 24, 'Petlad', 'Petlad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Anand', NULL),
(217, 2, 10, 0, 'Porbandar', 'Porbandar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Porbandar', NULL),
(218, 2, 10, 305, 'Rajkot', 'Rajkot', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Rajkot', NULL),
(219, 2, 10, 0, 'Ranip', 'Ranip', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ahmedabad', NULL),
(220, 2, 10, 21, 'Savarkundla', 'Savarkundla', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Amreli', NULL),
(221, 2, 10, 0, 'Sidhpur', 'Sidhpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Patan', NULL),
(222, 2, 10, 199, 'Sihor', 'Sihor', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bhavnagar', NULL),
(223, 2, 10, 111, 'Surat', 'Surat', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Surat', NULL),
(224, 2, 10, 109, 'Surendranagar', 'Surendranagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Surendranagar', NULL),
(225, 2, 10, 462, 'Una', 'Una', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Gir Somnath', NULL),
(226, 2, 10, 362, 'Unjha', 'Unjha', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mehsana', NULL),
(227, 2, 10, 305, 'Upleta', 'Upleta', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Rajkot', NULL),
(228, 2, 10, 69, 'Vadodara', 'Vadodara', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Vadodara', NULL),
(229, 2, 10, 67, 'Valsad', 'Valsad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Valsad', NULL),
(230, 2, 10, 67, 'Vapi', 'Vapi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Valsad', NULL),
(231, 2, 10, 0, 'Vejalpur', 'Vejalpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ahmedabad', NULL),
(232, 2, 10, 462, 'Veraval', 'Veraval', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Gir Somnath', NULL),
(233, 2, 10, 335, 'Vijalpor', 'Vijalpor', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Navsari', NULL),
(234, 2, 10, 0, 'Viramgam', 'Viramgam', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ahmedabad', NULL),
(235, 2, 10, 362, 'Visnagar', 'Visnagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mehsana', NULL),
(236, 2, 10, 109, 'Wadhwan', 'Wadhwan', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Surendranagar', NULL),
(237, 2, 11, 345, 'Dadhel', 'Dadhel', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nagaur', NULL),
(238, 2, 11, 257, 'Daman', 'Daman', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Daman', NULL),
(239, 2, 11, 294, 'Diu', 'Diu', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Diu', NULL),
(240, 2, 12, 18, 'Ambala', 'Ambala', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ambala', NULL),
(241, 2, 12, 18, 'Ambala Cantonment', 'Ambala Cantonment', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ambala', NULL),
(242, 2, 12, 18, 'Ambala Sadar', 'Ambala Sadar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ambala', NULL),
(243, 2, 12, 522, 'Bahadurgarh', 'Bahadurgarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jhajjar', NULL),
(244, 2, 12, 203, 'Bhiwani', 'Bhiwani', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bhiwani', NULL),
(245, 2, 12, 232, 'Charkhi Dadri', 'Charkhi Dadri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Charkhi Dadri', NULL),
(246, 2, 12, 547, 'Faridabad', 'Faridabad', '0', '1', '2020-05-03 08:09:05', '2020-05-03 08:09:05', 'Faridabad', NULL),
(248, 2, 12, 431, 'Fatehabad', 'Fatehabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Fatehabad', NULL),
(249, 2, 12, 125, 'Gohana', 'Gohana', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sonipat', NULL),
(250, 2, 12, 486, 'Gurgaon', 'Gurgaon', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Gurugram', NULL),
(251, 2, 12, 512, 'Hansi', 'Hansi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hisar', NULL),
(252, 2, 12, 512, 'Hisar', 'Hisar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hisar', NULL),
(253, 2, 12, 39, 'Jagadhri', 'Jagadhri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Yamunanagar', NULL),
(254, 2, 12, 512, 'Jind', 'Jind', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hisar', NULL),
(255, 2, 12, 494, 'Kaithal', 'Kaithal', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kaithal', NULL),
(256, 2, 12, 461, 'Karnal', 'Karnal', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Karnal', NULL),
(257, 2, 12, 399, 'Kurukshetra', 'Kurukshetra', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kurukshetra', NULL),
(258, 2, 12, 133, 'Mandi Dabwali', 'Mandi Dabwali', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sirsa', NULL),
(259, 2, 12, 486, 'Manesar', 'Manesar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Gurugram', NULL),
(260, 2, 12, 381, 'Narnaul', 'Narnaul', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mahendragarh', NULL),
(261, 2, 12, 511, 'Narwana', 'Narwana', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jind', NULL),
(262, 2, 12, 322, 'Palwal', 'Palwal', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Palwal', NULL),
(263, 2, 12, 321, 'Panchkula', 'Panchkula', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Panchkula', NULL),
(264, 2, 12, 319, 'Panipat', 'Panipat', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Panipat', NULL),
(265, 2, 12, 278, 'Rewari', 'Rewari', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Rewari', NULL),
(266, 2, 12, 276, 'Rohtak', 'Rohtak', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Rohtak', NULL),
(267, 2, 12, 133, 'Sirsa', 'Sirsa', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sirsa', NULL),
(268, 2, 12, 125, 'Sonipat', 'Sonipat', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sonipat', NULL),
(269, 2, 12, 399, 'Thanesar', 'Thanesar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kurukshetra', NULL),
(270, 2, 12, 431, 'Tohana', 'Tohana', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Fatehabad', NULL),
(271, 2, 12, 39, 'Yamunanagar', 'Yamunanagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Yamunanagar', NULL),
(272, 2, 13, 372, 'Mandi', 'Mandi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mandi', NULL),
(273, 2, 13, 151, 'Shimla', 'Shimla', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Shimla', NULL),
(274, 2, 13, 128, 'Solan', 'Solan', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Solan', NULL),
(275, 2, 14, 26, 'Anantnag', 'Anantnag', '0', '1', '2020-05-03 08:21:37', '2020-05-03 08:21:37', 'Anantnag', NULL),
(276, 2, 14, 0, 'Badgam', 'Badgam', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Budgam', NULL),
(277, 2, 14, 139, 'Baramula', 'Baramula', '0', '1', '2020-05-03 08:22:26', '2020-05-03 08:22:26', 'Baramulla', NULL),
(278, 2, 14, 532, 'Jammu', 'Jammu', '0', '1', '2020-05-03 08:24:02', '2020-05-03 08:24:02', 'Jammu', NULL),
(279, 2, 14, 451, 'Kathua', 'Kathua', '0', '1', '2020-05-03 08:23:08', '2020-05-03 08:23:08', 'Kathua', NULL),
(280, 2, 14, 139, 'Sopore', 'Sopore', '0', '1', '2020-05-03 08:22:42', '2020-05-03 08:22:42', 'Baramulla', NULL),
(281, 2, 14, 453, 'Srinagar', 'Srinagar', '0', '1', '2020-05-03 08:23:42', '2020-05-03 08:23:42', 'Kashmir', NULL),
(282, 2, 14, 77, 'Udhampur', 'Udhampur', '0', '1', '2020-05-03 08:21:55', '2020-05-03 08:21:55', 'Udhampur', NULL),
(283, 2, 15, 171, 'Adityapur', 'Adityapur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Seraikela-Kharsawan', NULL),
(284, 2, 15, 313, 'Bagbera', 'Bagbera', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Purbi Singhbhum', NULL),
(285, 2, 15, 526, 'Bhowrah', 'Bhowrah', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Howrah', NULL),
(286, 2, 15, 270, 'Bhuli', 'Bhuli', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dhanbad', NULL),
(287, 2, 15, 216, 'Bokaro Steel City', 'Bokaro Steel City', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bokaro', NULL),
(288, 2, 15, 46, 'Chaibasa', 'Chaibasa', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'West Singhbhum ', NULL),
(289, 2, 15, 46, 'Chakradharpur', 'Chakradharpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'West Singhbhum ', NULL),
(290, 2, 15, 216, 'Chas', 'Chas', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bokaro', NULL),
(291, 2, 15, 270, 'Chirkunda', 'Chirkunda', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dhanbad', NULL),
(292, 2, 15, 325, 'Daltonganj', 'Daltonganj', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Palamu', NULL),
(293, 2, 15, 266, 'Deoghar', 'Deoghar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Deoghar', NULL),
(294, 2, 15, 374, 'Dhanbad', 'Dhanbad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Manbhum', NULL),
(295, 2, 15, 298, 'Dumka', 'Dumka', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dumka', NULL),
(296, 2, 15, 464, 'Giridih', 'Giridih', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Giridih', NULL),
(297, 2, 15, 216, 'Gumia', 'Gumia', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bokaro', NULL),
(298, 2, 15, 508, 'Hazaribagh', 'Hazaribagh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hazaribagh', NULL),
(299, 2, 15, 415, 'Jamshedpur', 'Jamshedpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'East Singhbhum', NULL),
(300, 2, 15, 430, 'Jharia', 'Jharia', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Koderma', NULL),
(301, 2, 15, 430, 'Jhumri Tilaiya', 'Jhumri Tilaiya', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Koderma', NULL),
(302, 2, 15, 270, 'Jorapokhar', 'Jorapokhar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dhanbad', NULL),
(303, 2, 15, 270, 'Katras', 'Katras', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dhanbad', NULL),
(304, 2, 15, 390, 'Lohardaga', 'Lohardaga', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Lohardaga', NULL),
(305, 2, 15, 266, 'Madhupur', 'Madhupur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Deoghar', NULL),
(306, 2, 15, 415, 'Mango', 'Mango', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'East Singhbhum', NULL),
(307, 2, 15, 216, 'Phusro', 'Phusro', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bokaro', NULL),
(308, 2, 15, 296, 'Ramgarh', 'Ramgarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ramgarh', NULL),
(309, 2, 15, 296, 'Ramgarh Cantonment', 'Ramgarh Cantonment', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ramgarh', NULL),
(310, 2, 15, 293, 'Ranchi', 'Ranchi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ranchi', NULL),
(311, 2, 15, 191, 'Sahibganj', 'Sahibganj', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sahibganj', NULL),
(312, 2, 15, 296, 'Saunda', 'Saunda', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ramgarh', NULL),
(313, 2, 15, 270, 'Sindri', 'Sindri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dhanbad', NULL),
(314, 2, 15, 270, 'Tisra', 'Tisra', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dhanbad', NULL),
(315, 2, 16, 504, 'Arsikere', 'Arsikere', '0', '1', '2020-05-02 20:39:53', '2020-05-02 20:39:53', 'Hassan', NULL),
(316, 2, 16, 38, 'Bagalkot', 'Bagalkot', '0', '1', '2020-05-02 19:41:48', '2020-05-02 19:41:48', 'Bagalkot', NULL),
(317, 2, 16, 166, 'Bail Hongal', 'Bail Hongal', '0', '1', '2020-05-02 20:20:44', '2020-05-02 20:20:44', 'Belagavi', NULL),
(318, 2, 16, 53, 'Ballari', 'Ballari', '0', '1', '2020-05-02 19:44:44', '2020-05-02 19:44:44', 'Ballari', NULL),
(319, 2, 16, 207, 'Basavakalyan', 'Basavakalyan', '0', '1', '2020-05-02 20:23:04', '2020-05-02 20:23:04', 'Bidar ', NULL),
(320, 2, 16, 166, 'Belagavi', 'Belagavi', '0', '1', '2020-05-02 20:20:57', '2020-05-02 20:20:57', 'Belagavi', NULL),
(322, 2, 16, 149, 'Bhadravati', 'Bhadravati', '0', '1', '2020-05-02 20:18:31', '2020-05-02 20:18:31', 'Shivamogga', NULL),
(323, 2, 16, 207, 'Bidar', 'Bidar', '0', '1', '2020-05-02 20:23:22', '2020-05-02 20:23:22', 'Bidar ', NULL),
(324, 2, 16, 110, 'Bommanahalli', 'Bommanahalli', '0', '1', '2020-05-02 20:14:47', '2020-05-02 20:14:47', 'Bangalore', NULL),
(325, 2, 16, 110, 'Byatarayanapura', 'Byatarayanapura', '0', '1', '2020-05-02 20:15:04', '2020-05-02 20:15:04', 'Bangalore', NULL),
(326, 2, 16, 242, 'Challakere', 'Challakere', '0', '1', '2020-05-02 20:26:39', '2020-05-02 20:26:39', 'Chitradurga', NULL),
(327, 2, 16, 225, 'Chamrajnagar', 'Chamrajnagar', '0', '1', '2020-05-02 20:24:15', '2020-05-02 20:24:15', 'Chamarajanagar', NULL),
(328, 2, 16, 301, 'Channapatna', 'Channapatna', '0', '1', '2020-05-02 20:30:59', '2020-05-02 20:30:59', 'Ramanagara', NULL),
(329, 2, 16, 238, 'Chikballapur', 'Chikballapur', '0', '1', '2020-05-02 20:24:54', '2020-05-02 20:24:54', 'Chikballapur', NULL),
(330, 2, 16, 240, 'Chikkamagaluru', 'Chikkamagaluru', '0', '1', '2020-05-02 20:25:45', '2020-05-02 20:25:45', 'Chikkamagaluru', NULL),
(331, 2, 16, 239, 'Chintamani', 'Chintamani', '0', '1', '2020-05-02 20:25:17', '2020-05-02 20:25:17', 'Chikkaballapur', NULL),
(332, 2, 16, 242, 'Chitradurga', 'Chitradurga', '0', '1', '2020-05-02 20:26:52', '2020-05-02 20:26:52', 'Chitradurga', NULL),
(333, 2, 16, 71, 'Dandeli', 'Dandeli', '0', '1', '2020-05-02 19:45:40', '2020-05-02 19:45:40', 'Uttara Kannada', NULL),
(334, 2, 16, 110, 'Dasarahalli', 'Dasarahalli', '0', '1', '2020-05-02 20:15:22', '2020-05-02 20:15:22', 'Bangalore', NULL),
(335, 2, 16, 263, 'Davanagere', 'Davanagere', '0', '1', '2020-05-02 20:28:34', '2020-05-02 20:28:34', 'Davanagere', NULL),
(336, 2, 16, 273, 'Dharwad', 'Dharwad', '0', '1', '2020-05-02 20:29:57', '2020-05-02 20:29:57', 'Dharwad', NULL),
(337, 2, 16, 113, 'Dod Ballapur', 'Dod Ballapur', '0', '1', '2020-05-02 20:17:17', '2020-05-02 20:17:17', 'Bangalore Rural', NULL),
(338, 2, 16, 443, 'Gadag', 'Gadag', '0', '1', '2020-05-02 20:37:04', '2020-05-02 20:37:04', 'Gadag', NULL),
(339, 2, 16, 443, 'Gadag Betigeri', 'Gadag Betigeri', '0', '1', '2020-05-02 20:37:23', '2020-05-02 20:37:23', 'Gadag', NULL),
(340, 2, 16, 413, 'Gangawati', 'Gangawati', '0', '1', '2020-05-02 20:35:08', '2020-05-02 20:35:08', 'Koppal', NULL),
(341, 2, 16, 166, 'Gokak', 'Gokak', '0', '1', '2020-05-02 20:21:09', '2020-05-02 20:21:09', 'Belagavi', NULL),
(342, 2, 16, 263, 'Harihar', 'Harihar', '0', '1', '2020-05-02 20:28:53', '2020-05-02 20:28:53', 'Davanagere', NULL),
(343, 2, 16, 504, 'Hassan', 'Hassan', '0', '1', '2020-05-02 20:40:24', '2020-05-02 20:40:24', 'Hassan', NULL),
(344, 2, 16, 507, 'Haveri', 'Haveri', '0', '1', '2020-05-02 20:40:51', '2020-05-02 20:40:51', 'Haveri', NULL),
(345, 2, 16, 242, 'Hiriyur', 'Hiriyur', '0', '1', '2020-05-02 20:27:07', '2020-05-02 20:27:07', 'Chitradurga', NULL),
(346, 2, 16, 53, 'Hosapete', 'Hosapete', '0', '1', '2020-05-02 19:44:58', '2020-05-02 19:44:58', 'Ballari', NULL),
(347, 2, 16, 273, 'Hubballi', 'Hubballi', '0', '1', '2020-05-02 20:30:12', '2020-05-02 20:30:12', 'Dharwad', NULL),
(348, 2, 16, 349, 'Hunsur', 'Hunsur', '0', '1', '2020-05-02 20:33:28', '2020-05-02 20:33:28', 'Mysore', NULL),
(349, 2, 16, 38, 'Ilkal', 'Ilkal', '0', '1', '2020-05-02 19:42:35', '2020-05-02 19:42:35', 'Bagalkot', NULL),
(350, 2, 16, 38, 'Jamkhandi', 'Jamkhandi', '0', '1', '2020-05-02 19:42:58', '2020-05-02 19:42:58', 'Bagalkot', NULL),
(351, 2, 16, 479, 'Kalaburagi', 'Kalaburagi', '0', '1', '2020-05-02 20:38:06', '2020-05-02 20:38:06', 'Gulbarga', NULL),
(352, 2, 16, 301, 'Kanakapura', 'Kanakapura', '0', '1', '2020-05-02 20:32:28', '2020-05-02 20:32:28', 'Ramanagara ', NULL),
(353, 2, 16, 110, 'Karnataka', 'Karnataka', '0', '1', '2020-05-02 20:15:37', '2020-05-02 20:15:37', 'Bangalore', NULL),
(354, 2, 16, 71, 'Karwar', 'Karwar', '0', '1', '2020-05-02 19:46:51', '2020-05-02 19:46:51', 'Uttara Kannada', NULL),
(355, 2, 16, 426, 'Kolar', 'Kolar', '0', '1', '2020-05-02 20:35:54', '2020-05-02 20:35:54', 'Kolar', NULL),
(356, 2, 16, 225, 'Kollegal', 'Kollegal', '0', '1', '2020-05-02 20:24:29', '2020-05-02 20:24:29', 'Chamarajanagar', NULL),
(357, 2, 16, 413, 'Koppal', 'Koppal', '0', '1', '2020-05-02 20:35:25', '2020-05-02 20:35:25', 'Koppal', NULL),
(358, 2, 16, 110, 'Krishnarajapura', 'Krishnarajapura', '0', '1', '2020-05-02 20:16:07', '2020-05-02 20:16:07', 'Bangalore', NULL),
(359, 2, 16, 110, 'Mahadevapura', 'Mahadevapura', '0', '1', '2020-05-02 20:16:25', '2020-05-02 20:16:25', 'Bangalore', NULL),
(360, 2, 16, 369, 'Mandya', 'Mandya', '0', '1', '2020-05-02 20:34:34', '2020-05-02 20:34:34', 'Mandya', NULL),
(361, 2, 16, 256, 'Mangaluru', 'Mangaluru', '0', '1', '2020-05-02 20:27:34', '2020-05-02 20:27:34', 'Dakshina Kannada', NULL),
(362, 2, 16, 426, 'Mulbagal', 'Mulbagal', '0', '1', '2020-05-02 20:36:16', '2020-05-02 20:36:16', 'Kolar', NULL),
(363, 2, 16, 349, 'Mysuru', 'Mysuru', '0', '1', '2020-05-02 20:33:43', '2020-05-02 20:33:43', 'Mysore', NULL),
(364, 2, 16, 349, 'Nanjangud', 'Nanjangud', '0', '1', '2020-05-02 20:33:58', '2020-05-02 20:33:58', 'Mysore', NULL),
(365, 2, 16, 167, 'Nipani', 'Nipani', '0', '1', '2020-05-02 20:21:36', '2020-05-02 20:21:36', 'Belgaum', NULL),
(366, 2, 16, 240, 'Pattanagere', 'Pattanagere', '0', '1', '2020-05-02 20:26:00', '2020-05-02 20:26:00', 'Chikkamagaluru', NULL),
(367, 2, 16, 256, 'Puttur', 'Puttur', '0', '1', '2020-05-02 20:27:47', '2020-05-02 20:27:47', 'Dakshina Kannada', NULL),
(368, 2, 16, 38, 'Rabkavi Banhatti', 'Rabkavi Banhatti', '0', '1', '2020-05-02 19:43:18', '2020-05-02 19:43:18', 'Bagalkot', NULL),
(369, 2, 16, 38, 'Rabkavi-Banhatti', 'Rabkavi-Banhatti', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bagalkot', NULL),
(370, 2, 16, 309, 'Raichur', 'Raichur', '0', '1', '2020-05-02 20:32:55', '2020-05-02 20:32:55', 'Raichur', NULL),
(371, 2, 16, 301, 'Ramanagara', 'Ramanagara', '0', '1', '2020-05-02 20:31:18', '2020-05-02 20:31:18', 'Ramanagara', NULL),
(372, 2, 16, 301, 'Ramanagaram', 'Ramanagaram', '0', '1', '2020-05-02 20:31:51', '2020-05-02 20:31:51', 'Ramanagara', NULL),
(373, 2, 16, 507, 'Ranebennur', 'Ranebennur', '0', '1', '2020-05-02 20:41:13', '2020-05-02 20:41:13', 'Haveri', NULL),
(374, 2, 16, 426, 'Robertsonpet', 'Robertsonpet', '0', '1', '2020-05-02 20:36:35', '2020-05-02 20:36:35', 'Kolar', NULL),
(375, 2, 16, 196, 'Sagar', 'Sagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sagar', NULL),
(376, 2, 16, 169, 'Shahabad', 'Shahabad', '0', '1', '2020-05-02 20:39:25', '2020-05-02 20:39:25', 'Shahabad', NULL),
(377, 2, 16, 149, 'Shivamogga', 'Shivamogga', '0', '1', '2020-05-02 20:18:10', '2020-05-02 20:18:10', 'Shivamogga', NULL),
(378, 2, 16, 41, 'Shorapur', 'Shorapur', '0', '1', '2020-05-02 19:43:48', '2020-05-02 19:43:48', 'Yadagiri', NULL),
(380, 2, 16, 81, 'Sira', 'Sira', '0', '1', '2020-05-02 19:49:33', '2020-05-02 19:49:33', 'Tumakuru', NULL),
(381, 2, 16, 71, 'Sirsi', 'Sirsi', '0', '1', '2020-05-02 19:47:04', '2020-05-02 19:47:04', 'Uttara Kannada', NULL),
(382, 2, 16, 80, 'Tiptur', 'Tiptur', '0', '1', '2020-05-02 19:48:05', '2020-05-02 19:48:05', 'Tumkur', NULL),
(383, 2, 16, 80, 'Tumakuru', 'Tumakuru', '0', '1', '2020-05-02 19:48:20', '2020-05-02 19:48:20', 'Tumkur', NULL),
(384, 2, 16, 76, 'Udupi', 'Udupi', '0', '1', '2020-05-02 19:47:33', '2020-05-02 19:47:33', 'Udupi', NULL),
(385, 2, 16, 256, 'Ullal', 'Ullal', '0', '1', '2020-05-02 20:27:59', '2020-05-02 20:27:59', 'Dakshina Kannada', NULL),
(386, 2, 16, 209, 'Vijayapura', 'Vijayapura', '0', '1', '2020-05-02 20:23:48', '2020-05-02 20:23:48', 'Bijapur', NULL),
(387, 2, 16, 41, 'Yadgiri', 'Yadgiri', '0', '1', '2020-05-03 08:09:05', '2020-05-03 08:09:05', 'Yadagiri', NULL),
(388, 2, 16, 110, 'Yelahanka', 'Yelahanka', '0', '1', '2020-05-02 20:16:49', '2020-05-02 20:16:49', 'Bangalore', NULL),
(389, 2, 17, 13, 'Alappuzha', 'Alappuzha', '0', '1', '2020-05-03 08:25:22', '2020-05-03 08:25:22', 'Alappuzha', NULL),
(390, 2, 17, 403, 'Beypore', 'Beypore', '0', '1', '2020-05-03 08:32:56', '2020-05-03 08:32:56', 'Kozhikode', NULL),
(391, 2, 17, 404, 'Changanacheri', 'Changanacheri', '0', '1', '2020-05-03 08:34:45', '2020-05-03 08:34:45', 'Kottayam', NULL),
(392, 2, 17, 13, 'Cherthala', 'Cherthala', '0', '1', '2020-05-03 08:25:35', '2020-05-03 08:25:35', 'Alappuzha', NULL),
(393, 2, 17, 403, 'Cheruvannur', 'Cheruvannur', '0', '1', '2020-05-03 08:33:08', '2020-05-03 08:33:08', 'Kozhikode', NULL),
(394, 2, 17, 94, 'Chirakkal', 'Chirakkal', '0', '1', '2020-05-03 08:26:24', '2020-05-03 08:26:24', 'Thrissur', NULL),
(395, 2, 17, 244, 'Chittur', 'Chittur', '0', '1', '2020-05-03 08:06:45', '2020-05-03 08:06:45', 'Chittoor', NULL),
(396, 2, 17, 416, 'Edathala', 'Edathala', '0', '1', '2020-05-03 08:35:40', '2020-05-03 08:35:40', 'Ernakulam', NULL),
(397, 2, 17, 416, 'Ernakulam', 'Ernakulam', '0', '1', '2020-05-03 08:35:53', '2020-05-03 08:35:53', 'Ernakulam', NULL),
(398, 2, 17, 94, 'Guruvayur', 'Guruvayur', '0', '1', '2020-05-03 08:26:36', '2020-05-03 08:26:36', 'Thrissur', NULL),
(399, 2, 17, 416, 'Kalamassery', 'Kalamassery', '0', '1', '2020-05-03 08:36:05', '2020-05-03 08:36:05', 'Ernakulam', NULL),
(400, 2, 17, 457, 'Kanhangad', 'Kanhangad', '0', '1', '2020-05-03 08:38:28', '2020-05-03 08:38:28', 'Kasaragod', NULL),
(401, 2, 17, 478, 'Kannur', 'Kannur', '0', '1', '2020-05-03 08:38:52', '2020-05-03 08:38:52', 'Kannur', NULL),
(402, 2, 17, 82, 'Kasaragod', 'Kasaragod', '0', '1', '2020-05-02 19:50:09', '2020-05-02 19:50:09', 'Tulu Nadu', NULL),
(403, 2, 17, 13, 'Kayamkulam', 'Kayamkulam', '0', '1', '2020-05-03 08:25:48', '2020-05-03 08:25:48', 'Alappuzha', NULL),
(404, 2, 17, 416, 'Kochi', 'Kochi', '0', '1', '2020-05-03 08:36:17', '2020-05-03 08:36:17', 'Ernakulam', NULL),
(405, 2, 17, 94, 'Kodungallur', 'Kodungallur', '0', '1', '2020-05-03 08:26:48', '2020-05-03 08:26:48', 'Thrissur', NULL),
(406, 2, 17, 36, 'Kodur', 'Kodur', '0', '1', '2020-05-03 08:00:08', '2020-05-03 08:00:08', 'Kadappa', NULL),
(407, 2, 17, 420, 'Kollam', 'Kollam', '0', '1', '2020-05-03 08:36:53', '2020-05-03 08:36:53', 'Kollam', NULL),
(408, 2, 17, 13, 'Komalapuram', 'Komalapuram', '0', '1', '2020-05-03 08:25:58', '2020-05-03 08:25:58', 'Alappuzha', NULL),
(409, 2, 17, 420, 'Kottamkara', 'Kottamkara', '0', '1', '2020-05-03 08:37:07', '2020-05-03 08:37:07', 'Kollam', NULL),
(410, 2, 17, 404, 'Kottayam', 'Kottayam', '0', '1', '2020-05-03 08:35:00', '2020-05-03 08:35:00', 'Kottayam', NULL),
(411, 2, 17, 403, 'Kozhikode', 'Kozhikode', '0', '1', '2020-05-03 08:33:21', '2020-05-03 08:33:21', 'Kozhikode', NULL),
(412, 2, 17, 94, 'Kunnamkulam', 'Kunnamkulam', '0', '1', '2020-05-03 08:26:58', '2020-05-03 08:26:58', 'Thrissur', NULL),
(413, 2, 17, 377, 'Malappuram', 'Malappuram', '0', '1', '2020-05-03 08:32:03', '2020-05-03 08:32:03', 'Malabar', NULL),
(414, 2, 17, 376, 'Manjeri', 'Manjeri', '0', '1', '2020-05-03 08:29:41', '2020-05-03 08:29:41', 'Malappuram', NULL),
(415, 2, 17, 478, 'Mattannur', 'Mattannur', '0', '1', '2020-05-03 08:39:02', '2020-05-03 08:39:02', 'Kannur', NULL),
(416, 2, 17, 376, 'Moonniyur', 'Moonniyur', '0', '1', '2020-05-03 08:29:54', '2020-05-03 08:29:54', 'Malappuram', NULL),
(417, 2, 17, 96, 'Nedumangad', 'Nedumangad', '0', '1', '2020-05-03 08:27:38', '2020-05-03 08:27:38', 'Thiruvananthapuram', NULL),
(418, 2, 17, 96, 'Neyyattinkara', 'Neyyattinkara', '0', '1', '2020-05-03 08:27:53', '2020-05-03 08:27:53', 'Thiruvananthapuram', NULL),
(419, 2, 17, 376, 'Nilambur', 'Nilambur', '0', '1', '2020-05-03 08:30:14', '2020-05-03 08:30:14', 'Malappuram', NULL),
(420, 2, 17, 326, 'Ottappalam', 'Ottappalam', '0', '1', '2020-05-03 08:28:57', '2020-05-03 08:28:57', 'Palakkad', NULL),
(421, 2, 17, 326, 'Palakkad', 'Palakkad', '0', '1', '2020-05-03 08:29:09', '2020-05-03 08:29:09', 'Palakkad', NULL),
(422, 2, 17, 96, 'Pallichal', 'Pallichal', '0', '1', '2020-05-03 08:28:05', '2020-05-03 08:28:05', 'Thiruvananthapuram', NULL),
(423, 2, 17, 96, 'Pallikkal', 'Pallikkal', '0', '1', '2020-05-03 08:28:18', '2020-05-03 08:28:18', 'Thiruvananthapuram', NULL),
(424, 2, 17, 404, 'Panachikkad', 'Panachikkad', '0', '1', '2020-05-03 08:35:12', '2020-05-03 08:35:12', 'Kottayam', NULL),
(425, 2, 17, 478, 'Payyannur', 'Payyannur', '0', '1', '2020-05-03 08:39:14', '2020-05-03 08:39:14', 'Kannur', NULL),
(426, 2, 17, 376, 'Perinthalmanna', 'Perinthalmanna', '0', '1', '2020-05-03 08:30:27', '2020-05-03 08:30:27', 'Malappuram', NULL),
(427, 2, 17, 376, 'Ponnani', 'Ponnani', '0', '1', '2020-05-03 08:30:40', '2020-05-03 08:30:40', 'Malappuram', NULL),
(428, 2, 17, 420, 'Punalur', 'Punalur', '0', '1', '2020-05-03 08:37:19', '2020-05-03 08:37:19', 'Kollam', NULL),
(429, 2, 17, 403, 'Quilandy', 'Quilandy', '0', '1', '2020-05-03 08:33:50', '2020-05-03 08:33:50', 'Kozhikode', NULL),
(430, 2, 17, 478, 'Taliparamba', 'Taliparamba', '0', '1', '2020-05-03 08:39:27', '2020-05-03 08:39:27', 'Kannur', NULL),
(431, 2, 17, 376, 'Tanalur', 'Tanalur', '0', '1', '2020-05-03 08:30:53', '2020-05-03 08:30:53', 'Malappuram', NULL),
(432, 2, 17, 478, 'Thalassery', 'Thalassery', '0', '1', '2020-05-03 08:39:42', '2020-05-03 08:39:42', 'Kannur', NULL),
(433, 2, 17, 376, 'Thennala', 'Thennala', '0', '1', '2020-05-03 08:31:07', '2020-05-03 08:31:07', 'Malappuram', NULL),
(434, 2, 17, 549, 'Thiruvalla', 'Thiruvalla', '0', '1', '2020-04-23 19:15:21', '2020-04-23 19:15:21', 'Pathanamthitta', NULL),
(435, 2, 17, 96, 'Thiruvananthapuram', 'Thiruvananthapuram', '0', '1', '2020-05-03 08:28:30', '2020-05-03 08:28:30', 'Thiruvananthapuram', NULL),
(436, 2, 17, 531, 'Thodupuzha', 'Thodupuzha', '0', '1', '2020-05-03 08:40:04', '2020-05-03 08:40:04', 'Idukki', NULL),
(437, 2, 17, 416, 'Thrippunithura', 'Thrippunithura', '0', '1', '2020-05-03 08:36:28', '2020-05-03 08:36:28', 'Ernakulam', NULL),
(438, 2, 17, 94, 'Thrissur', 'Thrissur', '0', '1', '2020-05-03 08:27:10', '2020-05-03 08:27:10', 'Thrissur', NULL);
INSERT INTO `city` (`id`, `country_id`, `state_id`, `district_id`, `city`, `search_key`, `position`, `is_active`, `created_at`, `updated_at`, `districtname`, `created_by`) VALUES
(439, 2, 17, 376, 'Tirur', 'Tirur', '0', '1', '2020-05-03 08:31:19', '2020-05-03 08:31:19', 'Malappuram', NULL),
(440, 2, 17, 376, 'Tirurangadi', 'Tirurangadi', '0', '1', '2020-05-03 08:31:34', '2020-05-03 08:31:34', 'Malappuram', NULL),
(441, 2, 17, 403, 'Vadakara', 'Vadakara', '0', '1', '2020-05-03 08:34:04', '2020-05-03 08:34:04', 'Kozhikode', NULL),
(442, 2, 17, 376, 'Vengara', 'Vengara', '0', '1', '2020-05-03 08:31:45', '2020-05-03 08:31:45', 'Malappuram', NULL),
(443, 2, 18, 393, 'Kavaratti', 'Kavaratti', '0', '1', '2020-05-03 08:32:34', '2020-05-03 08:32:34', 'Lakshadweep', NULL),
(444, 2, 19, 29, 'Ashoknagar', 'Ashoknagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ashoknagar', NULL),
(445, 2, 19, 47, 'Balaghat', 'Balaghat', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Balaghat', NULL),
(446, 2, 19, 157, 'Barwani', 'Barwani', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Barwani', NULL),
(447, 2, 19, 64, 'Basoda', 'Basoda', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Vidisha', NULL),
(448, 2, 19, 168, 'Betul', 'Betul', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Betul', NULL),
(449, 2, 19, 202, 'Bhind', 'Bhind', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bhind', NULL),
(450, 2, 19, 205, 'Bhopal', 'Bhopal', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bhopal', NULL),
(451, 2, 19, 196, 'Bina-Etawa', 'Bina-Etawa', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sagar', NULL),
(452, 2, 19, 206, 'Burhanpur', 'Burhanpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bhrhanput', NULL),
(453, 2, 19, 162, 'Burhar-Dhanpuri', 'Burhar-Dhanpuri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Shahdol', NULL),
(454, 2, 19, 235, 'Chhatarpur', 'Chhatarpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Chhatarpur', NULL),
(455, 2, 19, 237, 'Chhindwara', 'Chhindwara', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Chhindwara', NULL),
(456, 2, 19, 488, 'Dabra', 'Dabra', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Gwalior', NULL),
(457, 2, 19, 258, 'Damoh', 'Damoh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Damoh', NULL),
(458, 2, 19, 261, 'Datia', 'Datia', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Datia', NULL),
(459, 2, 19, 268, 'Dewas', 'Dewas', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dewas', NULL),
(460, 2, 19, 162, 'Dhanpuri Nargada Hari Dafai', 'Dhanpuri Nargada Hari Dafai', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Shahdol', NULL),
(461, 2, 19, 271, 'Dhar', 'Dhar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dhar', NULL),
(462, 2, 19, 202, 'Gohad', 'Gohad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bhind', NULL),
(463, 2, 19, 481, 'Guna', 'Guna', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Guna', NULL),
(464, 2, 19, 488, 'Gwalior', 'Gwalior', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Gwalior', NULL),
(465, 2, 19, 499, 'Harda', 'Harda', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Harda', NULL),
(466, 2, 19, 517, 'Hoshangabad', 'Hoshangabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hoshangabad', NULL),
(467, 2, 19, 536, 'Indore', 'Indore', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Indore', NULL),
(468, 2, 19, 517, 'Itarsi', 'Itarsi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hoshangabad', NULL),
(469, 2, 19, 538, 'Jabalpur', 'Jabalpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jabalpur', NULL),
(470, 2, 19, 538, 'Jabalpur Cantonment', 'Jabalpur Cantonment', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jabalpur', NULL),
(471, 2, 19, 286, 'Jaora', 'Jaora', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ratlam', NULL),
(472, 2, 19, 440, 'Khandwa', 'Khandwa', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Khandwa', NULL),
(473, 2, 19, 438, 'Khargone', 'Khargone', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Khargone', NULL),
(474, 2, 19, 371, 'Mandla', 'Mandla', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mandla', NULL),
(475, 2, 19, 370, 'Mandsaur', 'Mandsaur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mandsaur', NULL),
(476, 2, 19, 536, 'Mhow', 'Mhow', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Indore', NULL),
(477, 2, 19, 356, 'Morena', 'Morena', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Morena', NULL),
(478, 2, 19, 447, 'Murwara', 'Murwara', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Katni', NULL),
(479, 2, 19, 447, 'Murwara Katni', 'Murwara Katni', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Katni', NULL),
(480, 2, 19, 344, 'Nagda', 'Nagda', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nagda', NULL),
(481, 2, 19, 337, 'Narsimhapur', 'Narsimhapur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Narsimhapur', NULL),
(482, 2, 19, 333, 'Neemuch', 'Neemuch', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Neemuch', NULL),
(483, 2, 19, 318, 'Panna', 'Panna', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Panna', NULL),
(484, 2, 19, 237, 'Parasia', 'Parasia', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Chhindwara', NULL),
(485, 2, 19, 517, 'Pipariya', 'Pipariya', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hoshangabad', NULL),
(486, 2, 19, 271, 'Pithampur', 'Pithampur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dhar', NULL),
(487, 2, 19, 481, 'Raghogarh', 'Raghogarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Guna', NULL),
(488, 2, 19, 286, 'Ratlam', 'Ratlam', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ratlam', NULL),
(489, 2, 19, 281, 'Rewa', 'Rewa', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Rewa', NULL),
(490, 2, 19, 196, 'Sagar', 'Sagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sagar', NULL),
(491, 2, 19, 168, 'Sarni', 'Sarni', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Betul', NULL),
(492, 2, 19, 177, 'Satna', 'Satna', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Satna', NULL),
(493, 2, 19, 173, 'Sehore', 'Sehore', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sehore', NULL),
(494, 2, 19, 157, 'Sendhwa', 'Sendhwa', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Barwani', NULL),
(495, 2, 19, 172, 'Seoni', 'Seoni', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Seoni', NULL),
(496, 2, 19, 162, 'Shahdol', 'Shahdol', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Shahdol', NULL),
(497, 2, 19, 158, 'Shajapur', 'Shajapur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Shajapur', NULL),
(498, 2, 19, 153, 'Sheopur', 'Sheopur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sheopur', NULL),
(499, 2, 19, 148, 'Shivpuri', 'Shivpuri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Shivpuri', NULL),
(500, 2, 19, 144, 'Sidhi', 'Sidhi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sidhi', NULL),
(501, 2, 19, 137, 'Singrauli', 'Singrauli', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Singrauli', NULL),
(502, 2, 19, 93, 'Tikamgarh', 'Tikamgarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Tikamgarh', NULL),
(503, 2, 19, 75, 'Ujjain', 'Ujjain', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ujjain', NULL),
(504, 2, 19, 64, 'Vidisha', 'Vidisha', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Vidisha', NULL),
(505, 2, 19, 0, 'Vijaypur Sheopur District', 'Vijaypur Sheopur District', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL),
(506, 2, 20, 20, 'Achalpur', 'Achalpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Amravati', NULL),
(507, 2, 20, 9, 'Ahmadnagar', 'Ahmadnagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ahmadnagar', NULL),
(508, 2, 20, 12, 'Akola', 'Akola', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Akola', NULL),
(509, 2, 20, 12, 'Akot', 'Akot', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Akola', NULL),
(510, 2, 20, 539, 'Amalner', 'Amalner', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jalgaon', NULL),
(511, 2, 20, 164, 'Ambajogai', 'Ambajogai', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Beed', NULL),
(512, 2, 20, 99, 'Ambarnath', 'Ambarnath', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Thane', NULL),
(513, 2, 20, 20, 'Amravati', 'Amravati', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Amravati', NULL),
(514, 2, 20, 20, 'Anjangaon', 'Anjangaon', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Amravati', NULL),
(515, 2, 20, 31, 'Aurangabad', 'Aurangabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Aurangabad', NULL),
(516, 2, 20, 99, 'Badlapur', 'Badlapur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Thane', NULL),
(517, 2, 20, 230, 'Ballarpur', 'Ballarpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Chandrapur', NULL),
(518, 2, 20, 546, 'Baramati', 'Baramati', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pune', NULL),
(519, 2, 20, 127, 'Barsi', 'Barsi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Solapur', NULL),
(520, 2, 20, 510, 'Basmat', 'Basmat', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hingoli', NULL),
(521, 2, 20, 149, 'Bhadravati', 'Bhadravati', '0', '1', '2020-05-02 20:19:59', '2020-05-02 20:19:59', 'Shivamogga', NULL),
(522, 2, 20, 189, 'Bhandara', 'Bhandara', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bhandara', NULL),
(523, 2, 20, 99, 'Bhiwandi', 'Bhiwandi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Thane', NULL),
(524, 2, 20, 539, 'Bhusawal', 'Bhusawal', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jalgaon', NULL),
(525, 2, 20, 0, 'Bid', 'Bid', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL),
(526, 2, 20, 0, 'Buldana', 'Buldana', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL),
(527, 2, 20, 539, 'Chalisgaon', 'Chalisgaon', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jalgaon', NULL),
(528, 2, 20, 230, 'Chandrapur', 'Chandrapur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Chandrapur', NULL),
(529, 2, 20, 221, 'Chikhli', 'Chikhli', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Buldana', NULL),
(530, 2, 20, 284, 'Chiplun', 'Chiplun', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ratnagiri', NULL),
(531, 2, 20, 539, 'Chopda', 'Chopda', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jalgaon', NULL),
(532, 2, 20, 324, 'Dahanu', 'Dahanu', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Palghar', NULL),
(533, 2, 20, 339, 'Deglur', 'Deglur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nanded', NULL),
(534, 2, 20, 546, 'Dehu Cantt', 'Dehu Cantt', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pune', NULL),
(535, 2, 20, 336, 'Deolali', 'Deolali', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nashik', NULL),
(536, 2, 20, 287, 'Dhule', 'Dhule', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dhule', NULL),
(537, 2, 20, 99, 'Dombivali', 'Dombivali', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Thane', NULL),
(538, 2, 20, 308, 'Elephanta Caves', 'Elephanta Caves', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Raigad', NULL),
(539, 2, 20, 0, 'Gondiya', 'Gondiya', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Gondiya', NULL),
(540, 2, 20, 54, 'Hinganghat', 'Hinganghat', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Wardha', NULL),
(541, 2, 20, 510, 'Hingoli', 'Hingoli', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hingoli', NULL),
(542, 2, 20, 424, 'Ichalkaranji', 'Ichalkaranji', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kolhapur', NULL),
(543, 2, 20, 539, 'Jalgaon', 'Jalgaon', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jalgaon', NULL),
(544, 2, 20, 537, 'Jalna', 'Jalna', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jalna', NULL),
(545, 2, 20, 99, 'Kalyan', 'Kalyan', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Thane', NULL),
(546, 2, 20, 343, 'Kamptee', 'Kamptee', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nagpur', NULL),
(547, 2, 20, 343, 'Kamthi', 'Kamthi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nagpur', NULL),
(548, 2, 20, 178, 'Karad', 'Karad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Satara', NULL),
(549, 2, 20, 54, 'Karanja', 'Karanja', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Wardha', NULL),
(550, 2, 20, 546, 'Khadki', 'Khadki', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pune', NULL),
(551, 2, 20, 0, 'Khamgaon', 'Khamgaon', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Buldhana', NULL),
(552, 2, 20, 546, 'Khandala', 'Khandala', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pune', NULL),
(553, 2, 20, 308, 'Khopoli', 'Khopoli', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Raigad', NULL),
(554, 2, 20, 424, 'Kolhapur', 'Kolhapur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kolhapur', NULL),
(555, 2, 20, 9, 'Kopargaon', 'Kopargaon', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ahmadnagar', NULL),
(556, 2, 20, 391, 'Latur', 'Latur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Latur', NULL),
(557, 2, 20, 546, 'Lonavala', 'Lonavala', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pune', NULL),
(558, 2, 20, 336, 'Malegaon', 'Malegaon', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nashik', NULL),
(559, 2, 20, 0, 'Malkapur', 'Malkapur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Buldhana', NULL),
(560, 2, 20, 221, 'Malkapur Buldana District', 'Malkapur Buldana District', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Buldana', NULL),
(561, 2, 20, 164, 'Manjlegaon', 'Manjlegaon', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Beed', NULL),
(562, 2, 20, 336, 'Manmad', 'Manmad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nashik', NULL),
(563, 2, 20, 99, 'Mira Bhayandar', 'Mira Bhayandar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Thane', NULL),
(564, 2, 20, 180, 'Miraj', 'Miraj', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sangli', NULL),
(565, 2, 20, 354, 'Mumbai', 'Mumbai', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mumbai', NULL),
(566, 2, 20, 343, 'Nagpur', 'Nagpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nagpur', NULL),
(567, 2, 20, 324, 'Nalasopara', 'Nalasopara', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Palghar', NULL),
(568, 2, 20, 339, 'Nanded', 'Nanded', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nanded', NULL),
(569, 2, 20, 324, 'Nanded Waghala', 'Nanded Waghala', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Palghar', NULL),
(570, 2, 20, 338, 'Nandurbar', 'Nandurbar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nandurbar', NULL),
(571, 2, 20, 336, 'Nashik', 'Nashik', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nashik', NULL),
(572, 2, 20, 99, 'Navghar-Manikpur', 'Navghar-Manikpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Thane', NULL),
(573, 2, 20, 99, 'Navi Mumbai', 'Navi Mumbai', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Thane', NULL),
(574, 2, 20, 327, 'Osmanabad', 'Osmanabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Osmanabad', NULL),
(575, 2, 20, 336, 'Ozar', 'Ozar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nashik', NULL),
(576, 2, 20, 539, 'Pachora', 'Pachora', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jalgaon', NULL),
(577, 2, 20, 324, 'Palghar', 'Palghar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Palghar', NULL),
(578, 2, 20, 127, 'Pandharpur', 'Pandharpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Solapur', NULL),
(579, 2, 20, 308, 'Panvel', 'Panvel', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Raigad', NULL),
(580, 2, 20, 316, 'Parbhani', 'Parbhani', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Parbhani', NULL),
(581, 2, 20, 164, 'Parli', 'Parli', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Beed', NULL),
(582, 2, 20, 178, 'Phaltan', 'Phaltan', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Satara', NULL),
(583, 2, 20, 241, 'Pimpri Chinchwad', 'Pimpri Chinchwad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Chinchwad', NULL),
(584, 2, 20, 546, 'Pune', 'Pune', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pune', NULL),
(585, 2, 20, 546, 'Pune Cantonment', 'Pune Cantonment', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pune', NULL),
(586, 2, 20, 37, 'Pusad', 'Pusad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Yavatmal', NULL),
(587, 2, 20, 284, 'Ratnagiri', 'Ratnagiri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ratnagiri', NULL),
(588, 2, 20, 0, 'Sangamner', 'Sangamner', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ahmednagar ', NULL),
(589, 2, 20, 180, 'Sangli (-Miraj)', 'Sangli (-Miraj)', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sangli ', NULL),
(590, 2, 20, 180, 'Sangli Miraj Kupwad', 'Sangli Miraj Kupwad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sangli ', NULL),
(591, 2, 20, 178, 'Satara', 'Satara', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Satara', NULL),
(592, 2, 20, 0, 'Shegaon', 'Shegaon', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Buldhana', NULL),
(593, 2, 20, 287, 'Shirpur', 'Shirpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dhule ', NULL),
(594, 2, 20, 0, 'Shrirampur', 'Shrirampur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ahmednagar', NULL),
(595, 2, 20, 31, 'Sillod', 'Sillod', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Aurangabad ', NULL),
(596, 2, 20, 127, 'Solapur', 'Solapur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Solapur', NULL),
(597, 2, 20, 99, 'Thane', 'Thane', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Thane ', NULL),
(598, 2, 20, 391, 'Udgir', 'Udgir', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Latur', NULL),
(599, 2, 20, 99, 'Ulhasnagar', 'Ulhasnagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Thane ', NULL),
(600, 2, 20, 343, 'Umred', 'Umred', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nagpur', NULL),
(601, 2, 20, 180, 'Uran Islampur', 'Uran Islampur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sangli', NULL),
(602, 2, 20, 324, 'Vasai', 'Vasai', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Palghar', NULL),
(603, 2, 20, 324, 'Vasai Virar', 'Vasai Virar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Palghar', NULL),
(604, 2, 20, 324, 'Virar', 'Virar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Palghar', NULL),
(605, 2, 20, 37, 'Wani', 'Wani', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Yavatmal', NULL),
(606, 2, 20, 54, 'Wardha', 'Wardha', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Wardha', NULL),
(607, 2, 20, 20, 'Washim', 'Washim', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Amravati', NULL),
(608, 2, 20, 37, 'Yavatmal', 'Yavatmal', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Yavatmal', NULL),
(609, 2, 20, 336, 'Yeola', 'Yeola', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nashik', NULL),
(610, 2, 21, 246, 'Churachandpur', 'Churachandpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Churachandpur', NULL),
(611, 2, 21, 533, 'Imphal', 'Imphal', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Imphal', NULL),
(612, 2, 21, 74, 'Ukhrul', 'Ukhrul', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ukhrul', NULL),
(613, 2, 22, 414, 'Shillong', 'Shillong', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'East Khasi Hills', NULL),
(614, 2, 22, 50, 'Tura', 'Tura', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'West Garo Hills', NULL),
(615, 2, 23, 10, 'Aizawl', 'Aizawl', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Aizawl', NULL),
(616, 2, 23, 387, 'Lunglei', 'Lunglei', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Lunglei', NULL),
(617, 2, 23, 170, 'Serchhip', 'Serchhip', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Serchhip', NULL),
(618, 2, 24, 290, 'Dimapur', 'Dimapur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dimapur', NULL),
(619, 2, 24, 428, 'Kohima', 'Kohima', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kohima', NULL),
(620, 2, 25, 49, 'Balangir', 'Balangir', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Balangir', NULL),
(621, 2, 25, 51, 'Baleshwar', 'Baleshwar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Balasore', NULL),
(622, 2, 25, 446, 'Barbil', 'Barbil', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kendujhar', NULL),
(623, 2, 25, 145, 'Bargarh', 'Bargarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bargarh', NULL),
(624, 2, 25, 365, 'Baripada', 'Baripada', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mayurbhanj', NULL),
(625, 2, 25, 450, 'Berhmapur', 'Berhmapur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ganjam', NULL),
(626, 2, 25, 186, 'Bhadrak', 'Bhadrak', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bhadrak', NULL),
(627, 2, 25, 491, 'Bhawanipatna', 'Bhawanipatna', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kalahandi', NULL),
(628, 2, 25, 434, 'Bhubaneshwar', 'Bhubaneshwar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Khordha', NULL),
(629, 2, 25, 516, 'Brajarajnagar', 'Brajarajnagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jharsuguda', NULL),
(630, 2, 25, 252, 'Choudwar', 'Choudwar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Cuttack', NULL),
(631, 2, 25, 0, 'Civil Township', 'Civil Township', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sundargarh', NULL),
(632, 2, 25, 252, 'Cuttack', 'Cuttack', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Cuttack', NULL),
(633, 2, 25, 279, 'Dhenkanal', 'Dhenkanal', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dhenkanal', NULL),
(634, 2, 25, 434, 'Jatani', 'Jatani', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Khordha', NULL),
(635, 2, 25, 410, 'Jaypore', 'Jaypore', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Koraput', NULL),
(636, 2, 25, 410, 'Jeypur', 'Jeypur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Koraput', NULL),
(637, 2, 25, 516, 'Jharsuguda', 'Jharsuguda', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jharsuguda', NULL),
(638, 2, 25, 446, 'Kendujhar', 'Kendujhar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kendujhar', NULL),
(639, 2, 25, 540, 'Paradip', 'Paradip', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jagatsinghpur', NULL),
(640, 2, 25, 312, 'Puri', 'Puri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Puri', NULL),
(641, 2, 25, 0, 'Rajagangapur', 'Rajagangapur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sundargarh', NULL),
(642, 2, 25, 282, 'Rayagada', 'Rayagada', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Rayagada', NULL),
(643, 2, 25, 114, 'Rourkela', 'Rourkela', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sundergarh', NULL),
(644, 2, 25, 183, 'Sambalpur', 'Sambalpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sambalpur', NULL),
(645, 2, 25, 410, 'Sunabeda', 'Sunabeda', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Koraput', NULL),
(646, 2, 26, 471, 'Karaikal', 'Karaikal', '0', '1', '2020-04-27 11:32:16', '2020-04-27 11:32:16', 'Karaikal', NULL),
(647, 2, 26, 0, 'Oulgaret', 'Oulgaret', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Puducherry', NULL),
(648, 2, 26, 0, 'Puducherry', 'Puducherry', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Puducherry', NULL),
(649, 2, 27, 437, 'Abohar', 'Abohar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Fazilka', NULL),
(650, 2, 27, 22, 'Amritsar', 'Amritsar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Amritsar', NULL),
(651, 2, 27, 155, 'Barnala', 'Barnala', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Barnala', NULL),
(652, 2, 27, 485, 'Batala', 'Batala', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Gurdaspur', NULL),
(653, 2, 27, 163, 'Bathinda', 'Bathinda', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bathinda', NULL),
(654, 2, 27, 22, 'Beas', 'Beas', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Amritsar', NULL),
(655, 2, 27, 179, 'Dhuri', 'Dhuri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sangrur', NULL),
(656, 2, 27, 425, 'Faridkot', 'Faridkot', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Faridkot', NULL),
(657, 2, 27, 437, 'Fazilka', 'Fazilka', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Fazilka', NULL),
(658, 2, 27, 441, 'Firozpur', 'Firozpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Firozpur', NULL),
(659, 2, 27, 441, 'Firozpur Cantonment', 'Firozpur Cantonment', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Firozpur', NULL),
(660, 2, 27, 433, 'Gobindgarh', 'Gobindgarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Fatehgarh Sahib', NULL),
(661, 2, 27, 485, 'Gurdaspur', 'Gurdaspur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Gurdaspur', NULL),
(662, 2, 27, 519, 'Hoshiarpur', 'Hoshiarpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hoshiarpur', NULL),
(663, 2, 27, 542, 'Jagraon', 'Jagraon', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jagraon', NULL),
(664, 2, 27, 545, 'Jalandhar', 'Jalandhar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jalandhar', NULL),
(665, 2, 27, 473, 'Kapurthala', 'Kapurthala', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kapurthala', NULL),
(666, 2, 27, 388, 'Khanna', 'Khanna', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ludhiana', NULL),
(667, 2, 27, 425, 'Kotkapura', 'Kotkapura', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Faridkot', NULL),
(668, 2, 27, 388, 'Ludhiana', 'Ludhiana', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ludhiana', NULL),
(669, 2, 27, 388, 'Machhiwara Sahib', 'Machhiwara Sahib', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ludhiana', NULL),
(670, 2, 27, 355, 'Malaut', 'Malaut', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Muktsar', NULL),
(671, 2, 27, 179, 'Malerkotla', 'Malerkotla', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sangrur', NULL),
(672, 2, 27, 433, 'Mandi Govindgarh', 'Mandi Govindgarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Fatehgarh Sahib', NULL),
(673, 2, 27, 368, 'Mansa', 'Mansa', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mansa', NULL),
(674, 2, 27, 360, 'Moga', 'Moga', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Moga', NULL),
(675, 2, 27, 190, 'Mohali', 'Mohali', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sahibzada Ajit Singh Nagar', NULL),
(676, 2, 27, 119, 'Muktsar', 'Muktsar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sri Muktsar Sahib', NULL),
(677, 2, 27, 0, 'Nabha', 'Nabha', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Patiala', NULL),
(678, 2, 27, 201, 'Nangal', 'Nangal', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Rupnagar', NULL),
(679, 2, 27, 0, 'Pathankot', 'Pathankot', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pathankot', NULL),
(680, 2, 27, 0, 'Patiala', 'Patiala', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Patiala', NULL),
(681, 2, 27, 473, 'Phagwara', 'Phagwara', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kapurthala', NULL),
(682, 2, 27, 0, 'Rajpura', 'Rajpura', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Patiala', NULL),
(683, 2, 27, 163, 'Rampura Phul', 'Rampura Phul', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bathinda', NULL),
(684, 2, 27, 201, 'Rupnagar', 'Rupnagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Rupnagar', NULL),
(685, 2, 27, 359, 'S.A.S. Nagar', 'S.A.S. Nagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mohali', NULL),
(686, 2, 27, 0, 'Samana', 'Samana', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Patiala', NULL),
(687, 2, 27, 179, 'Sangrur', 'Sangrur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sangrur', NULL),
(688, 2, 27, 433, 'Sirhind', 'Sirhind', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Fatehgarh Sahib', NULL),
(689, 2, 27, 433, 'Sirhind Fatehgarh Sahib', 'Sirhind Fatehgarh Sahib', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Fatehgarh Sahib', NULL),
(690, 2, 27, 119, 'Sri Muktsar Sahib', 'Sri Muktsar Sahib', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sri Muktsar Sahib', NULL),
(691, 2, 27, 179, 'Sunam', 'Sunam', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sangrur', NULL),
(692, 2, 27, 102, 'Tarantaran', 'Tarantaran', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Tarn Taran', NULL),
(693, 2, 28, 134, 'Abu Road', 'Abu Road', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sirohi', NULL),
(694, 2, 28, 11, 'Ajmer', 'Ajmer', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ajmer', NULL),
(695, 2, 28, 17, 'Alwar', 'Alwar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Alwar', NULL),
(696, 2, 28, 152, 'Balotra', 'Balotra', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Barmer', NULL),
(697, 2, 28, 262, 'Bandikui', 'Bandikui', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dausa', NULL),
(698, 2, 28, 135, 'Banswara', 'Banswara', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Banswara', NULL),
(699, 2, 28, 140, 'Baran', 'Baran', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Baran', NULL),
(700, 2, 28, 280, 'Bari', 'Bari', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dholpur', NULL),
(701, 2, 28, 152, 'Barmer', 'Barmer', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Barmer', NULL),
(702, 2, 28, 11, 'Beawar', 'Beawar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ajmer', NULL),
(703, 2, 28, 195, 'Bharatpur', 'Bharatpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bharatpur', NULL),
(704, 2, 28, 200, 'Bhilwara', 'Bhilwara', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bhilwara', NULL),
(705, 2, 28, 535, 'Bhinmal', 'Bhinmal', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jalore', NULL),
(706, 2, 28, 212, 'Bikaner', 'Bikaner', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bikaner', NULL),
(707, 2, 28, 222, 'Bundi', 'Bundi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bundi', NULL),
(708, 2, 28, 245, 'Chittorgarh', 'Chittorgarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Chittorgarh', NULL),
(709, 2, 28, 543, 'Chomun', 'Chomun', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jaipur', NULL),
(710, 2, 28, 247, 'Churu', 'Churu', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Churu', NULL),
(711, 2, 28, 262, 'Dausa', 'Dausa', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dausa', NULL),
(712, 2, 28, 192, 'Deeg', 'Deeg', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bharathpur', NULL),
(713, 2, 28, 283, 'Dhaulpur', 'Dhaulpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dholur', NULL),
(714, 2, 28, 345, 'Didwana', 'Didwana', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nagaur', NULL),
(715, 2, 28, 212, 'Dungargarh', 'Dungargarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bikaner', NULL),
(716, 2, 28, 300, 'Dungarpur', 'Dungarpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dungarpur', NULL),
(717, 2, 28, 435, 'Fatehpur', 'Fatehpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Fatehpur', NULL),
(718, 2, 28, 31, 'Gangapur', 'Gangapur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Aurangabad', NULL),
(719, 2, 28, 175, 'Gangapur City', 'Gangapur City', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sawai Madhopur', NULL),
(720, 2, 28, 495, 'Hanumangarh', 'Hanumangarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hanumangarh', NULL),
(721, 2, 28, 469, 'Hindaun', 'Hindaun', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Karauli', NULL),
(722, 2, 28, 543, 'Jaipur', 'Jaipur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jaipur', NULL),
(723, 2, 28, 544, 'Jaisalmer', 'Jaisalmer', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jaisalmer', NULL),
(724, 2, 28, 0, 'Jalor', 'Jalor', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jalor', NULL),
(725, 2, 28, 521, 'Jhalawar', 'Jhalawar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jhalawar', NULL),
(726, 2, 28, 513, 'Jhunjhunun', 'Jhunjhunun', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jhunjhunun', NULL),
(727, 2, 28, 509, 'Jodhpur', 'Jodhpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jodhpur', NULL),
(728, 2, 28, 469, 'Karauli', 'Karauli', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Karauli', NULL),
(729, 2, 28, 11, 'Kishangarh', 'Kishangarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ajmer', NULL),
(730, 2, 28, 405, 'Kota', 'Kota', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kota', NULL),
(731, 2, 28, 345, 'Kuchaman City', 'Kuchaman City', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nagaur', NULL),
(732, 2, 28, 142, 'Lachhmangarh', 'Lachhmangarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sikar', NULL),
(733, 2, 28, 345, 'Ladnu', 'Ladnu', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nagaur', NULL),
(734, 2, 28, 345, 'Makrana', 'Makrana', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nagaur', NULL),
(735, 2, 28, 345, 'Nagaur', 'Nagaur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nagaur', NULL),
(736, 2, 28, 11, 'Nasirabad', 'Nasirabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ajmer', NULL),
(737, 2, 28, 0, 'Nawalgarh', 'Nawalgarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jhunjhunu', NULL),
(738, 2, 28, 245, 'Nimbahera', 'Nimbahera', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Chittorgarh', NULL),
(739, 2, 28, 211, 'Nokha', 'Nokha', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bikaer', NULL),
(740, 2, 28, 323, 'Pali', 'Pali', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pali', NULL),
(741, 2, 28, 509, 'Phalodi', 'Phalodi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jodhpur', NULL),
(742, 2, 28, 306, 'Rajgarh', 'Rajgarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Rajgarh', NULL),
(743, 2, 28, 303, 'Rajsamand', 'Rajsamand', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Rajsamand', NULL),
(744, 2, 28, 247, 'Ratangarh', 'Ratangarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Churu', NULL),
(745, 2, 28, 247, 'Sardarshahar', 'Sardarshahar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Churu', NULL),
(746, 2, 28, 175, 'Sawai Madhopur', 'Sawai Madhopur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sawai Madhopur', NULL),
(747, 2, 28, 142, 'Sikar', 'Sikar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sikar', NULL),
(748, 2, 28, 120, 'Sri Ganganagar', 'Sri Ganganagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sri Ganganagar', NULL),
(749, 2, 28, 247, 'Sujangarh', 'Sujangarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Churu', NULL),
(750, 2, 28, 0, 'Suratgarh', 'Suratgarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ganganagar', NULL),
(751, 2, 28, 83, 'Tonk', 'Tonk', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Tonk', NULL),
(752, 2, 28, 79, 'Udaipur', 'Udaipur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Udaipur', NULL),
(753, 2, 29, 448, 'Gangtok', 'Gangtok', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Gangtok', NULL),
(754, 2, 29, 456, 'Geyzing', 'Geyzing', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Geyzing', NULL),
(755, 2, 30, 234, 'Alandur', 'Alandur', '0', '1', '2020-04-27 07:00:05', '2020-04-27 07:00:05', 'Chennai', NULL),
(756, 2, 30, 89, 'Ambasamudram', 'Ambasamudram', '0', '1', '2020-04-27 09:56:20', '2020-04-27 09:56:20', 'Tirunelveli', NULL),
(757, 2, 30, 234, 'Ambattur', 'Ambattur', '0', '1', NULL, NULL, 'Chennai', NULL),
(758, 2, 30, 88, 'Ambur', 'Ambur', '0', '1', '2020-04-27 09:54:27', '2020-04-27 09:54:27', 'Tirupattur', NULL),
(759, 2, 30, 384, 'Anaiyur', 'Anaiyur', '0', '1', '2020-04-27 11:26:36', '2020-04-27 11:26:36', 'Madurai', NULL),
(760, 2, 30, 65, 'Arakkonam', 'Arakkonam', '0', '1', '2020-04-27 09:33:27', '2020-04-27 09:33:27', 'Vellore', NULL),
(761, 2, 30, 85, 'Arani', 'Arani', '0', '1', '2020-04-27 09:36:54', '2020-04-27 09:36:54', 'Tiruvannamalai', NULL),
(762, 2, 30, 288, 'Arcot', 'Arcot', '0', '1', '2020-04-27 10:44:16', '2020-04-27 10:44:16', 'Ranipet', NULL),
(763, 2, 30, 61, 'Aruppukkottai', 'Aruppukkottai', '0', '1', '2020-04-27 09:28:03', '2020-04-27 09:28:03', 'Virudhunagar', NULL),
(764, 2, 30, 188, 'Attur', 'Attur', '0', '1', '2020-04-27 10:23:14', '2020-04-27 10:23:14', 'Salem', NULL),
(765, 2, 30, 86, 'Avadi', 'Avadi', '0', '1', '2020-04-27 09:38:31', '2020-04-27 09:38:31', 'Tiruvallur', NULL),
(766, 2, 30, 384, 'Avaniapuram', 'Avaniapuram', '0', '1', '2020-04-27 11:26:52', '2020-04-27 11:26:52', 'Madurai', NULL),
(767, 2, 30, 417, 'Bhavani', 'Bhavani', '0', '1', '2020-04-27 11:30:01', '2020-04-27 11:30:01', 'Erode', NULL),
(768, 2, 30, 97, 'Bodinayakanur', 'Bodinayakanur', '0', '1', '2020-04-27 10:01:57', '2020-04-27 10:01:57', 'Theni', NULL),
(769, 2, 30, 233, 'Chengalpattu', 'Chengalpattu', '0', '1', '2020-04-27 10:25:10', '2020-04-27 10:25:10', 'Chengalpattu', NULL),
(770, 2, 30, 234, 'Chennai', 'Chennai', '0', '1', '2020-04-27 07:03:57', '2020-04-27 07:03:57', 'Chennai', NULL),
(771, 2, 30, 250, 'Chidambaram', 'Chidambaram', '0', '1', '2020-04-27 10:35:45', '2020-04-27 10:35:45', 'Cuddalore', NULL),
(772, 2, 30, 248, 'Coimbatore', 'Coimbatore', '0', '1', '2020-04-27 10:28:24', '2020-04-27 10:28:24', 'Coimbatore', NULL),
(773, 2, 30, 331, 'Coonoor', 'Coonoor', '0', '1', '2020-04-27 10:50:36', '2020-04-27 10:50:36', 'Nilgiris', NULL),
(774, 2, 30, 250, 'Cuddalore', 'Cuddalore', '0', '1', '2020-04-27 10:41:38', '2020-04-27 10:41:38', 'Cuddalore', NULL),
(775, 2, 30, 97, 'Cumbum', 'Cumbum', '0', '1', '2020-04-27 10:02:20', '2020-04-27 10:02:20', 'Theni', NULL),
(776, 2, 30, 130, 'Devakottai', 'Devakottai', '0', '1', '2020-04-27 10:21:59', '2020-04-27 10:21:59', 'Sivagangai', NULL),
(777, 2, 30, 331, 'Devarshola', 'Devarshola', '0', '1', '2020-04-27 10:51:01', '2020-04-27 10:51:01', 'Nilgiris', NULL),
(778, 2, 30, 87, 'Dharapuram', 'Dharapuram', '0', '1', '2020-04-27 09:39:42', '2020-04-27 09:39:42', 'Tirupur', NULL),
(779, 2, 30, 272, 'Dharmapuri', 'Dharmapuri', '0', '1', '2020-04-27 10:43:34', '2020-04-27 10:43:34', 'Dharmapuri', NULL),
(780, 2, 30, 291, 'Dindigul', 'Dindigul', '0', '1', '2020-04-27 10:45:20', '2020-04-27 10:45:20', 'Dindigul', NULL),
(781, 2, 30, 188, 'Edappadi', 'Edappadi', '0', '1', '2020-04-27 10:23:29', '2020-04-27 10:23:29', 'Salem', NULL),
(782, 2, 30, 417, 'Erode', 'Erode', '0', '1', '2020-04-27 11:30:17', '2020-04-27 11:30:17', 'Erode', NULL),
(783, 2, 30, 417, 'Gobichettipalayam', 'Gobichettipalayam', '0', '1', '2020-04-27 11:30:34', '2020-04-27 11:30:34', 'Erode', NULL),
(784, 2, 30, 65, 'Gudiyatham', 'Gudiyatham', '0', '1', '2020-04-27 09:33:40', '2020-04-27 09:33:40', 'Vellore', NULL),
(785, 2, 30, 401, 'Hosur', 'Hosur', '0', '1', '2020-04-27 11:28:52', '2020-04-27 11:28:52', 'Krishnagiri', NULL),
(786, 2, 30, 89, 'Kadayanallur', 'Kadayanallur', '0', '1', '2020-04-27 09:56:44', '2020-04-27 09:56:44', 'Tirunelveli', NULL),
(787, 2, 30, 62, 'Kallakkurichi', 'Kallakkurichi', '0', '1', '2020-04-27 09:31:19', '2020-04-27 09:31:19', 'Villupuram', NULL),
(788, 2, 30, 97, 'Kambam', 'Kambam', '0', '1', '2020-04-27 10:02:35', '2020-04-27 10:02:35', 'Theni', NULL),
(789, 2, 30, 482, 'Kancheepuram', 'Kancheepuram', '0', '1', '2020-04-27 06:55:28', '2020-04-27 06:55:28', 'Kancheepuram', NULL),
(790, 2, 30, 130, 'Karaikkudi', 'Karaikkudi', '0', '1', '2020-04-27 10:22:14', '2020-04-27 10:22:14', 'Sivagangai', NULL),
(791, 2, 30, 459, 'Karur', 'Karur', '0', '1', '2020-04-27 11:31:46', '2020-04-27 11:31:46', 'Karur', NULL),
(792, 2, 30, 417, 'Kasipalayam', 'Kasipalayam', '0', '1', '2020-04-27 11:30:50', '2020-04-27 11:30:50', 'Erode', NULL),
(793, 2, 30, 340, 'Komarapalayam', 'Komarapalayam', '0', '1', '2020-04-27 10:52:11', '2020-04-27 10:52:11', 'Namakkal', NULL),
(794, 2, 30, 95, 'Kovilpatti', 'Kovilpatti', '0', '1', '2020-04-27 09:59:52', '2020-04-27 09:59:52', 'Thoothukudi', NULL),
(795, 2, 30, 401, 'Krishnagiri', 'Krishnagiri', '0', '1', '2020-04-27 11:29:08', '2020-04-27 11:29:08', 'Krishnagiri', NULL),
(796, 2, 30, 98, 'Kumbakonam', 'Kumbakonam', '0', '1', '2020-04-27 10:16:17', '2020-04-27 10:16:17', 'Thanjavur', NULL),
(797, 2, 30, 248, 'Kuniyamuthur', 'Kuniyamuthur', '0', '1', '2020-04-27 10:28:59', '2020-04-27 10:28:59', 'Coimbatore', NULL),
(798, 2, 30, 98, 'Kurichi', 'Kurichi', '0', '1', '2020-04-27 10:16:47', '2020-04-27 10:16:47', 'Thanjavur', NULL),
(799, 2, 30, 234, 'Madavaram', 'Madavaram', '0', '1', '2020-04-27 07:04:29', '2020-04-27 07:04:29', 'Chennai', NULL),
(800, 2, 30, 384, 'Madurai', 'Madurai', '0', '1', '2020-04-27 11:27:15', '2020-04-27 11:27:15', 'Madurai', NULL),
(801, 2, 30, 84, 'Mannargudi', 'Mannargudi', '0', '1', '2020-04-27 09:35:31', '2020-04-27 09:35:31', 'Tiruvarur', NULL),
(802, 2, 30, 233, 'Maraimalainagar', 'Maraimalainagar', '0', '1', '2020-04-27 10:25:54', '2020-04-27 10:25:54', 'Chengalpattu', NULL),
(803, 2, 30, 346, 'Mayiladuthurai', 'Mayiladuthurai', '0', '1', '2020-04-27 10:54:15', '2020-04-27 10:54:15', 'Nagapattinam', NULL),
(804, 2, 30, 65, 'Melvisharam', 'Melvisharam', '0', '1', '2020-04-27 09:33:58', '2020-04-27 09:33:58', 'Vellore', NULL),
(805, 2, 30, 248, 'Mettupalayam', 'Mettupalayam', '0', '1', '2020-04-27 10:29:14', '2020-04-27 10:29:14', 'Coimbatore', NULL),
(806, 2, 30, 188, 'Mettur', 'Mettur', '0', '1', '2020-04-27 10:23:46', '2020-04-27 10:23:46', 'Salem', NULL),
(807, 2, 30, 95, 'Milavittan', 'Milavittan', '0', '1', '2020-04-27 10:00:08', '2020-04-27 10:00:08', 'Thoothukudi', NULL),
(808, 2, 30, 346, 'Nagapattinam', 'Nagapattinam', '0', '1', '2020-04-27 10:54:28', '2020-04-27 10:54:28', 'Nagapattinam', NULL),
(809, 2, 30, 475, 'Nagercoil', 'Nagercoil', '0', '1', '2020-04-27 11:32:55', '2020-04-27 11:32:55', 'Kanyakumari', NULL),
(810, 2, 30, 340, 'Namakkal', 'Namakkal', '0', '1', '2020-04-27 10:52:27', '2020-04-27 10:52:27', 'Namakkal', NULL),
(811, 2, 30, 233, 'Nandivaram-Guduvancheri', 'Nandivaram-Guduvancheri', '0', '1', '2020-04-27 10:26:07', '2020-04-27 10:26:07', 'Chengalpattu', NULL),
(812, 2, 30, 250, 'Nellikuppam', 'Nellikuppam', '0', '1', '2020-04-27 10:41:58', '2020-04-27 10:41:58', 'Cuddalore', NULL),
(813, 2, 30, 331, 'Nelliyalam', 'Nelliyalam', '0', '1', '2020-04-27 10:51:13', '2020-04-27 10:51:13', 'Nilgiris', NULL),
(814, 2, 30, 87, 'Neripperichal', 'Neripperichal', '0', '1', '2020-04-27 09:39:57', '2020-04-27 09:39:57', 'Tirupur', NULL),
(815, 2, 30, 250, 'Neyveli', 'Neyveli', '0', '1', '2020-04-27 10:42:15', '2020-04-27 10:42:15', 'Cuddalore', NULL),
(816, 2, 30, 331, 'Ooty', 'Ooty', '0', '1', '2020-04-27 10:51:30', '2020-04-27 10:51:30', 'Nilgiris', NULL),
(818, 2, 30, 233, 'Pallavaram', 'Pallavaram', '0', '1', '2020-04-27 10:26:22', '2020-04-27 10:26:22', 'Chengalpattu', NULL),
(819, 2, 30, 250, 'Panruti', 'Panruti', '0', '1', '2020-04-27 10:42:34', '2020-04-27 10:42:34', 'Cuddalore', NULL),
(820, 2, 30, 299, 'Paramakudi', 'Paramakudi', '0', '1', '2020-04-27 10:48:02', '2020-04-27 10:48:02', 'Ramanathapuram', NULL),
(821, 2, 30, 98, 'Pattukkottai', 'Pattukkottai', '0', '1', '2020-04-27 10:17:03', '2020-04-27 10:17:03', 'Thanjavur', NULL),
(822, 2, 30, 0, 'Perambalur', 'Perambalur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Perambalur', NULL),
(823, 2, 30, 65, 'Pernampattu', 'Pernampattu', '0', '1', '2020-04-27 09:34:15', '2020-04-27 09:34:15', 'Vellore', NULL),
(824, 2, 30, 248, 'Pollachi', 'Pollachi', '0', '1', '2020-04-27 10:29:30', '2020-04-27 10:29:30', 'Coimbatore', NULL),
(825, 2, 30, 0, 'Pudukkottai', 'Pudukkottai', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pudukkottai', NULL),
(826, 2, 30, 100, 'Puliyankudi', 'Puliyankudi', '0', '1', '2020-04-27 10:20:23', '2020-04-27 10:20:23', 'Tenkasi', NULL),
(827, 2, 30, 61, 'Rajapalayam', 'Rajapalayam', '0', '1', '2020-04-27 09:28:23', '2020-04-27 09:28:23', 'Virudhunagar', NULL),
(828, 2, 30, 299, 'Ramanathapuram', 'Ramanathapuram', '0', '1', '2020-04-27 10:48:19', '2020-04-27 10:48:19', 'Ramanathapuram', NULL),
(829, 2, 30, 299, 'Rameswaram', 'Rameswaram', '0', '1', '2020-04-27 10:48:35', '2020-04-27 10:48:35', 'Ramanathapuram', NULL),
(830, 2, 30, 288, 'Ranipettai', 'Ranipettai', '0', '1', '2020-04-27 10:44:42', '2020-04-27 10:44:42', 'Ranipet', NULL),
(831, 2, 30, 340, 'Rasipuram', 'Rasipuram', '0', '1', '2020-04-27 10:52:57', '2020-04-27 10:52:57', 'Namakkal', NULL),
(832, 2, 30, 188, 'Salem', 'Salem', '0', '1', '2020-04-27 10:24:03', '2020-04-27 10:24:03', 'Salem', NULL),
(833, 2, 30, 100, 'Sankarankoil', 'Sankarankoil', '0', '1', '2020-04-27 10:20:36', '2020-04-27 10:20:36', 'Tenkasi', NULL),
(834, 2, 30, 130, 'Sivaganga', 'Sivaganga', '0', '1', '2020-04-27 10:22:27', '2020-04-27 10:22:27', 'Sivagangai', NULL),
(835, 2, 30, 61, 'Sivakasi', 'Sivakasi', '0', '1', '2020-04-27 09:28:39', '2020-04-27 09:28:39', 'Virudhunagar', NULL),
(836, 2, 30, 61, 'Srivilliputhur', 'Srivilliputhur', '0', '1', '2020-04-27 09:28:57', '2020-04-27 09:28:57', 'Virudhunagar', NULL),
(837, 2, 30, 233, 'Tambaram', 'Tambaram', '0', '1', '2020-04-27 10:26:35', '2020-04-27 10:26:35', 'Chengalpattu', NULL),
(838, 2, 30, 100, 'Tenkasi', 'Tenkasi', '0', '1', '2020-04-27 10:20:58', '2020-04-27 10:20:58', 'Tenkasi', NULL),
(839, 2, 30, 98, 'Thanjavur', 'Thanjavur', '0', '1', '2020-04-27 10:17:19', '2020-04-27 10:17:19', 'Thanjavur', NULL),
(840, 2, 30, 97, 'Theni', 'Theni', '0', '1', '2020-04-27 10:02:49', '2020-04-27 10:02:49', 'Theni', NULL),
(841, 2, 30, 97, 'Theni Allinagaram', 'Theni Allinagaram', '0', '1', '2020-04-27 10:03:04', '2020-04-27 10:03:04', 'Theni', NULL),
(842, 2, 30, 384, 'Thirumangalam', 'Thirumangalam', '0', '1', '2020-04-27 11:27:58', '2020-04-27 11:27:58', 'Madurai', NULL),
(843, 2, 30, 384, 'Thiruparankundram', 'Thiruparankundram', '0', '1', '2020-04-27 11:28:16', '2020-04-27 11:28:16', 'Madurai', NULL),
(844, 2, 30, 0, 'Thiruvallur', 'Thiruvallur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Thiruvallur', NULL),
(845, 2, 30, 548, 'Thiruvarur', 'Thiruvarur', '0', '1', '2020-04-23 19:15:21', '2020-04-23 19:15:21', 'Thiruvarur', NULL),
(846, 2, 30, 62, 'Tindivanam', 'Tindivanam', '0', '1', '2020-04-27 09:31:32', '2020-04-27 09:31:32', 'Villupuram', NULL),
(847, 2, 30, 95, 'Tiruchendur', 'Tiruchendur', '0', '1', '2020-04-27 10:00:23', '2020-04-27 10:00:23', 'Thoothukudi', NULL),
(848, 2, 30, 340, 'Tiruchengode', 'Tiruchengode', '0', '1', '2020-04-27 10:53:09', '2020-04-27 10:53:09', 'Namakkal', NULL),
(849, 2, 30, 90, 'Tiruchirappalli', 'Tiruchirappalli', '0', '1', '2020-04-27 09:58:59', '2020-04-27 09:58:59', 'Tiruchirappalli', NULL),
(850, 2, 30, 89, 'Tirunelveli', 'Tirunelveli', '0', '1', '2020-04-27 09:57:06', '2020-04-27 09:57:06', 'Tirunelveli', NULL),
(851, 2, 30, 88, 'Tirupattur', 'Tirupattur', '0', '1', '2020-04-23 19:15:21', '2020-04-23 19:15:21', 'Tirupathur', NULL),
(852, 2, 30, 87, 'Tiruppur', 'Tiruppur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Tiruppur', NULL),
(853, 2, 30, 86, 'Tiruttani', 'Tiruttani', '0', '1', '2020-04-27 09:38:48', '2020-04-27 09:38:48', 'Tiruvallur', NULL),
(854, 2, 30, 85, 'Tiruvannamalai', 'Tiruvannamalai', '0', '1', '2020-04-27 09:37:13', '2020-04-27 09:37:13', 'Tiruvannamalai', NULL),
(855, 2, 30, 234, 'Tiruvottiyur', 'Tiruvottiyur', '0', '1', '2020-04-27 07:04:48', '2020-04-27 07:04:48', 'Chennai', NULL),
(856, 2, 30, 95, 'Tuticorin', 'Tuticorin', '0', '1', '2020-04-27 10:00:36', '2020-04-27 10:00:36', 'Thoothukudi', NULL),
(857, 2, 30, 87, 'Udumalaipettai', 'Udumalaipettai', '0', '1', '2020-04-27 09:40:25', '2020-04-27 09:40:25', 'Tirupur', NULL),
(858, 2, 30, 248, 'Valparai', 'Valparai', '0', '1', '2020-04-27 10:29:45', '2020-04-27 10:29:45', 'Coimbatore', NULL),
(859, 2, 30, 88, 'Vaniyanbadi', 'Vaniyanbadi', '0', '1', '2020-04-27 09:55:38', '2020-04-27 09:55:38', 'Tirupattur', NULL),
(860, 2, 30, 417, 'Veerappanchatram', 'Veerappanchatram', '0', '1', '2020-04-27 11:31:08', '2020-04-27 11:31:08', 'Erode', NULL),
(861, 2, 30, 87, 'Velampalayam', 'Velampalayam', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Tiruppur', NULL),
(862, 2, 30, 65, 'Vellore', 'Vellore', '0', '1', '2020-04-27 09:34:28', '2020-04-27 09:34:28', 'Vellore', NULL),
(863, 2, 30, 89, 'Vikramasingapuram', 'Vikramasingapuram', '0', '1', '2020-04-27 09:57:25', '2020-04-27 09:57:25', 'Tirunelveli', NULL),
(864, 2, 30, 62, 'Villupuram', 'Villupuram', '0', '1', '2020-04-27 09:31:04', '2020-04-27 09:31:04', 'Villupuram', NULL),
(865, 2, 30, 250, 'Virudhachalam', 'Virudhachalam', '0', '1', '2020-04-27 10:42:48', '2020-04-27 10:42:48', 'Cuddalore', NULL),
(866, 2, 30, 61, 'Virudhunagar', 'Virudhunagar', '0', '1', '2020-04-27 09:29:27', '2020-04-27 09:29:27', 'Virudhunagar', NULL),
(867, 2, 31, 7, 'Adilabad', 'Adilabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Adilabad', NULL),
(868, 2, 31, 373, 'Bellampalle', 'Bellampalle', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mancherial', NULL),
(869, 2, 31, 43, 'Bhongir', 'Bhongir', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Yadadri Bhuvanagiri', NULL),
(870, 2, 31, 329, 'Bodhan', 'Bodhan', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nizamabad', NULL);
INSERT INTO `city` (`id`, `country_id`, `state_id`, `district_id`, `city`, `search_key`, `position`, `is_active`, `created_at`, `updated_at`, `districtname`, `created_by`) VALUES
(871, 2, 31, 529, 'Gaddiannaram', 'Gaddiannaram', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hyderabad', NULL),
(872, 2, 31, 505, 'Gadwal', 'Gadwal', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jogulamba Gadwal', NULL),
(873, 2, 31, 529, 'Hyderabad', 'Hyderabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hyderabad', NULL),
(874, 2, 31, 463, 'Jagtial', 'Jagtial', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Karimnagar', NULL),
(875, 2, 31, 418, 'Kagaznagar', 'Kagaznagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Komaram Bheem', NULL),
(876, 2, 31, 244, 'Kallur', 'Kallur', '0', '1', '2020-05-03 08:06:56', '2020-05-03 08:06:56', 'Chittoor', NULL),
(877, 2, 31, 489, 'Kamareddy', 'Kamareddy', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kamareddy', NULL),
(878, 2, 31, 0, 'Kapra', 'Kapra', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Medchal Malkajgiri', NULL),
(879, 2, 31, 463, 'Karimnagar', 'Karimnagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Karimnagar', NULL),
(880, 2, 31, 442, 'Khammam', 'Khammam', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Khammam', NULL),
(881, 2, 31, 103, 'Kodad', 'Kodad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Suryapet', NULL),
(882, 2, 31, 409, 'Koratla', 'Koratla', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Koratla', NULL),
(883, 2, 31, 185, 'Kothagudem', 'Kothagudem', '0', '1', '2020-05-02 20:22:33', '2020-05-02 20:22:33', 'Bhadradri Kothagudem', NULL),
(884, 2, 31, 0, 'Kukatpally', 'Kukatpally', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Medchal Malkajgiri', NULL),
(885, 2, 31, 292, 'LB Nagar', 'LB Nagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ranga Reddy', NULL),
(886, 2, 31, 382, 'Mahbubnagar', 'Mahbubnagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mahbubnagar', NULL),
(887, 2, 31, 0, 'Malkajgiri', 'Malkajgiri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Medchal Malkajgiri', NULL),
(888, 2, 31, 373, 'Mancherial', 'Mancherial', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mancherial', NULL),
(889, 2, 31, 373, 'Mandamarri', 'Mandamarri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mancherial', NULL),
(890, 2, 31, 341, 'Nalgonda', 'Nalgonda', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nalgonda', NULL),
(891, 2, 31, 330, 'Nirmal', 'Nirmal', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nirmal', NULL),
(892, 2, 31, 329, 'Nizamabad', 'Nizamabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nizamabad', NULL),
(893, 2, 31, 176, 'Palwancha', 'Palwancha', '0', '1', '2020-05-02 20:22:07', '2020-05-02 20:22:07', 'Bhadradri', NULL),
(894, 2, 31, 0, 'Quthbullapur', 'Quthbullapur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Medchal Malkajgiri', NULL),
(895, 2, 31, 292, 'Rajendranagar', 'Rajendranagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ranga Reddy', NULL),
(896, 2, 31, 0, 'Ramagundam', 'Ramagundam', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Peddapalli', NULL),
(897, 2, 31, 181, 'Sangareddy', 'Sangareddy', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sangareddy', NULL),
(898, 2, 31, 529, 'Secunderabad', 'Secunderabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hyderabad', NULL),
(899, 2, 31, 292, 'Serilingampalle', 'Serilingampalle', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ranga Reddy', NULL),
(900, 2, 31, 146, 'Siddipet', 'Siddipet', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Siddipet', NULL),
(901, 2, 31, 136, 'Sircilla', 'Sircilla', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sircilla', NULL),
(902, 2, 31, 103, 'Suryapet', 'Suryapet', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Suryapet', NULL),
(903, 2, 31, 63, 'Tandur', 'Tandur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Vikarabad ', NULL),
(904, 2, 31, 364, 'Uppal Kalan', 'Uppal Kalan', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Medchal-Malkajgiri', NULL),
(905, 2, 31, 57, 'Wanaparthy', 'Wanaparthy', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Wanaparthy', NULL),
(906, 2, 31, 55, 'Warangal', 'Warangal', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Warangal', NULL),
(907, 2, 31, 0, 'iryalaguda', 'iryalaguda', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL),
(908, 2, 32, 45, 'Agartala', 'Agartala', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'West Tripura', NULL),
(909, 2, 32, 45, 'Badharghat', 'Badharghat', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'West Tripura', NULL),
(910, 2, 32, 121, 'Santirbazar', 'Santirbazar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'South Tripura', NULL),
(911, 2, 32, 45, 'Teliamura', 'Teliamura', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'West Tripura', NULL),
(912, 2, 33, 8, 'Agra', 'Agra', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Agra', NULL),
(913, 2, 33, 8, 'Agra Cantonment', 'Agra Cantonment', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Agra', NULL),
(914, 2, 33, 14, 'Aligarh', 'Aligarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Aligarh', NULL),
(915, 2, 33, 0, 'Allahabad', 'Allahabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Prayagraj (Allahabad)', NULL),
(916, 2, 33, 23, 'Amroha', 'Amroha', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Amroha', NULL),
(917, 2, 33, 143, 'Aonla', 'Aonla', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bareilly', NULL),
(918, 2, 33, 14, 'Atrauli', 'Atrauli', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Aligarh', NULL),
(919, 2, 33, 30, 'Auraiya', 'Auraiya', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Auraiya', NULL),
(920, 2, 33, 423, 'Ayodhya', 'Ayodhya', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Faizabad', NULL),
(921, 2, 33, 34, 'Azamgarh', 'Azamgarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Azamgarh', NULL),
(922, 2, 33, 143, 'Baheri', 'Baheri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bareilly', NULL),
(923, 2, 33, 44, 'Bahraich', 'Bahraich', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bahraich', NULL),
(924, 2, 33, 58, 'Ballia', 'Ballia', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ballia', NULL),
(925, 2, 33, 105, 'Balrampur', 'Balrampur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Balrampur', NULL),
(926, 2, 33, 108, 'Banda', 'Banda', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Banda', NULL),
(927, 2, 33, 138, 'Barabanki', 'Barabanki', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Barabanki', NULL),
(928, 2, 33, 42, 'Baraut', 'Baraut', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Baghpat', NULL),
(929, 2, 33, 143, 'Bareilly', 'Bareilly', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bareilly', NULL),
(930, 2, 33, 161, 'Basti', 'Basti', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Basti', NULL),
(931, 2, 33, 458, 'Behta Hazipur', 'Behta Hazipur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ghaziabad', NULL),
(932, 2, 33, 0, 'Bela Pratapgarh', 'Bela Pratapgarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pratapgarh', NULL),
(933, 2, 33, 174, 'Bhadohi', 'Bhadohi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bhadohi', NULL),
(934, 2, 33, 210, 'Bijnor', 'Bijnor', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bijnor', NULL),
(935, 2, 33, 0, 'Bisalpur', 'Bisalpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pilibhit', NULL),
(936, 2, 33, 131, 'Biswan', 'Biswan', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sitapur', NULL),
(937, 2, 33, 219, 'Budaun', 'Budaun', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Budaun', NULL),
(938, 2, 33, 220, 'Bulandshahr', 'Bulandshahr', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bulandshahr', NULL),
(939, 2, 33, 182, 'Chandausi', 'Chandausi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sambhal', NULL),
(940, 2, 33, 229, 'Chandpur', 'Chandpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Chandpur', NULL),
(941, 2, 33, 480, 'Chhibramau', 'Chhibramau', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kannauj', NULL),
(942, 2, 33, 254, 'Dadri', 'Dadri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dadri', NULL),
(943, 2, 33, 194, 'Deoband', 'Deoband', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Saharanpur', NULL),
(944, 2, 33, 267, 'Deoria', 'Deoria', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Deoria', NULL),
(945, 2, 33, 210, 'Dhampur', 'Dhampur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bijnor', NULL),
(946, 2, 33, 419, 'Etah', 'Etah', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Etah', NULL),
(947, 2, 33, 421, 'Etawah', 'Etawah', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Etawah', NULL),
(948, 2, 33, 33, 'Faizabad', 'Faizabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ayodhya', NULL),
(949, 2, 33, 427, 'Faridpur', 'Faridpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Faridpur', NULL),
(950, 2, 33, 429, 'Farrukhabad', 'Farrukhabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Farrukhabad', NULL),
(951, 2, 33, 435, 'Fatehpur', 'Fatehpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Fatehpur', NULL),
(952, 2, 33, 439, 'Firozabad', 'Firozabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Firozabad', NULL),
(953, 2, 33, 73, 'Gangaghat', 'Gangaghat', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Unnao', NULL),
(954, 2, 33, 194, 'Gangoh', 'Gangoh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Saharanpur ', NULL),
(955, 2, 33, 458, 'Ghaziabad', 'Ghaziabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ghaziabad', NULL),
(956, 2, 33, 460, 'Ghazipur', 'Ghazipur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ghazipur', NULL),
(957, 2, 33, 395, 'Gola Gokarannath', 'Gola Gokarannath', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Lakhimpur Kheri', NULL),
(958, 2, 33, 470, 'Gonda', 'Gonda', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Gonda', NULL),
(959, 2, 33, 476, 'Gorakhpur', 'Gorakhpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Gorakhpur', NULL),
(960, 2, 33, 497, 'Hapur', 'Hapur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hapur', NULL),
(961, 2, 33, 500, 'Hardoi', 'Hardoi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hardoi', NULL),
(962, 2, 33, 23, 'Hasanpur', 'Hasanpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Amroha ', NULL),
(963, 2, 33, 506, 'Hathras', 'Hathras', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hathras', NULL),
(964, 2, 33, 220, 'Jahangirabad', 'Jahangirabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bulandshahr ', NULL),
(965, 2, 33, 541, 'Jalaun', 'Jalaun', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jalaun', NULL),
(966, 2, 33, 525, 'Jaunpur', 'Jaunpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jaunpur', NULL),
(967, 2, 33, 520, 'Jhansi', 'Jhansi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jhansi', NULL),
(968, 2, 33, 156, 'Kairana', 'Kairana', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Shamli', NULL),
(969, 2, 33, 480, 'Kannauj', 'Kannauj', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kannauj', NULL),
(970, 2, 33, 477, 'Kanpur', 'Kanpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kanpur Nagar', NULL),
(971, 2, 33, 477, 'Kanpur Cantonment', 'Kanpur Cantonment', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kanpur Nagar', NULL),
(972, 2, 33, 243, 'Karwi', 'Karwi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Chitrakoot', NULL),
(973, 2, 33, 455, 'Kasganj', 'Kasganj', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kasganj', NULL),
(974, 2, 33, 351, 'Khatauli', 'Khatauli', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Muzaffarnagar', NULL),
(975, 2, 33, 220, 'Khurja', 'Khurja', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bulandshahr', NULL),
(976, 2, 33, 210, 'Kiratpur', 'Kiratpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bijnor', NULL),
(977, 2, 33, 541, 'Konch', 'Konch', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jalaun', NULL),
(978, 2, 33, 367, 'Kosi Kalan', 'Kosi Kalan', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mathura', NULL),
(979, 2, 33, 131, 'Laharpur', 'Laharpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sitapur', NULL),
(980, 2, 33, 396, 'Lakhimpur', 'Lakhimpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Lakhimpur', NULL),
(981, 2, 33, 392, 'Lalitpur', 'Lalitpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Lalitpur', NULL),
(982, 2, 33, 458, 'Loni', 'Loni', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ghaziabad', NULL),
(983, 2, 33, 389, 'Lucknow', 'Lucknow', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Lucknow', NULL),
(984, 2, 33, 389, 'Lucknow Cantonment', 'Lucknow Cantonment', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Lucknow', NULL),
(985, 2, 33, 379, 'Mahoba', 'Mahoba', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mahoba', NULL),
(986, 2, 33, 378, 'Mainpuri', 'Mainpuri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mainpuri', NULL),
(987, 2, 33, 367, 'Mathura', 'Mathura', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mathura', NULL),
(988, 2, 33, 366, 'Maunath Bhanjan', 'Maunath Bhanjan', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mau', NULL),
(989, 2, 33, 520, 'Mauranipur', 'Mauranipur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jhansi', NULL),
(990, 2, 33, 363, 'Mawana', 'Mawana', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Meerut', NULL),
(991, 2, 33, 363, 'Meerut', 'Meerut', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Meerut', NULL),
(992, 2, 33, 363, 'Meerut Cantonment', 'Meerut Cantonment', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Meerut', NULL),
(993, 2, 33, 361, 'Mirzapur', 'Mirzapur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mirzapur', NULL),
(994, 2, 33, 361, 'Mirzapur cum Vindhyachal', 'Mirzapur cum Vindhyachal', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mirzapur', NULL),
(995, 2, 33, 458, 'Modinagar', 'Modinagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ghaziabad', NULL),
(996, 2, 33, 358, 'Moradabad', 'Moradabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Moradabad', NULL),
(997, 2, 33, 34, 'Mubarakpur', 'Mubarakpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Azamgarh', NULL),
(998, 2, 33, 228, 'Mughalsarai', 'Mughalsarai', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Chandauli', NULL),
(999, 2, 33, 458, 'Muradnagar', 'Muradnagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ghaziabad', NULL),
(1000, 2, 33, 351, 'Muzaffarnagar', 'Muzaffarnagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Muzaffarnagar', NULL),
(1001, 2, 33, 210, 'Nagina', 'Nagina', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bijnor', NULL),
(1002, 2, 33, 210, 'Najibabad', 'Najibabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bijnor', NULL),
(1003, 2, 33, 143, 'Nawabganj', 'Nawabganj', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bareilly', NULL),
(1004, 2, 33, 210, 'Nehtaur', 'Nehtaur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bijnor', NULL),
(1005, 2, 33, 452, 'Noida', 'Noida', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Gautam Buddh Nagar', NULL),
(1006, 2, 33, 126, 'Obra', 'Obra', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sonbhadra', NULL),
(1007, 2, 33, 541, 'Orai', 'Orai', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jalaun', NULL),
(1008, 2, 33, 541, 'Orai Jalaun District', 'Orai Jalaun District', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jalaun', NULL),
(1009, 2, 33, 398, 'Padrauna', 'Padrauna', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kushinagar', NULL),
(1010, 2, 33, 0, 'Pilibhit', 'Pilibhit', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pilibhit', NULL),
(1011, 2, 33, 497, 'Pilkhuwa', 'Pilkhuwa', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hapur', NULL),
(1012, 2, 33, 310, 'Rae Bareli', 'Rae Bareli', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Raebareli', NULL),
(1013, 2, 33, 295, 'Rampur', 'Rampur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Rampur', NULL),
(1014, 2, 33, 493, 'Rath', 'Rath', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hamirpur', NULL),
(1015, 2, 33, 126, 'Renukoot', 'Renukoot', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sonbhadra', NULL),
(1016, 2, 33, 194, 'Saharanpur', 'Saharanpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Saharanpur', NULL),
(1017, 2, 33, 219, 'Sahaswan', 'Sahaswan', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Budaun', NULL),
(1018, 2, 33, 182, 'Sambhal', 'Sambhal', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sambhal', NULL),
(1019, 2, 33, 500, 'Sandila', 'Sandila', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hardoi', NULL),
(1020, 2, 33, 363, 'Sardhana', 'Sardhana', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Meerut', NULL),
(1021, 2, 33, 210, 'Seohara', 'Seohara', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bijnor', NULL),
(1022, 2, 33, 169, 'Shahabad', 'Shahabad', '0', '1', '2020-05-02 20:38:39', '2020-05-02 20:38:39', 'Shahabad', NULL),
(1023, 2, 33, 160, 'Shahjahanpur', 'Shahjahanpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Shahjahanpur', NULL),
(1024, 2, 33, 156, 'Shamli', 'Shamli', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Shamli', NULL),
(1025, 2, 33, 210, 'Sherkot', 'Sherkot', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bijnor', NULL),
(1026, 2, 33, 439, 'Shikohabad', 'Shikohabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Firozabad', NULL),
(1027, 2, 33, 220, 'Sikandrabad', 'Sikandrabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bulandshahr', NULL),
(1028, 2, 33, 131, 'Sitapur', 'Sitapur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sitapur', NULL),
(1029, 2, 33, 116, 'Sultanpur', 'Sultanpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sultanpur', NULL),
(1030, 2, 33, 19, 'Tanda', 'Tanda', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Ambedkar Nagar', NULL),
(1031, 2, 33, 160, 'Tilhar', 'Tilhar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Shahjahanpur', NULL),
(1032, 2, 33, 439, 'Tundla', 'Tundla', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Firozabad', NULL),
(1033, 2, 33, 35, 'Ujhani', 'Ujhani', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Badaun', NULL),
(1034, 2, 33, 73, 'Unnao', 'Unnao', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Unnao', NULL),
(1035, 2, 33, 66, 'Varanasi', 'Varanasi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Varanasi', NULL),
(1036, 2, 33, 367, 'Vrindavan', 'Vrindavan', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Mathura', NULL),
(1037, 2, 34, 264, 'Dehradun', 'Dehradun', '0', '1', '2020-05-02 20:29:34', '2020-05-02 20:29:34', 'Dehradun', NULL),
(1038, 2, 34, 342, 'Haldwani', 'Haldwani', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nainital', NULL),
(1039, 2, 34, 502, 'Haridwar', 'Haridwar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Haridwar', NULL),
(1040, 2, 34, 78, 'Kashipur', 'Kashipur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Udham Singh Nagar', NULL),
(1041, 2, 34, 0, 'Pithoragarh', 'Pithoragarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pithoragarh', NULL),
(1042, 2, 34, 301, 'Ramnagar', 'Ramnagar', '0', '1', '2020-05-02 20:32:08', '2020-05-02 20:32:08', 'Ramanagara', NULL),
(1043, 2, 34, 264, 'Rishikesh', 'Rishikesh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dehradun', NULL),
(1044, 2, 34, 502, 'Roorkee', 'Roorkee', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Haridwar', NULL),
(1045, 2, 34, 78, 'Rudrapur', 'Rudrapur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Udham Singh Nagar', NULL),
(1046, 2, 35, 15, 'Alipurduar', 'Alipurduar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Alipurduar', NULL),
(1047, 2, 35, 515, 'Arambagh', 'Arambagh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hooghly', NULL),
(1048, 2, 35, 315, 'Asansol MC', 'Asansol MC', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Paschim Bardhaman', NULL),
(1049, 2, 35, 328, 'Ashokenagar-Kalyangarh', 'Ashokenagar-Kalyangarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1050, 2, 35, 35, 'Baduna', 'Baduna', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Badaun', NULL),
(1051, 2, 35, 328, 'Baduria', 'Baduria', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1052, 2, 35, 352, 'Baharampore', 'Baharampore', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Murshidabad', NULL),
(1053, 2, 35, 515, 'Baidyabati', 'Baidyabati', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hooghly', NULL),
(1054, 2, 35, 526, 'Bally', 'Bally', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Howrah', NULL),
(1055, 2, 35, 255, 'Balurghat', 'Balurghat', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dakshin Dinajpur', NULL),
(1056, 2, 35, 328, 'Bangaon', 'Bangaon', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1057, 2, 35, 526, 'Bankra', 'Bankra', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Howrah', NULL),
(1058, 2, 35, 515, 'Bansberia', 'Bansberia', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hooghly', NULL),
(1059, 2, 35, 328, 'Baranagar', 'Baranagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1060, 2, 35, 328, 'Barasat', 'Barasat', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1061, 2, 35, 0, 'Bardhaman', 'Bardhaman', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Purba Bardhaman', NULL),
(1062, 2, 35, 328, 'Barrackpore', 'Barrackpore', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1063, 2, 35, 123, 'Baruipur', 'Baruipur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'South 24 Parganas', NULL),
(1064, 2, 35, 328, 'Basirhat', 'Basirhat', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1065, 2, 35, 352, 'Beldanga', 'Beldanga', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Murshidabad', NULL),
(1066, 2, 35, 515, 'Bhadreswar', 'Bhadreswar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hooghly', NULL),
(1067, 2, 35, 328, 'Bhatpara', 'Bhatpara', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1068, 2, 35, 328, 'Bidhannagar', 'Bidhannagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1069, 2, 35, 348, 'Birnagar', 'Birnagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nadia', NULL),
(1070, 2, 35, 215, 'Bishnupur', 'Bishnupur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bishnupur', NULL),
(1071, 2, 35, 214, 'Bolpur', 'Bolpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Birbhum', NULL),
(1072, 2, 35, 123, 'Budge-Budge', 'Budge-Budge', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'South 24 Parganas', NULL),
(1073, 2, 35, 348, 'Chakdah', 'Chakdah', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nadia', NULL),
(1074, 2, 35, 515, 'Champdani', 'Champdani', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hooghly', NULL),
(1075, 2, 35, 515, 'Chandannagar M.C.', 'Chandannagar M.C.', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hooghly', NULL),
(1076, 2, 35, 0, 'Chandrokona', 'Chandrokona', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Paschim Medinipur', NULL),
(1077, 2, 35, 315, 'Chittaranjan', 'Chittaranjan', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Paschim Bardhaman', NULL),
(1078, 2, 35, 314, 'Contai', 'Contai', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Purba Medinipur', NULL),
(1079, 2, 35, 249, 'Cooch Behar', 'Cooch Behar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Cooch Behar', NULL),
(1081, 2, 35, 141, 'Dainhata', 'Dainhata', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bardhaman', NULL),
(1082, 2, 35, 72, 'Dalkhola', 'Dalkhola', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Uttar Dinajpur', NULL),
(1083, 2, 35, 515, 'Dankuni', 'Dankuni', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hooghly', NULL),
(1084, 2, 35, 260, 'Darjeeling', 'Darjeeling', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Darjeeling', NULL),
(1085, 2, 35, 352, 'Dhulian', 'Dhulian', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Murshidabad', NULL),
(1086, 2, 35, 534, 'Dhupguri', 'Dhupguri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jalpaiguri', NULL),
(1087, 2, 35, 123, 'Diamond Harbour', 'Diamond Harbour', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'South 24 Parganas', NULL),
(1088, 2, 35, 249, 'Dmhata', 'Dmhata', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Cooch Behar', NULL),
(1089, 2, 35, 214, 'Dubrajpur', 'Dubrajpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Birbhum', NULL),
(1090, 2, 35, 328, 'Dum Dum', 'Dum Dum', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1091, 2, 35, 315, 'Durgapur', 'Durgapur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Paschim Bardhaman', NULL),
(1092, 2, 35, 141, 'Durgapur MC', 'Durgapur MC', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bardhaman', NULL),
(1093, 2, 35, 314, 'Egra', 'Egra', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Purba Medinipur', NULL),
(1094, 2, 35, 0, 'English Bazar', 'English Bazar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Maldah', NULL),
(1095, 2, 35, 255, 'Gangarampur', 'Gangarampur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dakshin Dinajpur', NULL),
(1096, 2, 35, 328, 'Garulia', 'Garulia', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1097, 2, 35, 348, 'Gayeshpur', 'Gayeshpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nadia', NULL),
(1098, 2, 35, 0, 'Ghatal', 'Ghatal', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Paschim Medinipur', NULL),
(1099, 2, 35, 328, 'Gobardanga', 'Gobardanga', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1100, 2, 35, 0, 'Gushkara', 'Gushkara', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Purba Bardhaman', NULL),
(1101, 2, 35, 328, 'Habra', 'Habra', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1102, 2, 35, 314, 'Haldia', 'Haldia', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Purba Medinipur', NULL),
(1103, 2, 35, 249, 'Haldibari', 'Haldibari', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Cooch Behar', NULL),
(1104, 2, 35, 328, 'Halisahar', 'Halisahar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1105, 2, 35, 526, 'Haora', 'Haora', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Howrah', NULL),
(1106, 2, 35, 515, 'Hugli-Chinsurah', 'Hugli-Chinsurah', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hooghly', NULL),
(1107, 2, 35, 72, 'Islampur', 'Islampur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Uttar Dinajpur', NULL),
(1108, 2, 35, 123, 'Jainagar-Mazilpore', 'Jainagar-Mazilpore', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'South 24 Parganas', NULL),
(1109, 2, 35, 534, 'Jalpaiguri', 'Jalpaiguri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jalpaiguri', NULL),
(1110, 2, 35, 534, 'Jalpaiguri', 'Jalpaiguri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jalpaiguri', NULL),
(1111, 2, 35, 315, 'Jamuria', 'Jamuria', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Paschim Bardhaman', NULL),
(1112, 2, 35, 352, 'Jangipur', 'Jangipur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Murshidabad', NULL),
(1113, 2, 35, 311, 'Jhaldah', 'Jhaldah', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Purulia', NULL),
(1114, 2, 35, 518, 'Jhargram', 'Jhargram', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jhargram', NULL),
(1115, 2, 35, 352, 'Jiaganj Azimganj', 'Jiaganj Azimganj', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Murshidabad ', NULL),
(1116, 2, 35, 72, 'Kaliaganj', 'Kaliaganj', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Uttar Dinajpur', NULL),
(1117, 2, 35, 490, 'Kalimpong', 'Kalimpong', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kalimpong', NULL),
(1118, 2, 35, 0, 'Kalna', 'Kalna', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Purba Bardhaman', NULL),
(1119, 2, 35, 348, 'Kalyani', 'Kalyani', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nadia', NULL),
(1120, 2, 35, 328, 'Kamarhati', 'Kamarhati', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1121, 2, 35, 328, 'Kanchrapara', 'Kanchrapara', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1122, 2, 35, 352, 'Kandi', 'Kandi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Murshidabad', NULL),
(1123, 2, 35, 0, 'Katwa', 'Katwa', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Purba Bardhaman', NULL),
(1124, 2, 35, 0, 'Kharagpur', 'Kharagpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Paschim Medinipur', NULL),
(1125, 2, 35, 190, 'Kharar', 'Kharar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Sahibzada Ajit Singh Nagar', NULL),
(1126, 2, 35, 328, 'Khardaha', 'Khardaha', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1127, 2, 35, 328, 'Khardaha Haora District', 'Khardaha Haora District', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1128, 2, 35, 0, 'Khirpai', 'Khirpai', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Paschim Medinipur', NULL),
(1129, 2, 35, 249, 'Koch Bihar', 'Koch Bihar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Cooch Behar', NULL),
(1130, 2, 35, 422, 'Kolkata', 'Kolkata', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Kolkata', NULL),
(1131, 2, 35, 515, 'Konnagar', 'Konnagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hooghly', NULL),
(1132, 2, 35, 348, 'Krishnanagar', 'Krishnanagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nadia', NULL),
(1133, 2, 35, 315, 'Kulti', 'Kulti', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Paschim Bardhaman', NULL),
(1134, 2, 35, 260, 'Kurseong', 'Kurseong', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Darjeeling', NULL),
(1135, 2, 35, 328, 'Madhyamgram', 'Madhyamgram', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1136, 2, 35, 123, 'Maheshtala', 'Maheshtala', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'South 24 Parganas', NULL),
(1137, 2, 35, 534, 'Mal', 'Mal', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Jalpaiguri', NULL),
(1138, 2, 35, 375, 'Malda', 'Malda', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Malda', NULL),
(1139, 2, 35, 249, 'Mathabhanga', 'Mathabhanga', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Cooch Behar', NULL),
(1140, 2, 35, 0, 'Medinipur', 'Medinipur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Paschim Medinipur', NULL),
(1141, 2, 35, 249, 'Mekliganj', 'Mekliganj', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Cooch Behar', NULL),
(1142, 2, 35, 0, 'Memari', 'Memari', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Purba Bardhaman', NULL),
(1143, 2, 35, 260, 'Mirik N.A.A.', 'Mirik N.A.A.', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Darjeeling', NULL),
(1144, 2, 35, 352, 'Murshidabad', 'Murshidabad', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Murshidabad', NULL),
(1145, 2, 35, 348, 'Nabadwip', 'Nabadwip', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nadia', NULL),
(1146, 2, 35, 328, 'Naihati', 'Naihati', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1147, 2, 35, 214, 'Nalhati', 'Nalhati', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Birbhum', NULL),
(1148, 2, 35, 328, 'New Barrackpore', 'New Barrackpore', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1149, 2, 35, 328, 'New Town', 'New Town', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1150, 2, 35, 328, 'North Barrackpore', 'North Barrackpore', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1151, 2, 35, 328, 'North Dum Dum', 'North Dum Dum', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1152, 2, 35, 375, 'Old Malda', 'Old Malda', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Malda', NULL),
(1153, 2, 35, 328, 'Panihati', 'Panihati', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1154, 2, 35, 314, 'Panskura', 'Panskura', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Purba Medinipur', NULL),
(1155, 2, 35, 348, 'Phulia', 'Phulia', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nadia', NULL),
(1156, 2, 35, 123, 'Pujali', 'Pujali', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'South 24 Parganas', NULL),
(1157, 2, 35, 0, 'Puruliya', 'Puruliya', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Puruliya', NULL),
(1158, 2, 35, 311, 'Raghunathpu', 'Raghunathpu', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Purulia', NULL),
(1159, 2, 35, 72, 'Raiganj', 'Raiganj', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Uttar Dinajpur', NULL),
(1160, 2, 35, 328, 'Rajarhat-Gopalpore', 'Rajarhat-Gopalpore', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1161, 2, 35, 123, 'Rajpur Sonarpur', 'Rajpur Sonarpur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'South 24 Parganas', NULL),
(1162, 2, 35, 0, 'Ramjibanpore', 'Ramjibanpore', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Paschim Medinipur', NULL),
(1163, 2, 35, 214, 'Rampurhat', 'Rampurhat', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Birbhum', NULL),
(1164, 2, 35, 348, 'Ranaghat', 'Ranaghat', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nadia', NULL),
(1165, 2, 35, 315, 'Raniganj', 'Raniganj', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Paschim Bardhaman', NULL),
(1166, 2, 35, 515, 'Rishra', 'Rishra', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hooghly', NULL),
(1167, 2, 35, 214, 'Sainthia', 'Sainthia', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Birbhum ', NULL),
(1168, 2, 35, 348, 'Santipur', 'Santipur', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nadia', NULL),
(1169, 2, 35, 515, 'Serampore', 'Serampore', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hooghly', NULL),
(1170, 2, 35, 260, 'Siliguri', 'Siliguri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Darjeeling', NULL),
(1171, 2, 35, 118, 'Sonamukhi', 'Sonamukhi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bankura', NULL),
(1172, 2, 35, 328, 'South Dum Dum', 'South Dum Dum', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1173, 2, 35, 214, 'Suri', 'Suri', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Birbhum', NULL),
(1174, 2, 35, 348, 'Taherpur N.A.A', 'Taherpur N.A.A', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nadia', NULL),
(1175, 2, 35, 328, 'Taki', 'Taki', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1176, 2, 35, 314, 'Tamluk', 'Tamluk', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Purba Medinipur', NULL),
(1177, 2, 35, 515, 'Tarakeswar', 'Tarakeswar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hooghly', NULL),
(1178, 2, 35, 328, 'Titagarh', 'Titagarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'North 24 Parganas', NULL),
(1179, 2, 35, 249, 'Tufanganj', 'Tufanganj', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Cooch Behar', NULL),
(1180, 2, 35, 515, 'Uluberia', 'Uluberia', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hooghly', NULL),
(1181, 2, 35, 515, 'Uttarpara Kotrung', 'Uttarpara Kotrung', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Hooghly', NULL),
(1182, 2, 36, 16, 'Almora', 'Almora', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Almora', NULL),
(1183, 2, 36, 40, 'Bageshwar', 'Bageshwar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Bageshwar', NULL),
(1184, 2, 36, 227, 'Champawat', 'Champawat', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Champawat', NULL),
(1185, 2, 36, 342, 'Nainital', 'Nainital', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Nainital', NULL),
(1186, 2, 36, 0, 'Pithoragarh', 'Pithoragarh', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pithoragarh', NULL),
(1187, 2, 36, 78, 'Udham Singh Nagar', 'Udham Singh Nagar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Udham Singh Nagar', NULL),
(1188, 2, 36, 264, 'Dehradun', 'Dehradun', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Dehradun', NULL),
(1189, 2, 36, 502, 'Haridwar', 'Haridwar', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Haridwar', NULL),
(1190, 2, 36, 101, 'Tehri Garhwal ', 'Tehri Garhwal ', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Tehri Garhwal', NULL),
(1191, 2, 36, 70, 'Uttarkashi', 'Uttarkashi', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Uttarkashi', NULL),
(1192, 2, 36, 226, 'Chamoli', 'Chamoli', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Chamoli', NULL),
(1193, 2, 36, 0, 'Pauri Garhwal', 'Pauri Garhwal', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pauri Garhwal', NULL),
(1194, 2, 36, 274, 'Rudraprayag', 'Rudraprayag', '0', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Rudraprayag', NULL),
(1195, 196, 101, 0, 'Singapore', 'Singapore', '0', '1', '2018-04-14 13:28:34', '2018-04-14 13:28:34', 'Singapore', NULL),
(1196, 132, 38, 0, 'Kuala Lumpur', 'Kuala Lumpur', '0', '1', '2018-04-14 13:28:34', '2018-04-14 13:28:34', 'Malaysiya', NULL),
(1197, 132, 102, 0, 'Penang', 'Penang', '0', '1', '2018-04-14 13:28:34', '2018-04-14 13:28:34', 'Malaysiya', NULL),
(1198, 132, 37, 0, 'Selangor', 'Selangor', '0', '1', '2018-04-14 13:28:34', '2018-04-14 13:28:34', 'Malaysiya', NULL),
(1199, 132, 37, 0, 'Shah Alam', 'Shah Alam', '0', '1', '2018-04-14 13:28:34', '2018-04-14 13:28:34', 'Malaysiya', NULL),
(1200, 1, 17, 531, 'Munnar', 'Munnar', '0', '1', '2020-05-03 08:40:17', '2020-05-03 08:40:17', 'Idukki', NULL),
(1201, 1, 17, 531, 'Marayur', 'MunnarMarayur', '0', '1', '2020-05-03 08:40:33', '2020-05-03 08:40:33', 'Idukki', NULL),
(1202, 2, 30, 87, 'Palladam', 'Palladam', '0', '1', '2020-04-27 09:41:00', '2020-04-27 09:41:00', 'Tirupur', NULL),
(1203, 2, 30, 291, 'Kodaikannal', 'Kodaikannal', '0', '1', '2018-10-18 15:31:01', '2018-10-19 15:31:01', 'Dindigul', NULL),
(1204, 2, 30, 291, 'Palani', 'Palani', '0', '1', '2018-10-18 15:31:01', '2020-04-03 20:55:42', 'Dindigul', NULL),
(1205, 1, 30, 475, 'Kanyakumari', 'Kanyakumari', '0', '1', '2020-04-27 11:33:09', '2020-04-27 11:33:09', 'Kanyakumari', NULL),
(1207, 0, 0, 0, 'testa', '', '0', '0', '2020-04-03 20:57:27', '2020-04-03 20:57:35', NULL, NULL),
(1208, 0, 0, 0, 'test1', '', '0', '0', '2020-04-03 20:57:54', '2020-04-03 20:59:30', NULL, NULL),
(1209, 0, 0, 0, 'test', '', '0', '0', '2020-04-03 21:00:39', '2020-04-03 21:02:07', NULL, NULL),
(1210, 0, 246, 0, 'testa', '', '0', '0', '2020-04-03 21:05:47', '2020-04-03 21:06:07', NULL, NULL),
(1212, 0, 246, 0, 'tests', '', '0', '0', '2020-04-04 07:11:51', '2020-04-04 07:11:59', NULL, NULL),
(1213, 0, 246, 0, 'tests', '', '0', '0', '2020-04-04 07:13:36', '2020-04-04 07:13:48', NULL, NULL),
(1214, 0, 246, 0, 'testsa', '', '0', '0', '2020-04-04 07:17:04', '2020-04-04 07:17:27', NULL, NULL),
(1215, 0, 246, 0, 'testa', '', '0', '0', '2020-04-04 07:23:28', '2020-04-04 07:23:38', NULL, NULL),
(1216, 0, 246, 0, 'testa', '', '0', '0', '2020-04-04 07:27:53', '2020-04-04 07:28:02', NULL, NULL),
(1217, 0, 246, 0, 'testa', '', '0', '0', '2020-04-04 07:30:48', '2020-04-04 07:49:37', NULL, NULL),
(1218, 0, 246, 0, 'testas', '', '0', '0', '2020-04-04 07:55:16', '2020-04-04 07:58:44', NULL, NULL),
(1219, 0, 246, 0, 'testa', '', '0', '0', '2020-04-04 07:55:25', '2020-04-04 07:55:25', NULL, NULL),
(1220, 0, 246, 0, 'testa', '', '0', '0', '2020-04-04 07:55:53', '2020-04-04 07:55:53', NULL, NULL),
(1221, 0, 246, 0, 'testssss', '', '0', '0', '2020-04-04 07:57:10', '2020-04-04 07:57:10', NULL, NULL),
(1222, 0, 246, 0, 'tests', '', '0', '0', '2020-04-04 08:16:23', '2020-04-04 08:20:14', NULL, NULL),
(1224, 0, 106, 0, 'testttt', '', '0', '0', '2020-04-04 08:39:11', '2020-04-04 08:39:11', NULL, NULL),
(1225, 2, 17, 549, 'Pathanamthitta', '', '0', '0', '2020-04-04 08:39:11', '2020-04-04 08:39:11', 'Pathanamthitta', NULL),
(1226, 2, 9, 122, 'Cuncoilm Salcet Goa', 'Cuncoilm Salcet Goa', '0', '1', '2020-05-14 10:19:46', '2020-05-14 10:19:46', NULL, NULL),
(1228, 0, 30, 95, 'Ettaiyapuram', '', '0', '0', '2020-05-14 16:25:19', '2020-05-14 16:25:19', NULL, NULL),
(1229, 0, 30, 95, 'Ottapidaram', '', '0', '0', '2020-05-14 16:29:54', '2020-05-14 16:29:54', NULL, NULL),
(1230, 0, 30, 95, 'Vilathikulam', '', '0', '0', '2020-05-14 16:30:13', '2020-05-14 16:30:13', NULL, NULL),
(1231, 0, 30, 95, 'Kayathar', '', '0', '0', '2020-05-14 16:30:39', '2020-05-14 16:30:39', NULL, NULL),
(1232, 0, 30, 95, 'Tiruchendur', '', '0', '0', '2020-05-14 16:30:57', '2020-05-14 16:30:57', NULL, NULL),
(1233, 0, 30, 95, 'Sathankulam', '', '0', '0', '2020-05-14 16:31:23', '2020-05-14 16:31:23', NULL, NULL),
(1234, 0, 30, 95, 'Eral', '', '0', '0', '2020-05-14 16:31:41', '2020-05-14 16:31:41', NULL, NULL),
(1235, 0, 30, 95, 'Tiruvaikuntam', '', '0', '0', '2020-05-14 16:34:01', '2020-05-14 16:34:01', NULL, NULL),
(1236, 0, 30, 95, 'Alwarthirunagiri', '', '0', '0', '2020-05-14 16:35:09', '2020-05-14 16:35:09', NULL, NULL),
(1237, 0, 30, 95, 'Arumuganeri', '', '0', '0', '2020-05-14 16:35:38', '2020-05-14 16:35:38', NULL, NULL),
(1238, 0, 30, 95, 'Kadalaiyur', '', '0', '0', '2020-05-14 16:36:07', '2020-05-14 16:36:07', NULL, NULL),
(1239, 0, 30, 95, 'Kadambur', '', '0', '0', '2020-05-14 16:36:27', '2020-05-14 16:36:27', NULL, NULL),
(1240, 0, 30, 95, 'Kalugumalai', '', '0', '0', '2020-05-14 16:36:41', '2020-05-14 16:36:41', NULL, NULL),
(1241, 0, 30, 95, 'Kayalpatnam', '', '0', '0', '2020-05-14 16:37:10', '2020-05-14 16:37:10', NULL, NULL),
(1242, 0, 30, 95, 'Maniyachchi', '', '0', '0', '2020-05-14 16:37:29', '2020-05-14 16:37:29', NULL, NULL),
(1243, 0, 30, 95, 'Muttayyapuram', '', '0', '0', '2020-05-14 16:37:48', '2020-05-14 16:37:48', NULL, NULL),
(1244, 0, 30, 95, 'Nazareth', '', '0', '0', '2020-05-14 16:38:08', '2020-05-14 16:38:08', NULL, NULL),
(1245, 0, 30, 95, 'Pasuvanthanai', '', '0', '0', '2020-05-14 16:38:28', '2020-05-14 16:38:28', NULL, NULL),
(1246, 0, 30, 95, 'Puthiamputhur', '', '0', '0', '2020-05-14 16:38:50', '2020-05-14 16:38:50', NULL, NULL),
(1247, 0, 30, 95, 'Udangudi', '', '0', '0', '2020-05-14 16:39:24', '2020-05-14 16:39:24', NULL, NULL),
(1248, 0, 30, 61, 'Alangulam', '', '0', '0', '2020-05-14 16:42:06', '2020-05-14 16:42:06', NULL, NULL),
(1249, 0, 30, 61, 'Chettiarpatti', '', '0', '0', '2020-05-14 16:42:26', '2020-05-14 16:42:26', NULL, NULL),
(1250, 0, 30, 61, 'Devathanam', '', '0', '0', '2020-05-14 16:42:43', '2020-05-14 16:42:43', NULL, NULL),
(1251, 0, 30, 61, 'Dhalavaipuram', '', '0', '0', '2020-05-14 16:43:00', '2020-05-14 16:43:00', NULL, NULL),
(1252, 0, 30, 61, 'Dhalavoipuram', '', '0', '0', '2020-05-14 16:43:17', '2020-05-14 16:43:17', NULL, NULL),
(1253, 0, 30, 61, 'Elayirampannai', '', '0', '0', '2020-05-14 16:43:32', '2020-05-14 16:43:32', NULL, NULL),
(1254, 0, 30, 61, 'Iluppaiyur', '', '0', '0', '2020-05-14 16:43:47', '2020-05-14 16:43:47', NULL, NULL),
(1255, 0, 30, 61, 'Kansapuram', '', '0', '0', '2020-05-14 16:44:03', '2020-05-14 16:44:03', NULL, NULL),
(1256, 0, 30, 61, 'Mallankinaru', '', '0', '0', '2020-05-14 16:44:25', '2020-05-14 16:44:25', NULL, NULL),
(1257, 0, 30, 61, 'Mamsapuram', '', '0', '0', '2020-05-14 16:44:48', '2020-05-14 16:44:48', NULL, NULL),
(1258, 0, 30, 61, 'Sattur', '', '0', '0', '2020-05-14 16:45:13', '2020-05-14 16:45:13', NULL, NULL),
(1259, 0, 30, 61, 'Sithurajapuram', '', '0', '0', '2020-05-14 16:45:29', '2020-05-14 16:45:29', NULL, NULL),
(1260, 0, 30, 61, 'Thayilpatti', '', '0', '0', '2020-05-14 16:45:49', '2020-05-14 16:45:49', NULL, NULL),
(1261, 0, 30, 61, 'Thiruthangal', '', '0', '0', '2020-05-14 16:46:02', '2020-05-14 16:46:02', NULL, NULL),
(1262, 0, 30, 234, 'Adambakkam', '', '0', '0', '2020-05-14 16:49:46', '2020-05-14 16:49:46', NULL, NULL),
(1263, 0, 30, 234, 'Adyar', '', '0', '0', '2020-05-14 16:50:02', '2020-05-14 16:50:02', NULL, NULL),
(1265, 0, 30, 234, 'Anna Nagar', '', '0', '0', '2020-05-14 16:50:40', '2020-05-14 16:50:40', NULL, NULL),
(1266, 0, 30, 234, 'Ashok Nagar', '', '0', '0', '2020-05-14 16:50:57', '2020-05-14 16:50:57', NULL, NULL),
(1267, 0, 30, 234, 'Ayanavaram', '', '0', '0', '2020-05-14 16:51:13', '2020-05-14 16:51:13', NULL, NULL),
(1268, 0, 30, 234, 'Chetpet', '', '0', '0', '2020-05-14 16:51:32', '2020-05-14 16:51:32', NULL, NULL),
(1269, 0, 30, 234, 'Choolai', '', '0', '0', '2020-05-14 16:51:45', '2020-05-14 16:51:45', NULL, NULL),
(1270, 0, 30, 234, 'Chromepet', '', '0', '0', '2020-05-14 16:51:58', '2020-05-14 16:51:58', NULL, NULL),
(1271, 0, 30, 234, 'Egmore', '', '0', '0', '2020-05-14 16:52:19', '2020-05-14 16:52:19', NULL, NULL),
(1272, 0, 30, 234, 'Gopalapuram', '', '0', '0', '2020-05-14 16:52:44', '2020-05-14 16:52:44', NULL, NULL),
(1273, 0, 30, 234, 'Guindy', '', '0', '0', '2020-05-14 16:52:59', '2020-05-14 16:52:59', NULL, NULL),
(1274, 0, 30, 234, 'Injambakkam', '', '0', '0', '2020-05-14 16:53:21', '2020-05-14 16:53:21', NULL, NULL),
(1275, 0, 30, 234, 'K. K. Nagar', '', '0', '0', '2020-05-14 16:55:30', '2020-05-14 16:55:30', NULL, NULL),
(1276, 0, 30, 234, 'Kodambakkam', '', '0', '0', '2020-05-14 16:55:48', '2020-05-14 16:55:48', NULL, NULL),
(1277, 0, 30, 234, 'Kodungaiyur', '', '0', '0', '2020-05-14 16:56:05', '2020-05-14 16:56:05', NULL, NULL),
(1278, 0, 30, 234, 'Kolathur', '', '0', '0', '2020-05-14 16:56:23', '2020-05-14 16:56:23', NULL, NULL),
(1279, 0, 30, 234, 'Korukkupet', '', '0', '0', '2020-05-14 16:56:39', '2020-05-14 16:56:39', NULL, NULL),
(1280, 0, 30, 234, 'Mambalam', '', '0', '0', '2020-05-14 16:57:06', '2020-05-14 16:57:06', NULL, NULL),
(1281, 0, 30, 234, 'Mannivakkam', '', '0', '0', '2020-05-14 16:57:18', '2020-05-14 16:57:18', NULL, NULL),
(1282, 0, 30, 234, 'Medavakkam', '', '0', '0', '2020-05-14 16:57:33', '2020-05-14 16:57:33', NULL, NULL),
(1283, 0, 30, 234, 'Meenambakkam', '', '0', '0', '2020-05-14 16:57:45', '2020-05-14 16:57:45', NULL, NULL),
(1284, 0, 30, 234, 'Mudichur', '', '0', '0', '2020-05-14 16:58:01', '2020-05-14 16:58:01', NULL, NULL),
(1285, 0, 30, 234, 'Mylapore', '', '0', '0', '2020-05-14 16:58:12', '2020-05-14 16:58:12', NULL, NULL),
(1286, 0, 30, 234, 'New Washermenpetshermenpet', '', '0', '0', '2020-05-14 16:58:32', '2020-05-14 16:58:32', NULL, NULL),
(1287, 0, 30, 234, 'Nungambakkam', '', '0', '0', '2020-05-14 16:58:45', '2020-05-14 16:58:45', NULL, NULL),
(1288, 0, 30, 234, 'Park Town', '', '0', '0', '2020-05-14 16:59:04', '2020-05-14 16:59:04', NULL, NULL),
(1289, 0, 30, 234, 'Perambur', '', '0', '0', '2020-05-14 16:59:17', '2020-05-14 16:59:17', NULL, NULL),
(1290, 0, 30, 234, 'Purasawalkam', '', '0', '0', '2020-05-14 16:59:41', '2020-05-14 16:59:41', NULL, NULL),
(1291, 0, 30, 234, 'Saidapet', '', '0', '0', '2020-05-14 16:59:56', '2020-05-14 16:59:56', NULL, NULL),
(1292, 0, 30, 234, 'Shenoy Nagar', '', '0', '0', '2020-05-14 17:00:12', '2020-05-14 17:00:12', NULL, NULL),
(1293, 0, 30, 234, 'Sholinganallur', '', '0', '0', '2020-05-14 17:00:31', '2020-05-14 17:00:31', NULL, NULL),
(1294, 0, 30, 234, 'T. Nagar', '', '0', '0', '2020-05-14 17:00:45', '2020-05-14 17:00:45', NULL, NULL),
(1295, 0, 30, 234, 'Teynampet', '', '0', '0', '2020-05-14 17:01:01', '2020-05-14 17:01:01', NULL, NULL),
(1296, 0, 30, 234, 'Tharamani', '', '0', '0', '2020-05-14 17:01:24', '2020-05-14 17:01:24', NULL, NULL),
(1297, 0, 30, 234, 'Thiru. Vi. Ka Nagar', '', '0', '0', '2020-05-14 17:01:43', '2020-05-14 17:01:43', NULL, NULL),
(1298, 0, 30, 234, 'Thuraipakkam', '', '0', '0', '2020-05-14 17:01:56', '2020-05-14 17:01:56', NULL, NULL),
(1299, 0, 30, 234, 'Tirusulam', '', '0', '0', '2020-05-14 17:02:11', '2020-05-14 17:02:11', NULL, NULL),
(1300, 0, 30, 234, 'Tondiarpet', '', '0', '0', '2020-05-14 17:02:26', '2020-05-14 17:02:26', NULL, NULL),
(1301, 0, 30, 234, 'Triplicane', '', '0', '0', '2020-05-14 17:02:43', '2020-05-14 17:02:43', NULL, NULL),
(1302, 0, 30, 234, 'Vadapalani', '', '0', '0', '2020-05-14 17:02:56', '2020-05-14 17:02:56', NULL, NULL),
(1303, 0, 30, 234, 'Vandalur', '', '0', '0', '2020-05-14 17:03:08', '2020-05-14 17:03:08', NULL, NULL),
(1304, 0, 30, 234, 'Vyasarpadi', '', '0', '0', '2020-05-14 17:03:35', '2020-05-14 17:03:35', NULL, NULL),
(1305, 0, 30, 234, 'Washermanpetmanpet', '', '0', '0', '2020-05-14 17:03:54', '2020-05-14 17:03:54', NULL, NULL),
(1306, 0, 30, 234, 'Velachery', '', '0', '0', '2020-05-14 17:04:14', '2020-05-14 17:04:14', NULL, NULL),
(1307, 0, 16, 110, 'Bangalore', '', '0', '0', '2020-05-15 10:02:54', '2020-05-15 10:02:54', NULL, NULL);
INSERT INTO `city` (`id`, `country_id`, `state_id`, `district_id`, `city`, `search_key`, `position`, `is_active`, `created_at`, `updated_at`, `districtname`, `created_by`) VALUES
(1308, 0, 30, 84, 'Kudavasal', '', '0', '0', '2020-05-16 12:15:39', '2020-05-16 12:15:39', NULL, NULL),
(1310, 0, 30, 84, 'Nannilam', '', '0', '0', '2020-05-16 12:16:40', '2020-05-16 12:16:40', NULL, NULL),
(1311, 0, 30, 84, 'Needamangalam', '', '0', '0', '2020-05-16 12:17:13', '2020-05-16 12:17:13', NULL, NULL),
(1312, 0, 30, 84, 'Thiruthuraipoondi', '', '0', '0', '2020-05-16 12:17:48', '2020-05-16 12:17:48', NULL, NULL),
(1314, 0, 30, 84, 'Valangaiman', '', '0', '0', '2020-05-16 12:19:02', '2020-05-16 12:19:02', NULL, NULL),
(1315, 0, 30, 84, 'Koothanallur', '', '0', '0', '2020-05-16 12:19:27', '2020-05-16 12:19:27', NULL, NULL),
(1316, 0, 30, 482, 'Sriperumbudur', '', '0', '0', '2020-05-16 12:22:02', '2020-05-16 12:22:02', NULL, NULL),
(1317, 0, 30, 482, 'Uthiramerur', '', '0', '0', '2020-05-16 12:22:40', '2020-05-16 12:22:40', NULL, NULL),
(1318, 0, 30, 482, 'Walajabad', '', '0', '0', '2020-05-16 12:23:13', '2020-05-16 12:23:13', NULL, NULL),
(1319, 0, 30, 482, 'Kunrathur', '', '0', '0', '2020-05-16 12:23:39', '2020-05-16 12:23:39', NULL, NULL),
(1320, 0, 30, 475, 'Agastheeswaram,', '', '0', '0', '2020-05-16 12:28:32', '2020-05-16 12:28:32', NULL, NULL),
(1321, 0, 30, 475, 'Kalkulam', '', '0', '0', '2020-05-16 12:29:17', '2020-05-16 12:29:17', NULL, NULL),
(1322, 0, 30, 475, 'Thovalai', '', '0', '0', '2020-05-16 12:29:44', '2020-05-16 12:29:44', NULL, NULL),
(1323, 0, 30, 475, 'Vilavancode,', '', '0', '0', '2020-05-16 12:30:07', '2020-05-16 12:30:07', NULL, NULL),
(1324, 0, 30, 475, 'Killiyur', '', '0', '0', '2020-05-16 12:31:01', '2020-05-16 12:31:01', NULL, NULL),
(1325, 0, 30, 475, 'Thiruvattar', '', '0', '0', '2020-05-16 12:31:33', '2020-05-16 12:31:33', NULL, NULL),
(1326, 0, 30, 90, 'Manapparai', '', '0', '0', '2020-05-16 15:03:13', '2020-05-16 15:03:13', NULL, NULL),
(1327, 0, 30, 90, 'Thuraiyur', '', '0', '0', '2020-05-16 15:04:00', '2020-05-16 15:04:00', NULL, NULL),
(1328, 0, 30, 90, 'Thuvakudi', '', '0', '0', '2020-05-16 15:04:31', '2020-05-16 15:04:31', NULL, NULL),
(1329, 0, 30, 90, 'Lalgudi', '', '0', '0', '2020-05-16 15:05:00', '2020-05-16 15:05:00', NULL, NULL),
(1330, 0, 30, 90, 'Musiri', '', '0', '0', '2020-05-16 15:05:33', '2020-05-16 15:05:33', NULL, NULL),
(1331, 0, 30, 90, 'Manachanallur', '', '0', '0', '2020-05-16 15:06:00', '2020-05-16 15:06:00', NULL, NULL),
(1332, 0, 30, 90, 'Thottiyam', '', '0', '0', '2020-05-16 15:06:28', '2020-05-16 15:06:28', NULL, NULL),
(1333, 0, 30, 90, 'Pullambadi', '', '0', '0', '2020-05-16 15:07:13', '2020-05-16 15:07:13', NULL, NULL),
(1334, 0, 30, 90, 'Thuvarankurichi', '', '0', '0', '2020-05-16 15:08:49', '2020-05-16 15:08:49', NULL, NULL),
(1335, 0, 30, 90, 'Kallakudi', '', '0', '0', '2020-05-16 15:09:11', '2020-05-16 15:09:11', NULL, NULL),
(1336, 0, 30, 90, 'Vaiyampatti', '', '0', '0', '2020-05-16 15:09:50', '2020-05-16 15:09:50', NULL, NULL),
(1337, 0, 30, 90, 'Marungapuri', '', '0', '0', '2020-05-16 15:10:18', '2020-05-16 15:10:18', NULL, NULL),
(1338, 0, 30, 90, 'Poovalur', '', '0', '0', '2020-05-16 15:10:38', '2020-05-16 15:10:38', NULL, NULL),
(1339, 0, 30, 90, 'Thathaiyangarpet', '', '0', '0', '2020-05-16 15:11:05', '2020-05-16 15:11:05', NULL, NULL),
(1340, 0, 30, 95, 'Pulivalam', '', '0', '0', '2020-05-16 15:11:45', '2020-05-16 15:11:45', NULL, NULL),
(1341, 0, 30, 90, 'South Kannanur', '', '0', '0', '2020-05-16 15:12:16', '2020-05-16 15:12:16', NULL, NULL),
(1342, 0, 30, 90, 'Sirugamani', '', '0', '0', '2020-05-16 15:12:49', '2020-05-16 15:12:49', NULL, NULL),
(1343, 0, 30, 90, 'Srirangam', '', '0', '0', '2020-05-16 15:13:18', '2020-05-16 15:13:18', NULL, NULL),
(1344, 0, 30, 90, 'Thiruverumbur', '', '0', '0', '2020-05-16 15:14:51', '2020-05-16 15:14:51', NULL, NULL),
(1345, 0, 30, 62, 'Gingee', '', '0', '0', '2020-05-16 15:20:30', '2020-05-16 15:20:30', NULL, NULL),
(1346, 0, 30, 62, 'Vanur', '', '0', '0', '2020-05-16 15:21:38', '2020-05-16 15:21:38', NULL, NULL),
(1347, 0, 30, 62, 'Vikravandi', '', '0', '0', '2020-05-16 15:23:06', '2020-05-16 15:23:06', NULL, NULL),
(1348, 0, 30, 62, 'Ananthapuram', '', '0', '0', '2020-05-16 15:26:21', '2020-05-16 15:26:21', NULL, NULL),
(1349, 0, 30, 62, 'Arakandanallur', '', '0', '0', '2020-05-16 15:26:45', '2020-05-16 15:26:45', NULL, NULL),
(1350, 0, 30, 62, 'Auroville', '', '0', '0', '2020-05-16 15:27:07', '2020-05-16 15:27:07', NULL, NULL),
(1351, 0, 30, 62, 'Kottakuppam', '', '0', '0', '2020-05-16 15:27:47', '2020-05-16 15:27:47', NULL, NULL),
(1352, 0, 30, 62, 'Marakkanam', '', '0', '0', '2020-05-16 15:28:15', '2020-05-16 15:28:15', NULL, NULL),
(1353, 0, 30, 62, 'Melmalayanur', '', '0', '0', '2020-05-16 15:28:38', '2020-05-16 15:28:38', NULL, NULL),
(1354, 0, 30, 62, 'Melmaruvathur', '', '0', '0', '2020-05-16 15:29:01', '2020-05-16 15:29:01', NULL, NULL),
(1355, 0, 30, 62, 'Kandachipuram', '', '0', '0', '2020-05-16 15:30:47', '2020-05-16 15:30:47', NULL, NULL),
(1356, 0, 30, 62, 'Thiruvennainallur', '', '0', '0', '2020-05-16 15:31:30', '2020-05-16 15:31:30', NULL, NULL),
(1357, 0, 30, 65, 'Adukkamparai', '', '0', '0', '2020-05-16 15:38:27', '2020-05-16 15:38:27', NULL, NULL),
(1358, 0, 30, 65, 'Allapuram', '', '0', '0', '2020-05-16 15:39:27', '2020-05-16 15:39:27', NULL, NULL),
(1359, 0, 30, 65, 'Ammoor', '', '0', '0', '2020-05-16 15:40:50', '2020-05-16 15:40:50', NULL, NULL),
(1360, 0, 30, 65, 'Chettithangal', '', '0', '0', '2020-05-16 15:41:29', '2020-05-16 15:41:29', NULL, NULL),
(1361, 0, 30, 65, 'D.P Palayam', '', '0', '0', '2020-05-16 15:42:38', '2020-05-16 15:42:38', NULL, NULL),
(1362, 0, 30, 65, 'Jaffrabad', '', '0', '0', '2020-05-16 15:44:01', '2020-05-16 15:44:01', NULL, NULL),
(1363, 0, 30, 65, 'Kalinjur', '', '0', '0', '2020-05-16 15:45:11', '2020-05-16 15:45:11', NULL, NULL),
(1364, 0, 30, 65, 'Kangeyanallur', '', '0', '0', '2020-05-16 15:45:50', '2020-05-16 15:45:50', NULL, NULL),
(1365, 0, 30, 65, 'Kaveripakkam', '', '0', '0', '2020-05-16 15:46:48', '2020-05-16 15:46:48', NULL, NULL),
(1366, 0, 30, 65, 'Kilarasampet', '', '0', '0', '2020-05-16 15:47:26', '2020-05-16 15:47:26', NULL, NULL),
(1367, 0, 30, 65, 'Melpadi', '', '0', '0', '2020-05-16 15:48:05', '2020-05-16 15:48:05', NULL, NULL),
(1368, 0, 30, 65, 'Narasingapuram', '', '0', '0', '2020-05-16 15:48:58', '2020-05-16 15:48:58', NULL, NULL),
(1369, 0, 30, 65, 'Pallikonda', '', '0', '0', '2020-05-16 15:50:01', '2020-05-16 15:50:01', NULL, NULL),
(1370, 0, 30, 65, 'Panapakkam', '', '0', '0', '2020-05-16 15:50:37', '2020-05-16 15:50:37', NULL, NULL),
(1371, 0, 30, 65, 'Pernambut', '', '0', '0', '2020-05-16 15:51:08', '2020-05-16 15:51:08', NULL, NULL),
(1372, 0, 30, 288, 'Sholinghur', '', '0', '0', '2020-05-16 15:53:58', '2020-05-16 15:53:58', NULL, NULL),
(1373, 0, 30, 65, 'Thakkolam', '', '0', '0', '2020-05-16 15:54:31', '2020-05-16 15:54:31', NULL, NULL),
(1374, 0, 30, 288, 'Walajapet', '', '0', '0', '2020-05-16 15:56:30', '2020-05-16 15:56:30', NULL, NULL),
(1375, 0, 30, 62, 'Olakur', '', '0', '0', '2020-05-16 16:01:47', '2020-05-16 16:01:47', NULL, NULL),
(1376, 0, 30, 62, 'Thennamadevi', '', '0', '0', '2020-05-16 16:02:35', '2020-05-16 16:02:35', NULL, NULL),
(1377, 0, 30, 62, 'Valavanur', '', '0', '0', '2020-05-16 16:03:38', '2020-05-16 16:03:38', NULL, NULL),
(1378, 0, 30, 62, 'Veerabayangaram', '', '0', '0', '2020-05-16 16:04:28', '2020-05-16 16:04:28', NULL, NULL),
(1379, 0, 30, 84, 'Koradacheri', '', '0', '0', '2020-05-16 16:07:41', '2020-05-16 16:07:41', NULL, NULL),
(1380, 0, 30, 84, 'Kovilvenni', '', '0', '0', '2020-05-16 16:08:24', '2020-05-16 16:08:24', NULL, NULL),
(1381, 0, 30, 84, 'Muthupet', '', '0', '0', '2020-05-16 16:09:38', '2020-05-16 16:09:38', NULL, NULL),
(1382, 0, 30, 84, 'Peralam', '', '0', '0', '2020-05-16 16:10:23', '2020-05-16 16:10:23', NULL, NULL),
(1383, 0, 30, 85, 'Adamangalam-Pudur', '', '0', '0', '2020-05-16 16:13:41', '2020-05-16 16:13:41', NULL, NULL),
(1384, 0, 30, 85, 'Avur', '', '0', '0', '2020-05-16 16:14:51', '2020-05-16 16:14:51', NULL, NULL),
(1385, 0, 30, 85, 'Brahmadesam', '', '0', '0', '2020-05-16 16:15:43', '2020-05-16 16:15:43', NULL, NULL),
(1386, 0, 30, 85, 'Chettupattu', '', '0', '0', '2020-05-16 16:17:03', '2020-05-16 16:17:03', NULL, NULL),
(1387, 0, 30, 85, 'Cheyyar', '', '0', '0', '2020-05-16 16:17:24', '2020-05-16 16:17:24', NULL, NULL),
(1388, 0, 30, 85, 'Desur', '', '0', '0', '2020-05-16 16:18:24', '2020-05-16 16:18:24', NULL, NULL),
(1389, 0, 30, 85, 'Devanambattu', '', '0', '0', '2020-05-16 16:19:01', '2020-05-16 16:19:01', NULL, NULL),
(1390, 0, 30, 85, 'Devikapuram', '', '0', '0', '2020-05-16 16:19:27', '2020-05-16 16:19:27', NULL, NULL),
(1391, 0, 30, 85, 'Injimedu', '', '0', '0', '2020-05-16 16:20:10', '2020-05-16 16:20:10', NULL, NULL),
(1392, 0, 30, 85, 'Jamunamarathur', '', '0', '0', '2020-05-16 16:20:51', '2020-05-16 16:20:51', NULL, NULL),
(1393, 0, 30, 85, 'Kanji', '', '0', '0', '2020-05-16 16:22:09', '2020-05-16 16:22:09', NULL, NULL),
(1394, 0, 30, 85, 'Kannamangalam', '', '0', '0', '2020-05-16 16:22:27', '2020-05-16 16:22:27', NULL, NULL),
(1395, 0, 30, 85, 'Melchengam', '', '0', '0', '2020-05-16 16:23:07', '2020-05-16 16:23:07', NULL, NULL),
(1396, 0, 30, 85, 'Melathikkan', '', '0', '0', '2020-05-16 16:23:58', '2020-05-16 16:23:58', NULL, NULL),
(1397, 0, 30, 85, 'Nochimalai', '', '0', '0', '2020-05-16 16:24:54', '2020-05-16 16:24:54', NULL, NULL),
(1398, 0, 30, 85, 'Paramanandal', '', '0', '0', '2020-05-16 16:25:41', '2020-05-16 16:25:41', NULL, NULL),
(1399, 0, 30, 85, 'Perungattur', '', '0', '0', '2020-05-16 16:26:41', '2020-05-16 16:26:41', NULL, NULL),
(1400, 0, 30, 85, 'Polur', '', '0', '0', '2020-05-16 16:27:11', '2020-05-16 16:27:11', NULL, NULL),
(1401, 0, 30, 85, 'Thandarampattu', '', '0', '0', '2020-05-16 16:29:17', '2020-05-16 16:29:17', NULL, NULL),
(1402, 0, 30, 85, 'Thennangur', '', '0', '0', '2020-05-16 16:30:23', '2020-05-16 16:30:23', NULL, NULL),
(1403, 0, 30, 85, 'Vadugappattu', '', '0', '0', '2020-05-16 16:31:32', '2020-05-16 16:31:32', NULL, NULL),
(1404, 0, 30, 85, 'Vandavasi', '', '0', '0', '2020-05-16 16:32:17', '2020-05-16 16:32:17', NULL, NULL),
(1405, 0, 30, 85, 'Vembakkam', '', '0', '0', '2020-05-16 16:32:47', '2020-05-16 16:32:47', NULL, NULL),
(1406, 0, 30, 85, 'Vengikkal', '', '0', '0', '2020-05-16 16:33:17', '2020-05-16 16:33:17', NULL, NULL),
(1407, 0, 30, 85, 'Vettavalam', '', '0', '0', '2020-05-16 16:33:52', '2020-05-16 16:33:52', NULL, NULL),
(1408, 0, 30, 86, 'Athipattu', '', '0', '0', '2020-05-16 16:36:41', '2020-05-16 16:36:41', NULL, NULL),
(1409, 0, 30, 86, 'Ayappakkam', '', '0', '0', '2020-05-16 16:37:33', '2020-05-16 16:37:33', NULL, NULL),
(1410, 0, 30, 86, 'Chinnasekkadu', '', '0', '0', '2020-05-16 16:38:26', '2020-05-16 16:38:26', NULL, NULL),
(1411, 0, 30, 86, 'Ennore', '', '0', '0', '2020-05-16 16:38:52', '2020-05-16 16:38:52', NULL, NULL),
(1412, 0, 30, 86, 'Gummidipoondi', '', '0', '0', '2020-05-16 16:39:19', '2020-05-16 16:39:19', NULL, NULL),
(1413, 0, 30, 86, 'Kadambathur', '', '0', '0', '2020-05-16 16:40:03', '2020-05-16 16:40:03', NULL, NULL),
(1414, 0, 30, 86, 'Kathivakkam', '', '0', '0', '2020-05-16 16:40:44', '2020-05-16 16:40:44', NULL, NULL),
(1415, 0, 30, 86, 'Kavaraipettai', '', '0', '0', '2020-05-16 16:41:10', '2020-05-16 16:41:10', NULL, NULL),
(1416, 0, 30, 86, 'Nerkundram', '', '0', '0', '2020-05-16 16:42:08', '2020-05-16 16:42:08', NULL, NULL),
(1417, 0, 30, 86, 'Pallipattu', '', '0', '0', '2020-05-16 16:42:35', '2020-05-16 16:42:35', NULL, NULL),
(1418, 0, 30, 86, 'Panambakkam', '', '0', '0', '2020-05-16 16:43:08', '2020-05-16 16:43:08', NULL, NULL),
(1419, 0, 30, 86, 'Perambakkam', '', '0', '0', '2020-05-16 16:43:39', '2020-05-16 16:43:39', NULL, NULL),
(1420, 0, 30, 86, 'Periapalayam', '', '0', '0', '2020-05-16 16:44:03', '2020-05-16 16:44:03', NULL, NULL),
(1421, 0, 30, 86, 'Ponneri', '', '0', '0', '2020-05-16 16:44:53', '2020-05-16 16:44:53', NULL, NULL),
(1422, 0, 30, 86, 'Poonamallee', '', '0', '0', '2020-05-16 16:45:19', '2020-05-16 16:45:19', NULL, NULL),
(1423, 0, 30, 86, 'Pulicat', '', '0', '0', '2020-05-16 16:45:50', '2020-05-16 16:45:50', NULL, NULL),
(1424, 0, 30, 86, 'Puzhal', '', '0', '0', '2020-05-16 16:46:35', '2020-05-16 16:46:35', NULL, NULL),
(1425, 0, 30, 86, 'Thirumazhisai', '', '0', '0', '2020-05-16 16:47:39', '2020-05-16 16:47:39', NULL, NULL),
(1426, 0, 30, 86, 'Thirumullaivoyal', '', '0', '0', '2020-05-16 16:48:17', '2020-05-16 16:48:17', NULL, NULL),
(1427, 0, 30, 86, 'Tiruvallur', '', '0', '0', '2020-05-16 16:49:07', '2020-05-16 16:49:07', NULL, NULL),
(1428, 0, 30, 86, 'Tiruvirkolam', '', '0', '0', '2020-05-16 16:49:43', '2020-05-16 16:49:43', NULL, NULL),
(1429, 0, 30, 86, 'Veppampattu', '', '0', '0', '2020-05-16 16:50:51', '2020-05-16 16:50:51', NULL, NULL),
(1430, 0, 30, 86, 'Uthukottai', '', '0', '0', '2020-05-16 16:52:19', '2020-05-16 16:52:19', NULL, NULL),
(1431, 0, 30, 86, 'RK Pet', '', '0', '0', '2020-05-16 16:53:38', '2020-05-16 16:53:38', NULL, NULL),
(1432, 0, 30, 87, 'Anupparpalayam', '', '0', '0', '2020-05-16 16:56:19', '2020-05-16 16:56:19', NULL, NULL),
(1433, 0, 30, 87, 'Kangeyam', '', '0', '0', '2020-05-16 16:58:20', '2020-05-16 16:58:20', NULL, NULL),
(1434, 0, 30, 87, 'Avinashi', '', '0', '0', '2020-05-16 16:59:02', '2020-05-16 16:59:02', NULL, NULL),
(1435, 0, 30, 87, 'Madathukulam', '', '0', '0', '2020-05-16 16:59:41', '2020-05-16 16:59:41', NULL, NULL),
(1436, 0, 30, 87, 'Vellakoil', '', '0', '0', '2020-05-16 17:01:48', '2020-05-16 17:01:48', NULL, NULL),
(1437, 0, 30, 87, 'Muthur', '', '0', '0', '2020-05-16 17:02:40', '2020-05-16 17:02:40', NULL, NULL),
(1438, 0, 30, 87, 'Rudravathi', '', '0', '0', '2020-05-16 17:04:57', '2020-05-16 17:04:57', NULL, NULL),
(1439, 0, 30, 87, 'Mulanur', '', '0', '0', '2020-05-16 17:05:36', '2020-05-16 17:05:36', NULL, NULL),
(1440, 0, 30, 87, 'Kolathurpalayam', '', '0', '0', '2020-05-16 17:06:01', '2020-05-16 17:06:01', NULL, NULL),
(1441, 0, 30, 87, 'Dhali', '', '0', '0', '2020-05-16 17:07:37', '2020-05-16 17:07:37', NULL, NULL),
(1442, 0, 30, 87, 'Kaniyur', '', '0', '0', '2020-05-16 17:08:01', '2020-05-16 17:08:01', NULL, NULL),
(1443, 0, 30, 87, 'Komaralingam', '', '0', '0', '2020-05-16 17:08:31', '2020-05-16 17:08:31', NULL, NULL),
(1444, 0, 30, 87, 'Samalapuram', '', '0', '0', '2020-05-16 17:09:26', '2020-05-16 17:09:26', NULL, NULL),
(1445, 0, 30, 87, 'Thirumuruganpoondi', '', '0', '0', '2020-05-16 17:09:58', '2020-05-16 17:09:58', NULL, NULL),
(1446, 0, 30, 87, 'Uthukuli', '', '0', '0', '2020-05-16 17:10:42', '2020-05-16 17:10:42', NULL, NULL),
(1447, 0, 30, 88, 'Jolarpet', '', '0', '0', '2020-05-18 14:37:39', '2020-05-18 14:37:39', NULL, NULL),
(1448, 0, 30, 89, 'Cheranmadevi', '', '0', '0', '2020-05-18 14:41:44', '2020-05-18 14:41:44', NULL, NULL),
(1449, 0, 30, 89, 'Courtallam', '', '0', '0', '2020-05-18 14:42:14', '2020-05-18 14:42:14', NULL, NULL),
(1450, 0, 30, 89, 'Gangaikondan', '', '0', '0', '2020-05-18 14:42:38', '2020-05-18 14:42:38', NULL, NULL),
(1451, 0, 30, 89, 'Kalladaikurichi', '', '0', '0', '2020-05-18 14:43:06', '2020-05-18 14:43:06', NULL, NULL),
(1452, 0, 30, 89, 'Nanguneri', '', '0', '0', '2020-05-18 14:44:10', '2020-05-18 14:44:10', NULL, NULL),
(1453, 0, 30, 89, 'Palayamkottai', '', '0', '0', '2020-05-18 14:44:29', '2020-05-18 14:44:29', NULL, NULL),
(1454, 0, 30, 89, 'Radhapuram', '', '0', '0', '2020-05-18 14:45:09', '2020-05-18 14:45:09', NULL, NULL),
(1455, 0, 30, 89, 'Manur', '', '0', '0', '2020-05-18 14:45:48', '2020-05-18 14:45:48', NULL, NULL),
(1456, 0, 30, 89, 'Thisayanvilai', '', '0', '0', '2020-05-18 14:46:18', '2020-05-18 14:46:18', NULL, NULL),
(1458, 0, 30, 100, 'Sengottai', '', '0', '0', '2020-05-18 14:47:41', '2020-05-18 14:47:41', NULL, NULL),
(1459, 0, 30, 89, 'Thalaiyuthu', '', '0', '0', '2020-05-18 14:48:11', '2020-05-18 14:48:11', NULL, NULL),
(1460, 0, 30, 551, 'Viralimalai', '', '0', '0', '2020-05-18 14:51:39', '2020-05-18 14:51:39', NULL, NULL),
(1461, 0, 30, 97, 'Andipatti', '', '0', '0', '2020-05-18 14:53:47', '2020-05-18 14:53:47', NULL, NULL),
(1462, 0, 30, 97, 'Periyakulam', '', '0', '0', '2020-05-18 14:54:56', '2020-05-18 14:54:56', NULL, NULL),
(1463, 0, 30, 97, 'Uthamapalayam', '', '0', '0', '2020-05-18 14:56:04', '2020-05-18 14:56:04', NULL, NULL),
(1464, 0, 30, 98, 'Budalur', '', '0', '0', '2020-05-18 14:58:49', '2020-05-18 14:58:49', NULL, NULL),
(1465, 0, 30, 98, 'Orathanadu', '', '0', '0', '2020-05-18 14:59:26', '2020-05-18 14:59:26', NULL, NULL),
(1466, 0, 30, 98, 'Papanasam', '', '0', '0', '2020-05-18 14:59:54', '2020-05-18 14:59:54', NULL, NULL),
(1467, 0, 30, 98, 'Peravurani', '', '0', '0', '2020-05-18 15:00:45', '2020-05-18 15:00:45', NULL, NULL),
(1468, 0, 30, 98, 'Thiruvaiyaru', '', '0', '0', '2020-05-18 15:01:18', '2020-05-18 15:01:18', NULL, NULL),
(1469, 0, 30, 98, 'Thiruvidaimarudur', '', '0', '0', '2020-05-18 15:01:50', '2020-05-18 15:01:50', NULL, NULL),
(1470, 0, 30, 98, 'Thirubuvanam', '', '0', '0', '2020-05-18 15:02:45', '2020-05-18 15:02:45', NULL, NULL),
(1471, 0, 30, 98, 'Thirunageswaram', '', '0', '0', '2020-05-18 15:03:06', '2020-05-18 15:03:06', NULL, NULL),
(1472, 0, 30, 98, 'Thiruvaiyaru', '', '0', '0', '2020-05-18 15:03:34', '2020-05-18 15:03:34', NULL, NULL),
(1473, 0, 30, 100, 'Ayikudy', '', '0', '0', '2020-05-18 15:12:19', '2020-05-18 15:12:19', NULL, NULL),
(1474, 0, 30, 100, 'Melagaram', '', '0', '0', '2020-05-18 15:12:55', '2020-05-18 15:12:55', NULL, NULL),
(1475, 0, 30, 100, 'Ilanji', '', '0', '0', '2020-05-18 15:13:48', '2020-05-18 15:13:48', NULL, NULL),
(1476, 0, 30, 100, 'Sundarapandiapuram', '', '0', '0', '2020-05-18 15:14:18', '2020-05-18 15:14:18', NULL, NULL),
(1477, 0, 30, 130, 'Kalayarkovil', '', '0', '0', '2020-05-18 15:15:59', '2020-05-18 15:15:59', NULL, NULL),
(1478, 0, 30, 130, 'Ilaiyangudi', '', '0', '0', '2020-05-18 15:16:44', '2020-05-18 15:16:44', NULL, NULL),
(1479, 0, 30, 130, 'Kanadukathan', '', '0', '0', '2020-05-18 15:17:07', '2020-05-18 15:17:07', NULL, NULL),
(1480, 0, 30, 130, 'Manamadurai', '', '0', '0', '2020-05-18 15:17:38', '2020-05-18 15:17:38', NULL, NULL),
(1481, 0, 30, 130, 'Nattarasankottai', '', '0', '0', '2020-05-18 15:17:59', '2020-05-18 15:17:59', NULL, NULL),
(1482, 0, 30, 130, 'Thayamangalam', '', '0', '0', '2020-05-18 15:18:37', '2020-05-18 15:18:37', NULL, NULL),
(1483, 0, 30, 130, 'Thirupuvanam', '', '0', '0', '2020-05-18 15:19:04', '2020-05-18 15:19:04', NULL, NULL),
(1484, 0, 30, 188, 'Gangavalli', '', '0', '0', '2020-05-18 15:22:18', '2020-05-18 15:22:18', NULL, NULL),
(1485, 0, 30, 188, 'Omalur', '', '0', '0', '2020-05-18 15:22:43', '2020-05-18 15:22:43', NULL, NULL),
(1486, 0, 30, 188, 'Sankagiri', '', '0', '0', '2020-05-18 15:23:13', '2020-05-18 15:23:13', NULL, NULL),
(1487, 0, 30, 188, 'Pethanaickenpalayam', '', '0', '0', '2020-05-18 15:24:09', '2020-05-18 15:24:09', NULL, NULL),
(1488, 0, 30, 188, 'Valapady', '', '0', '0', '2020-05-18 15:26:28', '2020-05-18 15:26:28', NULL, NULL),
(1489, 0, 30, 188, 'Yercaud', '', '0', '0', '2020-05-18 15:26:58', '2020-05-18 15:26:58', NULL, NULL),
(1490, 0, 30, 188, 'Kadayampatti', '', '0', '0', '2020-05-18 15:27:29', '2020-05-18 15:27:29', NULL, NULL),
(1491, 0, 30, 233, 'Madurantakam', '', '0', '0', '2020-05-18 15:31:23', '2020-05-18 15:31:23', NULL, NULL),
(1492, 0, 30, 233, 'Thiruporur', '', '0', '0', '2020-05-18 15:33:02', '2020-05-18 15:33:02', NULL, NULL),
(1493, 0, 30, 233, 'Tirukalukundram', '', '0', '0', '2020-05-18 15:34:19', '2020-05-18 15:34:19', NULL, NULL),
(1494, 0, 30, 248, 'Annur', '', '0', '0', '2020-05-19 15:01:28', '2020-05-19 15:01:28', NULL, NULL),
(1495, 0, 30, 248, 'Anaimalai', '', '0', '0', '2020-05-19 15:02:06', '2020-05-19 15:02:06', NULL, NULL),
(1496, 0, 30, 248, 'Kinathukadavu', '', '0', '0', '2020-05-19 15:02:50', '2020-05-19 15:02:50', NULL, NULL),
(1497, 0, 30, 248, 'Madukkarai', '', '0', '0', '2020-05-19 15:04:00', '2020-05-19 15:04:00', NULL, NULL),
(1498, 0, 30, 248, 'Perur', '', '0', '0', '2020-05-19 15:06:05', '2020-05-19 15:06:05', NULL, NULL),
(1499, 0, 30, 248, 'Sulur', '', '0', '0', '2020-05-19 15:06:43', '2020-05-19 15:06:43', NULL, NULL),
(1500, 0, 30, 248, 'Periyanaickenpalayam', '', '0', '0', '2020-05-19 15:07:40', '2020-05-19 15:07:40', NULL, NULL),
(1501, 0, 30, 248, 'Saravanampatti', '', '0', '0', '2020-05-19 15:08:08', '2020-05-19 15:08:08', NULL, NULL),
(1502, 0, 30, 250, 'Bhuvanagiri', '', '0', '0', '2020-05-19 15:10:08', '2020-05-19 15:10:08', NULL, NULL),
(1503, 0, 30, 250, 'Kattumannarkoil', '', '0', '0', '2020-05-19 15:10:59', '2020-05-19 15:10:59', NULL, NULL),
(1504, 0, 30, 250, 'kurinjipadi', '', '0', '0', '2020-05-19 15:11:45', '2020-05-19 15:11:45', NULL, NULL),
(1505, 0, 30, 250, 'Tittakudi', '', '0', '0', '2020-05-19 15:13:41', '2020-05-19 15:13:41', NULL, NULL),
(1506, 0, 30, 250, 'Srimushnam', '', '0', '0', '2020-05-19 15:14:20', '2020-05-19 15:14:20', NULL, NULL),
(1507, 0, 30, 250, 'Veppur', '', '0', '0', '2020-05-19 15:14:50', '2020-05-19 15:14:50', NULL, NULL),
(1508, 0, 30, 272, 'Harur', '', '0', '0', '2020-05-19 15:17:38', '2020-05-19 15:17:38', NULL, NULL),
(1509, 0, 30, 250, 'Karimangalam', '', '0', '0', '2020-05-19 15:18:05', '2020-05-19 15:18:05', NULL, NULL),
(1510, 0, 30, 272, 'Nallampalli', '', '0', '0', '2020-05-19 15:18:34', '2020-05-19 15:18:34', NULL, NULL),
(1511, 0, 30, 272, 'Palacode', '', '0', '0', '2020-05-19 15:19:27', '2020-05-19 15:19:27', NULL, NULL),
(1512, 0, 30, 272, 'Pappireddipatti', '', '0', '0', '2020-05-19 15:20:06', '2020-05-19 15:20:06', NULL, NULL),
(1513, 0, 30, 272, 'Pennagaram', '', '0', '0', '2020-05-19 15:20:37', '2020-05-19 15:20:37', NULL, NULL),
(1514, 0, 30, 288, 'Nemili', '', '0', '0', '2020-05-19 15:31:10', '2020-05-19 15:31:10', NULL, NULL),
(1515, 0, 30, 288, 'Kalavai', '', '0', '0', '2020-05-19 15:31:49', '2020-05-19 15:31:49', NULL, NULL),
(1516, 0, 30, 291, 'Natham', '', '0', '0', '2020-05-19 15:34:47', '2020-05-19 15:34:47', NULL, NULL),
(1517, 0, 30, 291, 'Nilakottai', '', '0', '0', '2020-05-19 15:35:36', '2020-05-19 15:35:36', NULL, NULL),
(1518, 0, 30, 291, 'Oddanchatram', '', '0', '0', '2020-05-19 15:36:01', '2020-05-19 15:36:01', NULL, NULL),
(1519, 0, 30, 291, 'Vedasandur', '', '0', '0', '2020-05-19 15:36:53', '2020-05-19 15:36:53', NULL, NULL),
(1520, 0, 30, 291, 'Chinnalapatti', '', '0', '0', '2020-05-19 15:38:00', '2020-05-19 15:38:00', NULL, NULL),
(1521, 0, 30, 299, 'Kilakarai', '', '0', '0', '2020-05-19 15:40:10', '2020-05-19 15:40:10', NULL, NULL),
(1522, 0, 30, 299, 'Kadaladi', '', '0', '0', '2020-05-19 15:40:37', '2020-05-19 15:40:37', NULL, NULL),
(1523, 0, 30, 299, 'Kamuthi', '', '0', '0', '2020-05-19 15:41:02', '2020-05-19 15:41:02', NULL, NULL),
(1524, 0, 30, 299, 'Mudukulathur', '', '0', '0', '2020-05-19 15:41:31', '2020-05-19 15:41:31', NULL, NULL),
(1525, 0, 30, 299, 'Tiruvadanai', '', '0', '0', '2020-05-19 15:41:58', '2020-05-19 15:41:58', NULL, NULL),
(1526, 0, 30, 299, 'Sayalgudi', '', '0', '0', '2020-05-19 15:42:28', '2020-05-19 15:42:28', NULL, NULL),
(1527, 0, 30, 299, 'Parthibanur', '', '0', '0', '2020-05-19 15:43:01', '2020-05-19 15:43:01', NULL, NULL),
(1528, 0, 30, 299, 'Pamban', '', '0', '0', '2020-05-19 15:43:32', '2020-05-19 15:43:32', NULL, NULL),
(1529, 0, 30, 331, 'Kotagiri', '', '0', '0', '2020-05-19 15:47:22', '2020-05-19 15:47:22', NULL, NULL),
(1530, 0, 30, 331, 'Kundah', '', '0', '0', '2020-05-19 15:47:48', '2020-05-19 15:47:48', NULL, NULL),
(1531, 0, 30, 331, 'Gudalur', '', '0', '0', '2020-05-19 15:48:29', '2020-05-19 15:48:29', NULL, NULL),
(1532, 0, 30, 331, 'Pandalur', '', '0', '0', '2020-05-19 15:48:51', '2020-05-19 15:48:51', NULL, NULL),
(1533, 0, 30, 331, 'Wellington', '', '0', '0', '2020-05-19 15:49:32', '2020-05-19 15:49:32', NULL, NULL),
(1534, 0, 30, 340, 'Paramathi Velur', '', '0', '0', '2020-05-20 12:20:36', '2020-05-20 12:20:36', NULL, NULL),
(1535, 0, 30, 340, 'Mohanur', '', '0', '0', '2020-05-20 12:22:44', '2020-05-20 12:22:44', NULL, NULL),
(1536, 0, 30, 340, 'Kolli Hills', '', '0', '0', '2020-05-20 12:23:12', '2020-05-20 12:23:12', NULL, NULL),
(1537, 0, 30, 340, 'Sendamangalam', '', '0', '0', '2020-05-20 12:24:03', '2020-05-20 12:24:03', NULL, NULL),
(1538, 0, 30, 346, 'Kilvelur', '', '0', '0', '2020-05-20 12:26:17', '2020-05-20 12:26:17', NULL, NULL),
(1539, 0, 30, 346, 'Nagore', '', '0', '0', '2020-05-20 12:27:07', '2020-05-20 12:27:07', NULL, NULL),
(1540, 0, 30, 346, 'Thirukkuvalai', '', '0', '0', '2020-05-20 12:27:47', '2020-05-20 12:27:47', NULL, NULL),
(1541, 0, 30, 346, 'Vedaranyam', '', '0', '0', '2020-05-20 12:28:41', '2020-05-20 12:28:41', NULL, NULL),
(1542, 0, 30, 346, 'Velankanni', '', '0', '0', '2020-05-20 12:29:14', '2020-05-20 12:29:14', NULL, NULL),
(1543, 0, 30, 384, 'Melur', '', '0', '0', '2020-05-20 16:58:36', '2020-05-20 16:58:36', NULL, NULL),
(1544, 0, 30, 384, 'Peraiyur', '', '0', '0', '2020-05-20 16:59:58', '2020-05-20 16:59:58', NULL, NULL),
(1545, 0, 30, 384, 'Usilampatti', '', '0', '0', '2020-05-20 17:01:09', '2020-05-20 17:01:09', NULL, NULL),
(1546, 0, 30, 384, 'Vadipatti', '', '0', '0', '2020-05-20 17:01:42', '2020-05-20 17:01:42', NULL, NULL),
(1547, 0, 30, 384, 'Kalligudi', '', '0', '0', '2020-05-20 17:02:16', '2020-05-20 17:02:16', NULL, NULL),
(1548, 0, 30, 384, 'Karaiyippatti', '', '0', '0', '2020-05-20 17:03:14', '2020-05-20 17:03:14', NULL, NULL),
(1549, 0, 30, 401, 'Shoolagiri', '', '0', '0', '2020-05-20 17:05:57', '2020-05-20 17:05:57', NULL, NULL),
(1550, 0, 30, 401, 'Pochampalli', '', '0', '0', '2020-05-20 17:06:27', '2020-05-20 17:06:27', NULL, NULL),
(1551, 0, 30, 401, 'Uthangarai', '', '0', '0', '2020-05-20 17:10:39', '2020-05-20 17:10:39', NULL, NULL),
(1552, 0, 30, 401, 'Bargur', '', '0', '0', '2020-05-20 17:11:07', '2020-05-20 17:11:07', NULL, NULL),
(1553, 0, 30, 401, 'Denkanikottai', '', '0', '0', '2020-05-20 17:11:43', '2020-05-20 17:11:43', NULL, NULL),
(1554, 0, 30, 417, 'Anthiyur', '', '0', '0', '2020-05-20 17:13:32', '2020-05-20 17:13:32', NULL, NULL),
(1555, 0, 30, 417, 'Kodumudi', '', '0', '0', '2020-05-20 17:15:02', '2020-05-20 17:15:02', NULL, NULL),
(1556, 0, 30, 417, 'Modakurichi', '', '0', '0', '2020-05-20 17:15:52', '2020-05-20 17:15:52', NULL, NULL),
(1557, 0, 30, 417, 'Perundurai', '', '0', '0', '2020-05-20 17:16:19', '2020-05-20 17:16:19', NULL, NULL),
(1558, 0, 30, 417, 'Sathyamangalam', '', '0', '0', '2020-05-20 17:16:44', '2020-05-20 17:16:44', NULL, NULL),
(1559, 0, 30, 417, 'Thalavadi', '', '0', '0', '2020-05-20 17:17:08', '2020-05-20 17:17:08', NULL, NULL),
(1560, 0, 30, 417, 'Nambiyur', '', '0', '0', '2020-05-20 17:17:54', '2020-05-20 17:17:54', NULL, NULL),
(1561, 0, 30, 459, 'Aravakurichi', '', '0', '0', '2020-05-20 18:20:46', '2020-05-20 18:20:46', NULL, NULL),
(1562, 0, 30, 459, 'Manmangalam', '', '0', '0', '2020-05-20 18:21:14', '2020-05-20 18:21:14', NULL, NULL),
(1563, 0, 30, 459, 'Krishnarayapuram', '', '0', '0', '2020-05-20 18:21:38', '2020-05-20 18:21:38', NULL, NULL),
(1564, 0, 30, 459, 'Kulithalai', '', '0', '0', '2020-05-20 18:22:01', '2020-05-20 18:22:01', NULL, NULL),
(1565, 0, 30, 459, 'Kadavur', '', '0', '0', '2020-05-20 18:22:28', '2020-05-20 18:22:28', NULL, NULL),
(1566, 0, 30, 459, 'Pugalur', '', '0', '0', '2020-05-20 18:24:04', '2020-05-20 18:24:04', NULL, NULL),
(1567, 0, 30, 471, 'Nedungadu', '', '0', '0', '2020-05-20 18:26:52', '2020-05-20 18:26:52', NULL, NULL),
(1568, 0, 30, 471, 'Neravy', '', '0', '0', '2020-05-20 18:27:28', '2020-05-20 18:27:28', NULL, NULL),
(1569, 0, 30, 471, 'Thirunallar', '', '0', '0', '2020-05-20 18:27:53', '2020-05-20 18:27:53', NULL, NULL),
(1570, 0, 30, 471, 'Tirumalairayanpattinam', '', '0', '0', '2020-05-20 18:29:09', '2020-05-20 18:29:09', NULL, NULL),
(1571, 0, 30, 551, 'Karambakkudi', '', '0', '0', '2020-05-20 18:37:02', '2020-05-20 18:37:02', NULL, NULL),
(1572, 0, 30, 551, 'Alangudi', '', '0', '0', '2020-05-20 18:37:37', '2020-05-20 18:37:37', NULL, NULL),
(1573, 0, 30, 551, 'Aranthangi', '', '0', '0', '2020-05-20 18:38:06', '2020-05-20 18:38:06', NULL, NULL),
(1574, 0, 30, 551, 'Thirumayam', '', '0', '0', '2020-05-20 18:38:52', '2020-05-20 18:38:52', NULL, NULL),
(1575, 0, 30, 551, 'Ponnamaravathi', '', '0', '0', '2020-05-20 18:39:27', '2020-05-20 18:39:27', NULL, NULL),
(1576, 0, 30, 551, 'Gandarvakottai', '', '0', '0', '2020-05-20 18:40:00', '2020-05-20 18:40:00', NULL, NULL),
(1577, 0, 30, 551, 'Avudaiyarkoil', '', '0', '0', '2020-05-20 18:40:28', '2020-05-20 18:40:28', NULL, NULL),
(1578, 0, 30, 551, 'Manamelkudi', '', '0', '0', '2020-05-20 18:40:59', '2020-05-20 18:40:59', NULL, NULL),
(1579, 0, 30, 551, 'Kulathur', '', '0', '0', '2020-05-20 18:41:40', '2020-05-20 18:41:40', NULL, NULL),
(1580, 0, 30, 551, 'Iluppur', '', '0', '0', '2020-05-20 18:42:10', '2020-05-20 18:42:10', NULL, NULL),
(1581, 0, 30, 551, 'Rayavaram', '', '0', '0', '2020-05-20 18:42:58', '2020-05-20 18:42:58', NULL, NULL),
(1582, 0, 107, 552, 'Chandigarh', '', '0', '0', '2020-05-29 18:44:06', '2020-05-29 18:44:06', NULL, NULL),
(1583, 0, 5, 208, 'Patna', '', '0', '0', '2020-05-31 12:42:00', '2020-05-31 12:42:00', NULL, NULL),
(1584, 0, 30, 553, 'Kallakurichi', '', '0', '0', '2020-06-01 17:08:16', '2020-06-01 17:08:16', NULL, NULL),
(1585, 0, 30, 553, 'Sankarapuram', '', '0', '0', '2020-06-01 17:08:36', '2020-06-01 17:08:36', NULL, NULL),
(1586, 0, 30, 553, 'Chinnasalem', '', '0', '0', '2020-06-01 17:08:52', '2020-06-01 17:08:52', NULL, NULL),
(1587, 0, 30, 553, 'Ulundurpet', '', '0', '0', '2020-06-01 17:09:09', '2020-06-01 17:09:09', NULL, NULL),
(1588, 0, 30, 553, 'Thirukovilur', '', '0', '0', '2020-06-01 17:09:27', '2020-06-01 17:09:27', NULL, NULL),
(1589, 0, 30, 553, 'Kalvarayanmalai', '', '0', '0', '2020-06-01 17:09:43', '2020-06-01 17:09:43', NULL, NULL),
(1590, 0, 17, 531, 'Idukki', '', '0', '0', '2020-06-08 14:31:21', '2020-06-08 14:31:21', NULL, NULL),
(1591, 0, 30, 98, 'Thanjavur', '', '0', '0', '2020-06-13 17:45:00', '2020-06-13 17:45:00', NULL, NULL),
(1592, 0, 30, 555, 'Perambalur Taluk', '', '0', '0', '2020-06-16 15:36:02', '2020-06-16 15:36:02', NULL, NULL),
(1593, 0, 30, 555, 'Kunnam Taluk', '', '0', '0', '2020-06-16 15:36:30', '2020-06-16 15:36:30', NULL, NULL),
(1594, 0, 30, 555, 'Alathur Taluk', '', '0', '0', '2020-06-16 15:37:01', '2020-06-16 15:37:01', NULL, NULL),
(1595, 0, 30, 555, 'Veppanthattai Taluk', '', '0', '0', '2020-06-16 15:37:25', '2020-06-16 15:37:25', NULL, NULL),
(1596, 0, 30, 554, 'Ariyalur', '', '0', '0', '2020-06-19 15:36:31', '2020-06-19 15:36:31', NULL, NULL),
(1597, 0, 30, 554, 'Sendurai', '', '0', '0', '2020-06-19 15:36:56', '2020-06-19 15:36:56', NULL, NULL),
(1598, 0, 30, 554, 'Udayarpalayam', '', '0', '0', '2020-06-19 15:37:21', '2020-06-19 15:37:21', NULL, NULL),
(1599, 0, 30, 554, 'Andimadam', '', '0', '0', '2020-06-19 15:37:39', '2020-06-19 15:37:39', NULL, NULL),
(1600, 0, 30, 551, 'Gandarvakkottai', '', '0', '0', '2020-06-19 15:56:39', '2020-06-19 15:56:39', NULL, NULL),
(1601, 0, 30, 551, 'Pudukkottai', '', '0', '0', '2020-06-19 15:57:19', '2020-06-19 15:57:19', NULL, NULL),
(1602, 0, 33, 561, 'Allahabad', '', '0', '0', '2020-07-14 12:59:04', '2020-07-14 12:59:04', NULL, NULL),
(1603, 0, 5, 562, 'Bihar Sharif', '', '0', '0', '2020-07-15 14:31:13', '2020-07-15 14:31:13', NULL, NULL),
(1604, 0, 5, 563, 'Patna', '', '0', '0', '2020-07-16 16:36:33', '2020-07-16 16:36:33', NULL, NULL),
(1605, 0, 27, 564, 'Patiala', '', '0', '0', '2020-07-20 13:15:36', '2020-07-20 13:15:36', NULL, NULL),
(1606, 0, 33, 565, 'Raebareli', '', '0', '0', '2020-07-28 16:06:40', '2020-07-28 16:06:40', NULL, NULL),
(1607, 1, 2, 25, 'anantapur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1608, 1, 30, 291, 'Vadamadurai', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1609, 1, 10, 566, 'Veraval', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1610, 1, 25, 312, 'Puri', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1611, 1, 19, 75, ' Ujjain ', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1612, 1, 30, 90, 'Veerapur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1613, 1, 30, 551, 'Thirumayam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1614, 1, 30, 130, 'Thirukoshtiyur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1615, 1, 30, 299, 'Thiruppullani', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1616, 1, 30, 90, 'Uraiyur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1617, 1, 30, 90, 'Manachanallur Taluk', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1618, 1, 30, 384, 'Periyar', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1619, 1, 30, 90, ' Thiruvellarai', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1620, 1, 30, 90, 'Thiru Anbil', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1621, 1, 30, 98, 'Budalur taluk', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1622, 1, 30, 401, 'Bagalur', NULL, NULL, '1', NULL, NULL, NULL, NULL),
(1624, 1, 111, 569, 'Nellore', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1629, 1, 16, 149, 'sorab', NULL, NULL, '0', NULL, NULL, NULL, '1'),
(1631, 1, 16, 149, 'Sagara', NULL, NULL, '0', NULL, NULL, NULL, '1'),
(1636, 1, 30, 130, 'Tiruppathur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1638, 1, 30, 233, 'pallavaram', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1640, 1, 17, 457, 'Kumbla(kumble)', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1641, 1, 30, 85, 'Kalasapakkam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1642, 1, 30, 417, 'Kangayampalayam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1643, 1, 30, 65, 'Thirumalaikodi', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1645, 1, 111, 585, 'Tirupati', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1646, 1, 30, 340, 'Namakkal', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1647, 1, 30, 553, 'Thiruvarangam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1648, 1, 30, 588, 'Tirukoyilur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1649, 1, 30, 589, 'pazhani(palani)', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1650, 1, 30, 62, 'Melmaruvathur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1651, 1, 30, 482, 'kancheepuram', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1652, 1, 30, 90, 'Samayapuram', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1653, 1, 14, 591, 'Katra', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1654, 1, 25, 592, 'Jajpur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1655, 1, 35, 214, 'Birbhum', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1656, 1, 30, 346, 'Nalladai', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1657, 1, 30, 346, 'Kanjanagaram', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1658, 1, 30, 84, 'Enkan', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1659, 1, 30, 98, 'Athirampattinam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1660, 1, 30, 65, 'vanniyambadi', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1661, 1, 30, 98, 'villankulam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1662, 1, 30, 98, 'Thirundhuthevankudi', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1663, 1, 32, 121, 'Udaipur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1664, 1, 28, 192, ' Bharatpur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1665, 1, 35, 594, 'Katva Subdivision', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1666, 1, 30, 291, 'Thavasi medai', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1667, 1, 30, 551, 'Tiruvarankulam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1668, 1, 30, 90, 'Idayattru Mangalam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1669, 1, 30, 346, 'Gomal', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1670, 1, 30, 384, 'Cholavandan', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1671, 1, 30, 384, 'Pazhamudircholai', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1672, 1, 30, 98, 'Swamimalai', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1673, 1, 123, 595, 'Dantewada', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1674, 1, 10, 596, 'Khodiyar Chowk', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1675, 1, 30, 234, 'Chithukadu', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1676, 1, 30, 89, 'Panpozhi', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1677, 1, 30, 346, 'nattham', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1678, 1, 30, 98, 'Ayyampettai', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1679, 1, 30, 86, 'Perumbakkam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1680, 1, 121, 602, 'Tilla', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1681, 1, 10, 462, 'Somnath', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1682, 1, 121, 602, 'Guwahati', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1683, 1, 30, 248, 'Alanthurai', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1684, 1, 35, 422, 'Kalighat', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1685, 1, 30, 98, 'vaithyanathanpettai', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1686, 1, 30, 130, 'piravallur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1687, 1, 30, 65, 'kaveripakkam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1688, 1, 30, 98, 'patteswaram', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1689, 1, 30, 346, 'tirukannapuram', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1690, 1, 33, 367, ' Paanighat', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1691, 1, 17, 549, 'Sabarimala', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1692, 1, 17, 549, 'Pampa', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1693, 1, 30, 98, 'Tirukattupalli', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1694, 1, 30, 551, 'Avudayar kovil', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1695, 1, 30, 90, 'Thatha iyengarpettai', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1696, 1, 125, 606, 'Thanesar', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1697, 1, 19, 607, 'Maihar', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1698, 1, 19, 608, 'Amarkantak', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1699, 1, 19, 610, 'Amarkantak', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1700, 1, 35, 141, 'Guskara ', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1701, 1, 30, 95, 'Srivaikundam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1702, 1, 30, 95, 'Natham', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1703, 1, 30, 90, 'Srirangam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1704, 1, 111, 611, 'Seethampet', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1705, 1, 30, 90, 'Worayur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1706, 1, 30, 90, 'Manachanallur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1707, 1, 30, 482, 'Mangadu', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1708, 166, 128, 612, 'Hinglaj', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1709, 1, 13, 613, 'Jawalamukhi', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1710, 1, 30, 95, 'Tirukolur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1711, 1, 30, 90, 'Tiruvellarai', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1712, 1, 30, 95, 'Tiruppuliangudi', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1713, 1, 30, 90, 'Lalgudi', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1714, 1, 30, 95, 'Alwartirunagari', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1715, 1, 30, 95, 'Thenthirupperai', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1716, 1, 30, 98, 'Koviladi', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1717, 1, 30, 98, 'Thirukandiyur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1718, 1, 30, 95, 'Perungulam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1719, 1, 30, 95, 'Thirutholaivillimangalam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1720, 1, 30, 98, 'Tirukudalur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1721, 1, 30, 95, 'Tholaivillimangalam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1722, 1, 35, 352, 'Nabagram', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1723, 1, 35, 515, 'Khanakul', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1724, 1, 17, 13, 'Puliyoor', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1725, 1, 129, 614, ' Laheriasarai', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1726, 1, 17, 13, 'Chengannur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1727, 1, 17, 549, 'Mallapuzhassery', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1728, 1, 17, 549, 'Aranmula', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1729, 18, 130, 615, 'Barisal', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1730, 1, 17, 416, 'Kurumaseri', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1731, 1, 17, 326, 'Thirumittacode', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1732, 1, 17, 326, 'Pattambi', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1733, 1, 30, 616, 'Seerkazhi', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1734, 1, 30, 599, 'Sirkali', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1735, 1, 30, 65, 'Sholinghur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1736, 1, 111, 617, 'Ahobilam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1737, 1, 10, 618, 'Dwarka', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1738, 1, 10, 618, 'Dwarka', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1739, 1, 36, 226, 'Badrinath', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1740, 1, 36, 274, 'Kedarnath', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1741, 1, 36, 274, 'Sonprayag', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1742, 1, 30, 98, 'Kabisthalam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1743, 1, 30, 98, 'Tiruppullampudangudi', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1744, 1, 30, 98, 'Adanur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1745, 1, 30, 98, 'Kumbakonam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1746, 153, 131, 620, 'Muktinath', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1747, 153, 131, 620, 'Jomsom', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1748, 1, 36, 226, 'Joshimath', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1749, 1, 36, 101, 'Devprayag', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1751, 1, 111, 617, 'Srisailam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1752, 1, 30, 98, 'Tirunageshwaram', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1753, 1, 30, 98, 'Nachaiarkovil', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1754, 1, 30, 98, 'Tirucherai', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1755, 1, 19, 440, 'Omkareshwar', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1756, 1, 30, 84, 'Tirukanna mangai', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1757, 1, 30, 84, 'Tiruchirupuliyur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1758, 1, 30, 346, 'Tirukannapuram', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1759, 1, 30, 346, 'Therazendur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1760, 1, 30, 346, 'Thalachangadu', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1761, 1, 30, 346, 'Tiruindalur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1762, 1, 30, 346, 'Sirkali', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1763, 1, 30, 346, 'Tirunangoor', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1764, 1, 30, 346, 'Thiruvan purushothaman', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1765, 1, 30, 346, 'Semponsei koil', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1766, 1, 30, 346, 'Vaikunda vinagaram', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1767, 1, 30, 346, 'Tiruthetri ambalam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1768, 1, 30, 346, 'Tiruvellakulan', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1769, 1, 30, 250, 'Chidambaram', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1770, 1, 30, 98, 'Velur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1771, 1, 30, 98, 'Nathankoil', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1772, 1, 30, 98, 'Tiruvelliangudi', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1773, 1, 30, 475, 'Thiruppathisaram', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1774, 1, 30, 130, 'Tirupathur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1775, 1, 30, 299, 'Thiruppullani', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1776, 1, 30, 384, 'Periyar', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1777, 1, 30, 61, 'Sattur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1778, 1, 30, 61, 'Erukankudi', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1779, 1, 30, 250, 'Thiruvaheendrapuram', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1780, 1, 30, 482, 'Tiruneeragam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1781, 1, 30, 482, 'Tirupandagam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1782, 1, 30, 482, 'Nilathingai thundathan', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1783, 1, 30, 95, 'kULASAI', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1784, 1, 20, 336, 'Trimbak', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1785, 1, 20, 546, 'Bhimashankar', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1786, 1, 30, 62, 'Thirukovilur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1787, 1, 20, 623, 'Rahata', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1788, 1, 30, 95, 'Kulasekarapatnam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1789, 1, 30, 346, 'Sikkal', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1790, 1, 30, 417, 'Sathiyamangalam', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1795, 1, 30, 98, 'Punnainallur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1796, 1, 30, 98, 'Punnainallur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1797, 1, 30, 98, 'Punnainallur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1798, 1, 30, 98, 'Punnainallur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1799, 1, 30, 98, 'Punnainallur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1800, 1, 30, 98, 'Punnainallur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1801, 1, 30, 98, 'Punnainallur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1802, 1, 30, 98, 'Punnainallur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1803, 1, 30, 98, 'Punnainallur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1808, 1, 30, 98, 'Punnainallur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1809, 1, 30, 98, 'Punnainallur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1810, 1, 30, 98, 'Punnainallur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1811, 1, 30, 98, 'Punnainallur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1812, 1, 30, 98, 'Punnainallur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1813, 1, 30, 98, 'Punnainallur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1814, 1, 30, 98, 'Punnainallur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1815, 1, 30, 98, 'Punnainallur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1816, 1, 30, 98, 'Punnainallur', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1817, 1, 30, 98, 'PUNNAINALLUR', NULL, NULL, '1', NULL, NULL, NULL, '1'),
(1818, 1, 30, 98, 'PUNNAINALLUR', NULL, NULL, '1', NULL, NULL, NULL, '1');

-- --------------------------------------------------------

--
-- Table structure for table `communityabstract`
--

CREATE TABLE `communityabstract` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `designation` varchar(50) NOT NULL,
  `family_name` varchar(50) NOT NULL,
  `Country` int(11) NOT NULL,
  `State` int(11) NOT NULL,
  `District` int(11) NOT NULL,
  `City` int(11) NOT NULL,
  `Area` int(11) NOT NULL,
  `pin_code` int(11) NOT NULL,
  `address` text NOT NULL,
  `description` text NOT NULL,
  `groupName` varchar(200) DEFAULT NULL,
  `sex` varchar(15) NOT NULL,
  `phone_number` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(200) NOT NULL,
  `isActive` int(11) NOT NULL DEFAULT 0,
  `relationship` varchar(25) NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `communityabstract`
--

INSERT INTO `communityabstract` (`id`, `name`, `designation`, `family_name`, `Country`, `State`, `District`, `City`, `Area`, `pin_code`, `address`, `description`, `groupName`, `sex`, `phone_number`, `password`, `isActive`, `relationship`, `email`) VALUES
(1, 'rajan ', 'asa', 'mohammed', 1, 30, 384, 800, 25, 0, 'assa', 'asasa', 'commAdmin', 'Male', '2147483647', '$2b$10$Uq1fbMnCzjE9USKATGdnbO/OE2Y0/cjBgSEB.85bMECGKGiX2I9SO', 0, 'son', 'rajanraj@gmail.com'),
(3, 'rajann', 'wawa', 'commAdmin', 1, 30, 384, 800, 25, 0, 'qaaaaaaaaaaaaaaaaaaa', 'waa', 'commAdmin', 'Male', '1234567890', '$2b$10$yK/uiJRW.257UyHIJRS2veEqmci4I6tHw.CVJrOdNMQmF63tWIqdq', 0, 'son', 'rajanraj@gmail.com'),
(6, 'a', 'farmer', 'rajj', 1, 30, 384, 800, 5, 641023, 'sss', 'ssss', 'commAdmin', 'Male', '1234567891', '$2b$10$gPu4DsjKlzPXKqcndo.O7eMxxwYCkLdGlaWjrwlgN8DeAfo/PPmGW', 0, 'Daughter', '');

-- --------------------------------------------------------

--
-- Table structure for table `communityadmin`
--

CREATE TABLE `communityadmin` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `email_id` varchar(50) DEFAULT NULL,
  `country` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `district` int(11) DEFAULT NULL,
  `city` int(11) DEFAULT NULL,
  `area` int(11) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `pincode` int(11) DEFAULT NULL,
  `kuladevam` varchar(255) DEFAULT NULL,
  `kuladevam_country` int(11) DEFAULT NULL,
  `kuladevam_state` int(11) DEFAULT NULL,
  `kuladevam_district` int(11) DEFAULT NULL,
  `kuladevam_city` int(11) DEFAULT NULL,
  `kuladevam_address` text DEFAULT NULL,
  `groupName` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `rejectReasonByAdmin` varchar(255) NOT NULL DEFAULT '',
  `status` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `communityadmin`
--

INSERT INTO `communityadmin` (`id`, `name`, `phone_number`, `email_id`, `country`, `state`, `district`, `city`, `area`, `address`, `pincode`, `kuladevam`, `kuladevam_country`, `kuladevam_state`, `kuladevam_district`, `kuladevam_city`, `kuladevam_address`, `groupName`, `password`, `rejectReasonByAdmin`, `status`) VALUES
(1, 'suresh', '6374646481', 'suresh@gmail.com', 5, 5, 1, 4, 5, 'suresh address', 54321, 'suresh god', 1, 2, 3, 4, 'suresh kuladevam address', 'suresh123group', '$2b$10$RBeCKwR5yL5W0u7y/3434OJPnxlslrUBYo1dLjSKqSv8v6gX8EbbW', '', 1),
(2, 'rohit', '1234679', 'rohit@gmail.com', 1, 1, 1, 5, 8, 'nagpur is his address', 765123, 'nagpur god', 2, 4, 5, 5, 'nagpur is kuladevam address', 'rohitgroup', NULL, '', 1),
(12, 'seoul lin', '9384466178', 'soeul@lin.com', 1, 30, 384, 800, 5, '2/136, west street, tanjore.\nNo.8, Big street, kumbakonam.', 613204, 'lindan', 1, 30, 384, 800, 'jscjcj y8xhssy78u89u98y87uyu9 98cu98', 'lindangrp', '$2b$10$Pz1Y33/9DQUju8qf0ytWV.QTyBieCPJ8KnIcH3c7NvWJghZHvbIea', '', 1),
(13, 'comm admin', '8754931308', 'comm@admin.com', 1, 30, 384, 800, 5, 'bhbce eee4 4h4lu89 mnuihg8', 542341, 'comm admin god', 1, 30, 384, 800, 'bhfir5 tj5hhuiht78yg58yg g8u5gnu5huigfrg', 'commAdmin', '$2b$10$wcvlyZJ32N/R7V.oIkyf6urX24XTJVHDFbsQ7cPHMR6BY/xVkU2YC', '', 1),
(14, 'chiva', '7890123456', 'safwefews1@mail.com', 1, 30, 384, 800, 25, 'sdfadf', 1111, 'asasa', 1, 30, 384, 800, 'asdassda', 'CV', '$2b$10$tKhHJkZSlIMNsPwd9DMyJeV7yFhMLCvVPZOpM8U5RZ4TOhzTIKJDO', '', 0),
(17, 'siva', '9443474022', 'abc@gmail.com', 1, 30, 384, 800, 5, 'adad', 641023, 'swami', 1, 30, 384, 800, 'asdasd', 'ganesh', '$2b$10$ruP4.p/vg63VX0Lf6.vMUeclaAoP1unurHq0h9nLlB6TujmlmQ5KC', '', 0),
(18, 'Ganesh', '9943926255', 'abd@gmail.com', 1, 30, 384, 800, 5, 'asdad', 641023, 'God', 1, 30, 384, 800, 'adada', 'Ganesh1', '$2b$10$hjamcDq4n4X4/JyBIMJDIuW82LJ6BnUWIxxyvpiPZeTSA6ywZqpiG', '', 0),
(19, 'Nathan', '9443474024', 'adb@gmail.com', 1, 30, 384, 800, 5, 'adadad', 641023, 'Siva', 1, 30, 384, 800, 'ssss', 'MainGod', '$2b$10$hd5MjPl3eCwVNRJRX9DJc.WhKE5uDEaxTd8ZAAZ/mTk7uC6YTffMC', '', 0),
(20, 'Xya', '9443474027', 'abc@gmail.com', 1, 30, 384, 800, 5, 'sdad', 641023, 'God', 1, 30, 384, 800, 'ssss', 'SecondGod', '$2b$10$sSEWZ8UiXPbuqOiS.HvC0Oa6rdl2p2G0QRW6sTslyNhIZZZkMgK/.', '', 0),
(21, 'hi', '9443474025', 'abc@gmail.com', 1, 30, 384, 800, 5, 'adasdad', 641023, 'Main', 1, 30, 384, 800, 'adada', 'Main G', '$2b$10$.sJHYwT3OQDquNYyf.5jWe6075HccnhEIWgv8u8UmKXQKN/IU.36K', '', 0),
(23, 'Ganu', '9443474000', 'adb@gmail.com', 1, 30, 384, 800, 5, 'adadad', 641023, 'Main', 1, 30, 384, 800, 'adadad', 'Ji', '$2b$10$5kc2oBedwqXh/JsdPdYetuLmtUKxsZpTAdMaiz8gZxv1AYbVJp.QC', '', 0),
(24, 'Hero', '9443474021', 'adb@gmail.com', 1, 30, 384, 800, 5, 'adad', 641023, 'Her', 1, 30, 384, 800, 'dadadd', 'her God', '$2b$10$lPs..W9F9VHRylezfQqTReCWEHuZUZK3/eb35Nj4opr2mEKseeQC.', '', 0),
(25, '', '9443474023', 'adb@gmail.com', 1, 30, 384, 800, 5, 'adadad', 641023, 'Main', 1, 30, 384, 800, 'dadad', 'u', '$2b$10$0xD832BT3RFtk2DFgHZlDud.b1GZDssBwIqJpDvBvIsKJepJzGEDG', '', 0),
(26, 'Ganua', '9943262521', 'adb@gmail.com', 1, 30, 384, 800, 5, 'adadad', 641023, 'Main', 1, 30, 384, 800, 'cccc', 'maintain', '$2b$10$cQsKxwX/c6FcH9Ua96JEOOVvzMk8APmLWcOlsWr2t9pLPWQRokZnq', '', 0),
(27, 'Ganus', '9443474033', 'adb@gmail.com', 1, 30, 384, 800, 5, 'sdaada', 641023, 'Mains', 1, 30, 384, 800, 'ddd', 'fd', '$2b$10$XkZxJXN6PlmCzW9woatVtO0ca5vGc9VLtjZV5anOy4Zj6iLABxq.u', '', 0),
(28, 'Ganu', '9943926254', 'adb@gmail.com', 1, 30, 384, 800, 5, 'asdasd', 641023, 'Main', 1, 30, 384, 800, 'mad', 'ddd', '$2b$10$DckHXKmd8.lIB6I6.I1KPepdxa0i7Oc2MGiaNfnqVZjb8JUBFANZu', '', 0),
(30, 'Ganu', '1234567890', 'adb@gmail.com', 1, 30, 384, 800, 5, 'adad', 641023, 'Main', 1, 30, 384, 800, 'ddd', 'main', '$2b$10$CLD0hfhVUuQeq7OrwKHvmugJ488y8128JusSM2xgcj/Obbj2zSsf2', '', 0),
(37, 'jayathurga', '8072645582', 'jayathurgababu25@gmail.com', 1, 30, 233, 818, 67, 'no-25/33 selvavinayagar kovil street,v.o.c nagar,pallavaram-600043', 600043, 'Sri Venkateswara Swamy Vaari Temple', 1, 111, 583, 1639, 'S Mada St, Tirumala, Tirupati, Andhra Pradesh 517504', 'sri vari ', '$2b$10$PDFdu/OuBqIBoJjYMQp5FelaOMH.RKV35YmZ58rgHoacb.YFD6.lC', '', 1),
(38, 'jayathurga babu', '8667315193', 'parimalababu27@gmail.com', 1, 30, 85, 854, 62, '1,mettu street,rani anna nagar,tiruvannamalai', 606616, 'perumal', 1, 111, 585, 1645, 'tirumala,tirupati', 'srinivasa babu', '$2b$10$.x84BWbSk61ph/qb7/vfl.0Wv5UuO16leEbYzQZvT0HDFvfrR/xMy', '', 1),
(40, 'JJJDDD', '9171022205', 'jayathurgababu25@gmail.com', 1, 30, 233, 818, 156, '45,VOC STREET,SANKARA NAGAR', 600043, 'perumal', 1, 30, 85, 854, 'mettu street,ammani ammal gopuram,Tiruvannamalai', 'om shanthi', '$2b$10$84PqshUQn9Aq6.PseeoyEed8.xJo/nNnX4B5VStRH7ZEC2lDYe2Vy', '', 1),
(42, 'ARCHANA', '6385816656', 'archana21197@gmail.com', 1, 30, 61, 1261, 28, '2/89,SOUTH STREET ,THIRUTHANGAL ,VIRUDHUNAGAR(DT)-626130', 626130, 'Sri Akkammal Kovil', 1, 30, 61, 1258, 'Sri Akkammal Kovil,Rengappanaickerpatti,Sattur-626203', 'My Kuladeivam', '$2b$10$.vjFQUeHGDw.7uNfs2YYp.ip5sqQor1z7izdxLlbaRiRrJJSNGul.', '', 1),
(43, 'aaaa', '1111111111', 'archana21197@gmail.com', 1, 30, 61, 1258, 192, '2/89,south street,\nRengappanaickerpatti,sattur,virudhunagar(dt)', 626203, 'qq', 5, 30, 61, 1258, 'cccccc', 'xx', '$2b$10$QLcnYlb83.ZSz82UbAoQGO43gjjVO5P/LfBL8iqh0TG2GTXfaYPgO', '\"already\"', 2),
(47, 'ARCHANA', '2222222222', 'archana21197@gmail.com', 1, 9, 61, 1258, 192, '2/89,south street,\nRengappanaickerpatti,sattur,virudhunagar(dt)', 626203, 'Sri Akkammal Kovil', 1, 30, 90, 1258, 'xyz', 'xxx', '$2b$10$1k8JbrO9gjA/BpDQXUqfD.oZKtQe4AoCyd3bZ6Bp36fDr7c0tTg4G', '', 1),
(48, 'ARCHANA', '3333333333', 'archana21197@gmail.com', 1, 30, 61, 1258, 192, '2/89,south street,\nRengappanaickerpatti,sattur,virudhunagar(dt)', 626203, 'zz', 1, 30, 61, 1258, 'l', 'oo', '$2b$10$BMnUJE0fmPLv6kiYFF/8p.3AUrOM8sn5eJmnPGUFXkBdSeSLiOATe', '', 1),
(50, 'Archana.V', '8888888888', 'archana21197@gmail.com', 1, 30, 61, 1258, 192, '2/89,south street,\nRengappanaickerpatti,sattur,virudhunagar(dt)', 626203, 'zzz', 1, 30, 61, 1258, '2/89,south street,\nRengappanaickerpatti,sattur,virudhunagar(dt)', '  Kuladeivam', '$2b$10$cBLqnXNMIDJPAGFaeJz.RObddO/TOAJhTpoyIRTo6SfXDBoasQMD.', '', 1),
(59, 'jayathurga @bhava darani', '9042452027', 'daranibibu55@gmail.com', 1, 30, 233, 818, 156, 'No-1,voc nagar,shanthi colony,pallavaram', 600068, 'Sri Venkateshwara Perumal', 1, 111, 585, 1645, 'Tirumala Tirupati Devasthanam', 'Sri veetala', '$2b$10$eqWv1WjWOk7/bcovAzuPOusyDP4DMhw1JvXBNvIpZIq5/jPiCITA2', '', 1),
(60, 'jayathurga', '7708934963', 'jayathurgababu25@gmail.com', 1, 30, 233, 818, 156, 'no-1,METTU STREET,VOC NAGAR,PAMMAL', 600068, 'sri venkateshwara perumal', 1, 111, 585, 1645, 'Tirumala devasthanam,Tirupati', 'venkateshwara vaari', '$2b$10$FaDdtKWT855v.VuwDhC/5OvjbT12q1EX4GW8jo.cFoN/R.U/4l/Ai', '', 1),
(61, 'Subburaj ', '9360382057', 'subbucse96@gmail.com', 1, 30, 61, 836, 34, '11/114 south Street vellanguli 627426', 627426, 'Mupidathi Amman', 1, 30, 89, 756, '11/114 south Street vellanguli 627426', 'God', '$2b$10$tc..nPzwpeGEmn7aLKl5HuXTT9BxaIuJOVYDPv5Irin25C7sW5gyS', '', 1),
(63, 'Subburaj ', '8754944013', 'subburajduarics@gmail.com', 1, 30, 61, 763, 57, '11/114 south Street vellanguli 627426', 627426, 'Mupidathi Amman', 1, 30, 89, 756, '11/114 south Street vellanguli 627426', 'Testing', '$2b$10$ptdeiQ7zy3w9X0jZCmch7uYfh9R2xbJml9NqHYB0cUO6VOs3X5Idi', '', 1),
(65, 'Ajith', '9152485650', 'ajithkumaryt2001@gmail.com', 1, 30, 61, 1258, 192, 'srnm college', 6215, 'advc', 1, 30, 61, 1258, 'temple', 'abcd', '$2b$10$GpoSoISZxJp5NObUuCUQLuwlfklpJgJKuiycnMOdTjzIm4dfUwiSu', '', 1),
(67, 'ajith', '9159370635', 'ajithkumaryt2001@gmail.com', 1, 30, 61, 1258, 192, 'srnm', 6125, 'advc', 1, 30, 61, 1258, 'abcd', 'abc', '$2b$10$eDMr8IBrBec7IO01GAbit.xFf07UHj33Jc0FgCOmkassi8HK9VRQS', '', 1),
(68, 'Ajith', '9500607418', 'ajith12@gmail.com', 1, 30, 95, 847, 20, 'hrwew', 654321, 'shivan', 1, 30, 95, 847, 'hgfer', 'fdffd', '$2b$10$5PYFdTy7YA6aJUhXm6Xsiu1C3qJ4i1wwi2txV3IH/tUFY79STOiTq', '', 1),
(69, 'Ajith Ayyappan', '9585465617', 'ayyappan@gmail.com', 1, 30, 95, 847, 20, 'Tirunelveli', 654321, 'shivan', 1, 30, 95, 847, 'hhh', 'CFC', '$2b$10$Fy8TB3AGxfNizQ/CYBsPZO8.yE5AIubcJS8i5Fr6cPMwZFgMSOBU2', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `communitytemple`
--

CREATE TABLE `communitytemple` (
  `id` int(11) NOT NULL,
  `groupName` varchar(100) DEFAULT NULL,
  `about_description` text DEFAULT NULL,
  `about_image` text DEFAULT NULL,
  `news_description` text DEFAULT NULL,
  `news_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `communitytemple`
--

INSERT INTO `communitytemple` (`id`, `groupName`, `about_description`, `about_image`, `news_description`, `news_image`) VALUES
(12, 'suresh123group', 'sivanandhaa', '/public/community_temple_image/isha.jpg', 'asdfghjkljhgfdsaSDFGHJKLKJHGFDSASDFGHJHASDFGHJKL;ASDFGHJKL;SDFGHJKLSDFGHNJMXCVBNM,ZXCVBNM,ASDFGHJKLQWERTYUIOAZSDFGHJKLZXCVBNMSDFGHJKERTYUIASDFGHJKZXCVBNMSDFGHJKQWERTYUIOASDFGHJXCVB', '/public/community_temple_image/download.png'),
(13, 'commAdmin', 'Am rohit group', '/public/community_temple_image/pexels-charl-durand-6488410.jpg', 'awawawawa', '/public/community_temple_image/pexels-jimmy-liao-11551309.jpg'),
(15, 'CFC', 'test 1e', '/public/community_temple_image/f18fd695ca655cadc316449ef41d4f5b.jpg', 'newv des', '/public/community_temple_image/20519631.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `communitytemplefunctions`
--

CREATE TABLE `communitytemplefunctions` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `date` varchar(200) DEFAULT NULL,
  `time` varchar(200) DEFAULT NULL,
  `place` varchar(200) DEFAULT NULL,
  `groupName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `communitytemplefunctions`
--

INSERT INTO `communitytemplefunctions` (`id`, `name`, `image`, `date`, `time`, `place`, `groupName`) VALUES
(1, 'car festivald', '/public/community_temple_image/20519631.jpg', 'Sat Jun 22 2024 00:00:00 GMT+0530 (India Standard Time)', 'Sat Jun 29 2024 05:25:27 GMT+0530 (India Standard Time)', 'tirunelveli', 'CFC'),
(2, 'course demo', '/public/community_temple_image/Capture.PNG', 'Tue Jul 09 2024 00:00:00 GMT+0530 (India Standard Time)', 'Mon Jul 01 2024 04:35:18 GMT+0530 (India Standard Time)', 'tirunelveli', 'CFC');

-- --------------------------------------------------------

--
-- Table structure for table `communitytempleincharge`
--

CREATE TABLE `communitytempleincharge` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `groupName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `communitytempleincharge`
--

INSERT INTO `communitytempleincharge` (`id`, `name`, `image`, `description`, `role`, `phone_number`, `groupName`) VALUES
(0, 'Anoop', '/public/community_temple_image/f18fd695ca655cadc316449ef41d4f5b.jpg', 'dd', 'head', '8765432111', 'CFC'),
(3, 'xxcvbnm', '/public/community_temple_image/ramesh sir.jpg', 'xcvbnm,wertyuioZxcvbnm', 'head', '6374646481', 'suresh123group');

-- --------------------------------------------------------

--
-- Table structure for table `communityuser`
--

CREATE TABLE `communityuser` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `nickName` varchar(255) NOT NULL,
  `designation` text NOT NULL,
  `description` text NOT NULL,
  `phone_number` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `email_id` varchar(255) NOT NULL,
  `sex` varchar(20) NOT NULL,
  `country` int(11) NOT NULL,
  `state` int(11) NOT NULL,
  `district` int(11) NOT NULL,
  `city` int(11) NOT NULL,
  `area` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `pincode` int(11) DEFAULT NULL,
  `groupName` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `familyName` varchar(20) NOT NULL,
  `rejectReasonByAdmin` varchar(255) DEFAULT NULL,
  `family_list` varchar(5000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `communityuser`
--

INSERT INTO `communityuser` (`id`, `name`, `nickName`, `designation`, `description`, `phone_number`, `email_id`, `sex`, `country`, `state`, `district`, `city`, `area`, `address`, `pincode`, `groupName`, `password`, `status`, `familyName`, `rejectReasonByAdmin`, `family_list`) VALUES
(43, 'Karunya', 'kaaru', 'Architecture', 'Elder daughter to the family', '9171022205', 'daranibibu55@gmail.com', 'Female', 1, 30, 233, 818, 67, 'no-25/33 selvavinayagar kovil street,V.O.C nagar,pallavaram', 600043, 'sri vari ', '$2b$10$zYSzRIprITZzTJsC3SudMeKT.fxLq.cWu3pDi5fLN/H2xvevK80/6', 0, 'venky boss', NULL, NULL),
(64, 'bbbb', 'aaaaaaaaaa', 'Architecture', 'swswsw', '8765432109', 'daranibibu50@gmail.com', 'Female', 1, 30, 61, 763, 57, 'swdswsw', 677667, 'sri vari ', '$2b$10$17YQqkQUBvGTv6Cuw.2Q6.GobK2rhcEYlytAQYHrg98wPI3jXAOGO', 0, 'wow familyy', NULL, NULL),
(65, 'jayathurga', 'daaru', 'software', 'great', '8072645582', 'daranibibu55@gmail.com', 'Female', 1, 30, 384, 800, 5, '1,theekathir,Thathaneri,Madurai', 625001, 'om shanthi', '$2b$10$uLmjZvMD8mvRvb6/ejJH8OnSlkAPx9JOQTh28BJwLK3GdczCDPWOW', 0, 'babuji', NULL, NULL),
(91, 'durga', 'daaru', 'daughter', 'great', '9345251734', 'jayathurgababu25@gmail.com', 'Female', 1, 30, 233, 818, 156, '1,mettu street,pallavaram', 600068, 'commAdmin', '$2b$10$QjkIikEHL3U4rsWGE2BWCenNGFXTqXJubz7QtYHbAVd./5zMl0HdG', 0, 'sri vari', NULL, NULL),
(100, 'jayathurga', 'daaru', 'saddsgfd', 'sdsg', '7871020924', 'daranibibu55@gmail.com', 'Female', 1, 30, 233, 818, 156, 'sadsgfd', 600006, 'commAdmin', '$2b$10$rk9AS0xfaFTYN9ajdWluFuv4RiTqYfYTBeZWHaF8RhKiYZSF5bTva', 0, 'poojaro', NULL, NULL),
(101, 'Kumar', 'Kumar', 'Panchayat Head', 'created by our fam member', '9876543210', 'kumar@gmail.com', 'Male', 1, 30, 61, 763, 57, 'street, Area , Thiruchuli', 613245, 'My Kuladeivam', '$2b$10$YyTPCyg0e345dO5Ri88ixucZ.kL5K3Yf3Ku2.v9RPY7dKen7LVFqS', 0, 'Family', NULL, NULL),
(102, 'skjbdfv', 'sddjbs', 'sfvkjvbdfkj', 'kjdnskdsvjdf', '98765', 'kumar@gmail.com', 'Male', 1, 30, 61, 763, 57, 'street, Area , Thiruchuli', 613245, 'My Kuladeivam', '$2b$10$9Xi4.mr6NicZRvd.b2sb8uCbWZHe4U866oMPA.Ejz8Zcpjkz9.1UW', 0, 'ssffbdg', NULL, NULL),
(111, 'Subburaj ', 'Raj', 'Automation Testing', 'HU', '8754944013', 'subbucse96@gmail.com', 'Male', 1, 30, 89, 850, 52, '11/114 south Street vellanguli 627426', 627426, 'Testing', '$2b$10$mIIWT1HlSP27HCiMDlXjReZV/1plpW/a.3/ZafazfpHDXoLJ0EK2m', 0, 'Farmer', NULL, NULL),
(123, 'Subburaj', 'Raj', 'Automation Testing', 'Hi', '08754944013', 'subbucse96@gmail.com', 'Male', 1, 30, 61, 763, 57, '11/114 south Street vellanguli 627426', 627426, 'Testing', '$2b$10$1TvXXTFGAyMX2h0zV791Led3lFUVoKT3CRMxWbTAL6dHqC7G3DYpy', 0, 'sss', NULL, NULL),
(124, 'Ajith', 'Aj', 'asdd', 'asdffff', '9658965885', 'ajith@gmail.com', 'Male', 1, 30, 61, 1258, 192, 'srnm', 23456, 'commAdmin', '$2b$10$2TcvFtHXOXct87SYFTg4cOXXDLQWngicfcD0nlmp2DRQuS4Iw0GVu', 0, 'asdf', NULL, NULL),
(135, 'Subburaj', 'Raj', 'Automation Testing', 'Find Job', '87654532', 'subbucse96@gmail.com', 'Male', 1, 30, 61, 763, 57, '11/114 south Street vellanguli 627426', 627426, 'commAdmin', '$2b$10$j7CCHqkVq9xji2HaRY1UjuiaztFdocG6Dm4D3q4eRsiaNvJc43Aui', 0, 'Subburaj Family', NULL, NULL),
(136, 'Ajth', 'Anu', 'cdasd', 'ddsdds', '9500607417', 'as@gmail.cm', 'Male', 1, 30, 95, 847, 239, 'heddd', 654321, 'fdffd', '$2b$10$yQkmetfNJnsdMl4LsxpGIu3m9wQeJSwcAE3Ar/3GeQNSMe3MzRrbO', 0, 'shivan', NULL, NULL),
(138, 'Ajith', 'Ak', 'iyer', 'dsdssd', '9500607487', 'as@gmail.com', 'Male', 1, 30, 95, 847, 20, 'nnnn', 543211, 'CFC', '$2b$10$SakzrnRKSFUkPklK.YhQheV0O/FIndgi4Pj7BpMzjWDPENM99iXNK', 1, 'Ayyappan', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `constantname`
--

CREATE TABLE `constantname` (
  `constantName_id` int(11) NOT NULL,
  `constant_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `constantname`
--

INSERT INTO `constantname` (`constantName_id`, `constant_name`) VALUES
(1, 'entranceTicket'),
(2, 'allowedMarriage'),
(3, 'annadhanamAvailable'),
(4, 'Training'),
(5, 'ControlledBy');

-- --------------------------------------------------------

--
-- Table structure for table `constants`
--

CREATE TABLE `constants` (
  `constant_id` int(11) NOT NULL,
  `constant_value` varchar(45) DEFAULT NULL,
  `constant_key` varchar(45) DEFAULT NULL,
  `constantName_id` varchar(45) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `constants`
--

INSERT INTO `constants` (`constant_id`, `constant_value`, `constant_key`, `constantName_id`, `created_date`, `created_by`, `is_active`) VALUES
(1, 'Yes', '1', '1', '2020-06-19', 0, 0),
(2, 'No', '2', '1', '2020-06-19', 0, 0),
(3, 'Yes', '1', '2', '2020-06-19', 0, 0),
(4, 'No', '2', '2', '2020-06-19', 0, 0),
(5, 'Yes', '1', '3', '2020-06-19', 0, 0),
(6, 'No', '2', '3', '2020-06-19', 0, 0),
(7, 'Public', '1', '5', '2020-06-19', 0, 0),
(8, 'Goverment', '2', '5', '2020-06-19', 0, 0),
(9, 'Others', '3', '5', '2020-06-19', 0, 0),
(10, 'Yes', '1', '4', '2020-06-19', 0, 0),
(11, 'No', '2', '4', '2020-06-19', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

CREATE TABLE `contactus` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `second_name` varchar(255) DEFAULT NULL,
  `temple_name` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `anything_else` text DEFAULT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `contactus`
--

INSERT INTO `contactus` (`id`, `first_name`, `second_name`, `temple_name`, `email_id`, `phone_number`, `anything_else`, `created_date`, `is_active`) VALUES
(1, 'test', 'king', 'krishna temple', 'test@gmail.com', '7689054321', 'nothing', '2022-02-01 05:06:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `country_code` varchar(3) DEFAULT NULL,
  `code` varchar(5) DEFAULT NULL,
  `country` varchar(150) DEFAULT NULL,
  `search_key` varchar(150) DEFAULT NULL,
  `position` tinyint(1) NOT NULL DEFAULT 1,
  `active` varchar(20) DEFAULT NULL,
  `created_at` varchar(20) DEFAULT NULL,
  `updated_at` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `country_code`, `code`, `country`, `search_key`, `position`, `active`, `created_at`, `updated_at`) VALUES
(1, 'IN', '+++91', 'India', 'India', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(3, 'DZ', '+213', 'Algeria', 'Algeria', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(4, 'AS', '+684', 'American Samoa', 'American Samoa', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(5, 'AD', '+376', 'Andorra', 'Andorra', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(6, 'AO', '+244', 'Angola', 'Angola', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(7, 'AI', '+264', 'Anguilla', 'Anguilla', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(8, 'AQ', '+672', 'Antarctica', 'Antarctica', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(9, 'AG', '+268', 'Antigua And Barbuda', 'Antigua And Barbuda', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(10, 'AR', '+54', 'Argentina', 'Argentina', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(11, 'AM', '+374', 'Armenia', 'Armenia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(12, 'AW', '+297', 'Aruba', 'Aruba', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(13, 'AU', '+61', 'Australia', 'Australia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(14, 'AT', '+43', 'Austria', 'Austria', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(15, 'AZ', '+994', 'Azerbaijan', 'Azerbaijan', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(16, 'BS', '+242', 'Bahamas The', 'Bahamas The', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(17, 'BH', '+973', 'Bahrain', 'البحرين', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(18, 'BD', '+880', 'Bangladesh', 'Bangladesh', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(19, 'BB', '+246', 'Barbados', 'Barbados', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(20, 'BY', '+375', 'Belarus', 'Belarus', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(21, 'BE', '+32', 'Belgium', 'Belgium', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(22, 'BZ', '+501', 'Belize', 'Belize', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(23, 'BJ', '+229', 'Benin', 'Benin', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(24, 'BM', '+441', 'Bermuda', 'Bermuda', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(25, 'BT', '+975', 'Bhutan', 'Bhutan', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(26, 'BO', '+591', 'Bolivia', 'Bolivia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(27, 'BA', '+387', 'Bosnia and Herzegovina', 'Bosnia and Herzegovina', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(28, 'BW', '+267', 'Botswana', 'Botswana', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(29, 'BV', '+284', 'Bouvet Island', 'Bouvet Island', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(30, 'BR', '+55', 'Brazil', 'Brazil', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(31, 'IO', NULL, 'British Indian Ocean Territory', 'British Indian Ocean Territory', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(32, 'BN', '+673', 'Brunei', 'Brunei', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(33, 'BG', '+359', 'Bulgaria', 'Bulgaria', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(34, 'BF', '+226', 'Burkina Faso', 'Burkina Faso', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(35, 'BI', '+257', 'Burundi', 'Burundi', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(36, 'KH', '+855', 'Cambodia', 'Cambodia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(37, 'CM', '+237', 'Cameroon', 'Cameroon', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(38, 'CA', '+1', 'Canada', 'Canada', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(39, 'CV', '+238', 'Cape Verde', 'Cape Verde', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(40, 'KY', '+345', 'Cayman Islands', 'Cayman Islands', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(41, 'CF', NULL, 'Central African Republic', 'Central African Republic', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(42, 'TD', '+235', 'Chad', 'Chad', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(43, 'CL', '+56', 'Chile', 'Chile', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(44, 'CN', '+86', 'China', 'China', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(45, 'CX', '+61', 'Christmas Island', 'Christmas Island', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(46, 'CC', '+61', 'Cocos (Keeling) Islands', 'Cocos (Keeling) Islands', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(47, 'CO', '+57', 'Colombia', 'Colombia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(48, 'KM', '+269', 'Comoros', 'Comoros', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(49, 'CG', '+242', 'Republic Of The Congo', 'Republic Of The Congo', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(50, 'CD', '+243', 'Democratic Republic Of The Congo', 'Democratic Republic Of The Congo', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(51, 'CK', '+682', 'Cook Islands', 'Cook Islands', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(52, 'CR', '+506', 'Costa Rica', 'Costa Rica', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(53, 'CI', NULL, 'Cote D\'Ivoire (Ivory Coast)', 'Cote D\'Ivoire (Ivory Coast)', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(54, 'HR', '+385', 'Croatia (Hrvatska)', 'Croatia (Hrvatska)', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(55, 'CU', '+53', 'Cuba', 'Cuba', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(56, 'CY', '+357', 'Cyprus', 'Cyprus', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(57, 'CZ', '+420', 'Czech Republic', 'Czech Republic', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(58, 'DK', '+45', 'Denmark', 'Denmark', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(59, 'DJ', '+253', 'Djibouti', 'Djibouti', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(60, 'DM', '+767', 'Dominica', 'Dominica', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(61, 'DO', '+809', 'Dominican Republic', 'Dominican Republic', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(62, 'TP', '+670', 'East Timor', 'East Timor', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(63, 'EC', '+593', 'Ecuador', 'Ecuador', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(64, 'EG', '+20', 'Egypt', 'Egypt', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(65, 'SV', '+503', 'El Salvador', 'El Salvador', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(66, 'GQ', '+240', 'Equatorial Guinea', 'Equatorial Guinea', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(67, 'ER', '+291', 'Eritrea', 'Eritrea', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(68, 'EE', '+372', 'Estonia', 'Estonia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(69, 'ET', '+251', 'Ethiopia', 'Ethiopia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(70, 'XA', NULL, 'External Territories of Australia', 'External Territories of Australia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(71, 'FK', '+500', 'Falkland Islands', 'Falkland Islands', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(72, 'FO', '+298', 'Faroe Islands', 'Faroe Islands', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(73, 'FJ', '+679', 'Fiji Islands', 'Fiji Islands', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(74, 'FI', '+358', 'Finland', 'Finland', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(75, 'FR', '+33', 'France', 'France', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(76, 'GF', NULL, 'French Guiana', 'French Guiana', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(77, 'PF', '+689', 'French Polynesia', 'French Polynesia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(78, 'TF', NULL, 'French Southern Territories', 'French Southern Territories', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(79, 'GA', '+241', 'Gabon', 'Gabon', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(80, 'GM', '+220', 'Gambia The', 'Gambia The', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(81, 'GE', '+995', 'Georgia', 'Georgia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(82, 'DE', '+49', 'Germany', 'Germany', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(83, 'GH', '+233', 'Ghana', 'Ghana', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(84, 'GI', '+350', 'Gibraltar', 'Gibraltar', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(85, 'GR', '+30', 'Greece', 'Greece', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(86, 'GL', '+299', 'Greenland', 'Greenland', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(87, 'GD', '+473', 'Grenada', 'Grenada', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(88, 'GP', NULL, 'Guadeloupe', 'Guadeloupe', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(89, 'GU', '+671', 'Guam', 'Guam', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(90, 'GT', '+502', 'Guatemala', 'Guatemala', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(91, 'XU', '+1481', 'Guernsey and Alderney', 'Guernsey and Alderney', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(92, 'GN', '+224', 'Guinea', 'Guinea', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(93, 'GW', '+245', 'Guinea-Bissau', 'Guinea-Bissau', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(94, 'GY', '+592', 'Guyana', 'Guyana', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(95, 'HT', '+509', 'Haiti', 'Haiti', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(96, 'HM', NULL, 'Heard and McDonald Islands', 'Heard and McDonald Islands', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(97, 'HN', '+504', 'Honduras', 'Honduras', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(98, 'HK', '+852', 'Hong Kong S.A.R.', 'Hong Kong S.A.R.', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(99, 'HU', '+36', 'Hungary', 'Hungary', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(100, 'IS', '+354', 'Iceland', 'Iceland', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(101, 'AF', '+93', 'Afghanistan', 'Afghanistan', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(102, 'ID', '+62', 'Indonesia', 'Indonesia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(103, 'IR', '+98', 'Iran', 'Iran', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(104, 'IQ', '+964', 'Iraq', 'العراق', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(105, 'IE', '+353', 'Ireland', 'Ireland', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(106, 'IL', '+972', 'Israel', 'Israel', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(107, 'IT', '+39', 'Italy', 'Italy', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(108, 'JM', '+876', 'Jamaica', 'Jamaica', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(109, 'JP', '+81', 'Japan', 'Japan', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(110, 'XJ', '+1534', 'Jersey', 'Jersey', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(111, 'JO', '+962', 'Jordan', 'Jordan', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(112, 'KZ', '+7', 'Kazakhstan', 'Kazakhstan', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(113, 'KE', '+254', 'Kenya', 'Kenya', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(114, 'KI', '+686', 'Kiribati', 'Kiribati', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(115, 'KP', NULL, 'Korea North', 'Korea North', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(116, 'KR', NULL, 'Korea South', 'Korea South', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(117, 'KW', '+965', 'Kuwait', 'الكويت', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(118, 'KG', '+996', 'Kyrgyzstan', 'Kyrgyzstan', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(119, 'LA', '+856', 'Laos', 'Laos', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(120, 'LV', '+371', 'Latvia', 'Latvia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(121, 'LB', '+961', 'Lebanon', 'Lebanon', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(122, 'LS', '+266', 'Lesotho', 'Lesotho', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(123, 'LR', '+231', 'Liberia', 'Liberia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(124, 'LY', '+218', 'Libya', 'Libya', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(125, 'LI', '+423', 'Liechtenstein', 'Liechtenstein', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(126, 'LT', '+370', 'Lithuania', 'Lithuania', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(127, 'LU', '+352', 'Luxembourg', 'Luxembourg', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(128, 'MO', '+853', 'Macau S.A.R.', 'Macau S.A.R.', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(129, 'MK', '+389', 'Macedonia', 'Macedonia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(130, 'MG', '+261', 'Madagascar', 'Madagascar', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(131, 'MW', '+265', 'Malawi', 'Malawi', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(132, 'MY', '+60', 'Malaysia', 'Malaysia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(133, 'MV', '+960', 'Maldives', 'Maldives', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(134, 'ML', '+223', 'Mali', 'Mali', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(135, 'MT', '+356', 'Malta', 'Malta', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(136, 'XM', '+1624', 'Man (Isle of)', 'Man (Isle of)', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(137, 'MH', '+692', 'Marshall Islands', 'Marshall Islands', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(138, 'MQ', NULL, 'Martinique', 'Martinique', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(139, 'MR', '+222', 'Mauritania', 'Mauritania', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(140, 'MU', '+230', 'Mauritius', 'Mauritius', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(141, 'YT', '+262', 'Mayotte', 'Mayotte', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(142, 'MX', '+52', 'Mexico', 'Mexico', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(143, 'FM', '+691', 'Micronesia', 'Micronesia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(144, 'MD', '+373', 'Moldova', 'Moldova', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(145, 'MC', '+377', 'Monaco', 'Monaco', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(146, 'MN', '+976', 'Mongolia', 'Mongolia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(147, 'MS', '+664', 'Montserrat', 'Montserrat', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(148, 'MA', '+212', 'Morocco', 'Morocco', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(149, 'MZ', '+258', 'Mozambique', 'Mozambique', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(150, 'MM', NULL, 'Myanmar', 'Myanmar', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(151, 'NA', '+264', 'Namibia', 'Namibia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(152, 'NR', '+674', 'Nauru', 'Nauru', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(153, 'NP', '+977', 'Nepal', 'Nepal', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(154, 'AN', '+599', 'Netherlands Antilles', 'Netherlands Antilles', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(155, 'NL', '+31', 'Netherlands The', 'Netherlands The', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(156, 'NC', '+687', 'New Caledonia', 'New Caledonia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(157, 'NZ', '+64', 'New Zealand', 'New Zealand', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(158, 'NI', '+505', 'Nicaragua', 'Nicaragua', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(159, 'NE', '+227', 'Niger', 'Niger', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(160, 'NG', '+234', 'Nigeria', 'Nigeria', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(161, 'NU', '+683', 'Niue', 'Niue', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(162, 'NF', NULL, 'Norfolk Island', 'Norfolk Island', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(163, 'MP', '+670', 'Northern Mariana Islands', 'Northern Mariana Islands', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(164, 'NO', '+47', 'Norway', 'Norway', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(165, 'OM', '+968', 'Oman', 'Oman', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(166, 'PK', '+92', 'Pakistan', 'Pakistan', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(167, 'PW', '+680', 'Palau', 'Palau', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(168, 'PS', '+970', 'Palestinian Territory Occupied', 'Palestinian Territory Occupied', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(169, 'PA', '+507', 'Panama', 'Panama', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(170, 'PG', '+675', 'Papua new Guinea', 'Papua new Guinea', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(171, 'PY', '+595', 'Paraguay', 'Paraguay', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(172, 'PE', '+51', 'Peru', 'Peru', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(173, 'PH', '+63', 'Philippines', 'Philippines', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(174, 'PN', '+64', 'Pitcairn Island', 'Pitcairn Island', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(175, 'PL', '+48', 'Poland', 'Poland', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(176, 'PT', '+351', 'Portugal', 'Portugal', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(177, 'PR', '+787', 'Puerto Rico', 'Puerto Rico', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(178, 'QA', '+974', 'Qatar', 'دولة قطر', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(179, 'RE', '+40', 'Reunion', 'Reunion', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(180, 'RO', '+40', 'Romania', 'Romania', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(181, 'RU', '+7', 'Russia', 'Russia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(182, 'RW', '+250', 'Rwanda', 'Rwanda', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(183, 'SH', NULL, 'Saint Helena', 'Saint Helena', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(184, 'KN', NULL, 'Saint Kitts And Nevis', 'Saint Kitts And Nevis', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(185, 'LC', NULL, 'Saint Lucia', 'Saint Lucia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(186, 'PM', NULL, 'Saint Pierre and Miquelon', 'Saint Pierre and Miquelon', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(187, 'VC', NULL, 'Saint Vincent And The Grenadines', 'Saint Vincent And The Grenadines', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(188, 'WS', '+685', 'Samoa', 'Samoa', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(189, 'SM', '+378', 'San Marino', 'San Marino', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(190, 'ST', '+239', 'Sao Tome and Principe', 'Sao Tome and Principe', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(191, 'SA', '+966', 'Saudi Arabia', 'المملكة العربية السعودية', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(192, 'SN', '+221', 'Senegal', 'Senegal', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(193, 'RS', '+381', 'Serbia', 'Serbia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(194, 'SC', '+248', 'Seychelles', 'Seychelles', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(195, 'SL', '+232', 'Sierra Leone', 'Sierra Leone', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(196, 'SG', '+65', 'Singapore', 'Singapore', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(197, 'SK', '+421', 'Slovakia', 'Slovakia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(198, 'SI', '+386', 'Slovenia', 'Slovenia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(199, 'XG', NULL, 'Smaller Territories of the UK', 'Smaller Territories of the UK', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(200, 'SB', '+677', 'Solomon Islands', 'Solomon Islands', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(201, 'SO', '+252', 'Somalia', 'Somalia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(202, 'ZA', '+27', 'South Africa', 'South Africa', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(203, 'GS', '+500', 'South Georgia', 'South Georgia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(204, 'SS', '+211', 'South Sudan', 'South Sudan', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(205, 'ES', '+34', 'Spain', 'Spain', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(206, 'LK', '+94', 'Sri Lanka', 'Sri Lanka', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(207, 'SD', '+249', 'Sudan', 'Sudan', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(208, 'SR', NULL, 'Suriname', 'Suriname', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(209, 'SJ', '+47', 'Svalbard And Jan Mayen Islands', 'Svalbard And Jan Mayen Islands', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(210, 'SZ', '+268', 'Swaziland', 'Swaziland', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(211, 'SE', '+46', 'Sweden', 'Sweden', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(212, 'CH', '+41', 'Switzerland', 'Switzerland', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(213, 'SY', '+963', 'Syria', 'Syria', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(214, 'TW', '+886', 'Taiwan', 'Taiwan', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(215, 'TJ', '+992', 'Tajikistan', 'Tajikistan', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(216, 'TZ', '+255', 'Tanzania', 'Tanzania', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(217, 'TH', '+66', 'Thailand', 'Thailand', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(218, 'TG', '+228', 'Togo', 'Togo', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(219, 'TK', '+690', 'Tokelau', 'Tokelau', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(220, 'TO', '+676', 'Tonga', 'Tonga', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(221, 'TT', '+868', 'Trinidad And Tobago', 'Trinidad And Tobago', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(222, 'TN', '+216', 'Tunisia', 'Tunisia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(223, 'TR', '+90', 'Turkey', 'Turkey', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(224, 'TM', '+993', 'Turkmenistan', 'Turkmenistan', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(225, 'TC', NULL, 'Turks And Caicos Islands', 'Turks And Caicos Islands', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(226, 'TV', '+688', 'Tuvalu', 'Tuvalu', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(227, 'UG', '+256', 'Uganda', 'Uganda', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(228, 'UA', '+380', 'Ukraine', 'Ukraine', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(229, 'AE', '+971', 'United Arab Emirates', 'الإمارات العربية المتحدة', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(230, 'GB', '+44', 'United Kingdom', 'United Kingdom', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(231, 'US', '+1', 'United States', 'United States', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(232, 'UM', '\n+1', 'United States Minor Outlying Islands', 'United States Minor Outlying Islands', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(233, 'UY', '+598', 'Uruguay', 'Uruguay', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(234, 'UZ', '+996', 'Uzbekistan', 'Uzbekistan', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(235, 'VU', '+678', 'Vanuatu', 'Vanuatu', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(236, 'VA', '+379', 'Vatican City State (Holy See)', 'Vatican City State (Holy See)', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(237, 'VE', '+58', 'Venezuela', 'Venezuela', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(238, 'VN', '+84', 'Vietnam', 'Vietnam', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(239, 'VG', NULL, 'Virgin Islands (British)', 'Virgin Islands (British)', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(240, 'VI', '+340', 'Virgin Islands (US)', 'Virgin Islands (US)', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(241, 'WF', '+681', 'Wallis And Futuna Islands', 'Wallis And Futuna Islands', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(242, 'EH', '+212', 'Western Sahara', 'Western Sahara', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(243, 'YE', '+967', 'Yemen', 'Yemen', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(244, 'YU', '+38', 'Yugoslavia', 'Yugoslavia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(245, 'ZM', '+260', 'Zambia', 'Zambia', 1, '1', '2018-01-04 11:18:21', '2018-01-04 11:18:21'),
(246, 'ZW', '+263', 'Zimbabwe', 'Zimbabwe', 1, '1', '2018-01-04 11:18:21', '2020-04-03 10:25:20'),
(260, 'NIL', '+6565', 'aaaaaaaaaaaaa', 'aaaaaaaaaaaaa', 1, '1', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `districts`
--

CREATE TABLE `districts` (
  `id` int(10) UNSIGNED NOT NULL,
  `country_id` int(10) UNSIGNED NOT NULL,
  `state_id` int(10) UNSIGNED NOT NULL,
  `district` varchar(255) NOT NULL,
  `search_key` varchar(255) NOT NULL,
  `position` tinyint(4) NOT NULL,
  `active` tinyint(4) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `districts`
--

INSERT INTO `districts` (`id`, `country_id`, `state_id`, `district`, `search_key`, `position`, `active`, `created_at`, `updated_at`) VALUES
(10, 1, 23, 'Aizawl1', '', 0, 0, '2020-04-23 10:30:20', '2020-04-23 10:30:20'),
(11, 0, 28, 'Ajmer', '', 0, 0, '2020-04-23 10:30:44', '2020-04-23 10:30:44'),
(12, 0, 20, 'Akola', '', 0, 0, '2020-04-23 10:31:42', '2020-04-23 10:31:42'),
(13, 0, 17, 'Alappuzha', '', 0, 0, '2020-04-23 10:32:19', '2020-04-23 10:32:19'),
(14, 0, 33, 'Aligarh', '', 0, 0, '2020-04-23 10:32:48', '2020-04-23 10:32:48'),
(16, 0, 36, 'Almora', '', 0, 0, '2020-04-23 10:34:40', '2020-04-23 10:34:40'),
(17, 1, 5, 'bilarhi', '', 0, 1, '2020-04-23 10:35:07', '2020-04-23 10:35:07'),
(18, 0, 12, 'Ambala', '', 0, 0, '2020-04-23 10:35:44', '2020-04-23 10:35:44'),
(19, 0, 33, 'Ambedkar Nagar', '', 0, 0, '2020-04-23 11:05:32', '2020-04-23 11:05:32'),
(20, 1, 13, 'Amravati', '', 0, 1, '2020-04-23 11:06:08', '2020-04-23 11:06:08'),
(21, 0, 10, 'Amreli', '', 0, 0, '2020-04-23 11:06:32', '2020-04-23 11:06:32'),
(22, 0, 27, 'Amritsar', '', 0, 0, '2020-04-23 11:09:08', '2020-04-23 11:09:08'),
(23, 0, 33, 'Amroha', '', 0, 0, '2020-04-23 11:09:31', '2020-04-23 11:09:31'),
(24, 0, 10, 'Anand', '', 0, 0, '2020-04-23 11:09:53', '2020-04-23 11:09:53'),
(25, 0, 2, 'Anantapur', '', 0, 0, '2020-04-23 11:10:13', '2020-04-23 11:10:13'),
(26, 0, 14, 'Anantnag', '', 0, 0, '2020-04-23 11:10:36', '2020-04-23 11:10:36'),
(27, 0, 5, 'Araria', '', 0, 0, '2020-04-23 11:10:56', '2020-04-23 11:10:56'),
(28, 0, 28, 'Aravalli', '', 0, 0, '2020-04-23 11:11:14', '2020-04-23 11:11:14'),
(29, 0, 19, 'Ashoknagar', '', 0, 0, '2020-04-23 11:11:39', '2020-04-23 11:11:39'),
(30, 0, 33, 'Auraiya', '', 0, 0, '2020-04-23 11:11:57', '2020-04-23 11:11:57'),
(31, 0, 20, 'Aurangabad', '', 0, 0, '2020-04-23 11:12:18', '2020-04-23 11:12:18'),
(32, 0, 20, 'Aurangabad', '', 0, 0, '2020-04-23 11:12:19', '2020-04-23 11:12:19'),
(33, 0, 33, 'Ayodhya', '', 0, 0, '2020-04-23 11:12:45', '2020-04-23 11:12:45'),
(34, 0, 33, 'Azamgarh', '', 0, 0, '2020-04-23 11:13:08', '2020-04-23 11:13:08'),
(35, 0, 33, 'Badaun', '', 0, 0, '2020-04-23 11:13:36', '2020-04-23 11:13:36'),
(36, 0, 2, 'Kadappa', '', 0, 0, '2020-04-23 11:14:56', '2020-04-23 11:14:56'),
(37, 0, 20, 'Yavatmal', '', 0, 0, '2020-04-23 11:15:56', '2020-04-23 11:15:56'),
(38, 0, 16, 'Bagalkot', '', 0, 0, '2020-04-23 11:16:19', '2020-04-23 11:16:19'),
(39, 0, 12, 'Yamunanagar', '', 0, 0, '2020-04-23 11:16:23', '2020-04-23 11:16:23'),
(40, 0, 36, 'Bageshwar', '', 0, 0, '2020-04-23 11:16:48', '2020-04-23 11:16:48'),
(41, 0, 16, 'Yadagiri', '', 0, 0, '2020-04-23 11:16:53', '2020-04-23 11:16:53'),
(42, 0, 33, 'Baghpat', '', 0, 0, '2020-04-23 11:17:10', '2020-04-23 11:17:10'),
(43, 0, 31, 'Yadadri Bhuvanagiri', '', 0, 0, '2020-04-23 11:17:19', '2020-04-23 11:17:19'),
(44, 0, 33, 'Bahraich', '', 0, 0, '2020-04-23 11:17:29', '2020-04-23 11:17:29'),
(45, 0, 32, 'West Tripura', '', 0, 0, '2020-04-23 11:17:48', '2020-04-23 11:17:48'),
(46, 0, 15, 'West Singhbhum', '', 0, 0, '2020-04-23 11:18:17', '2020-04-23 11:18:17'),
(47, 0, 19, 'Balaghat', '', 0, 0, '2020-04-23 11:18:33', '2020-04-23 11:18:33'),
(48, 0, 2, 'West Godavari', '', 0, 0, '2020-04-23 11:18:44', '2020-04-23 11:18:44'),
(49, 0, 25, 'Balangir', '', 0, 0, '2020-04-23 11:19:01', '2020-04-23 11:19:01'),
(50, 0, 22, 'West Garo Hills', '', 0, 0, '2020-04-23 11:19:15', '2020-04-23 11:19:15'),
(51, 0, 25, 'Balasore', '', 0, 0, '2020-04-23 11:19:21', '2020-04-23 11:19:21'),
(52, 0, 5, 'West Champaran', '', 0, 0, '2020-04-23 11:19:39', '2020-04-23 11:19:39'),
(53, 0, 16, 'Ballari', '', 0, 0, '2020-04-23 11:20:07', '2020-04-23 11:20:07'),
(54, 0, 20, 'Wardha', '', 0, 0, '2020-04-23 11:20:07', '2020-04-23 11:20:07'),
(55, 0, 31, 'Warangal', '', 0, 0, '2020-04-23 11:20:32', '2020-04-23 11:20:32'),
(56, 0, 16, 'Bellary', '', 0, 0, '2020-04-23 11:20:39', '2020-04-23 11:20:39'),
(57, 0, 31, 'Wanaparthy', '', 0, 0, '2020-04-23 11:20:59', '2020-04-23 11:20:59'),
(58, 0, 33, 'Ballia', '', 0, 0, '2020-04-23 11:21:02', '2020-04-23 11:21:02'),
(59, 0, 2, 'Vizianagaram', '', 0, 0, '2020-04-23 11:21:23', '2020-04-23 11:21:23'),
(60, 0, 2, 'Visakhapatnam', '', 0, 0, '2020-04-23 11:21:44', '2020-04-23 11:21:44'),
(61, 0, 30, 'Virudhunagar', '', 0, 0, '2020-04-23 11:22:04', '2020-04-23 11:22:04'),
(62, 0, 30, 'Villupuram', '', 0, 0, '2020-04-23 11:22:28', '2020-04-23 11:22:28'),
(63, 0, 31, 'Vikarabad', '', 0, 0, '2020-04-23 11:22:50', '2020-04-23 11:22:50'),
(64, 0, 19, 'Vidisha', '', 0, 0, '2020-04-23 11:23:08', '2020-04-23 11:23:08'),
(65, 0, 30, 'Vellore', '', 0, 0, '2020-04-23 11:23:28', '2020-04-23 11:23:28'),
(66, 0, 33, 'Varanasi', '', 0, 0, '2020-04-23 11:24:06', '2020-04-23 11:24:06'),
(67, 0, 10, 'Valsad', '', 0, 0, '2020-04-23 11:24:28', '2020-04-23 11:24:28'),
(68, 0, 5, 'Vaishali', '', 0, 0, '2020-04-23 11:24:47', '2020-04-23 11:24:47'),
(69, 0, 10, 'Vadodara', '', 0, 0, '2020-04-23 11:25:09', '2020-04-23 11:25:09'),
(70, 0, 36, 'Uttarkashi', '', 0, 0, '2020-04-23 11:25:36', '2020-04-23 11:25:36'),
(71, 0, 16, 'Uttara Kannada', '', 0, 0, '2020-04-23 11:25:56', '2020-04-23 11:25:56'),
(72, 0, 35, 'Uttar Dinajpur', '', 0, 0, '2020-04-23 11:26:17', '2020-04-23 11:26:17'),
(73, 0, 33, 'Unnao', '', 0, 0, '2020-04-23 11:26:45', '2020-04-23 11:26:45'),
(74, 0, 21, 'Ukhrul', '', 0, 0, '2020-04-23 11:27:06', '2020-04-23 11:27:06'),
(75, 0, 19, 'Ujjain', '', 0, 0, '2020-04-23 11:27:32', '2020-04-23 11:27:32'),
(76, 0, 16, 'Udupi', '', 0, 0, '2020-04-23 11:27:54', '2020-04-23 11:27:54'),
(77, 0, 14, 'Udhampur', '', 0, 0, '2020-04-23 11:28:19', '2020-04-23 11:28:19'),
(78, 0, 36, 'Udham Singh Nagar', '', 0, 0, '2020-04-23 11:28:44', '2020-04-23 11:28:44'),
(79, 0, 28, 'Udaipur', '', 0, 0, '2020-04-23 11:30:02', '2020-04-23 11:30:02'),
(80, 0, 16, 'Tumkur', '', 0, 0, '2020-04-23 11:30:22', '2020-04-23 11:30:22'),
(81, 0, 16, 'Tumakuru', '', 0, 0, '2020-04-23 11:30:45', '2020-04-23 11:30:45'),
(82, 0, 16, 'Tulu Nadu', '', 0, 0, '2020-04-23 11:31:15', '2020-04-23 11:31:15'),
(83, 0, 28, 'Tonk', '', 0, 0, '2020-04-23 11:32:06', '2020-04-23 11:32:06'),
(84, 0, 30, 'Tiruvarur', '', 0, 0, '2020-04-23 11:32:24', '2020-04-23 11:32:24'),
(85, 0, 30, 'Tiruvannamalai', '', 0, 0, '2020-04-23 11:32:46', '2020-04-23 11:32:46'),
(86, 0, 30, 'Tiruvallur', '', 0, 0, '2020-04-23 11:33:05', '2020-04-23 11:33:05'),
(87, 0, 30, 'Tiruppur', '', 0, 0, '2020-04-23 11:33:20', '2020-04-23 11:33:20'),
(88, 0, 30, 'Tirupattur', '', 0, 0, '2020-04-23 11:33:55', '2020-04-23 11:33:55'),
(89, 0, 30, 'Tirunelveli', '', 0, 0, '2020-04-23 11:34:13', '2020-04-23 11:34:13'),
(90, 0, 30, 'Tiruchirappalli', '', 0, 0, '2020-04-23 11:34:29', '2020-04-23 11:34:29'),
(91, 0, 6, 'Balod', '', 0, 0, '2020-04-23 11:34:37', '2020-04-23 11:34:37'),
(92, 0, 4, 'Tinsukia', '', 0, 0, '2020-04-23 11:34:49', '2020-04-23 11:34:49'),
(93, 0, 19, 'Tikamgarh', '', 0, 0, '2020-04-23 11:35:07', '2020-04-23 11:35:07'),
(94, 0, 17, 'Thrissur', '', 0, 0, '2020-04-23 11:35:27', '2020-04-23 11:35:27'),
(95, 0, 30, 'Thoothukudi', '', 0, 0, '2020-04-23 11:35:45', '2020-04-23 11:35:45'),
(96, 0, 17, 'Thiruvananthapuram', '', 0, 0, '2020-04-23 11:36:31', '2020-04-23 11:36:31'),
(97, 0, 30, 'Theni', '', 0, 0, '2020-04-23 11:37:04', '2020-04-23 11:37:04'),
(98, 0, 30, 'Thanjavur', '', 0, 0, '2020-04-23 11:37:22', '2020-04-23 11:37:22'),
(99, 0, 20, 'Thane', '', 0, 0, '2020-04-23 11:37:42', '2020-04-23 11:37:42'),
(100, 0, 30, 'Tenkasi', '', 0, 0, '2020-04-23 11:38:04', '2020-04-23 11:38:04'),
(101, 0, 36, 'Tehri Garhwal', '', 0, 0, '2020-04-23 11:38:30', '2020-04-23 11:38:30'),
(102, 0, 27, 'Tarn Taran', '', 0, 0, '2020-04-23 11:38:48', '2020-04-23 11:38:48'),
(103, 0, 31, 'Suryapet', '', 0, 0, '2020-04-23 11:39:07', '2020-04-23 11:39:07'),
(104, 0, 6, 'Baloda Bazar', '', 0, 0, '2020-04-23 11:39:11', '2020-04-23 11:39:11'),
(105, 0, 33, 'Balrampur', '', 0, 0, '2020-04-23 11:40:45', '2020-04-23 11:40:45'),
(106, 0, 6, 'Surguja', '', 0, 0, '2020-04-23 11:40:58', '2020-04-23 11:40:58'),
(107, 0, 10, 'Banaskantha', '', 0, 0, '2020-04-23 11:41:03', '2020-04-23 11:41:03'),
(108, 0, 33, 'Banda', '', 0, 0, '2020-04-23 11:41:21', '2020-04-23 11:41:21'),
(109, 0, 10, 'Surendranagar', '', 0, 0, '2020-04-23 11:41:23', '2020-04-23 11:41:23'),
(110, 0, 16, 'Bangalore', '', 0, 0, '2020-04-23 11:41:34', '2020-04-23 11:41:34'),
(111, 0, 10, 'Surat', '', 0, 0, '2020-04-23 11:41:40', '2020-04-23 11:41:40'),
(112, 0, 5, 'Supaul', '', 0, 0, '2020-04-23 11:42:02', '2020-04-23 11:42:02'),
(114, 0, 25, 'Sundergarh', '', 0, 0, '2020-04-23 11:42:28', '2020-04-23 11:42:28'),
(116, 0, 33, 'Sultanpur', '', 0, 0, '2020-04-23 11:42:51', '2020-04-23 11:42:51'),
(117, 0, 2, 'Srikakulam', '', 0, 0, '2020-04-23 11:43:14', '2020-04-23 11:43:14'),
(118, 0, 35, 'Bankura', '', 0, 0, '2020-04-23 11:43:15', '2020-04-23 11:43:15'),
(119, 0, 27, 'Sri Muktsar Sahib', '', 0, 0, '2020-04-23 11:43:45', '2020-04-23 11:43:45'),
(120, 0, 28, 'Sri Ganganagar', '', 0, 0, '2020-04-23 11:44:04', '2020-04-23 11:44:04'),
(121, 0, 32, 'South Tripura', '', 0, 0, '2020-04-23 11:44:25', '2020-04-23 11:44:25'),
(122, 0, 9, 'South Goa', '', 0, 0, '2020-04-23 11:44:47', '2020-04-23 11:44:47'),
(123, 0, 35, 'South 24 Parganas', '', 0, 0, '2020-04-23 11:45:09', '2020-04-23 11:45:09'),
(124, 0, 4, 'Sonitpur', '', 0, 0, '2020-04-23 11:45:30', '2020-04-23 11:45:30'),
(125, 0, 12, 'Sonipat', '', 0, 0, '2020-04-23 11:45:49', '2020-04-23 11:45:49'),
(126, 0, 33, 'Sonbhadra', '', 0, 0, '2020-04-23 11:46:08', '2020-04-23 11:46:08'),
(127, 0, 20, 'Solapur', '', 0, 0, '2020-04-23 11:46:27', '2020-04-23 11:46:27'),
(128, 0, 13, 'Solan', '', 0, 0, '2020-04-23 11:46:46', '2020-04-23 11:46:46'),
(129, 0, 5, 'Siwan', '', 0, 0, '2020-04-23 11:47:05', '2020-04-23 11:47:05'),
(130, 0, 30, 'Sivagangai', '', 0, 0, '2020-04-23 11:47:24', '2020-04-23 11:47:24'),
(131, 0, 33, 'Sitapur', '', 0, 0, '2020-04-23 11:47:48', '2020-04-23 11:47:48'),
(132, 0, 5, 'Sitamarhi', '', 0, 0, '2020-04-23 11:48:09', '2020-04-23 11:48:09'),
(133, 0, 12, 'Sirsa', '', 0, 0, '2020-04-23 11:48:26', '2020-04-23 11:48:26'),
(134, 0, 28, 'Sirohi', '', 0, 0, '2020-04-23 11:48:44', '2020-04-23 11:48:44'),
(135, 0, 28, 'Banswara', '', 0, 0, '2020-04-23 11:49:05', '2020-04-23 11:49:05'),
(136, 0, 31, 'Sircilla', '', 0, 0, '2020-04-23 11:49:07', '2020-04-23 11:49:07'),
(137, 0, 19, 'Singrauli', '', 0, 0, '2020-04-23 11:49:24', '2020-04-23 11:49:24'),
(138, 0, 33, 'Barabanki', '', 0, 0, '2020-04-23 11:49:24', '2020-04-23 11:49:24'),
(139, 0, 14, 'Baramulla', '', 0, 0, '2020-04-23 11:49:43', '2020-04-23 11:49:43'),
(140, 0, 28, 'Baran', '', 0, 0, '2020-04-23 11:50:00', '2020-04-23 11:50:00'),
(141, 0, 35, 'Bardhaman', '', 0, 0, '2020-04-23 11:50:20', '2020-04-23 11:50:20'),
(142, 0, 28, 'Sikar', '', 0, 0, '2020-04-23 11:50:27', '2020-04-23 11:50:27'),
(143, 0, 33, 'Bareilly', '', 0, 0, '2020-04-23 11:50:37', '2020-04-23 11:50:37'),
(144, 0, 19, 'Sidhi', '', 0, 0, '2020-04-23 11:50:46', '2020-04-23 11:50:46'),
(145, 0, 25, 'Bargarh', '', 0, 0, '2020-04-23 11:50:56', '2020-04-23 11:50:56'),
(146, 0, 31, 'Siddipet', '', 0, 0, '2020-04-23 11:51:05', '2020-04-23 11:51:05'),
(147, 0, 4, 'Sibsagar', '', 0, 0, '2020-04-23 11:51:25', '2020-04-23 11:51:25'),
(148, 0, 19, 'Shivpuri', '', 0, 0, '2020-04-23 11:51:39', '2020-04-23 11:51:39'),
(149, 0, 16, 'Shivamogga', '', 0, 0, '2020-04-23 11:51:55', '2020-04-23 11:51:55'),
(150, 0, 16, 'Shimoga', '', 0, 0, '2020-04-23 11:52:19', '2020-04-23 11:52:19'),
(151, 0, 13, 'Shimla', '', 0, 0, '2020-04-23 11:52:37', '2020-04-23 11:52:37'),
(152, 0, 28, 'Barmer', '', 0, 0, '2020-04-23 11:52:50', '2020-04-23 11:52:50'),
(153, 0, 19, 'Sheopur', '', 0, 0, '2020-04-23 11:52:54', '2020-04-23 11:52:54'),
(154, 0, 5, 'Sheikhpura', '', 0, 0, '2020-04-23 11:53:12', '2020-04-23 11:53:12'),
(155, 0, 27, 'Barnala', '', 0, 0, '2020-04-23 11:53:15', '2020-04-23 11:53:15'),
(156, 0, 33, 'Shamli', '', 0, 0, '2020-04-23 11:53:34', '2020-04-23 11:53:34'),
(157, 0, 19, 'Barwani', '', 0, 0, '2020-04-23 11:53:53', '2020-04-23 11:53:53'),
(158, 0, 19, 'Shajapur', '', 0, 0, '2020-04-23 11:53:53', '2020-04-23 11:53:53'),
(159, 0, 6, 'Bastar', '', 0, 0, '2020-04-23 11:54:16', '2020-04-23 11:54:16'),
(160, 0, 33, 'Shahjahanpur', '', 0, 0, '2020-04-23 11:54:20', '2020-04-23 11:54:20'),
(161, 0, 33, 'Basti', '', 0, 0, '2020-04-23 11:54:32', '2020-04-23 11:54:32'),
(162, 0, 19, 'Shahdol', '', 0, 0, '2020-04-23 11:54:37', '2020-04-23 11:54:37'),
(163, 0, 27, 'Bathinda', '', 0, 0, '2020-04-23 11:54:47', '2020-04-23 11:54:47'),
(164, 0, 20, 'Beed', '', 0, 0, '2020-04-23 11:55:04', '2020-04-23 11:55:04'),
(165, 0, 5, 'Begusarai', '', 0, 0, '2020-04-23 11:55:18', '2020-04-23 11:55:18'),
(166, 0, 16, 'Belagavi', '', 0, 0, '2020-04-23 11:55:43', '2020-04-23 11:55:43'),
(167, 0, 16, 'Belgaum', '', 0, 0, '2020-04-23 11:56:17', '2020-04-23 11:56:17'),
(168, 0, 19, 'Betul', '', 0, 0, '2020-04-23 11:56:45', '2020-04-23 11:56:45'),
(169, 0, 12, 'Shahabad', '', 0, 0, '2020-04-23 11:56:47', '2020-04-23 11:56:47'),
(170, 0, 23, 'Serchhip', '', 0, 0, '2020-04-23 11:57:11', '2020-04-23 11:57:11'),
(171, 0, 15, 'Seraikela-Kharsawan', '', 0, 0, '2020-04-23 11:57:59', '2020-04-23 11:57:59'),
(172, 0, 19, 'Seoni', '', 0, 0, '2020-04-23 11:58:21', '2020-04-23 11:58:21'),
(173, 0, 19, 'Sehore', '', 0, 0, '2020-04-23 11:58:37', '2020-04-23 11:58:37'),
(174, 0, 33, 'Bhadohi', '', 0, 0, '2020-04-23 11:58:39', '2020-04-23 11:58:39'),
(175, 0, 28, 'Sawai Madhopur', '', 0, 0, '2020-04-23 11:58:55', '2020-04-23 11:58:55'),
(176, 0, 16, 'Bhadradri', '', 0, 0, '2020-04-23 11:59:04', '2020-04-23 11:59:04'),
(177, 0, 19, 'Satna', '', 0, 0, '2020-04-23 11:59:30', '2020-04-23 11:59:30'),
(178, 0, 20, 'Satara', '', 0, 0, '2020-04-23 11:59:47', '2020-04-23 11:59:47'),
(179, 0, 27, 'Sangrur', '', 0, 0, '2020-04-23 12:00:05', '2020-04-23 12:00:05'),
(180, 0, 20, 'Sangli', '', 0, 0, '2020-04-23 12:00:23', '2020-04-23 12:00:23'),
(181, 0, 31, 'Sangareddy', '', 0, 0, '2020-04-23 12:00:43', '2020-04-23 12:00:43'),
(182, 0, 33, 'Sambhal', '', 0, 0, '2020-04-23 12:01:08', '2020-04-23 12:01:08'),
(183, 0, 25, 'Sambalpur', '', 0, 0, '2020-04-23 12:01:36', '2020-04-23 12:01:36'),
(184, 0, 5, 'Samastipur', '', 0, 0, '2020-04-23 12:01:54', '2020-04-23 12:01:54'),
(185, 0, 16, 'Bhadradri Kothagudem', '', 0, 0, '2020-04-23 12:01:57', '2020-04-23 12:01:57'),
(186, 0, 25, 'Bhadrak', '', 0, 0, '2020-04-23 12:02:18', '2020-04-23 12:02:18'),
(187, 0, 5, 'Bhagalpur', '', 0, 0, '2020-04-23 12:02:42', '2020-04-23 12:02:42'),
(188, 0, 30, 'Salem', '', 0, 0, '2020-04-23 12:02:46', '2020-04-23 12:02:46'),
(189, 0, 20, 'Bhandara', '', 0, 0, '2020-04-23 12:03:05', '2020-04-23 12:03:05'),
(190, 0, 27, 'Sahibzada Ajit Singh Nagar', '', 0, 0, '2020-04-23 12:03:08', '2020-04-23 12:03:08'),
(191, 0, 15, 'Sahibganj', '', 0, 0, '2020-04-23 12:03:29', '2020-04-23 12:03:29'),
(192, 0, 28, 'Bharathpur', '', 0, 0, '2020-04-23 12:03:38', '2020-04-23 12:03:38'),
(193, 0, 5, 'Saharsa', '', 0, 0, '2020-04-23 12:03:45', '2020-04-23 12:03:45'),
(194, 0, 33, 'Saharanpur', '', 0, 0, '2020-04-23 12:04:03', '2020-04-23 12:04:03'),
(195, 0, 28, 'Bharatpur', '', 0, 0, '2020-04-23 12:04:04', '2020-04-23 12:04:04'),
(196, 0, 19, 'Sagar', '', 0, 0, '2020-04-23 12:04:22', '2020-04-23 12:04:22'),
(197, 0, 10, 'Bharuch', '', 0, 0, '2020-04-23 12:04:24', '2020-04-23 12:04:24'),
(198, 0, 10, 'Sabarkantha', '', 0, 0, '2020-04-23 12:04:40', '2020-04-23 12:04:40'),
(199, 0, 10, 'Bhavnagar', '', 0, 0, '2020-04-23 12:04:42', '2020-04-23 12:04:42'),
(200, 0, 28, 'Bhilwara', '', 0, 0, '2020-04-23 12:04:59', '2020-04-23 12:04:59'),
(201, 0, 27, 'Rupnagar', '', 0, 0, '2020-04-23 12:05:12', '2020-04-23 12:05:12'),
(202, 0, 19, 'Bhind', '', 0, 0, '2020-04-23 12:05:16', '2020-04-23 12:05:16'),
(203, 0, 12, 'Bhiwani', '', 0, 0, '2020-04-23 12:05:32', '2020-04-23 12:05:32'),
(204, 0, 5, 'Bhojpur', '', 0, 0, '2020-04-23 12:05:47', '2020-04-23 12:05:47'),
(205, 0, 19, 'Bhopal', '', 0, 0, '2020-04-23 12:06:08', '2020-04-23 12:06:08'),
(206, 0, 19, 'Bhrhanput', '', 0, 0, '2020-04-23 12:06:58', '2020-04-23 12:06:58'),
(207, 0, 16, 'Bidar', '', 0, 0, '2020-04-23 12:07:48', '2020-04-23 12:07:48'),
(208, 0, 5, 'Bihar', '', 0, 0, '2020-04-23 12:09:00', '2020-04-23 12:09:00'),
(209, 0, 16, 'Bijapur', '', 0, 0, '2020-04-23 12:09:24', '2020-04-23 12:09:24'),
(210, 0, 33, 'Bijnor', '', 0, 0, '2020-04-23 12:09:45', '2020-04-23 12:09:45'),
(211, 0, 28, 'Bikaer', '', 0, 0, '2020-04-23 12:10:18', '2020-04-23 12:10:18'),
(212, 0, 28, 'Bikaner', '', 0, 0, '2020-04-23 12:11:05', '2020-04-23 12:11:05'),
(213, 0, 6, 'Bilaspur', '', 0, 0, '2020-04-23 12:11:22', '2020-04-23 12:11:22'),
(214, 0, 35, 'Birbhum', '', 0, 0, '2020-04-23 12:11:38', '2020-04-23 12:11:38'),
(215, 0, 35, 'Bishnupur', '', 0, 0, '2020-04-23 12:11:56', '2020-04-23 12:11:56'),
(216, 0, 15, 'Bokaro', '', 0, 0, '2020-04-23 12:13:17', '2020-04-23 12:13:17'),
(217, 0, 4, 'Bongaigaon', '', 0, 0, '2020-04-23 12:13:36', '2020-04-23 12:13:36'),
(218, 0, 10, 'Botad', '', 0, 0, '2020-04-23 12:13:50', '2020-04-23 12:13:50'),
(219, 0, 33, 'Budaun', '', 0, 0, '2020-04-23 12:14:04', '2020-04-23 12:14:04'),
(220, 0, 33, 'Bulandshahr', '', 0, 0, '2020-04-23 12:14:22', '2020-04-23 12:14:22'),
(221, 0, 20, 'Buldana', '', 0, 0, '2020-04-23 12:14:46', '2020-04-23 12:14:46'),
(222, 0, 28, 'Bundi', '', 0, 0, '2020-04-23 12:15:05', '2020-04-23 12:15:05'),
(223, 0, 5, 'Buxar', '', 0, 0, '2020-04-23 12:15:21', '2020-04-23 12:15:21'),
(224, 0, 4, 'Cachar', '', 0, 0, '2020-04-23 12:15:38', '2020-04-23 12:15:38'),
(225, 0, 16, 'Chamarajanagar', '', 0, 0, '2020-04-23 12:15:57', '2020-04-23 12:15:57'),
(226, 0, 36, 'Chamoli', '', 0, 0, '2020-04-23 12:16:17', '2020-04-23 12:16:17'),
(227, 0, 36, 'Champawat', '', 0, 0, '2020-04-23 12:16:58', '2020-04-23 12:16:58'),
(228, 0, 33, 'Chandauli', '', 0, 0, '2020-04-23 12:18:53', '2020-04-23 12:18:53'),
(229, 0, 33, 'Chandpur', '', 0, 0, '2020-04-23 12:19:09', '2020-04-23 12:19:09'),
(230, 0, 20, 'Chandrapur', '', 0, 0, '2020-04-23 12:19:25', '2020-04-23 12:19:25'),
(231, 0, 5, 'Chapra', '', 0, 0, '2020-04-23 12:19:42', '2020-04-23 12:19:42'),
(232, 0, 12, 'Charkhi Dadri', '', 0, 0, '2020-04-23 12:20:04', '2020-04-23 12:20:04'),
(233, 0, 30, 'Chengalpattu', '', 0, 0, '2020-04-23 12:20:16', '2020-04-23 12:20:16'),
(234, 0, 30, 'Chennai', '', 0, 0, '2020-04-23 12:20:47', '2020-04-23 12:20:47'),
(235, 0, 19, 'Chhatarpur', '', 0, 0, '2020-04-23 12:21:06', '2020-04-23 12:21:06'),
(236, 0, 33, 'Chhattisgarh', '', 0, 0, '2020-04-23 12:21:27', '2020-04-23 12:21:27'),
(237, 0, 19, 'Chhindwara', '', 0, 0, '2020-04-23 12:21:45', '2020-04-23 12:21:45'),
(238, 0, 16, 'Chikballapur', '', 0, 0, '2020-04-23 12:22:01', '2020-04-23 12:22:01'),
(239, 0, 16, 'Chikkaballapur', '', 0, 0, '2020-04-23 12:22:20', '2020-04-23 12:22:20'),
(240, 0, 16, 'Chikkamagaluru', '', 0, 0, '2020-04-23 12:22:36', '2020-04-23 12:22:36'),
(241, 0, 20, 'Chinchwad', '', 0, 0, '2020-04-23 12:23:00', '2020-04-23 12:23:00'),
(242, 0, 16, 'Chitradurga', '', 0, 0, '2020-04-23 12:23:14', '2020-04-23 12:23:14'),
(243, 0, 19, 'Chitrakoot', '', 0, 0, '2020-04-23 12:23:29', '2020-04-23 12:23:29'),
(244, 0, 2, 'Chittoor', '', 0, 0, '2020-04-23 12:23:45', '2020-04-23 12:23:45'),
(245, 0, 28, 'Chittorgarh', '', 0, 0, '2020-04-23 12:23:59', '2020-04-23 12:23:59'),
(246, 0, 21, 'Churachandpur', '', 0, 0, '2020-04-23 12:24:14', '2020-04-23 12:24:14'),
(247, 0, 28, 'Churu', '', 0, 0, '2020-04-23 12:24:31', '2020-04-23 12:24:31'),
(248, 0, 30, 'Coimbatore', '', 0, 0, '2020-04-23 12:24:40', '2020-04-23 12:24:40'),
(249, 0, 35, 'Cooch Behar', '', 0, 0, '2020-04-23 12:24:56', '2020-04-23 12:24:56'),
(250, 0, 30, 'Cuddalore', '', 0, 0, '2020-04-23 12:25:21', '2020-04-23 12:25:21'),
(251, 0, 2, 'Cuddapah', '', 0, 0, '2020-04-23 12:25:35', '2020-04-23 12:25:35'),
(252, 0, 25, 'Cuttack', '', 0, 0, '2020-04-23 12:25:50', '2020-04-23 12:25:50'),
(253, 0, 10, 'Dadra and Nagar Haveli', '', 0, 0, '2020-04-23 12:26:15', '2020-04-23 12:26:15'),
(254, 0, 33, 'Dadri', '', 0, 0, '2020-04-23 12:26:32', '2020-04-23 12:26:32'),
(255, 0, 35, 'Dakshin Dinajpur', '', 0, 0, '2020-04-23 12:26:47', '2020-04-23 12:26:47'),
(256, 0, 16, 'Dakshina Kannada', '', 0, 0, '2020-04-23 12:27:10', '2020-04-23 12:27:10'),
(257, 0, 10, 'Daman', '', 0, 0, '2020-04-23 12:27:37', '2020-04-23 12:27:37'),
(258, 0, 19, 'Damoh', '', 0, 0, '2020-04-23 12:27:51', '2020-04-23 12:27:51'),
(259, 0, 5, 'Darbhanga', '', 0, 0, '2020-04-23 12:28:14', '2020-04-23 12:28:14'),
(260, 0, 35, 'Darjeeling', '', 0, 0, '2020-04-23 12:28:33', '2020-04-23 12:28:33'),
(261, 0, 19, 'Datia', '', 0, 0, '2020-04-23 12:29:01', '2020-04-23 12:29:01'),
(262, 0, 28, 'Dausa', '', 0, 0, '2020-04-23 12:29:17', '2020-04-23 12:29:17'),
(263, 0, 16, 'Davanagere', '', 0, 0, '2020-04-23 12:29:34', '2020-04-23 12:29:34'),
(264, 0, 36, 'Dehradun', '', 0, 0, '2020-04-23 12:29:53', '2020-04-23 12:29:53'),
(265, 0, 8, 'Delhi', '', 0, 0, '2020-04-23 12:30:03', '2020-04-23 12:30:03'),
(266, 0, 15, 'Deoghar', '', 0, 0, '2020-04-23 12:30:19', '2020-04-23 12:30:19'),
(267, 0, 33, 'Deoria', '', 0, 0, '2020-04-23 12:30:43', '2020-04-23 12:30:43'),
(268, 0, 19, 'Dewas', '', 0, 0, '2020-04-23 12:31:01', '2020-04-23 12:31:01'),
(269, 0, 6, 'Dhamtari', '', 0, 0, '2020-04-23 12:31:16', '2020-04-23 12:31:16'),
(270, 0, 15, 'Dhanbad', '', 0, 0, '2020-04-23 12:31:33', '2020-04-23 12:31:33'),
(271, 0, 19, 'Dhar', '', 0, 0, '2020-04-23 12:31:55', '2020-04-23 12:31:55'),
(272, 0, 30, 'Dharmapuri', '', 0, 0, '2020-04-23 12:32:09', '2020-04-23 12:32:09'),
(273, 0, 16, 'Dharwad', '', 0, 0, '2020-04-23 12:32:51', '2020-04-23 12:32:51'),
(274, 0, 36, 'Rudraprayag', '', 0, 0, '2020-04-23 12:33:31', '2020-04-23 12:33:31'),
(275, 0, 5, 'Rohtas', '', 0, 0, '2020-04-23 12:33:51', '2020-04-23 12:33:51'),
(276, 0, 12, 'Rohtak', '', 0, 0, '2020-04-23 12:34:06', '2020-04-23 12:34:06'),
(277, 0, 16, 'Dharwad', '', 0, 0, '2020-04-23 12:34:11', '2020-04-23 12:34:11'),
(278, 0, 12, 'Rewari', '', 0, 0, '2020-04-23 12:34:26', '2020-04-23 12:34:26'),
(279, 0, 25, 'Dhenkanal', '', 0, 0, '2020-04-23 12:34:31', '2020-04-23 12:34:31'),
(280, 0, 28, 'Dholpur', '', 0, 0, '2020-04-23 12:34:46', '2020-04-23 12:34:46'),
(281, 0, 19, 'Rewa', '', 0, 0, '2020-04-23 12:34:49', '2020-04-23 12:34:49'),
(282, 0, 25, 'Rayagada', '', 0, 0, '2020-04-23 12:35:08', '2020-04-23 12:35:08'),
(283, 0, 28, 'Dholur', '', 0, 0, '2020-04-23 12:35:14', '2020-04-23 12:35:14'),
(284, 0, 20, 'Ratnagiri', '', 0, 0, '2020-04-23 12:35:25', '2020-04-23 12:35:25'),
(285, 0, 4, 'Dhubri', '', 0, 0, '2020-04-23 12:35:33', '2020-04-23 12:35:33'),
(286, 0, 19, 'Ratlam', '', 0, 0, '2020-04-23 12:35:49', '2020-04-23 12:35:49'),
(287, 0, 20, 'Dhule', '', 0, 0, '2020-04-23 12:35:53', '2020-04-23 12:35:53'),
(288, 0, 30, 'Ranipet', '', 0, 0, '2020-04-23 12:36:06', '2020-04-23 12:36:06'),
(289, 0, 4, 'Dibrugarh', '', 0, 0, '2020-04-23 12:36:08', '2020-04-23 12:36:08'),
(290, 0, 24, 'Dimapur', '', 0, 0, '2020-04-23 12:36:25', '2020-04-23 12:36:25'),
(292, 0, 31, 'Ranga Reddy', '', 0, 0, '2020-04-23 12:37:19', '2020-04-23 12:37:19'),
(293, 0, 15, 'Ranchi', '', 0, 0, '2020-04-23 12:37:39', '2020-04-23 12:37:39'),
(294, 0, 7, 'Diu', '', 0, 0, '2020-04-23 12:37:55', '2020-04-23 12:37:55'),
(295, 0, 33, 'Rampur', '', 0, 0, '2020-04-23 12:37:57', '2020-04-23 12:37:57'),
(296, 0, 15, 'Ramgarh', '', 0, 0, '2020-04-23 12:38:20', '2020-04-23 12:38:20'),
(297, 0, 10, 'Dohad', '', 0, 0, '2020-04-23 12:38:21', '2020-04-23 12:38:21'),
(298, 0, 15, 'Dumka', '', 0, 0, '2020-04-23 12:38:36', '2020-04-23 12:38:36'),
(299, 0, 30, 'Ramanathapuram', '', 0, 0, '2020-04-23 12:38:36', '2020-04-23 12:38:36'),
(300, 0, 28, 'Dungarpur', '', 0, 0, '2020-04-23 12:38:49', '2020-04-23 12:38:49'),
(301, 0, 16, 'Ramanagara', '', 0, 0, '2020-04-23 12:38:52', '2020-04-23 12:38:52'),
(302, 0, 6, 'Durg', '', 0, 0, '2020-04-23 12:39:07', '2020-04-23 12:39:07'),
(303, 0, 28, 'Rajsamand', '', 0, 0, '2020-04-23 12:39:18', '2020-04-23 12:39:18'),
(304, 0, 6, 'Rajnandgaon', '', 0, 0, '2020-04-23 12:39:42', '2020-04-23 12:39:42'),
(305, 0, 10, 'Rajkot', '', 0, 0, '2020-04-23 12:40:09', '2020-04-23 12:40:09'),
(306, 0, 19, 'Rajgarh', '', 0, 0, '2020-04-23 12:40:32', '2020-04-23 12:40:32'),
(307, 0, 6, 'Raipur', '', 0, 0, '2020-04-23 12:40:51', '2020-04-23 12:40:51'),
(308, 0, 20, 'Raigad', '', 0, 0, '2020-04-23 12:41:07', '2020-04-23 12:41:07'),
(309, 0, 16, 'Raichur', '', 0, 0, '2020-04-23 12:41:24', '2020-04-23 12:41:24'),
(310, 0, 33, 'Raebareli', '', 0, 0, '2020-04-23 12:41:43', '2020-04-23 12:41:43'),
(311, 0, 35, 'Purulia', '', 0, 0, '2020-04-23 12:42:30', '2020-04-23 12:42:30'),
(312, 0, 25, 'Puri', '', 0, 0, '2020-04-23 12:42:54', '2020-04-23 12:42:54'),
(313, 0, 15, 'Purbi Singhbhum', '', 0, 0, '2020-04-23 12:43:13', '2020-04-23 12:43:13'),
(314, 0, 35, 'Purba Medinipur', '', 0, 0, '2020-04-23 12:44:36', '2020-04-23 12:44:36'),
(315, 0, 35, 'Paschim Bardhaman', '', 0, 0, '2020-04-23 12:45:09', '2020-04-23 12:45:09'),
(316, 0, 20, 'Parbhani', '', 0, 0, '2020-04-23 12:45:32', '2020-04-23 12:45:32'),
(317, 0, 2, 'Papum Pare', '', 0, 0, '2020-04-23 12:45:48', '2020-04-23 12:45:48'),
(318, 0, 19, 'Panna', '', 0, 0, '2020-04-23 12:46:08', '2020-04-23 12:46:08'),
(319, 0, 12, 'Panipat', '', 0, 0, '2020-04-23 12:46:22', '2020-04-23 12:46:22'),
(320, 0, 10, 'Panchmahal', '', 0, 0, '2020-04-23 12:46:40', '2020-04-23 12:46:40'),
(321, 0, 12, 'Panchkula', '', 0, 0, '2020-04-23 12:46:56', '2020-04-23 12:46:56'),
(322, 0, 12, 'Palwal', '', 0, 0, '2020-04-23 12:47:10', '2020-04-23 12:47:10'),
(323, 0, 28, 'Pali', '', 0, 0, '2020-04-23 12:47:27', '2020-04-23 12:47:27'),
(324, 0, 20, 'Palghar', '', 0, 0, '2020-04-23 12:47:54', '2020-04-23 12:47:54'),
(325, 0, 15, 'Palamu', '', 0, 0, '2020-04-23 12:48:17', '2020-04-23 12:48:17'),
(326, 0, 17, 'Palakkad', '', 0, 0, '2020-04-23 12:48:33', '2020-04-23 12:48:33'),
(327, 0, 20, 'Osmanabad', '', 0, 0, '2020-04-23 12:49:37', '2020-04-23 12:49:37'),
(328, 0, 35, 'North 24 Parganas', '', 0, 0, '2020-04-23 12:49:54', '2020-04-23 12:49:54'),
(329, 0, 31, 'Nizamabad', '', 0, 0, '2020-04-23 12:50:15', '2020-04-23 12:50:15'),
(330, 0, 31, 'Nirmal', '', 0, 0, '2020-04-23 12:50:31', '2020-04-23 12:50:31'),
(331, 0, 30, 'Nilgiris', '', 0, 0, '2020-04-23 12:50:46', '2020-04-23 12:50:46'),
(332, 0, 2, 'Nellore', '', 0, 0, '2020-04-23 12:51:04', '2020-04-23 12:51:04'),
(333, 0, 19, 'Neemuch', '', 0, 0, '2020-04-23 12:51:22', '2020-04-23 12:51:22'),
(334, 0, 5, 'Nawada', '', 0, 0, '2020-04-23 12:51:37', '2020-04-23 12:51:37'),
(335, 0, 10, 'Navsari', '', 0, 0, '2020-04-23 12:52:00', '2020-04-23 12:52:00'),
(336, 0, 20, 'Nashik', '', 0, 0, '2020-04-23 12:52:24', '2020-04-23 12:52:24'),
(337, 0, 19, 'Narsimhapur', '', 0, 0, '2020-04-23 12:52:41', '2020-04-23 12:52:41'),
(338, 0, 20, 'Nandurbar', '', 0, 0, '2020-04-23 12:52:58', '2020-04-23 12:52:58'),
(339, 0, 20, 'Nanded', '', 0, 0, '2020-04-23 12:53:18', '2020-04-23 12:53:18'),
(340, 0, 30, 'Namakkal', '', 0, 0, '2020-04-23 12:53:35', '2020-04-23 12:53:35'),
(341, 0, 31, 'Nalgonda', '', 0, 0, '2020-04-23 12:53:55', '2020-04-23 12:53:55'),
(342, 0, 36, 'Nainital', '', 0, 0, '2020-04-23 12:54:14', '2020-04-23 12:54:14'),
(343, 0, 20, 'Nagpur', '', 0, 0, '2020-04-23 12:54:31', '2020-04-23 12:54:31'),
(344, 0, 19, 'Nagda', '', 0, 0, '2020-04-23 12:54:55', '2020-04-23 12:54:55'),
(345, 0, 28, 'Nagaur', '', 0, 0, '2020-04-23 12:55:16', '2020-04-23 12:55:16'),
(346, 0, 30, 'Nagapattinam', '', 0, 0, '2020-04-23 12:55:31', '2020-04-23 12:55:31'),
(347, 0, 4, 'Nagaon', '', 0, 0, '2020-04-23 12:56:14', '2020-04-23 12:56:14'),
(348, 0, 35, 'Nadia', '', 0, 0, '2020-04-23 12:56:32', '2020-04-23 12:56:32'),
(349, 0, 16, 'Mysore', '', 0, 0, '2020-04-23 12:56:53', '2020-04-23 12:56:53'),
(350, 0, 5, 'Muzaffarpur', '', 0, 0, '2020-04-23 12:57:12', '2020-04-23 12:57:12'),
(351, 0, 33, 'Muzaffarnagar', '', 0, 0, '2020-04-23 12:57:30', '2020-04-23 12:57:30'),
(352, 0, 35, 'Murshidabad', '', 0, 0, '2020-04-23 12:57:50', '2020-04-23 12:57:50'),
(353, 0, 5, 'Munger', '', 0, 0, '2020-04-23 12:58:06', '2020-04-23 12:58:06'),
(354, 0, 20, 'Mumbai', '', 0, 0, '2020-04-23 12:58:26', '2020-04-23 12:58:26'),
(355, 0, 27, 'Muktsar', '', 0, 0, '2020-04-23 12:58:44', '2020-04-23 12:58:44'),
(356, 0, 19, 'Morena', '', 0, 0, '2020-04-23 12:59:03', '2020-04-23 12:59:03'),
(357, 0, 10, 'Morbi', '', 0, 0, '2020-04-23 12:59:25', '2020-04-23 12:59:25'),
(358, 0, 33, 'Moradabad', '', 0, 0, '2020-04-23 12:59:43', '2020-04-23 12:59:43'),
(359, 0, 27, 'Mohali', '', 0, 0, '2020-04-23 13:00:00', '2020-04-23 13:00:00'),
(360, 0, 27, 'Moga', '', 0, 0, '2020-04-23 13:00:43', '2020-04-23 13:00:43'),
(361, 0, 33, 'Mirzapur', '', 0, 0, '2020-04-23 13:01:01', '2020-04-23 13:01:01'),
(362, 0, 10, 'Mehsana', '', 0, 0, '2020-04-23 13:01:22', '2020-04-23 13:01:22'),
(363, 0, 33, 'Meerut', '', 0, 0, '2020-04-23 13:01:38', '2020-04-23 13:01:38'),
(364, 0, 31, 'Medchal-Malkajgiri', '', 0, 0, '2020-04-23 13:01:57', '2020-04-23 13:01:57'),
(365, 0, 25, 'Mayurbhanj', '', 0, 0, '2020-04-23 13:02:53', '2020-04-23 13:02:53'),
(366, 0, 33, 'Mau', '', 0, 0, '2020-04-23 13:03:09', '2020-04-23 13:03:09'),
(367, 0, 33, 'Mathura', '', 0, 0, '2020-04-23 13:03:27', '2020-04-23 13:03:27'),
(368, 0, 10, 'Mansa', '', 0, 0, '2020-04-23 13:03:47', '2020-04-23 13:03:47'),
(369, 0, 16, 'Mandya', '', 0, 0, '2020-04-23 13:04:02', '2020-04-23 13:04:02'),
(370, 0, 19, 'Mandsaur', '', 0, 0, '2020-04-23 13:04:19', '2020-04-23 13:04:19'),
(371, 0, 19, 'Mandla', '', 0, 0, '2020-04-23 13:04:42', '2020-04-23 13:04:42'),
(372, 0, 13, 'Mandi', '', 0, 0, '2020-04-23 13:04:56', '2020-04-23 13:04:56'),
(373, 0, 31, 'Mancherial', '', 0, 0, '2020-04-23 13:05:14', '2020-04-23 13:05:14'),
(374, 0, 5, 'Manbhum', '', 0, 0, '2020-04-23 13:05:43', '2020-04-23 13:05:43'),
(375, 0, 35, 'Malda', '', 0, 0, '2020-04-23 13:06:17', '2020-04-23 13:06:17'),
(376, 0, 17, 'Malappuram', '', 0, 0, '2020-04-23 13:08:15', '2020-04-23 13:08:15'),
(377, 0, 17, 'Malabar', '', 0, 0, '2020-04-23 13:09:15', '2020-04-23 13:09:15'),
(378, 0, 33, 'Mainpuri', '', 0, 0, '2020-04-23 13:09:34', '2020-04-23 13:09:34'),
(379, 0, 33, 'Mahoba', '', 0, 0, '2020-04-23 13:09:54', '2020-04-23 13:09:54'),
(380, 0, 10, 'Mahesana', '', 0, 0, '2020-04-23 13:10:11', '2020-04-23 13:10:11'),
(381, 0, 12, 'Mahendragarh', '', 0, 0, '2020-04-23 13:10:30', '2020-04-23 13:10:30'),
(382, 0, 31, 'Mahbubnagar', '', 0, 0, '2020-04-23 13:10:57', '2020-04-23 13:10:57'),
(383, 0, 6, 'Mahasamund', '', 0, 0, '2020-04-23 13:11:12', '2020-04-23 13:11:12'),
(384, 0, 30, 'Madurai', '', 0, 0, '2020-04-23 13:11:27', '2020-04-23 13:11:27'),
(385, 0, 5, 'Madhubani', '', 0, 0, '2020-04-23 13:11:44', '2020-04-23 13:11:44'),
(386, 0, 5, 'Madhepura', '', 0, 0, '2020-04-23 13:11:59', '2020-04-23 13:11:59'),
(387, 0, 23, 'Lunglei', '', 0, 0, '2020-04-23 13:12:29', '2020-04-23 13:12:29'),
(388, 0, 27, 'Ludhiana', '', 0, 0, '2020-04-23 13:12:49', '2020-04-23 13:12:49'),
(389, 0, 33, 'Lucknow', '', 0, 0, '2020-04-23 13:13:08', '2020-04-23 13:13:08'),
(390, 0, 15, 'Lohardaga', '', 0, 0, '2020-04-23 13:13:31', '2020-04-23 13:13:31'),
(391, 0, 20, 'Latur', '', 0, 0, '2020-04-23 13:14:19', '2020-04-23 13:14:19'),
(392, 0, 33, 'Lalitpur', '', 0, 0, '2020-04-23 13:14:34', '2020-04-23 13:14:34'),
(393, 0, 17, 'Lakshadweep', '', 0, 0, '2020-04-23 13:14:53', '2020-04-23 13:14:53'),
(394, 0, 5, 'Lakhisarai', '', 0, 0, '2020-04-23 13:15:11', '2020-04-23 13:15:11'),
(395, 0, 33, 'Lakhimpur Kheri', '', 0, 0, '2020-04-23 13:15:34', '2020-04-23 13:15:34'),
(396, 0, 4, 'Lakhimpur', '', 0, 0, '2020-04-23 13:15:55', '2020-04-23 13:15:55'),
(397, 0, 10, 'Kutch', '', 0, 0, '2020-04-23 13:16:25', '2020-04-23 13:16:25'),
(398, 0, 33, 'Kushinagar', '', 0, 0, '2020-04-23 13:16:42', '2020-04-23 13:16:42'),
(399, 0, 12, 'Kurukshetra', '', 0, 0, '2020-04-23 13:16:57', '2020-04-23 13:16:57'),
(400, 0, 2, 'Kurnool', '', 0, 0, '2020-04-23 13:17:20', '2020-04-23 13:17:20'),
(401, 1, 30, 'Krishnagiri', '', 0, 0, '2020-04-23 13:17:38', '2020-04-23 13:17:38'),
(402, 0, 2, 'Krishna', '', 0, 0, '2020-04-23 13:17:54', '2020-04-23 13:17:54'),
(403, 0, 17, 'Kozhikode', '', 0, 0, '2020-04-23 13:18:15', '2020-04-23 13:18:15'),
(404, 0, 17, 'Kottayam', '', 0, 0, '2020-04-23 13:18:32', '2020-04-23 13:18:32'),
(405, 0, 28, 'Kota', '', 0, 0, '2020-04-23 13:18:48', '2020-04-23 13:18:48'),
(406, 0, 6, 'Koriya', '', 0, 0, '2020-04-23 13:19:07', '2020-04-23 13:19:07'),
(407, 0, 13, 'Palania', '', 0, 0, '2020-04-23 13:20:23', '2020-04-23 13:20:23'),
(408, 0, 37, 'Shah Alam', '', 0, 0, '2020-04-23 13:21:37', '2020-04-23 13:21:37'),
(409, 0, 31, 'Koratla', '', 0, 0, '2020-04-23 13:21:42', '2020-04-23 13:21:42'),
(410, 0, 25, 'Koraput', '', 0, 0, '2020-04-23 13:21:57', '2020-04-23 13:21:57'),
(411, 0, 5, 'East Champaran', '', 0, 0, '2020-04-23 13:22:28', '2020-04-23 13:22:28'),
(412, 0, 2, 'East Godavari', '', 0, 0, '2020-04-23 13:22:51', '2020-04-23 13:22:51'),
(413, 0, 16, 'Koppal', '', 0, 0, '2020-04-23 13:22:54', '2020-04-23 13:22:54'),
(414, 0, 22, 'East Khasi Hills', '', 0, 0, '2020-04-23 13:23:27', '2020-04-23 13:23:27'),
(415, 0, 15, 'East Singhbhum', '', 0, 0, '2020-04-23 13:23:47', '2020-04-23 13:23:47'),
(416, 0, 17, 'Ernakulam', '', 0, 0, '2020-04-23 13:23:58', '2020-04-23 13:23:58'),
(417, 0, 30, 'Erode', '', 0, 0, '2020-04-23 13:24:08', '2020-04-23 13:24:08'),
(418, 0, 31, 'Komaram Bheem', '', 0, 0, '2020-04-23 13:24:15', '2020-04-23 13:24:15'),
(419, 0, 33, 'Etah', '', 0, 0, '2020-04-23 13:24:24', '2020-04-23 13:24:24'),
(420, 0, 17, 'Kollam', '', 0, 0, '2020-04-23 13:24:32', '2020-04-23 13:24:32'),
(421, 0, 33, 'Etawah', '', 0, 0, '2020-04-23 13:24:40', '2020-04-23 13:24:40'),
(422, 0, 35, 'Kolkata', '', 0, 0, '2020-04-23 13:24:52', '2020-04-23 13:24:52'),
(423, 0, 33, 'Faizabad', '', 0, 0, '2020-04-23 13:25:03', '2020-04-23 13:25:03'),
(424, 0, 20, 'Kolhapur', '', 0, 0, '2020-04-23 13:25:08', '2020-04-23 13:25:08'),
(425, 0, 27, 'Faridkot', '', 0, 0, '2020-04-23 13:25:20', '2020-04-23 13:25:20'),
(426, 0, 16, 'Kolar', '', 0, 0, '2020-04-23 13:25:25', '2020-04-23 13:25:25'),
(427, 0, 33, 'Faridpur', '', 0, 0, '2020-04-23 13:25:38', '2020-04-23 13:25:38'),
(428, 0, 24, 'Kohima', '', 0, 0, '2020-04-23 13:25:40', '2020-04-23 13:25:40'),
(429, 0, 33, 'Farrukhabad', '', 0, 0, '2020-04-23 13:25:53', '2020-04-23 13:25:53'),
(430, 0, 15, 'Koderma', '', 0, 0, '2020-04-23 13:25:57', '2020-04-23 13:25:57'),
(431, 0, 12, 'Fatehabad', '', 0, 0, '2020-04-23 13:26:10', '2020-04-23 13:26:10'),
(432, 0, 5, 'Kishanganj', '', 0, 0, '2020-04-23 13:26:13', '2020-04-23 13:26:13'),
(433, 0, 27, 'Fatehgarh Sahib', '', 0, 0, '2020-04-23 13:26:26', '2020-04-23 13:26:26'),
(434, 0, 25, 'Khordha', '', 0, 0, '2020-04-23 13:26:28', '2020-04-23 13:26:28'),
(435, 0, 27, 'Fatehpur', '', 0, 0, '2020-04-23 13:26:46', '2020-04-23 13:26:46'),
(436, 0, 10, 'Kheda', '', 0, 0, '2020-04-23 13:26:49', '2020-04-23 13:26:49'),
(437, 0, 27, 'Fazilka', '', 0, 0, '2020-04-23 13:27:05', '2020-04-23 13:27:05'),
(438, 0, 19, 'Khargone', '', 0, 0, '2020-04-23 13:27:10', '2020-04-23 13:27:10'),
(439, 0, 33, 'Firozabad', '', 0, 0, '2020-04-23 13:27:21', '2020-04-23 13:27:21'),
(440, 0, 19, 'Khandwa', '', 0, 0, '2020-04-23 13:27:26', '2020-04-23 13:27:26'),
(441, 0, 27, 'Firozpur', '', 0, 0, '2020-04-23 13:27:37', '2020-04-23 13:27:37'),
(442, 0, 31, 'Khammam', '', 0, 0, '2020-04-23 13:27:42', '2020-04-23 13:27:42'),
(443, 0, 16, 'Gadag', '', 0, 0, '2020-04-23 13:27:56', '2020-04-23 13:27:56'),
(444, 0, 5, 'Khagaria', '', 0, 0, '2020-04-23 13:27:58', '2020-04-23 13:27:58'),
(445, 0, 10, 'Gandhinagar', '', 0, 0, '2020-04-23 13:28:13', '2020-04-23 13:28:13'),
(446, 0, 25, 'Kendujhar', '', 0, 0, '2020-04-23 13:28:15', '2020-04-23 13:28:15'),
(447, 0, 19, 'Katni', '', 0, 0, '2020-04-23 13:28:29', '2020-04-23 13:28:29'),
(448, 0, 29, 'Gangtok', '', 0, 0, '2020-04-23 13:28:34', '2020-04-23 13:28:34'),
(449, 0, 5, 'Katihar', '', 0, 0, '2020-04-23 13:28:46', '2020-04-23 13:28:46'),
(450, 0, 25, 'Ganjam', '', 0, 0, '2020-04-23 13:28:55', '2020-04-23 13:28:55'),
(451, 0, 14, 'Kathua', '', 0, 0, '2020-04-23 13:29:04', '2020-04-23 13:29:04'),
(452, 0, 33, 'Gautam Buddh Nagar', '', 0, 0, '2020-04-23 13:29:12', '2020-04-23 13:29:12'),
(453, 0, 14, 'Kashmir', '', 0, 0, '2020-04-23 13:29:22', '2020-04-23 13:29:22'),
(454, 0, 5, 'Gaya', '', 0, 0, '2020-04-23 13:29:29', '2020-04-23 13:29:29'),
(455, 0, 33, 'Kasganj', '', 0, 0, '2020-04-23 13:29:37', '2020-04-23 13:29:37'),
(456, 0, 29, 'Geyzing', '', 0, 0, '2020-04-23 13:29:44', '2020-04-23 13:29:44'),
(457, 0, 17, 'Kasaragod', '', 0, 0, '2020-04-23 13:29:52', '2020-04-23 13:29:52'),
(458, 0, 33, 'Ghaziabad', '', 0, 0, '2020-04-23 13:30:02', '2020-04-23 13:30:02'),
(459, 0, 30, 'Karur', '', 0, 0, '2020-04-23 13:30:09', '2020-04-23 13:30:09'),
(460, 0, 33, 'Ghazipur', '', 0, 0, '2020-04-23 13:30:20', '2020-04-23 13:30:20'),
(461, 0, 12, 'Karnal', '', 0, 0, '2020-04-23 13:30:28', '2020-04-23 13:30:28'),
(462, 0, 10, 'Gir Somnath', '', 0, 0, '2020-04-23 13:30:35', '2020-04-23 13:30:35'),
(463, 0, 31, 'Karimnagar', '', 0, 0, '2020-04-23 13:30:45', '2020-04-23 13:30:45'),
(464, 0, 15, 'Giridih', '', 0, 0, '2020-04-23 13:30:52', '2020-04-23 13:30:52'),
(465, 0, 4, 'Karimganj', '', 0, 0, '2020-04-23 13:31:10', '2020-04-23 13:31:10'),
(466, 0, 9, 'Goa', '', 0, 0, '2020-04-23 13:31:18', '2020-04-23 13:31:18'),
(467, 0, 4, 'Karbi Anglong', '', 0, 0, '2020-04-23 13:31:28', '2020-04-23 13:31:28'),
(468, 0, 4, 'Goalpara', '', 0, 0, '2020-04-23 13:31:41', '2020-04-23 13:31:41'),
(469, 0, 28, 'Karauli', '', 0, 0, '2020-04-23 13:31:45', '2020-04-23 13:31:45'),
(470, 0, 33, 'Gonda', '', 0, 0, '2020-04-23 13:31:55', '2020-04-23 13:31:55'),
(471, 0, 30, 'Karaikal', '', 0, 0, '2020-04-23 13:32:01', '2020-04-23 13:32:01'),
(472, 0, 20, 'Gondia', '', 0, 0, '2020-04-23 13:32:11', '2020-04-23 13:32:11'),
(473, 0, 27, 'Kapurthala', '', 0, 0, '2020-04-23 13:32:21', '2020-04-23 13:32:21'),
(474, 0, 5, 'Gopalganj', '', 0, 0, '2020-04-23 13:32:31', '2020-04-23 13:32:31'),
(475, 0, 30, 'Kanyakumari', '', 0, 0, '2020-04-23 13:32:37', '2020-04-23 13:32:37'),
(476, 0, 12, 'Gorakhpur', '', 0, 0, '2020-04-23 13:32:50', '2020-04-23 13:32:50'),
(477, 0, 33, 'Kanpur Nagar', '', 0, 0, '2020-04-23 13:32:55', '2020-04-23 13:32:55'),
(478, 0, 17, 'Kannur', '', 0, 0, '2020-04-23 13:33:13', '2020-04-23 13:33:13'),
(479, 0, 16, 'Gulbarga', '', 0, 0, '2020-04-23 13:33:16', '2020-04-23 13:33:16'),
(480, 0, 33, 'Kannauj', '', 0, 0, '2020-04-23 13:33:28', '2020-04-23 13:33:28'),
(481, 0, 19, 'Guna', '', 0, 0, '2020-04-23 13:33:31', '2020-04-23 13:33:31'),
(482, 0, 30, 'Kancheepuram', '', 0, 0, '2020-04-23 13:33:45', '2020-04-23 13:33:45'),
(483, 0, 2, 'Guntur', '', 0, 0, '2020-04-23 13:33:48', '2020-04-23 13:33:48'),
(484, 0, 4, 'Kamrup Metropolitan', '', 0, 0, '2020-04-23 13:34:03', '2020-04-23 13:34:03'),
(485, 0, 27, 'Gurdaspur', '', 0, 0, '2020-04-23 13:34:07', '2020-04-23 13:34:07'),
(486, 0, 12, 'Gurugram', '', 0, 0, '2020-04-23 13:34:25', '2020-04-23 13:34:25'),
(487, 0, 4, 'Kamrup', '', 0, 0, '2020-04-23 13:34:26', '2020-04-23 13:34:26'),
(488, 0, 19, 'Gwalior', '', 0, 0, '2020-04-23 13:34:42', '2020-04-23 13:34:42'),
(489, 0, 31, 'Kamareddy', '', 0, 0, '2020-04-23 13:34:42', '2020-04-23 13:34:42'),
(490, 0, 35, 'Kalimpong', '', 0, 0, '2020-04-23 13:34:57', '2020-04-23 13:34:57'),
(491, 0, 25, 'Kalahandi', '', 0, 0, '2020-04-23 13:35:13', '2020-04-23 13:35:13'),
(492, 0, 16, 'Kalaburagi', '', 0, 0, '2020-04-23 13:35:28', '2020-04-23 13:35:28'),
(493, 0, 13, 'Hamirpur', '', 0, 0, '2020-04-23 13:35:36', '2020-04-23 13:35:36'),
(494, 0, 12, 'Kaithal', '', 0, 0, '2020-04-23 13:35:42', '2020-04-23 13:35:42'),
(495, 0, 28, 'Hanumangarh', '', 0, 0, '2020-04-23 13:35:49', '2020-04-23 13:35:49'),
(496, 0, 2, 'Kadapa', '', 0, 0, '2020-04-23 13:36:01', '2020-04-23 13:36:01'),
(497, 0, 33, 'Hapur', '', 0, 0, '2020-04-23 13:36:03', '2020-04-23 13:36:03'),
(498, 0, 10, 'Kachchh', '', 0, 0, '2020-04-23 13:36:20', '2020-04-23 13:36:20'),
(499, 0, 19, 'Harda', '', 0, 0, '2020-04-23 13:36:25', '2020-04-23 13:36:25'),
(500, 0, 33, 'Hardoi', '', 0, 0, '2020-04-23 13:36:40', '2020-04-23 13:36:40'),
(501, 0, 10, 'Junagadh', '', 0, 0, '2020-04-23 13:37:08', '2020-04-23 13:37:08'),
(502, 0, 36, 'Haridwar', '', 0, 0, '2020-04-23 13:37:11', '2020-04-23 13:37:11'),
(503, 0, 4, 'Jorhat', '', 0, 0, '2020-04-23 13:37:30', '2020-04-23 13:37:30'),
(504, 0, 16, 'Hassan', '', 0, 0, '2020-04-23 13:37:36', '2020-04-23 13:37:36'),
(505, 0, 31, 'Jogulamba Gadwal', '', 0, 0, '2020-04-23 13:37:48', '2020-04-23 13:37:48'),
(506, 0, 33, 'Hathras', '', 0, 0, '2020-04-23 13:37:59', '2020-04-23 13:37:59'),
(507, 0, 16, 'Haveri', '', 0, 0, '2020-04-23 13:38:16', '2020-04-23 13:38:16'),
(508, 0, 15, 'Hazaribagh', '', 0, 0, '2020-04-23 13:38:32', '2020-04-23 13:38:32'),
(509, 0, 28, 'Jodhpur', '', 0, 0, '2020-04-23 13:38:46', '2020-04-23 13:38:46'),
(510, 0, 20, 'Hingoli', '', 0, 0, '2020-04-23 13:38:50', '2020-04-23 13:38:50'),
(511, 0, 12, 'Jind', '', 0, 0, '2020-04-23 13:39:02', '2020-04-23 13:39:02'),
(512, 0, 12, 'Hisar', '', 0, 0, '2020-04-23 13:39:06', '2020-04-23 13:39:06'),
(513, 0, 28, 'Jhunjhunun', '', 0, 0, '2020-04-23 13:39:17', '2020-04-23 13:39:17'),
(514, 0, 4, 'Hojai', '', 0, 0, '2020-04-23 13:39:22', '2020-04-23 13:39:22'),
(515, 0, 35, 'Hooghly', '', 0, 0, '2020-04-23 13:39:37', '2020-04-23 13:39:37'),
(516, 0, 25, 'Jharsuguda', '', 0, 0, '2020-04-23 13:39:51', '2020-04-23 13:39:51'),
(517, 0, 19, 'Hoshangabad', '', 0, 0, '2020-04-23 13:39:56', '2020-04-23 13:39:56'),
(518, 0, 35, 'Jhargram', '', 0, 0, '2020-04-23 13:40:09', '2020-04-23 13:40:09'),
(519, 0, 27, 'Hoshiarpur', '', 0, 0, '2020-04-23 13:40:14', '2020-04-23 13:40:14'),
(520, 0, 33, 'Jhansi', '', 0, 0, '2020-04-23 13:40:24', '2020-04-23 13:40:24'),
(521, 0, 28, 'Jhalawar', '', 0, 0, '2020-04-23 13:40:45', '2020-04-23 13:40:45'),
(522, 0, 12, 'Jhajjar', '', 0, 0, '2020-04-23 13:41:00', '2020-04-23 13:41:00'),
(523, 0, 5, 'Jehanabad', '', 0, 0, '2020-04-23 13:41:16', '2020-04-23 13:41:16'),
(524, 0, 15, 'Dhanbad', '', 0, 0, '2020-04-23 13:41:19', '2020-04-23 13:41:19'),
(525, 0, 33, 'Jaunpur', '', 0, 0, '2020-04-23 13:41:29', '2020-04-23 13:41:29'),
(526, 0, 35, 'Howrah', '', 0, 0, '2020-04-23 13:41:40', '2020-04-23 13:41:40'),
(527, 0, 31, 'Jangaon', '', 0, 0, '2020-04-23 13:41:44', '2020-04-23 13:41:44'),
(528, 0, 5, 'Jamui', '', 0, 0, '2020-04-23 13:42:04', '2020-04-23 13:42:04'),
(529, 0, 31, 'Hyderabad', '', 0, 0, '2020-04-23 13:42:18', '2020-04-23 13:42:18'),
(530, 0, 10, 'Jamnagar', '', 0, 0, '2020-04-23 13:42:27', '2020-04-23 13:42:27'),
(531, 0, 17, 'Idukki', '', 0, 0, '2020-04-23 13:42:33', '2020-04-23 13:42:33'),
(532, 0, 14, 'Jammu', '', 0, 0, '2020-04-23 13:42:42', '2020-04-23 13:42:42'),
(533, 0, 21, 'Imphal', '', 0, 0, '2020-04-23 13:42:50', '2020-04-23 13:42:50'),
(534, 0, 35, 'Jalpaiguri', '', 0, 0, '2020-04-23 13:42:58', '2020-04-23 13:42:58'),
(535, 0, 28, 'Jalore', '', 0, 0, '2020-04-23 13:43:21', '2020-04-23 13:43:21'),
(536, 0, 19, 'Indore', '', 0, 0, '2020-04-23 13:43:21', '2020-04-23 13:43:21'),
(537, 0, 20, 'Jalna', '', 0, 0, '2020-04-23 13:44:00', '2020-04-23 13:44:00'),
(538, 0, 19, 'Jabalpur', '', 0, 0, '2020-04-23 13:44:10', '2020-04-23 13:44:10'),
(539, 0, 20, 'Jalgaon', '', 0, 0, '2020-04-23 13:44:20', '2020-04-23 13:44:20'),
(540, 0, 25, 'Jagatsinghpur', '', 0, 0, '2020-04-23 13:44:24', '2020-04-23 13:44:24'),
(541, 0, 33, 'Jalaun', '', 0, 0, '2020-04-23 13:44:39', '2020-04-23 13:44:39'),
(542, 0, 27, 'Jagraon', '', 0, 0, '2020-04-23 13:44:41', '2020-04-23 13:44:41'),
(543, 0, 28, 'Jaipur', '', 0, 0, '2020-04-23 13:44:56', '2020-04-23 13:44:56'),
(544, 0, 28, 'Jaisalmer', '', 0, 0, '2020-04-23 13:45:12', '2020-04-23 13:45:12'),
(545, 0, 27, 'Jalandhar', '', 0, 0, '2020-04-23 13:45:21', '2020-04-23 13:45:21'),
(546, 2, 20, 'Pune', 'Pune', 0, 0, '2020-04-23 13:45:21', '2020-04-23 13:45:21'),
(547, 2, 12, 'Faridabad', 'Faridabad', 0, 0, '2020-04-23 13:45:21', '2020-04-23 13:45:21'),
(549, 2, 17, 'Pathanamthitta', 'Pathanamthitta', 0, 0, '2020-04-23 13:45:21', '2020-04-23 13:45:21'),
(550, 0, 10, 'Ahmedabad', '', 0, 0, '2020-05-12 10:18:56', '2020-05-12 10:18:56'),
(551, 0, 30, 'Pudukkottai', '', 0, 0, '2020-05-18 09:21:12', '2020-05-18 09:21:12'),
(552, 0, 107, 'Chandigarh', '', 0, 0, '2020-05-29 13:13:26', '2020-05-29 13:13:26'),
(553, 0, 30, 'Kallakurichi', '', 0, 0, '2020-06-01 11:37:49', '2020-06-01 11:37:49'),
(554, 0, 30, 'Ariyalur', '', 0, 0, '2020-06-09 11:21:23', '2020-06-09 11:21:23'),
(555, 0, 30, 'Perambalur', '', 0, 0, '2020-06-16 10:05:33', '2020-06-16 10:05:33'),
(556, 0, 26, 'Pondicherry', '', 0, 0, '2020-06-21 06:21:34', '2020-06-21 06:21:34'),
(557, 0, 26, 'Karaikal', '', 0, 0, '2020-06-21 06:21:53', '2020-06-21 06:21:53'),
(559, 0, 26, 'Mahe', '', 0, 0, '2020-06-21 06:22:24', '2020-06-21 06:22:24'),
(560, 0, 26, 'Yanam', '', 0, 0, '2020-06-21 06:22:41', '2020-06-21 06:22:41'),
(561, 0, 33, 'Allabhad', '', 0, 0, '2020-07-14 07:28:39', '2020-07-14 07:28:39'),
(562, 0, 5, 'Nalanda', '', 0, 0, '2020-07-15 09:00:40', '2020-07-15 09:00:40'),
(563, 0, 5, 'Patna', '', 0, 0, '2020-07-16 11:06:11', '2020-07-16 11:06:11'),
(564, 0, 27, 'Patiala', '', 0, 0, '2020-07-20 07:45:11', '2020-07-20 07:45:11'),
(565, 0, 33, 'Raebareli', '', 0, 0, '2020-07-28 10:35:31', '2020-07-28 10:35:31'),
(566, 1, 10, 'Saurashtra', 'undefined', 0, 1, NULL, NULL),
(567, 1, 2, 'Ongole', 'undefined', 0, 1, NULL, NULL),
(568, 1, 111, 'Ongole', 'undefined', 0, 1, NULL, NULL),
(569, 1, 111, 'prakasam', 'undefined', 0, 1, NULL, NULL),
(570, 1, 111, 'krishna', 'undefined', 0, 1, NULL, NULL),
(573, 6, 116, 'algo', 'undefined', 0, 1, NULL, NULL),
(575, 3, 113, 'Algarias', 'undefined', 0, 0, NULL, NULL),
(583, 1, 111, 'chittor', 'undefined', 1, 1, NULL, NULL),
(584, 1, 30, 'Tirupati', 'undefined', 1, 1, NULL, NULL),
(585, 1, 111, 'Tirupati', 'undefined', 1, 1, NULL, NULL),
(587, 1, 30, 'Tiruvannamalai', 'undefined', 1, 1, NULL, NULL),
(588, 1, 30, 'Tirukoyilur', 'undefined', 1, 1, NULL, NULL),
(589, 1, 30, 'Dindugal', 'undefined', 1, 1, NULL, NULL),
(591, 1, 14, 'Reasi ', 'undefined', 1, 1, NULL, NULL),
(592, 1, 25, 'Jajpur', 'undefined', 1, 1, NULL, NULL),
(593, 1, 30, 'thiruvarur', 'undefined', 1, 1, NULL, NULL),
(594, 1, 35, 'Purba Bardhaman', 'undefined', 1, 1, NULL, NULL),
(595, 1, 123, 'Bastar', 'undefined', 1, 1, NULL, NULL),
(596, 1, 10, 'Ambaji', 'undefined', 1, 1, NULL, NULL),
(597, 1, 30, 'chennai', 'undefined', 1, 1, NULL, NULL),
(599, 1, 30, 'Nagapatinam', 'undefined', 1, 1, NULL, NULL),
(600, 1, 30, 'Thanjavur', 'undefined', 1, 1, NULL, NULL),
(601, 1, 30, 'Tiruvallur', 'undefined', 1, 1, NULL, NULL),
(602, 1, 121, 'Guwahati', 'undefined', 1, 1, NULL, NULL),
(603, 1, 35, '	Kolkata', 'undefined', 1, 1, NULL, NULL),
(604, 1, 30, 'Thanjavur', 'undefined', 1, 1, NULL, NULL),
(605, 1, 30, 'Sivagangai', 'undefined', 1, 1, NULL, NULL),
(606, 1, 125, 'Kurukshetra', 'undefined', 1, 1, NULL, NULL),
(607, 1, 19, 'Santa', 'undefined', 1, 1, NULL, NULL),
(608, 1, 19, 'Amarkantak', 'undefined', 1, 1, NULL, NULL),
(609, 1, 19, 'Amarkantak', 'undefined', 1, 1, NULL, NULL),
(610, 1, 19, 'Anuppur', 'undefined', 1, 1, NULL, NULL),
(611, 1, 111, 'Rajamahendravaram', 'undefined', 1, 1, NULL, NULL),
(612, 166, 128, ' Las Bela', 'undefined', 1, 1, NULL, NULL),
(613, 1, 13, 'Kangra', 'undefined', 1, 1, NULL, NULL),
(614, 1, 129, 'Darbhanga', 'undefined', 1, 1, NULL, NULL),
(615, 18, 130, 'Barishal ', 'undefined', 1, 1, NULL, NULL),
(617, 1, 111, 'Nandyal', 'undefined', 1, 1, NULL, NULL),
(618, 1, 10, 'Dwarka', 'undefined', 1, 1, NULL, NULL),
(620, 153, 131, 'Mustang', 'undefined', 1, 1, NULL, NULL),
(621, 1, 30, 'Tiruvarur', 'undefined', 1, 1, NULL, NULL),
(622, 1, 30, 'THOOTHUKUDI', 'undefined', 1, 1, NULL, NULL),
(623, 1, 20, 'Ahmednagar', 'undefined', 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `entrance_tick`
--

CREATE TABLE `entrance_tick` (
  `id` int(11) NOT NULL,
  `ticket_amt` varchar(12) DEFAULT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `entrance_tick`
--

INSERT INTO `entrance_tick` (`id`, `ticket_amt`, `created_date`, `created_by`, `is_active`) VALUES
(1, 'Free', '2020-07-09 08:09:35', 1, 1),
(3, '10', '2020-07-09 08:09:35', 1, 1),
(4, '25', '2020-07-09 08:09:35', 1, 1),
(5, '50', '2020-07-09 08:09:35', 1, 1),
(6, '100', '2020-07-09 08:09:35', 1, 1),
(7, '200', '2020-07-09 08:09:35', 1, 1),
(8, '500', '2020-07-09 08:09:35', 1, 1),
(9, '1000', '2020-07-09 08:09:35', 1, 1),
(10, '1500', '2020-07-09 08:09:35', 1, 1),
(11, '2000', '2020-07-09 08:09:35', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `eventtype`
--

CREATE TABLE `eventtype` (
  `id` int(11) NOT NULL,
  `event_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `eventtype`
--

INSERT INTO `eventtype` (`id`, `event_type`) VALUES
(3, 'temple event'),
(10, 'abisekam '),
(13, 'full moon ');

-- --------------------------------------------------------

--
-- Table structure for table `familymember`
--

CREATE TABLE `familymember` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `email_id` varchar(50) DEFAULT NULL,
  `country` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `district` int(11) DEFAULT NULL,
  `city` int(11) DEFAULT NULL,
  `area` int(11) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `pincode` int(11) DEFAULT NULL,
  `familyName` varchar(200) DEFAULT NULL,
  `relationship` varchar(100) DEFAULT NULL,
  `gender` varchar(1) DEFAULT NULL,
  `groupId` int(11) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `festival`
--

CREATE TABLE `festival` (
  `festival_id` int(11) NOT NULL,
  `festival_name` varchar(255) NOT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `festival`
--

INSERT INTO `festival` (`festival_id`, `festival_name`, `created_date`, `created_by`, `is_active`) VALUES
(2, 'VaiKasi Festivals', '2020-07-03 12:24:14', 1, 1),
(4, 'Adi Festival', '2020-08-14 13:18:03', 1, 1),
(5, 'Panguni Festival', '2020-08-14 13:18:25', 1, 1),
(10, 'Kudam Festival', '2020-08-14 14:23:52', 1, 1),
(11, 'Full Moon Day', '2020-08-14 14:42:55', 1, 1),
(12, 'No Moon Day', '2020-08-14 14:43:03', 1, 1),
(13, 'Shashti', '2020-08-14 14:43:10', 1, 1),
(14, 'Vinayagar Chadurthy', '2020-08-14 14:43:16', 1, 1),
(15, 'Durgashtami', '2020-08-14 14:43:30', 1, 1),
(16, 'Navarathri', '2020-08-14 14:43:37', 1, 1),
(17, 'Sivarathri', '2020-08-14 14:43:52', 1, 1),
(18, 'Ramanavami', '2020-08-14 14:44:00', 1, 1),
(19, 'Varalakshmi Nonbu(Varalakshmi  Fasting)', '2020-08-14 14:44:17', 1, 1),
(20, 'Diwali', '2020-08-18 07:57:21', 1, 1),
(21, 'Full moon of Kartik Purnima', '2020-08-18 08:26:56', 1, 1),
(22, '	Shravan Month', '2020-08-18 08:28:00', 1, 1),
(23, 'Karuthikai Festival', '2020-08-20 12:43:31', 1, 1),
(24, 'Markali Festival', '2020-08-20 12:46:09', 1, 1),
(26, 'Thirukalayanam', '2020-08-20 12:54:43', 1, 1),
(30, 'Rath Yatra', '2020-08-21 05:35:22', 1, 1),
(33, 'Shravan-Bhado/Every year panchkroshi yatra', '2020-08-21 06:45:13', 1, 1),
(34, 'Chithirai Festival', '2020-07-03 11:29:13', 1, 1),
(35, 'Thai Poosam', '2020-10-30 05:55:36', 1, 1),
(36, 'Bangalore Karaga', '2020-10-30 07:26:46', 1, 1),
(37, 'Ganesh Chaturthi', '2020-11-02 07:16:14', 1, 1),
(38, 'Banashankari jatre', '2020-11-02 07:31:33', 1, 1),
(39, 'Govardhan Puja', '2020-11-04 03:41:49', 1, 1),
(40, 'Sri Krishna Janmashtami', '2020-11-04 03:52:42', 1, 1),
(42, 'Ugadi', '2022-04-26 08:44:40', 1, 1),
(48, 'Brahmmotsavam', '2022-10-13 07:42:09', NULL, NULL),
(49, 'Ekadesi', '2022-10-13 07:42:17', NULL, NULL),
(50, 'Soora Samharam', '2022-10-13 07:42:24', NULL, NULL),
(51, 'Utsavams', '2022-10-13 07:42:31', NULL, NULL),
(52, 'Aadi pooram', NULL, NULL, NULL),
(53, 'Thai poosam', NULL, NULL, NULL),
(54, 'Chitra pournami', NULL, NULL, NULL),
(55, 'Poo Choridal Festival', NULL, NULL, NULL),
(56, ' Vaikasi Panchaprakaram Festival ', NULL, NULL, NULL),
(57, 'Chithirai Car Festival', NULL, NULL, NULL),
(58, 'Annabisegam,karthigai soomavaram,margazhi thanur poojai', NULL, NULL, NULL),
(59, 'mukkotti ekadasi,panguni uthiram', NULL, NULL, NULL),
(60, 'karudaseva', NULL, NULL, NULL),
(61, 'panguni utthiram', NULL, NULL, NULL),
(62, 'chithirai bramotsavam', NULL, NULL, NULL),
(63, 'Maha sivarathiri', NULL, NULL, NULL),
(64, ' Skanda Sashti', NULL, NULL, NULL),
(65, 'masi magam', NULL, NULL, NULL),
(66, 'Aadi puram', NULL, NULL, NULL),
(67, 'panguni utthiram,Margazhi tiruvadhirai,navarathri', NULL, NULL, NULL),
(68, 'Maha sivarathiri,margazhi tiruvadhilai', NULL, NULL, NULL),
(69, 'margazhi vaikunda', NULL, NULL, NULL),
(70, 'Panchamurthy procession', NULL, NULL, NULL),
(71, 'step festival', NULL, NULL, NULL),
(72, 'Aani tirumanjanam', NULL, NULL, NULL),
(73, 'Margazhi kettai', NULL, NULL, NULL),
(74, 'Maha sivarathiri', NULL, NULL, NULL),
(75, '	Ambubachi Mela', NULL, NULL, NULL),
(76, 'Kali Puja', NULL, NULL, NULL),
(77, 'Aaipasi annaabishegam', NULL, NULL, NULL),
(78, 'chithirai thirukalyanam', NULL, NULL, NULL),
(79, 'vaikunta ekadesi', NULL, NULL, NULL),
(80, 'vaikasi poonima Brahmostsavam', NULL, NULL, NULL),
(81, 'Mahara Jyothi', NULL, NULL, NULL),
(82, 'Pooratadhi special abiseka and pooja', NULL, NULL, NULL),
(83, 'Ram Navami ', NULL, NULL, NULL),
(84, 'Vaikunta Ekadesi', NULL, NULL, NULL),
(85, 'Vaikunta Ekadesi,Masi theppa thiruvizha', NULL, NULL, NULL),
(86, 'Navarathri, Karthigai thirupanazvar', NULL, NULL, NULL),
(87, 'Float festival', NULL, NULL, NULL),
(88, 'Jenmastami', NULL, NULL, NULL),
(89, ' Kumbham Utsavam', NULL, NULL, NULL),
(90, ' Guruvayur Ekadasi', NULL, NULL, NULL),
(91, 'Vaikunda Ekadesi', NULL, NULL, NULL),
(92, 'Gajendra moksham,aavani srijayanthi', NULL, NULL, NULL),
(93, 'Garuda seva,swan carriage hamsa vahanam', NULL, NULL, NULL),
(94, 'Car festival,Navarathri,utsav uri-adi', NULL, NULL, NULL),
(95, 'Panguni brahmmotsavam,Aaipasi pavithra utsavam', NULL, NULL, NULL),
(96, '10day brahmmotsavam in vaikasi', NULL, NULL, NULL),
(97, 'Thiruvonam', NULL, NULL, NULL),
(98, 'Durga Pooja', NULL, NULL, NULL),
(99, 'Vijayadashami', NULL, NULL, NULL),
(100, 'Tiruvaymoli', NULL, NULL, NULL),
(101, 'Shiva-Chaturdashi', NULL, NULL, NULL),
(102, 'Thiru Utsavam', NULL, NULL, NULL),
(103, 'Uthra Sree Bali', NULL, NULL, NULL),
(104, 'Srijayanthi Uriyadi, Pavitrostavam, Garudotsavam, Navarathri, Karthigai, Thirumangai Alvar day, Vaikunta Ekadasi and Kalyana Utsavam.', NULL, NULL, NULL),
(105, 'Brahmotsavam', NULL, NULL, NULL),
(106, 'Ratha Saptami', NULL, NULL, NULL),
(107, 'Vaikunta Ekadasi', NULL, NULL, NULL),
(108, 'Deepa Mahotsavam', NULL, NULL, NULL),
(109, 'Vishu', NULL, NULL, NULL),
(110, 'Mahara Sankaranti', NULL, NULL, NULL),
(111, 'Saraswathi Pooja', NULL, NULL, NULL),
(112, 'Narasima Jayanthi', NULL, NULL, NULL),
(113, ' Vaikasi Garuda Seva', NULL, NULL, NULL),
(115, 'Vasantha Uthsavam', NULL, NULL, NULL),
(116, 'Mamangam festival', NULL, NULL, NULL),
(117, 'MATA MURTI KA MELA', NULL, NULL, NULL),
(118, 'BADRI KEDAR UTSAV', NULL, NULL, NULL),
(119, 'Shravani Annakoot Mela', NULL, NULL, NULL),
(120, 'Badri Kedar Festival', NULL, NULL, NULL),
(121, 'Aadi poornima,vishnu related festivals', NULL, NULL, NULL),
(122, 'Chithirai utsav,float festival,vainkunda ekadesi', NULL, NULL, NULL),
(123, 'Yartung Festival', NULL, NULL, NULL),
(124, 'Narsingh Jayanti', NULL, NULL, NULL),
(125, 'Holi', NULL, NULL, NULL),
(126, 'Ugadi', NULL, NULL, NULL),
(127, 'MahaSivarathri Utsavam', NULL, NULL, NULL),
(128, 'Sravanamothsavams', NULL, NULL, NULL),
(129, 'Ujjain Simhastha', NULL, NULL, NULL),
(130, 'Brahmmotsavam ,Panguni, Aaipasi utsav', NULL, NULL, NULL),
(131, '10day brahmmotsavam in vaikasi visaka', NULL, NULL, NULL),
(132, 'Thai poosam', NULL, NULL, NULL),
(133, 'Thirukalyanam', NULL, NULL, NULL),
(134, 'Chitirai Thiruvila', NULL, NULL, NULL),
(135, 'Kallazhakar Crossing the Vaigai river', NULL, NULL, NULL),
(136, 'Chithra poornima', NULL, NULL, NULL),
(137, 'Masi magam, Full moon poornima', NULL, NULL, NULL),
(138, '18Garuda seva in vaikasi', NULL, NULL, NULL),
(139, 'Vaikunda Ekadesi', NULL, NULL, NULL),
(140, 'Sri rama navami.Thirukarthigai', NULL, NULL, NULL),
(141, 'Brahmomotsavam, Gokulashtami', NULL, NULL, NULL),
(142, 'Vaikasi Brahmmotsavam, Navarathri, Makara shankranthi', NULL, NULL, NULL),
(143, 'Aadi pooram,Aipasi thula brahmmotsavam', NULL, NULL, NULL),
(144, 'Vaikasi brahmotsavam,Navarathri', NULL, NULL, NULL),
(145, 'Vaikasi visakam, Garuda seva', NULL, NULL, NULL),
(146, '10day panguni uthiram,Aavani poornima', NULL, NULL, NULL),
(147, 'Aipasi brahmmotsavam, Thai amavasai', NULL, NULL, NULL),
(148, 'Vaikasi 5day utsavam', NULL, NULL, NULL),
(149, '10day Chithirai vasanth utsav', NULL, NULL, NULL),
(150, '15day panguni brahmotsavam', NULL, NULL, NULL),
(151, 'Krishna jayanthi', NULL, NULL, NULL),
(152, 'Full moon day', NULL, NULL, NULL),
(153, 'Margazhi vaikunda purataasi navarathri', NULL, NULL, NULL),
(154, 'Palkhi Sohala', NULL, NULL, NULL),
(155, 'Kumbh Mela', NULL, NULL, NULL),
(156, 'Baba Born day', NULL, NULL, NULL),
(157, 'Dasara', NULL, NULL, NULL),
(158, 'Month Of  Savan', NULL, NULL, NULL),
(159, 'Akshya Tritiya', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `functioninsidethetemple`
--

CREATE TABLE `functioninsidethetemple` (
  `FunctionInsideTheTempleID` int(11) NOT NULL,
  `FunctionInsideTheTemple` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `functioninsidethetemple`
--

INSERT INTO `functioninsidethetemple` (`FunctionInsideTheTempleID`, `FunctionInsideTheTemple`) VALUES
(4, 'Dosha Pariharam'),
(12, 'papa pariharam'),
(5, 'Tulabhara');

-- --------------------------------------------------------

--
-- Table structure for table `functionoutsidethetemple`
--

CREATE TABLE `functionoutsidethetemple` (
  `FunctionOutsideTheTempleID` int(11) NOT NULL,
  `FunctionOutsideTheTemple` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `functionoutsidethetemple`
--

INSERT INTO `functionoutsidethetemple` (`FunctionOutsideTheTempleID`, `FunctionOutsideTheTemple`) VALUES
(1, 'Ganapathy Homam'),
(2, 'House Warming Ceremony'),
(6, 'Marriage'),
(9, 'Theru'),
(10, 'Vehicle pooja');

-- --------------------------------------------------------

--
-- Table structure for table `functions`
--

CREATE TABLE `functions` (
  `FunctionID` int(11) NOT NULL,
  `FunctionType` int(11) NOT NULL,
  `FunctionName` varchar(255) NOT NULL,
  `languages` varchar(255) NOT NULL,
  `Description` longtext NOT NULL,
  `AdditionalInformation` longtext NOT NULL,
  `MinPriceWithMaterial` int(11) NOT NULL,
  `MaxPriceWithMaterial` int(11) NOT NULL,
  `MinPriceWithOutMaterial` int(11) NOT NULL,
  `MaxPriceWithOutMaterial` int(11) NOT NULL,
  `FunctionImage` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `functions`
--

INSERT INTO `functions` (`FunctionID`, `FunctionType`, `FunctionName`, `languages`, `Description`, `AdditionalInformation`, `MinPriceWithMaterial`, `MaxPriceWithMaterial`, `MinPriceWithOutMaterial`, `MaxPriceWithOutMaterial`, `FunctionImage`) VALUES
(2, 2, 'Ganapathi Homam', '2,3,4', 'Ganapathi Homam is a ritual dedicated to Lord Ganesha, performed to seek his blessings and achieve success before imparting on any venture. As per Hinduism, the grace of Lord Ganesha can remove obstacles in life and fulfill any task.', '1 Priest with materials, 1 Priest without materials, 2 Priests with materials, 2 Priests without materials', 2000, 2500, 1000, 1500, '/public/FunctionsImage/download (1).jpg'),
(5, 1, 'venkateswara Swamy', '1', 'xascda', 'asdcasddc', 123, 123, 1232, 1234, '/public/functionsImages/1662977212423-ha.jpg'),
(7, 1, 'lakshmi pooja', '1', 'description', 'additional information', 22, 20, 23, 2, '/public/functionsImages/1662977225645-download.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `function_type`
--

CREATE TABLE `function_type` (
  `id` int(11) NOT NULL,
  `function_type` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `function_type`
--

INSERT INTO `function_type` (`id`, `function_type`, `created_at`, `updated_at`) VALUES
(1, 'Inside Temple', '2022-03-03 13:22:51', '2022-03-03 13:22:51'),
(2, 'Outside Temple', '2022-03-03 13:24:21', '2022-03-03 13:24:21'),
(3, 'Both', '2022-03-25 08:59:31', '2022-03-25 08:59:31');

-- --------------------------------------------------------

--
-- Table structure for table `grouptable`
--

CREATE TABLE `grouptable` (
  `id` int(11) NOT NULL,
  `group_name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `grouptable`
--

INSERT INTO `grouptable` (`id`, `group_name`, `created_at`, `updated_at`) VALUES
(1, 'Aarupadai Veedu', '2022-03-16 10:41:54', '2022-03-16 10:41:54'),
(3, 'others', '2023-01-12 07:18:41', '2022-09-15 10:27:47'),
(7, '276 Devara Paadal Petra Sthalams', '2022-10-13 07:49:26', '2022-10-13 07:49:26'),
(8, '12 Jyotirlingas', '2022-10-13 07:49:33', '2022-10-13 07:49:33'),
(9, '108 Divya Desams', '2022-10-13 07:49:38', '2022-10-13 07:49:38'),
(10, 'Pancha Bhoota Sthalams ', '2022-10-13 07:49:45', '2022-10-13 07:49:45'),
(11, '51 Shakti Peedam', '2022-10-13 07:49:51', '2022-10-13 07:49:51'),
(12, '27 Star Temples (Nakshatra Temples)', '2022-10-13 07:49:56', '2022-10-13 07:49:56');

-- --------------------------------------------------------

--
-- Table structure for table `guidelist`
--

CREATE TABLE `guidelist` (
  `id` int(11) NOT NULL,
  `class_name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `guidelist`
--

INSERT INTO `guidelist` (`id`, `class_name`, `description`, `images`) VALUES
(1, 'Hanuman Chalisa', 'Hanuman Chalisa is a timeless ode to devotion Lord Hanuman is known for his devotion to Lord Ram and is considered to be the embodiment of faith, surrender, and devotion. The \'Hanuman Chalisa\' is composed by Saint Goswami Tulsidas, the author of the Tulsi Ramayana (Ramacharitamanasa). It is believed that an ailing Tulsidas composed the Hanuman Chalisa. Composing and singing the praises of Lord Hanuman, helped Tulsidas regain his health.Composed of 40 verses filled with praises for Lord Hanuman, the Hanuman Chalisa is composed in Avadhi. This dialect of Hindi was spoken in Ayodhya, Lord Rama’s birthplace.', 'not null'),
(2, 'Tiruppavai', 'Hanuman Chalisa is a timeless ode to devotion Lord Hanuman is known for his devotion to Lord Ram and is considered to be the embodiment of faith, surrender, and devotion. The \'Hanuman Chalisa\' is composed by Saint Goswami Tulsidas, the author of the Tulsi Ramayana (Ramacharitamanasa). It is believed that an ailing Tulsidas composed the Hanuman Chalisa. Composing and singing the praises of Lord Hanuman, helped Tulsidas regain his health.Composed of 40 verses filled with praises for Lord Hanuman, the Hanuman Chalisa is composed in Avadhi. This dialect of Hindi was spoken in Ayodhya, Lord Rama’s birthplace.', NULL),
(3, 'ayyapan1', 'god is great', '');

-- --------------------------------------------------------

--
-- Table structure for table `guide_register`
--

CREATE TABLE `guide_register` (
  `guide_id` int(11) NOT NULL,
  `guideName` varchar(255) NOT NULL,
  `language_knows` varchar(255) NOT NULL,
  `countryId` int(11) NOT NULL,
  `stateId` int(11) NOT NULL,
  `districtId` int(11) NOT NULL,
  `cityId` int(11) NOT NULL,
  `areaId` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `pincode` varchar(90) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `password` varchar(255) NOT NULL,
  `aboutme` varchar(500) DEFAULT NULL,
  `EmailId` varchar(255) DEFAULT NULL,
  `isApproved` int(11) DEFAULT NULL,
  `rejectReasonByAdmin` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `guide_register`
--

INSERT INTO `guide_register` (`guide_id`, `guideName`, `language_knows`, `countryId`, `stateId`, `districtId`, `cityId`, `areaId`, `address`, `pincode`, `phone`, `password`, `aboutme`, `EmailId`, `isApproved`, `rejectReasonByAdmin`) VALUES
(1, 'tfsds', '0', 0, 0, 0, 0, 0, 'dzsfffg', '1232', '1234567890', '$2a$10$MfhzP5QMhAgiETR/ISZf6uyaARqTEDNc/RLaRfKnhZP3b0HvfQVwC', '0', '2fsf@gmail.com', 1, NULL),
(2, 'aaaaaaaaaa', '0', 0, 0, 0, 0, 0, 'dvffdsg', 'undefined', 'undefined', '$2a$10$CVS.fGB3oo4iHGkcX4Zsu..oYSSuYrUOcIXJTWqD2qoikh.Acq7sG', '0', 'undefined', 1, NULL),
(3, 'train14weee', 'Tamil,Telugu', 0, 0, 0, 0, 0, 'mnjgjhgjhgh', '7678w', '3456789012', '$2a$10$eTMsqt2H/.EKzRz2pazz9.y.1qVkHOovR31ClJNSdK/EazcbO0aDi', 'bnbnm,hhjgdhgjk', 'dfsf@gmail.com', 1, NULL),
(4, 'cvcvv', 'Kannada,Malayalam,Telugu', 0, 0, 0, 0, 0, 'jhshjhhjj', '44544444', '4567890123', '$2a$10$ZNPwy6dzzxPDucWgyXXiV.d2ITy.4EV63aB.f4jQgMqqYeNmttp2m', 'sdfsdfhjdsjjkg', 'karur@gmail.com', 1, NULL),
(5, 'rajan', 'Tamil,Malayalam,Kannada', 0, 0, 0, 0, 0, 'dsgfdfg', '3234', '5678901234', '$2a$10$2cBtua2ueG8rxBhnbF8f8eB6weQwGUtOeT1Ho4dHRgBbbftPUivpi', 'dsgdhhj', 'fsf@gmail.com', 1, NULL),
(6, 'rajan ', '', 1, 30, 384, 800, 0, '', '', '', '$2a$10$LcVEyhpjnLCgVNqFwfpEKe8pc7eg192qicAzOw1g98XgJ1CZZVmeK', '', '', NULL, NULL),
(9, 'pk', 'Hindi,Tamil,Telugu,English', 0, 0, 0, 0, 0, 'awaw', '121212', '9012345678', '$2a$10$GnU46Pu8rfQiI7DHzpfh/ejL/LX5odmbPQH.ykP/lWTl1aa3bzWXC', 'awawaw', 'safwefews@mail.com', 1, NULL),
(10, 'jayathurga babu', 'Tamil,Telugu,Kannada,Marathi,French,English,Hindi', 0, 0, 0, 0, 0, 'no-33,selvavinayagar kovil street,periyagaram,gingee', '604202', '8072645588', '$2a$10$mLMOYrXEj8Ngk6XplTmfg.tam06HCSPvfMtESF1cZ/e1mOpY9879W', 'Great initiative by the applicator', 'jayathu@gmail.com', 1, NULL),
(11, 'gh', 'Tamil,Telugu,Malayalam,Kannada,Hindi,Marathi,English,French', 0, 0, 0, 0, 0, 'no-1,mettu street,rani anna nagar ,gingee', '604202', '9171022205', '$2a$10$Z88H/Djf.YzsDiHW0UPGfexFzM92wtZgOsXhKg8.J5qCUAIvW65W6', 'good', 'daranibib@gmail.com', 1, NULL),
(12, 'jayathurga', '', 1, 30, 85, 854, 62, '1,ranga street,silk nagar,Tiruvannamalai', '606601', '9345251734', '$2a$10$UrxFeemOPULA4sP.KCGiQ..q0GfaDwkDANy.7s59b68B0YsOSChfC', 'good', 'jayathurgababu25@gmail.com', 1, NULL),
(42, 'prasanna', 'Tamil,Hindi,Malayalam,French', 1, 30, 233, 818, 67, '5/78 NEHRU STREET', '600068', '9080515084', '$2a$10$zmjU896OZ1luujkfn9glz.tr9nCQ7ZvK12MbmklYQIlYN0ic9zPme', 'dglkgjhkUOhlrdkhdhfgQBQ', 'yogaprasanna1111@gmail.com', NULL, NULL),
(52, 'jaya', 'Telugu,Malayalam,Kannada,Marathi,English', 1, 30, 85, 854, 62, '1ttu street,rani anna nagar,Tiruvannamalai', '606601', '8270474086', '$2a$10$H4AphHCx4WJrfwSlAKFbXOCO7aEUhSGVmdgKl3FxvSrxPqRvzkMM2', 'good', 'kumarigovindarajulu@gmail.com', NULL, NULL),
(54, 'chupi jaya', 'Telugu,Tamil,Malayalam,kannada', 0, 0, 0, 0, 0, 'asfdghhk', '608901', '8248986935', '$2a$10$MFmYFQRM5Rp2KEukYOtvOeDw8AvMEqdr/qv5/8UFg3oCNBVCOZ06C', 'good', 'lalithaselvambigai@gmail.com', 1, NULL),
(88, 'saranya', 'Tamil,Telugu,English', 1, 30, 85, 854, 62, '66,ganapathy nagar', '606601', '8072293081', '$2a$10$7E78hacfmzskt2qfW0wfneZGCjepu4cGUvquRGSw7nKu5lOF5BuHK', 'guidence for temple', 'saranya.murthyy1@gamil.com', 1, NULL),
(233, '345678', 'Tamil,Telugu,Malayalam,Kannada,English,French', 0, 0, 0, 0, 0, 'gtnhgnyjntyujuymnynbgfvuynjhbtgvrf', '695565', '7502113806', '$2a$10$yIsHJn99P7YIv.XkCgXVnexn3CGvrQYHCpxHjRky/gJGQb9bSVG3m', 'successfully guided 100+ peoples', 'anish348@gmail.com', 1, NULL),
(242, 'vijay', 'Tamil,Malayalam,English', 1, 30, 95, 847, 20, 'tuty', '654321', '9500607413', '$2a$10$1O2kxe1F5gscEv5byNglR.Q/tOxUVF8MbXHygAtl8YKvREbozHLfq', 'fdff', 'swathi@gmail.com', 1, NULL),
(244, 'Anoop AS', 'Tamil', 1, 30, 95, 847, 20, 'tvl', '654321', '9442947217', '$2a$10$cNiUT.g5bHSDq8todVVXPOns9H/aai3BjrWRyYesQij0U.521IpDq', 'hellom', 'anoopvj@gmail.com', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `hoteldetails`
--

CREATE TABLE `hoteldetails` (
  `id` int(11) NOT NULL,
  `temple_distance` text DEFAULT NULL,
  `room_details` text DEFAULT NULL,
  `wifi` tinyint(1) DEFAULT NULL,
  `television` tinyint(1) DEFAULT NULL,
  `beverages` tinyint(1) DEFAULT NULL,
  `freeparking` tinyint(1) DEFAULT NULL,
  `telephone` tinyint(1) DEFAULT NULL,
  `hairdryer` tinyint(1) DEFAULT NULL,
  `gym` tinyint(1) DEFAULT NULL,
  `petswelcome` tinyint(1) DEFAULT NULL,
  `swimmingpool` tinyint(1) DEFAULT NULL,
  `breakfast` tinyint(1) DEFAULT NULL,
  `main_image` text DEFAULT NULL,
  `vendor_id` int(11) DEFAULT NULL,
  `vendor_name` varchar(225) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `business_name` varchar(225) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `state_id` int(11) DEFAULT NULL,
  `district_id` int(11) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `area_id` int(11) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `HotelName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `hoteldetails`
--

INSERT INTO `hoteldetails` (`id`, `temple_distance`, `room_details`, `wifi`, `television`, `beverages`, `freeparking`, `telephone`, `hairdryer`, `gym`, `petswelcome`, `swimmingpool`, `breakfast`, `main_image`, `vendor_id`, `vendor_name`, `phone_number`, `business_name`, `country_id`, `state_id`, `district_id`, `city_id`, `area_id`, `address`, `created_date`, `HotelName`) VALUES
(2, '[{\'temple_id\':105,\'distance\':10},{\'temple_id\':137,\'distance\':5}]', '[{\'specification\':3,\'info\':2,\'room\':10,\'amount\':2000},{\'specification\':10,\'info\':1,\'room\':20,\'amount\':40000}]', 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, '/public/hotel_image/hotel2.jpg', 6, 'vendor Test', '7837837898', 'Business  Name', 1, 30, 401, 785, 1, '#24,nehru street,opposite to more store', '2020-12-22 07:58:35', 'Maha Raja Sree'),
(3, '[{\'temple_id\':137,\'distance\':7}]', '[{\'specification\':3,\'info\':2,\'room\':10,\'amount\':2000},{\'specification\':9,\'info\':1,\'room\':10,\'amount\':4000}]', 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, '/public/hotel_image/hotel1.jpg', 6, 'vendor Test', '7837837898', 'Business  Name', 1, 30, 401, 785, 1, 'Hotel Details', '2020-12-22 09:33:28', 'OYO');

-- --------------------------------------------------------

--
-- Table structure for table `hoteldetails_subimages`
--

CREATE TABLE `hoteldetails_subimages` (
  `sub_id` int(11) NOT NULL,
  `image_name` text DEFAULT NULL,
  `image_path` text DEFAULT NULL,
  `hotel_details_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `hoteldetails_subimages`
--

INSERT INTO `hoteldetails_subimages` (`sub_id`, `image_name`, `image_path`, `hotel_details_id`) VALUES
(4, 'hotel1.jpg', '/public/hotel_image/hotel1.jpg', 2),
(5, 'hotel2.jpeg', '/public/hotel_image/hotel2.jpeg', 2),
(6, 'hotel3.jpeg', '/public/hotel_image/hotel3.jpeg', 2),
(7, 'hotel1.jpg', '/public/hotel_image/hotel1.jpg', 3),
(8, 'hotel2.jpeg', '/public/hotel_image/hotel2.jpeg', 3),
(9, 'hotel3.jpeg', '/public/hotel_image/hotel3.jpeg', 3);

-- --------------------------------------------------------

--
-- Table structure for table `inside_temple`
--

CREATE TABLE `inside_temple` (
  `id` int(11) NOT NULL,
  `temple_code` int(11) NOT NULL,
  `temple_pooja` varchar(255) NOT NULL,
  `searchkey` varchar(255) NOT NULL,
  `position` int(11) NOT NULL,
  `active` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inside_temple`
--

INSERT INTO `inside_temple` (`id`, `temple_code`, `temple_pooja`, `searchkey`, `position`, `active`, `created_at`, `updated_at`) VALUES
(2, 111, 'Abhishekam', 'Abhishekam', 1, 1, '2022-03-02 16:22:08', '2022-03-02 16:22:08'),
(3, 111, 'Ghanapathi pooja', 'Ghanapathi pooja', 1, 1, '2022-03-02 16:46:58', '2022-03-02 16:46:58');

-- --------------------------------------------------------

--
-- Table structure for table `iyer`
--

CREATE TABLE `iyer` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `country` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `district` int(11) DEFAULT NULL,
  `city` int(11) DEFAULT NULL,
  `area` int(11) DEFAULT NULL,
  `aboutyourself` text DEFAULT NULL,
  `pincode` varchar(10) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `inside_temple` int(11) DEFAULT NULL,
  `outside_temple` int(11) DEFAULT NULL,
  `whatsapp_number` varchar(15) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `language_name` varchar(50) DEFAULT NULL,
  `secondary_number` varchar(15) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `iyer`
--

INSERT INTO `iyer` (`id`, `name`, `country`, `state`, `district`, `city`, `area`, `aboutyourself`, `pincode`, `phone`, `inside_temple`, `outside_temple`, `whatsapp_number`, `email`, `password`, `language_name`, `secondary_number`, `address`, `is_active`, `imageUrl`) VALUES
(2, 'vijay', 1, 30, 250, 774, 51, 'Iyer', '4444444', '8608204014', 0, 2, '8608204014', 'vijay@gmail.com', '$2a$10$07xP1gMqbRx0n7auPkHije/NoJWQ8zNFq5KpbCNPTklC.ZNiATv3K', 'Tamil', '5555565555', NULL, 1, '/public/iyer_image/iyer1.jpg'),
(3, 'ajith', 1, 30, 250, 774, 51, 'Iyer', '624678', '8608204024', 0, 2, '8608204014', 'ajith@gmail.com', '$2a$10$YRg52jgpsduztzLiufzhruKYH40Q8ibCARYAzJp80ZjQprDwvJDiW', 'Telugu', '8987675656', NULL, 1, '/public/iyer_image/iyer2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `iyer_booking`
--

CREATE TABLE `iyer_booking` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `country` int(11) NOT NULL,
  `state` int(11) NOT NULL,
  `district` int(11) NOT NULL,
  `city` int(11) NOT NULL,
  `area` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `date` datetime NOT NULL,
  `time` time NOT NULL,
  `servicetype` varchar(100) DEFAULT NULL,
  `special_instruction` text DEFAULT NULL,
  `duration` varchar(50) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `contact` varchar(15) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `iyer_booking`
--

INSERT INTO `iyer_booking` (`id`, `user_id`, `country`, `state`, `district`, `city`, `area`, `address`, `date`, `time`, `servicetype`, `special_instruction`, `duration`, `name`, `contact`, `email`) VALUES
(1, 80, 1, 30, 95, 847, 20, 'dfasfa', '2024-07-10 18:30:00', '12:23:11', 'Wedding', 'Wedding', '1-2 hours', 'dfa', '1234567890', 'asfd2@gmail.com'),
(2, 80, 1, 30, 95, 847, 20, 'dfasfa', '2024-07-10 18:30:00', '12:23:11', 'Wedding', 'Wedding', '1-2 hours', 'dfa', '1234567890', 'asfd2@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `position` varchar(100) DEFAULT NULL,
  `qualification` varchar(50) DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `country` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `district` int(11) DEFAULT NULL,
  `city` int(11) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `groupId` varchar(100) DEFAULT NULL,
  `groupname` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `position`, `qualification`, `gender`, `description`, `country`, `state`, `district`, `city`, `address`, `groupId`, `groupname`) VALUES
(6, 'iyer', 'B.Tech', 'M', 'iyer ', 1, 30, 95, 847, 'tvl', 'iyer12', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `kulatheaivam_details`
--

CREATE TABLE `kulatheaivam_details` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `nick_name` varchar(255) NOT NULL,
  `designation` text NOT NULL,
  `family_name` varchar(255) NOT NULL,
  `Country` int(11) NOT NULL,
  `State` int(11) NOT NULL,
  `District` int(11) NOT NULL,
  `City` int(11) NOT NULL,
  `Area` int(11) NOT NULL,
  `pin_code` int(11) NOT NULL,
  `Address` text NOT NULL,
  `Description` text NOT NULL,
  `family_list` varchar(5000) NOT NULL DEFAULT '0',
  `Groupname` varchar(255) NOT NULL,
  `sex` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kulatheaivam_details`
--

INSERT INTO `kulatheaivam_details` (`id`, `name`, `nick_name`, `designation`, `family_name`, `Country`, `State`, `District`, `City`, `Area`, `pin_code`, `Address`, `Description`, `family_list`, `Groupname`, `sex`) VALUES
(12, 'fews', 'faezsfdc', 'zdc', 'efwscd', 1, 30, 384, 800, 27, 12345, 'afze', 'dfvrft', '[]', 'sumukhagroup', ''),
(13, 'aaaa', 'dsc', 'cds ', 'cds', 1, 30, 90, 849, 3, 123324, 'SDC ZSDVCADSF', 'ed', '[{\"name\":\"SAMPLE\",\"relationship\":\"SON\",\"gender\":\"male\",\"age\":\"20\",\"occupation\":\"DWSA\",\"phoneNumber\":\"12345467898\",\"country\":1,\"state\":30,\"district\":384,\"city\":800,\"area\":5,\"address\":\"ERACDADXA\",\"pincode\":\"1234\",\"loginneeded\":true,\"description\":\"DWQSXA\"}]', 'rohitgroup', ''),
(33, 'RAAAJ', 'RTR', 'VTRV', 'VETVRWVT', 1, 30, 384, 800, 27, 123445, 'trtrt', 'rtretert', '[{\"name\":\"rockyy\",\"relationship\":\"pet\",\"gender\":\"male\",\"age\":\"1\",\"occupation\":\"none\",\"phoneNumber\":\"12122121212\",\"country\":1,\"state\":31,\"district\":529,\"city\":873,\"address\":\"ssedw\",\"pincode\":\"121212\",\"loginneeded\":false,\"description\":\"crecr\"},{\"name\":\"gayuu\",\"relationship\":\"pett\",\"gender\":\"female\",\"age\":\"105\",\"occupation\":\"wrewrtrqew\",\"phoneNumber\":\"2122121221\",\"country\":1,\"state\":30,\"district\":384,\"city\":800,\"area\":27,\"address\":\"gadf\",\"pincode\":\"121212\",\"loginneeded\":true,\"description\":\"gfadf\"}]', '', ''),
(34, 'qwqwq', 'qwqwqw', 'qwqwqw', 'qwqwqw', 1, 30, 384, 800, 27, 1212, 'ewtwt', 'terqtert', '[]', '', ''),
(35, 'asasa', 'asas', 'asasaasaa', 'asas', 1, 30, 384, 800, 25, 1212121, '12121121212', 'SFWE', '[{\"name\":\"ASASA\",\"relationship\":\"ASASAS\",\"gender\":\"female\",\"age\":\"11\",\"occupation\":\"ASWREQ\",\"phoneNumber\":\"211324546\",\"address\":\"AWDEWQEQWE\",\"loginneeded\":false,\"description\":\"EWQQWERQW\"}]', '', ''),
(36, 'QW', 'Sad', 'QEQWE', 'Ad', 1, 30, 384, 800, 27, 12121, 'sefeter', 'qtweterter', '[]', '', ''),
(37, 'rohit', 'rohit', 'cricketer', 'rohit', 1, 16, 149, 1629, 54, 577201, 'Thandige', 'sdf', '[]', 'suresh123group', 'Male'),
(38, 'lee', 'chong', 'employee', 'leechong', 1, 30, 384, 800, 5, 564362, 'gt5hy 65 fg  t6h7 6 66ythty', 'btrhythy6h', '[]', 'lindangrp', 'Male'),
(39, 'fcdfcdscsd', 'dcsdc', 'csdcd', 'han family', 1, 30, 384, 800, 5, 543321, 'dfnc898r98vh', 'hcuifdivnivf', '[{\"name\":\"vk\",\"relationship\":\"grandson\",\"gender\":\"male\",\"age\":\"24\",\"occupation\":\"bcuyddbv\",\"phoneNumber\":\"9384466178\",\"address\":\"cfdv\",\"loginneeded\":false,\"description\":\"vfvfv\"}]', 'commAdmin', 'Male'),
(40, 'sample', 'sam', 'test', 'commAdmin', 1, 30, 384, 800, 5, 123456, 'sample', 'sample', '[]', 'commAdmin', 'Male');

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `language_id` int(11) NOT NULL,
  `language_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`language_id`, `language_name`) VALUES
(1, 'Tamil'),
(2, 'English'),
(3, 'Hindi'),
(4, 'Telugu'),
(5, 'Bengali'),
(6, 'Marathi'),
(7, 'Gujarati'),
(8, 'Kannada'),
(9, 'Odia'),
(10, 'Malayalam'),
(11, 'Punjabi'),
(12, 'Assamese'),
(13, 'Maithili'),
(14, 'Bhili'),
(15, 'Santali'),
(16, 'Kashmiri'),
(17, 'Gondi'),
(18, 'Nepali'),
(19, 'Sindhi'),
(20, 'Dogri'),
(21, 'Konkani'),
(22, 'Kurukh'),
(23, 'Khandeshi'),
(24, 'Tulu'),
(25, 'Manipuri'),
(26, 'Bodo'),
(27, 'Khasi'),
(28, 'Ho'),
(29, 'Garo'),
(30, 'Mundari'),
(31, 'Tripuri'),
(32, 'Kui'),
(33, 'Lushai'),
(34, 'Halabi'),
(35, 'Korku'),
(36, 'Miri'),
(37, 'Munda'),
(38, 'Karbi'),
(39, 'Koya'),
(40, 'Ao'),
(41, 'Savara'),
(42, 'Konyak'),
(43, 'Kharia'),
(44, 'Malto'),
(45, 'Nissi'),
(46, 'Adi'),
(47, 'Thado'),
(48, 'Lotha'),
(49, 'Coorgi'),
(50, 'Rabha'),
(51, 'Tangkhul'),
(52, 'Kisan'),
(53, 'Angami'),
(54, 'Phom'),
(55, 'Kolami'),
(56, 'Khond'),
(57, 'Dimasa'),
(58, 'Ladakhi'),
(59, 'Sema'),
(60, 'Rajasthani'),
(61, 'Chhattisgarhi'),
(62, 'Haryanvi'),
(63, 'Marwari'),
(64, 'Khortha'),
(68, 'Bundeli'),
(69, 'Malvi'),
(70, 'Sadan'),
(71, 'Mewari'),
(72, 'Awadhi'),
(73, 'Wagdi'),
(74, 'Lamani'),
(75, 'Pahari'),
(76, 'Hara'),
(78, 'Sambalpuri'),
(80, 'Garhwali'),
(81, 'Nimadi'),
(82, 'Surjapuri'),
(83, 'Kumaoni'),
(84, '	Surgujia'),
(86, 'Ahirani'),
(87, 'Banjari'),
(88, 'Bagri'),
(90, 'Brajbhasha'),
(91, 'Dhundhari'),
(95, 'Kangri'),
(96, 'Kachchhi');

-- --------------------------------------------------------

--
-- Table structure for table `livestream`
--

CREATE TABLE `livestream` (
  `id` int(11) NOT NULL,
  `livestream_title` varchar(225) NOT NULL,
  `livestream_description` text NOT NULL,
  `livestream_startdate` text NOT NULL,
  `livestream_enddate` text NOT NULL,
  `livestream_image` varchar(255) NOT NULL,
  `livestream_url` text NOT NULL,
  `Country` int(11) NOT NULL,
  `State` int(11) NOT NULL,
  `District` int(11) NOT NULL,
  `City` int(11) NOT NULL,
  `Area` int(11) NOT NULL,
  `temple_name` varchar(255) NOT NULL,
  `inside_or_outside` varchar(100) NOT NULL,
  `start_time` text NOT NULL,
  `end_time` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `livestream`
--

INSERT INTO `livestream` (`id`, `livestream_title`, `livestream_description`, `livestream_startdate`, `livestream_enddate`, `livestream_image`, `livestream_url`, `Country`, `State`, `District`, `City`, `Area`, `temple_name`, `inside_or_outside`, `start_time`, `end_time`) VALUES
(11, 'qwqwqwqwqwqw', 'qwqwqwqwqwq', 'Mon Oct 31 2022 00:00:00 GMT+0530 (India Standard Time)', 'Fri Oct 28 2022 00:00:00 GMT+0530 (India Standard Time)', 'undefined', 'qwqwqwqwqwq', 0, 0, 0, 0, 0, 'qwqwqwqw', 'undefined', 'Mon Oct 03 2022 17:45:59 GMT+0530 (India Standard Time)', 'Mon Oct 03 2022 12:45:59 GMT+0530 (India Standard Time)'),
(12, 'asas', 'asasa', 'Thu Oct 20 2022 00:00:00 GMT+0530 (India Standard Time)', 'Mon Oct 17 2022 00:00:00 GMT+0530 (India Standard Time)', 'undefined', 'asasa', 0, 0, 0, 0, 0, 'asasasa', 'undefined', 'Mon Oct 03 2022 05:11:49 GMT+0530 (India Standard Time)', 'Mon Oct 03 2022 15:11:49 GMT+0530 (India Standard Time)'),
(13, 'asas', 'asasa', 'Thu Oct 20 2022 00:00:00 GMT+0530 (India Standard Time)', 'Mon Oct 17 2022 00:00:00 GMT+0530 (India Standard Time)', 'undefined', 'asasa', 1, 30, 384, 800, 27, 'asasasa', 'undefined', 'Mon Oct 03 2022 05:11:49 GMT+0530 (India Standard Time)', 'Mon Oct 03 2022 15:11:49 GMT+0530 (India Standard Time)'),
(14, 'qwqwqwqw', 'qwqwqw', 'Thu Oct 27 2022 00:00:00 GMT+0530 (India Standard Time)', 'Sun Oct 23 2022 00:00:00 GMT+0530 (India Standard Time)', 'undefined', 'qwqwqwqw', 1, 30, 384, 800, 27, 'qwqwqw', 'undefined', 'Thu Oct 06 2022 12:30:56 GMT+0530 (India Standard Time)', 'Thu Oct 06 2022 10:29:56 GMT+0530 (India Standard Time)'),
(15, 'QWQWQ', 'ASS', 'Thu Oct 27 2022 00:00:00 GMT+0530 (India Standard Time)', 'Tue Oct 25 2022 00:00:00 GMT+0530 (India Standard Time)', '', 'ASAS', 0, 0, 0, 0, 0, 'QWQWQ', 'undefined', 'Thu Oct 06 2022 11:03:27 GMT+0530 (India Standard Time)', 'Thu Oct 06 2022 10:04:27 GMT+0530 (India Standard Time)'),
(18, 'qqqqq', 'MURUGAA', '12-95-2002', '22-04-1999', 'IMG/PNG', 'HTTTP//ETEW', 0, 0, 0, 0, 0, 'WERTYUIO', 'RE', '10', 'W11'),
(19, 'qqqqq', 'MURUGAA', '12-95-2002', '22-04-1999', 'IMG/PNG', 'HTTTP//ETEW', 0, 0, 0, 0, 0, 'WERTYUIO', 'RE', '10', 'W11'),
(20, 'qqqqq', 'MURUGAA', '12-95-2002', '22-04-1999', 'IMG/PNG', 'HTTTP//ETEW', 0, 0, 0, 0, 0, 'WERTYUIO', 'RE', '10', 'W11'),
(22, 'manjuuu', 'efergtqetqert', 'Mon Oct 17 2022 00:00:00 GMT+0530 (India Standard Time)', 'Tue Oct 25 2022 00:00:00 GMT+0530 (India Standard Time)', 'undefined', 'ferrgegq', 1, 30, 384, 800, 25, 're', 'undefined', 'Tue Oct 11 2022 00:00:39 GMT+0530 (India Standard Time)', 'Tue Oct 11 2022 11:00:39 GMT+0530 (India Standard Time)');

-- --------------------------------------------------------

--
-- Table structure for table `main_god`
--

CREATE TABLE `main_god` (
  `main_god_id` int(11) NOT NULL,
  `god_name` varchar(255) NOT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `main_god`
--

INSERT INTO `main_god` (`main_god_id`, `god_name`, `created_date`, `created_by`, `is_active`) VALUES
(24, 'Vinayagar(Ganesa)(Pillayar)(Ganapati)', '2020-08-14 13:54:50', 1, 1),
(25, 'Murugan(Palani Andavar){Karthikeyan)', '2020-08-14 13:55:13', 1, 1),
(26, 'Brahma', '2020-08-14 13:56:14', 1, 1),
(27, 'Vishnu', '2020-08-14 13:56:20', 1, 1),
(28, 'Shiva', '2020-08-14 13:56:26', 1, 1),
(30, 'Saraswati', '2020-08-14 14:02:42', 1, 1),
(31, 'Lakshmi', '2020-08-14 14:02:48', 1, 1),
(32, 'Durga Devi', '2020-08-14 14:02:56', 1, 1),
(33, 'Anjaneyar(Maruthi)(Hanuman)', '2020-08-14 14:03:07', 1, 1),
(34, 'Ramar', '2020-08-14 14:03:33', 1, 1),
(35, 'Krishna(Gokul)', '2020-08-14 14:03:55', 1, 1),
(36, 'Surya(Suriyan)', '2020-08-14 14:04:14', 1, 1),
(37, 'Agni(Fire)', '2020-08-14 14:04:23', 1, 1),
(38, 'Venkadachalapathy(Perumal)(Venkadesha)', '2020-08-14 14:05:31', 1, 1),
(40, 'Sri Theerthagreeshwarar', '2020-08-21 06:30:50', 1, 1),
(41, 'Meenakshi Amman', '2020-10-22 13:00:31', 1, 1),
(42, 'Sri Shenbahavalliamman', '2020-10-28 04:44:42', 1, 1),
(43, 'Sai Baba', '2020-10-28 07:47:25', 1, 1),
(44, 'Venkataramana', '2020-10-28 10:56:11', 1, 1),
(45, 'Ayyapa Swami', '2020-10-29 05:08:33', 1, 1),
(46, 'Nandi', '2020-10-29 10:02:01', 1, 1),
(47, 'Sri Shanmukha Swamy', '2020-10-30 05:54:48', 1, 1),
(48, 'Dharmaraya Swamy', '2020-10-30 07:25:17', 1, 1),
(49, 'Bhudevi', '2020-10-30 08:54:24', 1, 1),
(50, 'Parvathi', '2020-10-30 09:10:46', 1, 1),
(51, 'Ganesha', '2020-11-02 06:52:45', 1, 1),
(52, 'Banashankari Amma', '2020-11-02 07:28:59', 1, 1),
(53, 'Sri Radha Krishna', '2020-11-04 03:40:33', 1, 1),
(54, ' Balarama', '2020-11-04 03:42:30', 1, 1),
(55, 'Venkateswara', '2020-11-04 03:42:46', 1, 1),
(56, 'Prahlada Narasimha', '2020-11-04 03:43:00', 1, 1),
(57, 'Sri Satyanarayana Swami', '2020-11-04 04:16:25', 1, 1),
(58, 'Sri Nandishwara', '2020-11-04 04:16:38', 1, 1),
(59, 'Sri Anjaneya Swami', '2020-11-04 04:16:52', 1, 1),
(60, 'Sri Subramanya Swami', '2020-11-04 04:17:04', 1, 1),
(64, 'Angala eeswari amman', '2022-05-31 04:56:30', 1, 1),
(72, 'Valli', '2022-10-14 07:23:38', 1, 1),
(73, 'Deivanai', '2022-10-14 07:23:44', 1, 1),
(74, 'Narayana', '2022-10-14 07:23:50', 1, 1),
(75, 'Hayagriva', '2022-10-14 07:23:56', 1, 1),
(76, 'Saneeswaran', '2022-10-14 07:24:02', 1, 1),
(77, 'Garudalwar', '2022-10-14 07:24:08', 1, 1),
(78, 'Dhanvanthri', '2022-10-14 07:24:17', 1, 1),
(79, 'Sri Venkatakrishnan', NULL, 1, 1),
(80, 'Sri Parthasarathy', NULL, 1, 1),
(82, 'Sri Varadharaja Perumal', NULL, 1, 1),
(84, 'Shivan', NULL, 1, 1),
(85, 'Sri Ramanadhaswamy (Shiva)', NULL, 1, 1),
(86, 'Sri Bramarambika Amman', NULL, 1, 1),
(87, 'Sri Kamalakkanni Amman', NULL, 1, 1),
(88, 'Sri lakshmi narayani', NULL, 1, 1),
(89, 'Venkateswara', NULL, 1, 1),
(90, 'Ranganatha perumal', NULL, 1, 1),
(91, 'Lakshmi(Ranganayagi)', NULL, 1, 1),
(92, 'Arulmigu athiparasakthi amman', NULL, 1, 1),
(93, 'Sri Kamatchi Amman', NULL, 1, 1),
(94, 'Samayapuram Mariamman ', NULL, 1, 1),
(95, 'Vaishno Devi', NULL, 1, 1),
(96, ' Devi Durga', NULL, 1, 1),
(97, 'Maa Narayani', NULL, 1, 1),
(98, 'Devi Mata Adi Shakti', NULL, 1, 1),
(99, 'Agneeswarar(shiva)', NULL, 1, 1),
(100, 'kathra sundareswarar', NULL, 1, 1),
(102, 'pandava dhoodha perumal', NULL, 1, 1),
(103, 'Aadhinarayanaperumal', NULL, 1, 1),
(104, 'Abhaya varadheeswarar ', NULL, 1, 1),
(105, 'Athitheeswarar', NULL, 1, 1),
(106, 'Akshayapureeshwarar', NULL, 1, 1),
(107, 'Karkadeshwarar', NULL, 1, 1),
(108, 'sridevi', NULL, 1, 1),
(109, 'sundaranayaki', NULL, 1, 1),
(110, 'perianayagi', NULL, 1, 1),
(111, 'Abhivruddhi nayaki', NULL, 1, 1),
(112, 'somaskandar', NULL, 1, 1),
(113, ' Tripura Sundari', NULL, 1, 1),
(114, 'Ambika', NULL, 1, 1),
(115, 'Devi Bahula', NULL, 1, 1),
(116, 'Tripurmalini', NULL, 1, 1),
(117, 'Shri Vishalakshi', NULL, 1, 1),
(118, 'Sankara(shivan)-Narayanar(vishnu))', NULL, 1, 1),
(119, 'Gomathi Amman', NULL, 1, 1),
(120, 'Jaya Durga', NULL, 1, 1),
(121, 'Mahalingeswarar', NULL, 1, 1),
(122, 'Tiruvankulanathar', NULL, 1, 1),
(123, 'Brihannayaki', NULL, 1, 1),
(124, 'Mangalyeswarar', NULL, 1, 1),
(125, 'Mangalambikai', NULL, 1, 1),
(126, 'Krupakupareswarar', NULL, 1, 1),
(127, 'Annapoorani', NULL, 1, 1),
(128, 'Krupakupareswarar', NULL, 1, 1),
(129, 'chitaradha vallaba perumal', NULL, 1, 1),
(130, 'Bhoomidevi', NULL, 1, 1),
(131, 'Sri Solaimalai Murugan', NULL, 1, 1),
(132, 'Swaminathar', NULL, 1, 1),
(133, 'Kasi Viswanathar(Shivan)', NULL, 1, 1),
(134, 'Ulagamman(Parvathi)', NULL, 1, 1),
(135, 'Danteshwari', NULL, 1, 1),
(136, 'Vaikundanathan', NULL, 1, 1),
(137, 'Sri Kallappiraan', NULL, 1, 1),
(138, 'Ambika ', NULL, 1, 1),
(139, 'Thateeswarar', NULL, 1, 1),
(140, 'Poonguzhali', NULL, 1, 1),
(141, 'Muthukumaraswami', NULL, 1, 1),
(142, 'Mahalakshmiswarar', NULL, 1, 1),
(143, 'Ulaganayaki', NULL, 1, 1),
(144, 'varadaraja perumal', NULL, 1, 1),
(145, 'Perundevi', NULL, 1, 1),
(146, 'Singeeswarar', NULL, 1, 1),
(147, 'Pushpagujambal', NULL, 1, 1),
(148, 'Kameikha ', NULL, 1, 1),
(149, 'Chamundeshwari(Naada Devi,Chamundi)', NULL, 1, 1),
(150, 'Kali ', NULL, 1, 1),
(151, 'Akashapureeswarar', NULL, 1, 1),
(152, 'Brahmmapureeswarar', NULL, 1, 1),
(153, 'Prasana venkateswara perumal', NULL, 1, 1),
(154, 'Brahmagnana pureeswarar', NULL, 1, 1),
(155, 'Agnipureeswarar', NULL, 1, 1),
(156, 'Mangalambikai', NULL, 1, 1),
(157, 'Brahmma vidyambikai', NULL, 1, 1),
(158, 'Alamelu mangai', NULL, 1, 1),
(159, 'Pushpavalli', NULL, 1, 1),
(160, 'Kaundar kuzhali', NULL, 1, 1),
(161, 'Shakti Devi.', NULL, 1, 1),
(162, 'Katyayani', NULL, 1, 1),
(163, 'Ayyappa Swamy', NULL, 1, 1),
(164, 'Thiruvaneshwar', NULL, 1, 1),
(165, 'Sahasra Lakshmeeswarar', NULL, 1, 1),
(166, 'Kailasanathar', NULL, 1, 1),
(167, 'Kamakshi amman', NULL, 1, 1),
(168, 'Brihannayaki', NULL, 1, 1),
(169, 'Karunakaravalli', NULL, 1, 1),
(170, 'Devi Kali', NULL, 1, 1),
(171, 'Natarajar(Shiva)', NULL, 1, 1),
(172, 'Maihar Devi or Maa Sharda Mandir', NULL, 1, 1),
(173, 'Sati Durga', NULL, 1, 1),
(174, 'Narmada Devi ', NULL, 1, 1),
(175, 'Mangal Chandika', NULL, 1, 1),
(176, 'Vaikuntanathar', NULL, 1, 1),
(177, 'Sri Kallapiraan', NULL, 1, 1),
(178, 'Aranganathar namperumal', NULL, 1, 1),
(179, 'Ranganayaki', NULL, 1, 1),
(180, 'Vijayasanar Emmidar kadivan', NULL, 1, 1),
(181, 'Varaguna valli', NULL, 1, 1),
(182, 'Azhagiya manavalar', NULL, 1, 1),
(183, 'Kamalavalli', NULL, 1, 1),
(184, 'Purushothaman', NULL, 1, 1),
(185, 'Poornavalli Ambal', NULL, 1, 1),
(186, 'Rakini or Vishweshwari or Viswamatuka', NULL, 1, 1),
(187, 'Gandaki ', NULL, 1, 1),
(188, 'Hinglaj Devi/ Hingula Devi', NULL, 1, 1),
(189, ' Jwalamukhi', NULL, 1, 1),
(190, 'Vaithamanidhi Perumal', NULL, 1, 1),
(191, 'Pundarikakshan', NULL, 1, 1),
(192, 'Bhooomipalar,kaaysinaventhar', NULL, 1, 1),
(193, 'Sundararaja Perumal', NULL, 1, 1),
(194, 'Aathinathan,Aathippiraan', NULL, 1, 1),
(195, 'Nikaril Mukilvannan', NULL, 1, 1),
(196, 'Appakudathan', NULL, 1, 1),
(197, 'Kamalanathan', NULL, 1, 1),
(198, 'Maayakkoothan', NULL, 1, 1),
(199, 'Sri Devarpiran', NULL, 1, 1),
(200, 'Jagath Rakshagan', NULL, 1, 1),
(201, 'Senthamaraikannan', NULL, 1, 1),
(202, 'Nikshoba vithan kumudhavalli nayaki', NULL, 1, 1),
(203, 'Shenbagavalli', NULL, 1, 1),
(204, 'Malarmagal naachiyar', NULL, 1, 1),
(205, 'Azhagiya valli', NULL, 1, 1),
(206, 'Aatginaathanaayaki', NULL, 1, 1),
(207, 'Kuzhaikkaaduvallu naachiyar', NULL, 1, 1),
(208, 'Indiradevi,Kamalavalli', NULL, 1, 1),
(209, 'Kamalavalli naachiyar', NULL, 1, 1),
(210, 'Kulandaivalli', NULL, 1, 1),
(211, 'Alamelmanga thayar', NULL, 1, 1),
(212, 'Padmasanavalli', NULL, 1, 1),
(213, 'Karunthadankanni', NULL, 1, 1),
(214, 'Varahi', NULL, 1, 1),
(215, 'Kiriteswari', NULL, 1, 1),
(216, 'Maha Vishnu', NULL, 1, 1),
(217, 'Maayapiran(Vishnu)', NULL, 1, 1),
(218, 'Porkodi Naachiyar (Lakshmi)', NULL, 1, 1),
(219, 'Sakthi', NULL, 1, 1),
(220, 'Uma Devi', NULL, 1, 1),
(221, 'Parthasarathy', NULL, 1, 1),
(222, 'Pambanaiappan (Vishnu)', NULL, 1, 1),
(223, ' Gosala Krishna (Vishnu)', NULL, 1, 1),
(224, 'Sree Vallabhan', NULL, 1, 1),
(225, 'Makara Nedunkuzhaikathar ', NULL, 1, 1),
(226, 'Sunanda', NULL, 1, 1),
(227, 'Jayanti ', NULL, 1, 1),
(228, 'Sri Nindra narayana perumal', NULL, 1, 1),
(229, 'Sri Venkatachalapathy', NULL, 1, 1),
(230, ' Vamana (Vishnu)', NULL, 1, 1),
(231, 'Thrikkakarayappan', NULL, 1, 1),
(232, 'Perunchelvanayagi', NULL, 1, 1),
(233, 'Vathsalyavalli', NULL, 1, 1),
(234, 'Lakshmana Perumal(Vishnu)', NULL, 1, 1),
(235, 'Thiruvithamdappan (Shiva)', NULL, 1, 1),
(236, 'Abhaya Pradhan(Vishnu)', NULL, 1, 1),
(237, ' Uyyavantha Perumal(Vishnu), Padmasini (Lakshmi)', NULL, 1, 1),
(238, '	 Tiruvikrama Narayana Perumal (Vishnu)', NULL, 1, 1),
(239, 'Sri Yoga Narasimhar', NULL, 1, 1),
(240, 'Purushothaman Perumal (Vishnu)', NULL, 1, 1),
(241, 'Navamukunda (Vishnu)', NULL, 1, 1),
(242, '	 Adikesava Perumal (Vishnu)', NULL, 1, 1),
(243, '	 Sathyamurthy Perumal (Vishnu)', NULL, 1, 1),
(244, 'Narasimha(Vishnu)', NULL, 1, 1),
(245, 'Gajendra varadhan,Aadhimola perumal', NULL, 1, 1),
(246, 'Shenbagavalli', NULL, 1, 1),
(247, 'Valvil raman,Chakravarthi thirumagan', NULL, 1, 1),
(248, 'Poraamaraiyaal', NULL, 1, 1),
(249, 'Andalakkum Aiyan', NULL, 1, 1),
(250, 'Bargavi ranganathar', NULL, 1, 1),
(251, 'Sarangapani ,Aravamudhan', NULL, 1, 1),
(252, 'Komalavalli', NULL, 1, 1),
(253, 'Muktinath(Vishnu)', NULL, 1, 1),
(254, 'Neelamega Perumal', NULL, 1, 1),
(255, 'Oppilliappan', NULL, 1, 1),
(256, 'Tirunarayur nambi', NULL, 1, 1),
(257, 'Saranatha perumal', NULL, 1, 1),
(258, 'Bhaktavatsala perumal', NULL, 1, 1),
(259, 'Neelamega perumal', NULL, 1, 1),
(260, 'Neelamegar ,veera Narasimhar', NULL, 1, 1),
(261, 'Jagannathan,Vinnayaga perumal', NULL, 1, 1),
(262, 'Kolavilli ramar,Sheerapathi nathan', NULL, 1, 1),
(263, 'Devadhirajan, Aamaruviappan', NULL, 1, 1),
(264, 'Aruma kadal amudhan', NULL, 1, 1),
(265, 'Naanmadhia perumal', NULL, 1, 1),
(266, 'Parimala ranganathar', NULL, 1, 1),
(267, 'Trivikrama narayanan', NULL, 1, 1),
(268, 'Kudamadu Koothan', NULL, 1, 1),
(269, 'Purushothamar', NULL, 1, 1),
(270, 'Perarulalan', NULL, 1, 1),
(271, 'Vaikuntanathar', NULL, 1, 1),
(272, 'Senganmal Ranganathar', NULL, 1, 1),
(273, 'Annan perumal kannan narayanar', NULL, 1, 1),
(274, 'Govindarajar', NULL, 1, 1),
(275, 'Bhoomadevi,Poonaapan', NULL, 1, 1),
(276, 'Vanjula devi', NULL, 1, 1),
(277, 'Sara nayaki,Pancha lakshmi', NULL, 1, 1),
(278, 'Kannamanagai nayaki', NULL, 1, 1),
(279, 'Kannapura Nayaki Sowriraja', NULL, 1, 1),
(280, 'Narayanar', NULL, 1, 1),
(281, 'Jagannathan', NULL, 1, 1),
(282, 'Maragathavalli', NULL, 1, 1),
(283, 'Sengamalavalli', NULL, 1, 1),
(284, 'Thirumamagal Nachiar', NULL, 1, 1),
(285, 'Thalaichanga Nachiar', NULL, 1, 1),
(286, 'Parimala Ranganayaki', NULL, 1, 1),
(287, 'Lokanayaki', NULL, 1, 1),
(288, 'Amirthavalli', NULL, 1, 1),
(289, 'Purushothama nayaki', NULL, 1, 1),
(290, 'Alli mamalar Nachiar', NULL, 1, 1),
(291, 'Vaikundhavalli', NULL, 1, 1),
(292, 'Shengamalavalli', NULL, 1, 1),
(293, 'Alamel Mangai', NULL, 1, 1),
(294, 'Devadhi devan', NULL, 1, 1),
(295, 'Shiva - Parvathi', NULL, 1, 1),
(296, 'Kalamegaperumal', NULL, 1, 1),
(297, 'Sri Kallalagar (Sundararaja Perumal) (Vishnu)', NULL, 1, 1),
(298, '	 Appakkudathaan Perumal (Vishnu)', NULL, 1, 1),
(299, '	Kola Valvill Ramar (Vishnu)', NULL, 1, 1),
(300, '	Thiruvazhmarban (Vishnu)', NULL, 1, 1),
(301, 'Adi Jagannatha Perumal', NULL, 1, 1),
(302, 'Devaraja perumal or Sri Hari', NULL, 1, 1),
(303, ' Sri Moorthy Perumal', NULL, 1, 1),
(304, '	 Viyooga Sundarrajan (Vishnu)', NULL, 1, 1),
(306, 'Erukankudi MariAmman', NULL, 1, 1),
(307, 'Karupaswamy', NULL, 1, 1),
(308, '	Yathothkari (Vishnu)', NULL, 1, 1),
(309, 'Sri Karunakara Perumal', NULL, 1, 1),
(310, 'Devanathar achutan', NULL, 1, 1),
(311, 'Trivikramar ,aayanar,Kovalan', NULL, 1, 1),
(312, 'Varadaraja perumal', NULL, 1, 1),
(313, 'Aadi kesava perumal', NULL, 1, 1),
(314, 'Tiru neeragathan', NULL, 1, 1),
(315, 'Pandava dhoodha perumal', NULL, 1, 1),
(316, 'Nilathunda perumal', NULL, 1, 1),
(317, 'Sengamalam', NULL, 1, 1),
(318, 'Poongaval Nachair', NULL, 1, 1),
(319, 'Perundevi', NULL, 1, 1),
(320, 'Alarmal mangai Padmasani', NULL, 1, 1),
(321, 'Jagadesa perumal', NULL, 1, 1),
(322, 'Sathyabama ,Rukmani', NULL, 1, 1),
(323, 'Ner uruvilla valli', NULL, 1, 1),
(324, 'KULASAI MUTHARAMMAN ', NULL, 1, 1),
(325, '	Shri Grishneshwar (Shiva)', NULL, 1, 1),
(326, '	Bhimashankar (Shiva)', NULL, 1, 1),
(327, 'SAI  BABA OF SHIRDI', NULL, 1, 1),
(328, 'Vishwanath (Shiva)', NULL, 1, 1),
(329, 'Vaidyanatha(Shiva)', NULL, 1, 1),
(330, '	Loganathar (Vishnu)', NULL, 1, 1),
(331, 'Bannari  Mariamman', NULL, 1, 1),
(332, 'PUNNAINALLUR MARIAMMAN', NULL, 1, 1),
(333, 'thiru', NULL, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `matrimonial`
--

CREATE TABLE `matrimonial` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `date_of_birth` varchar(20) DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `zodiac_sign` varchar(40) DEFAULT NULL,
  `star` varchar(40) DEFAULT NULL,
  `salary` varchar(40) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `education_qualification` varchar(40) DEFAULT NULL,
  `country` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `district` int(11) DEFAULT NULL,
  `city` int(11) DEFAULT NULL,
  `area` int(11) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `pincode` int(11) DEFAULT NULL,
  `groupId` int(11) DEFAULT NULL,
  `Groupname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `matrimonial`
--

INSERT INTO `matrimonial` (`id`, `name`, `phone_number`, `date_of_birth`, `gender`, `zodiac_sign`, `star`, `salary`, `description`, `education_qualification`, `country`, `state`, `district`, `city`, `area`, `address`, `pincode`, `groupId`, `Groupname`) VALUES
(1, 'kohli', '987654312', 'Tue Sep 27 2022 11:0', 'M', 'cancer', 'rohini', '1 lakh per month', 'This is about myself', 'BCA', 1, 2, 3, 4, 5, 'Delhi', 98523, 1, ''),
(4, 'Ajith', '876543212', 'Wed May 08 2024 00:0', 'M', 'ss', 'sss', '11111', 'heeee', 'bnm', 1, 30, 95, 794, 8, 'jnkmnm', 654321, 0, ''),
(5, 'Anoop', '876543201', 'Wed Mar 17 1999 00:0', 'Male', 'kumbam', 'super star', '1 lakh', 'hek', 'B.E.Mechanical Engineering', 1, 30, 95, 847, 20, 'bbhhb', 12345, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `notifyDate` varchar(255) DEFAULT NULL,
  `groupId` int(11) DEFAULT NULL,
  `Groupname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`id`, `title`, `description`, `notifyDate`, `groupId`, `Groupname`) VALUES
(2, 'Marriage', 'There is a marriage, everyone must visit', 'Wed Sep 28 2022 18:05:16 GMT+0530 (India Standard Time)', 1, ''),
(3, 'new notification', 'There is a new notification, everyone must visit', 'Thu Sep 29 2022 14:01:18 GMT+0530 (India Standard Time)', 1, ''),
(4, 'qwwwww', 'qwwwqwqwqw', 'undefined', 0, ''),
(5, 'qqqqqqqqqqqqqqqqq', 'qqqqqqqqqqqqqqqqqqqqqqqqqq', 'undefined', 0, 'commAdmin'),
(6, 'QSA', 'ASASA', 'undefined', 0, ''),
(7, 'rajaa', 'asasas', 'undefined', 0, 'commAdmin'),
(8, 'aaaaaaaaaaaaa', 'aaaaaaaaaa', 'undefined', 0, 'commAdmin'),
(16, 'sdd', 'sadasd', 'undefined', 0, 'commAdmin'),
(22, 'Lord Shivan ', 'Welcome All', 'Wed Jun 26 2024 00:00:00 GMT+0530 (India Standard Time)', 0, 'CFC');

-- --------------------------------------------------------

--
-- Table structure for table `offer`
--

CREATE TABLE `offer` (
  `id` int(11) NOT NULL,
  `vendor_id` int(11) NOT NULL DEFAULT 0,
  `PromoCode` text DEFAULT NULL,
  `Category` varchar(255) DEFAULT NULL,
  `StartDate` text DEFAULT NULL,
  `EndDate` text DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Subcategory` varchar(255) DEFAULT NULL,
  `photo` text CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `offer`
--

INSERT INTO `offer` (`id`, `vendor_id`, `PromoCode`, `Category`, `StartDate`, `EndDate`, `Description`, `Subcategory`, `photo`) VALUES
(2, 9, 'fgyu643', 'Manpower', '6.6.2022', '7.6.2022', 'sdf455hh', 'Iyer', NULL),
(6, 9, 'hskjhjkh', 'Manpower', '5.6.2022', '7.5.2022', ' lhjlahskjh dshhsdkhf dhsjkfhkj ', 'Iyer', NULL),
(7, 3, 'fdgrfdgfdg', 'fdgdfg', '12.12.12', '1.1.2022', 'ghtryhtrfhgf', NULL, NULL),
(12, 243, 'hjklljh222', 'shop', '1.1.2022', '2.2.2022', 'sjkhj sajkh khsjdh ', 'kkk', NULL),
(13, 243, 'hjklljh222', 'shop', '1.1.2022', '2.2.2022', 'sjkhj sajkh khsjdh ', 'kkk', NULL),
(14, 12, 'hjklljh222', 'shop', '1.1.2022', '2.2.2022', 'sjkhj sajkh khsjdh ', 'kkk', NULL),
(50, 9, 'kjhkj', 'ManPowerr', '2022-12-05', '2022-12-30', '32233232', 'Iyer', NULL),
(82, 43, 'DFH78', 'tansport', '2023-02-09', '2023-02-28', 'Limited time offer ', 'Tours & Travels', '/public/offer_image/Screenshot from 2023-02-07 18-09-04.png'),
(83, 43, 'DFH78', 'tansport', '2023-02-09', '2023-02-28', 'Limited time offer ', 'Tours & Travels', '/public/offer_image/Screenshot from 2023-02-07 18-09-04.png'),
(84, 43, 'flkdf', 'tansport', '2023-02-10', '2023-02-28', 'Limited time offer ', 'Tours & Travels', '/public/offer_image/Screenshot from 2023-02-07 17-54-47.png'),
(88, 43, 'kjgglkj', 'tansport', '2023-02-16', '2023-02-23', 'Limited time offer ', 'Tours & Travels', '/public/offer_image/Screenshot from 2023-02-07 17-54-47.png'),
(94, 44, 'sf1111112', 'tansport', '2120-02-11', '2012-11-11', 'fds', 'Tours & Travels', '/public/offer_image/2015-12-23 (1).jpg'),
(95, 44, 'sf1111112', 'tansport', '2120-02-11', '2012-11-11', 'fds', 'Tours & Travels', '/public/offer_image/2015-12-23 (1).jpg'),
(96, 44, 'sf1111112', 'tansport', '2120-02-11', '2012-11-11', 'fds', 'Tours & Travels', '/public/offer_image/2015-12-23 (1).jpg'),
(97, 44, 'sf1111112', 'tansport', '2120-02-11', '2012-11-11', 'fds', 'Tours & Travels', '/public/offer_image/2015-12-23 (1).jpg'),
(98, 44, 'sf1111112', 'tansport', '2120-02-11', '2012-11-11', 'fds', 'Tours & Travels', '/public/offer_image/2015-12-23 (1).jpg'),
(99, 44, 'sf1111112', 'tansport', '2120-02-11', '2012-11-11', 'fds', 'Tours & Travels', '/public/offer_image/2015-12-23 (1).jpg'),
(100, 44, 'sf1111112', 'tansport', '2120-02-11', '2012-11-11', 'fds', 'Tours & Travels', '/public/offer_image/2015-12-23 (1).jpg'),
(101, 44, 'sf1111112', 'tansport', '2120-02-11', '2012-11-11', 'fdsdddddddddd', 'Tours & Travels', '/public/offer_image/2015-12-23 (1).jpg'),
(102, 44, 'sf1111112', 'tansport', '2120-02-11', '2012-11-11', 'fdsdddddddddd', 'Tours & Travels', '/public/offer_image/2015-12-23 (1).jpg'),
(103, 44, 'sf1111112', 'tansport', '2120-02-11', '2012-11-11', 'd', 'Tours & Travels', '/public/offer_image/2015-12-23 (1).jpg'),
(104, 44, 'sf1111112', 'tansport', '2120-02-11', '2012-11-11', 'd', 'Tours & Travels', '/public/offer_image/2015-12-23 (1).jpg'),
(105, 44, 'sf1111112', 'tansport', '2120-02-11', '2012-11-11', 'd', 'Tours & Travels', '/public/offer_image/2015-12-23 (1).jpg'),
(106, 44, 'sf1111112', 'photography', '2120-02-11', '2012-11-11', 'd', 'Car  123', '/public/offer_image/2015-12-23 (1).jpg'),
(107, 44, 'sf1111112', 'photography', '2120-02-11', '2012-11-11', 'd', 'Car  123', '/public/offer_image/2015-12-23 (1).jpg'),
(108, 44, 'sf1111112', 'photography', '2120-02-11', '2012-11-11', 'd', 'Car  123', '/public/offer_image/2015-12-23 (1).jpg'),
(109, 44, 'sf1111112', 'photography', '2120-02-11', '2012-11-11', 'd', 'Car  123', '/public/offer_image/2015-12-23 (1).jpg'),
(110, 44, 'sf1111112', 'photography', '2120-02-11', '2012-11-11', 'd', 'Car  123', '/public/offer_image/2015-12-23 (1).jpg'),
(111, 44, 'sf1111112', 'photography', '2120-02-11', '2012-11-11', 'd', 'Car  123', '/public/offer_image/2015-12-23 (1).jpg'),
(112, 44, 'sf1111112', 'photography', '2120-02-11', '2012-11-11', '453', 'Car  123', '/public/offer_image/2015-12-23 (1).jpg'),
(113, 44, 'sf1111112', 'photography', '2120-02-11', '2012-11-11', '453', 'Car  123', '/public/offer_image/2015-12-23 (1).jpg'),
(114, 44, 'sf1111112', 'photography', '2120-02-11', '2122-11-11', '453', 'Car  123', '/public/offer_image/2015-12-23 (1).jpg'),
(115, 44, 'sf1111112', 'photography', '2120-02-11', '2122-11-11', '453', 'Car  123', '/public/offer_image/2015-12-23 (1).jpg'),
(116, 44, 'sf1111112', 'photography', '2120-02-11', '2122-11-11', '453', 'Car  123', '/public/offer_image/2015-12-23 (1).jpg'),
(117, 44, 'sf1111112', 'photography', '2120-02-11', '2122-11-11', '453', 'Car  123', '/public/offer_image/2015-12-23 (1).jpg'),
(118, 44, 'sf1111112', 'photography', '2120-02-11', '2122-11-11', '453', 'Car  123', '/public/offer_image/2015-12-23 (1).jpg'),
(119, 44, 'sf1111112', 'photography', '2120-02-11', '2122-11-11', '453', 'Car  123', '/public/offer_image/2015-12-23 (1).jpg'),
(122, 43, 'SDFGHJ', 'tansport', '2023-02-23', '2023-02-25', 'Limited time offer ', 'Tours & Travels', 'undefined'),
(123, 43, 'UYTREE', 'tansport', '2023-03-09', '2023-03-31', 'Limited time offer ', 'Tours & Travels', '/public/offer_image/trmpjdfhndfkj.jpg'),
(124, 43, 'UYTREE', 'tansport', '2023-03-09', '2023-03-31', 'Limited time offer ', 'Tours & Travels', '/public/offer_image/trmpjdfhndfkj.jpg'),
(125, 43, 'RERTVGB', 'tansport', '2023-03-17', '2023-03-24', 'Limited time offer ', 'Tours & Travels', '/public/offer_image/trmpjdfhndfkj.jpg'),
(126, 9, 'vest versus', 'tansport', '2022-02-04', '2023-11-28', 'Best offer to use', 'Tours & Travels', 'undefined');

-- --------------------------------------------------------

--
-- Table structure for table `other_gods`
--

CREATE TABLE `other_gods` (
  `other_god_id` int(11) NOT NULL,
  `main_god_id` int(11) NOT NULL,
  `other_god_name` varchar(255) DEFAULT NULL,
  `direction` int(11) DEFAULT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `other_gods`
--

INSERT INTO `other_gods` (`other_god_id`, `main_god_id`, `other_god_name`, `direction`, `created_date`, `created_by`, `is_active`) VALUES
(1, 1, ' SRI Vinayagar', 1, '2020-05-18 10:43:30', 1, 1),
(2, 1, 'Sri Balamurugan', 1, '2020-05-18 10:43:30', 1, 1),
(3, 1, 'Sri Mariyamman', 1, '2020-05-18 10:43:30', 1, 1),
(4, 1, 'Sri Dhurkai amman', 1, '2020-05-18 10:43:30', 1, 1),
(5, 1, 'Sri Thachinna Muruthi', 1, '2020-05-18 10:43:30', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `other_specaility`
--

CREATE TABLE `other_specaility` (
  `other_specaility_id` int(11) NOT NULL,
  `specaility_id` int(11) NOT NULL,
  `other_spec_name` varchar(255) NOT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `other_specaility`
--

INSERT INTO `other_specaility` (`other_specaility_id`, `specaility_id`, `other_spec_name`, `created_date`, `created_by`, `is_active`) VALUES
(1, 1, 'Thirumachanam', '2020-06-23 10:52:45', 1, 1),
(2, 1, 'Manchal', '2020-06-23 10:52:45', 1, 1),
(3, 1, 'Veellam', '2020-06-23 10:52:45', 1, 1),
(4, 2, 'Pongal', '2020-06-23 10:52:45', 1, 1),
(5, 2, 'Kara Pongal', '2020-06-23 10:52:45', 1, 1),
(6, 2, 'Vada', '2020-06-23 10:52:45', 1, 1),
(7, 3, 'Thirumachanam', '2020-06-23 10:52:45', 1, 1),
(8, 3, 'Oil', '2020-06-23 10:52:45', 1, 1),
(9, 3, 'Eallu', '2020-06-23 10:52:45', 1, 1),
(10, 4, 'Thirumachanam', '2020-06-23 10:52:45', 1, 1),
(11, 4, 'Vada', '2020-06-23 10:52:45', 1, 1),
(12, 4, 'Vennai', '2020-06-23 10:52:45', 1, 1),
(13, 5, 'Pulisadham', '2020-06-23 10:52:45', 1, 1),
(14, 5, 'Flowers', '2020-06-23 10:52:45', 1, 1),
(15, 5, 'Marikulunth', '2020-06-23 10:52:45', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `outside_temple`
--

CREATE TABLE `outside_temple` (
  `id` int(11) NOT NULL,
  `temple_code` int(11) NOT NULL,
  `temple_pooja` varchar(255) NOT NULL,
  `searchkey` varchar(255) NOT NULL,
  `position` int(11) NOT NULL,
  `active` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `outside_temple`
--

INSERT INTO `outside_temple` (`id`, `temple_code`, `temple_pooja`, `searchkey`, `position`, `active`, `created_at`, `updated_at`) VALUES
(3, 222, 'Ghanapathi pooja', 'Ghanapathi pooja', 1, 1, '2022-03-02 16:47:24', '2022-03-02 16:47:24');

-- --------------------------------------------------------

--
-- Table structure for table `pariharams`
--

CREATE TABLE `pariharams` (
  `pariharam_id` int(11) NOT NULL,
  `pariharam_name` varchar(255) NOT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `pariharams`
--

INSERT INTO `pariharams` (`pariharam_id`, `pariharam_name`, `created_date`, `created_by`, `is_active`) VALUES
(8, 'Magalaya Dhosham (Marriage Dhosham)', '2020-08-14 13:17:23', 1, 1),
(9, 'For Kids', '2020-08-14 14:07:22', 1, 1),
(11, 'For Health', '2020-08-14 14:07:42', 1, 1),
(13, ' Mahamrityunjay Jap/Pooja', '2020-08-18 08:31:16', 1, 1),
(14, 'Navgraha Jap (1000)', '2020-08-18 08:32:37', 1, 1),
(15, 'Rudrabhishek', '2020-08-18 08:34:45', 1, 1),
(18, 'sarpa dosham', '2022-04-26 08:34:23', 1, 1),
(24, 'deepam', '2022-10-12 10:55:44', 1, 1),
(26, 'Relief from adverse planetory effects,Child boon', NULL, 1, 1),
(27, 'Property disputes,unity in family,women awaiting marriage', NULL, 1, 1),
(28, 'Rohini starrers would cross over any problems', NULL, 1, 1),
(30, 'child boon', NULL, 1, 1),
(31, 'mrutunjaya homa', NULL, 1, 1),
(32, 'Obstacles in wedding proposals', NULL, 1, 1),
(33, 'sesame oil abishegam', NULL, 1, 1),
(34, 'Ragu and ketu', NULL, 1, 1),
(35, 'Ghee lamps,relief from adverse planetary problems', NULL, 1, 1),
(36, 'child boon', NULL, 1, 1),
(37, 'prayer for wedding boon', NULL, 1, 1),
(38, 'for wedding ,education,child boon', NULL, 1, 1),
(39, 'Remedial poojas for adverse planetary aspects', NULL, 1, 1),
(40, 'cardiac problems', NULL, 1, 1),
(41, 'Relief from planetary adversity', NULL, 1, 1),
(42, 'vision problems', NULL, 1, 1),
(43, 'cures joints and bone disease', NULL, 1, 1),
(44, 'obstacles in marriage', NULL, 1, 1),
(45, 'untiy in family', NULL, 1, 1),
(46, 'Excellence in academic pursuit', NULL, 1, 1),
(47, 'Good education and brain health', NULL, 1, 1),
(48, 'proficiency in music', NULL, 1, 1),
(49, 'debt burden and child boon', NULL, 1, 1),
(50, 'illness due to water related problems', NULL, 1, 1),
(51, 'Impediments in wedlock', NULL, 1, 1),
(52, 'Child education wedding boon', NULL, 1, 1),
(54, 'Unity among couples', NULL, 1, 1),
(55, 'Relief from adverse planetory effects,Child boon', NULL, 1, 1),
(56, 'Navahraha poojai', NULL, 1, 1),
(57, 'Relief from adverse aspects of planets faced by them', NULL, 1, 1),
(58, 'Freedom from fear of death,facing endless problems', NULL, 1, 1),
(59, 'Dosha faced will disappear if pray to perumal', NULL, 1, 1),
(60, 'Seeking relief from adverse aspects of nine planets', NULL, 1, 1),
(61, 'Removal of obstacles in alliance', NULL, 1, 1),
(62, 'Martial problem', NULL, 1, 1),
(63, 'successful marriage alliances and education', NULL, 1, 1),
(64, 'Longevity', NULL, 1, 1),
(65, 'Promotion in Job', NULL, 1, 1),
(66, 'Success in endavours', NULL, 1, 1),
(67, 'Wishes granted', NULL, 1, 1),
(68, 'Worship yoga narshimar in prakaaram are sure to get their prayers', NULL, 1, 1),
(69, 'Family unity and educational pursuits', NULL, 1, 1),
(70, 'Prayers will certainly bring them what they desire and expect', NULL, 1, 1),
(72, 'Unity among couples', NULL, 1, 1),
(73, 'Relief from delay in marriages and negative aspects', NULL, 1, 1),
(74, 'Relief from consequences of sins comitted', NULL, 1, 1),
(75, 'Removal of obstacles in wedding,child boon,job seekers', NULL, 1, 1),
(76, 'Prayer for family unity welfare prosperity employment promotions', NULL, 1, 1),
(77, 'Praying to veera narasimha to realise their wishes', NULL, 1, 1),
(78, 'Reunion of couples, child boon, cure from neurology', NULL, 1, 1),
(79, 'Vision problems, delay in marriage', NULL, 1, 1),
(80, 'Removal of obstacles inchild boon marriage,academic pursuits', NULL, 1, 1),
(81, 'Women concerned about longevity of their husband and mangalya stability', NULL, 1, 1),
(82, 'Adverse effects of planet moon', NULL, 1, 1),
(83, 'Undertaking the fasting may start the practice of this temple', NULL, 1, 1),
(84, 'Success in endavours,promotion in jobs', NULL, 1, 1),
(85, 'Removal of delays in marriage', NULL, 1, 1),
(86, 'Releived in poverty', NULL, 1, 1),
(87, 'Unity in family', NULL, 1, 1),
(88, 'Beleived that prayer to perumal gives immediate respond', NULL, 1, 1),
(89, 'Celebrate 60s,70s,80s birthday in this temple', NULL, 1, 1),
(90, 'Pray here to be fair on their part in there endeavours', NULL, 1, 1),
(91, 'Economic stability of children healthy', NULL, 1, 1),
(92, 'Seeking high position promotions', NULL, 1, 1),
(93, 'Excellence in education', NULL, 1, 1),
(94, 'Facing problems in biulding sites', NULL, 1, 1),
(95, 'Staunch belief that those born in rohini star', NULL, 1, 1),
(96, 'SUffering from skin and stomach disease', NULL, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `pooja`
--

CREATE TABLE `pooja` (
  `id` int(11) NOT NULL,
  `poojaName` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pooja`
--

INSERT INTO `pooja` (`id`, `poojaName`, `description`, `image`) VALUES
(1, 'House Warming', 'Traditionally, people celebrate their first entry into their new home by performing a griha pravesh or housewarming ceremony and inviting friends and family on this occasion. The term ‘housewarming’ may have originated years ago, when there was no access to central heating in the house. People would gather around the fireplace that would be lit with the wood that guests brought, to literally ‘warm’ the house. Traditionally, people celebrate their first entry into their new home by performing a griha pravesh or housewarming ceremony and inviting friends and family on this occasion. The term ‘housewarming’ may have originated years ago, when there was no access to central heating in the house. People would gather around the fireplace that would be lit with the wood that guests brought, to literally ‘warm’ the house', 'https://5.imimg.com/data5/CO/GL/MY-5671492/house-warming-catering-services-500x500.png'),
(2, 'Marriage', 'Traditionally, people celebrate their first entry into their new home by performing a griha pravesh or housewarming ceremony and inviting friends and family on this occasion. The term ‘housewarming’ may have originated years ago, when there was no access to central heating in the house. People would gather around the fireplace that would be lit with the wood that guests brought, to literally ‘warm’ the house. Traditionally, people celebrate their first entry into their new home by performing a griha pravesh or housewarming ceremony and inviting friends and family on this occasion. The term ‘housewarming’ may have originated years ago, when there was no access to central heating in the house. People would gather around the fireplace that would be lit with the wood that guests brought, to literally ‘warm’ the house', 'https://images.unsplash.com/photo-1542042161784-26ab9e041e89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFycmlhZ2V8ZW58MHx8MHx8&w=1000&q=80'),
(3, 'Ganesh Chaturthi', 'Ganesh Chaturthi, also known as Vinayaka Chaturthi, is a significant Hindu festival that marks the birth of Lord Ganesha, the elephant-headed deity revered as the remover of obstacles and the god of wisdom, prosperity, and new beginnings. Celebrated with immense fervor across India, particularly in Maharashtra, Karnataka, Andhra Pradesh, Telangana, Tamil Nadu, Kerala, and Goa, the festival typically lasts for ten days. It begins on the fourth day of the Hindu lunar month of Bhadrapada (usually in August or September). Elaborate clay idols of Lord Ganesha are installed in homes and public pandals (temporary stages), and devotees offer prayers, sweets (especially modaks, Ganesha\'s favorite), and perform aarti (ritual of worship with fire). The celebrations are marked by music, dance, and cultural performances. On the final day, known as Anant Chaturdashi, the idols are taken in grand processions for immersion in water bodies, symbolizing Ganesha\'s return to his celestial abode and the cycle of creation and dissolution. This festival fosters community bonding and spiritual renewal, invoking the blessings of Ganesha for a prosperous and obstacle-free life', 'https://m.economictimes.com/thumb/msid-93728283,width-1200,height-900,resizemode-4,imgsize-118038/ganesh-chaturthi-2022-all-you-may-want-to-know-about-the-festival.jpg'),
(4, 'Sasti', 'Sashti, also known as Skanda Sashti, is a significant Hindu festival dedicated to Lord Murugan, also known as Skanda or Kartikeya, the son of Lord Shiva and Parvati. Celebrated primarily in the southern states of India, especially Tamil Nadu, this festival commemorates the victory of Lord Murugan over the demon Surapadman, symbolizing the triumph of good over evil. Sashti is observed on the sixth day (Sashti) of the lunar fortnight, and Skanda Sashti specifically occurs during the waxing phase of the moon in the Tamil month of Aippasi (October-November). Devotees undertake fasting and penance during the six days leading up to the festival, engaging in prayer, recitation of hymns, and participation in processions and temple ceremonies. The highlight of the festival is the dramatic re-enactment of the epic battle between Murugan and Surapadman, culminating in the deity\'s victory. Temples dedicated to Lord Murugan, such as the Arupadai Veedu (six abodes) in Tamil Nadu, become centers of intense devotional activity during this time. Sashti fosters a sense of spiritual purification and renewal, inspiring devotees to seek the divine protection and blessings of Lord Murugan for courage, strength, and wisdom in overcoming life\'s challenges. Show Less', 'https://wallpapercave.com/wp/wp4024398.jpg'),
(5, 'Pradhosam', 'Pradosham, also known as Pradosha Vrata, is a highly revered Hindu observance dedicated to Lord Shiva. It occurs twice every lunar month on the thirteenth day (Trayodashi) during the waxing (Shukla Paksha) and waning (Krishna Paksha) phases of the moon. Pradosham is considered an auspicious time to seek the blessings of Lord Shiva and Parvati for the removal of sins and the fulfillment of desires. The term \"Pradosham\" signifies the twilight period, which is the most sacred time for worship on this day. Devotees observe fasting and engage in special prayers, rituals, and the chanting of Shiva mantras, particularly during the Pradosha Kaala, which is approximately one and a half hours before and after sunset. In temples, the Nandi (the sacred bull and vehicle of Shiva) is often worshiped, and special Abhishekam (ritual bathing of the deity) and Archana (ritualistic offerings) are performed. The Siva temples, particularly in South India, see a significant influx of devotees during Pradosham. The observance is believed to wash away one\'s sins, purify the mind and body, and bring peace, prosperity, and spiritual elevation. Through this devoted worship, believers seek to achieve a deeper connection with Lord Shiva, invoking his divine grace for a life free of obstacles and filled with divine blessings.', 'https://t3.ftcdn.net/jpg/02/50/09/28/360_F_250092890_sLXJrHYIqKJQAC8hM8ldvRVYqYrcjtgR.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `priest_function`
--

CREATE TABLE `priest_function` (
  `id` int(11) NOT NULL,
  `function_name` varchar(50) DEFAULT NULL,
  `function_type` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `priest_function`
--

INSERT INTO `priest_function` (`id`, `function_name`, `function_type`) VALUES
(1, 'Tulabhara', 1),
(2, 'Karma', 2),
(3, 'Vahana Pooja', 2),
(4, 'Marriage', 1),
(7, 'Devi karya', 1),
(8, 'annadhana', 1),
(9, 'upanayana', 1);

-- --------------------------------------------------------

--
-- Table structure for table `shops`
--

CREATE TABLE `shops` (
  `shops_id` int(11) NOT NULL,
  `temple_id` text DEFAULT NULL,
  `shop_name` varchar(255) DEFAULT NULL,
  `kind_of_shop` text DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `state_id` int(11) DEFAULT NULL,
  `district_id` int(11) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `area_id` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `pincode` varchar(15) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `shop_image` text DEFAULT NULL,
  `opening_time` varchar(10) DEFAULT NULL,
  `closing_time` varchar(10) DEFAULT NULL,
  `active_state` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shops`
--

INSERT INTO `shops` (`shops_id`, `temple_id`, `shop_name`, `kind_of_shop`, `country_id`, `state_id`, `district_id`, `city_id`, `area_id`, `address`, `pincode`, `phone`, `shop_image`, `opening_time`, `closing_time`, `active_state`) VALUES
(1, '114', 'Naresh pooja store', 'pooja store', 1, 5, 4, 4, 2, '23,KR puram railway station, tinfactory, Bengaluru, Karnataka 560016', '560016', '8885652782', '/public/shop_image/shop1.jpg', '06 : 00 AM', '11 : 00 PM', 1),
(2, '114', 'The Corner Shop', 'Snaks_shop', 1, 3, 4, 4, 4, '4/56,2nd street,chennai.600002', '600002', '8976543201', '/public/shop_image/shop2.jpg', '9.00AM', '10.00PM', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sitemapurl`
--

CREATE TABLE `sitemapurl` (
  `sitemap_id` int(11) NOT NULL,
  `sitemap_url` text DEFAULT NULL,
  `created_date` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `sitemapurl`
--

INSERT INTO `sitemapurl` (`sitemap_id`, `sitemap_url`, `created_date`) VALUES
(1, '/amman/Sakthi/11', '2020-08-14 08:24:46'),
(2, '/Tamilnadu/Dindigul/Palani/Sri_krishan_temple/15', '2020-08-14 08:32:36'),
(3, '/Andhra_Pradesh/Anantapur/Anantapur/Palani/Sri_Dhantayuthapani_Swamy/10', '2020-08-14 09:54:41'),
(4, '/Andhra_Pradesh/Anantapur/Anantapur/murugan_temple/null/19', '2020-08-14 14:08:08'),
(5, '/Andhra_Pradesh/Anantapur/Anantapur/Venkateswara_Temple/Venkadachalapathy%28Perumal%29%28Venkadesha%29/20', '2020-08-14 15:01:39'),
(6, '/Andhra_Pradesh/Anantapur/Anantapur/new_temple/Venkadachalapathy%28Perumal%29%28Venkadesha%29/1', '2020-08-17 04:12:28'),
(7, '/Andhra_Pradesh/West_Siang/Chirala/Sri_Meenakchi_Temple/11', '2020-08-17 05:57:13'),
(8, '/Andhra_Pradesh/Anantapur/Anantapur/perumal/Venkadachalapathy%28Perumal%29%28Venkadesha%29/3', '2020-08-17 10:57:06'),
(9, '/Andhra_Pradesh/Anantapur/Dharmavaram/new_temple/Venkadachalapathy%28Perumal%29%28Venkadesha%29/2', '2020-08-17 11:17:16'),
(10, '/Karnataka/Bangalore/Bangalore/iskon/Krishna%28Gokul%29/4', '2020-08-17 11:37:12'),
(11, '/Tamilnadu/Dharmapuri/Harur/Theerthamalai/Shiva/5', '2020-08-18 06:23:03'),
(12, '/Andhra_Pradesh/Anantapur/Anantapur/test/Venkadachalapathy%28Perumal%29%28Venkadesha%29/6', '2020-08-18 06:37:28'),
(13, '/Andhra_Pradesh/Anantapur/Anantapur/Test2/Venkadachalapathy%28Perumal%29%28Venkadesha%29/7', '2020-08-18 06:42:58'),
(14, '/Andhra_Pradesh/Anantapur/Anantapur/Test1/Venkadachalapathy%28Perumal%29%28Venkadesha%29/8', '2020-08-18 08:03:02'),
(15, '/Arunachal_Pradesh/West_Siang/Along/TestData/Venkadachalapathy%28Perumal%29%28Venkadesha%29/10', '2020-08-18 08:06:34'),
(16, '/Delhi/Delhi/Delhi/Shri_Laxmi_Narayan_Temple_%28Birla_Mandir%29/Vishnu/9', '2020-08-18 08:07:29'),
(17, '/Andhra_Pradesh/Anantapur/Anantapur/Test2/Venkadachalapathy%28Perumal%29%28Venkadesha%29/11', '2020-08-18 08:16:15'),
(18, '/Andhra_Pradesh/Vizianagaram/Salur/Test3/Venkadachalapathy%28Perumal%29%28Venkadesha%29/13', '2020-08-18 08:22:31'),
(19, '/Maharashtra/Mumbai/Mumbai/Shri_Siddhi_Vinayak_Ganapati_Mandir/Vinayagar%28Ganesa%29%28Pillayar%29%28Ganapati%29/12', '2020-08-18 08:26:18'),
(20, '/Andhra_Pradesh/Anantapur/Anantapur/Test4/Venkadachalapathy%28Perumal%29%28Venkadesha%29/14', '2020-08-18 12:51:23'),
(21, '/Andhra_Pradesh/Anantapur/Anantapur/test5/Agni%28Fire%29/15', '2020-08-18 12:53:17'),
(22, '/Andhra_Pradesh/Anantapur/Anantapur/Test1/Venkadachalapathy%28Perumal%29%28Venkadesha%29/16', '2020-08-19 04:57:23'),
(23, '/Andhra_Pradesh/Anantapur/Anantapur/Test2/Krishna%28Gokul%29/17', '2020-08-19 04:58:56'),
(24, '/Arunachal_Pradesh/West_Siang/Along/test5/Venkadachalapathy%28Perumal%29%28Venkadesha%29/19', '2020-08-19 05:16:51'),
(25, '/Andhra_Pradesh/Anantapur/Anantapur/murugan_temple/Venkadachalapathy%28Perumal%29%28Venkadesha%29/6', '2020-08-19 05:19:24'),
(26, '/Andhra_Pradesh/Anantapur/Anantapur/Test6/Agni%28Fire%29/20', '2020-08-19 05:36:53'),
(27, '/Andhra_Pradesh/Kadappa/Kodur/test11/Agni%28Fire%29/25', '2020-08-19 05:49:23'),
(28, '/Andhra_Pradesh/Anantapur/Anantapur/Test12/Venkadachalapathy%28Perumal%29%28Venkadesha%29/26', '2020-08-19 05:52:16'),
(29, '/Arunachal_Pradesh/West_Siang/Along/Test10/Venkadachalapathy%28Perumal%29%28Venkadesha%29/24', '2020-08-19 05:52:25'),
(30, '/Andhra_Pradesh/Anantapur/Anantapur/Test8/Krishna%28Gokul%29/22', '2020-08-19 05:52:27'),
(31, '/Andhra_Pradesh/Anantapur/Anantapur/test13/Venkadachalapathy%28Perumal%29%28Venkadesha%29/27', '2020-08-19 05:55:20'),
(32, '/Andhra_Pradesh/Kadappa/Kodur/test14/Krishna%28Gokul%29/28', '2020-08-19 06:02:26'),
(33, '/Andhra_Pradesh/Vizianagaram/Salur/Null/17', '2020-08-19 07:15:12'),
(34, '/Arunachal_Pradesh/West_Siang/Along/ssss/Surya%28Suriyan%29/30', '2020-08-19 07:25:58'),
(35, '/Andhra_Pradesh/Anantapur/Anantapur/Test1/Venkadachalapathy%28Perumal%29%28Venkadesha%29/31', '2020-08-19 07:50:12'),
(36, '/Arunachal_Pradesh/West_Siang/Along/TestSankar/Krishna%28Gokul%29/32', '2020-08-19 07:50:18'),
(37, '/Andhra_Pradesh/Anantapur/Anantapur/Test2/Venkadachalapathy%28Perumal%29%28Venkadesha%29/33', '2020-08-19 07:51:17'),
(38, '/Andhra_Pradesh/Anantapur/Anantapur/Test3/Venkadachalapathy%28Perumal%29%28Venkadesha%29/35', '2020-08-19 07:53:17'),
(39, '/Andhra_Pradesh/Anantapur/Anantapur/Vvvvv/Ramar/34', '2020-08-19 07:53:19'),
(40, '/Andhra_Pradesh/Anantapur/Dharmavaram/Test4/Venkadachalapathy%28Perumal%29%28Venkadesha%29/36', '2020-08-19 07:54:53'),
(41, '/Andhra_Pradesh/Anantapur/Anantapur/ssssss/Krishna%28Gokul%29/37', '2020-08-19 07:55:31'),
(42, '/Karnataka/Bangalore/Bangalore/iskon/Krishna%28Gokul%29/38', '2020-08-19 08:06:37'),
(43, '/Andhra_Pradesh/Anantapur/Anantapur/test21/Venkadachalapathy%28Perumal%29%28Venkadesha%29/39', '2020-08-19 08:08:26'),
(44, '/Andhra_Pradesh/Anantapur/Anantapur/Tset22/Venkadachalapathy%28Perumal%29%28Venkadesha%29/40', '2020-08-19 08:10:03'),
(45, '/Andhra_Pradesh/Anantapur/Anantapur/TEstlocal/Venkadachalapathy%28Perumal%29%28Venkadesha%29/41', '2020-08-19 10:07:48'),
(46, '/Andhra_Pradesh/Anantapur/Anantapur/Testloc11/Venkadachalapathy%28Perumal%29%28Venkadesha%29/42', '2020-08-19 10:11:53'),
(47, '/Andhra_Pradesh/Anantapur/Anantapur/Vs/Vinayagar%28Ganesa%29%28Pillayar%29%28Ganapati%29/43', '2020-08-19 11:18:00'),
(48, '/Andhra_Pradesh/Anantapur/Anantapur/rvs/Saraswati/46', '2020-08-19 11:31:27'),
(49, '/Andhra_Pradesh/Krishna/Gudivada/rn/Murugan%28Palani_Andavar%29%7BKarthikeyan%29/44', '2020-08-19 11:31:35'),
(50, '/Andhra_Pradesh/Anantapur/palani/rvs/Saraswati/46', '2020-08-19 11:32:02'),
(51, '/Andhra_Pradesh/Anantapur/palani/rvs/Saraswati', '2020-08-19 11:32:23'),
(52, '/Andhra_Pradesh/Anantapur/Anantapur/ra/Murugan%28Palani_Andavar%29%7BKarthikeyan%29/45', '2020-08-19 12:08:00'),
(53, '/Andhra_Pradesh/Anantapur/Anantapur/Test1/Venkadachalapathy%28Perumal%29%28Venkadesha%29/47', '2020-08-20 04:58:15'),
(54, '/Arunachal_Pradesh/West_Siang/Along/Test2/Venkadachalapathy%28Perumal%29%28Venkadesha%29/48', '2020-08-20 05:00:13'),
(55, '/Andhra_Pradesh/Anantapur/Anantapur/Test4/Surya%28Suriyan%29/49', '2020-08-20 05:00:48'),
(56, '/Andhra_Pradesh/Anantapur/Anantapur/testing_Vijay/Durga_Devi/50', '2020-08-20 05:02:10'),
(57, '/Andhra_Pradesh/Anantapur/Anantapur/test9/Ramar/51', '2020-08-20 06:17:07'),
(58, '/Andhra_Pradesh/Anantapur/Anantapur/nv/Vinayagar%28Ganesa%29%28Pillayar%29%28Ganapati%29/54', '2020-08-20 06:25:43'),
(59, '/Andhra_Pradesh/Anantapur/Anantapur/vs/Surya%28Suriyan%29/53', '2020-08-20 06:26:05'),
(60, '/Andhra_Pradesh/Anantapur/Anantapur/va/Murugan%28Palani_Andavar%29%7BKarthikeyan%29/55', '2020-08-20 06:31:12'),
(61, '/Andhra_Pradesh/Anantapur/Anantapur/Test8/Venkadachalapathy%28Perumal%29%28Venkadesha%29/56', '2020-08-20 06:33:20'),
(62, '/Andhra_Pradesh/Anantapur/Anantapur/rv/Shiva/57', '2020-08-20 06:34:34'),
(63, '/Andhra_Pradesh/Anantapur/Anantapur/sn/Lakshmi/59', '2020-08-20 06:38:09'),
(64, '/Andhra_Pradesh/Kadappa/Kodur/testsss/Venkadachalapathy%28Perumal%29%28Venkadesha%29/60', '2020-08-20 07:03:54'),
(65, '/Andhra_Pradesh/Anantapur/Anantapur/test22/Krishna%28Gokul%29/62', '2020-08-20 07:12:19'),
(66, '/Andhra_Pradesh/Anantapur/Anantapur/sv/Durga_Devi/58', '2020-08-20 07:12:42'),
(67, '/Arunachal_Pradesh/West_Siang/Along/Test5/Venkadachalapathy%28Perumal%29%28Venkadesha%29/64', '2020-08-20 07:13:59'),
(68, '/Andhra_Pradesh/West_Godavari/Bhimavaram/Aiyappan/Surya%28Suriyan%29/65', '2020-08-20 07:16:22'),
(69, '/Andhra_Pradesh/Anantapur/Anantapur/vna/Durga_Devi/70', '2020-08-20 07:32:35'),
(70, '/Arunachal_Pradesh/West_Siang/Along/test77/Venkadachalapathy%28Perumal%29%28Venkadesha%29/69', '2020-08-20 08:05:06'),
(71, '/Andhra_Pradesh/Anantapur/Dharmavaram/Test5555/Venkadachalapathy%28Perumal%29%28Venkadesha%29/71', '2020-08-20 08:05:09'),
(72, '/Andhra_Pradesh/Anantapur/Anantapur/va/Ramar/72', '2020-08-20 12:34:06'),
(73, '/Andhra_Pradesh/Anantapur/Anantapur/Test1/Venkadachalapathy%28Perumal%29%28Venkadesha%29/73', '2020-08-21 04:58:15'),
(74, '/Andhra_Pradesh/Anantapur/Anantapur/Test2/Venkadachalapathy%28Perumal%29%28Venkadesha%29/74', '2020-08-21 04:58:56'),
(75, '/Andhra_Pradesh/Anantapur/Anantapur/Test4/Venkadachalapathy%28Perumal%29%28Venkadesha%29/75', '2020-08-21 05:00:00'),
(76, '/Andhra_Pradesh/Anantapur/Anantapur/Test1/Venkadachalapathy%28Perumal%29%28Venkadesha%29/76', '2020-08-21 05:10:15'),
(77, '/Andhra_Pradesh/Anantapur/Anantapur/Test2/Venkadachalapathy%28Perumal%29%28Venkadesha%29/77', '2020-08-21 05:12:03'),
(78, '/Andhra_Pradesh/Anantapur/Anantapur/Perumal/Venkadachalapathy%28Perumal%29%28Venkadesha%29/78', '2020-08-21 05:12:56'),
(79, '/Andhra_Pradesh/Anantapur/Anantapur/Test6/Venkadachalapathy%28Perumal%29%28Venkadesha%29/80', '2020-08-21 05:19:56'),
(80, '/Andhra_Pradesh/Anantapur/Anantapur/test9/Venkadachalapathy%28Perumal%29%28Venkadesha%29/81', '2020-08-21 05:23:36'),
(81, '/Andhra_Pradesh/Anantapur/Anantapur/tTEst56/Venkadachalapathy%28Perumal%29%28Venkadesha%29/82', '2020-08-21 05:32:27'),
(82, '/Tamilnadu/Dindigul/Vadamadurai/Sri_Soundararaja_Perumal_Temple/Venkadachalapathy%28Perumal%29%28Venkadesha%29/83', '2020-08-21 05:43:10'),
(83, '/Odisha/Puri/Puri/Shri_Jagannath_Temple/Vishnu/84', '2020-08-21 06:25:00'),
(84, '/Tamilnadu/Dharmapuri/Harur/Sri_Arulmegu_theerthagreeshwarar/Sri_Theerthagreeshwarar/85', '2020-08-21 06:38:27'),
(85, '/Tamilnadu/Dindigul/Dindigul/Sri_108_Vinayagar_Temple/Vinayagar%28Ganesa%29%28Pillayar%29%28Ganapati%29/86', '2020-08-21 06:40:06'),
(86, '/Tamilnadu/Dindigul/Vedasandur/Sri_Bhaktha_Anjaneyar_Temple/Anjaneyar%28Maruthi%29%28Hanuman%29/87', '2020-08-21 06:54:02'),
(87, '/Tamilnadu/Madurai/Madurai/Narasingam_Yoga_Narasimha_Perumal_Temple/Vishnu/88', '2020-08-21 06:57:33'),
(88, '/Andhra_Pradesh/Anantapur/Anantapur/jgdsfbjh/Sri_Kaliyamman_Temple/21', '2020-08-21 11:13:36'),
(89, '/Andhra_Pradesh/Anantapur/Dharmavaram/Aiyappan/Sri_Theerthagreeshwarar/89', '2020-08-21 13:01:59'),
(90, '/Andhra_Pradesh/Anantapur/Anantapur/testing/Vinayagar%28Ganesa%29%28Pillayar%29%28Ganapati%29/90', '2020-08-21 13:29:52'),
(91, '/Tamilnadu/Dindigul/Dindigul/Sri_Suburamani_Swamy_Temple/Murugan%28Palani_Andavar%29%7BKarthikeyan%29/91', '2020-08-21 14:00:08'),
(92, '/Andhra_Pradesh/Anantapur/Anantapur/dfxvfdfd/Surya%28Suriyan%29/93', '2020-08-22 13:37:59'),
(93, '/Andhra_Pradesh/Anantapur/Anantapur/tttt/Sri_Theerthagreeshwarar/94', '2020-08-22 13:40:31'),
(94, '/Andhra_Pradesh/Anantapur/Anantapur/sfcdfvd/Surya%28Suriyan%29/97', '2020-08-22 14:01:45'),
(95, '/Andhra_Pradesh/Anantapur/Anantapur/dfdgvd/Surya%28Suriyan%29/95', '2020-08-22 14:09:03'),
(96, '/Andhra_Pradesh/Anantapur/Anantapur/dgfdbg/Surya%28Suriyan%29/99', '2020-08-22 14:14:09'),
(97, '/Andhra_Pradesh/Anantapur/Anantapur/qwerr/Agni%28Fire%29/100', '2020-08-24 04:26:11'),
(98, '/Andhra_Pradesh/Anantapur/Anantapur/fdgdfhg/Agni%28Fire%29/101', '2020-08-24 05:28:33'),
(99, '/Tamilnadu/Tiruchirappalli/Veerapur/Veerapur_Temple/Durga_Devi/92', '2020-08-25 06:30:49'),
(100, '/Tamilnadu/Dindigul/Dindigul/Temple/Vinayagar%28Ganesa%29%28Pillayar%29%28Ganapati%29/94', '2020-08-25 07:42:23'),
(101, '/Andhra_Pradesh/Anantapur/Anantapur/vs/Surya%28Suriyan%29/101', '2020-08-25 07:48:39'),
(102, '/Andhra_Pradesh/Anantapur/Anantapur/vijay/Sri_Theerthagreeshwarar/98', '2020-08-25 10:29:12'),
(103, '/Tamilnadu/Dindigul/Palani/Sri_Murugan_temple/Murugan%28Palani_Andavar%29%7BKarthikeyan%29/105', '2020-08-26 06:10:56'),
(104, '/Andhra_Pradesh/Anantapur/Anantapur/vn/Ramar/103', '2020-09-20 16:46:35'),
(105, '/Andhra_Pradesh/Anantapur/Anantapur/rv/Krishna%28Gokul%29/102', '2020-09-21 06:12:41'),
(106, '/Andhra_Pradesh/Anantapur/Dharmavaram/ssss/Sri_Theerthagreeshwarar/97', '2020-09-21 06:14:19'),
(107, '/Andhra_Pradesh/Anantapur/Anantapur/a/Agni%28Fire%29/100', '2020-09-21 10:14:38'),
(108, '/Andhra_Pradesh/Anantapur/Anantapur/n/Venkadachalapathy%28Perumal%29%28Venkadesha%29/99', '2020-09-21 10:14:45'),
(109, '/main/blogForm/12', '2020-10-24 13:58:33'),
(110, '/vendor/vendor/register', '2020-10-24 14:02:10'),
(111, '/main/blogForm/11', '2020-10-24 14:02:44'),
(112, '/New_Tag/Testing_Blog/12', '2020-10-24 14:04:16'),
(113, '/Andhra_Pradesh/Vizianagaram/Salur/Null/undefined', '2020-10-24 14:06:53'),
(114, '/Andhra_Pradesh/Vizianagaram/Salur/Null/undefined', '2020-10-25 11:06:09'),
(115, '/vendor/vendorHome/myProfile', '2021-12-08 12:46:00'),
(116, '/vendor/vendorHome/myprofile', '2021-12-09 06:14:38'),
(117, '/vendor/vendorHome/m', '2021-12-09 09:10:36'),
(118, '/vendor/vendorHome/profile', '2021-12-09 09:16:42'),
(119, '/vendor/vendorHome/vendorHome', '2021-12-09 10:10:58'),
(120, '/vendor/vendorHome/addCategory', '2021-12-09 10:24:42'),
(121, '/vendor/vendorHome/home', '2021-12-11 11:19:01'),
(122, '/vendor/vendorHome/Home', '2021-12-11 11:45:14'),
(123, '/iyer/iyerdashboard/iyerdashboard', '2022-02-28 11:57:39'),
(124, '/iyer/i/iyerdashboard', '2022-02-28 12:22:39'),
(125, '/Iyer/Iyer/IyerDetails', '2022-03-26 09:37:41'),
(126, '/Iyer/Iyer/GodsDetails', '2022-03-26 09:38:52'),
(127, '/temple_blogs/templeBlogs_read/11', '2022-04-22 04:12:56');

-- --------------------------------------------------------

--
-- Table structure for table `site_user`
--

CREATE TABLE `site_user` (
  `id` int(11) NOT NULL,
  `UserName` varchar(255) DEFAULT NULL,
  `CountryId` int(11) DEFAULT NULL,
  `StateId` int(11) DEFAULT NULL,
  `CityId` int(11) DEFAULT NULL,
  `AreaId` int(11) DEFAULT NULL,
  `DistrictId` int(11) DEFAULT NULL,
  `Pincode` varchar(100) DEFAULT NULL,
  `EmailId` varchar(100) DEFAULT NULL,
  `Phone` varchar(100) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `isApproved` int(11) DEFAULT NULL,
  `rejectReasonByAdmin` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `site_user`
--

INSERT INTO `site_user` (`id`, `UserName`, `CountryId`, `StateId`, `CityId`, `AreaId`, `DistrictId`, `Pincode`, `EmailId`, `Phone`, `password`, `isApproved`, `rejectReasonByAdmin`) VALUES
(1, 'sumukha', 1, 16, 1629, 54, 149, '577201', 'sumukha@gmail.com', '9449022673', '$2a$10$NCxQ.Y5qgak2FU7NWl0Y1OIvkCV9Lhp2Mz5v3a2x2ofaXYvhy6N2u', 1, NULL),
(4, 'skkk', 1, 30, 800, 5, 384, '654321', 'itzz.siva@gmail.com', '9788027958', '$2a$10$7BS34Th7okU.CCedHnoWBenwU8.nIc9qhQwEfn0o8ag1C3dLgxjae', 1, NULL),
(5, 'siva', 1, 30, 800, 5, 384, '564723', 'itzz.vkzz@gmail.com', '9384466178', '$2a$10$VDdPscii4j1FbEeY.ttNE.sY8zy8T0UBIXnHjKYn5qNKUcmcst96e', 1, NULL),
(6, 'vijay', 1, 30, 800, 5, 384, '675483', 'its.siva@mail.com', '9788027957', '$2a$10$ro1bRMUEeTL0C90YWs3UA.sui0PxdPARtRNy8hMchUinExe5UNvrW', NULL, NULL),
(7, 'RajanRajRtr', 1, 30, 1734, 188, 599, '654321', 'lee@head.com', '8883838463', '$2a$10$TyJz3jZEbdZJNjoL8ytbbutkaDpo3zwpkgulzAffyny54F/Zo9mLS', 1, NULL),
(8, 'Sara', 1, 30, 800, 5, 384, '123214', 'sara@ali.com', '9025198004', '$2a$10$AKJ3JLosHSlD1dyWjrEB8OBX250TYzeAVqL3v04JoiE3a5Vk3DUsq', 1, NULL),
(10, 'IYPPA', 1, 30, 763, 57, 61, '121212', 'safAAAAs@mail.com', '2222222222', '$2a$10$wyowszS007BS/dZZBxTi0ODf2rWM6mao26fyr1tsp6MCKFMvoiuIO', NULL, NULL),
(11, 'aqaqaq', 1, 30, 763, 57, 61, '11111', 'safwres@mail.com', '3333333333', '$2a$10$oewWvbL2Lpi.MBj6VXHeH.VoCDtCFX7WxIKAELGAhafcbWzqPSLxK', NULL, NULL),
(12, 'rajan ', 1, 30, 763, 57, 61, '212121', 'safwefews@mail.com', '1212121111', '$2a$10$6NG1J347UB5KXb4582rJ9OODYKn6q60WoemDiRr3B5TlDvt.04J5m', NULL, NULL),
(14, 'mohamnn', 1, 30, 763, 57, 61, '21211', 'eafty12@mail.com', '9099999999', '$2a$10$cO6E4bS5ZTNT3p.GSE4plOus9RGqS.rxD4Bp4KbNO0MtCxKlGkUUm', NULL, NULL),
(15, 'mohan', 1, 30, 763, 57, 61, '98989', 'abcdef@mail.com', '1234566666', '$2a$10$XeeLIXVO9rcVJGwxJZUaDOx05KxsLB1ZgRRLX7Oki9xxzbclL8OEy', NULL, NULL),
(16, 'mohannn', 1, 30, 763, 57, 61, '0909', 'eahhhhhhhy12@mail.com', '8888888899', '$2a$10$K3uktkwOKXQMCJzNINGJlOwq5utjSEAm/GoSm64QuvxMS9Tsd8Fd2', NULL, NULL),
(17, 'zzz', 1, 30, 843, 18, 384, '625004', 'zzz@gmail.com', '9999999999', '$2a$10$dtSVGGR1M/pRG8Q4Fp1.6.Y5mqQPWxAI7MPjJWu1hZoLI4YqEmOC6', 1, NULL),
(18, 'jayathurga', 1, 17, 1640, 69, 457, '671321', 'daranibibu55@gmail.com', '8072645534', '$2a$10$fEz3r2mhW2e9jFvfydNkjefXujsS6PC0NlvDaI3IqrqtOK1XrmQWe', 1, NULL),
(19, 'jayathu', 1, 30, 839, 70, 98, '613007', 'daaru55@gmail.com', '8122222222', '$2a$10$rlq89SUExnRtIa/LGtAdNO9lKLrv9e0JuUFM2UsVaQXfGP/cK6qJm', 1, NULL),
(20, 'jj', 1, 30, 854, 62, 85, '2345', 'asdf@gmail.com', '8072645582', '$2a$10$UIzLahjjvewnen/1ZZZ/GO6X.VJmEieNDrqQX95EcCYa8548LCNdS', 1, NULL),
(21, 'jjjj', 1, 30, 1641, 73, 85, '612008', 'daaaru@gmail.com', '8072645580', '$2a$10$z0xEF8YVI6UNRNkDnGLAHehxlcGaIkdOwh55.gUgCvllmVRbPGi.q', 1, NULL),
(23, 'jd', 1, 30, 854, 62, 85, '600061', 'daranib2@gmail.com', '8072645555', '$2a$10$zqrmcNflnXo1a/wT9wgicullPmBXOXmLSe8/Ejbhiwe72IF2UaymG', 1, NULL),
(24, 'jayath', 1, 30, 839, 70, 98, '613007', 'daaru3@gmail.com', '8111111111', '$2a$10$s/knlTZaAOllCogiP0l2jeteSiuQXZEvZxrrlNs/lmQZQNdZElzQO', 1, NULL),
(25, 'jaay', 1, 30, 839, 70, 98, '613007', 'daary@gmail.com', '8765432109', '$2a$10$c0cCZeaEGLa4o5CMjIBRCOoSXMe1s50QcB.ES7QUBzF8Cjie3aBAm', 1, NULL),
(26, 'jaya', 1, 30, 1642, 75, 417, '637210', 'sara87@gmail.com', '6789012345', '$2a$10$sGozIfSyP8pNa0zVZEkPH.laLAK6eHCna.6cwgor72Gyj6Hb52QhC', 1, NULL),
(28, 'jay', 1, 30, 1345, 74, 62, '604202', 'daranid@gmail.com', '8900000000', '$2a$10$HdxBuWe4mg5Dq3AVJtuwnu7SEDBZDwA6eeZ4UkuhDfM.1XklasYh6', 1, NULL),
(29, 'jayab', 1, 30, 1285, 76, 234, '600004', 'jayathurgababu25@gmail.com', '7890123456', '$2a$10$CqtRUilgwm5quPTt/oppAeQwxTue.iXFwrt.bSfXV.A3r2RPk1X6q', 1, NULL),
(30, 'jaij', 1, 30, 1643, 77, 65, '632055', 'sara@gmail.com', '7777777777', '$2a$10$myrirWAHxfcb98IrmE7cHuRSGFbtsYCHsH0yKl0gyyYwVhGV/FoFy', 1, NULL),
(33, 'jayathurgggg', 1, 111, 1645, 78, 585, '517504', 'anishsubramanian@gmail.com', '9444564067', '$2a$10$U4wFDLErbZr5zLFpnVZs1ue1OMwSR3PPegvaqf2BpeeRByo8rDTqC', 1, NULL),
(34, 'jayab', 1, 30, 810, 79, 340, '637001', 'parimalababu27@gmail.com', '9443151714', '$2a$10$z5VQJL/XK.6kn5WsTjZZk.uOqvfJxb3OcFok7ObUawABtAmGtL1p2', 1, NULL),
(35, 'jayab', 1, 30, 1647, 80, 553, '605802', 'lalithaselvambiga@gmail.com', '9042452027', '$2a$10$5rXFvcUMmW/vjS3GaZe80e8devZrgIgM0pKNdKri4WntM5l1FPoEa', 1, NULL),
(36, 'jaiyathurg', 1, 30, 1648, 82, 588, '605757', 'saranya23@gmail.com', '9486148024', '$2a$10$RAiCiuVDbsz6JxBlWTbVc.mIH.otK4D6MeKX78s5RWGvwu7jfIZaG', 1, NULL),
(37, 'JAYATHUR', 1, 30, 847, 20, 95, '628215', 'daranibubu55@gmail.com', '9345251734', '$2a$10$uGMhdP0Sz/7K9E3RJYQqVuDlXaZppJQFjJznbL1pNUkEiPQNnWJsO', 1, NULL),
(41, 'jaiiii', 1, 30, 1649, 83, 589, '624601', 'daranibalu55@gmail.com', '8072645588', '$2a$10$PXTsjVbe3S6qf2Htc.SpdOWdwPuzoFRKK2j2qbsa3Ck/Jngjcb2wO', 1, NULL),
(43, 'jaaaay', 1, 30, 1354, 84, 62, '603319', 'sakthikannaiya@gmail.com', '8072645581', '$2a$10$GL86We7mjVA2qQBHEqcVGuE0XSyYPqAf/wSMG.PshIuSQdo4IBA26', 1, NULL),
(44, 'jaaayaa', 1, 30, 789, 85, 482, '631502', 'anand15@gmail.com', '9345251714', '$2a$10$vB.6OYJxdama5MC9surlD..3xDUBcwyafJy4YpCTiVJbygVaZ618y', 1, NULL),
(47, 'jjj', 1, 30, 854, 62, 85, '606601', 'anishsubramanian1997@gmail.com', '9171022208', '$2a$10$oCxADefqldqwNjgzoiZ2NuCWoXFT7woRfoRsnd.mWXpE2uybG1rpy', NULL, NULL),
(48, 'durga', 1, 30, 818, 67, 233, '600068', 'yogaprasanna1111@gmail.com', '9080515084', '$2a$10$XSb6s.1Q01xSu9UoF9i95ulTZ5EwfJma33/A/9CutPf6QgnMTP2kC', 2, 'undefined'),
(49, 'saranya', 1, 30, 854, 62, 85, '606601', 'saranya.murthyy1@gmail.com', '8072293081', '$2a$10$6Dvp.Pn8340ccGwa81lf0uDFPAypcWo8KEUwUXb/GKLfzvZuRwD2W', 1, NULL),
(51, 'User', 1, 30, 833, 96, 100, '627756', 'anishsubramaniantamizh1997@gmail.com', '7502113806', '$2a$10$H0O7OhMWyMb8uDM4o56UNOTsfpleMv2nnBLLnFnubEtIIYfft/Wx6', 1, NULL),
(52, 'Ajith ', 1, 30, 838, 116, 100, '6227719', 'ajithkumaryt2001@gmail.com', '9159370635', '$2a$10$LL3IVutU6B0Inxy7Bb7lpeunY3VOeLtlccXxiAnGQ0dHu4oOa9/IG', NULL, NULL),
(53, 'prakash', 1, 30, 1649, 83, 589, '624706', 'pk717279@gmail.com', '8056564197', '$2a$10$mIOP9GkSH6.k6v6mDJClTO/hUlfWZGih2meCXl4EYS1s5Oyo7ATCq', NULL, NULL),
(54, 'Adithi', 1, 30, 833, 96, 100, '626140', 'adithi05@gmail.com', '8745249788', '$2a$10$HgWRumho7KGJes9jEoE.c.e8S4EkO1vKGsOD4EeD2jAd7YIrWewRi', NULL, NULL),
(57, 'Adithi', 1, 30, 833, 96, 100, '626140', 'aganya05@gmail.com', '8745249780', '$2a$10$JevpjjdL5lP4lM/CuGWsTu.8Ehj64DD1CcciDf04RNmaMHJaKBL56', NULL, NULL),
(58, 'Adithi', 1, 30, 833, 96, 100, '626140', 'hrithik05@gmail.com', '9611849419', '$2a$10$gJa4V62fWvBU0pf4/YHsMOQGwCBJmCzIXuA3E7USFeihGyc1R8EqC', NULL, NULL),
(59, 'Adithi', 1, 30, 833, 96, 100, '626140', 'hrithik06@gmail.com', '8754658699', '$2a$10$yWNceEPlrp/POJx3MjZAHeyuor1JGvcvu7NaYp8g0hfdaIk3BbNYi', NULL, NULL),
(60, 'Adithi', 1, 30, 833, 96, 100, '626140', 'adithi07@gmail.com', '9165200675', '$2a$10$dgrzoEeVPduDe5jurqKl3ulZcdw68dttXCAQoLq9b86qO8EyZ3mMu', NULL, NULL),
(61, 'Subburaj ', 1, 30, 850, 52, 89, '627426', 'subbucse96@gmail.com', '9360382057', '$2a$10$nta2DVnnO8NBYV6AfdvNFe3KIWKsyVoghc8NUB2yxpZOEmpipbv4y', 1, NULL),
(62, 'Subburaj ', 1, 30, 850, 52, 89, '627426', 'subburajduraics@gmail.com', '8754944013', '$2a$10$GUTOd18T2oJcW0LxThG1lOV8jfGkYev3eFSEyb1.ciCz2KbEJKc0.', 1, NULL),
(63, 'snekha', 1, 30, 763, 57, 61, '123456', 'asdfgh@gmail.com', '1234567899', '$2a$10$.cpZMkL5TrQFA46fauAMNOVPPR/3Tlhm/gr7reaNsJDowVXINZAQm', 1, NULL),
(64, 'abcdef', 1, 30, 763, 57, 61, '111111', 'asdfghj123@gmail.com', '8888888888', '$2a$10$K7KzpuYGFZF8xRdANhXzN.q.l9iU9zmS/vnimF5GJO0mXRRsSLBoS', 1, NULL),
(65, 'sneka', 1, 30, 838, 116, 100, '626140', 'sneka09@gmail.com', '8883656867', '$2a$10$FPcagwDzuDVhrbn6aPB2MeK897i2WpBaIZvv/V7pgHwZ5ypj6kZla', NULL, NULL),
(67, 'sneka', 1, 30, 838, 116, 100, '626140', 'sneka08@gmail.com', '5747457645', '$2a$10$97.jMVgoc5ceBGVcaZpIG.5cxhI1zoCAVNDfzSLeC/nxd/8QCX0pq', NULL, NULL),
(68, 'sneka', 1, 30, 838, 116, 100, '63245', 'adithi08@gmail.com', '6556634536', '$2a$10$O4Ga55jPqe8HGaax1bM2KeZiqUyRLWm3XbHQyOl9kD6AkHqg9Fm12', NULL, NULL),
(69, 'Thirumalesh', 1, 111, 1645, 78, 585, '518323', 'tirumalahugar01140@gail.com', '8247730806', '$2a$10$YwmZUFeL3YUgsnuq4H8UBuxgKUCsWmuwSogx36MsrpUVrM6/jEDY.', 1, NULL),
(72, 'Thirumalesh', 1, 111, 1645, 78, 585, '518323', 'tirumalahugar01140@gmail.com', '8247730892', '$2a$10$nPmGxBl5q0JB771i2w9d9uWr29EFMcEHJCd2vD4kMuN/87JhW5xsC', 1, NULL),
(77, 'Ajith', 1, 30, 850, 52, 89, '633211', 'asajithkumar17@gmail.com', '9500607417', '$2a$10$3qqR0GXNlC5APhLczQktlOM3A33XMV/LQ8T6oLtHqRT9Xmt9Veqfa', 1, NULL),
(79, 'Ajith kumar', 1, 30, 847, 20, 95, '877666', 'ajith@gmail.com', '9500607414', '$2a$10$Jk8ziLBkLCWTbuHQRPDQ2eCOjktbm5VCMmfjyXHnFfJBRgZp3H1R2', NULL, NULL),
(80, 'Gowtham', 1, 30, 774, 51, 250, '12345', 'mpgowtham@gmail.com', '8608204014', '$2a$10$CKzQ3zjGLigYgMs62RWewucxQ7NmK3gg7So0r8b70HkzQOY8WuEx.', 1, NULL),
(82, 'Ajith', 1, 30, 774, 51, 250, '645786', 'ajith2@gmail.com', '8608204010', '$2a$10$cgyxnUNzox5poZ7xB/4YOOjaQcBUMr6Ycz6ONp265GElEDPR64Rm2', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `speciality`
--

CREATE TABLE `speciality` (
  `id` int(11) NOT NULL,
  `speciality_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `speciality`
--

INSERT INTO `speciality` (`id`, `speciality_name`, `created_at`, `updated_at`) VALUES
(19, 'Cave Temple', '2022-10-13 06:52:27', NULL),
(20, 'Hill Temple', '2022-10-13 06:52:40', NULL),
(22, 'Rock Temple', '2022-10-13 06:53:02', NULL),
(23, 'Sea Shore Temple', '2022-10-13 06:53:14', NULL),
(24, 'Oldest Temple', '2022-10-13 07:50:13', NULL),
(25, 'King Dynasty Temple', NULL, NULL),
(26, 'Lake Temple', NULL, NULL),
(27, 'River Temple', NULL, NULL),
(28, 'Forest Temple', NULL, NULL),
(29, 'Other', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `specification`
--

CREATE TABLE `specification` (
  `id` int(11) NOT NULL,
  `specification` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `specification`
--

INSERT INTO `specification` (`id`, `specification`) VALUES
(3, 'Ultra Delux'),
(9, 'Single'),
(10, 'Double'),
(11, 'King'),
(12, 'Standard'),
(13, 'Twin'),
(14, 'Cabana'),
(15, 'Villa'),
(16, 'Suite'),
(17, 'Joint Room');

-- --------------------------------------------------------

--
-- Table structure for table `startemple`
--

CREATE TABLE `startemple` (
  `starTemple` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `id` int(10) UNSIGNED NOT NULL,
  `country_id` int(10) UNSIGNED NOT NULL,
  `state` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`id`, `country_id`, `state`, `active`, `created_at`, `updated_at`) VALUES
(7, 1, 'Dadra & Nagar Haveli', 1, NULL, NULL),
(9, 1, 'Goa', 1, NULL, NULL),
(10, 1, 'Gujarat', 1, NULL, NULL),
(13, 1, 'Himachal Pradesh', 1, NULL, NULL),
(14, 1, 'Jammu & Kashmir', 1, NULL, NULL),
(15, 1, 'Jharkhand', 1, NULL, NULL),
(16, 1, 'Karnataka', 1, NULL, NULL),
(17, 1, 'Kerala', 1, NULL, NULL),
(18, 1, 'Lakshadweep', 1, NULL, NULL),
(19, 1, 'Madhya Pradesh', 1, NULL, NULL),
(20, 1, 'Maharashtra', 1, NULL, NULL),
(21, 1, 'Manipur', 1, NULL, NULL),
(22, 1, 'Meghalaya', 1, NULL, NULL),
(23, 1, 'Mizoram', 1, NULL, NULL),
(24, 1, 'Nagaland', 1, NULL, NULL),
(25, 1, 'Odisha', 1, NULL, NULL),
(26, 1, 'Pondicherry', 1, NULL, NULL),
(27, 1, 'Punjab', 1, NULL, NULL),
(28, 1, 'Rajasthan', 1, NULL, NULL),
(29, 1, 'Sikkim', 1, NULL, NULL),
(30, 1, 'Tamil Nadu', 1, NULL, '2023-01-06 09:05:07'),
(31, 1, 'Telangana', 1, NULL, NULL),
(32, 1, 'Tripura', 1, NULL, NULL),
(33, 1, 'Uttar Pradesh', 1, NULL, NULL),
(34, 1, 'Uttaranchal', 1, NULL, NULL),
(35, 1, 'West Bengal', 1, NULL, NULL),
(36, 1, 'Uttarakhand', 1, NULL, NULL),
(37, 132, 'Selangor', 1, NULL, NULL),
(38, 132, 'Kuala Lumpur', 1, NULL, NULL),
(39, 132, 'Sarawak', 1, NULL, NULL),
(40, 132, 'Johor', 1, NULL, NULL),
(41, 132, 'Pulau Pinang', 1, NULL, NULL),
(42, 132, 'Sabah', 1, NULL, NULL),
(43, 132, 'Perak', 1, NULL, NULL),
(44, 132, 'Pahang', 1, NULL, NULL),
(45, 132, 'Negeri Sembilan', 1, NULL, NULL),
(46, 132, 'Kedah', 1, NULL, NULL),
(47, 132, 'Melaka', 1, NULL, NULL),
(48, 132, 'Terengganu', 1, NULL, NULL),
(49, 132, 'Kelantan', 1, NULL, NULL),
(50, 132, 'Labuan', 1, NULL, NULL),
(51, 132, 'Perlis', 1, NULL, NULL),
(52, 231, 'Alabama', 1, NULL, NULL),
(53, 231, 'Alaska', 1, NULL, NULL),
(54, 231, 'Arizona', 1, NULL, NULL),
(55, 231, 'Arkansas', 1, NULL, NULL),
(56, 231, 'California', 1, NULL, NULL),
(57, 231, 'Colorado', 1, NULL, NULL),
(58, 231, 'Connecticut', 1, NULL, NULL),
(59, 231, 'Delaware', 1, NULL, NULL),
(60, 231, 'Florida', 1, NULL, NULL),
(61, 231, 'Georgia', 1, NULL, NULL),
(62, 231, 'Hawaii', 1, NULL, NULL),
(63, 231, 'Idaho', 1, NULL, NULL),
(64, 231, 'Illinois', 1, NULL, NULL),
(65, 231, 'Indiana', 1, NULL, NULL),
(66, 231, 'Iowa', 1, NULL, NULL),
(67, 231, 'Kansas', 1, NULL, NULL),
(68, 231, 'Kentucky', 1, NULL, NULL),
(69, 231, 'Louisiana', 1, NULL, NULL),
(70, 231, 'Maine', 1, NULL, NULL),
(71, 231, 'Maryland', 1, NULL, NULL),
(72, 231, 'Massachusetts', 1, NULL, NULL),
(73, 231, 'Michigan', 1, NULL, NULL),
(74, 231, 'Minnesota', 1, NULL, NULL),
(75, 231, 'Mississippi', 1, NULL, NULL),
(76, 231, 'Missouri', 1, NULL, NULL),
(77, 231, 'Montana', 1, NULL, NULL),
(78, 231, 'Nebraska', 1, NULL, NULL),
(79, 231, 'Nevada', 1, NULL, NULL),
(80, 231, 'New Hampshire', 1, NULL, NULL),
(81, 231, 'New Jersey', 1, NULL, NULL),
(82, 231, 'New Mexico', 1, NULL, NULL),
(83, 231, 'New York', 1, NULL, NULL),
(84, 231, 'North Carolina', 1, NULL, NULL),
(85, 231, 'North Dakota', 1, NULL, NULL),
(86, 231, 'Ohio', 1, NULL, NULL),
(87, 231, 'Oklahoma', 1, NULL, NULL),
(88, 231, 'Oregon', 1, NULL, NULL),
(89, 231, 'Pennsylvania', 1, NULL, NULL),
(90, 231, 'Rhode Island', 1, NULL, NULL),
(91, 231, 'South Carolina', 1, NULL, NULL),
(92, 231, 'South Dakota', 1, NULL, NULL),
(93, 231, 'Tennessee', 1, NULL, NULL),
(94, 231, 'Texas', 1, NULL, NULL),
(95, 231, 'Utah', 1, NULL, NULL),
(96, 231, 'Vermont', 1, NULL, NULL),
(97, 231, 'Virginia', 1, NULL, NULL),
(98, 231, 'Washington', 1, NULL, NULL),
(99, 231, 'West Virginia', 1, NULL, NULL),
(100, 231, 'Wisconsin', 1, NULL, NULL),
(101, 196, 'Singapore', 1, NULL, NULL),
(102, 132, 'Penang', 1, NULL, NULL),
(103, 132, 'Cameroon', 1, NULL, NULL),
(107, 1, 'Chandigarh UT', 0, NULL, NULL),
(110, 1, 'Delhi', 1, NULL, NULL),
(111, 1, 'Andhra pradesh', 1, NULL, '2023-01-06 05:52:54'),
(113, 3, 'algeria', 1, '2022-06-06 06:25:00', NULL),
(115, 1, 'karnataka', 1, '2022-08-19 12:51:31', NULL),
(116, 6, 'angoliad', 1, '2022-08-19 13:00:27', NULL),
(121, 1, 'Assam	', 1, NULL, NULL),
(123, 1, 'Chhattisgarh', 1, NULL, NULL),
(124, 1, 'Kurukshetra', 1, NULL, NULL),
(125, 1, 'Haryana', 1, NULL, NULL),
(128, 166, 'Balochistan', 1, NULL, NULL),
(129, 1, 'Bihar', 1, NULL, NULL),
(130, 18, 'Barisal', 1, NULL, NULL),
(131, 153, 'Mustang', 1, NULL, NULL),
(132, 1, 'Maharashtra', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `subcategorylist`
--

CREATE TABLE `subcategorylist` (
  `subCategoryId` int(11) NOT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `subCategoryName` varchar(255) DEFAULT NULL,
  `Tag` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subcategorylist`
--

INSERT INTO `subcategorylist` (`subCategoryId`, `categoryId`, `city_id`, `subCategoryName`, `Tag`) VALUES
(1, 4, NULL, 'soe', 'agbddgdfgfdg'),
(2, 4, 759, 'Toilets', 'clean toilets'),
(4, 2, 800, 'Iyer', 'iyers'),
(5, 2, 766, 'Portal', 'camp fire portal'),
(6, 3, 800, 'Tours & Travels', 'low cost tours and travels'),
(7, 3, 842, 'Auto', 'auto booking'),
(8, 3, 800, 'Car  123', 'car for rent 123');

-- --------------------------------------------------------

--
-- Table structure for table `temple`
--

CREATE TABLE `temple` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `role` varchar(250) NOT NULL,
  `temple_name` varchar(100) DEFAULT NULL,
  `main_god_id` int(11) DEFAULT NULL,
  `othergod_id` varchar(100) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `state_id` int(11) DEFAULT NULL,
  `district_id` int(11) DEFAULT NULL,
  `area_id` int(11) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `pincode` int(10) DEFAULT NULL,
  `godGender` varchar(12) DEFAULT NULL,
  `temple_address` longtext DEFAULT NULL,
  `speciality_id` text DEFAULT NULL,
  `grouptable_id` int(11) NOT NULL,
  `starTemple` int(11) DEFAULT NULL,
  `tourist_id` int(255) NOT NULL,
  `otherspec_id` varchar(100) DEFAULT NULL,
  `temple_history` text DEFAULT NULL,
  `temple_year` varchar(20) DEFAULT NULL,
  `temple_amotime` varchar(100) DEFAULT NULL,
  `temple_amctime` varchar(100) DEFAULT NULL,
  `temple_pmotime` varchar(100) DEFAULT NULL,
  `temple_pmctime` varchar(100) DEFAULT NULL,
  `temple_prasadam` text DEFAULT NULL,
  `temple_tree` text DEFAULT NULL,
  `pariharam` varchar(200) DEFAULT NULL,
  `festival_ids` varchar(25) DEFAULT NULL,
  `start_date` varchar(100) DEFAULT NULL,
  `end_date` varchar(100) DEFAULT NULL,
  `training_ids` varchar(100) DEFAULT NULL,
  `incharge_name` varchar(100) DEFAULT NULL,
  `phone_number` varchar(17) DEFAULT NULL,
  `temple_mailid` varchar(45) DEFAULT NULL,
  `temple_website` varchar(45) DEFAULT NULL,
  `TempleLongitude` text DEFAULT NULL,
  `TempleLatitude` text DEFAULT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL,
  `main_image` text DEFAULT NULL,
  `sub_images` text DEFAULT NULL,
  `main_video` text DEFAULT NULL,
  `ticket_id` varchar(100) DEFAULT NULL,
  `marriage_fee` varchar(16) DEFAULT NULL,
  `ana_time` varchar(25) DEFAULT NULL,
  `control_by` varchar(255) DEFAULT NULL,
  `functionsInsideTemple` varchar(100) NOT NULL,
  `temple_additional` text DEFAULT NULL,
  `isTicket` tinyint(1) DEFAULT NULL,
  `isMarriage` tinyint(1) DEFAULT NULL,
  `isAnnadhanam` tinyint(1) DEFAULT NULL,
  `temple_bus_route` text DEFAULT NULL,
  `ways_to_reach` text DEFAULT NULL,
  `temple_map` longtext DEFAULT NULL,
  `pooja_timings` text DEFAULT NULL,
  `aminity` longtext NOT NULL,
  `templeApproveStatus` int(11) NOT NULL,
  `templeRejectionReason` text NOT NULL,
  `isTraining` tinyint(1) DEFAULT NULL,
  `isHospital` tinyint(1) DEFAULT NULL,
  `bookingFields` text DEFAULT NULL,
  `poojaFields` text NOT NULL,
  `showTemple` tinyint(1) NOT NULL DEFAULT 0,
  `youtubeUrl` varchar(255) DEFAULT NULL,
  `videoFile` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `temple`
--

INSERT INTO `temple` (`id`, `user_id`, `role`, `temple_name`, `main_god_id`, `othergod_id`, `country_id`, `state_id`, `district_id`, `area_id`, `city_id`, `pincode`, `godGender`, `temple_address`, `speciality_id`, `grouptable_id`, `starTemple`, `tourist_id`, `otherspec_id`, `temple_history`, `temple_year`, `temple_amotime`, `temple_amctime`, `temple_pmotime`, `temple_pmctime`, `temple_prasadam`, `temple_tree`, `pariharam`, `festival_ids`, `start_date`, `end_date`, `training_ids`, `incharge_name`, `phone_number`, `temple_mailid`, `temple_website`, `TempleLongitude`, `TempleLatitude`, `created_date`, `created_by`, `is_active`, `main_image`, `sub_images`, `main_video`, `ticket_id`, `marriage_fee`, `ana_time`, `control_by`, `functionsInsideTemple`, `temple_additional`, `isTicket`, `isMarriage`, `isAnnadhanam`, `temple_bus_route`, `ways_to_reach`, `temple_map`, `pooja_timings`, `aminity`, `templeApproveStatus`, `templeRejectionReason`, `isTraining`, `isHospital`, `bookingFields`, `poojaFields`, `showTemple`, `youtubeUrl`, `videoFile`) VALUES
(262, 77, 'user', 'NellaiAppar Kovil', 84, '331', 1, 30, 95, 20, 847, NULL, NULL, 'Nalmeiappar NagarThachanallur', '20', 1, 3, 1, NULL, 'very old temple and strong god', '12/02/2024', 'Wed Jul 03 2024 01:13:12 GMT+0530 (India Standard Time)', 'Wed Jul 03 2024 01:13:12 GMT+0530 (India Standard Time)', 'Wed Jul 03 2024 01:13:12 GMT+0530 (India Standard Time)', 'Wed Jul 03 2024 01:13:12 GMT+0530 (India Standard Time)', '', '', 'undefined', 'undefined', '', '', '', '', '', '', '', 'ddd', '6', NULL, 0, 1, '/public/temple_images/new.jpg', '', 'undefined', '', '0', 'undefined', 'Private', 'undefined', 'null', 0, 0, 0, '[{\'id\':\'UiFW88bPL6TOsRt0e2zLq\',\'route\':null,\'country\':null,\'countryName\':null,\'state\':null,\'stateName\':null,\'district\':null,\'districtName\':null,\'city\':null,\'cityName\':null,\'kilometer\':\'\'}]', 'MGR street', 'https://maps.app.goo.gl/kJT65y5U2Eu1G1aN9', '12 Am', '[{\'AmenitiesId\':24,\'amenityName\':\'Annadhanam\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':25,\'amenityName\':\'Training\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':26,\'amenityName\':\'Marriage\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':27,\'amenityName\':\'Hospital\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':28,\'amenityName\':\'Animal\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':0}]', 0, 'null', 0, 0, '[{\'id\':\'yhxhK8C4yD04fbf7XFnr5\',\'bookingField\':null,\'days\':null,\'morningTime\':null,\'eveningTime\':null,\'price\':null}]', '[{\'id\':\'SoIX_LAh1kMSg21nKEz5Q\',\'poojaName\':null,\'poojaNameId\':null,\'frequent\':null,\'timings\':null,\'description\':null}]', 0, NULL, NULL),
(263, 77, 'user', 'nalmaippar kovil', 332, '331', 1, 30, 61, 57, 763, NULL, NULL, 'qweqew', '19', 1, 4, 1, NULL, 'dsds', '12/02/2024', 'Wed Jul 03 2024 03:12:25 GMT+0530 (India Standard Time)', 'Wed Jul 03 2024 03:12:25 GMT+0530 (India Standard Time)', 'Wed Jul 03 2024 03:12:25 GMT+0530 (India Standard Time)', 'Wed Jul 03 2024 03:12:25 GMT+0530 (India Standard Time)', 'dssd', 'dd', 'undefined', 'undefined', '', '', '', '', '', '', '', 'ssdds', 'fsdsds', NULL, 0, 1, '/public/temple_images/amman kovil.jpeg', '', 'undefined', '', '0', 'undefined', 'Public', 'undefined', 'dssd', 0, 0, 0, '[{\'id\':\'nyIpEKcBNevcOZBgo5zgs\',\'route\':null,\'country\':null,\'countryName\':null,\'state\':null,\'stateName\':null,\'district\':null,\'districtName\':null,\'city\':null,\'cityName\':null,\'kilometer\':\'\'}]', 'nqskj', 'wwqewq', 'sddsdssd', '[{\'AmenitiesId\':24,\'amenityName\':\'Annadhanam\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':25,\'amenityName\':\'Training\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':26,\'amenityName\':\'Marriage\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':27,\'amenityName\':\'Hospital\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':28,\'amenityName\':\'Animal\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':0}]', 0, 'null', 0, 0, '[{\'id\':\'XcEiy7LmTo0AQgh5ZHoK3\',\'bookingField\':null,\'days\':null,\'morningTime\':null,\'eveningTime\':null,\'price\':null}]', '[{\'id\':\'Kl15OkbJYy5WcqRbMX3oB\',\'poojaName\':null,\'poojaNameId\':null,\'frequent\':null,\'timings\':null,\'description\':null}]', 0, NULL, NULL),
(264, 77, 'user', 'Murugan Temp', 25, '131', 1, 30, 250, 51, 774, NULL, NULL, 'nnwe', '20', 8, 5, 2, NULL, 'ewweewe', '1/05/2024', 'Wed Jul 03 2024 03:17:38 GMT+0530 (India Standard Time)', 'Wed Jul 03 2024 03:17:38 GMT+0530 (India Standard Time)', 'Wed Jul 03 2024 03:17:38 GMT+0530 (India Standard Time)', 'Wed Jul 03 2024 15:17:38 GMT+0530 (India Standard Time)', 'ewew', '', 'undefined', 'undefined', '', '', '', '', '', '', '', 'ewewe', 'ewewweewwe', NULL, 0, 1, '/public/temple_images/murugan.jpg', '', 'undefined', '', '0', 'undefined', 'Government', 'undefined', 'null', 0, 0, 0, '[{\'id\':\'td8RBnFnSxu_efgrzyf5H\',\'route\':\'Nearest Bustand\',\'country\':1,\'countryName\':\'India\',\'state\':30,\'stateName\':\'Tamil Nadu\',\'district\':95,\'districtName\':\'Thoothukudi\',\'city\':847,\'cityName\':\'Tiruchendur\',\'kilometer\':\'225\'}]', 'hhhweew', 'https://maps.app.goo.gl/kJT65y5U2Eu1G1aN9', 'weew', '[{\'AmenitiesId\':24,\'amenityName\':\'Annadhanam\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':25,\'amenityName\':\'Training\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':26,\'amenityName\':\'Marriage\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':27,\'amenityName\':\'Hospital\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':28,\'amenityName\':\'Animal\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':0}]', 0, 'null', 0, 0, '[{\'id\':\'CZsxN9lGM49x4WxlhCMb8\',\'bookingField\':null,\'days\':null,\'morningTime\':null,\'eveningTime\':null,\'price\':null}]', '[{\'id\':\'9uvz8OnTDzE-KCeG79CgZ\',\'poojaName\':null,\'poojaNameId\':null,\'frequent\':null,\'timings\':null,\'description\':null}]', 0, NULL, NULL),
(265, 77, 'user', 'vinayagar', 24, '332', 1, 30, 95, 20, 847, NULL, NULL, 'bmn', '20', 8, 4, 2, NULL, 'b', '12/02/2024', 'Wed Jul 03 2024 03:23:18 GMT+0530 (India Standard Time)', 'Wed Jul 03 2024 15:23:18 GMT+0530 (India Standard Time)', 'Wed Jul 03 2024 03:23:18 GMT+0530 (India Standard Time)', 'Wed Jul 03 2024 03:23:18 GMT+0530 (India Standard Time)', 'hghjj', 'jjbnn', 'undefined', 'undefined', '', '', '', '', '', '', '', 'ngjm', 'nj', NULL, 0, 1, '/public/temple_images/vinayagar.jpg', '', 'undefined', '', '0', 'undefined', 'Private', 'undefined', 'ghgj', 0, 0, 0, '[{\'id\':\'GAJeJDDAbHcNuYXpbdgTb\',\'route\':null,\'country\':null,\'countryName\':null,\'state\':null,\'stateName\':null,\'district\':null,\'districtName\':null,\'city\':null,\'cityName\':null,\'kilometer\':\'\'}]', 'bvnn', 'bmn', 'nbjguj', '[{\'AmenitiesId\':24,\'amenityName\':\'Annadhanam\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':25,\'amenityName\':\'Training\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':26,\'amenityName\':\'Marriage\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':27,\'amenityName\':\'Hospital\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':28,\'amenityName\':\'Animal\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':0}]', 0, 'null', 0, 0, '[{\'id\':\'M3LAOHdkO5nF0UWGb671W\',\'bookingField\':null,\'days\':null,\'morningTime\':null,\'eveningTime\':null,\'price\':null}]', '[{\'id\':\'Zgau4z0ZNHGzh1KVsGzVj\',\'poojaName\':null,\'poojaNameId\':null,\'frequent\':null,\'timings\':null,\'description\':null}]', 0, NULL, NULL),
(266, 77, 'user', 'sabarimalai Kovil', 163, '45', 1, 30, 95, 239, 847, NULL, NULL, 'gjh', '20', 7, 3, 1, NULL, 'jhjj', '12/02/2024', 'Wed Jul 03 2024 03:26:39 GMT+0530 (India Standard Time)', 'Wed Jul 03 2024 15:26:39 GMT+0530 (India Standard Time)', 'Wed Jul 03 2024 03:26:39 GMT+0530 (India Standard Time)', 'Wed Jul 03 2024 15:26:39 GMT+0530 (India Standard Time)', 'jhjjh', 'jjhj', 'undefined', 'undefined', '', '', '', '', '', '', '', 'nbnbn', 'mnbj', NULL, 0, 1, '/public/temple_images/Ayyappan.jpg', '', 'undefined', '', '0', 'undefined', 'Government', 'undefined', 'jhjj', 0, 0, 0, '[{\'id\':\'dL_-n8SGo_8mXbMPKiO0S\',\'route\':null,\'country\':null,\'countryName\':null,\'state\':null,\'stateName\':null,\'district\':null,\'districtName\':null,\'city\':null,\'cityName\':null,\'kilometer\':\'\'}]', 'nbnn', 'hjkh', 'jhhjhk', '[{\'AmenitiesId\':24,\'amenityName\':\'Annadhanam\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':25,\'amenityName\':\'Training\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':26,\'amenityName\':\'Marriage\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':27,\'amenityName\':\'Hospital\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':28,\'amenityName\':\'Animal\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':0}]', 0, 'null', 0, 0, '[{\'id\':\'du06iZTZETUGrl6lRRP6I\',\'bookingField\':null,\'days\':null,\'morningTime\':null,\'eveningTime\':null,\'price\':null}]', '[{\'id\':\'ggOw7hImvq09ye4BilfjY\',\'poojaName\':null,\'poojaNameId\':null,\'frequent\':null,\'timings\':null,\'description\':null}]', 0, NULL, NULL),
(267, 77, 'user', 'Varaki Amman', 214, '312', 1, 30, 95, 20, 847, NULL, NULL, 'hjgj', '19', 1, 5, 2, 'undefined', 'jhjhj', '12/02/2024', 'Wed Jul 03 2024 04:02:15 GMT+0530 (India Standard Time)', 'Wed Jul 03 2024 16:02:15 GMT+0530 (India Standard Time)', 'Wed Jul 03 2024 04:02:15 GMT+0530 (India Standard Time)', 'Wed Jul 03 2024 04:02:15 GMT+0530 (India Standard Time)', 'jjhjhj', '', 'NaN', 'NaN', 'undefined', 'undefined', 'undefined', '', '', '', '', 'fbg', 'fgh', NULL, 0, 0, '/public/temple_images/varahi Amman.webp', '', 'undefined', '', '0', 'undefined', 'Government', 'NaN', 'null', 0, 0, 0, '[{\'id\':\'JzC5cg-ugxIpLlAGoXF8S\',\'route\':\'Nearest Airport\',\'country\':1,\'countryName\':\'India\',\'state\':30,\'stateName\':\'Tamil Nadu\',\'district\':95,\'districtName\':\'Thoothukudi\',\'city\':847,\'cityName\':\'Tiruchendur\',\'kilometer\':\'123\'}]', 'hhhh', 'jhj', 'jjhj', '[{\'AmenitiesId\':24,\'amenityName\':\'Annadhanam\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':25,\'amenityName\':\'Training\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':26,\'amenityName\':\'Marriage\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':27,\'amenityName\':\'Hospital\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':28,\'amenityName\':\'Animal\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':0}]', 0, 'null', 0, 0, '[{\'id\':\'rFXYLVUSe5LORTD1KIjwc\',\'bookingField\':null,\'days\':null,\'morningTime\':null,\'eveningTime\':null,\'price\':null}]', '[{\'id\':\'oBv8hhE86vGr37r73lzOv\',\'poojaName\':null,\'poojaNameId\':null,\'frequent\':null,\'timings\':null,\'description\':null}]', 0, NULL, NULL),
(268, 77, 'user', 'sai bab kovil', 43, '327', 1, 30, 95, 20, 847, NULL, NULL, 'Nalmeiappar Nagar Thachanallur', '22', 7, 5, 1, NULL, 'The original complex is believed to have been built by Pandyas, while the present masonry structure was added by Cholas, Pallavas, Cheras, and Madurai Nayaks. The sanctums of the temple and the gopurams were constructed by Nindraseer Nedumaran (Koon Pandian) who reigned in the 7th century AD.', '12/02/2024', 'Thu Jul 04 2024 00:45:31 GMT+0530 (India Standard Time)', 'Thu Jul 04 2024 00:45:31 GMT+0530 (India Standard Time)', 'Thu Jul 04 2024 00:45:31 GMT+0530 (India Standard Time)', 'Thu Jul 04 2024 00:45:31 GMT+0530 (India Standard Time)', 'dwdw', 'yeew', '96,94,93', '158,157', '', '', '', 'vijay', '8765432111', 'as@gmail.com', 'www.templ.com', 'nnnn', 'dddssd', NULL, 0, 1, '/public/temple_images/sai baba.jpg', '', 'undefined', '', '0', 'undefined', 'Government', '1', 'aae', 0, 1, 1, '[{\'id\':\'caOH6xgzNrXwWy7Uyzv-H\',\'route\':\'Nearest Airport\',\'country\':1,\'countryName\':\'India\',\'state\':30,\'stateName\':\'Tamil Nadu\',\'district\':95,\'districtName\':\'Thoothukudi\',\'city\':847,\'cityName\':\'Tiruchendur\',\'kilometer\':\'12\'}]', 'near to bus stand', 'tnsd', '12', '[{\'AmenitiesId\':24,\'amenityName\':\'Annadhanam\',\'amenityDescription\':\'Annadham\',\'amenityStatus\':true,\'isMandatory\':1},{\'AmenitiesId\':25,\'amenityName\':\'Training\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':26,\'amenityName\':\'Marriage\',\'amenityDescription\':\'marriage\',\'amenityStatus\':true,\'isMandatory\':1},{\'AmenitiesId\':27,\'amenityName\':\'Hospital\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':28,\'amenityName\':\'Animal\',\'amenityDescription\':\'Anima\',\'amenityStatus\':true,\'isMandatory\':0}]', 0, 'null', 0, 0, '[{\'id\':\'xeFvnlEiJJFwLI33mNeKZ\',\'bookingField\':{\'id\':5,\'name\':\'Ther\'},\'days\':[\'Tuesday\'],\'morningTime\':\'2024-07-04T07:15:31.380Z\',\'eveningTime\':\'2024-07-03T19:15:31.381Z\',\'price\':\'6\'}]', '[{\'id\':\'KifLQ-olde2xcNAotAlRh\',\'poojaName\':\'Ganapathi Homam\',\'poojaNameId\':2,\'frequent\':\'2 Weeks\',\'timings\':\'888\',\'description\':\'jhjkk\'}]', 0, NULL, NULL),
(269, 77, 'user', 'madurai meenakshi', 331, '332', 1, 30, 250, 51, 774, NULL, NULL, 'dsdads', '20', 1, 4, 2, NULL, 'saassa', '12', 'Tue Jul 09 2024 22:55:46 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 22:55:46 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 11:55:46 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 23:55:46 GMT+0530 (India Standard Time)', 'saassasasa', 'saas', 'undefined', 'undefined', '', '', '', '', '', '', '', 'wqwqqw', 'wqwqw', NULL, 0, 1, '/public/temple_images/madurai meenakshi.webp', '', 'undefined', '', '0', 'undefined', 'Private', 'undefined', 'saasas', 0, 0, 0, '[{\'id\':\'YWuEl8yHffUttQ6P68hP4\',\'route\':\'Nearest Bustand\',\'country\':1,\'countryName\':\'India\',\'state\':30,\'stateName\':\'Tamil Nadu\',\'district\':250,\'districtName\':\'Cuddalore\',\'city\':774,\'cityName\':\'Cuddalore\',\'kilometer\':\'34\'}]', 'ddsasd', 'ssasa', '12322', '[{\'AmenitiesId\':24,\'amenityName\':\'Annadhanam\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':25,\'amenityName\':\'Training\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':26,\'amenityName\':\'Marriage\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':27,\'amenityName\':\'Hospital\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':28,\'amenityName\':\'Animal\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':0}]', 0, 'null', 0, 0, '[{\'id\':\'GPnCVdKs0bqIp_ICs-kg0\',\'bookingField\':null,\'days\':null,\'morningTime\':null,\'eveningTime\':null,\'price\':null}]', '[{\'id\':\'L69Ri_CZ6wXbel3fVo6jX\',\'poojaName\':null,\'poojaNameId\':null,\'frequent\':null,\'timings\':null,\'description\':null}]', 0, NULL, NULL),
(270, 77, 'user', 'Lord Krishna ', 53, '35', 1, 30, 250, 51, 774, NULL, NULL, 'qwqwqw', '22', 8, 5, 1, NULL, 'wqwq', '12', 'Tue Jul 09 2024 23:41:30 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 23:41:30 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 23:41:30 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 23:41:30 GMT+0530 (India Standard Time)', 'wqwq', '', 'undefined', 'undefined', '', '', '', 'jmnmn', 'jmjmjm', 'hhh', 'jjjj', 'yes', 'yes', NULL, 0, 1, '/public/temple_images/krishna image.jpg', '', 'undefined', '', '0', 'undefined', 'Public', 'undefined', 'null', 0, 0, 0, '[{\'id\':\'G_oiIoD0e6Bh_BQFUTgHV\',\'route\':null,\'country\':null,\'countryName\':null,\'state\':null,\'stateName\':null,\'district\':null,\'districtName\':null,\'city\':null,\'cityName\':null,\'kilometer\':\'\'}]', 'wqwq', '<iframe src=\'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31112.6966189351!2d80.18570601940151!3d12.902122104854827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c7909884379%3A0x4c212e0b82903e20!2sShri%20Shirdi%20Selva%20Sai%20Baba%20Mandir!5e0!3m2!1sen!2sin!4v1720506108891!5m2!1sen!2sin\' width=\'600\' height=\'450\' style=\'border:0;\' allowfullscreen=\'\' loading=\'lazy\' referrerpolicy=\'no-referrer-when-downgrade\'></iframe>', 'wqwqqw', '[{\'AmenitiesId\':24,\'amenityName\':\'Annadhanam\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':25,\'amenityName\':\'Training\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':26,\'amenityName\':\'Marriage\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':27,\'amenityName\':\'Hospital\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':28,\'amenityName\':\'Animal\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':0}]', 0, 'null', 0, 0, '[{\'id\':\'9PfpTNT4uyjBwRiHU6LU9\',\'bookingField\':null,\'days\':null,\'morningTime\':null,\'eveningTime\':null,\'price\':null}]', '[{\'id\':\'9DtBpyKdzZBloSVQ9m56x\',\'poojaName\':null,\'poojaNameId\':null,\'frequent\':null,\'timings\':null,\'description\':null}]', 0, NULL, NULL),
(271, 77, 'user', 'Thirupathi perumal', 235, '332', 1, 30, 95, 20, 847, NULL, NULL, 'thirupathi', '22', 3, 4, 1, NULL, 'very strong and powerfull god', '22/07/2024', 'Tue Jul 09 2024 23:54:34 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 11:54:34 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 12:54:34 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 13:54:34 GMT+0530 (India Standard Time)', 'luddu', 'yes', 'undefined', 'undefined', '', '', '', '', '', '', '', 'ewew', 'edwe', NULL, 0, 1, '/public/temple_images/Malekallu_Tirupathi-balaji,_Arsikere.jpg', '', 'undefined', '', '0', 'undefined', 'Government', 'undefined', 'fdfsd', 0, 0, 0, '[{\'id\':\'JEhwPGIzSCb4ZxSP1l8Hl\',\'route\':null,\'country\':null,\'countryName\':null,\'state\':null,\'stateName\':null,\'district\':null,\'districtName\':null,\'city\':null,\'cityName\':null,\'kilometer\':\'\'}]', 'highway', '<iframe src=\'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124079.74572076324!2d79.34392917851467!3d13.627805663667319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b0f88620427%3A0xcf4152d1daca0cac!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1720506443490!5m2!1sen!2sin\' width=\'600\' height=\'450\' style=\'border:0;\' allowfullscreen=\'\' loading=\'lazy\' referrerpolicy=\'no-referrer-when-downgrade\'></iframe>', '12', '[{\'AmenitiesId\':24,\'amenityName\':\'Annadhanam\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':25,\'amenityName\':\'Training\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':26,\'amenityName\':\'Marriage\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':27,\'amenityName\':\'Hospital\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':28,\'amenityName\':\'Animal\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':0}]', 0, 'null', 0, 0, '[{\'id\':\'nfldVfOrrO7U_bd4TcibE\',\'bookingField\':null,\'days\':null,\'morningTime\':null,\'eveningTime\':null,\'price\':null}]', '[{\'id\':\'Y0P--vvxfkUfC2sBo61-K\',\'poojaName\':null,\'poojaNameId\':null,\'frequent\':null,\'timings\':null,\'description\':null}]', 0, NULL, NULL),
(272, 77, 'user', 'Vishnu Perumal', 330, '332', 1, 30, 95, 20, 847, NULL, NULL, 'chennai', '22', 8, 5, 1, NULL, 'great', '22/07/2024', 'Tue Jul 09 2024 10:00:58 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 14:00:58 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 01:00:58 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 00:00:58 GMT+0530 (India Standard Time)', 'dsds', 'yes', 'undefined', 'undefined', '', '', '', '', '', '', '', 'sasa', 'ssas', NULL, 0, 1, '/public/temple_images/vishnuPerumal.jpeg', '', 'undefined', '', '0', 'undefined', 'Government', 'undefined', 'ssdfds', 0, 0, 0, '[{\'id\':\'-qUqm1Nx1Yj3R4g1CBIZY\',\'route\':null,\'country\':null,\'countryName\':null,\'state\':null,\'stateName\':null,\'district\':null,\'districtName\':null,\'city\':null,\'cityName\':null,\'kilometer\':\'\'}]', 'avadi', '<iframe src=\'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7642252585956!2d80.20573121015562!3d12.922869715893171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dfcfbebda9b%3A0x10991f56a8ffb3a3!2sVishnu%20maya%20devi%20amman%20temple!5e0!3m2!1sen!2sin!4v1720506733194!5m2!1sen!2sin\' width=\'600\' height=\'450\' style=\'border:0;\' allowfullscreen=\'\' loading=\'lazy\' referrerpolicy=\'no-referrer-when-downgrade\'></iframe>', '12', '[{\'AmenitiesId\':24,\'amenityName\':\'Annadhanam\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':25,\'amenityName\':\'Training\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':26,\'amenityName\':\'Marriage\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':27,\'amenityName\':\'Hospital\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':28,\'amenityName\':\'Animal\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':0}]', 0, 'null', 0, 0, '[{\'id\':\'ztAFCiROxs78wfU-AnH2P\',\'bookingField\':null,\'days\':null,\'morningTime\':null,\'eveningTime\':null,\'price\':null}]', '[{\'id\':\'h7QpoZkXi3Znk_2ytKNMf\',\'poojaName\':null,\'poojaNameId\':null,\'frequent\':null,\'timings\':null,\'description\':\'dsds\'}]', 0, NULL, NULL),
(273, 77, 'user', 'Saraswathi', 165, '296', 1, 30, 384, 25, 800, NULL, NULL, 'Temple Address', '23', 10, 4, 1, NULL, 'Temple History', '12', 'Tue Jul 09 2024 05:39:32 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 17:39:32 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 05:39:32 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 05:39:32 GMT+0530 (India Standard Time)', 'dates', 'sdfsd', 'undefined', 'undefined', '', '', '', '', '', '', '', 'Longitude', 'Latitude', NULL, 0, 1, '/public/temple_images/saraswathiGod.jpg', '', 'undefined', '', '0', 'undefined', 'Government', 'undefined', 'Temple Additio', 0, 0, 0, '[{\'id\':\'ktweq_VtaXJaEu17p5HRh\',\'route\':null,\'country\':null,\'countryName\':null,\'state\':null,\'stateName\':null,\'district\':null,\'districtName\':null,\'city\':null,\'cityName\':null,\'kilometer\':\'\'}]', 'Ways to reach temple', '<iframe src=\'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124444.72472313304!2d79.99208549726562!3d12.914299500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525edf1237c237%3A0x57f487dfaa6b7c6a!2sShri%20Lakshmi%20Saraswati%20Vinayakar%20Temple!5e0!3m2!1sen!2sin!4v1720527936171!5m2!1sen!2sin\' width=\'600\' height=\'450\' style=\'border:0;\' allowfullscreen=\'\' loading=\'lazy\' referrerpolicy=\'no-referrer-when-downgrade\'></iframe>', '12', '[{\'AmenitiesId\':24,\'amenityName\':\'Annadhanam\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':25,\'amenityName\':\'Training\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':26,\'amenityName\':\'Marriage\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':27,\'amenityName\':\'Hospital\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':28,\'amenityName\':\'Animal\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':0}]', 0, 'null', 0, 0, '[{\'id\':\'EYg6jaXkMMSPQ5p98ApcO\',\'bookingField\':null,\'days\':null,\'morningTime\':null,\'eveningTime\':null,\'price\':null}]', '[{\'id\':\'pmjSsArYJi8cEUbpwJtpT\',\'poojaName\':null,\'poojaNameId\':null,\'frequent\':null,\'timings\':null,\'description\':null}]', 0, NULL, NULL),
(274, 77, 'user', 'lakshmi devi', 330, 'undefined', 1, 30, 589, 83, 1649, NULL, NULL, 'Temple Address', '23', 10, 5, 1, NULL, 'Temple History', '12', 'Tue Jul 09 2024 05:58:53 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 17:58:53 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 05:58:53 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 05:58:53 GMT+0530 (India Standard Time)', 'dssd', 'yes', 'undefined', 'undefined', '', '', '', '', '', '', '', 'Longitude', 'Latitude', NULL, 0, 1, '/public/temple_images/lakshmiDevi.jpg', '', 'undefined', '', '0', 'undefined', 'Government', 'undefined', 'yes', 0, 0, 0, '[{\'id\':\'j4sPCWV4RhaWqGpcgAYlT\',\'route\':null,\'country\':null,\'countryName\':null,\'state\':null,\'stateName\':null,\'district\':null,\'districtName\':null,\'city\':null,\'cityName\':null,\'kilometer\':\'\'}]', 'erode', '<iframe src=\'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124425.42123832689!2d80.12615143906251!3d12.953003099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d38f277c11b%3A0x25c3efdc6fe12886!2sMahalakshmi%20Temple!5e0!3m2!1sen!2sin!4v1720528277519!5m2!1sen!2sin\' width=\'600\' height=\'450\' style=\'border:0;\' allowfullscreen=\'\' loading=\'lazy\' referrerpolicy=\'no-referrer-when-downgrade\'></iframe>', '12', '[{\'AmenitiesId\':24,\'amenityName\':\'Annadhanam\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':25,\'amenityName\':\'Training\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':26,\'amenityName\':\'Marriage\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':27,\'amenityName\':\'Hospital\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':28,\'amenityName\':\'Animal\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':0}]', 0, 'null', 0, 0, '[{\'id\':\'4qYBYvfoqXfGZXtfcU8Z0\',\'bookingField\':null,\'days\':null,\'morningTime\':null,\'eveningTime\':null,\'price\':null}]', '[{\'id\':\'xSnnBnukfTUetTctccC73\',\'poojaName\':null,\'poojaNameId\':null,\'frequent\':null,\'timings\':null,\'description\':null}]', 0, NULL, NULL),
(275, 77, 'user', 'Parvathi Devi', 295, '92', 1, 16, 110, 31, 1307, NULL, NULL, 'Temple Address', '23', 10, 4, 1, NULL, 'Temple History', '22/07/2024', 'Tue Jul 09 2024 06:06:22 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 06:06:22 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 06:06:22 GMT+0530 (India Standard Time)', 'Tue Jul 09 2024 06:06:22 GMT+0530 (India Standard Time)', '111', 'yes', 'undefined', 'undefined', '', '', '', '', '', '', '', 'Longitude', 'Latitude', NULL, 0, 1, '/public/temple_images/parvathiDevi.jpg', '', 'undefined', '', '0', 'undefined', 'Government', 'undefined', 'fddfd', 0, 0, 0, '[{\'id\':\'U6crUsJkDVR9zUev1hsYG\',\'route\':null,\'country\':null,\'countryName\':null,\'state\':null,\'stateName\':null,\'district\':null,\'districtName\':null,\'city\':null,\'cityName\':null,\'kilometer\':\'\'}]', 'Ways to reach temple', '<iframe src=\'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.672263513464!2d73.84522794192439!3d18.49849872512077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c193cf13fdc3%3A0x2fad4b22ab73e409!2sParvati%20Temple%20Paytha!5e0!3m2!1sen!2sin!4v1720529151152!5m2!1sen!2sin\' width=\'600\' height=\'450\' style=\'border:0;\' allowfullscreen=\'\' loading=\'lazy\' referrerpolicy=\'no-referrer-when-downgrade\'></iframe>', '12', '[{\'AmenitiesId\':24,\'amenityName\':\'Annadhanam\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':25,\'amenityName\':\'Training\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':26,\'amenityName\':\'Marriage\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':27,\'amenityName\':\'Hospital\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':28,\'amenityName\':\'Animal\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':0}]', 0, 'null', 0, 0, '[{\'id\':\'QpzlbOd-r3m88bU_ADspo\',\'bookingField\':null,\'days\':null,\'morningTime\':null,\'eveningTime\':null,\'price\':null}]', '[{\'id\':\'V2PWeBUxLlCNY_o93Nh1q\',\'poojaName\':null,\'poojaNameId\':null,\'frequent\':null,\'timings\':null,\'description\':null}]', 0, NULL, NULL),
(302, 80, 'user', 'Pillayarpatti', 261, '332', 1, 30, 250, 51, 774, NULL, NULL, 'Pillayarpatti', '20', 1, 5, 1, NULL, 'Performing Ganapathi homam helps in Inducing positive energy and helps in attaining peace of mind. Performing Ganapathi is an ideal remedy for a person who is passing through \'Ketu Maha Dasa or Bhukti\' as per their horoscope and thereby reducing the malefic effects of Ketu graha.', '05-07-2024', 'Tue Jul 16 2024 10:19:23 GMT+0530 (India Standard Time)', 'Tue Jul 16 2024 11:18:23 GMT+0530 (India Standard Time)', 'Tue Jul 16 2024 16:18:23 GMT+0530 (India Standard Time)', 'Tue Jul 16 2024 19:18:23 GMT+0530 (India Standard Time)', 'yes', 'Yes', '96', '159', '', '', '', 'ajith', '8608204444', 'murugan@gmail.com', 'https://www-pillaiyarpattitemple-com.translat', '44', '33', NULL, 0, 1, '/public/temple_images/pillayar.webp', '', 'undefined', '', '0', 'undefined', 'Private', '1', 'Pillayarpatti', 0, 0, 0, '[{\'id\':\'01dc0vupzNQD8-ICsGpq6\',\'route\':\'Nearest Bustand\',\'country\':1,\'countryName\':\'India\',\'state\':30,\'stateName\':\'Tamil Nadu\',\'district\':250,\'districtName\':\'Cuddalore\',\'city\':774,\'cityName\':\'Cuddalore\',\'kilometer\':\'3\'}]', 'Pillayarpatti', '<iframe src=\'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7855.475876816212!2d78.66263823835983!3d10.120523971904644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0061c5349368e9%3A0x1043c11aae513aec!2sPillayarpatti%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1721105578670!5m2!1sen!2sin\' width=\'600\' height=\'450\' style=\'border:0;\' allowfullscreen=\'\' loading=\'lazy\' referrerpolicy=\'no-referrer-when-downgrade\'></iframe>', '3', '[{\'AmenitiesId\':24,\'amenityName\':\'Annadhanam\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':25,\'amenityName\':\'Training\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':26,\'amenityName\':\'Marriage\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':27,\'amenityName\':\'Hospital\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':28,\'amenityName\':\'Animal\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':0}]', 0, 'null', 0, 0, '[{\'id\':\'SDEOEPeCa0bGgHmKUP682\',\'bookingField\':{\'id\':6,\'name\':\'Ear boring ceremony\'},\'days\':[\'Monday\'],\'morningTime\':\'2024-07-16T04:49:23.747Z\',\'eveningTime\':\'2024-07-16T04:47:23.747Z\',\'price\':\'33\'}]', '[{\'id\':\'sZGmIi5ZDQteVDPKo8dMw\',\'poojaName\':\'Ganapathi Homam\',\'poojaNameId\':2,\'frequent\':\'Weekly\',\'timings\':\'3\',\'description\':\'Ganapathi homam\'}]', 0, 'https://youtu.be/pFLu9n1StDM?si=uQDla6G33wrAoQAY', '/public/temple_videos/ganapathy.mp4'),
(304, 77, 'user', 'thiruchendur', 332, '333', 1, 30, 250, 51, 774, NULL, NULL, 'dss', '22', 3, 5, 1, NULL, 'assas', '12/02/2024', 'Wed Jul 17 2024 04:33:39 GMT+0530 (India Standard Time)', 'Wed Jul 17 2024 04:33:39 GMT+0530 (India Standard Time)', 'Wed Jul 17 2024 04:33:39 GMT+0530 (India Standard Time)', 'Wed Jul 17 2024 04:33:39 GMT+0530 (India Standard Time)', 'sdasa', 'adsdsa', 'undefined', 'undefined', '', '', '', 'ssa', 'assa', 'sasa', 'sasa', 'sasa', 'saas', NULL, 0, 1, '/public/temple_images/krishna image.jpg', '', 'undefined', '', '0', 'undefined', 'Government', 'undefined', 'dsasda', 0, 0, 0, '[{\'id\':\'a4dxIcV6-oOdSdxDHZQXH\',\'route\':\'Nearest Bustand\',\'country\':1,\'countryName\':\'India\',\'state\':30,\'stateName\':\'Tamil Nadu\',\'district\':250,\'districtName\':\'Cuddalore\',\'city\':771,\'cityName\':\'Chidambaram\',\'kilometer\':\'12\'}]', 'adssdaas', 'sddssd', 'a7', '[{\'AmenitiesId\':24,\'amenityName\':\'Annadhanam\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':25,\'amenityName\':\'Training\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':26,\'amenityName\':\'Marriage\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':27,\'amenityName\':\'Hospital\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':28,\'amenityName\':\'Animal\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':0}]', 0, 'null', 0, 0, '[{\'id\':\'u-aswDTvtCPecE_LcC8gl\',\'bookingField\':null,\'days\':null,\'morningTime\':null,\'eveningTime\':null,\'price\':null}]', '[{\'id\':\'T9oGzMjN1-ej8mGQpoai3\',\'poojaName\':null,\'poojaNameId\':null,\'frequent\':null,\'timings\':null,\'description\':null}]', 0, 'undefined', ''),
(305, 77, 'user', 'thiruchendur', 333, 'undefined', 1, 30, 95, 20, 847, 111, 'Female', 'assa', '19', 1, 5, 1, NULL, 'dsdssd', '12/02/2024', 'Wed Jul 17 2024 05:40:32 GMT+0530 (India Standard Time)', 'Wed Jul 17 2024 05:40:32 GMT+0530 (India Standard Time)', 'Wed Jul 17 2024 05:40:32 GMT+0530 (India Standard Time)', 'Wed Jul 17 2024 05:40:32 GMT+0530 (India Standard Time)', '', '', 'undefined', 'undefined', '', '', '', 'sadsasda', '', 'ddsads', 'xcxdxds', 'dsd', 'dds', NULL, 0, 1, '/public/temple_images/amman kovil.jpeg', '', 'undefined', '', '0', 'undefined', 'Government', 'undefined', 'null', 0, 0, 0, '[{\'id\':\'_j2XgpmbTqnXSvp4wFq_f\',\'route\':null,\'country\':null,\'countryName\':null,\'state\':null,\'stateName\':null,\'district\':null,\'districtName\':null,\'city\':null,\'cityName\':null,\'kilometer\':\'\'}]', 'dsdssd', 'dds', 'dsdsds', '[{\'AmenitiesId\':24,\'amenityName\':\'Annadhanam\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':25,\'amenityName\':\'Training\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':26,\'amenityName\':\'Marriage\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':27,\'amenityName\':\'Hospital\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':1},{\'AmenitiesId\':28,\'amenityName\':\'Animal\',\'amenityDescription\':\'\',\'amenityStatus\':false,\'isMandatory\':0}]', 0, 'null', 0, 0, '[{\'id\':\'xcjMfdsCnj7Ln2hEynCM7\',\'bookingField\':null,\'days\':null,\'morningTime\':null,\'eveningTime\':null,\'price\':null}]', '[{\'id\':\'t6JTGhCDmbh5VDmuqIWHg\',\'poojaName\':null,\'poojaNameId\':null,\'frequent\':null,\'timings\':null,\'description\':null}]', 0, 'undefined', '');

-- --------------------------------------------------------

--
-- Table structure for table `temple_event`
--

CREATE TABLE `temple_event` (
  `temple_eventid` int(11) NOT NULL,
  `event_name` varchar(45) DEFAULT NULL,
  `event_startdate` varchar(100) DEFAULT NULL,
  `event_enddate` varchar(100) DEFAULT NULL,
  `event_timing` varchar(45) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `registration` varchar(45) DEFAULT NULL,
  `temple_name` varchar(255) DEFAULT NULL,
  `temple_country` int(11) DEFAULT NULL,
  `temple_state` int(11) DEFAULT NULL,
  `temple_district` int(11) DEFAULT NULL,
  `temple_city` int(11) DEFAULT NULL,
  `contact_details` varchar(255) DEFAULT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `is_active` varchar(45) DEFAULT NULL,
  `event_image` text DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `event_tag` int(11) DEFAULT NULL,
  `category` int(11) NOT NULL,
  `event_type` int(11) DEFAULT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `temple_event`
--

INSERT INTO `temple_event` (`temple_eventid`, `event_name`, `event_startdate`, `event_enddate`, `event_timing`, `description`, `registration`, `temple_name`, `temple_country`, `temple_state`, `temple_district`, `temple_city`, `contact_details`, `created_date`, `created_by`, `is_active`, `event_image`, `address`, `event_tag`, `category`, `event_type`, `price`) VALUES
(1, 'aayutha pooja', 'Wed May 04 2022 00:00:00 GMT+0530 (India Standard Time)', 'Fri May 13 2022 00:00:00 GMT+0530 (India Standard Time)', 'Invalid Date', 'description', 'undefined', 'undefined', 1, 30, 384, 800, '1212', '2022-05-07 10:53:38', 'undefined', 'undefined', '/public/event_images/veena-artist-musical-symphony.jpg', 'ambattur', 0, 0, 0, 0),
(22, 'Diwali', 'Sat Jan 11 2020 00:00:00 GMT+0530 (India Standard Time)', 'Wed Mar 23 2022 00:00:00 GMT+0530 (India Standard Time)', 'Invalid Date', 'pongal festival is more special in  tamilandu', 'undefined', 'undefined', 1, 2, 59, 59, '8675879573', '2022-03-15 07:06:03', 'undefined', 'undefined', '/public/event_images/maxresdefault.jpg', 'Trichy', 0, 0, 0, 0),
(23, 'pongal', 'Thu Feb 06 2020 00:00:00 GMT+0530 (India Standard Time)', 'Thu Mar 24 2022 00:00:00 GMT+0530 (India Standard Time)', 'Invalid Date', 'pongal festival is more special in  tamilandu', 'undefined', 'undefined', 1, 2, 59, 59, '8675879573', '2022-03-15 07:09:00', 'undefined', 'undefined', '/public/event_images/1421155972_pongal.jpg', 'Perambalur', 0, 0, 0, 0),
(24, 'thaipoosam', 'Thu Aug 13 2020 00:00:00 GMT+0530 (India Standard Time)', 'Sat Aug 15 2020 00:00:00 GMT+0530 (India Standard Time)', 'Invalid Date', 'pongal festival is more special in  tamilandu', 'undefined', 'undefined', 1, 2, 59, 59, '8675879573', '2022-03-15 07:09:00', 'undefined', 'undefined', '/public/event_images/5fd1dfadf1278-Thaipusam_Festival_Attractions.jpg', 'Chennai', 0, 0, 0, 0),
(27, 'vinayagar chathurthi', 'Thu May 12 2022 00:00:00 GMT+0530 (India Standard Time)', 'Sat May 14 2022 00:00:00 GMT+0530 (India Standard Time)', 'Invalid Date', 'description', 'undefined', 'undefined', 1, 30, 384, 800, '1234567889', '2022-05-07 12:05:33', 'undefined', 'undefined', '/public/event_images/Ganesh-festival.jpg', 'tambaram', 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `temple_images`
--

CREATE TABLE `temple_images` (
  `Temple_images` int(11) NOT NULL,
  `temple_id` int(11) DEFAULT NULL,
  `image_name` text DEFAULT NULL,
  `image_path` text DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `state_id` int(11) DEFAULT NULL,
  `district_id` int(11) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `temple_images`
--

INSERT INTO `temple_images` (`Temple_images`, `temple_id`, `image_name`, `image_path`, `created_by`, `country_id`, `state_id`, `district_id`, `city_id`, `is_active`) VALUES
(1, 170, 'sivanservices.jpg', '/public/temple_images/sivanservices.jpg', 17, 1, 30, 384, 800, 1),
(833, 91, 'thirumurugan11.jpg', '/public/temple_images/thirumurugan11.jpg', 1, NULL, 30, 291, 780, 1),
(834, 91, 'thiru1123.jpg', '/public/temple_images/thiru1123.jpg', 1, NULL, 30, 291, 780, 1),
(835, 91, 'thirumalai1122.jpg', '/public/temple_images/thirumalai1122.jpg', 1, NULL, 30, 291, 780, 1),
(836, 91, 'thirumalaikeni1111.jpg', '/public/temple_images/thirumalaikeni1111.jpg', 1, NULL, 30, 291, 780, 1),
(837, 88, 'yoga3.jpg', '/public/temple_images/yoga3.jpg', 1, NULL, 30, 384, 800, 1),
(838, 88, 'yoga4.jpg', '/public/temple_images/yoga4.jpg', 1, NULL, 30, 384, 800, 1),
(839, 88, 'yoga2.jpg', '/public/temple_images/yoga2.jpg', 1, NULL, 30, 384, 800, 1),
(840, 88, 'yoga2.jpeg', '/public/temple_images/yoga2.jpeg', 1, NULL, 30, 384, 800, 1),
(841, 87, 'bhakatha2.jpg', '/public/temple_images/bhakatha2.jpg', 1, NULL, 30, 291, 1519, 1),
(842, 87, 'bhagatha4.jpeg', '/public/temple_images/bhagatha4.jpeg', 1, NULL, 30, 291, 1519, 1),
(843, 87, 'bhagatha3.jpg', '/public/temple_images/bhagatha3.jpg', 1, NULL, 30, 291, 1519, 1),
(844, 87, 'bhakatha1.jpg', '/public/temple_images/bhakatha1.jpg', 1, NULL, 30, 291, 1519, 1),
(845, 86, '108v4.jpg', '/public/temple_images/108v4.jpg', 1, NULL, 30, 291, 780, 1),
(846, 86, '108v3.jpg', '/public/temple_images/108v3.jpg', 1, NULL, 30, 291, 780, 1),
(847, 86, '108v2.jpg', '/public/temple_images/108v2.jpg', 1, NULL, 30, 291, 780, 1),
(848, 86, '108v1.jpg', '/public/temple_images/108v1.jpg', 1, NULL, 30, 291, 780, 1),
(849, 85, 'thiratha1.jpg', '/public/temple_images/thiratha1.jpg', 1, NULL, 30, 272, 1508, 1),
(850, 85, 'downloadthirua.jpeg', '/public/temple_images/downloadthirua.jpeg', 1, NULL, 30, 272, 1508, 1),
(851, 85, '04_bigthir.jpg', '/public/temple_images/04_bigthir.jpg', 1, NULL, 30, 272, 1508, 1),
(852, 85, 'photo8jpg111.jpg', '/public/temple_images/photo8jpg111.jpg', 1, NULL, 30, 272, 1508, 1),
(853, 84, 'puri4.jpeg', '/public/temple_images/puri4.jpeg', 1, NULL, 25, 312, 640, 1),
(854, 84, 'Jagannath-Temple-Puri12.jpg', '/public/temple_images/Jagannath-Temple-Puri12.jpg', 1, NULL, 25, 312, 640, 1),
(855, 84, 'puri1.jpeg', '/public/temple_images/puri1.jpeg', 1, NULL, 25, 312, 640, 1),
(856, 83, 'vdm1.jpg', '/public/temple_images/vdm1.jpg', 1, NULL, 30, 291, 1608, 1),
(857, 83, 'vada madurai tower222.jpg', '/public/temple_images/vada madurai tower222.jpg', 1, NULL, 30, 291, 1608, 1),
(858, 83, 'vdm2.gif', '/public/temple_images/vdm2.gif', 1, NULL, 30, 291, 1608, 1),
(859, 83, 'vdm1.gif', '/public/temple_images/vdm1.gif', 1, NULL, 30, 291, 1608, 1),
(871, 110, 'Temple_de_Mînâkshî01.jpg', '/public/temple_images/Temple_de_Mînâkshî01.jpg', 1, 1, 30, 384, 800, 1),
(872, 110, '79.webp', '/public/temple_images/79.webp', 1, 1, 30, 384, 800, 1),
(873, 110, 'Madurai-Chithirai-Festival.jpg', '/public/temple_images/Madurai-Chithirai-Festival.jpg', 1, 1, 30, 384, 800, 1),
(874, 110, 'topview.jpg', '/public/temple_images/topview.jpg', 1, 1, 30, 384, 800, 1),
(875, 111, 'shw.jpg', '/public/temple_images/shw.jpg', 1, 1, 16, 110, 1307, 1),
(876, 111, '12.jpg', '/public/temple_images/12.jpg', 1, 1, 16, 110, 1307, 1),
(877, 111, '45.jpg', '/public/temple_images/45.jpg', 1, 1, 16, 110, 1307, 1),
(878, 112, '35.jpg', '/public/temple_images/35.jpg', 1, 1, 16, 110, 1307, 1),
(879, 112, '60.jpeg', '/public/temple_images/60.jpeg', 1, 1, 16, 110, 1307, 1),
(880, 112, '68.jpg', '/public/temple_images/68.jpg', 1, 1, 16, 110, 1307, 1),
(881, 113, 'vw.jpg', '/public/temple_images/vw.jpg', 1, 1, 16, 110, 1307, 1),
(882, 113, 'mn.jpg', '/public/temple_images/mn.jpg', 1, 1, 16, 110, 1307, 1),
(883, 113, 'sw.jpg', '/public/temple_images/sw.jpg', 1, 1, 16, 110, 1307, 1),
(884, 114, 'ay.jpg', '/public/temple_images/ay.jpg', 1, 1, 16, 110, 1307, 1),
(885, 114, 'sa.jpg', '/public/temple_images/sa.jpg', 1, 1, 16, 110, 1307, 1),
(886, 114, 'ta.jpg', '/public/temple_images/ta.jpg', 1, 1, 16, 110, 1307, 1),
(887, 115, 'sv.jpg', '/public/temple_images/sv.jpg', 1, 1, 16, 110, 1307, 1),
(888, 115, 'dk.jpg', '/public/temple_images/dk.jpg', 1, 1, 16, 110, 1307, 1),
(889, 115, 'ab.jpg', '/public/temple_images/ab.jpg', 1, 1, 16, 110, 1307, 1),
(890, 115, 'cn.jpg', '/public/temple_images/cn.jpg', 1, 1, 16, 110, 1307, 1),
(891, 116, 'av.jpg', '/public/temple_images/av.jpg', 1, 1, 16, 110, 1307, 1),
(892, 116, 'fk.jpg', '/public/temple_images/fk.jpg', 1, 1, 16, 110, 1307, 1),
(893, 116, 'sm.jpg', '/public/temple_images/sm.jpg', 1, 1, 16, 110, 1307, 1),
(894, 117, 'she.jpg', '/public/temple_images/she.jpg', 1, 1, 16, 110, 1307, 1),
(895, 117, 'unm.jpg', '/public/temple_images/unm.jpg', 1, 1, 16, 110, 1307, 1),
(896, 117, 'vk.jpg', '/public/temple_images/vk.jpg', 1, 1, 16, 110, 1307, 1),
(897, 118, 'dh.jpg', '/public/temple_images/dh.jpg', 1, 1, 16, 110, 1307, 1),
(898, 118, 'ar.jpg', '/public/temple_images/ar.jpg', 1, 1, 16, 110, 1307, 1),
(899, 118, 'ma.jpg', '/public/temple_images/ma.jpg', 1, 1, 16, 110, 1307, 1),
(900, 119, 'bh.jpg', '/public/temple_images/bh.jpg', 1, 1, 16, 110, 1307, 1),
(901, 119, 'ck.jpg', '/public/temple_images/ck.jpg', 1, 1, 16, 110, 1307, 1),
(902, 119, 'kk.jpg', '/public/temple_images/kk.jpg', 1, 1, 16, 110, 1307, 1),
(903, 120, 'ka.jpg', '/public/temple_images/ka.jpg', 1, 1, 16, 110, 1307, 1),
(904, 120, 'af.jpg', '/public/temple_images/af.jpg', 1, 1, 16, 110, 1307, 1),
(905, 120, 'ma.jpg', '/public/temple_images/ma.jpg', 1, 1, 16, 110, 1307, 1),
(910, 122, 'thiruchendur 1.jpg', '/public/temple_images/thiruchendur 1.jpg', 1, 1, 30, 95, 847, 1),
(911, 122, 'thiruchendur 2.jpg', '/public/temple_images/thiruchendur 2.jpg', 1, 1, 30, 95, 847, 1),
(912, 122, 'thiruchendur 3.jpg', '/public/temple_images/thiruchendur 3.jpg', 1, 1, 30, 95, 847, 1),
(913, 122, 'thiruchendur 4.jpg', '/public/temple_images/thiruchendur 4.jpg', 1, 1, 30, 95, 847, 1),
(914, 123, 'na.jpg', '/public/temple_images/na.jpg', 1, 1, 16, 110, 1307, 1),
(915, 123, 'gh.jpg', '/public/temple_images/gh.jpg', 1, 1, 16, 110, 1307, 1),
(916, 123, 'sn.jpg', '/public/temple_images/sn.jpg', 1, 1, 16, 110, 1307, 1),
(917, 124, 'ba.jpg', '/public/temple_images/ba.jpg', 1, 1, 16, 110, 1307, 1),
(918, 124, 'am.jpg', '/public/temple_images/am.jpg', 1, 1, 16, 110, 1307, 1),
(919, 124, 'cn.jpg', '/public/temple_images/cn.jpg', 1, 1, 16, 110, 1307, 1),
(920, 125, 'swamimalai 1.jpg', '/public/temple_images/swamimalai 1.jpg', 1, 1, 30, 98, 796, 1),
(921, 125, 'swamimalai 2.jpg', '/public/temple_images/swamimalai 2.jpg', 1, 1, 30, 98, 796, 1),
(922, 125, 'swamimalai 3.jpg', '/public/temple_images/swamimalai 3.jpg', 1, 1, 30, 98, 796, 1),
(923, 125, 'swamimalai 4.jpg', '/public/temple_images/swamimalai 4.jpg', 1, 1, 30, 98, 796, 1),
(924, 126, 'DA.jpg', '/public/temple_images/DA.jpg', 1, 1, 16, 110, 1307, 1),
(925, 126, 'bm.jpg', '/public/temple_images/bm.jpg', 1, 1, 16, 110, 1307, 1),
(926, 126, 'dn.jpg', '/public/temple_images/dn.jpg', 1, 1, 16, 110, 1307, 1),
(927, 127, 'tirtani 1.jpg', '/public/temple_images/tirtani 1.jpg', 1, 1, 30, 86, 853, 1),
(928, 127, 'tirutani 2.jpg', '/public/temple_images/tirutani 2.jpg', 1, 1, 30, 86, 853, 1),
(929, 127, 'tirutani 3.jpg', '/public/temple_images/tirutani 3.jpg', 1, 1, 30, 86, 853, 1),
(930, 127, 'tirutani 4.jpg', '/public/temple_images/tirutani 4.jpg', 1, 1, 30, 86, 853, 1),
(931, 128, 'pazhamudhir 1.jpg', '/public/temple_images/pazhamudhir 1.jpg', 1, 1, 30, 384, 800, 1),
(932, 128, 'pazhamudhir 2.jpg', '/public/temple_images/pazhamudhir 2.jpg', 1, 1, 30, 384, 800, 1),
(933, 128, 'pazhamudhir 3.jpg', '/public/temple_images/pazhamudhir 3.jpg', 1, 1, 30, 384, 800, 1),
(934, 128, 'pazhamudhir 4.jpg', '/public/temple_images/pazhamudhir 4.jpg', 1, 1, 30, 384, 800, 1),
(935, 129, 'palani 1.jpg', '/public/temple_images/palani 1.jpg', 1, 1, 30, 291, 1204, 1),
(936, 129, 'palani 2.jpg', '/public/temple_images/palani 2.jpg', 1, 1, 30, 291, 1204, 1),
(937, 129, 'palani 3.jpg', '/public/temple_images/palani 3.jpg', 1, 1, 30, 291, 1204, 1),
(938, 129, 'palani 4.jpg', '/public/temple_images/palani 4.jpg', 1, 1, 30, 291, 1204, 1),
(939, 130, 'alagar 1.jpg', '/public/temple_images/alagar 1.jpg', 1, 1, 30, 384, 800, 1),
(940, 130, 'alagar 2.jpg', '/public/temple_images/alagar 2.jpg', 1, 1, 30, 384, 800, 1),
(941, 130, 'alagar 3.jpg', '/public/temple_images/alagar 3.jpg', 1, 1, 30, 384, 800, 1),
(942, 130, 'alagar 4.jpg', '/public/temple_images/alagar 4.jpg', 1, 1, 30, 384, 800, 1),
(943, 131, 'thirumogur 1.jpg', '/public/temple_images/thirumogur 1.jpg', 1, 1, 30, 384, 800, 1),
(944, 131, 'thirumogur 2.jpg', '/public/temple_images/thirumogur 2.jpg', 1, 1, 30, 384, 800, 1),
(945, 131, 'thirumogur 3.jpg', '/public/temple_images/thirumogur 3.jpg', 1, 1, 30, 384, 800, 1),
(946, 131, 'thirumogur 4.jpg', '/public/temple_images/thirumogur 4.jpg', 1, 1, 30, 384, 800, 1),
(947, 132, 'thiruthangal 1.jpg', '/public/temple_images/thiruthangal 1.jpg', 1, 1, 30, 61, 1261, 1),
(948, 132, 'thiruthangal 2.jpg', '/public/temple_images/thiruthangal 2.jpg', 1, 1, 30, 61, 1261, 1),
(949, 132, 'thiruthangal 3.jpg', '/public/temple_images/thiruthangal 3.jpg', 1, 1, 30, 61, 1261, 1),
(950, 132, 'thiruthangal 4.jpg', '/public/temple_images/thiruthangal 4.jpg', 1, 1, 30, 61, 1261, 1),
(955, 134, 'is.jpg', '/public/temple_images/is.jpg', 1, 1, 16, 110, 1307, 1),
(956, 134, 'bm.jpg', '/public/temple_images/bm.jpg', 1, 1, 16, 110, 1307, 1),
(957, 134, 'vb.jpg', '/public/temple_images/vb.jpg', 1, 1, 16, 110, 1307, 1),
(995, 145, 'thiruvellarai 1.jpg', '/public/temple_images/thiruvellarai 1.jpg', 1, 1, 30, 90, 1619, 1),
(996, 145, 'thiruvellarai 2.jpg', '/public/temple_images/thiruvellarai 2.jpg', 1, 1, 30, 90, 1619, 1),
(997, 145, 'thiruvellarai 3.jpg', '/public/temple_images/thiruvellarai 3.jpg', 1, 1, 30, 90, 1619, 1),
(998, 145, 'thiruvellarai 4.jpg', '/public/temple_images/thiruvellarai 4.jpg', 1, 1, 30, 90, 1619, 1),
(999, 146, 'thiruanbil 1.jpg', '/public/temple_images/thiruanbil 1.jpg', 1, 1, 30, 90, 1620, 1),
(1000, 146, 'thiruanbil 2.jpg', '/public/temple_images/thiruanbil 2.jpg', 1, 1, 30, 90, 1620, 1),
(1001, 146, 'thiruanbil 3.jpg', '/public/temple_images/thiruanbil 3.jpg', 1, 1, 30, 90, 1620, 1),
(1002, 146, 'thiruanbil 4.jpg', '/public/temple_images/thiruanbil 4.jpg', 1, 1, 30, 90, 1620, 1),
(1003, 147, 'appakudathan 1.jpg', '/public/temple_images/appakudathan 1.jpg', 1, 1, 30, 98, 1464, 1),
(1004, 147, 'appakudathan 2.jpg', '/public/temple_images/appakudathan 2.jpg', 1, 1, 30, 98, 1464, 1),
(1005, 147, 'appakudathan 3.jpg', '/public/temple_images/appakudathan 3.jpg', 1, 1, 30, 98, 1464, 1),
(1006, 147, 'appakudathan 4.jpg', '/public/temple_images/appakudathan 4.jpg', 1, 1, 30, 98, 1464, 1),
(1007, 148, 'thirukkozhi 5.jpg', '/public/temple_images/thirukkozhi 5.jpg', 1, 1, 30, 95, 794, 1),
(1008, 148, 'thirukostiyur 5.jpg', '/public/temple_images/thirukostiyur 5.jpg', 1, 1, 30, 95, 794, 1),
(1009, 148, 'S.Mareeshwaran (1)-1.jpg', '/public/temple_images/S.Mareeshwaran (1)-1.jpg', 1, 1, 30, 95, 794, 1),
(1010, 148, 'S.Mareeshwaran (1)-2.jpg', '/public/temple_images/S.Mareeshwaran (1)-2.jpg', 1, 1, 30, 95, 794, 1),
(1011, 149, 'thiruanbil 5.jpg', '/public/temple_images/thiruanbil 5.jpg', 16, 1, 30, 384, 800, 1),
(1012, 149, 'Screenshot (2).png', '/public/temple_images/Screenshot (2).png', 16, 1, 30, 384, 800, 1),
(1013, 149, 'Screenshot (3).png', '/public/temple_images/Screenshot (3).png', 16, 1, 30, 384, 800, 1),
(1014, 151, 'Durga_Devi_Temple_TP.jpg', '/public/temple_images/Durga_Devi_Temple_TP.jpg', 17, 1, 30, 401, 1622, 1),
(1015, 151, 'shri-navadurga-devi-durga-devi-mandir-guhagar-konkan-maharashtra-india-HP2HGD.jpg', '/public/temple_images/shri-navadurga-devi-durga-devi-mandir-guhagar-konkan-maharashtra-india-HP2HGD.jpg', 17, 1, 30, 401, 1622, 1),
(1016, 151, '0fe282d8525e528569fdae55cc212859.jpg', '/public/temple_images/0fe282d8525e528569fdae55cc212859.jpg', 17, 1, 30, 401, 1622, 1),
(1017, 151, 'Durga_Devi_Temple_TP.jpg', '/public/temple_images/Durga_Devi_Temple_TP.jpg', 17, 1, 30, 401, 1622, 1),
(1022, 151, '2021-11-27.jpg', '/public/temple_images/2021-11-27.jpg', 0, 1, 30, 384, 800, 1),
(1023, 151, 'vedadri-temple.jpg', '/public/temple_images/vedadri-temple.jpg', 0, 1, 30, 384, 800, 1),
(1024, 151, 'download.jpg', '/public/temple_images/download.jpg', 0, 1, 30, 384, 800, 1),
(1025, 151, '2022-03-17.jpg', '/public/temple_images/2022-03-17.jpg', 0, 1, 30, 384, 800, 1),
(1030, 153, 'lord-vishnu-and-maa-lakshmi-wallpaper.jpg', '/public/temple_images/lord-vishnu-and-maa-lakshmi-wallpaper.jpg', 17, 1, 30, 384, 800, 1),
(1031, 153, 'download (5).jpg', '/public/temple_images/download (5).jpg', 17, 1, 30, 384, 800, 1),
(1032, 153, 'download (4).jpg', '/public/temple_images/download (4).jpg', 17, 1, 30, 384, 800, 1),
(1033, 153, 'download (3).jpg', '/public/temple_images/download (3).jpg', 17, 1, 30, 384, 800, 1),
(1042, 156, 'download (6).jpg', '/public/temple_images/download (6).jpg', 17, 1, 30, 384, 800, 1),
(1043, 156, 'download (9).jpg', '/public/temple_images/download (9).jpg', 17, 1, 30, 384, 800, 1),
(1044, 156, 'download (8).jpg', '/public/temple_images/download (8).jpg', 17, 1, 30, 384, 800, 1),
(1045, 156, 'download (7).jpg', '/public/temple_images/download (7).jpg', 17, 1, 30, 384, 800, 1),
(1050, 158, 'download (10).jpg', '/public/temple_images/download (10).jpg', 17, 1, 30, 384, 800, 1),
(1051, 158, 'download (8).jpg', '/public/temple_images/download (8).jpg', 17, 1, 30, 384, 800, 1),
(1052, 158, 'download (7).jpg', '/public/temple_images/download (7).jpg', 17, 1, 30, 384, 800, 1),
(1053, 158, 'download (6).jpg', '/public/temple_images/download (6).jpg', 17, 1, 30, 384, 800, 1),
(1054, 159, 'download (10).jpg', '/public/temple_images/download (10).jpg', 17, 1, 30, 384, 800, 1),
(1055, 159, 'download (8).jpg', '/public/temple_images/download (8).jpg', 17, 1, 30, 384, 800, 1),
(1056, 159, 'download (7).jpg', '/public/temple_images/download (7).jpg', 17, 1, 30, 384, 800, 1),
(1057, 159, 'download (6).jpg', '/public/temple_images/download (6).jpg', 17, 1, 30, 384, 800, 1),
(1058, 160, 'download (10).jpg', '/public/temple_images/download (10).jpg', 17, 1, 30, 384, 800, 1),
(1059, 160, 'download (8).jpg', '/public/temple_images/download (8).jpg', 17, 1, 30, 384, 800, 1),
(1060, 160, 'download (7).jpg', '/public/temple_images/download (7).jpg', 17, 1, 30, 384, 800, 1),
(1061, 160, 'download (6).jpg', '/public/temple_images/download (6).jpg', 17, 1, 30, 384, 800, 1),
(0, 248, 'Capture1.PNG', '/public/temple_images/Capture1.PNG', 0, 1, 30, 95, 847, 1),
(0, 249, 'Capture1.PNG', '/public/temple_images/Capture1.PNG', 0, 1, 30, 95, 847, 1),
(0, 250, '20519631.jpg', '/public/temple_images/20519631.jpg', 0, 1, 30, 95, 847, 1),
(0, 251, 'f18fd695ca655cadc316449ef41d4f5b.jpg', '/public/temple_images/f18fd695ca655cadc316449ef41d4f5b.jpg', 0, 1, 30, 95, 847, 1),
(0, 252, 'f18fd695ca655cadc316449ef41d4f5b.jpg', '/public/temple_images/f18fd695ca655cadc316449ef41d4f5b.jpg', 0, 1, 30, 95, 847, 1),
(0, 253, 'Capture1.PNG', '/public/temple_images/Capture1.PNG', 0, 1, 30, 95, 794, 1),
(0, 254, 'f18fd695ca655cadc316449ef41d4f5b.jpg', '/public/temple_images/f18fd695ca655cadc316449ef41d4f5b.jpg', 0, 1, 30, 95, 847, 1),
(0, 255, 'f18fd695ca655cadc316449ef41d4f5b.jpg', '/public/temple_images/f18fd695ca655cadc316449ef41d4f5b.jpg', 0, 1, 30, 95, 847, 1),
(0, 256, 'Capture.PNG', '/public/temple_images/Capture.PNG', 0, 1, 30, 95, 847, 1),
(0, 257, 'f18fd695ca655cadc316449ef41d4f5b.jpg', '/public/temple_images/f18fd695ca655cadc316449ef41d4f5b.jpg', 0, 1, 30, 95, 794, 1),
(0, 258, 'f18fd695ca655cadc316449ef41d4f5b.jpg', '/public/temple_images/f18fd695ca655cadc316449ef41d4f5b.jpg', 0, 1, 30, 95, 847, 1),
(0, 259, 'Capture.PNG', '/public/temple_images/Capture.PNG', 0, 1, 30, 95, 847, 1),
(0, 260, '20519631.jpg', '/public/temple_images/20519631.jpg', 0, 1, 30, 95, 847, 1),
(0, 261, '20519631.jpg', '/public/temple_images/20519631.jpg', 0, 1, 30, 95, 847, 1),
(0, 262, 'new.jpg', '/public/temple_images/new.jpg', 0, 1, 30, 95, 847, 1),
(0, 263, 'amman kovil.jpeg', '/public/temple_images/amman kovil.jpeg', 0, 1, 30, 61, 763, 1),
(0, 264, 'murugan.jpg', '/public/temple_images/murugan.jpg', 0, 1, 30, 250, 774, 1),
(0, 265, 'vinayagar.jpg', '/public/temple_images/vinayagar.jpg', 0, 1, 30, 95, 847, 1),
(0, 266, 'Ayyappan.jpg', '/public/temple_images/Ayyappan.jpg', 0, 1, 30, 95, 847, 1),
(0, 267, 'varahi Amman.webp', '/public/temple_images/varahi Amman.webp', 0, 1, 30, 95, 847, 1),
(0, 268, 'sai baba.jpg', '/public/temple_images/sai baba.jpg', 0, 1, 30, 95, 847, 1),
(0, 270, 'sai baba.jpg', '/public/temple_images/sai baba.jpg', 0, 1, 30, 250, 774, 1),
(0, 276, 'ramanathan swamy.jpg', '/public/temple_images/ramanathan swamy.jpg', 0, 1, 30, 95, 847, 1),
(0, 278, 'pillayar.webp', '/public/temple_images/pillayar.webp', 0, 1, 30, 95, 794, 1),
(0, 280, 'sai baba.jpg', '/public/temple_images/sai baba.jpg', 0, 1, 30, 250, 774, 1),
(0, 302, 'pillayar.webp', '/public/temple_images/pillayar.webp', 0, 1, 30, 250, 774, 1);

-- --------------------------------------------------------

--
-- Table structure for table `traineradvertisment`
--

CREATE TABLE `traineradvertisment` (
  `id` int(11) NOT NULL,
  `trainerId` int(11) NOT NULL,
  `companyName` varchar(255) NOT NULL,
  `websiteUrl` varchar(255) NOT NULL,
  `advertisement_image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `traineradvertisment`
--

INSERT INTO `traineradvertisment` (`id`, `trainerId`, `companyName`, `websiteUrl`, `advertisement_image`) VALUES
(1, 1, 'anil', 'testing.com', 'undefined'),
(2, 2, 'test1', 'testing.com1', '/public/trainerAdvertismentImage/1650086665969-kuala-lumpur-malaysia-sri-maha-260nw-614123705.webp');

-- --------------------------------------------------------

--
-- Table structure for table `trainercategorieslist`
--

CREATE TABLE `trainercategorieslist` (
  `id` int(11) NOT NULL,
  `categoryName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trainercategorieslist`
--

INSERT INTO `trainercategorieslist` (`id`, `categoryName`) VALUES
(1, 'dance'),
(2, 'singing');

-- --------------------------------------------------------

--
-- Table structure for table `trainersubcategorylist`
--

CREATE TABLE `trainersubcategorylist` (
  `Id` int(11) NOT NULL,
  `trainerCategoryId` int(11) NOT NULL,
  `trainerSubCategoryName` varchar(255) NOT NULL,
  `Tag` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trainersubcategorylist`
--

INSERT INTO `trainersubcategorylist` (`Id`, `trainerCategoryId`, `trainerSubCategoryName`, `Tag`) VALUES
(1, 1, 'bharatanatyam', 'some tag');

-- --------------------------------------------------------

--
-- Table structure for table `trainer_categories`
--

CREATE TABLE `trainer_categories` (
  `id` int(11) NOT NULL,
  `trainer_id` int(11) NOT NULL,
  `CompanyName` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `Categories` varchar(255) NOT NULL,
  `SubCategories` varchar(255) NOT NULL,
  `EmailId` varchar(50) NOT NULL,
  `WebsiteLink` text NOT NULL,
  `RegularPrice` int(11) NOT NULL,
  `DiscountPrice` int(11) NOT NULL,
  `Country` int(11) NOT NULL,
  `State` int(11) NOT NULL,
  `District` int(11) NOT NULL,
  `City` int(11) NOT NULL,
  `area` int(11) NOT NULL,
  `address` text NOT NULL,
  `Tags` int(11) NOT NULL,
  `businessPhoto` varchar(255) NOT NULL,
  `TempleDistance` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `trainer_classlist`
--

CREATE TABLE `trainer_classlist` (
  `id` int(11) NOT NULL,
  `class_name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trainer_classlist`
--

INSERT INTO `trainer_classlist` (`id`, `class_name`, `description`, `images`) VALUES
(1, 'Hanuman Chalisa', 'Hanuman Chalisa is a timeless ode to devotion Lord Hanuman is known for his devotion to Lord Ram and is considered to be the embodiment of faith, surrender, and devotion. The \'Hanuman Chalisa\' is composed by Saint Goswami Tulsidas, the author of the Tulsi Ramayana (Ramacharitamanasa). It is believed that an ailing Tulsidas composed the Hanuman Chalisa. Composing and singing the praises of Lord Hanuman, helped Tulsidas regain his health.Composed of 40 verses filled with praises for Lord Hanuman, the Hanuman Chalisa is composed in Avadhi. This dialect of Hindi was spoken in Ayodhya, Lord Rama’s birthplace.', '/public/trainerclasslist_images/hanuman.jpg'),
(2, 'Tiruppavai', 'Hanuman Chalisa is a timeless ode to devotion Lord Hanuman is known for his devotion to Lord Ram and is considered to be the embodiment of faith, surrender, and devotion. The \'Hanuman Chalisa\' is composed by Saint Goswami Tulsidas, the author of the Tulsi Ramayana (Ramacharitamanasa). It is believed that an ailing Tulsidas composed the Hanuman Chalisa. Composing and singing the praises of Lord Hanuman, helped Tulsidas regain his health.Composed of 40 verses filled with praises for Lord Hanuman, the Hanuman Chalisa is composed in Avadhi. This dialect of Hindi was spoken in Ayodhya, Lord Rama’s birthplace.', '/public/trainerclasslist_images/thiruppavai.jpeg'),
(4, 'ayyapan1', 'god is great', '/public/trainerclasslist_images/ayappan.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `trainer_offer`
--

CREATE TABLE `trainer_offer` (
  `id` int(11) NOT NULL,
  `trainer_id` int(11) NOT NULL,
  `photo` text NOT NULL,
  `promoCode` text NOT NULL,
  `category` varchar(255) NOT NULL,
  `startDate` text NOT NULL,
  `endDate` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trainer_offer`
--

INSERT INTO `trainer_offer` (`id`, `trainer_id`, `photo`, `promoCode`, `category`, `startDate`, `endDate`, `description`) VALUES
(1, 2, '/public/trainerOffer/sivanservices.jpg', 'hfdfg', '2', '', '', 'dhkhd'),
(2, 2, '/public/trainerOffer/sivanservices.jpg', 'ddgf', 'Shop', '2022-04-07', '', 'dfdds');

-- --------------------------------------------------------

--
-- Table structure for table `trainer_register`
--

CREATE TABLE `trainer_register` (
  `trainer_id` int(11) NOT NULL,
  `trainerName` varchar(255) NOT NULL,
  `businessName` varchar(255) NOT NULL,
  `countryCode` int(11) NOT NULL,
  `countryId` int(11) NOT NULL,
  `stateId` int(11) NOT NULL,
  `districtId` int(11) NOT NULL,
  `cityId` int(11) NOT NULL,
  `areaId` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `pincode` int(11) NOT NULL,
  `phone` int(11) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trainer_register`
--

INSERT INTO `trainer_register` (`trainer_id`, `trainerName`, `businessName`, `countryCode`, `countryId`, `stateId`, `districtId`, `cityId`, `areaId`, `address`, `pincode`, `phone`, `password`) VALUES
(1, 'anilkumar', 'cross', 1, 1, 30, 384, 800, 5, '12, Frist cross', 890346, 1608455118, '$2a$10$jqvr.gnV2zJG2hW1QqYPGOvipWSlS4XKIQcIVLXqNr.aQhlgrRtmS'),
(2, 'santhya', 'cross', 1, 1, 30, 384, 800, 5, '12, Frist cross', 890346, 1234567890, '$2a$10$XsbJyBSRbjyCvo/o5WgbB.XQtv6tUPZ/1MSIXsqgjtDT0r/DbSqM2'),
(3, 'anil kumar', 'undefined', 0, 1, 30, 384, 800, 5, 'scdwqde2f', 3333333, 0, '$2a$10$jzh3KwjId/6smQxwryT5TeMzhy87wdNVKr6tWLDalXVaVmmV6qbI2'),
(4, 'qaqaq', 'undefined', 0, 1, 30, 384, 800, 5, 'asasas', 121212, 0, '$2a$10$ZAfW9.jn9s2ngm/Seg0uUOxZxJZ2UKyVmW.EXvedKUFgFfgs4vmai'),
(5, 'qaqaq', 'undefined', 0, 1, 30, 384, 800, 5, 'asasas', 121212, 0, '$2a$10$m0SfpHdhZ6HuLuJDZGSp1O12F3erhYohmK1zjgzymmtj8SSQWLySG'),
(6, 'qaqaq', 'undefined', 0, 1, 30, 384, 800, 5, 'asasas', 121212, 0, '$2a$10$VyMSTHfNhdUKZMa2TPx8YutPU9widVER7ssI5rHR2n/so6IBaEsFy'),
(7, 'qaqaq', 'undefined', 0, 1, 30, 384, 800, 5, 'asasas', 121212, 0, '$2a$10$otoyRF7IKBJtXrkVhWP4u.hLPDSYqeG1yT3Mad3Pt3DwwXQtRlR1S'),
(8, 'qaqaq', 'undefined', 0, 1, 30, 384, 800, 5, 'asasas', 121212, 0, '$2a$10$QLThbRS48MZgNKDGwe3l7uz9sWvovEz0LApCUrxWAJ9I4aDWuemlK'),
(9, 'qaqaq', 'undefined', 0, 1, 30, 384, 800, 5, 'asasas', 121212, 0, '$2a$10$rB/cQB1JqhNAbqlPC8uAxeU/E.5Z4WhSHYLAeAjDFddOZH4t9i/cC'),
(10, 'kolo', 'undefined', 0, 1, 30, 384, 800, 5, 'asasas', 121212, 0, '$2a$10$fFbVRpir3ZYcw4GLQggxXuq6CLTcFjDk6foeRpmJ5FzCrM2AwrDX2'),
(11, 'kolo', 'undefined', 0, 1, 30, 384, 800, 5, 'asasas', 121212, 0, '$2a$10$gbFugXbfk.V0/o1rGeUNj.9Y28Jz8fw7Z8hNe8D7qcdhdHeAo7brC'),
(12, 'kolo', 'undefined', 0, 1, 30, 384, 800, 5, 'asasas', 121212, 0, '$2a$10$STZpIvyLdAgnxMge6i91GO62w4m4kEucp/9VSt.eRL8Jt3/obWRQu'),
(13, 'kolo', 'undefined', 0, 1, 30, 384, 800, 5, 'asasas', 121212, 0, '$2a$10$zTnuxpmR8WmpfUtPeULXWOGg3EVn8EI1nRCh1rOHb0DmX.R3b0Xfm'),
(14, 'kolo', 'undefined', 0, 1, 30, 384, 800, 5, 'asasas', 121212, 0, '$2a$10$9pvnsWP.zQw2MoVD4787PeUBIjQR4uD2ViEqUc6bybZGj10WUHUYS'),
(15, 'kolo', 'undefined', 0, 1, 30, 384, 800, 5, 'asasas', 121212, 0, '$2a$10$Z9kKBQWKqwhdwcpYdaS4X.Y4gWPJIiMSbn03GP31/YluQkKAjzq0G'),
(16, 'kolo', 'undefined', 0, 1, 30, 384, 800, 5, 'asasas', 121212, 0, '$2a$10$MIn/1D2VI07lmpi/2RnJqOGH0m/kINbcSy7.URV/7o6.9ZpQ8FA4e'),
(17, 'Rajan', '', 0, 1, 30, 95, 847, 20, 'thachanallur', 654321, 2147483647, '$2a$10$WYiF9B3OMyJwpo8rdfHfyuvjjsicIyGh8Iy296aq37Bc332FvA2zK'),
(18, 'Ajith', '', 0, 1, 30, 95, 847, 20, 'ggg', 654321, 2147483647, '$2a$10$bHIURmS3P8V1rK13Ph4aSu0esldjVgXKsO4wnq7vB6RiXMza.QTaW');

-- --------------------------------------------------------

--
-- Table structure for table `trainer_trainerlist`
--

CREATE TABLE `trainer_trainerlist` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `start_date` text DEFAULT NULL,
  `end_date` text DEFAULT NULL,
  `start_time` text NOT NULL,
  `end_time` text DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
  `mode` varchar(255) DEFAULT NULL,
  `online_link` varchar(255) DEFAULT NULL,
  `inside_or_outside` varchar(255) DEFAULT NULL,
  `country` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `district` int(11) DEFAULT NULL,
  `city` int(11) DEFAULT NULL,
  `area` int(11) DEFAULT NULL,
  `pincode` int(11) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `landmark` varchar(255) DEFAULT NULL,
  `topics` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trainer_trainerlist`
--

INSERT INTO `trainer_trainerlist` (`id`, `title`, `description`, `start_date`, `end_date`, `start_time`, `end_time`, `language`, `mode`, `online_link`, `inside_or_outside`, `country`, `state`, `district`, `city`, `area`, `pincode`, `address`, `landmark`, `topics`) VALUES
(1, 'ayyapa', 'beautifull god', '22/22/2020', '22/22/2021', '10:05:45', '13:09:45', 'tamil', 'online', 'http//hewfiuhfoiq.com', 'inside', 1, 30, 200, 12, 1, 1212121, '10 short street ,chennai', 'near indian Bank', '[hunuman,pilayar,murugan]');

-- --------------------------------------------------------

--
-- Table structure for table `training`
--

CREATE TABLE `training` (
  `training_id` int(11) NOT NULL,
  `training_name` varchar(255) NOT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `training`
--

INSERT INTO `training` (`training_id`, `training_name`, `created_date`, `created_by`, `is_active`) VALUES
(5, 'Dance', '2020-06-24 06:26:20', 1, 1),
(9, 'Puranam Speech', '2020-06-24 06:39:30', 1, 1),
(12, 'Maha Bharatham', '2020-08-14 13:19:50', 1, 1),
(13, 'Sundara Kandam', '2020-08-14 14:44:33', 1, 1),
(14, 'Veenai Class', '2020-08-14 14:44:40', 1, 1),
(15, 'Bagavath Geethai(Geetha)', '2020-08-14 14:44:56', 1, 1),
(16, 'Singing', '2020-08-14 14:44:56', 1, 1),
(26, 'drums', '2022-04-26 08:45:09', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `userregister`
--

CREATE TABLE `userregister` (
  `id` int(11) NOT NULL,
  `UserName` varchar(30) NOT NULL,
  `CountryId` int(11) NOT NULL,
  `StateId` int(11) NOT NULL,
  `DistrictId` int(11) NOT NULL,
  `CityId` int(11) NOT NULL,
  `AreaId` int(11) NOT NULL,
  `Pincode` int(11) NOT NULL,
  `EmailId` varchar(100) NOT NULL,
  `Phone` varchar(15) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `password` text NOT NULL,
  `isApproved` int(11) NOT NULL,
  `rejectReasonByAdmin` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userregister`
--

INSERT INTO `userregister` (`id`, `UserName`, `CountryId`, `StateId`, `DistrictId`, `CityId`, `AreaId`, `Pincode`, `EmailId`, `Phone`, `password`, `isApproved`, `rejectReasonByAdmin`) VALUES
(49, 'sumukha', 1, 16, 149, 1629, 54, 577201, 'sumukha@gmail.com', '9449022673', '$2a$10$Nugl0X3wDRx5Vh84/vx.ZO7HnXk9Cqx73DqKwmkjIwvPCr3hOruT.', 0, ''),
(51, 'sumukha', 1, 16, 149, 1629, 54, 577201, 'sumukha12@gmail.com', '9449022673', '$2a$10$5VM96QNSg/KMSRPjJ4Y11.XaMEH9moHCoNaMIuluzrLcv8Slezhc6', 0, ''),
(52, 'siva', 1, 30, 384, 800, 5, 324561, 'itzz.siva@gmail.com', '8907653241', '$2a$10$Xw1CP6TDgzu3AJJSNc4wG.khjQ2iMNHzmOylR4R9LOY5L0gucczPu', 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `userrole`
--

CREATE TABLE `userrole` (
  `role_id` int(11) NOT NULL,
  `user_role` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `role_name` varchar(15) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `phone_number` text NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` text NOT NULL,
  `country_id` int(11) NOT NULL,
  `district_id` int(11) NOT NULL,
  `state_id` int(11) NOT NULL,
  `city_id` int(11) NOT NULL,
  `kuladeivam` varchar(100) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL,
  `fav_god` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `role_id`, `role_name`, `user_name`, `phone_number`, `email`, `password`, `country_id`, `district_id`, `state_id`, `city_id`, `kuladeivam`, `is_active`, `fav_god`) VALUES
(12, 1, 'User', 'sakthi', '8760876635', 'samsakthi8760@gmail.com', '$2a$10$jEztPpPMfVuVE.4PLNXINuAW9a6XgkESBwSFdADixsWtJCtz5lF2q', 1, 25, 2, 6, 'Chenammal', 1, '1,2'),
(13, 2, 'Admin', 'Ramesh', '9876543210', 'ramesh@gmail.com', '$2a$10$pxQ31RqIpW4Yf9Xam9ldmOfx73LbGwMYimrno5Ma2y.krtQJ.A8Pu', 1, 384, 30, 759, 'Perumaal', 1, '20,17'),
(14, 1, 'User', 'thiru', '8072002892', 'samsakthi@gmail.com', '$2a$10$mem.BvRWu4Jh1JrOFbOW8.l1bu64d4agfmhaeCpYuoxMHxP2tqR7q', 1, 26, 2, 7, 'd', 1, '13'),
(15, 1, 'User', 'vijay', '8760876636', 'samsakthi@gmail.com', '$2a$10$hgvbmtuKRjkWd1yNRnCjrueBZkSk1RUenh5qEIJ32GCcaoSsxspk2', 1, 25, 2, 6, 'Murugar', 1, '4,13'),
(16, 2, 'Admin', 'Ramesh', '9791036735', 'szigony@info.com', '$2a$10$pxQ31RqIpW4Yf9Xam9ldmOfx73LbGwMYimrno5Ma2y.krtQJ.A8Pu', 1, 110, 16, 1307, 'Murugan', 1, '25'),
(17, 2, 'Admin', 'Vijay', '9659555627', 'vijay@gmail.com', '$2a$10$8bEW.CJSlNKQZ9SFEBRswu3osAAEXRFxw6Fa4f5TBjAeGAHIjuyyq', 1, 110, 16, 1307, 'Murugan', 1, '25');

-- --------------------------------------------------------

--
-- Table structure for table `vendors`
--

CREATE TABLE `vendors` (
  `vendor_id` int(11) NOT NULL,
  `vendor_name` varchar(150) DEFAULT NULL,
  `business_name` varchar(150) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `country_code_id` int(11) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `state_id` int(11) DEFAULT NULL,
  `district_id` int(11) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `area_id` int(11) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `pincode` varchar(15) DEFAULT NULL,
  `is_active` tinyint(4) NOT NULL,
  `post` tinyint(4) NOT NULL,
  `isApproved` int(11) NOT NULL,
  `rejectReasonByAdmin` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `vendors`
--

INSERT INTO `vendors` (`vendor_id`, `vendor_name`, `business_name`, `phone_number`, `address`, `country_code_id`, `country_id`, `state_id`, `district_id`, `city_id`, `area_id`, `password`, `pincode`, `is_active`, `post`, `isApproved`, `rejectReasonByAdmin`) VALUES
(2, 'mareesh', 'smiley', '12345678', 'Test', 1, 1, 30, 401, 785, 1, '$2a$10$m8kDc9C.hEICAia740ooI.VxQExtVksRlLqAZa6sEgqAYgx6c7/8S', '123456', 0, 0, 1, ''),
(3, 'Mareesh', 'Test', '8870258244', 'Test Address', 1, 1, 30, 95, 794, 8, '$2a$10$9aWRLep9FGXDyz9vOYMLkOMqwZMEMwyJHShovY5Sqh0aeqD4grTQ.', '628720', 1, 1, 2, 'asdcasfcasd'),
(4, 'Thomas', 'Hotel', '7871622157', 'Kalugumalai', 1, 1, 30, 95, 794, 8, '$2a$10$k1A0QRUnyEd9MNV8scDIHuYi.pjgritAZm7e0KKO.67zjkdOxKhGy', '628501', 0, 1, 1, ''),
(5, 'Test123', 'Test123', '9659555627', 'Test123', 1, 1, 30, 98, 1464, 44, '$2a$10$CJSlNKQZ9SFEBRswu3osAAEXRFxw6Fa4f5TBjAeGAHIjuyyq', '123456', 1, 1, 2, 'asdcasfcasd'),
(6, 'vendor Test', 'Business  Name', '7837837898', 'Hotel Details', 1, 1, 30, 401, 785, 1, '$2a$10$H0fApNAOoLSl2BD8RZ9p/OTfk/28NITNZpzMIjZw77/U/z0Kpwbs2', '7837332', 1, 0, 2, 'anilkumar'),
(9, 'Rajan', 'Hotel', '1234567890', '#456,indiragandi street,near RTC bustand', 1, 1, 30, 384, 800, 5, '$2a$10$DHWRK3AZORG3XfLO3X4vI.4bn4egut4zLX6jIiTBSZ.7gC1crWMNG', '560102', 0, 1, 1, 'bbb'),
(10, 'sakthipriya', 'chs', '1234567891', 'address', 1, 1, 30, 384, 800, 5, '$2a$10$ySaWnwDwkxwQWZ/zBENJsekiGusb69G7v2td9yvfp6CHx92A7Iv7e', '628884', 0, 0, 1, ''),
(11, 'vijay', 'OYO Hotel', '902517546', 'near by udupi hotel', 1, 1, 30, 384, 800, 5, '$2a$10$mxkucuN0BcTa90eGqbhv..RTNENgKtmin7xurYKDCCZ5ePqGAJAey', '985878', 0, 0, 2, '\"he is  rejected\"'),
(12, 'venkatesh', 'OK boss', '90426564', 'fgethajhtyjj', 1, 1, 30, 384, 800, 5, '$2a$10$40ghL.P/Ksb5w81J/1LMbu1a50H4aUtAeetZnm7yJQU8VSXz7i8gO', '245345', 0, 0, 2, '\"he iis also rejected\"'),
(38, 'nnnn', 'dad', '1234567876', 'dadd', NULL, 1, 30, 384, 800, 5, '$2a$10$pexJd7euV/zb776ejx.yy.0Z.6.JeuUz83uX8NrbAMAKYZDQR91gu', '123456', 0, 0, 0, ''),
(39, 'Abhijith', 'asd', '1234567894', 'adad', NULL, 1, 30, 384, 800, 5, '$2a$10$gHW9FqPY5sZnwIA9HAtmSeXrMlqDEjH/4mn9vmEVEQNoM6RZgZb.O', '5432189', 0, 0, 0, ''),
(40, 'rajan', 'technology', '8901234567', 'asasasa', NULL, 1, 30, 384, 800, 5, '$2a$10$NAWAJWdcrFZ5zM1s58MxdetphsLuuKHzah9Vqxremn/gKNjxjZzOq', '1212121', 0, 0, 1, ''),
(41, 'jayathurgab', 'BUHARI RRESTAURANT', '8072645582', 'No-13,Ammani amman gopuram,Bharathi Nagar,New street,Tiruvannamalai', NULL, 1, 30, 85, 854, 62, '$2a$10$fq0JSkvThy2a4voxzq4yUOPSg9YmtDMjGPqkPZGYZvwo0BNPOgtDW', '606601', 0, 0, 1, ''),
(42, 'jaya', 'Buhari restaurant', '8072645581', 'No-33,padma street,kancheepuram sannathi nagar,kancheepuram-631502', NULL, 1, 30, 482, 789, 65, '$2a$10$Znk2CnN4qXc1LepPMN2Rm.dUotY4lOZvz6xgUUp2YvERtB234eZc6', '631502', 0, 0, 1, ''),
(43, 'Raju', 'Apoorva catering services', '7502113806', '5/23,North car street, Thiruchendur', NULL, 1, 30, 85, 1383, 62, '$2a$10$bdKOLsLvFU0QyHJwRmFtMe8ETPSnXrgN79MgZ8rbEiatQZbMK7veC', '623789', 0, 0, 1, ''),
(44, 'saranya', 'templetransport', '8072293081', '66 ganapathy nagar.', NULL, 1, 30, 85, 854, 62, '$2a$10$oapC7bTrdJUMc29HzOW5l.wnPKSWAROAgg8Y9l.mZMPbBwttgAB1u', '606601', 0, 0, 1, ''),
(45, 'Anish', 'Ganesh Mess', '9876543218', '5/45,Murugan kovil street, northcar street, thiruchendur', NULL, 1, 30, 95, 847, 20, '$2a$10$lm49CfelCEi3gCBCN4O4TuCzga..JCGf7UqKwHTG.Vmkb/MWjyJcG', '624009', 0, 0, 2, '\"multiple account\"'),
(46, 'Anish', 'Ganesh Mess', '9111111111', '5/45,Murugan kovil street, northcar street, thiruchendur', NULL, 1, 30, 95, 847, 20, '$2a$10$sabdg0vUNosxQrv5.YXij.GsD9LCZTo/2idLoPnFT/2gezFLV5eWG', '624009', 0, 0, 2, '\"multiple account\"'),
(47, 'Anish', 'Ganesh Mess', '9111111110', '5/45,Murugan kovil street, northcar street, thiruchendur', NULL, 1, 30, 95, 847, 20, '$2a$10$tKhdLo2rvpOAZZi8RiJNvuGL61EfwlafwP5m6duecIZLCMaHxCI9a', '624009', 0, 0, 0, ''),
(48, 'Anish', 'Ganesh Mess', '9111111112', '5/45,Murugan kovil street, northcar street, thiruchendur', NULL, 1, 30, 95, 847, 20, '$2a$10$GD1oNtXd6ZDEpDX8zOUlKu6q4qFkqf9EPH/74YDT1VIpkF7TOGNaO', '624009', 0, 0, 0, ''),
(49, 'dfdidje', 'slkhdckj', '9876543200', '2/34, koil street, rameshwram', NULL, 1, 30, 299, 829, 72, '$2a$10$hH5Td/NBimm9ndnCpL8zq.aE1qaSg.w5RP4yCtvX7L8/fwM.5tEkC', '621009', 0, 0, 0, ''),
(50, 'Raj', 'Saravana bhavan Veg Restaurant', '8122977774', '5/45,Murugan kovil street, northcar street, thiruchendur', NULL, 1, 30, 95, 847, 20, '$2a$10$6uK9qTeU6cWAQQKpXmDKCuIxpGWtga35ll4MdASEPtZENIkARM9FS', '624009', 0, 0, 0, ''),
(51, 'Abi', 'Abi\'s Restraunt', '6385558865', '57 North car street', NULL, 1, 30, 100, 833, 96, '$2a$10$CtuN2mfgB6HAEwNqmlXOIOyrP3QO2db6BcKwDqTtmz8ZBfIxfG0m.', '626140', 0, 0, 0, ''),
(52, '1234556', '1233445', '9876543210', 'kjbhuyfdf6trsxctvbnomlrxertcyghbj', NULL, 1, 30, 61, 763, 57, '$2a$10$ba//78SLeuFv3P2AP7Qgoe8TrossHnIqBXsQz5MIPBD1ZYVCXSnyO', '678543', 0, 0, 0, ''),
(54, 'Abi', 'Abi\'s Botique', '6357456790', '57 East car street', NULL, 1, 17, 96, 435, 172, '$2a$10$zibRml60SNOzBNG6j.qKROnHM.CDCm6fSQQMuZcE6kJjFPsdGbI7.', '695023', 0, 0, 0, ''),
(55, 'Gowtham', 'Gowtham', '8608204012', 'cuddlore', NULL, 1, 30, 250, 774, 51, '$2a$10$0bIPkzobo2W40GG7W2KA7.vCRe8uOBzelzGLSr.e/iY4QOq8U1fra', '123456', 0, 0, 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `vendor_business`
--

CREATE TABLE `vendor_business` (
  `business_id` int(11) NOT NULL,
  `temple_id` text NOT NULL,
  `hotel_name` varchar(255) DEFAULT NULL,
  `room_types` varchar(255) DEFAULT NULL,
  `total_rooms` int(11) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `state_id` int(11) DEFAULT NULL,
  `district_id` int(11) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `area_id` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `pincode` varchar(15) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `hotel_image` text CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `opening_time` text DEFAULT NULL,
  `closing_time` text DEFAULT NULL,
  `active_state` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vendor_business`
--

INSERT INTO `vendor_business` (`business_id`, `temple_id`, `hotel_name`, `room_types`, `total_rooms`, `country_id`, `state_id`, `district_id`, `city_id`, `area_id`, `address`, `pincode`, `phone`, `hotel_image`, `opening_time`, `closing_time`, `active_state`) VALUES
(1, '137', 'Leela palace', 'single bedroom|double bedroom|triple bedroom|suite room', 7, 1, 5, 4, 4, 2, '23, HAL Old Airport Rd, HAL 2nd Stage, Kodihalli, Bengaluru, Karnataka 560008', '560008', '7682456285', '/public/hotel_image/Arcadiahotel_1.jpg', '07 : 00 AM', '10 : 00 PM', 1),
(2, '137', 'krishna palace', 'single bedroom|double bedroom|triple bedroom', 7, 1, 5, 4, 4, 2, '23,KR puram railway station, tinfactory, Bengaluru, Karnataka 560016', '560016', '8885652782', '/public/hotel_image/hotel-rockfort-view.jpg', '08 : 00 AM', '10 : 00 PM', NULL),
(6, '114', 'krishna palace', 'single bedroom|double bedroom|triple bedroom', 7, 1, 5, 4, 4, 2, '23,KR puram railway station, tinfactory, Bengaluru, Karnataka 560016', '560016', '8885652782', '/public/hotel_image/hotel-exterior.jpg', '10 : 00 AM', '10:00 AM', 1),
(8, '0', 'undefined', 'undefined', 0, 0, 0, 0, 0, 0, 'undefined', 'undefined', 'undefined', '/public/hotel_image/photo-1538460120076-604b93a2ce88.jpg', '10 : 00 AM', '10 : 00 PM', 0),
(9, '114', 'krishna palace', 'single bedroom|double bedroom', 7, 1, 5, 4, 4, 2, '23,KR puram railway station, tinfactory, Bengaluru, Karnataka 560016', '560016', '8885652782', '/public/hotel_image/photo-1538460120076-604b93a2ce88.jpg', '06 : 00 AM', '11 : 00 PM', 0),
(11, '114', 'krishna palace', 'single bedroom|double bedroom', 7, 1, 5, 4, 4, 2, '23,KR puram railway station, tinfactory, Bengaluru, Karnataka 560016', '560016', '8885652782', '/public/hotel_image/photo-1538460120076-604b93a2ce88.jpg', '06 : 00 AM', '11 : 00 PM', 1);

-- --------------------------------------------------------

--
-- Table structure for table `ventor_categorylist`
--

CREATE TABLE `ventor_categorylist` (
  `vendorId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `categoryid` int(11) NOT NULL,
  `subCategoryid` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `offerPrice` decimal(10,2) NOT NULL,
  `details` text NOT NULL,
  `address` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `country` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `district` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `area` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ventor_categorylist`
--

INSERT INTO `ventor_categorylist` (`vendorId`, `name`, `categoryid`, `subCategoryid`, `price`, `offerPrice`, `details`, `address`, `photo`, `country`, `state`, `district`, `city`, `area`) VALUES
(1, 'The New Shop', 0, 0, 800.00, 500.00, 'Genaral Store', '50, 51, North East Street, Thiruchendur, Tamil Nadu 628215', '/public/vendorcategory_imges/shop2.jpg', '1', '30', '250', '774', '51'),
(2, 'Murugan Shop', 0, 0, 800.00, 500.00, 'Temple store', '50, 51, North East Street, Thiruchendur, Tamil Nadu 628215', '/public/vendorcategory_imges/shop.jpg', '1', '30', '95', '847', '20'),
(3, 'Tuck Shop', 0, 0, 800.00, 500.00, 'Genaral Store', '50, 51, North East Street, Thiruchendur, Tamil Nadu 628215', '/public/vendorcategory_imges/shop1.jpg', '1', '30', '250', '774', '51'),
(4, 'Sivan Shop', 0, 0, 800.00, 500.00, 'Temple store', '50, 51, North East Street, Thiruchendur, Tamil Nadu 628215', '/public/vendorcategory_imges/shop4.jpg', '1', '30', '95', '847', '20');

-- --------------------------------------------------------

--
-- Table structure for table `yatra`
--

CREATE TABLE `yatra` (
  `yatra_id` int(11) NOT NULL,
  `fullName` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `contactNumber` int(11) DEFAULT NULL,
  `email` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `address` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `dateOfBirth` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `gender` varchar(40) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `emergencyContact` int(40) DEFAULT NULL,
  `travelDates` varchar(1000) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `mealPreference` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `specialRequirement` varchar(40) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `numberOfTravels` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `yatra`
--

INSERT INTO `yatra` (`yatra_id`, `fullName`, `contactNumber`, `email`, `address`, `dateOfBirth`, `gender`, `emergencyContact`, `travelDates`, `mealPreference`, `specialRequirement`, `numberOfTravels`) VALUES
(20, 'ajith Kumar', 2147483647, 'asajithkumar17@gmail.com', 'Nalmeiap', '2024-06-30T18:30:00.000Z', 'male', 987654321, '[\"2024-07-02T18:30:00.000Z\",\"2024-07-17T18:30:00.000Z\"]', 'vegetarian', 'jnhjhhjjjh', 1);

-- --------------------------------------------------------

--
-- Table structure for table `yatra_booking`
--

CREATE TABLE `yatra_booking` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `from_location` varchar(255) NOT NULL,
  `to_location` varchar(255) NOT NULL,
  `designation` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`designation`)),
  `days` int(11) NOT NULL,
  `dayslist` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`dayslist`)),
  `price` decimal(10,2) NOT NULL,
  `offerPrice` decimal(10,2) NOT NULL,
  `overview` text NOT NULL,
  `what_is_included` text NOT NULL,
  `meeting_point` varchar(255) NOT NULL,
  `end_point` varchar(255) NOT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`images`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `yatra_booking`
--

INSERT INTO `yatra_booking` (`id`, `title`, `from_location`, `to_location`, `designation`, `days`, `dayslist`, `price`, `offerPrice`, `overview`, `what_is_included`, `meeting_point`, `end_point`, `images`, `created_at`, `updated_at`) VALUES
(1, 'Tour from Chennai to Kanyakumari', 'Chennai', 'Kanyakumari', '[\"Madurai\",\"Tirunelveli\"]', 3, '[{\"day\":1,\"designation\":\"Madurai Meenakshi Amman Temple,the Koodal Azhagar Temple,Alagar Kovil\"},{\"day\":2,\"designation\":\"Arulmigu Nellaiyappar Temple, Arulmigu Sri Varadharaja Perumal Temple\"},{\"day\":3,\"designation\":\"Kanya Kumari Amman Temple, chennai\"}]', 29000.00, 27000.00, 'Embark on a comprehensive three-day tour from Chennai to Kanyakumari, covering some of the most significant temples and landmarks of South India. This journey will take you through the cultural heartland of Tamil Nadu, with stops in Madurai and Tirunelveli, before culminating in the picturesque coastal town of Kanyakumari..', '1. Professional vehicles transportation (Vehicle used based on the number of guests attending that day)\n2. 2 Nights Hotel Accommodation\n3. Professional Driver and Guide (or Driver-Guide) .', 'Chennai Tambaram Railway Station', 'Kanya Kumari Amman Temple', '[\"http://example.com/images/tour1.jpg\",\"http://example.com/images/tour2.jpg\",\"http://example.com/images/tour3.jpg\",\"http://example.com/images/tour4.jpg\",\"http://example.com/images/tour5.jpg\"]', '2024-07-18 06:04:46', '2024-07-18 06:04:46'),
(2, 'Tour from Tirunelveli to Tirupathi', 'Tirunelveli', 'Tirupathi', '[\"chennai\"]', 2, '[{\"day\":1,\"designation\":\"Kapaleeswarar Temple,Marundheeswarar Temple,Sri Vadapalani Andavar Temple\"},{\"day\":2,\"designation\":\"Tirupathi Sri Venkateswara Swamy Temple, Tirunelveli\"}]', 19000.00, 17000.00, 'Embark on an enriching spiritual journey to the sacred Tirupati Venkateswara Temple, nestled in the serene Tirumala hills. This pilgrimage will guide you through the holy town of Tirupati, renowned for its divine atmosphere and significant religious landmarks. Discover the cultural essence of Andhra Pradesh as you explore the majestic temple dedicated to Lord Venkateswara, one of the most revered deities in Hinduism. This journey promises a blend of devotion and tranquility, offering a profound spiritual experience amidst the picturesque surroundings.', '1. Professional vehicles transportation (Vehicle used based on the number of guests attending that day)\n2. 2 Nights Hotel Accommodation\n3. Professional Driver and Guide (or Driver-Guide) .', 'Tirunelveli Bus Station', 'Tirupathi temple', '[\"http://example.com/images/tour1.jpg\",\"http://example.com/images/tour2.jpg\",\"http://example.com/images/tour3.jpg\",\"http://example.com/images/tour4.jpg\",\"http://example.com/images/tour5.jpg\"]', '2024-07-18 06:45:28', '2024-07-18 06:45:28'),
(3, 'Tour from Nagercoil to Tiruvannamalai', 'Nagercoil', 'Tiruvannamalai', '[\"Madurai\"]', 2, '[{\"day\":1,\"designation\":\"Madurai Meenakshi Amman Temple,the Koodal Azhagar Temple,Alagar Kovil\"},{\"day\":2,\"designation\":\"Tiruvannamalai Arunachaleswarar Temple, Nagercoil\"}]', 15000.00, 16000.00, 'Embark on an enriching spiritual journey to the sacred Tirupati Venkateswara Temple, nestled in the serene Tirumala hills. This pilgrimage will guide you through the holy town of Tirupati, renowned for its divine atmosphere and significant religious landmarks. Discover the cultural essence of Andhra Pradesh as you explore the majestic temple dedicated to Lord Venkateswara, one of the most revered deities in Hinduism. This journey promises a blend of devotion and tranquility, offering a profound spiritual experience amidst the picturesque surroundings.', '1. Professional vehicles transportation (Vehicle used based on the number of guests attending that day)\n2. 2 Nights Hotel Accommodation\n3. Professional Driver and Guide (or Driver-Guide) .', 'Nagercoil Bus Station', 'Tiruvannamalai temple', '[\"http://example.com/images/tour1.jpg\",\"http://example.com/images/tour2.jpg\",\"http://example.com/images/tour3.jpg\",\"http://example.com/images/tour4.jpg\",\"http://example.com/images/tour5.jpg\"]', '2024-07-18 06:53:37', '2024-07-18 06:53:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`address_id`);

--
-- Indexes for table `advertisement`
--
ALTER TABLE `advertisement`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `all_users`
--
ALTER TABLE `all_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `amenities`
--
ALTER TABLE `amenities`
  ADD PRIMARY KEY (`AmenitiesId`);

--
-- Indexes for table `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`area_id`);

--
-- Indexes for table `astrologerbookings`
--
ALTER TABLE `astrologerbookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogandeventcategories`
--
ALTER TABLE `blogandeventcategories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `booking_fields`
--
ALTER TABLE `booking_fields`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categorieslist`
--
ALTER TABLE `categorieslist`
  ADD PRIMARY KEY (`categoryId`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`id`),
  ADD KEY `district_list_country_id_foreign` (`country_id`),
  ADD KEY `district_list_state_id_foreign` (`state_id`);

--
-- Indexes for table `communityabstract`
--
ALTER TABLE `communityabstract`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone_number` (`phone_number`),
  ADD KEY `groupName` (`groupName`);

--
-- Indexes for table `communityadmin`
--
ALTER TABLE `communityadmin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone_number` (`phone_number`),
  ADD UNIQUE KEY `groupName` (`groupName`);

--
-- Indexes for table `communitytemple`
--
ALTER TABLE `communitytemple`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `groupName` (`groupName`);

--
-- Indexes for table `communitytemplefunctions`
--
ALTER TABLE `communitytemplefunctions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `communitytempleincharge`
--
ALTER TABLE `communitytempleincharge`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `communityuser`
--
ALTER TABLE `communityuser`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `familyName` (`familyName`),
  ADD UNIQUE KEY `phone_number` (`phone_number`);

--
-- Indexes for table `constantname`
--
ALTER TABLE `constantname`
  ADD PRIMARY KEY (`constantName_id`);

--
-- Indexes for table `constants`
--
ALTER TABLE `constants`
  ADD PRIMARY KEY (`constant_id`);

--
-- Indexes for table `contactus`
--
ALTER TABLE `contactus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `districts`
--
ALTER TABLE `districts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `entrance_tick`
--
ALTER TABLE `entrance_tick`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `eventtype`
--
ALTER TABLE `eventtype`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `familymember`
--
ALTER TABLE `familymember`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone_number` (`phone_number`);

--
-- Indexes for table `festival`
--
ALTER TABLE `festival`
  ADD PRIMARY KEY (`festival_id`);

--
-- Indexes for table `functioninsidethetemple`
--
ALTER TABLE `functioninsidethetemple`
  ADD PRIMARY KEY (`FunctionInsideTheTempleID`),
  ADD UNIQUE KEY `FunctionName` (`FunctionInsideTheTemple`);

--
-- Indexes for table `functionoutsidethetemple`
--
ALTER TABLE `functionoutsidethetemple`
  ADD PRIMARY KEY (`FunctionOutsideTheTempleID`);

--
-- Indexes for table `functions`
--
ALTER TABLE `functions`
  ADD PRIMARY KEY (`FunctionID`);

--
-- Indexes for table `function_type`
--
ALTER TABLE `function_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `grouptable`
--
ALTER TABLE `grouptable`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `guidelist`
--
ALTER TABLE `guidelist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `guide_register`
--
ALTER TABLE `guide_register`
  ADD PRIMARY KEY (`guide_id`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD UNIQUE KEY `EmailId` (`EmailId`);

--
-- Indexes for table `hoteldetails`
--
ALTER TABLE `hoteldetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hoteldetails_subimages`
--
ALTER TABLE `hoteldetails_subimages`
  ADD PRIMARY KEY (`sub_id`);

--
-- Indexes for table `inside_temple`
--
ALTER TABLE `inside_temple`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `iyer`
--
ALTER TABLE `iyer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `iyer_booking`
--
ALTER TABLE `iyer_booking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kulatheaivam_details`
--
ALTER TABLE `kulatheaivam_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`language_id`);

--
-- Indexes for table `livestream`
--
ALTER TABLE `livestream`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `main_god`
--
ALTER TABLE `main_god`
  ADD PRIMARY KEY (`main_god_id`);

--
-- Indexes for table `matrimonial`
--
ALTER TABLE `matrimonial`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `offer`
--
ALTER TABLE `offer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `other_gods`
--
ALTER TABLE `other_gods`
  ADD PRIMARY KEY (`other_god_id`);

--
-- Indexes for table `other_specaility`
--
ALTER TABLE `other_specaility`
  ADD PRIMARY KEY (`other_specaility_id`);

--
-- Indexes for table `outside_temple`
--
ALTER TABLE `outside_temple`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pariharams`
--
ALTER TABLE `pariharams`
  ADD PRIMARY KEY (`pariharam_id`);

--
-- Indexes for table `pooja`
--
ALTER TABLE `pooja`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `priest_function`
--
ALTER TABLE `priest_function`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shops`
--
ALTER TABLE `shops`
  ADD PRIMARY KEY (`shops_id`);

--
-- Indexes for table `sitemapurl`
--
ALTER TABLE `sitemapurl`
  ADD PRIMARY KEY (`sitemap_id`);

--
-- Indexes for table `site_user`
--
ALTER TABLE `site_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `EmailId` (`EmailId`),
  ADD UNIQUE KEY `Phone` (`Phone`);

--
-- Indexes for table `speciality`
--
ALTER TABLE `speciality`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `specification`
--
ALTER TABLE `specification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subcategorylist`
--
ALTER TABLE `subcategorylist`
  ADD PRIMARY KEY (`subCategoryId`);

--
-- Indexes for table `temple`
--
ALTER TABLE `temple`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `traineradvertisment`
--
ALTER TABLE `traineradvertisment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trainercategorieslist`
--
ALTER TABLE `trainercategorieslist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trainersubcategorylist`
--
ALTER TABLE `trainersubcategorylist`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `trainer_categories`
--
ALTER TABLE `trainer_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trainer_classlist`
--
ALTER TABLE `trainer_classlist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trainer_offer`
--
ALTER TABLE `trainer_offer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trainer_register`
--
ALTER TABLE `trainer_register`
  ADD PRIMARY KEY (`trainer_id`);

--
-- Indexes for table `vendors`
--
ALTER TABLE `vendors`
  ADD PRIMARY KEY (`vendor_id`),
  ADD UNIQUE KEY `phone_number` (`phone_number`);

--
-- Indexes for table `ventor_categorylist`
--
ALTER TABLE `ventor_categorylist`
  ADD PRIMARY KEY (`vendorId`);

--
-- Indexes for table `yatra`
--
ALTER TABLE `yatra`
  ADD PRIMARY KEY (`yatra_id`);

--
-- Indexes for table `yatra_booking`
--
ALTER TABLE `yatra_booking`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `address_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `advertisement`
--
ALTER TABLE `advertisement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `all_users`
--
ALTER TABLE `all_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `amenities`
--
ALTER TABLE `amenities`
  MODIFY `AmenitiesId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `area`
--
ALTER TABLE `area`
  MODIFY `area_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=255;

--
-- AUTO_INCREMENT for table `astrologerbookings`
--
ALTER TABLE `astrologerbookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `blogandeventcategories`
--
ALTER TABLE `blogandeventcategories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `booking_fields`
--
ALTER TABLE `booking_fields`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `categorieslist`
--
ALTER TABLE `categorieslist`
  MODIFY `categoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1819;

--
-- AUTO_INCREMENT for table `communityabstract`
--
ALTER TABLE `communityabstract`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `communityadmin`
--
ALTER TABLE `communityadmin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `communitytemple`
--
ALTER TABLE `communitytemple`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `communitytemplefunctions`
--
ALTER TABLE `communitytemplefunctions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `communityuser`
--
ALTER TABLE `communityuser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=140;

--
-- AUTO_INCREMENT for table `constants`
--
ALTER TABLE `constants`
  MODIFY `constant_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `contactus`
--
ALTER TABLE `contactus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=261;

--
-- AUTO_INCREMENT for table `districts`
--
ALTER TABLE `districts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=624;

--
-- AUTO_INCREMENT for table `eventtype`
--
ALTER TABLE `eventtype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `festival`
--
ALTER TABLE `festival`
  MODIFY `festival_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=160;

--
-- AUTO_INCREMENT for table `functions`
--
ALTER TABLE `functions`
  MODIFY `FunctionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `guidelist`
--
ALTER TABLE `guidelist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `guide_register`
--
ALTER TABLE `guide_register`
  MODIFY `guide_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=245;

--
-- AUTO_INCREMENT for table `hoteldetails`
--
ALTER TABLE `hoteldetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `iyer`
--
ALTER TABLE `iyer`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `iyer_booking`
--
ALTER TABLE `iyer_booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `kulatheaivam_details`
--
ALTER TABLE `kulatheaivam_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `language_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT for table `livestream`
--
ALTER TABLE `livestream`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `main_god`
--
ALTER TABLE `main_god`
  MODIFY `main_god_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=334;

--
-- AUTO_INCREMENT for table `matrimonial`
--
ALTER TABLE `matrimonial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `offer`
--
ALTER TABLE `offer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT for table `other_gods`
--
ALTER TABLE `other_gods`
  MODIFY `other_god_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `other_specaility`
--
ALTER TABLE `other_specaility`
  MODIFY `other_specaility_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `pariharams`
--
ALTER TABLE `pariharams`
  MODIFY `pariharam_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT for table `pooja`
--
ALTER TABLE `pooja`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `priest_function`
--
ALTER TABLE `priest_function`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `shops`
--
ALTER TABLE `shops`
  MODIFY `shops_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sitemapurl`
--
ALTER TABLE `sitemapurl`
  MODIFY `sitemap_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT for table `site_user`
--
ALTER TABLE `site_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `speciality`
--
ALTER TABLE `speciality`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `specification`
--
ALTER TABLE `specification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=133;

--
-- AUTO_INCREMENT for table `subcategorylist`
--
ALTER TABLE `subcategorylist`
  MODIFY `subCategoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `temple`
--
ALTER TABLE `temple`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=306;

--
-- AUTO_INCREMENT for table `traineradvertisment`
--
ALTER TABLE `traineradvertisment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `trainercategorieslist`
--
ALTER TABLE `trainercategorieslist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `trainersubcategorylist`
--
ALTER TABLE `trainersubcategorylist`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `trainer_categories`
--
ALTER TABLE `trainer_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trainer_classlist`
--
ALTER TABLE `trainer_classlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `trainer_offer`
--
ALTER TABLE `trainer_offer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `trainer_register`
--
ALTER TABLE `trainer_register`
  MODIFY `trainer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `vendors`
--
ALTER TABLE `vendors`
  MODIFY `vendor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `ventor_categorylist`
--
ALTER TABLE `ventor_categorylist`
  MODIFY `vendorId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `yatra`
--
ALTER TABLE `yatra`
  MODIFY `yatra_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `yatra_booking`
--
ALTER TABLE `yatra_booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
