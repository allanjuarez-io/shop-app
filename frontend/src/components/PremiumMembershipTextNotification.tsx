import { PremiumBadge } from '../components';

export default function PremiumMembershipTextNotification({ size = '1' }) {
  return (
    <span className={`text-[${size}rem] text-[--text-color] text-wrap`}>
      El envio es gratuito a cualquier parte del mundo con la membresia:
      <PremiumBadge size={size} />
    </span>
  );
}
