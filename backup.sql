-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: hackathondb
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `admin_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`admin_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (3,32);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `attendance` (
  `attendance_id` int NOT NULL AUTO_INCREMENT,
  `employee_id` int DEFAULT NULL,
  `date` varchar(20) DEFAULT NULL,
  `month` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`attendance_id`),
  KEY `employee_id` (`employee_id`),
  CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance`
--

LOCK TABLES `attendance` WRITE;
/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
INSERT INTO `attendance` VALUES (2,6,'27','3'),(3,6,'26','3'),(4,6,'25','3'),(5,6,'25','4');
/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `department` (
  `department_id` int NOT NULL AUTO_INCREMENT,
  `department_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`department_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (1,'DIRECTORS AND MANAGERS'),(2,'CUSTOMER SUPPORT'),(3,'FINANCE'),(4,'HR AND ADMIN'),(5,'MARKETING AND SALES'),(6,'MANUAL JOB DELIVERY'),(7,'TRAINING AND CONTENT'),(8,'COMPLIANCE SUPPORT'),(9,'ONBOARDING SUPPORT'),(10,'PROGRAMMATIC SUPPORT'),(11,'POSTING SUPPORT'),(12,'TECHNICAL SUPPORT'),(13,'SOURCING'),(14,'PRODUCT DESIGN'),(15,'INFORMATION TECHNOLOGY'),(16,'QUALITY ASSURANCE'),(17,'SOFTWARE DEVELOPMENT');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departmentcomposition`
--

