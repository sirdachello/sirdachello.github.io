import SocialsMedia from "./SocialsMedia";
import SocialsContacts from "./SocialsContacts";

export default function Contacts() {
  return (
    <ul className="hidden md:mt-[-50px] md:flex md:shrink-0 md:items-center md:gap-4 md:whitespace-nowrap lg:mt-0">
      <SocialsContacts />
      <SocialsMedia />
    </ul>
  );
}
