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
          <h2 className="text-2xl font-semibold text-center mb-4 text-white">דרך קשר לרכישה</h2>
          <div className="flex justify-center">
            <Button 
              onClick={handleWhatsApp}
              className="bg-gray-700 hover:bg-gray-600 text-white border border-gray-600"
              size="lg"
            >
              📱 WhatsApp: {whatsappNumber}
            </Button>
          </div>
          <p className="text-center text-gray-400 mt-4">
            לאחר רכישה, שלח הודעה ב-WhatsApp עם פרטי המוצר שרכשת
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
              <CardDescription className="text-gray-400">עוקבים ולייקים</CardDescription>
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
              <CardDescription className="text-gray-400">נייטרו ובוסטים</CardDescription>
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
              <CardDescription className="text-gray-400">מנויים פרימיום</CardDescription>
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

        {/* Improved Purchase Section */}
        <div id="purchase-section" className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 shadow-2xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">🛒 איך לרכוש?</h3>
            <p className="text-gray-300 mb-6 text-lg">
              בחרת מוצר? בוא נסיים את התהליך בקלות!
            </p>
            
            <div className="max-w-md mx-auto mb-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
                <h4 className="text-xl font-semibold text-white mb-3">📱 WhatsApp</h4>
                <p className="text-gray-300 mb-4">שלח הודעה עם פרטי המוצר שאתה רוצה</p>
                <Button 
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  size="lg"
                >
                  פתח WhatsApp: {whatsappNumber}
                </Button>
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-700 p-4 rounded-lg">
              <h4 className="text-yellow-300 font-semibold mb-2">⚠️ חשוב לדעת:</h4>
              <ul className="text-yellow-200 text-sm space-y-1 text-right">
                <li>• לאחר הרכישה, שלח הודעה ב-WhatsApp</li>
                <li>• ציין את שם המוצר והכמות שרכשת</li>
                <li>• צרף את הקישור לפרופיל/שרת שלך</li>
                <li>• זמן האספקה: 24-48 שעות לרוב השירותים</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
