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
		vuetifyPlayground: 'https://play.vuetifyjs.com/#eNrFV9tu4zYQ/RVWQJENEEmOHSeN4ARpUexTH4q22JdVUFASbTOmSIGk7Fzgf+/wIomyN3D2oVggsaWZ4Zk5w+EM/fUt2rZE0+VL8qSiLKJ1I6RGb6iUBGvyxenQHi2lqNGZtz3LuTcsBRNSea17AWXOS8GVRoyu1hrdobecI2+auReEGklrLF8yL08K1pKkwIpcGP3eflZYbjK0xMxK9waYPHu/Bt+HAx5G4X6yLvSa1KR3V5Elbpn+xwnPbGRn1om3HCJDLm6vdJGYz/15zqOL6NemScAxJGuhSd0w8HtvTBbbmOEX0Wr7Zt9x08QFlo7iXR55znkE7EVNOeGdcWgec7yNKTDsVAhtsaSYa4DQ5Fnn0aB5KBktN4nSogFtJfGOSMjHT+5psLxfpMcOwHngXgvBjFZTzch9t/V/EUVfCfrdIW+nyWUyMVhj6wBGNbgk0vrzj4Gy0AGrkmGlIOqaxNOQU7YmZgNAY4L8G9wnTjI2kmQJJozyjUpWVK/bItSPE6ixXBGD+G/BMN+MgHa00uvQmRUEqRtsgYGxsuAm8Ipm8B933lE6cAX6QHac4f+LPW/qH0Xduv4m7+7NF12ficUXV1Kuorp1a8wrRuKjk9Lpt3EtKsL6Gh80cI7ijsd0fh0o8HOvmE9+7hRhOTIKXSSjcI7NTtjvPLKlazQ9iVHEAxGICVOOlH5hBJa7XcrQfDJpngEm8AM502AanAUrlmIXCLwlM+3ChHMJZTFSI/SHkKRGtFFtjSqTKqSoRrgm+sK2RFJqoluJcEUbqkrKV4gwqpORE2AHHsJIQBKG4izGERuZYetanUlQ1+sWadAG4VWVkjYud35IjNI3niSzWFpd7HbVzg6EfJP3Pbvry6UAONMzw1Y9wh61bDM+NM7Qp3N0d4/cTLBSazqMFSddSdE2GeItY72sOxWBOyhUv8uzaW+HkC2zkayLAVBMVWXo62AdoMHxNP0TJtJnIbp51PV8mIigWI4VA/A7QL9h+W0gOITfBfSZvr6+E9KB5nRM7XtQxYFmgHrsn2yTG21CBcUtZAXr11o3KktTL0mgSNJWEanS25vbq/lsejOfXd/e/DKbXV2HflzLDgCcwK7fkaIiW6j9Sul2uUzfqdUjtD+lWFLL9zRouBp6aLBmt9uZhv6k7DKYoBu8Iidj6PK2P4cH97jDuoSi7NNmSxxOQ5BHvaYq6S8N9kQcAbr7jznn/cmGW5AbPE9KcLgIWcQ8KhV0z77SoSF6RmXFwRK6N93KhBOdAr2O0MMsmSWXV2b/dCeD3lIAe4NmoB7h6gUeXTOBJtQcuHUK69pTy82l1ryfiOEBzFLZck1hCFeitsH4WAJxQlQdF9Ahoa4AJI98aqwbE/AHXJ2kCz6OsFNwuCUS9pxXRJqh9zFKB8tCWgeqk9QOCu7jTA8WPtiL44j3gQWEMo7A/TD43txOUkaLtNWUpf6XBRwlV0hQxPAX7S8imxCoKbcb0eN/QnEJfg==',
		vuetifyPlaygroundGrid: 'https://play.vuetifyjs.com/#eNrFV81u4zYQfhVWQJFdIJKSONmDkQRpUeyph6It9rIKCkoa2YwpSiApOz/wu3f4I4mSkzqLbdFDAnJmODPfcIb6/PUl2nagWfWUPKhoGbG6baQmL6SQQDV8cTqyJ5VsanLibU8y4Q2LhjdSea3boDITRSOUJpyt1prckJdMEG+6dBtCWslqKp+WXp7kvIMkpwpOjX5v/5dUbpakotxK98YxPPq4xr9PByNM0v1gQ+g11DCEK6GiHdd/OuGJzezEBvGWY2bE5e2VLhPzf/8xE9Fp9FPbJhgYi3WtoW45xr01JtfbmNOnptN2Z/e0beOcSgfxJos85ixC9E3NBIjeODSPBd3GDBH2KkK2VDIqNLrQ8KizaNTcFZwVm0TppkVtKekOJNbjB7caLW+v08MAGDwIr5uGG61mmsNtf/W/g2LPQH5xnrcXyXlyZnxNrQM3qqUFSBvPLwNlrgNUBadKYdY1xBchpuUazAWgxiT5B4ZPnGRqJKFCE87ERiUrptddHuqnBdRUrsB4/CvnVGwmjnas1OswmBUEpRttEYGxss5N4iVb4l/cRyfpiBXhI9hphf8r9KKt/y/oNvSruPudb7qhEtdfXEu5jurPrakoOcQHk9Lrt3HdlMCHHh81OEdxj+Pi6lOgoI+D4ursx14RtiNi0RTnEEfU30a+ilUnK+zb2A9dFk2rIJvdYN3q+ArhiyZedVqDVIGpD8BDicFRWYBYSEHOJxdvb2QDT0Y7l/cBrcf4UcWHR/kK9Yu5tC5RejmXqhqlQalmd91P8hoAn9oeK40vsKamWWemaFyy7WBYxqIRQMq4Hlaq7leYul/xVVxxeHzFGyGJw4kmi4NQKcZ6ZwJ4/h8SwPSOJYAml9+TwCTYmMqxsGjy6TvD+hDeoW2Y1zzYV9pc87RxUYrHwr5HCTb+ZMyH4RmGfTLZ48Dj7KIdUfqJA6bpXrMluTo7a8MyhPN4MHKvDJb5rBrYZhRmsH5tJNSEtaqrSWmeFKKYJrQGfWqpAxQadCcJLVnLVMHEigBnOvk3iuDQOkqAm4ETXKcBXcCtKiRrXd09mZqUb8q4FrG0uti9fpZjEeLJkOc2PX8pGnRnuEVIaSa+J9TG0CxNl+TDR3JzSxx3slJrOtIvJ13JpmuXRHScD7L+6xGEwwfd3/LiYrAjxD7HE1mfA3rB8mDGX0frwBt+xgzPQOb2uWl63tZzI2SOqKimitHxG45+pvJ1R/ix+iZHn9nz8xspzTTHc+recpXPNKOr+2FlycDkEhwxweNrrVu1TFMnSLBF0h3kJWyxc0ulu6pK3+i0IKY7/JtsKmazPe40PI1MITiz2+0MbXlQ9hjyxA1dwdEcetT7j7hwyx3VBbbUANo2KPZyUAW9ZioZqLHt5wOHjuWbKR3mErm+o1cPqhFI963HLCqUyqKhT/E584iKUqAlchS2lYkAnSK8HtDdIlkk55f4ACvdy/BlyBG98WZc3eMPDIzongJ8QtpZWKewoT00ZAMdmP2RHO7QLJWd0AypZtnUNhmfSyBOAD87Ob5vCiQ6ySJfGhvGJPyOUEfhYowD3ykG3ILEOxclSEPt3gdpdiyENVMdhTZruPcjnR28sz+PJrhnFpjKNAP38/dba3uWcpannWY89b+fcZRcI2ET76P9aWTLgR3l7iK6/xtZJcfc',
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
