-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Lun 29 Janvier 2018 à 21:13
-- Version du serveur :  5.7.21-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `skymove`
--

-- --------------------------------------------------------

--
-- Structure de la table `covoit`
--

CREATE TABLE `covoit` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `nbdispo` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `depart` varchar(255) NOT NULL,
  `arrivee` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `covoit`
--

INSERT INTO `covoit` (`id`, `date`, `nbdispo`, `type`, `nom`, `mail`, `tel`, `depart`, `arrivee`) VALUES
(1, '2018-01-31', 4, 'atterro_vers_deco', 'gdfgd', 'lucas@gmail.com', '0645789562', 'CHABANON SELONNET', 'CHABANON SELONNETCHABANON'),
(2, '2018-02-02', 7, 'longue_distance', 'azzazaz', 'lucas@gmail.com', '04640545647', 'fgdfgdfg', 'PEYRE MENSONGEREPEYRE MENSONGERE'),
(3, '2018-02-02', 2, 'atterro_vers_deco', 'sdfzf', 'zfzezf@Ã¥efzef.com', '0890984', 'ASPRESAERODROME DU CHEVALET', 'ASPRESLA LONGEAGNE'),
(4, '2018-03-10', 3, 'longue_distance', 'saaaaaaaaaaaaa', 'aaaaaaaa@Ã¢aaaaaa.com', '0555555555555555', 'yoloooo', 'ARGELIERSARGELIERS'),
(5, '2018-02-03', 3, 'atterro_vers_deco', 'sdfsdfsdf', 'dsfsdfsdf@Ã¸dfsdf.com', '09801496810', 'ASPRESAERODROME DU CHEVALET', 'ASPRESLA LONGEAGNE'),
(6, '2018-02-04', 4, 'longue_distance', 'Veleine Lucas', 'veleine.lucas@gmail.com', '0658478956', 'Ales', 'COMPOLIBATCOMPOLIBAT');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `covoit`
--
ALTER TABLE `covoit`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `covoit`
--
ALTER TABLE `covoit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
