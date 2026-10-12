# Резюме на React + TypeScript + Vite

Домашняя работа по веб-технологиям, собрана так же, как на уроке 13 (05.10):
Vite + React + TypeScript, деплой на GitHub Pages через GitHub Actions.

## Запуск на своём компьютере

Нужен Node.js версии 20.19+ или 22.12+ (проверить: `node -v`).

    npm install
    npm run dev

Откроется http://localhost:5173/resume-react-ts/

Собрать production-версию:

    npm run build
    npm run preview

## Структура

    index.html                     точка входа
    vite.config.ts                 настройки Vite, здесь же base для GitHub Pages
    .github/workflows/deploy.yml   автодеплой на GitHub Pages
    src/main.tsx                   монтирование React в <div id="root">
    src/App.tsx                    главный компонент, собирает страницу
    src/MyHeader.tsx               шапка резюме
    src/Section.tsx                блок-секция с заголовком
    src/SkillList.tsx              список навыков
    src/JobList.tsx                список мест работы
    src/types.ts                   типы и интерфейсы
    src/data.ts                    данные резюме
    src/index.css, src/App.css     стили

## Что из TypeScript использовано

В `src/types.ts`:

    type SkillLevel = "базовый" | "уверенный" | "продвинутый" | "эксперт"
                                       объединение (union) — только эти значения
    type Period = [number, number | "наст."]
                                       кортеж из двух элементов
    interface UserProfile {
      readonly id: number              readonly — менять нельзя
      name: string
      bio?: string                     ? — необязательное поле
    }

В компонентах пропсы описаны интерфейсами:

    interface MyHeaderProps { user: UserProfile }
    function MyHeader({ user }: MyHeaderProps) { ... }

В `src/JobList.tsx` — функция с типами параметра и результата:

    function showPeriod(period: Period): string

В `src/App.tsx` — состояние с явным типом:

    const [showBio, setShowBio] = useState<boolean>(true)

## Выложить на GitHub Pages

1. Создать на GitHub репозиторий с именем `resume-react-ts` (публичный).
2. В файле `vite.config.ts` строка `base` должна совпадать с именем репозитория:

       base: '/resume-react-ts/'

   Если репозиторий назван иначе — поменять здесь.
3. Залить код:

       git remote add origin https://github.com/ИМЯ/resume-react-ts.git
       git branch -M main
       git push -u origin main

4. На GitHub: Settings -> Pages -> Build and deployment -> Source: **GitHub Actions**.
5. Вкладка Actions покажет запущенную сборку. Когда она позеленеет,
   сайт будет по адресу https://ИМЯ.github.io/resume-react-ts/

Дальше каждый `git push` в ветку main пересобирает и обновляет сайт сам.

Автор: Жунусов Аазам, группа АИН-1-25
