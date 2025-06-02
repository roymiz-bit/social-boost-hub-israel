
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Eye, Music, Zap, Crown, MessageCircle, ExternalLink } from 'lucide-react';

const Index = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const tiktokServices = {
    followers: [
      { amount: "1k", price: "20₪" },
      { amount: "3k", price: "35₪" },
      { amount: "5k", price: "50₪" },
      { amount: "10k", price: "80₪" }
    ],
    likes: [
      { amount: "1k", price: "10₪" },
      { amount: "3k", price: "15₪" },
      { amount: "5k", price: "20₪" },
      { amount: "10k", price: "30₪" }
    ],
    views: [
      { amount: "10k", price: "5₪" },
      { amount: "30k", price: "6₪" },
      { amount: "50k", price: "7₪" },
      { amount: "80k", price: "8₪" },
      { amount: "100k", price: "10₪" }
    ]
  };

  const instagramServices = {
    followers: [
      { amount: "1k", price: "20₪" },
      { amount: "3k", price: "35₪" },
      { amount: "5k", price: "50₪" },
      { amount: "10k", price: "75₪" }
    ],
    likes: [
      { amount: "1k", price: "15₪" },
      { amount: "3k", price: "20₪" },
      { amount: "5k", price: "25₪" },
      { amount: "10k", price: "35₪" }
    ]
  };

  const discordServices = {
    nitroBoost: {
      warranty: "8 ימי אחריות",
      quality: "איכות גבוה (לא אמור לקבל revoke)",
      note: "לצלם בזמן שאתם לוקחים את הנייטרו",
      price: "25₪"
    },
    nitroBasic: {
      warranty: "אחריות מלאה",
      quality: "0 סיכוי לקבל החזר לנייטרו",
      price: "מחיר לפי בקשה"
    },
    boosts: [
      { duration: "חודש אחד", amount: "14x", price: "25₪" },
      { duration: "שלושה חודשים", amount: "14x", price: "55₪" }
    ],
    membersOnline: [
      { amount: "300", price: "15₪" },
      { amount: "500", price: "25₪" },
      { amount: "1000", price: "35₪" },
      { amount: "2000", price: "55₪" }
    ],
    membersOffline: [
      { amount: "300", price: "10₪" },
      { amount: "500", price: "15₪" },
      { amount: "1000", price: "25₪" },
      { amount: "2000", price: "40₪" }
    ]
  };

  const spotifyServices = [
    { duration: "12 חודשים", price: "90₪", warranty: "אחריות מלאה" },
    { duration: "6 חודשים", price: "50₪", warranty: "אחריות מלאה" },
    { duration: "2-3 חודשים", price: "20₪", warranty: "בלי אחריות - עד 2 החלפות" }
  ];

  const handlePurchase = (service: string, item: string) => {
    setSelectedService(`${service} - ${item}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Social Media Boost
            </h1>
            <p className="text-xl text-gray-300">שירותי חיזוק רשתות חברתיות מקצועיים</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* TikTok Services */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              שירותי טיקטוק
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* TikTok Followers */}
            <Card className="bg-black/30 border-pink-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-pink-400" />
                  עוקבים
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {tiktokServices.followers.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <span className="text-white font-medium">{item.amount} followers</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-pink-500/20 text-pink-300">{item.price}</Badge>
                      <Button 
                        size="sm" 
                        onClick={() => handlePurchase('TikTok עוקבים', item.amount)}
                        className="bg-pink-500 hover:bg-pink-600"
                      >
                        קנה
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* TikTok Likes */}
            <Card className="bg-black/30 border-pink-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-400" />
                  לייקים
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {tiktokServices.likes.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <span className="text-white font-medium">{item.amount} likes</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-pink-500/20 text-pink-300">{item.price}</Badge>
                      <Button 
                        size="sm" 
                        onClick={() => handlePurchase('TikTok לייקים', item.amount)}
                        className="bg-pink-500 hover:bg-pink-600"
                      >
                        קנה
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* TikTok Views */}
            <Card className="bg-black/30 border-pink-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Eye className="w-5 h-5 text-pink-400" />
                  צפיות
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {tiktokServices.views.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <span className="text-white font-medium">{item.amount} views</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-pink-500/20 text-pink-300">{item.price}</Badge>
                      <Button 
                        size="sm" 
                        onClick={() => handlePurchase('TikTok צפיות', item.amount)}
                        className="bg-pink-500 hover:bg-pink-600"
                      >
                        קנה
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Instagram Services */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                📷
              </div>
              שירותי אינסטגרם
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Instagram Followers */}
            <Card className="bg-black/30 border-purple-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  עוקבים
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {instagramServices.followers.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <span className="text-white font-medium">{item.amount} followers</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">{item.price}</Badge>
                      <Button 
                        size="sm" 
                        onClick={() => handlePurchase('Instagram עוקבים', item.amount)}
                        className="bg-purple-500 hover:bg-purple-600"
                      >
                        קנה
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Instagram Likes */}
            <Card className="bg-black/30 border-purple-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Heart className="w-5 h-5 text-purple-400" />
                  לייקים
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {instagramServices.likes.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <span className="text-white font-medium">{item.amount} likes</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">{item.price}</Badge>
                      <Button 
                        size="sm" 
                        onClick={() => handlePurchase('Instagram לייקים', item.amount)}
                        className="bg-purple-500 hover:bg-purple-600"
                      >
                        קנה
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Discord Services */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              שירותי דיסקורד
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Nitro Boost */}
            <Card className="bg-black/30 border-blue-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Crown className="w-5 h-5 text-blue-400" />
                  נייטרו בוסט
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-gray-300">
                  <p>• {discordServices.nitroBoost.warranty}</p>
                  <p>• {discordServices.nitroBoost.quality}</p>
                  <p>• {discordServices.nitroBoost.note}</p>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">{discordServices.nitroBoost.price}</Badge>
                  <Button 
                    size="sm" 
                    onClick={() => handlePurchase('נייטרו בוסט', discordServices.nitroBoost.price)}
                    className="bg-blue-500 hover:bg-blue-600"
                  >
                    קנה
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Server Boosts */}
            <Card className="bg-black/30 border-blue-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-400" />
                  בוסטים לשרת
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {discordServices.boosts.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="text-white">
                      <div className="font-medium">{item.duration}</div>
                      <div className="text-sm text-gray-400">{item.amount}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">{item.price}</Badge>
                      <Button 
                        size="sm" 
                        onClick={() => handlePurchase('בוסטים לשרת', `${item.duration} - ${item.amount}`)}
                        className="bg-blue-500 hover:bg-blue-600"
                      >
                        קנה
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Online Members */}
            <Card className="bg-black/30 border-green-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-400" />
                  חברים מחוברים
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {discordServices.membersOnline.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <span className="text-white font-medium">{item.amount} חברים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300">{item.price}</Badge>
                      <Button 
                        size="sm" 
                        onClick={() => handlePurchase('חברים מחוברים', item.amount)}
                        className="bg-green-500 hover:bg-green-600"
                      >
                        קנה
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Offline Members */}
            <Card className="bg-black/30 border-gray-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  חברים לא מחוברים
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {discordServices.membersOffline.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <span className="text-white font-medium">{item.amount} חברים</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gray-500/20 text-gray-300">{item.price}</Badge>
                      <Button 
                        size="sm" 
                        onClick={() => handlePurchase('חברים לא מחוברים', item.amount)}
                        className="bg-gray-500 hover:bg-gray-600"
                      >
                        קנה
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-black/30 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="text-center text-sm text-gray-300">
                <p>• איכות גבוה! הבוטים נראים כמו אנשים אמיתיים</p>
                <p>• תמונות פרופיל, שמות רנדומליים וביו רנדומלי</p>
                <p>• מחוברים 24/7</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Spotify Services */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                🎵
              </div>
              ספוטיפיי פרימיום
            </h2>
            <p className="text-gray-300">משולם באופן חוקי • קונה על המשתמש שלך/משתמש חדש</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {spotifyServices.map((item, index) => (
              <Card key={index} className="bg-black/30 border-green-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-center">{item.duration}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">{item.price}</div>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-300">{item.warranty}</Badge>
                  </div>
                  <Button 
                    className="w-full bg-green-500 hover:bg-green-600"
                    onClick={() => handlePurchase('ספוטיפיי פרימיום', item.duration)}
                  >
                    קנה עכשיו
                  </Button>
                  {item.duration === "2-3 חודשים" && (
                    <p className="text-xs text-gray-400 text-center">
                      משתמש חדש • עד 2 החלפות למשתמש
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">איך לקנות?</h2>
          </div>
          
          {selectedService && (
            <Card className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4">בחרת: {selectedService}</h3>
                <p className="text-orange-200 mb-4">לביצוע הרכישה, צור קשר איתנו:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.open('https://discord.gg/UTmEhW76qk', '_blank')}
                    className="bg-indigo-600 hover:bg-indigo-700 flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    פתח טיקט בדיסקורד
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button 
                    onClick={() => window.open('https://wa.me/972537771602', '_blank')}
                    className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                  >
                    📱
                    שלח הודעה בווטסאפ
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-black/30 border-indigo-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-indigo-400" />
                  שרת הדיסקורד שלנו
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">פתח טיקט בשרת הדיסקורד שלנו לתמיכה מהירה</p>
                <Button 
                  onClick={() => window.open('https://discord.gg/UTmEhW76qk', '_blank')}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 flex items-center gap-2"
                >
                  הצטרף לשרת
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/30 border-green-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  📱
                  ווטסאפ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">שלח לנו הודעה בווטסאפ לתמיכה אישית</p>
                <div className="text-center mb-4">
                  <div className="text-lg font-mono text-green-400">0537771602</div>
                </div>
                <Button 
                  onClick={() => window.open('https://wa.me/972537771602', '_blank')}
                  className="w-full bg-green-600 hover:bg-green-700 flex items-center gap-2"
                >
                  שלח הודעה
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-white/10">
          <p className="text-gray-400">© 2024 Social Media Boost - כל הזכויות שמורות</p>
          <p className="text-sm text-gray-500 mt-2">שירותי חיזוק רשתות חברתיות מקצועיים ואמינים</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
