import { Tag } from 'src/entities/Tag';
import { Connection } from 'typeorm';

export async function initTags(connection: Connection) {
  const tagRepository = connection.getRepository(Tag);

  const tagsData = [
    { name: 'Исторический центр' },
    { name: 'Пляжный отдых' },
    { name: 'Ночная жизнь' },
    { name: 'Гастрономические туры' },
    { name: 'Семейный отдых' },
    { name: 'Экскурсии и туры' },
    { name: 'Архитектурные памятники' },
    { name: 'Шоппинг' },
    { name: 'Парки развлечений' },
    { name: 'Музеи' },
    { name: 'Тематические парки' },
    { name: 'Рестораны и кафе' },
    { name: 'Винные туры' },
    { name: 'Культурные фестивали' },
    { name: 'Спа и уеллнес' },
    { name: 'Дайвинг и снорклинг' },
    { name: 'Сафари и диковинные туры' },
    { name: 'Экстримальные виды спорта' },
    { name: 'Катание на вертолете' },
    { name: 'Круизы' },
    { name: 'Балет и опера' },
    { name: 'Концерты и фестивали' },
    { name: 'Джазовые клубы' },
    { name: 'Театры' },
    { name: 'Кинотеатры' },
    { name: 'Ботанические сады' },
    { name: 'Аквапарки' },
    { name: 'Спортивные мероприятия' },
    { name: 'Подводная фотосъемка' },
    { name: 'Крокодиловые фермы' },
    { name: 'Кулинарные курсы' },
    { name: 'Серфинг и виндсерфинг' },
    { name: 'Верховая езда' },
    { name: 'Самостоятельные прогулки' },
    { name: 'Фотосессии' },
    { name: 'Конный туризм' },
    { name: 'Пикники' },
    { name: 'Парашютные прыжки' },
    { name: 'Плавание с дельфинами' },
    { name: 'Гидроциклы и скутеры' },
    { name: 'Пейнтбол' },
    { name: 'Серф-школы' },
    { name: 'Традиционные рынки' },
    { name: 'Гидропланирование' },
    { name: 'Подводная охота' },
    { name: 'Кайтсерфинг' },
    { name: 'Тропические сады' },
    { name: 'Веревочные парки' },
    { name: 'Рыбалка' },
    { name: 'Велосипедные туры' },
    { name: 'Тур на воздушном шаре' },
    { name: 'Картинг' },
    { name: 'Трекинг и пешие прогулки' },
    { name: 'Фермерские рынки' },
    { name: 'Зоопарки и аквариумы' },
    { name: 'Птичьи резерваты' },
    { name: 'Места для обзора' },
    { name: 'Смотровые площадки' },
    { name: 'Парки' },
    { name: 'Площади' },
    { name: 'Развлекательные комплексы' },
    { name: 'Конные маршруты' },
    { name: 'Дельфинарии' },
    { name: 'Музеи на открытом воздухе' },
    { name: 'Детские парки' },
    { name: 'Сады и парки' },
    { name: 'Сады лотосов' },
    { name: 'Сады орхидей' },
    { name: 'Набережные' },
    { name: 'Интересные места и забавные места' },
    { name: 'Достопримечательности и памятники' },
    { name: 'Памятники и статуи' },
    { name: 'Каньоны' },
    { name: 'Арки' },
    { name: 'Водопады' },
    { name: 'Геологические формации' },
    { name: 'Вулканы' },
    { name: 'Горы' },
    { name: 'Пещеры и гроты' },
    { name: 'Парки скульптур' },
    { name: 'Фонтаны' },
    { name: 'Сады' },
    { name: 'Деревни' },
    { name: 'Рыбные рестораны' },
    { name: 'Лавочки и площадки для прогулок' },
    { name: 'Культурные центры' },
    { name: 'Синагоги' },
    { name: 'Храмы и святыни' },
    { name: 'Шотландские килты' },
    { name: 'Костры' },
    { name: 'Пещерные экскурсии' },
    { name: 'Искусство на улицах' },
    { name: 'Мосты' },
    { name: 'Старые города' },
    { name: 'Винодельни' },
    { name: 'Итальянская кухня' },
    { name: 'Тайский массаж' },
    { name: 'Блюда местной кухни' },
    { name: 'Тропические пляжи' },
    { name: 'Археологические раскопки' },
    { name: 'Тематические музеи' },
    { name: 'Городские парки' },
    { name: 'Подземные реки' },
    { name: 'Памятные места и могилы' },
    { name: 'Коралловые рифы' },
    { name: 'Культурные пешеходные туры' },
    { name: 'Горные туры' },
    { name: 'Пляжные курорты' },
    { name: 'Активные туры' },
    { name: 'Водные парки' },
    { name: 'Парки развлечений и тематические парки' },
    { name: 'Исторические места' },
    { name: 'Русский баня' },
    { name: 'Минеральные источники' },
    { name: 'Велосипедные маршруты' },
    { name: 'Пляжи' },
    { name: 'Парки для собак' },
    { name: 'Лыжные курорты' },
    { name: 'Крепости' },
    { name: 'Острова' },
    { name: 'Дороги для велосипедов' },
    { name: 'Дачи' },
    { name: 'Катание на лошадях' },
    { name: 'Исторические дома' },
    { name: 'Пивоварни' },
    { name: 'Подводные пещеры' },
    { name: 'Музыкальные фонтаны' },
    { name: 'Корабли и баржи' },
    { name: 'Водопады' },
    { name: 'Скалы' },
    { name: 'Реки' },
    { name: 'Пляжные рестораны' },
    { name: 'Специализированные музеи' },
    { name: 'Художественные музеи' },
    { name: 'Музеи для детей' },
    { name: 'Кафе на свежем воздухе' },
    { name: 'Тропические бассейны' },
    { name: 'Фотостудии' },
    { name: 'Мемориальные комплексы' },
    { name: 'Шоколадные магазины' },
    { name: 'Авиа туры' },
    { name: 'Экскурсионные лодки' },
    { name: 'Фабрики' },
    { name: 'Пешеходные мосты' },
    { name: 'Ледовые городки' },
    { name: 'Закаты' },
    { name: 'Большие деревья' },
    { name: 'Розарии' },
    { name: 'Центры дайвинга и подводного плавания' },
    { name: 'Итальянские кафе' },
    { name: 'Места для пикников' },
    { name: 'Культурные прогулки' },
    { name: 'Кварталы' },
    { name: 'Галереи' },
    { name: 'Художественные галереи' },
    { name: 'Монастыри' },
    { name: 'Памятники победы' },
    { name: 'Кулинарные мастер-классы' },
    { name: 'Тематические кафе' },
    { name: 'Места для рыбной ловли' },
    { name: 'Спортивные комплексы' },
    { name: 'Мосты и пешеходные мосты' },
    { name: 'Горные озера' },
    { name: 'Сувенирные магазины' },
  ];

  for (const tagInfo of tagsData) {
    const existingTag = await tagRepository.findOne({
      where: { name: tagInfo.name },
    });
    if (!existingTag) {
      const newTag = tagRepository.create(tagInfo);
      await tagRepository.save(newTag);
    }
  }

  console.log('Tags initialized successfully.');
}