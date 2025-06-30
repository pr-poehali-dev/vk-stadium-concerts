import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ConcertCard = () => {
  return (
    <Card className="max-w-4xl mx-auto border-2 border-gray-200 hover:border-black transition-all duration-300 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-gray-50 to-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <CardTitle
              className="text-2xl md:text-3xl font-bold text-black mb-2"
              style={{ fontFamily: "Montserrat" }}
            >
              Концерт классической музыки
            </CardTitle>
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <div className="flex items-center gap-1">
                <Icon name="Calendar" size={18} />
                <span style={{ fontFamily: "Open Sans" }}>
                  Вторник, 1 июля 2025
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Clock" size={18} />
                <span style={{ fontFamily: "Open Sans" }}>12:30</span>
              </div>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="bg-black text-white text-lg px-4 py-2"
          >
            1 600 ₽
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3
              className="font-semibold text-lg mb-3 text-black"
              style={{ fontFamily: "Montserrat" }}
            >
              О концерте
            </h3>
            <p
              className="text-gray-700 leading-relaxed mb-4"
              style={{ fontFamily: "Open Sans" }}
            >
              Насладитесь великолепными произведениями классической музыки в
              исполнении симфонического оркестра. В программе: Бах, Моцарт,
              Бетховен и другие великие композиторы.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">Симфонический оркестр</Badge>
              <Badge variant="outline">Классика</Badge>
              <Badge variant="outline">Премьера</Badge>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Icon name="MapPin" size={20} className="text-gray-500" />
              <span style={{ fontFamily: "Open Sans" }}>
                VK Stadium, Главный зал
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Users" size={20} className="text-gray-500" />
              <span style={{ fontFamily: "Open Sans" }}>
                Вместимость: 5000 мест
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Ticket" size={20} className="text-gray-500" />
              <span style={{ fontFamily: "Open Sans" }}>
                Свободная рассадка
              </span>
            </div>

            <div className="pt-4">
              <Button className="w-full bg-black hover:bg-gray-800 text-white">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Купить билет за 1 600 ₽
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConcertCard;
