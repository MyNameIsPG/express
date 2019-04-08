/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50562
Source Host           : localhost:3306
Source Database       : shopping

Target Server Type    : MYSQL
Target Server Version : 50562
File Encoding         : 65001

Date: 2019-04-08 15:47:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tb_users
-- ----------------------------
DROP TABLE IF EXISTS `tb_users`;
CREATE TABLE `tb_users` (
  `uuid` varchar(255) NOT NULL COMMENT 'uuid',
  `truename` varchar(255) DEFAULT NULL COMMENT '真实姓名',
  `nickname` varchar(255) DEFAULT NULL COMMENT '昵称',
  `age` int(1) DEFAULT '1' COMMENT '1男，2女',
  `birthday` datetime DEFAULT NULL COMMENT '生日',
  `location` varchar(255) DEFAULT NULL COMMENT '所在地',
  `description` varchar(255) DEFAULT NULL COMMENT '个人说明',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `phone` varchar(20) DEFAULT NULL COMMENT '手机号码',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_users
-- ----------------------------
INSERT INTO `tb_users` VALUES ('67f21565-1eb0-4a6d-aa42-55b839348509', '王琦', null, null, null, null, null, 'e10adc3949ba59abbe56e057f20f883e', '18588773307', '2019-04-08 13:23:10', '2019-04-08 13:23:10');
INSERT INTO `tb_users` VALUES ('76a9ed55-26a8-4b27-8439-049f0a7e1d13', '张三', null, null, null, null, null, 'e10adc3949ba59abbe56e057f20f883e', '18588773304', '2019-04-08 13:22:57', '2019-04-08 13:22:57');
INSERT INTO `tb_users` VALUES ('d005f0a6-3856-45a5-a942-a1f0831092ba', '李四', null, null, null, null, null, 'e10adc3949ba59abbe56e057f20f883e', '18588773306', '2019-04-08 13:23:03', '2019-04-08 13:23:03');
INSERT INTO `tb_users` VALUES ('dfb88c4f-9207-46cd-90c6-0040d9adf955', '张三1', null, null, null, null, null, 'e10adc3949ba59abbe56e057f20f883e', '18588773041', '2019-04-08 14:08:12', '2019-04-08 14:08:12');
INSERT INTO `tb_users` VALUES ('fc5976cb-166f-4542-9ba5-064da48a2dc8', '张三12222', '11', '1', '1996-10-05 00:00:00', '所在地', '个人说明', 'e10adc3949ba59abbe56e057f20f883e', '18588773302', '2019-04-08 10:54:20', '2019-04-08 15:21:29');
