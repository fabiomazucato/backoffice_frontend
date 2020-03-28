import { useSnackbar } from 'notistack'
import { typesNotification } from '../constants/typesNotification'

export function HandleNotification(
	type: string = 'DEFAULT',
	msg: string
): void {
	const { enqueueSnackbar } = useSnackbar()

	const keyType: string = typesNotification[type]

	const handleNotification = () => {
		enqueueSnackbar(msg, {
			variant: typesNotification.DEFAULT
		})
	}

	handleNotification()
}
