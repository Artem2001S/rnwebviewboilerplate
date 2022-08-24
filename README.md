# rn-webview-boilerplate

### Шаблон содержит

- Подключены и настроены библиотеки (навигация, webview, env переменные, OneSignal)
- Два варианта сборки приложения production/development

#### Настройка окружения

Для запуска проекта необходимо настроить окружение, [статья из офф. документации](https://reactnative.dev/docs/environment-setup)

Обратите внимание на настройку ANDROID_SDK_ROOT, если путь к ANDROID_SDK_ROOT настроен через терминал bash, то проект следует запускать через bash. Если zsh - запуск через zsh.

## Запуск проекта, типы сборок (prod/dev)

ENV константы хранятся в файлах `.env.development` и `.env.production`

В файл `.env` при запуске iOS записываются константы из файла `.env.development` или `.env.production` - в зависимости от выбранной схемы запуска.

#### Запуск iOS

```
$ yarn // установка npm пакетов
$ cd ios && pod install && cd .. // установка pod файлов (для iOS)
```

Затем открыть проект в XCode (Открыть XCode -> Open a project or file -> Выбрать папку ios проекта)
Выбрать [схему](https://monosnap.com/file/ivh3YGzl7B2vWuLzWNx0IaTNeWT6rO) для запуска и эмулятор/устройство, нажать кнопку запуска.

#### iOS проект содержит 3 схемы для запуска

- `WebViewApp` - дефолтная схема, если потребуется создать новую схему - необходимо склонировать эту схему и таргет `WebviewApp`
- `WebViewAppDev` - схема для запуска тестовой версии.
  Конфигурация тестового приложения находится в файле `DevelopmentInfo.plist`, таргет `WebViewAppDevTarget`
- `WebViewAppProd` - схема для запуска продакшен версии.
  Конфигурация продакшен приложения находится в файле `ProductionInfo.plist`, таргет `WebViewAppProdTarget`

Отличия prod и dev схем:

- разные `.env` файлы (перед запуском проекта выполняется скрипт, который записывает в файл `.env` данные из `.env.development` или `.env.production`
- разные .plist файлы
  > Важно: при изменении .plist файлов (например: добавление доступа к камере) - необходимо внести изменения во всех .plist файлах - `DevelopmentInfo.plist`, `ProductionInfo.plist` и `Info.plist`

При необходимости можно задать разные иконки/splash скрины для разных типов сборок, для этого необходимо изменить нужный .plist файл или таргет [Изменение иконки/splash screen'а](https://monosnap.com/file/J85IhyKaBd6wZGobOESpTFEKm7zBIo)

#### Запуск Android

```
$ yarn // установка npm пакетов
```

Файл `package.json` содержит 4 скрипта для запуска Android:

- `android:dev` - запуск dev версии, `.env` константы будут использоваться из `.env.development`
- `android:production` - запуск production версии, `.env` константы будут использоваться из `.env.production`
- `android:build:dev` - сборка apk установщика, файл будет сгенерирован в папке `android/app/build/outputs/apk/development/release/app-development-release.apk`
- `android:build:production` - сборка apk установщика, файл будет сгенерирован в папке `android/app/build/outputs/apk/production/release/app-production-release.apk`

#### Изменение конфигурации Android приложения

В файле `android/app/build.gradle` описаны параметры сборки приложения. Env файлы прописаны в

    project.ext.envConfigFiles = [
        debug: '.env.development',
        release: '.env.production',
    ]

Настройки названия и id приложения находятся в этом же файле, параметр `productFlavors`, который содержи две конфигурации (production & development)

Чтобы изменить id приложения, необходимо изменить параметр `applicationId`.
Для изменения названия приложения, необходимо изменить параметр

    resValue "string", "app_name", "Webview Production"

> Параметр `app_name` подставляется в `AndroidManifest.xml` > `android:label="@string/app_name"`

### OneSignal

Настройка OneSignal для андроид выполнена. Необходимо создать проект в OneSignal и получить app id, изменить app id в `.env` файлах

[Инструкция по добавлению OneSignal SDK для iOS + Android](https://documentation.onesignal.com/docs/react-native-sdk-setup)

[Инструкция по настройке OneSignal для Андроид](https://documentation.onesignal.com/docs/generate-a-google-server-api-key)
