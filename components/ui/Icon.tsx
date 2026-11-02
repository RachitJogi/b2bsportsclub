import {
  Calendar,
  Camera,
  Gavel,
  Heart,
  type LucideIcon,
  Mail,
  MapPin,
  Medal,
  PlayCircle,
  Phone,
  Shield,
  Star,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import type { IconName } from "@/lib/content";

const ICONS: Record<IconName, LucideIcon> = {
  calendar: Calendar,
  "map-pin": MapPin,
  users: Users,
  star: Star,
  trophy: Trophy,
  medal: Medal,
  target: Target,
  zap: Zap,
  shield: Shield,
  play: PlayCircle,
  camera: Camera,
  phone: Phone,
  mail: Mail,
  gavel: Gavel,
  heart: Heart,
};

export default function Icon({ name }: { name: IconName }) {
  const Component = ICONS[name];
  return <Component aria-hidden="true" />;
}
