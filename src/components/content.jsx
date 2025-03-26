import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();

  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">{t("welcome")}</h2>
      <p className="text-gray-700 dark:text-gray-300">Conteúdo do painel aqui.</p>
    </main>
  );
}
