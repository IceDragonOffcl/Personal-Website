import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';
import Tippy from '@tippyjs/react';

  return (
    <>
      <div className="bg-neutral-800/10 shadow-xl rounded-lg w-full h-auto mt-6">
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
              <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                <div className="flex items-center">
                <p className="flex items-center text-white text-4xl font-semibold">
                  10 Kasımın Anlamı Ve Önemi
                </p>
                    </span>
                  </Tippy>
            
                </div>
                <p className="text-white/50 text-md mt-3">
10 Kasım Atatürk’ü Anma Günü ve Atatürk Haftası’nda her yıl anma etkinlikleri düzenleniyor. 10 Kasım 1938’de Türkiye Cumhuriyeti'nin kurucusu ulu önder Mustafa Kemal Atatürk, çok sevdiği ülkesine ve hayata veda etti. Eğitime verdiği önem, kadına verdiği değer, hayvanlara karşı sevgisi ile herkese örnek olması gereken Atatürk’ün ölümü halkı da derin yasa boğdu. Sadece Türk halkını değil farklı milletlerin de sık sık örnek aldığı ve sevdiği bir liderdi. 1938 yılı 10 Kasım günü saat 9'u 5 geçe aramızdan ayrılan Atatürk o gün çeşitli etkinliklerle anılıyor.
                </p>
              </div>
              <div className={`order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full pulse-avatar-online `}>
                <img alt="umutbayraktar" src={`https://tenor.com/view/vatan-atat%C3%BCrk-t%C3%BCrkiye-gazi-mustafa-kemal-gif-13728281`} width="160" height="160" className={`bg-neutral-700 w-[160px] h-[160px] rounded-full`} />
                  </div>
                </div>
              ))}
        </div>
      </div>


    </>
  )
}
