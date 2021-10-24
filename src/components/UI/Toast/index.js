import MyToast from 'react-native-root-toast'
import { colors } from '../../../themes'

export default (msg = '', config = {}) => MyToast.show(msg, { ...config, backgroundColor: colors.storm, textColor: '#fff' })
