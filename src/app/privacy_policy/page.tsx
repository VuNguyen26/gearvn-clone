import {
  User,
  MapPin,
  Phone,
  Mail,
  Package,
  Boxes,
  CalendarDays,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "muc-dich-thu-thap",
      title: "1. Mục đích và phạm vi thu thập thông tin",
      content: (
        <>
          <p>
            GEARVN không bán, chia sẻ hay trao đổi thông tin cá nhân của khách hàng
            thu thập trên trang web cho một bên thứ ba nào khác.
          </p>

          <p className="mt-4">
            Thông tin cá nhân thu thập được sẽ chỉ được sử dụng trong nội bộ công ty.
            Khi bạn liên hệ đăng ký dịch vụ, thông tin cá nhân mà GEARVN thu thập bao gồm:
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
                <User size={28} />
              </div>
              <span className="text-[18px]">Họ và tên</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
                <MapPin size={28} />
              </div>
              <span className="text-[18px]">Địa chỉ</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
                <Phone size={28} />
              </div>
              <span className="text-[18px]">Điện thoại</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
                <Mail size={28} />
              </div>
              <span className="text-[18px]">Email</span>
            </div>
          </div>

          <p className="mt-6">
            Ngoài thông tin cá nhân là các thông tin về dịch vụ:
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
                <Package size={28} />
              </div>
              <span className="text-[18px]">Tên sản phẩm</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
                <Boxes size={28} />
              </div>
              <span className="text-[18px]">Số lượng</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
                <CalendarDays size={28} />
              </div>
              <span className="text-[18px]">Thời gian giao nhận sản phẩm</span>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "pham-vi-su-dung",
      title: "2. Phạm vi sử dụng thông tin",
      content: (
        <>
          <p>
            Thông tin cá nhân thu thập được sẽ chỉ được GEARVN sử dụng trong nội bộ công ty
            và cho một hoặc tất cả các mục đích sau đây:
          </p>
          <ul className="mt-4 list-disc pl-6">
            <li>Hỗ trợ khách hàng</li>
            <li>Cung cấp thông tin liên quan đến dịch vụ</li>
            <li>
              Xử lý đơn đặt hàng và cung cấp dịch vụ và thông tin qua trang web của chúng tôi
              theo yêu cầu của bạn
            </li>
          </ul>
          <p className="mt-4">
            Chúng tôi có thể sẽ gửi thông tin sản phẩm, dịch vụ mới, thông tin về các sự kiện
            sắp tới hoặc thông tin tuyển dụng nếu quý khách đăng ký nhận email thông báo.
          </p>
          <p className="mt-4">
            Trong trường hợp có yêu cầu của pháp luật, Công ty có trách nhiệm hợp tác cung cấp
            thông tin cá nhân khách hàng khi có yêu cầu từ cơ quan tư pháp bao gồm: viện kiểm sát,
            tòa án, cơ quan công an điều tra liên quan đến hành vi vi phạm pháp luật nào đó của
            khách hàng. Ngoài ra không ai có quyền xâm phạm vào thông tin cá nhân của khách hàng.
          </p>
        </>
      ),
    },
    {
      id: "thoi-gian-luu-tru",
      title: "3. Thời gian lưu trữ thông tin",
      content: (
        <p>
          Đối với thông tin cá nhân, GEARVN chỉ xóa đi dữ liệu này nếu khách hàng có yêu cầu,
          khách hàng yêu cầu gửi mail về <strong>cskh@gearvn.com</strong>.
        </p>
      ),
    },
    {
      id: "doi-tuong-tiep-can",
      title: "4. Những người hoặc tổ chức có thể được tiếp cận với thông tin cá nhân",
      content: (
        <>
          <p>
            Đối tượng được tiếp cận với thông tin cá nhân của khách hàng thuộc một trong những
            trường hợp sau:
          </p>
          <ul className="mt-4 list-disc pl-6">
            <li>Công Ty TNHH Thương Mại GEARVN</li>
            <li>
              Các đối tác có ký hợp đồng thực hiện một phần dịch vụ do Công Ty TNHH Thương Mại
              GEARVN. Các đối tác này sẽ nhận được những thông tin theo thỏa thuận hợp đồng
              để tiến hành hỗ trợ người dùng sử dụng dịch vụ do Công Ty cung cấp.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "dia-chi-don-vi",
      title: "5. Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân",
      content: (
        <>
          <p>Công Ty TNHH Thương Mại GEARVN</p>
          <ul className="mt-4 list-disc pl-6">
            <li>Địa chỉ: 82 Hoàng Hoa Thám, Phường 12, Quận Tân Bình, TP Hồ Chí Minh</li>
            <li>Điện thoại: 1900 6175</li>
            <li>Website: www.gearvn.com</li>
            <li>Email: cskh@gearvn.com</li>
          </ul>
        </>
      ),
    },
    {
      id: "phuong-tien-chinh-sua",
      title: "6. Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình",
      content: (
        <>
          <p>
            GEARVN không thu thập thông tin khách hàng qua trang web, thông tin cá nhân khách hàng
            được thực hiện thu thập qua email liên hệ đặt mua sản phẩm, dịch vụ gửi về hộp mail của
            chúng tôi: <strong>cskh@gearvn.com</strong> hoặc số điện thoại liên hệ đặt mua sản phẩm
            gọi về Hotline <strong>1900 6975</strong>.
          </p>
          <p className="mt-4">
            Bạn có thể liên hệ địa chỉ email cùng số điện thoại trên để yêu cầu GEARVN chỉnh sửa
            dữ liệu cá nhân của mình.
          </p>
        </>
      ),
    },
    {
      id: "co-che-khieu-nai",
      title:
        "7. Cơ chế tiếp nhận và giải quyết khiếu nại của người tiêu dùng liên quan đến việc thông tin cá nhân bị sử dụng sai mục đích hoặc phạm vi đã thông báo",
      content: (
        <>
          <p>
            Tại GEARVN, việc bảo vệ thông tin cá nhân của bạn là rất quan trọng, bạn được đảm bảo
            rằng thông tin cung cấp cho chúng tôi sẽ được bảo mật, GEARVN cam kết không chia sẻ,
            bán hoặc cho thuê thông tin cá nhân của bạn cho bất kỳ người nào khác.
          </p>
          <p className="mt-4">GEARVN cam kết chỉ sử dụng các thông tin của bạn vào các trường hợp sau:</p>
          <ul className="mt-4 list-disc pl-6">
            <li>Nâng cao chất lượng dịch vụ dành cho khách hàng</li>
            <li>Giải quyết các tranh chấp, khiếu nại khi cơ quan pháp luật có yêu cầu</li>
          </ul>
          <p className="mt-4">
            GEARVN hiểu rằng quyền lợi của bạn trong việc bảo vệ thông tin cá nhân cũng chính là
            trách nhiệm của chúng tôi nên trong bất kỳ trường hợp có thắc mắc, góp ý nào liên quan
            đến chính sách bảo mật của GEARVN, và liên quan đến việc thông tin cá nhân bị sử dụng sai
            mục đích hoặc phạm vi đã thông báo vui lòng liên hệ qua số Hotline <strong>1900 6975</strong>{" "}
            hoặc email: <strong>cskh@gearvn.com</strong>.
          </p>
        </>
      ),
    },
  ];

  return (
    <main className="bg-[#f3f4f6] text-black">
      <section className="mx-auto max-w-[1400px] px-4 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="h-fit rounded-xl bg-[#f1f1f1] p-6 shadow-sm lg:sticky lg:top-24">
            <ul className="space-y-4 text-[18px] leading-7">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block transition hover:text-red-600"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="rounded-xl bg-white p-6 shadow-sm md:p-10">
            <div className="space-y-12">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-3xl font-bold leading-tight">{section.title}</h2>
                  <div className="mt-5 space-y-4 text-[18px] leading-8 text-gray-800">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}