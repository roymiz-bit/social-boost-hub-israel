import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const whatsappNumber = "0537771602";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/972${whatsappNumber.substring(1)}`, '_blank');
  };

  const scrollToPurchase = () => {
    document.getElementById('purchase-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-assistant">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">שירותי רשתות חברתיות</h1>
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-white"
              >
                שירותים
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => scrollToSection('purchase-section')}
                className="text-gray-300 hover:text-white"
              >
                רכישה
              </Button>
              <Button 
                size="sm" 
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header with padding for fixed nav */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 border-b border-gray-700 py-16 pt-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            שירותי רשתות חברתיות מקצועיים
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            קידום איכותי ל-TikTok, Instagram ו-Discord • איכות גבוהה • מחירים הוגנים • משלוח מהיר תוך 24-48 שעות
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('services')}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              size="lg"
            >
              צפה בשירותים
            </Button>
            <Button 
              onClick={handleWhatsApp}
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-700 text-lg px-8 py-3"
              size="lg"
            >
              📱 יצירת קשר מיידי
            </Button>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl">⚡</span>
              <div>
                <h3 className="font-semibold text-white">משלוח מהיר</h3>
                <p className="text-gray-400 text-sm">תוך 24-48 שעות</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl">🛡️</span>
              <div>
                <h3 className="font-semibold text-white">איכות מובטחת</h3>
                <p className="text-gray-400 text-sm">אחריות מלאה</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl">💬</span>
              <div>
                <h3 className="font-semibold text-white">תמיכה 24/7</h3>
                <p className="text-gray-400 text-sm">דרך WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">השירותים שלנו</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* TikTok Services */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">🎵 שירותי TikTok</CardTitle>
              <CardDescription className="text-gray-400">עוקבים, לייקים וצפיות איכותיים</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-200 mb-2">עוקבים</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">1K עוקבים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">20₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">3K עוקבים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">35₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">5K עוקבים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">50₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">10K עוקבים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">80₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-200 mb-2">לייקים</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">1K לייקים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">10₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">3K לייקים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">15₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">5K לייקים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">20₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">10K לייקים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">30₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-200 mb-2">צפיות</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">10K צפיות</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">5₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">30K צפיות</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">6₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">50K צפיות</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">7₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">80K צפיות</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">8₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">100K צפיות</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">10₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Instagram Services */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">📸 שירותי Instagram</CardTitle>
              <CardDescription className="text-gray-400">עוקבים ולייקים איכותיים</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-200 mb-2">עוקבים</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">1K עוקבים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">20₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">3K עוקבים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">35₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">5K עוקבים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">50₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">10K עוקבים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">75₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-200 mb-2">לייקים</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">1K לייקים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">15₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">3K לייקים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">20₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">5K לייקים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">25₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">10K לייקים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">35₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Discord Nitro Services */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">💎 שירותי Discord Nitro</CardTitle>
              <CardDescription className="text-gray-400">נייטרו ובוסטים איכותיים</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-200 mb-2">נייטרו בוסט</h4>
                <div className="bg-gray-800 p-3 rounded border border-gray-700">
                  <p className="text-gray-300 text-sm mb-2">8 ימי אחריות • איכות גבוהה • לצלם בזמן קבלת הנייטרו</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">נייטרו בוסט</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">25₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-200 mb-2">נייטרו רגיל (בייסיק)</h4>
                <div className="bg-gray-800 p-3 rounded border border-gray-700">
                  <p className="text-gray-300 text-sm mb-2">אחריות מלאה • 0 סיכוי לקבל החזר לנייטרו</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">נייטרו בייסיק</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">צור קשר</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-200 mb-2">בוסטים לשרת</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">14 בוסטים לחודש</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">25₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">14 בוסטים ל-3 חודשים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">55₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
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
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">300 חברים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">15₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">500 חברים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">25₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">1000 חברים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">35₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">2000 חברים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">55₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-200 mb-2">לא מחוברים</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">300 חברים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">10₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">500 חברים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">15₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">1000 חברים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">25₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">2000 חברים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">40₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
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
              <CardDescription className="text-gray-400">מנויים פרימיום איכותיים</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-200 mb-2">משולם באופן חוקי - אחריות מלאה</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">12 חודשים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">90₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700">
                    <span className="text-gray-300">6 חודשים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">50₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">קונה על המשתמש שלך/משתמש חדש</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-200 mb-2">משתמש חדש - בלי אחריות</h4>
                <div className="bg-gray-800 p-3 rounded border border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">2-3 חודשים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-700 text-white">20₪</Badge>
                      <Button size="sm" onClick={scrollToPurchase} className="bg-blue-600 hover:bg-blue-700">קנה</Button>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">עד 2 החלפות למשתמש (רק עם נגמר הפרימיום)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Purchase Section */}
        <div id="purchase-section" className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 shadow-2xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">🛒 איך לרכוש?</h2>
            <p className="text-gray-300 mb-8 text-xl max-w-2xl mx-auto">
              בחרת מוצר? בוא נסיים את התהליך בקלות ובמהירות!
            </p>
            
            <div className="max-w-md mx-auto mb-8">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-xl border border-green-500 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-3">📱 WhatsApp</h3>
                <p className="text-green-100 mb-4">שלח הודעה עם פרטי המוצר שאתה רוצה</p>
                <Button 
                  onClick={handleWhatsApp}
                  className="w-full bg-white text-green-700 hover:bg-gray-100 font-semibold"
                  size="lg"
                >
                  פתח WhatsApp: {whatsappNumber}
                </Button>
              </div>
            </div>

            {/* Payment Methods Section */}
            <div className="bg-blue-900/30 border border-blue-600 p-6 rounded-xl mb-8">
              <h3 className="text-blue-300 font-bold mb-6 text-2xl">💳 דרכי תשלום</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-600 hover:border-gray-500 transition-colors">
                  <div className="flex items-center justify-center mb-3">
                    <span className="text-3xl mr-3">💵</span>
                    <h4 className="text-white font-bold text-lg">קאש קאש</h4>
                  </div>
                  <p className="text-gray-300">תשלום מיידי דרך אפליקציית קאש קאש</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-600 hover:border-gray-500 transition-colors">
                  <div className="flex items-center justify-center mb-3">
                    <span className="text-3xl mr-3">₿</span>
                    <h4 className="text-white font-bold text-lg">ביט</h4>
                  </div>
                  <p className="text-gray-300">העברה בנקאית מיידית<br/>(מספר שונה מהווטסאפ)</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-600 p-6 rounded-xl">
              <h3 className="text-yellow-300 font-bold mb-4 text-xl">⚠️ חשוב לדעת:</h3>
              <ul className="text-yellow-200 space-y-2 text-right max-w-lg mx-auto">
                <li className="flex items-center justify-end gap-2">
                  <span>לאחר הרכישה, שלח הודעה ב-WhatsApp</span>
                  <span>•</span>
                </li>
                <li className="flex items-center justify-end gap-2">
                  <span>ציין את שם המוצר והכמות שרכשת</span>
                  <span>•</span>
                </li>
                <li className="flex items-center justify-end gap-2">
                  <span>צרף את הקישור לפרופיל/שרת שלך</span>
                  <span>•</span>
                </li>
                <li className="flex items-center justify-end gap-2">
                  <span>זמן האספקה: 24-48 שעות לרוב השירותים</span>
                  <span>•</span>
                </li>
                <li className="flex items-center justify-end gap-2">
                  <span>פרטי התשלום יישלחו בווטסאפ לאחר בחירת המוצר</span>
                  <span>•</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-white mb-3">שירותי רשתות חברתיות</h3>
          <p className="text-gray-400 mb-4">השירות המוביל לקידום ברשתות חברתיות בישראל</p>
          <Button 
            onClick={handleWhatsApp}
            className="bg-green-600 hover:bg-green-700"
          >
            📱 WhatsApp: {whatsappNumber}
          </Button>
          <p className="text-gray-500 text-sm mt-6">
            © 2024 שירותי רשתות חברתיות. כל הזכויות שמורות.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
