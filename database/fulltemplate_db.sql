-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               10.1.8-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table fulltemplate.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT '0',
  `email` varchar(50) DEFAULT '0',
  `fullname` varchar(50) DEFAULT '0',
  `password` varchar(50) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table fulltemplate.users: ~1 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `username`, `email`, `fullname`, `password`) VALUES
	(1, 'Admin', 'Admin@site.co.za', 'Administrator', 'Admin'),
	(4, 'cairnswm', 'cairnswm@gmail.com', '', 'yolandec');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;


-- Dumping structure for table fulltemplate.user_session
CREATE TABLE IF NOT EXISTS `user_session` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `session_id` varchar(50) DEFAULT '0',
  `user_id` int(11) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL COMMENT 'Derived',
  `ip_address` varchar(50) DEFAULT NULL,
  `status` int(11) DEFAULT NULL COMMENT '0=offline, 1=online',
  `start_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_action` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_page` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `session_id` (`session_id`),
  KEY `user_status` (`user_id`,`status`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table fulltemplate.user_session: ~8 rows (approximately)
/*!40000 ALTER TABLE `user_session` DISABLE KEYS */;
INSERT INTO `user_session` (`id`, `session_id`, `user_id`, `username`, `ip_address`, `status`, `start_date`, `last_action`, `last_page`) VALUES
	(1, 'D2B0D8EF-B4CD-44DE-BA53-DCF6B463AC92', 0, NULL, NULL, 0, '2017-11-26 09:55:02', '2017-11-26 09:55:37', 'Login'),
	(2, '99B3D685-8915-4DAB-9F1E-B870D065E3FE', 0, NULL, NULL, NULL, '2017-11-26 09:55:37', '2017-11-26 09:55:37', 'Login'),
	(3, 'A05BABDD-B8FB-4346-9C97-311F953A5907', 1, NULL, NULL, 0, '2017-11-26 09:59:47', '2017-11-26 10:02:23', 'autologout'),
	(4, '82353D10-AF46-4B8A-B2F2-53B29E6E1AA3', 1, NULL, NULL, 0, '2017-11-26 10:00:33', '2017-11-26 10:02:23', 'autologout'),
	(5, 'E04BCDF6-6F53-42AD-9A50-42A92D5A650F', 1, NULL, NULL, 0, '2017-11-26 10:02:09', '2017-11-26 10:02:23', 'autologout'),
	(6, '01499C2D-A131-4D3F-98EC-9B125E0D1528', 1, NULL, NULL, 0, '2017-11-26 10:02:23', '2017-11-26 10:04:35', 'autologout'),
	(7, 'E425E279-FDAE-4B28-82AE-F0BB38E3C4BD', 1, 'Admin', NULL, 0, '2017-11-26 10:04:35', '2017-11-26 18:35:47', 'autologout'),
	(8, '21722702-2500-4549-A545-0E91F027A0B6', 1, 'Admin', '::1', 1, '2017-11-26 18:36:12', '2017-11-26 18:36:12', 'Login'),
	(9, 'BD636DCF-399A-484F-85BD-24D32A0992D6', 0, '', '::1', 1, '2017-11-26 18:49:08', '2017-11-26 18:49:08', 'Login'),
	(10, '66F2128E-8A88-45AD-ADCC-CC4E2C3B6175', 4, 'cairnswm', '::1', 1, '2017-11-26 18:51:04', '2017-11-26 18:51:04', 'Login');
/*!40000 ALTER TABLE `user_session` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
