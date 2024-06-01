import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

export const ClipButton = ({ onPress, enabled }) => {
  const name = enabled ? "bookmark" : "bookmark-outline";

  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={name} size={24} color="black" />
    </TouchableOpacity>
    );
}
