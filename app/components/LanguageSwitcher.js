"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "../../src/i18n/routing";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e) => {
    const nextLocale = e.target.value;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <select
      defaultValue={locale}
      onChange={handleChange}
      className={styles.select}
      aria-label="Select language"
    >
      <option value="pt">PT</option>
      <option value="en">EN</option>
      <option value="es">ES</option>
      <option value="fr">FR</option>
    </select>
  );
}
