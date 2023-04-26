-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: hackathondb
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `department_id` int NOT NULL AUTO_INCREMENT,
  `department_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`department_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departmentcomposition` (
  `department_id` int DEFAULT NULL,
  `team_composition_id` int DEFAULT NULL,
  KEY `team_composition_id` (`team_composition_id`),
  CONSTRAINT `departmentcomposition_ibfk_1` FOREIGN KEY (`team_composition_id`) REFERENCES `teamcomposition` (`team_composition_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departmentcomposition`
--

LOCK TABLES `departmentcomposition` WRITE;
/*!40000 ALTER TABLE `departmentcomposition` DISABLE KEYS */;
INSERT INTO `departmentcomposition` VALUES (1,1);
/*!40000 ALTER TABLE `departmentcomposition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `employee_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `shift_schedule` varchar(2) DEFAULT NULL,
  `work_type` tinyint DEFAULT NULL,
  `PTO` tinyint DEFAULT NULL,
  `holiday_off` tinyint DEFAULT NULL,
  `locatin` tinyint DEFAULT NULL,
  PRIMARY KEY (`employee_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,1,'teststatus','A',0,0,0,0),(2,12,'active','A',0,0,0,0);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team` (
  `team_id` int NOT NULL AUTO_INCREMENT,
  `team_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`team_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team`
--

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;
INSERT INTO `team` VALUES (1,'COMPLIANCE SUPPORT'),(2,'CORPORATE'),(3,'CUSTOMER SUPPORT'),(4,'DATA ANALYST'),(5,'FINANCE'),(6,'HUMAN RESOURCE AND ADMIN'),(7,'INFORMATION TECHNOLOGY'),(8,'INTERNAL SOURCING'),(9,'IT BIZOPS TEAM'),(10,'IT HELPDESK TEAM'),(11,'IT OPERATIONS,HELPDESK TEAM'),(12,'IT SYSOPS TEAM'),(13,'MANUAL JOB DELIVERY'),(14,'MARKETING AND SALES'),(15,'ONBOARDING SUPPORT'),(16,'OPERATIONS'),(17,'OTHER SOFTWARE DEV'),(18,'POSTING SUPPORT'),(19,'PRODUCT DESIGN'),(20,'PROGRAMMATIC SUPPORT'),(21,'QUALITY ASSURANCE'),(22,'SOFTWARE DEV TEAM 1'),(23,'SOFTWARE DEV TEAM 2'),(24,'SOFTWARE DEVELOPMENT'),(25,'TECHNICAL SUPPORT'),(26,'TRAINING AND CONTENT'),(27,'TRIAGE TEAM');
/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teamcomposition`
--

DROP TABLE IF EXISTS `teamcomposition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teamcomposition` (
  `team_composition_id` int NOT NULL AUTO_INCREMENT,
  `team_leader_id` int NOT NULL,
  `employee_id` int DEFAULT NULL,
  `team_id` int DEFAULT NULL,
  `hybrid_schedule` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`team_composition_id`),
  KEY `employee_id` (`employee_id`),
  KEY `team_leader_id` (`team_leader_id`),
  KEY `team_id` (`team_id`),
  CONSTRAINT `teamcomposition_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`),
  CONSTRAINT `teamcomposition_ibfk_2` FOREIGN KEY (`team_leader_id`) REFERENCES `teamleader` (`team_leader_id`),
  CONSTRAINT `teamcomposition_ibfk_3` FOREIGN KEY (`team_id`) REFERENCES `team` (`team_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teamcomposition`
--

LOCK TABLES `teamcomposition` WRITE;
/*!40000 ALTER TABLE `teamcomposition` DISABLE KEYS */;
/*!40000 ALTER TABLE `teamcomposition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teamleader`
--

DROP TABLE IF EXISTS `teamleader`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teamleader` (
  `team_leader_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`team_leader_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `teamleader_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teamleader`
--

LOCK TABLES `teamleader` WRITE;
/*!40000 ALTER TABLE `teamleader` DISABLE KEYS */;
INSERT INTO `teamleader` VALUES (1,1);
/*!40000 ALTER TABLE `teamleader` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'testfname','testlname','testmname','test@test.com','06/14/01','M','Talamban','0919191910','testpass'),(12,'Lisondra','Brian','Garcia','brian@gmail.com',NULL,'M','Talamban Cebu','09154156111',NULL);
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

-- Dump completed on 2023-04-26 11:34:33

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team` (
  `team_id` int NOT NULL AUTO_INCREMENT,
  `team_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`team_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `teamcomposition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `admin` (
  `admin_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`admin_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `attendance` (
  `attendance_id` int NOT NULL AUTO_INCREMENT,
  `employee_id` int DEFAULT NULL,
  `date` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`attendance_id`),
  KEY `employee_id` (`employee_id`),
  CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


SELECT d.department_name AS department,
       t.team_name AS `group/team`,
       CONCAT(u.first_name, ' ', u.last_name) AS employeeName,
       e.PTO,
       e.holiday_off,
       e.locatin AS location,
       e.work_type,
       e.shift_schedule,
       e.remarks
FROM user u
INNER JOIN employee e ON u.user_id = e.user_id
INNER JOIN teamcomposition tc ON e.employee_id = tc.employee_id
INNER JOIN team t ON tc.team_id = t.team_id
INNER JOIN departmentcomposition dc ON t.team_id = dc.team_id
INNER JOIN department d ON dc.department_id = d.department_id;
