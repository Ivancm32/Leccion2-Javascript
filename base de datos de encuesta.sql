USE [master]
GO
/****** Object:  Database [Encuesta_javascript]    Script Date: 3/9/2023 23:35:41 ******/
CREATE DATABASE [Encuesta_javascript]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Encuesta_javascript', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.ICASTRO_DB\MSSQL\DATA\Encuesta_javascript.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Encuesta_javascript_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.ICASTRO_DB\MSSQL\DATA\Encuesta_javascript_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Encuesta_javascript] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Encuesta_javascript].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Encuesta_javascript] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Encuesta_javascript] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Encuesta_javascript] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Encuesta_javascript] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Encuesta_javascript] SET ARITHABORT OFF 
GO
ALTER DATABASE [Encuesta_javascript] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Encuesta_javascript] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Encuesta_javascript] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Encuesta_javascript] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Encuesta_javascript] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Encuesta_javascript] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Encuesta_javascript] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Encuesta_javascript] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Encuesta_javascript] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Encuesta_javascript] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Encuesta_javascript] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Encuesta_javascript] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Encuesta_javascript] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Encuesta_javascript] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Encuesta_javascript] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Encuesta_javascript] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Encuesta_javascript] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Encuesta_javascript] SET RECOVERY FULL 
GO
ALTER DATABASE [Encuesta_javascript] SET  MULTI_USER 
GO
ALTER DATABASE [Encuesta_javascript] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Encuesta_javascript] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Encuesta_javascript] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Encuesta_javascript] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Encuesta_javascript] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Encuesta_javascript] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'Encuesta_javascript', N'ON'
GO
ALTER DATABASE [Encuesta_javascript] SET QUERY_STORE = OFF
GO
USE [Encuesta_javascript]
GO
/****** Object:  Table [dbo].[ComidasChatarras]    Script Date: 3/9/2023 23:35:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ComidasChatarras](
	[id] [int] NOT NULL,
	[descripcion] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ComidasSanas]    Script Date: 3/9/2023 23:35:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ComidasSanas](
	[id] [int] NOT NULL,
	[descripcion] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[genero]    Script Date: 3/9/2023 23:35:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[genero](
	[id] [int] NOT NULL,
	[descripcion] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Historial_de_encuesta]    Script Date: 3/9/2023 23:35:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Historial_de_encuesta](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[N_encuesta] [int] NULL,
	[NPersonaEncuesta] [int] NULL,
	[ID_Genero] [int] NULL,
	[ID_TipoComida] [int] NULL,
	[ID_ComidaChatarra] [int] NULL,
	[ID_ComidaSana] [int] NULL,
	[fecha] [varchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TipoComida]    Script Date: 3/9/2023 23:35:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TipoComida](
	[id] [int] NOT NULL,
	[descripcion] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[ComidasChatarras] ([id], [descripcion]) VALUES (1, N'Hamburguesa')
INSERT [dbo].[ComidasChatarras] ([id], [descripcion]) VALUES (2, N'Pizza')
INSERT [dbo].[ComidasChatarras] ([id], [descripcion]) VALUES (3, N'Picadas')
GO
INSERT [dbo].[ComidasSanas] ([id], [descripcion]) VALUES (1, N'Frutas')
INSERT [dbo].[ComidasSanas] ([id], [descripcion]) VALUES (2, N'Jugos')
INSERT [dbo].[ComidasSanas] ([id], [descripcion]) VALUES (3, N'Suplementos')
GO
INSERT [dbo].[genero] ([id], [descripcion]) VALUES (1, N'Masculino')
INSERT [dbo].[genero] ([id], [descripcion]) VALUES (2, N'Femenino')
GO
SET IDENTITY_INSERT [dbo].[Historial_de_encuesta] ON 

INSERT [dbo].[Historial_de_encuesta] ([id], [N_encuesta], [NPersonaEncuesta], [ID_Genero], [ID_TipoComida], [ID_ComidaChatarra], [ID_ComidaSana], [fecha]) VALUES (1, 1, 0, 1, 1, 1, 0, N'2023-09-04 05:03:57')
INSERT [dbo].[Historial_de_encuesta] ([id], [N_encuesta], [NPersonaEncuesta], [ID_Genero], [ID_TipoComida], [ID_ComidaChatarra], [ID_ComidaSana], [fecha]) VALUES (2, 2, 0, 1, 1, 1, 0, N'2023-09-04 05:18:44')
INSERT [dbo].[Historial_de_encuesta] ([id], [N_encuesta], [NPersonaEncuesta], [ID_Genero], [ID_TipoComida], [ID_ComidaChatarra], [ID_ComidaSana], [fecha]) VALUES (3, 2, 1, 2, 1, 2, 0, N'2023-09-04 05:19:15')
INSERT [dbo].[Historial_de_encuesta] ([id], [N_encuesta], [NPersonaEncuesta], [ID_Genero], [ID_TipoComida], [ID_ComidaChatarra], [ID_ComidaSana], [fecha]) VALUES (4, 3, 0, 1, 1, 2, 0, N'2023-09-04 05:26:49')
INSERT [dbo].[Historial_de_encuesta] ([id], [N_encuesta], [NPersonaEncuesta], [ID_Genero], [ID_TipoComida], [ID_ComidaChatarra], [ID_ComidaSana], [fecha]) VALUES (5, 3, 1, 3, 2, 2, 1, N'2023-09-04 05:26:59')
INSERT [dbo].[Historial_de_encuesta] ([id], [N_encuesta], [NPersonaEncuesta], [ID_Genero], [ID_TipoComida], [ID_ComidaChatarra], [ID_ComidaSana], [fecha]) VALUES (6, 3, 2, 1, 2, 2, 1, N'2023-09-04 05:27:16')
SET IDENTITY_INSERT [dbo].[Historial_de_encuesta] OFF
GO
INSERT [dbo].[TipoComida] ([id], [descripcion]) VALUES (1, N'ComidaChatarra')
INSERT [dbo].[TipoComida] ([id], [descripcion]) VALUES (2, N'ComidaSana')
GO
USE [master]
GO
ALTER DATABASE [Encuesta_javascript] SET  READ_WRITE 
GO
