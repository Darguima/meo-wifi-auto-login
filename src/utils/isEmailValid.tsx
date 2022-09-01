/* eslint-disable no-useless-escape */

export default (email: string) => {
	const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

	return !!email.match(mailFormat)
}
