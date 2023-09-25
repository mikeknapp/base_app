import React from "react"
import { TextLoading } from "../exports"

export function HomePage() {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="content-wrapper p-2">
      {isLoading ? (
        <TextLoading />
      ) : (
        <>
          <h1>Welcome to the App</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Placerat
            vestibulum lectus mauris ultrices eros in cursus turpis. Enim praesent elementum facilisis leo vel
            fringilla. A diam maecenas sed enim ut sem viverra. Porttitor eget dolor morbi non arcu. Ut placerat orci
            nulla pellentesque. Nunc lobortis mattis aliquam faucibus purus. Risus commodo viverra maecenas accumsan
            lacus vel facilisis volutpat est. Leo integer malesuada nunc vel risus commodo viverra. Turpis cursus in hac
            habitasse platea dictumst quisque. Eget lorem dolor sed viverra ipsum nunc. Quis viverra nibh cras pulvinar.
            Tortor at auctor urna nunc.
          </p>

          <p>
            Turpis egestas sed tempus urna. Pulvinar elementum integer enim neque. Est ullamcorper eget nulla facilisi
            etiam dignissim. Amet nisl purus in mollis. Etiam dignissim diam quis enim lobortis. Pellentesque habitant
            morbi tristique senectus et netus et malesuada. Et ligula ullamcorper malesuada proin libero nunc consequat
            interdum. Donec massa sapien faucibus et molestie ac feugiat. Ac tortor vitae purus faucibus ornare. Etiam
            erat velit scelerisque in dictum non consectetur a erat. Id leo in vitae turpis massa. Pharetra diam sit
            amet nisl suscipit adipiscing.
          </p>

          <p>
            Morbi tincidunt augue interdum velit euismod in pellentesque. Vel risus commodo viverra maecenas accumsan
            lacus vel facilisis. Porta lorem mollis aliquam ut porttitor leo. Semper eget duis at tellus at urna
            condimentum mattis. Amet risus nullam eget felis. Et malesuada fames ac turpis egestas. Urna cursus eget
            nunc scelerisque viverra mauris in aliquam sem. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper
            malesuada. Ultrices eros in cursus turpis massa. Ornare suspendisse sed nisi lacus. Ullamcorper morbi
            tincidunt ornare massa eget egestas. At tempor commodo ullamcorper a lacus vestibulum sed. Mi bibendum neque
            egestas congue quisque egestas diam in arcu. Luctus accumsan tortor posuere ac. Molestie at elementum eu
            facilisis sed. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Platea dictumst
            quisque sagittis purus sit amet volutpat.
          </p>

          <p>
            Praesent tristique magna sit amet purus. Urna cursus eget nunc scelerisque viverra mauris in. Sagittis nisl
            rhoncus mattis rhoncus urna neque viverra. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada
            proin libero. Nec dui nunc mattis enim ut tellus elementum. Potenti nullam ac tortor vitae purus faucibus.
            Egestas quis ipsum suspendisse ultrices. Id venenatis a condimentum vitae sapien pellentesque habitant
            morbi. Vitae elementum curabitur vitae nunc sed. Amet cursus sit amet dictum sit amet justo donec enim.
            Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Sagittis orci a scelerisque purus semper
            eget duis. Quisque egestas diam in arcu cursus. Bibendum arcu vitae elementum curabitur. Eu feugiat pretium
            nibh ipsum consequat nisl vel pretium. Elementum curabitur vitae nunc sed velit.
          </p>

          <p>
            Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Quisque egestas diam in arcu.
            Eros in cursus turpis massa tincidunt dui ut. Placerat orci nulla pellentesque dignissim enim sit amet
            venenatis. Vitae aliquet nec ullamcorper sit amet. Mauris a diam maecenas sed enim ut. Neque viverra justo
            nec ultrices dui sapien. Cras adipiscing enim eu turpis egestas. Nibh tellus molestie nunc non blandit
            massa. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Et malesuada fames ac turpis egestas.
          </p>

          <p>
            Fermentum iaculis eu non diam phasellus vestibulum. Nisl nisi scelerisque eu ultrices vitae auctor eu augue
            ut. Nibh ipsum consequat nisl vel pretium lectus quam. Habitasse platea dictumst vestibulum rhoncus est
            pellentesque elit ullamcorper dignissim. Egestas maecenas pharetra convallis posuere morbi leo. Viverra nam
            libero justo laoreet. In vitae turpis massa sed. Nam aliquam sem et tortor. Bibendum at varius vel pharetra
            vel. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Nunc id cursus metus aliquam
            eleifend mi. Vulputate odio ut enim blandit volutpat. Elementum curabitur vitae nunc sed velit dignissim.
          </p>

          <p>
            Purus semper eget duis at tellus at urna condimentum. Cursus sit amet dictum sit amet justo donec enim diam.
            Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Pharetra diam sit amet nisl suscipit adipiscing
            bibendum est ultricies. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Neque ornare
            aenean euismod elementum nisi quis eleifend quam adipiscing. Nisl vel pretium lectus quam id leo in.
            Ultrices neque ornare aenean euismod elementum nisi. Eget nullam non nisi est. At imperdiet dui accumsan
            sit.
          </p>

          <p>
            Quam viverra orci sagittis eu volutpat odio facilisis. Id porta nibh venenatis cras sed felis eget velit
            aliquet. Elit at imperdiet dui accumsan sit. Nisl nunc mi ipsum faucibus vitae aliquet. Viverra adipiscing
            at in tellus integer feugiat scelerisque varius. Facilisi etiam dignissim diam quis. Tortor aliquam nulla
            facilisi cras fermentum. In tellus integer feugiat scelerisque varius morbi. Blandit turpis cursus in hac.
            Mi ipsum faucibus vitae aliquet.
          </p>

          <p>
            Suspendisse in est ante in nibh mauris. Diam volutpat commodo sed egestas egestas fringilla phasellus.
            Blandit cursus risus at ultrices mi tempus. Ornare massa eget egestas purus viverra accumsan in nisl nisi.
            Nec nam aliquam sem et tortor consequat id. Eu lobortis elementum nibh tellus molestie. Adipiscing vitae
            proin sagittis nisl rhoncus mattis rhoncus urna. Integer feugiat scelerisque varius morbi enim. Adipiscing
            enim eu turpis egestas pretium. Urna id volutpat lacus laoreet non curabitur gravida. Massa tempor nec
            feugiat nisl pretium fusce id velit ut. Maecenas sed enim ut sem viverra aliquet eget sit amet.
          </p>

          <p>
            Nisl purus in mollis nunc sed id semper risus in. Etiam tempor orci eu lobortis elementum nibh tellus
            molestie. Interdum velit laoreet id donec ultrices tincidunt arcu. Urna nunc id cursus metus. Egestas diam
            in arcu cursus euismod quis viverra nibh cras. Euismod quis viverra nibh cras pulvinar mattis nunc.
            Malesuada nunc vel risus commodo viverra maecenas. Egestas fringilla phasellus faucibus scelerisque eleifend
            donec pretium vulputate. Integer feugiat scelerisque varius morbi. Sociis natoque penatibus et magnis dis
            parturient montes. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Enim
            blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Tellus at urna condimentum mattis
            pellentesque id. Pretium fusce id velit ut tortor. Feugiat nisl pretium fusce id. Eu mi bibendum neque
            egestas congue quisque. Mauris pellentesque pulvinar pellentesque habitant morbi.
          </p>
        </>
      )}
    </div>
  )
}
