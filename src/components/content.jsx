import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();

  return (
    <main className="p-6 bg-gray-50 dark:bg-gray-900 flex-1 overflow-auto">
      <h2 className="text-2xl font-bold mb-4">{t("welcome")}</h2>
      <p className="text-gray-700 dark:text-gray-300">Conteúdo do painel aqui.</p>
    </main>
  );
}