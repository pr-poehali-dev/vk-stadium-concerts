import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const ConcertCard = () => {
  const { toast } = useToast();

  const handleBuyTicket = () => {
    toast({
      title: "Билеты распроданы! 🎫",
      description:
        "К сожалению, все билеты на этот концерт уже куплены. Следите за новыми событиями!",
      duration: 5000,
    });
  };

  return (
    <Card className="max-w-4xl mx-auto border-2 border-gray-200 hover:border-black transition-all duration-300 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-gray-50 to-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <CardTitle
              className="text-2xl md:text-3xl font-bold text-black mb-2"
              style={{ fontFamily: "Montserrat" }}
            >
              Концерт: Классика & Аниме
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
              Уникальный концерт из двух частей: классические произведения
              великих композиторов и любимые мелодии из популярных аниме.
              Симфонический оркестр исполнит Баха, Моцарта, Бетховена, а также
              саундтреки к "Атаке титанов", "Наруто", "Твое имя" и другим.
            </p>

            {/* Program sections */}
            <div className="mb-4">
              <h4
                className="font-semibold mb-2 text-black"
                style={{ fontFamily: "Montserrat" }}
              >
                Программа концерта:
              </h4>
              <div
                className="space-y-2 text-sm text-gray-600"
                style={{ fontFamily: "Open Sans" }}
              >
                <div className="flex items-center gap-2">
                  <Icon name="Music" size={14} />
                  <span>
                    <strong>1 часть:</strong> Классическая музыка (Бах, Моцарт,
                    Бетховен)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Star" size={14} />
                  <span>
                    <strong>2 часть:</strong> Музыка из аниме (Attack on Titan,
                    Naruto, Your Name)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">Симфонический оркестр</Badge>
              <Badge variant="outline">Классика</Badge>
              <Badge variant="outline">Аниме</Badge>
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
              <Button
                onClick={handleBuyTicket}
                className="w-full bg-black hover:bg-gray-800 text-white"
              >
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
