-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 10, 2021 at 10:14 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `BDD_Node`
--

-- --------------------------------------------------------

--
-- Table structure for table `T_client_cli`
--
CREATE DATABASE BDD_NodeServer;
Use BDD_NodeServer;
CREATE TABLE T_client_cli (
  `cli_id` int(11) NOT NULL,
  `cli_name` varchar(64) NOT NULL,
  `cli_description` text NOT NULL,
  `cli_creation` varchar(60) NOT NULL,
  `cli_update` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for table `T_client_cli`
--
ALTER TABLE `T_client_cli`
  ADD PRIMARY KEY (`cli_id`);

-- AUTO_INCREMENT for table `T_client_cli`
--
ALTER TABLE `T_client_cli`
  MODIFY `cli_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Dumping data for table `T_client_cli`
--

INSERT INTO `T_client_cli` (`cli_id`, `cli_name`, `cli_description`, `cli_creation`, `cli_update`) VALUES
(1, 'Kadiatou', 'étudiante en informatique', '2021-11-09', '2021-11-09'),
(30, 'zaza', 'Etudiante', 'Wed Nov 10 2021', 'Wed Nov 10 2021');





