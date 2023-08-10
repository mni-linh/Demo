-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2021 at 08:53 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hama`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(18) NOT NULL,
  `displayname` varchar(30) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `username`, `password`, `displayname`, `create_at`) VALUES
(1, 'minh0812', '081201', 'Duy Minh', '2021-12-03 23:52:16'),
(2, 'quynh2611', '261101', 'Phương Quỳnh', '2021-12-03 23:54:27'),
(3, 'mni-linh', '@.@', 'Tứ Linh', '2021-12-03 23:56:19'),
(4, 'thinhpp', '1', 'Phước Thịnh', '2021-12-03 23:57:50'),
(5, 'nganht', '2', 'Thanh Ngân', '2021-12-03 23:58:34');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `order_quantity` int(11) NOT NULL,
  `total_money` int(11) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `phone`, `email`, `order_quantity`, `total_money`, `create_at`) VALUES
(3, 'Phạm Minh', '0333454444', 'duyminh@gmail.com', 1, 537000, '2021-12-14 07:52:00');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `address` varchar(300) NOT NULL,
  `email` varchar(100) NOT NULL,
  `order` varchar(1000) NOT NULL,
  `total_money` int(11) NOT NULL,
  `status` varchar(100) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `name`, `phone`, `address`, `email`, `order`, `total_money`, `status`, `create_at`) VALUES
(5, 'Phạm Minh', '0333454444', 'ấp Rạch Sâu, xã Quới Thiện, huyện Vũng Liêm, tỉnh Vĩnh Long', 'duyminh@gmail.com', '[{\"id\": 1, \"title\": \"Landscape picture 01\", \"slug\": \"landscape-picture-wcl-01\", \"color\": \"brown\", \"size\": \"30x30\", \"price\": \"189000\", \"quantity\": 2}, {\"title\": \"Landscape picture 02\", \"slug\": \"landscape-picture-wcl-02\", \"color\": \"brown\", \"size\": \"30x30\", \"price\": 159000, \"quantity\": 1, \"id\": 2}]', 537000, 'pending', '2021-12-14 07:52:00');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `image01` varchar(300) NOT NULL,
  `image02` varchar(300) NOT NULL,
  `categorySlug` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `size` varchar(100) NOT NULL,
  `description` varchar(300) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `image01`, `image02`, `categorySlug`, `color`, `slug`, `size`, `description`, `create_at`) VALUES
(1, 'Landscape picture 01', 189000, 'https://i.pinimg.com/564x/f8/7c/bf/f87cbf33e9b69a3ea9396f30751b90d8.jpg', 'https://i.pinimg.com/564x/f8/7c/bf/f87cbf33e9b69a3ea9396f30751b90d8.jpg', 'landscape-picture', '[\"white\", \"brown\", \"black\", \"gray\"]', 'landscape-picture-wcl-01', '[\"30x30\", \"40x40\"]', 'Peaceful picture of an afternoon in the meadow drawn by Cua Mo', '2021-12-04 00:20:31'),
(2, 'Landscape picture 02', 159000, 'https://i.pinimg.com/564x/53/2a/fb/532afbbbb6de01bf9c6320b4fe433ffe.jpg', 'https://i.pinimg.com/564x/53/2a/fb/532afbbbb6de01bf9c6320b4fe433ffe.jpg', 'landscape-picture', '[\"white\", \"brown\", \"black\", \"gray\"]', 'landscape-picture-wcl-02', '[\"30x30\", \"40x40\"]', 'Sometimes it’s easier to be mad at the people you trust because you know that they’ll always love you no matter what you say.', '2021-12-04 00:24:35'),
(3, 'Landscape picture 03', 190000, 'https://i.pinimg.com/564x/6f/e7/05/6fe705433534e225e04a3873543b4344.jpg', 'https://i.pinimg.com/564x/6f/e7/05/6fe705433534e225e04a3873543b4344.jpg', 'landscape-picture', '[\"white\", \"brown\", \"black\", \"gray\"]', 'landscape-picture-wcl-03', '[\"30x30\", \"40x40\"]', 'After all, tomorrow is another day!', '2021-12-04 00:27:01'),
(4, 'Landscape picture 04', 194000, 'https://i.pinimg.com/564x/2b/4d/97/2b4d97a79ca9d7d78da0207d4ebdeb4d.jpg', 'https://i.pinimg.com/564x/2b/4d/97/2b4d97a79ca9d7d78da0207d4ebdeb4d.jpg', 'landscape-picture', '[\"white\", \"brown\", \"black\", \"gray\"]', 'landscape-picture-wcl-04', '[\"30x30\", \"40x40\"]', 'Fasten your seatbelts. It’s going to be a bumpy night.', '2021-12-04 00:28:41'),
(5, 'Landscape picture 05', 194000, 'https://i.pinimg.com/564x/5c/2f/0b/5c2f0b9a55d785ae14dde07b8e0b1984.jpg', 'https://i.pinimg.com/564x/5c/2f/0b/5c2f0b9a55d785ae14dde07b8e0b1984.jpg', 'landscape-picture', '[\"white\", \"brown\", \"black\", \"gray\"]', 'landscape-picture-wcl-05', '[\"30x30\", \"40x40\"]', 'This is the beginning of a beautiful friendship.', '2021-12-04 00:37:58'),
(6, 'Landscape picture 06', 194000, 'https://i.pinimg.com/564x/21/97/a6/2197a696102a2a7fb743492bb63c1e67.jpg', 'https://i.pinimg.com/564x/21/97/a6/2197a696102a2a7fb743492bb63c1e67.jpg', 'landscape-picture', '[\"white\", \"brown\", \"black\", \"gray\"]', 'landscape-picture-wcl-06', '[\"30x30\", \"40x40\"]', 'Never let the fear of striking out keep you from playing the game!', '2021-12-04 00:39:55'),
(8, 'Landscape picture 07', 194000, 'https://i.pinimg.com/564x/3d/ae/81/3dae81fee3dd91977e092bcdb95c4246.jpg', 'https://i.pinimg.com/564x/3d/ae/81/3dae81fee3dd91977e092bcdb95c4246.jpg', 'landscape-picture', '[\"white\", \"brown\", \"black\", \"gray\"]', 'landscape-picture-wcl-07', '[\"30x30\", \"40x40\"]', 'Close your eyes and pretend it’s all a bad dream. That’s how I get by.', '2021-12-04 00:43:54'),
(9, 'Landscape picture 08', 194000, 'https://i.pinimg.com/564x/cf/5c/3d/cf5c3de578087ca242099989d780275b.jpg', 'https://i.pinimg.com/564x/cf/5c/3d/cf5c3de578087ca242099989d780275b.jpg', 'landscape-picture', '[\"white\", \"brown\", \"black\", \"gray\"]', 'landscape-picture-wcl-08', '[\"30x30\", \"40x40\"]', 'Just be yourself, because life’s too short to be anybody else.', '2021-12-04 00:49:20'),
(10, 'Landscape picture 09', 194000, 'https://i.pinimg.com/564x/f3/1e/9c/f31e9cbe5f4405a60e73a8e5c65f4685.jpg', 'https://i.pinimg.com/564x/f3/1e/9c/f31e9cbe5f4405a60e73a8e5c65f4685.jpg', 'landscape-picture', '[\"white\", \"brown\", \"black\", \"gray\"]', 'landscape-picture-wcl-09', '[\"30x30\", \"40x40\"]', 'Some people can’t believe in themselves until someone else believes in them first.', '2021-12-04 00:51:15'),
(11, 'Landscape picture 10', 194000, 'https://i.pinimg.com/564x/b0/3b/e2/b03be21fa35bc08c940da12906fba31e.jpg', 'https://i.pinimg.com/564x/b0/3b/e2/b03be21fa35bc08c940da12906fba31e.jpg', 'landscape-picture', '[\"white\", \"brown\", \"black\", \"gray\"]', 'landscape-picture-wcl-10', '[\"30x30\", \"40x40\"]', 'The greatest thing you’ll ever learn is just to love and be loved in return.', '2021-12-04 00:54:57'),
(12, 'Landscape picture 11', 194000, 'https://i.pinimg.com/564x/5e/3d/ba/5e3dba7f1af4273a41e57f3c3dea5a84.jpg', 'https://i.pinimg.com/564x/5e/3d/ba/5e3dba7f1af4273a41e57f3c3dea5a84.jpg', 'landscape-picture', '[\"white\", \"brown\", \"black\", \"gray\"]', 'landscape-picture-wcl-11', '[\"30x30\", \"40x40\"]', 'There was no internet or any smartphone back then. Thinking about it now, how did we spend all that time?', '2021-12-04 00:58:34'),
(13, 'Landscape picture 12', 194000, 'https://i.pinimg.com/564x/b6/f7/cb/b6f7cbc4013b59f3e76c20748274c692.jpg', 'https://i.pinimg.com/564x/b6/f7/cb/b6f7cbc4013b59f3e76c20748274c692.jpg', 'landscape-picture', '[\"white\", \"brown\", \"black\", \"gray\"]', 'landscape-picture-wcl-12', '[\"30x30\", \"40x40\"]', 'In some ways, one’s own family is the most oblivious.', '2021-12-04 01:00:33'),
(14, 'Landscape picture 13', 194000, 'https://i.pinimg.com/564x/ce/45/c4/ce45c4cd2151151342b5853f53dc22b9.jpg', 'https://i.pinimg.com/564x/ce/45/c4/ce45c4cd2151151342b5853f53dc22b9.jpg', 'landscape-picture', '[\"white\", \"brown\", \"black\", \"gray\"]', 'landscape-picture-wcl-13', '[\"30x30\", \"40x40\"]', 'There’s no need to force the harsh truth onto a small bit of happiness. Sometimes you need an illusion to be happy.', '2021-12-04 01:02:09'),
(15, 'Landscape picture 14', 194000, 'https://i.pinimg.com/564x/cc/f7/68/ccf7688370c544dc1cd1df4191ca60c0.jpg', 'https://i.pinimg.com/564x/cc/f7/68/ccf7688370c544dc1cd1df4191ca60c0.jpg', 'landscape-picture', '[\"white\", \"brown\", \"black\", \"gray\"]', 'landscape-picture-wcl-14', '[\"30x30\", \"40x40\"]', 'Mothers tend to be the one you miss the most, whether they are alive or dead.', '2021-12-04 01:28:07'),
(16, 'Landscape picture 15', 194000, 'https://i.pinimg.com/564x/cc/eb/f5/ccebf51c78baddb9c1c4477bcfa74272.jpg', 'https://i.pinimg.com/564x/cc/eb/f5/ccebf51c78baddb9c1c4477bcfa74272.jpg', 'landscape-picture', '[\"white\", \"brown\", \"black\", \"gray\"]', 'landscape-picture-wcl-15', '[\"30x30\", \"40x40\"]', 'Mothers tend to be the one you miss the most, whether they are alive or dead.', '2021-12-04 01:29:59'),
(17, 'Celestial', 850000, 'https://i.pinimg.com/564x/d8/d5/fc/d8d5fc4edb9924d835b3f03470ed7539.jpg', 'https://i.pinimg.com/564x/d8/d5/fc/d8d5fc4edb9924d835b3f03470ed7539.jpg', 'water-color', '[\"black\", \"pink\", \"green\", \"blue\"]', 'water-color-wcl-01', '[\"12\", \"24\", \"36\"]', 'Celestial Set will include 12 colors with super strange names: Periwinkle, Sage, Golden Glow, Terracotta, Suede, Stone Gray, Breezy, Soft Lilac, Charcoal, Dark Rose, Apple Blossom, Dusky Mauve.', '2021-12-04 01:39:50'),
(18, 'Pastel dreams', 850000, 'https://i.pinimg.com/564x/ef/af/08/efaf08ba3dca327059f1a602b0e031dd.jpg', 'https://i.pinimg.com/564x/ef/af/08/efaf08ba3dca327059f1a602b0e031dd.jpg', 'water-color', '[\"black\", \"pink\", \"green\", \"blue\"]', 'water-color-wcl-02', '[\"12\", \"24\", \"36\"]', 'Prima Marketing Watercolor is a unique watercolor brand from the US that is loved by many illustrators because of its unique color palette, delicate design, stable background and pigments.', '2021-12-04 01:42:20'),
(19, 'Shimmering lights', 850000, 'https://i.pinimg.com/564x/f7/0b/3b/f70b3befc3d7d2f608a3b2505e58ff76.jpg', 'https://i.pinimg.com/564x/f7/0b/3b/f70b3befc3d7d2f608a3b2505e58ff76.jpg', 'water-color', '[\"black\", \"pink\", \"green\", \"blue\"]', 'water-color-wcl-03', '[\"12\", \"24\", \"36\"]', 'The color is quite clear and fresh, with good color spread, some pastel palettes are semi-opaque, with light coverage.', '2021-12-04 01:44:52'),
(20, 'Odyssey', 850000, 'https://i.pinimg.com/564x/5c/d0/55/5cd05579a70f66a5d86a04c59aa0e8f3.jpg', 'https://i.pinimg.com/564x/5c/d0/55/5cd05579a70f66a5d86a04c59aa0e8f3.jpg', 'water-color', '[\"black\", \"pink\", \"green\", \"blue\"]', 'water-color-wcl-04', '[\"12\", \"24\", \"36\"]', 'Prima Marketing is suitable for artists who want to experience a new color by tone or color collection.', '2021-12-04 01:47:54'),
(21, 'Pastel classics', 850000, 'https://i.pinimg.com/564x/d1/ba/48/d1ba48fc102550547593ef42cc7f1580.jpg', 'https://i.pinimg.com/564x/d1/ba/48/d1ba48fc102550547593ef42cc7f1580.jpg', 'water-color', '[\"black\", \"pink\", \"green\", \"blue\"]', 'water-color-wcl-05', '[\"12\", \"24\", \"36\"]', 'The color palette is bright, the color is relatively smooth, suitable for many different types of paintings.', '2021-12-04 01:57:03'),
(22, 'Decadent pies', 850000, 'https://i.pinimg.com/564x/e9/6a/a4/e96aa49e5009e46b1583b1911a17f4c3.jpg', 'https://i.pinimg.com/564x/e9/6a/a4/e96aa49e5009e46b1583b1911a17f4c3.jpg', 'water-color', '[\"black\", \"pink\", \"green\", \"blue\"]', 'water-color-wcl-06', '[\"12\", \"24\", \"36\"]', 'High coverage color, fresh and vibrant color palette, the former can cover the latter so it is suitable for a variety of techniques.', '2021-12-04 01:59:15'),
(23, 'Saunders waterford', 850000, 'https://i.pinimg.com/564x/68/f1/99/68f19947d8bf3f0bf7566a550a864cec.jpg', 'https://i.pinimg.com/564x/68/f1/99/68f19947d8bf3f0bf7566a550a864cec.jpg', 'paper-watercolor', '[\"blue\", \"black\"]', 'paper-watercolor-wcl', '[\"10x14 inches\", \"10x14 inches\"]', 'Saunder waterford vein hot pressed and cold pressed 300gsm - Saunder waterford is a famous paper from England - St Cuthberts Mill company.', '2021-12-04 02:03:45'),
(24, 'Porcelain Palette', 99000, 'https://i.pinimg.com/564x/f3/59/f1/f359f1257c507decf7ab14ad0395560c.jpg', 'https://i.pinimg.com/564x/f3/59/f1/f359f1257c507decf7ab14ad0395560c.jpg', 'tray-color', '[\"blue\", \"black\"]', 'tray-color-wcl', '[\"10 Well\"]', 'Material - Made from premium white Eco-friendly ceramics material. Pure white smooth surface makes it easy to cleaning and mixing and makes colors come alive. Reusable and Durable. Ideal for watercolor, gouache, acrylic, oil, tempera painting', '2021-12-04 02:08:36'),
(25, 'Escoda Reserva', 150000, 'https://i.pinimg.com/564x/60/5d/f0/605df04beb56aa79706025a65823d4cf.jpg', 'https://i.pinimg.com/564x/60/5d/f0/605df04beb56aa79706025a65823d4cf.jpg', 'paintbrush-color', '[\"blue\", \"black\"]', 'paintbrush-color-wcl', '[\"6\", \"8\", \"10\"]', 'WATERCOLOR TRAVEL BRUSH SET - This set of 6 fine artist paint brushes includes Reserva series 1214 Travel brushes in size 2, 4, 6, 8, 10, 12 and packaged in a beautiful genuine leather wallet', '2021-12-04 02:16:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
