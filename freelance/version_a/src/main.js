const hostName = location.hostname;
const formLink = document.getElementById('form-link');
if (hostName.includes(process.env.S_ENV)) {
	formLink.href = process.env.S_URL;
} else {
	formLink.href = process.env.P_URL;
}