DROP TABLE IF EXISTS `departmentcomposition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `departmentcomposition` (
  `department_composition_id` int NOT NULL AUTO_INCREMENT,
  `department_id` int DEFAULT NULL,
  `team_id` int DEFAULT NULL,
  `team_leader_id` int DEFAULT NULL,
  `hybrid_schedule` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`department_composition_id`),
  KEY `department_id` (`department_id`),
  KEY `team_id` (`team_id`),
  KEY `team_leader_id` (`team_leader_id`),
  CONSTRAINT `departmentcomposition_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `department` (`department_id`),
  CONSTRAINT `departmentcomposition_ibfk_2` FOREIGN KEY (`team_id`) REFERENCES `team` (`team_id`),
  CONSTRAINT `departmentcomposition_ibfk_3` FOREIGN KEY (`team_leader_id`) REFERENCES `teamleader` (`team_leader_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departmentcomposition`
--

LOCK TABLES `departmentcomposition` WRITE;
/*!40000 ALTER TABLE `departmentcomposition` DISABLE KEYS */;
INSERT INTO `departmentcomposition` VALUES (3,1,55,4,'A'),(4,2,57,5,'A');
/*!40000 ALTER TABLE `departmentcomposition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employee` (
  `employee_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `shift_schedule` varchar(2) DEFAULT NULL,
  `work_type` tinyint DEFAULT NULL,
  `PTO` tinyint DEFAULT NULL,
  `holiday_off` tinyint DEFAULT NULL,
  `locatin` tinyint DEFAULT NULL,
  `remarks` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`employee_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (6,16,'active','A',0,0,0,0,NULL),(7,20,'active','A',0,0,0,0,NULL),(9,31,'active','A',0,0,0,0,NULL),(10,33,'active','A',0,0,0,0,NULL),(11,34,'active','A',0,0,0,0,NULL);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `team` (
  `team_id` int NOT NULL AUTO_INCREMENT,
  `team_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`team_id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team`
--

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;
INSERT INTO `team` VALUES (55,'COMPLIANCE SUPPORT'),(56,'CORPORATE'),(57,'CUSTOMER SUPPORT'),(58,'DATA ANALYST'),(59,'FINANCE'),(60,'HUMAN RESOURCE AND ADMIN'),(61,'INFORMATION TECHNOLOGY'),(62,'INTERNAL SOURCING'),(63,'IT BIZOPS TEAM'),(64,'IT HELPDESK TEAM'),(65,'IT OPERATIONS,HELPDESK TEAM'),(66,'IT SYSOPS TEAM'),(67,'MANUAL JOB DELIVERY'),(68,'MARKETING AND SALES'),(69,'ONBOARDING SUPPORT'),(70,'OPERATIONS'),(71,'OTHER SOFTWARE DEV'),(72,'POSTING SUPPORT'),(73,'PRODUCT DESIGN'),(74,'PROGRAMMATIC SUPPORT'),(75,'QUALITY ASSURANCE'),(76,'SOFTWARE DEV TEAM 1'),(77,'SOFTWARE DEV TEAM 2'),(78,'SOFTWARE DEVELOPMENT'),(79,'TECHNICAL SUPPORT'),(80,'TRAINING AND CONTENT'),(81,'TRIAGE TEAM');
/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teamcomposition`
--

DROP TABLE IF EXISTS `teamcomposition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teamcomposition` (
  `team_composition_id` int NOT NULL AUTO_INCREMENT,
  `department_id` int NOT NULL,
  `team_id` int NOT NULL,
  `employee_id` int DEFAULT NULL,
  PRIMARY KEY (`team_composition_id`),
  KEY `department_id` (`department_id`),
  KEY `team_id` (`team_id`),
  KEY `employee_id` (`employee_id`),
  CONSTRAINT `teamcomposition_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `department` (`department_id`),
  CONSTRAINT `teamcomposition_ibfk_2` FOREIGN KEY (`team_id`) REFERENCES `team` (`team_id`),
  CONSTRAINT `teamcomposition_ibfk_3` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teamcomposition`
--

LOCK TABLES `teamcomposition` WRITE;
/*!40000 ALTER TABLE `teamcomposition` DISABLE KEYS */;
INSERT INTO `teamcomposition` VALUES (2,1,55,6),(3,1,55,7),(4,2,57,9),(5,2,57,10),(6,2,57,11);
/*!40000 ALTER TABLE `teamcomposition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teamleader`
--

DROP TABLE IF EXISTS `teamleader`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teamleader` (
  `team_leader_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`team_leader_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `teamleader_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teamleader`
--

LOCK TABLES `teamleader` WRITE;
/*!40000 ALTER TABLE `teamleader` DISABLE KEYS */;
INSERT INTO `teamleader` VALUES (4,19),(5,35);
/*!40000 ALTER TABLE `teamleader` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `last_name` varchar(45) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `middle_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `birth_date` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `mobile_number` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (16,'Lisondra','Brian','Garcia','brian@gmail.com','12/12/2001','M','Talamban Cebu','09154156111','pass123'),(19,'James','TL Lebron','Lisondra','lebron@gmail.com','10/12/2001','M','Talamban Cebu','09154156111','pass123'),(20,'Donaire','Nonito','Hulk','monito@gmail.com','11/12/2001','M','Cebu','09154156111','pass123'),(23,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(24,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(25,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(26,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(27,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(28,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(29,'Irving','Admin Kyriw','Poole','Kyire@gmail.com','10/12/2000','M','Talamban Cebu','09154156111','pass123'),(30,'Irving','Admin Kyriw','Poole','Kyire@gmail.com','10/12/2000','M','Talamban Cebu','09154156111','pass123'),(31,'Mayweeathger','Floyd','Hulk','hahah@gmail.com','11/12/2001','M','Cebu','09154156111','pass123'),(32,NULL,NULL,NULL,'mouse@gmail.com',NULL,NULL,NULL,NULL,'pass123'),(33,'tesdtsat','Anotherpne','Hulk','hahah@gmail.com','11/12/2001','M','Cebu','09154156111','pass123'),(34,'tesdtsat','Anotherpne','Hulk','hahah@gmail.com','11/12/2001','M','Cebu','09154156111','pass123'),(35,'James','TL Kobe','Lisondra','lebron@gmail.com','10/12/2001','M','Talamban Cebu','09154156111','pass123');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-27 10:43:16
