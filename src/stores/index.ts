import { defineStore } from 'pinia';
import packageJson from '@root/package.json';


export const useCoreStore = defineStore('core', () => {
	const scopedPackageName = packageJson.name;
	const packageName = scopedPackageName.split('/')[1];

	// Links //
	const repoBaseUrl = `https://github.com/webdevnerdstuff/${packageName}`;
	const links = {
		changeLog: `${repoBaseUrl}/blob/main/CHANGELOG.md`,
		discord: 'https://discord.com/users/979453275369783346',
		github: repoBaseUrl,
		githubProfile: 'https://github.com/webdevnerdstuff',
		license: `${repoBaseUrl}/blob/main/LICENSE.md`,
		npm: `https://www.npmjs.com/package/${scopedPackageName}`,
		pnpm: 'https://pnpm.io/',
		vue: 'https://vuejs.org/',
		vueUse: 'https://vueuse.org/',
		vuetify: 'https://vuetifyjs.com/',
		vuetifyGithub: 'https://github.com/vuetifyjs/vuetify',
		vuetifyPlayground: 'https://play.vuetifyjs.com/#eNrFVltv2zYU/iucgCENEElJHCeL4ATZMPRpD8M29CUKBkqibdYUKZCUnQv833d4kUw69ZKiKFo0iXjO4fnOjR95/5IoWefrnmg6f8o+q6RIaNsJqdELqiXBmnxyOrRFcyladORtj0ruDWvBhFRe6xagLHktuNKI0cVSoxv0UnLkTQu3QKiTtMXyqfDyrGI9ySqsyInRb+3vBstVgeaYWenWOCaPHtf49+EAQhTuBwuhl6QlI1xD5rhn+h8nPLKRHVkQb7mLDLm4vdJFYn5vj0uenNia/dp1GYBDwWaatB0D7FtjNlunDD+JXtuVXeOuSyssXZo3ZeLzLhOogGgpJ3wwDs1TjtcphSwHFUJrLCnmGlxo8qjLZKe5qxmtV5nSogNtI/GGSKjJT+5rZ3k7y18DAHgAr4VgRqupZuR2aP9fRNFngn53nteT7Cw7M75i68CN6nBNpMXzn4Gy0kFWNcNKQdQtSc/DnIolMU0AjQnyb4DPnCQ2kmQOJozylcoWVC/7KtTHBdRYLojx+G/FMF9Fjja00csQzAqC0u1sIQNjZZ2bwBtawE86oKN8lyukD8nGFf5e2fOu/VGpW+gv5j2s/NCNlZh9ciM1TFTaioawcXjBG5yMdIjsfHppJPhxlExPfzYHiMgW7x8gRoEYCgrH0hTW/i0TO4lGM8YUBbCLCyLBlCOlnxiB7a7oBZqennaP4CbAgRJoMA1G24ql2AQCb8nM6TfhnEGXIzVCfwhJWkQ71beoMRyBFNUIt0SfWJYjtSa6lwg3tKOqpnyBCKM6i0AgO0AIIwFJGIqziCM2MpOtYy5ToIG6ZnnAarBUtaSdq53n/bh/jv7vNg1Xw3WSSmuQuobaOwEhT96eiwe+rQX4NG0MKTgCiKjYXAsaF+jDMbq5RY7rrdSaFkjL3t0h5t9Cir4rEO8ZG2XDoAdoCA2dnpyPdgjZcYtkQwjgxUxWge531oE3OHGGEuGi+SjEcM0MNA4XHSjmsWLn+ICj37D8siM4V1/l6CN9fj4Q0p7m7Zj6Q66qPc3O1cP4ZXkrakIDAy5kA/uXWneqyHMvyWBG8l4RqfLrq+uL6eT8ajq5vL76ZTK5uAxxHAsHDpzA7t+QqiFrmP9G6X4+HyZ1sjeqr7z9KcWc2nzfdhruBloM9mw2G8PRn5XdBpfiCi/ImzEMddsew4f73GBdw1COZbMjDochqKNeUpWN7wD7fnrl0D1rzFkfTzc8btzxBlro4D0oODxwrFsgUqsAKh2RywSCN2ugSZ9j3XDYBkxO1zLjROeQcH4HZrnsuaZwyzWivZtkF9mV6awOxRlRbVoBZ0GXwUmZ+EAtjKnRO6C8pUU4O3UQAx8xXCmD8cp3DoBrIqEDvCHSXD7vS2lvW5jWnupwav9Dme8J4/BuiAbeaHEFIgOIKQ7FPcO/qsiAcZozWuW9piz373iYcPd2gNmC/zBT7n0Sj1OtLNT9tzbU+nlwSNuTxPYAIJ198vAfY54ENg==',
		vuetifyPlaygroundGrid: 'https://play.vuetifyjs.com/#eNrFV9tu4zYQ/RVWQJENEElOnGwBIwnSotinPhRtsS/rRUFLlM01RQkkZecC/3sPL5IpO9lksS0aJIE0M5xzZjhDjj49JVoV+aZjhlcP2RedzBJet40y5IkUilHDPnod2ZFKNTU5CbYncxkMi0Y0Sgetf4FyLotGakMEX64MuSFPc0mC6cy/ENIqXlP1MAvybCE6li2oZmdWv3P/S6rWM1JR4aQ765jdB1zrP9ABwojuOwdhVqxmA1zJKtoJ85cXnjhmJw4kWO6ZEc87KD0T+393OpfJmcvZz22bARwJuzasbgWwb63Z9SYV9KHpjHtz77Rt0wVVPsybeRLinifIQFNzyWRvHJunkm5Sjih7FSEbqjiVBi4MuzfzZK+5KwQv1pk2TQttqeiWKeTkB/+0t7y9zo8BAB7Bm6YRVmu4Eey23/4/mOaPjPzqPW+m2Xl2bn2NrSM3uqUFUw4vPEbKhYmiKgTVGqxrll7EMc1WzG4CNJbkn4DPvGRspFgFE8HlWmdLblbdItaPE2ioWjLr8e+FoHI9crTlpVnFYE4QpW5viwislXNuiZd8hr+0Ryf5PlaEj2DHGf6vopdt/X+F7qCfjbt/C0U3ZOL6oy+pvqLSuimZGIoX3tAZac/s4uq9ldD7QXI+mfxoO4ipmh52ELgZir5Cy4XsLpap7lSFOkxDE82TcVSq2Q7WrUmv4Fs26bIzhikdmQYAEUvQmWnlWhuJkeR8tJEuw2v2YLWH8h7QeUzvdXq8VCyhnx5K6xLSy0OpriFFomLpiLrvzBVjOD77WGl6gcTa4jswhXHJN4NhmcpGMlKm9fCk6/4J1MOTWKaVYPfPeCMk83HCZHoElQPrjQSw/isEQO81AjC5/B4CI7A9lddgYfL+O2EDRHDoCuY5D+7Utds8LlxIsSyue0hQ+KO2HZpnaN5Rp+4bGC0LO6LNg2Cg6U+nGbmaTNo4DXE/HrXcM41lr0kbtm2Fg7B+axSrCW91V5PSXqZEc0NozcyZGwdYYZjpFKElb7kuuFwSJrjJ/o0k+Gj9FY+X4Y6/zqPrH6+6ULz1eQ8D0vig83PS3baUup+7UuUMUn/yueGJkDDlhKGlH0yKBj7tcRfPKiOA0cxi5ydDZ+TdKbm5JX4oclJnOiNGdX7Ysj9L1XTtjMhOiEHW3wgRGiH9Tk8vBjtC3Lk8kvUU4AUpAuFPe+vIG64mOztgIvvQNP081s87mAihqMaKveMXHP1C1fOOcAF9k6MP/PHxBUoHmtc5dS+5Whxo9q4+D0/ugh9tgh82sHxlTKtnee4FGSok37JFyTao3lKbrqr6OpseFFqE6Rf/rpqKO7avO41X4/aP1my3WzuKfNFuGWa/NV2yVzn0Ue9O8eAft9QUKKkhaFegKOUoC2bFdTaMu+4z4cihn95tpw69iRneNyeausVnTyMxxzu3GIKcQs+TARn3c8fsOw65EGNRSizDwMI3KpPM5Ag4v4NZrjppOIa5sqnvptll9hOOZ21iccZwESxw4mim4GSeBKIOxuboDVDB0iGcTzxEf5oIutAW48h3DsANU9gBWTJlZ6y3hXSwLA7rQPVyaF858N5C4+XVYINPkXEGRgbgNKbivza/KcnAmOSCL/LOcJGHz1VUuB+1UFv4TXZnicsMistvS/L5HwHjnyc=',
	};

	const actions = {
		setLocalStorage(val: string): string {
			const oldValue = localStorage.getItem(packageName);
			const newValue = val ?? oldValue;

			localStorage.setItem(packageName, newValue);
			return newValue;
		},
		setTheme(val: string): string {
			const themeName = val === 'dark' ? 'light' : 'dark';
			const currentTheme = localStorage.getItem(`${packageName}-theme`);
			const newTheme = themeName ?? currentTheme;

			localStorage.setItem(`${packageName}-theme`, newTheme);
			return newTheme;
		},
	};

	const getters = {
		getLocalStorage: () => (): unknown => {
			const value = localStorage.getItem(packageName);
			return value;
		},
		getTheme: () => {
			const value = localStorage.getItem(`${packageName}-theme`);
			return value;
		},
	};

	return {
		...actions,
		...getters,
		links,
		package: packageJson,
		packageName,
		pluginVersion: packageJson.version,
	};
});
