import { ToastAndroid, PermissionsAndroid } from 'react-native'

export const requestLocationPermission = async () => {
	try {
		const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
			{
				title: 'Meo WiFi Auto Login',
				message: 'For a better experience, allow us to access your location (give access your network information).',
				buttonPositive: 'Accept',
				buttonNegative: 'Reject',
				buttonNeutral: 'Later'
			}
		)
		if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			return true
		} else {
			return false
		}
	} catch (err) {
		ToastAndroid.show('Unknown Error - Permissions', ToastAndroid.CENTER)
		return false
	}
}
