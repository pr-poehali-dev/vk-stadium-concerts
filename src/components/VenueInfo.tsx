import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const VenueInfo = () => {
  const features = [
    {
      icon: "Users",
      title: "Вместимость",
      description: "До 5000 гостей в главном зале",
    },
    {
      icon: "Car",
      title: "Парковка",
      description: "500 парковочных мест",
    },
    {
      icon: "Coffee",
      title: "Кафе и рестораны",
      description: "3 кафе и VIP-ресторан",
    },
    {
      icon: "ShirtIcon",
      title: "Гардероб",
      description: "Просторный гардероб для всех гостей",
    },
    {
      icon: "Volume2",
      title: "Звуковое оборудование",
      description: "Профессиональная акустическая система",
    },
    {
      icon: "Lightbulb",
      title: "Световое оборудование",
      description: "Современное сценическое освещение",
    },
    {
      icon: "Accessibility",
      title: "Доступная среда",
      description: "Места для людей с ограниченными возможностями",
    },
    {
      icon: "Wifi",
      title: "Wi-Fi",
      description: "Бесплатный интернет на всей территории",
    },
  ];

  return (
    <section id="venue-info" className="py-16">
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold text-black mb-4"
          style={{ fontFamily: "Montserrat" }}
        >
          О площадке
        </h2>
        <p
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          style={{ fontFamily: "Open Sans" }}
        >
          VK Stadium — это современная концертная площадка с превосходной
          акустикой и всеми удобствами для незабываемого музыкального опыта
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="border border-gray-200 hover:border-gray-400 transition-colors"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Icon
                    name={feature.icon as any}
                    size={24}
                    className="text-black"
                  />
                </div>
                <CardTitle
                  className="text-lg font-semibold"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {feature.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600" style={{ fontFamily: "Open Sans" }}>
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Location Section */}
      <Card className="border-2 border-gray-200">
        <CardHeader>
          <CardTitle
            className="text-2xl font-bold text-center"
            style={{ fontFamily: "Montserrat" }}
          >
            Как добраться
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3
                className="font-semibold text-lg mb-4 flex items-center gap-2"
                style={{ fontFamily: "Montserrat" }}
              >
                <Icon name="MapPin" size={20} />
                Адрес
              </h3>
              <p
                className="text-gray-700 mb-4"
                style={{ fontFamily: "Open Sans" }}
              >
                ул. Концертная, 1<br />
                Москва, 123456
              </p>

              <h3
                className="font-semibold text-lg mb-4 flex items-center gap-2"
                style={{ fontFamily: "Montserrat" }}
              >
                <Icon name="Train" size={20} />
                Общественный транспорт
              </h3>
              <ul
                className="text-gray-700 space-y-2"
                style={{ fontFamily: "Open Sans" }}
              >
                <li>• Метро: станция "Концертная" (5 мин пешком)</li>
                <li>• Автобусы: №10, 25, 47 до остановки "VK Stadium"</li>
                <li>• Трамвай: №3, 8 до остановки "Театральная"</li>
              </ul>
            </div>

            <div>
              <h3
                className="font-semibold text-lg mb-4 flex items-center gap-2"
                style={{ fontFamily: "Montserrat" }}
              >
                <Icon name="Phone" size={20} />
                Контакты
              </h3>
              <div
                className="space-y-2 text-gray-700"
                style={{ fontFamily: "Open Sans" }}
              >
                <p>Телефон: +7 (495) 123-45-67</p>
                <p>Email: info@vkstadium.ru</p>
                <p>Сайт: www.vkstadium.ru</p>
              </div>

              <h3
                className="font-semibold text-lg mb-4 mt-6 flex items-center gap-2"
                style={{ fontFamily: "Montserrat" }}
              >
                <Icon name="Clock" size={20} />
                Режим работы
              </h3>
              <div
                className="text-gray-700"
                style={{ fontFamily: "Open Sans" }}
              >
                <p>Касса: ежедневно с 10:00 до 20:00</p>
                <p>Концерты: согласно расписанию</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default VenueInfo;
