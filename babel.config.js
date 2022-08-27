/*
 * @Descripttion:
 * @Author: TaoWang
 * @Date: 2022-08-26 14:39:15
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true,
      },
      "vant",
    ],
  ],
}
