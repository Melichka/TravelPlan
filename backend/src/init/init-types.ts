import { TypeService } from '../type/type.service'; // Подставьте правильный путь к вашему сервису TypeService

export async function initTypes(typeService: TypeService) {
  const typesData = [
    { name: 'Отель' },
    { name: 'Достопримечательность' },
    { name: 'Развлечение' },
  ];

  for (const type of typesData) {
    const existingType = await typeService.findByName(type.name);
    if (!existingType) {
      await typeService.create(type);
      console.log(`Type '${type.name}' created successfully.`);
    } else {
      console.log(`Type '${type.name}' already exists.`);
    }
  }
}
