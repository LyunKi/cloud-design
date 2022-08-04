import React from 'react'
import { View, SafeAreaView } from 'react-native'
import Icon from '@cloud-design/icons'

const ICON_NAMES =
  'activity,alert-circle,alert-triangle,archive,arrow-back,arrow-circle-down,arrow-circle-left,arrow-circle-right,arrow-circle-up,arrow-down,arrow-downward,arrow-forward,arrow-ios-back,arrow-ios-downward,arrow-ios-forward,arrow-ios-upward,arrow-left,arrow-right,arrow-up,arrow-upward,arrowhead-down,arrowhead-left,arrowhead-right,arrowhead-up,at,attach-2,attach,award,backspace,bar-chart-2,bar-chart,battery,behance,bell-off,bell,bluetooth,book-open,book,bookmark,briefcase,browser,brush,bulb,calendar,camera,car,cast,charging,checkmark-circle-2,checkmark-circle,checkmark-square-2,checkmark-square,checkmark,chevron-down,chevron-left,chevron-right,chevron-up,clipboard,clock,close-circle,close-square,close,cloud-download,cloud-upload,code-download,code,collapse,color-palette,color-picker,compass,copy,corner-down-left,corner-down-right,corner-left-down,corner-left-up,corner-right-down,corner-right-up,corner-up-left,corner-up-right,credit-card,crop,cube,diagonal-arrow-left-down,diagonal-arrow-left-up,diagonal-arrow-right-down,diagonal-arrow-right-up,done-all,download,droplet-off,droplet,edit-2,edit,email,expand,external-link,eye-off-2,eye-off,eye,facebook,file-add,file-remove,file-text,file,film,flag,flash-off,flash,flip-2,flip,folder-add,folder-remove,folder,funnel,gift,github,globe-2,globe-3,globe,google,grid,hard-drive,hash,headphones,heart,home,image-2,image,inbox,info,keypad,layers,layout,link-2,link,linkedin,list,lock,log-in,log-out,map,maximize,menu-2,menu-arrow,menu,message-circle,message-square,mic-off,mic,minimize,minus-circle,minus-square,minus,monitor,moon,more-horizontal,more-vertical,move,music,navigation-2,navigation,npm,options-2,options,pantone,paper-plane,pause-circle,people,percent,person-add,person-delete,person-done,person-remove,person,phone-call,phone-missed,phone-off,phone,pie-chart-2,pie-chart,pin,play-circle,plus-circle,plus-square,plus,power,pricetags,printer,question-mark-circle,question-mark,radio-button-off,radio-button-on,radio,recording,refresh,repeat,rewind-left,rewind-right,save,scissors,search,settings-2,settings,shake,share,shield-off,shield,shopping-bag,shopping-cart,shuffle-2,shuffle,skip-back,skip-forward,slash,smartphone,smiling-face,speaker,square,star,stop-circle,sun,swap,sync,text,thermometer-minus,thermometer-plus,thermometer,toggle-left,toggle-right,trash-2,trash,trending-down,trending-up,tv,twitter,umbrella,undo,unlock,upload,video-off,video,volume-down,volume-mute,volume-off,volume-up,wifi-off,wifi'

export default function IconList() {
  const icons = ICON_NAMES.split(',')
  return (
    <SafeAreaView>
      <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
        {icons.map((item) => {
          return (
            <View
              key={item}
              style={{
                height: 60,
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon name={item} size={24} />
            </View>
          )
        })}
      </View>
    </SafeAreaView>
  )
}
