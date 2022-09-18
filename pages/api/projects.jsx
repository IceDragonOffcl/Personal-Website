export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/1003358608098082837/1021001846422241340/images.png",
      name: "Çılgınlar Topluluğu",
      description: "Discord türkiyenin en büyük discord sunucu olma yolunda.",
      link: "https://discord.gg/ESFBPptuWw",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/1021002251784962103/1021004940669370448/channels4_profile.jpg",
      name: "Youtube Kanalı",
      description: "Daha Video Çekmedim :)",
      link: "https://www.youtube.com/channel/UCYcjDiCUJSrJer2Ypaa8KDQ",
    }
  ];
  res.status(200).json(data);
};
