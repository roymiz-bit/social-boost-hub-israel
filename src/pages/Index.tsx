
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const whatsappNumber = "0537771602";
  const discordLink = "https://discord.gg/UTmEhW76qk";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/972${whatsappNumber.substring(1)}`, '_blank');
  };

  const handleDiscord = () => {
    window.open(discordLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-white mb-2">
            שירותי רשתות חברתיות
          </h1>
          <p className="text-center text-gray-300 text-lg">
            מחירון שירותים למדיה חברתית - איכות גבוהה ומחירים הוגנים
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-4 text-white">דרכי קשר לרכישה</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleWhatsApp}
              className="bg-gray-700 hover:bg-gray-600 text-white border border-gray-600"
              size="lg"
            >
              📱 WhatsApp: {whatsappNumber}
            </Button>
            <Button 
              onClick={handleDiscord}
              className="bg-gray-700 hover:bg-gray-600 text-white border border-gray-600"
              size="lg"
            >
              💬 Discord Server
            </Button>
          </div>
          <p className="text-center text-gray-400 mt-4">
            לאחר רכישה, יש לפתוח טיקט בשרת Discord או לשלוח הודעה ב-WhatsApp
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* TikTok Services */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">🎵 שירותי TikTok</CardTitle>
              <CardDescription className="text-gray-400">עוקבים, לייקים וצפיות</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-200 mb-2">עוקבים</h4>
                <div className="space-y-2">
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">1K עוקבים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">20₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">3K עוקבים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">35₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">5K עוקבים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">50₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">10K עוקבים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">80₪</Badge>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-200 mb-2">לייקים</h4>
                <div className="space-y-2">
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">1K לייקים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">10₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">3K לייקים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">15₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">5K לייקים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">20₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">10K לייקים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">30₪</Badge>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-200 mb-2">צפיות</h4>
                <div className="space-y-2">
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">10K צפיות</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">5₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">30K צפיות</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">6₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">50K צפיות</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">7₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">80K צפיות</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">8₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">100K צפיות</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">10₪</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Instagram Services */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">📸 שירותי Instagram</CardTitle>
              <CardDescription className="text-gray-400">עוקבים ולייקים</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-200 mb-2">עוקבים</h4>
                <div className="space-y-2">
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">1K עוקבים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">20₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">3K עוקבים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">35₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">5K עוקבים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">50₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">10K עוקבים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">75₪</Badge>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-200 mb-2">לייקים</h4>
                <div className="space-y-2">
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">1K לייקים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">15₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">3K לייקים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">20₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">5K לייקים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">25₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">10K לייקים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">35₪</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Discord Nitro Services */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">💎 שירותי Discord Nitro</CardTitle>
              <CardDescription className="text-gray-400">נייטרו ובוסטים</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-200 mb-2">נייטרו בוסט</h4>
                <div className="bg-gray-800 p-3 rounded border border-gray-700">
                  <p className="text-gray-300 text-sm mb-2">8 ימי אחריות • איכות גבוהה • לצלם בזמן קבלת הנייטרו</p>
                  <div className="flex justify-between">
                    <span className="text-gray-300">נייטרו בוסט</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">25₪</Badge>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-200 mb-2">נייטרו רגיל (בייסיק)</h4>
                <div className="bg-gray-800 p-3 rounded border border-gray-700">
                  <p className="text-gray-300 text-sm mb-2">אחריות מלאה • 0 סיכוי לקבל החזר לנייטרו</p>
                  <div className="flex justify-between">
                    <span className="text-gray-300">נייטרו בייסיק</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">צור קשר</Badge>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-200 mb-2">בוסטים לשרת</h4>
                <div className="space-y-2">
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">14 בוסטים לחודש</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">25₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">14 בוסטים ל-3 חודשים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">55₪</Badge>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">לא צריך להוסיף בוט, רק קישור לשרת</p>
              </div>
            </CardContent>
          </Card>

          {/* Discord Members Services */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">👥 אנשים לשרת Discord</CardTitle>
              <CardDescription className="text-gray-400">חברים מחוברים ולא מחוברים</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-200 mb-2">מחוברים</h4>
                <div className="space-y-2">
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">300 חברים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">15₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">500 חברים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">25₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">1000 חברים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">35₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">2000 חברים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">55₪</Badge>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-200 mb-2">לא מחוברים</h4>
                <div className="space-y-2">
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">300 חברים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">10₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">500 חברים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">15₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">1000 חברים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">25₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">2000 חברים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">40₪</Badge>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-3 rounded border border-gray-700">
                <p className="text-gray-300 text-sm">
                  איכות גבוהה! הבוטים נראים כמו אנשים אמיתיים 
                  (תמונות פרופיל, שמות רנדומליים וביו רנדומלי) • מחוברים 24/7
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Spotify Services */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">🎵 Spotify Premium</CardTitle>
              <CardDescription className="text-gray-400">מנויים פרימיום</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-200 mb-2">משולם באופן חוקי - אחריות מלאה</h4>
                <div className="space-y-2">
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">12 חודשים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">90₪</Badge>
                  </div>
                  <div className="flex justify-between bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">6 חודשים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">50₪</Badge>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">קונה על המשתמש שלך/משתמש חדש</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-200 mb-2">משתמש חדש - בלי אחריות</h4>
                <div className="bg-gray-800 p-3 rounded border border-gray-700">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">2-3 חודשים</span>
                    <Badge variant="secondary" className="bg-gray-700 text-white">20₪</Badge>
                  </div>
                  <p className="text-gray-400 text-sm">עד 2 החלפות למשתמש (רק עם נגמר הפרימיום)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">איך לרכוש?</h3>
          <p className="text-gray-300 mb-4">
            לאחר בחירת השירות הרצוי, פנה אלינו באמצעים הבאים:
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleWhatsApp}
              className="bg-gray-700 hover:bg-gray-600 text-white border border-gray-600"
            >
              📱 WhatsApp
            </Button>
            <Button 
              onClick={handleDiscord}
              className="bg-gray-700 hover:bg-gray-600 text-white border border-gray-600"
            >
              💬 פתח טיקט ב-Discord
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
