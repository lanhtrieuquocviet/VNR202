import { useEffect, useState } from 'react';
import './App.css';

/* ─── IMAGE PLACEHOLDER ──────────────────────────────────── */
function ImgFrame({ caption, label, height = 220, src }) {
  return (
    <div className="img-frame" style={{ height }}>
      <div className="img-inner" style={{ minHeight: height }}>
        {src
          ? <img src={src} alt={caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : <>
              <span className="img-placeholder-icon">🖼</span>
              <span className="img-placeholder-text">{label}</span>
            </>
        }
      </div>
      {caption && (
        <div className="img-caption">
          {label && <strong>{label}</strong>}
          {caption}
        </div>
      )}
    </div>
  );
}

/* ─── ORNAMENTAL DIVIDER ─────────────────────────────────── */
function Divider({ label }) {
  return (
    <div className="section-divider">
      <div className="sd-line" />
      <div className="sd-center">
        <span className="sd-star">✦</span>
        {label}
        <span className="sd-star">✦</span>
      </div>
      <div className="sd-line r" />
    </div>
  );
}

/* ─── NAV DATA ───────────────────────────────────────────── */
const navLinks = [
  { href: '#boi-canh',   label: 'Bối cảnh' },
  { href: '#quan-su',    label: 'Quân sự' },
  { href: '#ngoai-giao', label: 'Ngoại giao' },
  { href: '#paris',      label: 'Paris 1973' },
  { href: '#chinh-tri',  label: 'Chính trị' },
  { href: '#bai-hoc',    label: 'Bài học' },
];

/* ─── APP ────────────────────────────────────────────────── */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      let cur = '';
      navLinks.forEach(({ href }) => {
        const el = document.querySelector(href);
        if (el && window.scrollY >= el.offsetTop - 120) cur = href;
      });
      setActiveNav(cur);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      {/* ── NAV ── */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-logo">VNR<span>·</span> 202</div>
        <ul className="nav-links">
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} className={activeNav === l.href ? 'active' : ''}>{l.label}</a>
            </li>
          ))}
        </ul>
        <button className={`nav-hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      <ul className={`nav-mobile${menuOpen ? ' open' : ''}`}>
        {navLinks.map(l => (
          <li key={l.href}>
            <a href={l.href} className={activeNav === l.href ? 'active' : ''} onClick={() => setMenuOpen(false)}>{l.label}</a>
          </li>
        ))}
      </ul>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <div className="hero">
        <div className="hero-ornament-br" />
        <div className="hero-ornament-tl" />
        <div className="hero-top-rule" />

        <div className="hero-badge">Lịch sử Cách mạng Việt Nam · 1954 — 1975</div>
        <p className="hero-eyebrow">Bản lĩnh và Trí tuệ của Đảng Cộng sản Việt Nam</p>

        <h1 className="hero-title">
          Nghệ thuật Kết hợp<br />
          <span className="gold">Quân sự & Ngoại giao</span>
        </h1>

        <p className="hero-subtitle">
          trong Kháng chiến chống Mỹ cứu nước (1954 – 1975)
        </p>

        <div className="hero-rule">
          <div className="hero-rule-line" />
          <div className="hero-rule-diamond" />
          <div className="hero-rule-line r" />
        </div>

        <p className="hero-intro">
          Trong cuộc đọ sức lịch sử với đế quốc Mỹ – một cường quốc có tiềm lực kinh tế và quân sự vượt trội,
          Đảng ta đã nhận thức sâu sắc rằng: không thể chỉ giành chiến thắng bằng sức mạnh vũ khí đơn thuần.
          Nghệ thuật vận dụng linh hoạt, nhịp nhàng mối quan hệ máu thịt giữa <em>Đấu tranh Quân sự</em> và <em>Đấu tranh Ngoại giao</em> đã
          trở thành đòn bẩy chiến lược. Quân sự mở đường tạo thế, Ngoại giao khôn khéo chốt hạ; hai mặt trận tuy hai mà một,
          cùng hướng tới mục tiêu tối thượng: <strong>Độc lập, Tự do và Thống nhất Tổ quốc.</strong>
        </p>

        <div className="hero-rule">
          <div className="hero-rule-line" />
          <div className="hero-rule-diamond" />
          <div className="hero-rule-line r" />
        </div>

        <div className="hero-cta">
          <a href="#boi-canh" className="btn-primary">Bắt đầu tìm hiểu</a>
          <a href="#paris" className="btn-outline">Hiệp định Paris 1973</a>
        </div>
        <div className="hero-bottom-rule" />
      </div>

      <Divider label="Phần thứ nhất" />

      {/* ══════════════════════════════════════════
          PHẦN 1 — BỐI CẢNH & CHỦ TRƯƠNG
      ══════════════════════════════════════════ */}
      <section id="boi-canh" className="page-section">
        <div className="section-header">
         
          <div className="section-number">Phần thứ nhất</div>
          <h2 className="section-title">
            Bối cảnh và Chủ trương:<br />
            <em>Ngoại giao và Quân sự – Hai mặt trận, một mục tiêu</em>
          </h2>
        </div>

        <div className="context-intro">
          <div className="context-body">
            <div className="body-lead">Bối cảnh lịch sử (1954 – 1975)</div>
            <p>
              Sau Hiệp định Geneva 1954, đế quốc Mỹ nhảy vào miền Nam Việt Nam, thiết lập chế độ thực dân kiểu mới
              nhằm chia cắt đất nước lâu dài. Qua các đời tổng thống, Mỹ liên tục leo thang từ <em>"Chiến tranh đặc biệt"</em>,
              <em> "Chiến tranh cục bộ"</em> đến <em>"Việt Nam hóa chiến tranh"</em>, ném xuống Việt Nam một lượng bom đạn
              khổng lồ chưa từng có trong lịch sử nhân loại.
            </p>

            <div className="body-lead" style={{ marginTop: 28 }}>Chủ trương chiến lược của Đảng</div>
            <p>
              Đứng trước kẻ thù có sức mạnh quân sự áp đảo, chủ trương vĩ đại được Đảng đưa ra là
              <strong> kết hợp chặt chẽ ba mặt trận: Quân sự – Chính trị – Ngoại giao</strong> thành sức mạnh
              tổng hợp không thể chia cắt.
            </p>

            <div className="two-point-list">
              <div className="tp-item">
                <div className="tp-dot" />
                <div>
                  <div className="tp-title">Ngoại giao là mặt trận chủ động</div>
                  <div className="tp-text">Không chỉ phản ánh kết quả chiến trường — ngoại giao mở mũi tiến công trên trường quốc tế để tố cáo tội ác của Mỹ, làm rõ tính chính nghĩa của cuộc kháng chiến.</div>
                </div>
              </div>
              <div className="tp-item">
                <div className="tp-dot" />
                <div>
                  <div className="tp-title">Chiến trường làm đòn bẩy</div>
                  <div className="tp-text">Sức mạnh trên chiến trường là cơ sở để đàm phán ngoại giao. Chủ tịch Hồ Chí Minh từng căn dặn: <em>"Thực lực là cái chiêng mà ngoại giao là cái tiếng. Chiêng có to tiếng mới lớn."</em></div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <ImgFrame label="Tư liệu · 1954" caption="Lễ ký Hiệp định Geneva, 20/7/1954 — Tạm thời chia đôi đất nước Việt Nam" height={220} src="https://vnanet.vn/Data/Articles/2019/07/17/3975069/vna_potal_ky_niem_65_nam_ngay_ky_hiep_dinh_geneva_2071954_-_2072019_dau_moc_quan_trong_cua_su_nghiep_cach_mang_va_ngoai_giao_viet_nam_140755450_stand.jpg" />
            <ImgFrame label="Tư liệu · 1965" caption={'Quân Mỹ đổ bộ vào Đà Nẵng, mở đầu leo thang "Chiến tranh cục bộ"'} height={180} src="https://nghiencuuquocte.org/wp-content/uploads/2020/03/08.jpg" />
          </div>
        </div>

        <div className="subsection-label">Âm mưu leo thang chiến tranh của Mỹ</div>
        <div className="strategy-grid">
          <div className="strategy-card">
            <div className="strategy-period">1954 – 1960</div>
            <div className="strategy-name">"Chiến tranh đơn phương"</div>
            <div className="strategy-desc">Dùng chính quyền Ngô Đình Diệm để dập tắt phong trào cách mạng, thực hiện "tố cộng, diệt cộng", phá hoại Hiệp định Geneva.</div>
          </div>
          <div className="strategy-card">
            <div className="strategy-period">1961 – 1964</div>
            <div className="strategy-name">"Chiến tranh đặc biệt"</div>
            <div className="strategy-desc">Dùng quân đội Sài Gòn với cố vấn và vũ khí Mỹ. Lập ấp chiến lược hòng tách dân khỏi cách mạng. Quân số cố vấn Mỹ lên đến hơn 16.000 người.</div>
          </div>
          <div className="strategy-card">
            <div className="strategy-period">1965 – 1968</div>
            <div className="strategy-name">"Chiến tranh cục bộ"</div>
            <div className="strategy-desc">Đưa hơn nửa triệu quân Mỹ trực tiếp tham chiến, ném bom phá hoại miền Bắc hòng khuất phục nhân dân Việt Nam bằng sức mạnh vũ lực.</div>
          </div>
          <div className="strategy-card">
            <div className="strategy-period">1969 – 1973</div>
            <div className="strategy-name">"Việt Nam hóa chiến tranh"</div>
            <div className="strategy-desc">Rút dần quân Mỹ, dùng người Việt đánh người Việt. Tiếp tục ném bom, cung cấp vũ khí và tài chính cho chính quyền Sài Gòn.</div>
          </div>
        </div>

        <div className="grid-3-col">
          <ImgFrame label="Ảnh tư liệu" caption="Chiến lược ấp chiến lược — kiểm soát nông thôn miền Nam" height={180} src="https://1.bp.blogspot.com/-5d6KOwBOf2g/X1-Hl8CQNKI/AAAAAAAAfms/3DVi50eADNM5AJTTK5fo0817Z-1Q3gzmACLcBGAsYHQ/w640-h414/%25E1%25BA%25A4p%2Bchi%25E1%25BA%25BFn%2Bl%25C6%25B0%25E1%25BB%25A3c%2BH%25C3%25B2a%2BL%25E1%25BA%25A1c%2BB_result.jpg" />
          <ImgFrame label="Ảnh tư liệu" caption="Bom Mỹ trút xuống miền Bắc Việt Nam trong chiến dịch Rolling Thunder" height={180} src="https://th.bing.com/th/id/R.b6c04af0ac934268899010124f3c66e0?rik=q0g7oJ1vxm%2bqFA&pid=ImgRaw&r=0" />
          <ImgFrame label="Ảnh tư liệu" caption={'Quân đội Sài Gòn trong chiến lược "Việt Nam hóa chiến tranh"'} height={180} src="https://th.bing.com/th/id/R.046d55df5e1b3d48c78129b9491c0708?rik=OVgCsa7iY4w00Q&pid=ImgRaw&r=0" />
        </div>

        <div className="callout-box">
          <div className="callout-icon">✒️</div>
          <div>
            <div className="callout-title">Lời căn dặn của Chủ tịch Hồ Chí Minh</div>
            <p className="callout-text">
              <em>"Thực lực là cái chiêng mà ngoại giao là cái tiếng. Chiêng có to tiếng mới lớn."</em>
              <br /><br />
              Câu nói ấy là cốt lõi triết lý của Người: <strong>sức mạnh quân sự và chính trị trong nước là nền tảng</strong>
              không thể thiếu để ngoại giao có trọng lượng. Không có thực lực, mọi lời nói ngoại giao chỉ là hư không.
            </p>
          </div>
        </div>
      </section>

      <Divider label="Phần thứ hai" />

      {/* ══════════════════════════════════════════
          PHẦN 2 — QUÂN SỰ
      ══════════════════════════════════════════ */}
      <div className="full-bg">
        <section id="quan-su" className="page-section">
          <div className="section-header">
         
            <div className="section-number">Phần thứ hai</div>
            <h2 className="section-title">
              Nghệ thuật <em>"Vừa đánh vừa đàm":</em><br />
              Dùng thắng lợi Quân sự tạo bước ngoặt
            </h2>
          </div>

          <div className="callout-box" style={{ marginBottom: 40 }}>
            <div className="callout-icon">⚔</div>
            <div>
              <div className="callout-title">Chiến lược "Vừa đánh vừa đàm"</div>
              <p className="callout-text">
                Đây là một nét đặc sắc trong nghệ thuật quân sự Việt Nam. Chúng ta không chờ đến khi kết thúc chiến tranh
                mới đàm phán, mà <strong>dùng chính những đòn giáng trả trên chiến trường để ép đối phương phải ngồi vào
                bàn hội nghị trong thế yếu</strong>. Mỗi chiến thắng trên chiến trường là một đòn bẩy trực tiếp trên bàn
                đàm phán ngoại giao.
              </p>
            </div>
          </div>

          <div className="formula-bar">
            <div className="formula-step">Thắng lợi quân sự</div>
            <div className="formula-step active">Làm lung lay ý chí địch</div>
            <div className="formula-step">Gây sức ép ngoại giao</div>
            <div className="formula-step active">Buộc địch đàm phán ở thế yếu</div>
            <div className="formula-step">Thắng lợi ngoại giao</div>
          </div>

          <div className="subsection-label">Những mốc son tạo bước ngoặt ngoại giao</div>

          <div className="battle-list">
            <div className="battle-entry">
              <div className="battle-year-col">
                <div className="battle-yr">1963</div>
                <div className="battle-tag-badge">Chiến tranh đặc biệt</div>
              </div>
              <div className="battle-main">
                <div className="battle-name">Chiến thắng Ấp Bắc</div>
                <div className="battle-loc">📍 Mỹ Tho, Tiền Giang</div>
                <div className="battle-cols">
                  <div>
                    <div className="battle-col-label mil">Thắng lợi Quân sự</div>
                    <div className="battle-col-text">Đánh dấu sự phá sản của chiến thuật <em>"trực thăng vận, thiết xa vận"</em>. Chứng minh quân dân miền Nam hoàn toàn có thể đánh bại quân viễn chinh Mỹ hiện đại dù lực lượng và vũ khí yếu hơn nhiều lần.</div>
                  </div>
                  <div>
                    <div className="battle-col-label dip">Tác động Ngoại giao</div>
                    <div className="battle-col-text">Gây tranh cãi dữ dội trong nội bộ Washington. Chứng minh chiến lược "Chiến tranh đặc biệt" thất bại về mặt quân sự, đặt dấu hỏi lớn về toàn bộ chiến lược của Mỹ tại Việt Nam.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="battle-entry highlight">
              <div className="battle-year-col">
                <div className="battle-yr">1968</div>
                <div className="battle-tag-badge">Bước ngoặt lịch sử</div>
              </div>
              <div className="battle-main">
                <div className="battle-name">Tổng tiến công và nổi dậy Tết Mậu Thân</div>
                <div className="battle-loc">📍 Toàn miền Nam — 37 tỉnh thành, các đô thị lớn</div>
                <div className="battle-cols">
                  <div>
                    <div className="battle-col-label mil">"Cú đấm thép" — Bước ngoặt</div>
                    <div className="battle-col-text">Đòn đánh bất ngờ vào tận sào huyệt kẻ thù tại các đô thị miền Nam đã <strong>làm lung lay tận gốc ý chí xâm lược</strong> của giới cầm quyền Mỹ. Quân giải phóng tiến công thẳng vào Đại sứ quán Mỹ tại Sài Gòn — phá tan "ánh sáng cuối đường hầm" mà Washington đang rao giảng.</div>
                  </div>
                  <div>
                    <div className="battle-col-label dip">Hệ quả tất yếu</div>
                    <div className="battle-col-text">Tổng thống Johnson buộc phải <strong>tuyên bố ngừng ném bom miền Bắc vô điều kiện</strong>, không tái tranh cử và chấp nhận ngồi vào bàn đàm phán tại Paris. Thắng lợi quân sự đã trực tiếp <em>đẻ ra</em> thắng lợi ngoại giao.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="battle-entry highlight">
              <div className="battle-year-col">
                <div className="battle-yr">12/1972</div>
                <div className="battle-tag-badge">Quyết định</div>
              </div>
              <div className="battle-main">
                <div className="battle-name">"Điện Biên Phủ trên không" — Trận chiến định mệnh</div>
                <div className="battle-loc">📍 Hà Nội – Hải Phòng và các tỉnh miền Bắc</div>
                <div className="battle-cols">
                  <div>
                    <div className="battle-col-label mil">Đập tan ảo tưởng sức mạnh</div>
                    <div className="battle-col-text">Nixon phát động Linebacker II, dùng B-52 ném bom rải thảm nhằm <em>"đưa miền Bắc về thời kỳ đồ đá"</em>. Bằng nghệ thuật phòng không xuất sắc, quân dân ta <strong>bắn rơi 81 máy bay, trong đó 34 pháo đài bay B-52</strong> trong 12 ngày đêm lịch sử.</div>
                  </div>
                  <div>
                    <div className="battle-col-label dip">Mỹ buộc ký Hiệp định Paris</div>
                    <div className="battle-col-text">Thất bại thảm hại trên bầu trời miền Bắc khiến Mỹ không còn lựa chọn nào khác. Ngày <strong>27/01/1973</strong>, Mỹ buộc phải ký Hiệp định Paris. <em>"Chúng tôi thua. Không còn cách nào khác."</em> — Kissinger.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="subsection-label">Hình ảnh những trận đánh lịch sử</div>
          <div className="battle-img-row">
            <ImgFrame label="Ấp Bắc · 1963" caption="Bộ đội ta đánh thắng chiến thuật trực thăng vận của quân Mỹ" height={200} src="https://baotanglichsu.vn/DataFiles/Uploaded/image/data%20Hung/thang%201%20nam%202017/chien%20thang%20ap%20bac/1.jpg" />
            <ImgFrame label="Tết Mậu Thân · 1968" caption="Quân giải phóng tiến công vào các đô thị miền Nam" height={200} src="https://tse1.mm.bing.net/th/id/OIP.Pl8DCrDtYgF4bSd1fQAfCAHaFL?rs=1&pid=ImgDetMain&o=7&rm=3" />
            <ImgFrame label="12 ngày đêm · 1972" caption="Xác pháo đài bay B-52 của Mỹ bị bắn hạ trên bầu trời Hà Nội" height={200} src="https://photo-cms-vovworld.zadn.vn/w730/uploaded/vovworld/bpivplck/2012_12_18/images653611_dienbienphutrenkhong(16).jpg" />
          </div>
        </section>
      </div>

      <Divider label="Phần thứ ba" />

      {/* ══════════════════════════════════════════
          PHẦN 3 — NGOẠI GIAO
      ══════════════════════════════════════════ */}
      <section id="ngoai-giao" className="page-section">
        <div className="section-header">
          <div className="section-number">Phần thứ ba</div>
          <h2 className="section-title">
            Đấu tranh Ngoại giao:<br />
            <em>Cô lập kẻ thù, hỗ trợ chiến trường</em>
          </h2>
        </div>

        <ImgFrame
          label="Paris · 1968–1973"
          caption="Đoàn đại biểu Việt Nam Dân chủ Cộng hòa tại Hội nghị Paris — Cuộc đấu trí lịch sử kéo dài 5 năm"
          height={270}
          src="https://file3.qdnd.vn/data/images/0/2023/01/21/vanduyen/kyhiepdinh.jpg?dpi=150&quality=100&w=870"
        />

        <div className="callout-box" style={{ marginTop: 32 }}>
          <div className="callout-icon">🕊️</div>
          <div>
            <div className="callout-title">Quốc tế hóa sự thật chính nghĩa</div>
            <p className="callout-text">
              Mặt trận ngoại giao của Việt Nam không chỉ bó hẹp trong các phòng họp kín.
              Đó là <strong>cuộc chiến giành giật trái tim và khối óc của nhân loại tiến bộ</strong>.
              Các nhà ngoại giao Việt Nam đã biến bàn đàm phán Paris thành diễn đàn công khai tố cáo tội ác của Mỹ,
              làm rõ khát vọng hòa bình chính đáng của dân tộc trước dư luận toàn thế giới.
            </p>
          </div>
        </div>

        <div className="subsection-label">Tạo thành "Mặt trận nhân dân thế giới ủng hộ Việt Nam"</div>
        <div className="diplo-layout">
          <div className="diplo-card">
            <div className="diplo-header">
              <span className="diplo-flag-group">
                <span className="diplo-flag-text">СС</span>
                <span className="diplo-flag-text cn">中</span>
              </span>
              <span className="diplo-name">Tranh thủ sự ủng hộ quốc tế</span>
            </div>
            <ul className="diplo-list">
              <li><span className="diplo-bullet" /><span>Khôn khéo giữ vững sự đoàn kết và nhận được viện trợ to lớn về vũ khí, vật chất từ <strong>Liên Xô, Trung Quốc</strong> và các nước xã hội chủ nghĩa.</span></li>
              <li><span className="diplo-bullet" /><span>Liên Xô cung cấp tên lửa SAM, MiG-21 — vũ khí then chốt trong chiến dịch bắn hạ B-52.</span></li>
              <li><span className="diplo-bullet" /><span>Trung Quốc viện trợ vũ khí, đạn dược, lương thực và hàng vạn quân tình nguyện hỗ trợ miền Bắc.</span></li>
              <li><span className="diplo-bullet" /><span>Hỗ trợ chính trị tại Hội đồng Bảo an Liên Hợp Quốc, cô lập Mỹ trên diễn đàn quốc tế.</span></li>
            </ul>
          </div>
          <div className="diplo-card">
            <div className="diplo-header">
              <span className="diplo-flag anti">✦</span>
              <span className="diplo-name">Đánh vào lòng nước Mỹ</span>
            </div>
            <ul className="diplo-list">
              <li><span className="diplo-bullet" /><span>Kết nối với <strong>phong trào phản chiến ngay trong lòng nước Mỹ</strong> — tạo sức ép từ cả hai gọng kìm: quốc tế và nội địa Mỹ.</span></li>
              <li><span className="diplo-bullet" /><span>Hình ảnh sinh viên Mỹ biểu tình, xé thẻ quân dịch đã làm chính quyền Mỹ bị cô lập hoàn toàn về mặt đạo đức.</span></li>
              <li><span className="diplo-bullet" /><span>Ngoại giao tạo điều kiện thuận lợi cho chiến trường: <em>địch phân tâm, mâu thuẫn nội bộ ngày càng sâu sắc</em>.</span></li>
              <li><span className="diplo-bullet" /><span>Áp lực từ Quốc hội Mỹ, báo chí và dân chúng buộc chính quyền phải xuống thang chiến tranh.</span></li>
            </ul>
          </div>
        </div>

        <div className="subsection-label">Hình ảnh hoạt động ngoại giao</div>
        <div className="diplo-img-strip">
          <ImgFrame label="Ngoại giao" caption="Chủ tịch Hồ Chí Minh tiếp đón lãnh đạo các nước xã hội chủ nghĩa anh em" height={185} src="https://thanhnien.mediacdn.vn/Uploaded/hoangnam/2022_03_30/cthcm-5905.jpg" />
          <ImgFrame label="Phản chiến" caption="Phong trào phản chiến biểu tình rầm rộ tại Washington D.C., 1969" height={185} src="https://tse2.mm.bing.net/th/id/OIP.ZffFrQ9E_yq1PgRIRqcIPAHaE2?rs=1&pid=ImgDetMain&o=7&rm=3" />
          <ImgFrame label="Đoàn kết" caption="Nhân dân thế giới xuống đường ủng hộ Việt Nam chống Mỹ xâm lược" height={185} src="https://static-cms-vovworld.zadn.vn/uploaded/hoanghuong/2015_05_07/b3.jpg" />
        </div>
      </section>

      <Divider label="Phần thứ tư" />

      {/* ══════════════════════════════════════════
          PHẦN 4 — PARIS 1973
      ══════════════════════════════════════════ */}
      <div className="full-bg">
        <section id="paris" className="page-section">
          <div className="section-header">
            <div className="section-number">Phần thứ tư</div>
            <h2 className="section-title">
              Đỉnh cao của sự kết hợp:<br />
              <em>Hiệp định Paris 1973</em>
            </h2>
          </div>

          <div className="paris-two-col">
            <div>
              <div className="subsection-label">Cuộc đọ sức cuối cùng trên bầu trời</div>
              <div className="context-body" style={{ marginBottom: 32 }}>
                <p>
                  Cuối năm 1972, hội nghị Paris bế tắc do Mỹ lật lọng, muốn đàm phán trên thế mạnh. Tổng thống Nixon
                  phát động chiến dịch <strong>Linebacker II</strong>, dùng siêu pháo đài bay B-52 ném bom rải thảm
                  Hà Nội, Hải Phòng nhằm <em>"đưa miền Bắc về thời kỳ đồ đá"</em> — ép Việt Nam chấp nhận những điều
                  khoản có lợi cho Mỹ.
                </p>
              </div>

              <div className="subsection-label">Chiến thắng quyết định — "Điện Biên Phủ trên không"</div>
              <div className="context-body" style={{ marginBottom: 32 }}>
                <p>
                  Bằng nghệ thuật phòng không xuất sắc, quân dân ta đã đánh bại hoàn toàn cuộc tập kích chiến lược
                  này, <strong>đập tan ảo tưởng về sức mạnh không thể chiến thắng của Mỹ</strong>.
                </p>
              </div>

              <div className="subsection-label">Diễn tiến đàm phán</div>
              <div className="paris-timeline-wrap">
                <div className="ptl-item">
                  <div className="ptl-date">5/1968</div>
                  <div><div className="ptl-event">Khai mạc đàm phán Paris</div><div className="ptl-detail">Sau Tết Mậu Thân, Johnson tuyên bố ngừng ném bom miền Bắc, chấp nhận đàm phán. Hội nghị 4 bên khai mạc tại Paris.</div></div>
                </div>
                <div className="ptl-item">
                  <div className="ptl-date">10/1972</div>
                  <div><div className="ptl-event">Dự thảo Hiệp định hoàn tất</div><div className="ptl-detail">Sau chiến dịch Nguyễn Huệ, hai bên hoàn tất dự thảo. Kissinger tuyên bố "hòa bình trong tầm tay". Nixon trì hoãn ký trước bầu cử.</div></div>
                </div>
                <div className="ptl-item">
                  <div className="ptl-date">12/1972</div>
                  <div><div className="ptl-event">Linebacker II — 12 ngày đêm lịch sử</div><div className="ptl-detail">Nixon dùng B-52 tập kích chiến lược. Quân dân ta bắn hạ 81 máy bay trong đó 34 B-52 — thất bại thảm hại của Mỹ.</div></div>
                </div>
                <div className="ptl-item">
                  <div className="ptl-date">27/1/1973</div>
                  <div><div className="ptl-event">Bút sa tại Paris</div><div className="ptl-detail">Mỹ buộc phải ký Hiệp định Paris, công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam.</div></div>
                </div>
              </div>
            </div>

            <div>
              <div className="subsection-label">&nbsp;</div>
              <div className="dbp-monument">
                <div className="dbp-label">Tháng 12 · 1972 · Hà Nội</div>
                <div className="dbp-title">"Điện Biên Phủ trên không"</div>
                <div className="dbp-stats">
                  <div className="dbp-stat"><div className="dbp-stat-num">81</div><div className="dbp-stat-label">Máy bay Mỹ bị bắn hạ</div></div>
                  <div className="dbp-stat"><div className="dbp-stat-num">34</div><div className="dbp-stat-label">Pháo đài bay B-52</div></div>
                  <div className="dbp-stat"><div className="dbp-stat-num">12</div><div className="dbp-stat-label">Ngày đêm chiến đấu</div></div>
                  <div className="dbp-stat"><div className="dbp-stat-num">27/1</div><div className="dbp-stat-label">Ngày ký Hiệp định</div></div>
                </div>
                <div className="dbp-quote">
                  "Chúng tôi thua. Không còn cách nào khác."<br />
                  <em>— Henry Kissinger</em>
                </div>
                <div className="dbp-img">
                  <ImgFrame label="12/1972 · Hà Nội" caption="Xác B-52 Mỹ bị bắn hạ trên bầu trời Thủ đô Hà Nội" height={155} src="https://th.bing.com/th/id/R.54b567c1a0c918b151c3b9c79187f959?rik=FEEVw7jcK27ywQ&pid=ImgRaw&r=0" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid-2-col">
            <ImgFrame label="27/1/1973 · Paris" caption="Lễ ký kết Hiệp định Paris về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam" height={230} src="https://kiemsat.1cdn.vn/2022/11/04/vna-potal-ky-niem-46-nam-ngay-ky-hiep-dinh-paris-ve-cham-dut-chien-tranh-lap-lai-hoa-binh-o-viet-nam-2711973-2712019-stand.jpg" />
            <div className="context-body">
              <p>
                Thất bại thảm hại trong chiến dịch Linebacker II khiến Mỹ không còn cách nào khác. Ngày <strong>27/01/1973</strong>,
                Mỹ buộc phải ký Hiệp định Paris, <strong>công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam</strong>.
              </p>
              <p style={{ marginTop: 16 }}>
                Sự kết hợp hoàn hảo quân sự – ngoại giao đã thực hiện thành công mục tiêu <em>"Đánh cho Mỹ cút"</em>,
                làm thay đổi hoàn toàn cục diện chiến tranh, tạo tiền đề trực tiếp cho chiến dịch giải phóng miền Nam
                toàn thắng năm 1975.
              </p>
            </div>
          </div>

          <div className="subsection-label">Nội dung chính của Hiệp định Paris</div>
          <div className="paris-content-grid">
            <div className="pcc"><div className="pcc-num">1</div><div className="pcc-title">Mỹ rút quân</div><div className="pcc-desc">Toàn bộ quân đội Mỹ và đồng minh rút khỏi Việt Nam trong vòng 60 ngày kể từ khi Hiệp định có hiệu lực.</div></div>
            <div className="pcc"><div className="pcc-num">2</div><div className="pcc-title">Ngừng bắn toàn diện</div><div className="pcc-desc">Ngừng bắn trên toàn miền Nam, chấm dứt ném bom miền Bắc, trao trả tù binh chiến tranh hai phía.</div></div>
            <div className="pcc"><div className="pcc-num">3</div><div className="pcc-title">Quyền tự quyết</div><div className="pcc-desc">Nhân dân miền Nam có quyền tự quyết định tương lai chính trị, không có sự can thiệp từ bên ngoài.</div></div>
            <div className="pcc"><div className="pcc-num">4</div><div className="pcc-title">Thống nhất dân tộc</div><div className="pcc-desc">Công nhận Việt Nam là một quốc gia; việc thống nhất thực hiện từng bước bằng phương pháp hòa bình.</div></div>
          </div>

          <div className="significance-box">
            <div className="sig-title">Ý nghĩa lịch sử của Hiệp định Paris</div>
            <p className="sig-text">
              Hiệp định Paris là thắng lợi <strong>vừa của quân sự vừa của ngoại giao</strong>. Mỹ phải rút quân —
              mục tiêu chiến lược <em>"Đánh cho Mỹ cút"</em> hoàn thành. Đây là tiền đề trực tiếp dẫn đến
              <strong> Đại thắng mùa Xuân 30/4/1975</strong>, thực hiện mục tiêu <em>"Đánh cho ngụy nhào"</em>,
              thống nhất non sông sau 21 năm chia cắt.
            </p>
          </div>
        </section>
      </div>

      <Divider label="Phần thứ năm" />

      {/* ══════════════════════════════════════════
          PHẦN 5 — CHÍNH TRỊ & DƯ LUẬN
      ══════════════════════════════════════════ */}
      <section id="chinh-tri" className="page-section">
        <div className="section-header">
          <div className="section-number">Phần thứ năm</div>
          <h2 className="section-title">
            Sức mạnh tổng hợp:<br />
            <em>Kết hợp Quân sự – Ngoại giao với Chính trị và Dư luận</em>
          </h2>
        </div>

        <div className="pol-three-col">
          <div className="pol-col">
            <div className="pol-col-header">
              <span className="pol-col-icon">⚔️</span>
              <span className="pol-col-title">Đòn tiến công chính trị ở miền Nam</span>
            </div>
            <div className="pol-col-body">
              <div className="pol-item"><span className="pol-diam" /><span>Song song với tiếng súng trên chiến trường và tiếng nói ở Paris, mặt trận chính trị tại miền Nam diễn ra cực kỳ quyết liệt.</span></div>
              <div className="pol-item"><span className="pol-diam" /><span>Các cuộc xuống đường của học sinh, sinh viên, Phật tử, công nhân tại Sài Gòn, Huế đòi hòa bình, chống can thiệp của Mỹ.</span></div>
              <div className="pol-item"><span className="pol-diam" /><span>Đã <strong>làm rung chuyển tận gốc rễ chính quyền Sài Gòn</strong>, gây chia rẽ nội bộ và suy giảm nghiêm trọng tinh thần chiến đấu của địch.</span></div>
              <div className="pol-item"><span className="pol-diam" /><span>Phong trào "Ba sẵn sàng", "Ba đảm đang" huy động toàn dân kháng chiến, xây dựng hậu phương vững chắc.</span></div>
            </div>
          </div>

          <div className="pol-col">
            <div className="pol-col-header">
              <span className="pol-col-icon">📰</span>
              <span className="pol-col-title">Mặt trận pháp lý & truyền thông quốc tế</span>
            </div>
            <div className="pol-col-body">
              <div className="pol-item"><span className="pol-diam" /><span>Việt Nam sử dụng xuất sắc truyền thông quốc tế để lan tỏa hình ảnh <em>một dân tộc nhỏ bé kiên cường chống lại cỗ máy chiến tranh khổng lồ</em>.</span></div>
              <div className="pol-item"><span className="pol-diam" /><span><strong>Tòa án quốc tế Bertrand Russell</strong> xét xử tội ác chiến tranh của Mỹ tại Việt Nam (1967) — cú đánh mạnh vào hình ảnh Mỹ trước dư luận thế giới.</span></div>
              <div className="pol-item"><span className="pol-diam" /><span>Hình ảnh vụ thảm sát Mỹ Lai, ảnh em bé Kim Phúc của Nick Ut — những bức ảnh làm chấn động lương tri nhân loại.</span></div>
              <div className="pol-item"><span className="pol-diam" /><span>Biến mọi hành động leo thang của Mỹ thành <strong>thảm họa truyền thông</strong>, tự phơi bày bản chất xâm lược phi nghĩa.</span></div>
            </div>
          </div>

          <div className="pol-col">
            <div className="pol-col-header">
              <span className="pol-col-icon">🛡️</span>
              <span className="pol-col-title">Chiếc khiên bảo vệ chiến trường</span>
            </div>
            <div className="pol-col-body">
              <div className="pol-item"><span className="pol-diam" /><span>Đấu tranh chính trị và dư luận tạo thành <strong>một chiếc khiên bảo vệ quân dân ta</strong>, biến mọi hành động leo thang của Mỹ thành thảm họa truyền thông.</span></div>
              <div className="pol-item"><span className="pol-diam" /><span>Áp lực dư luận trong nước và quốc tế hạn chế khả năng leo thang của Mỹ — buộc Mỹ phải tính toán thiệt hơn trước mỗi hành động quân sự.</span></div>
              <div className="pol-item"><span className="pol-diam" /><span>Phong trào phản chiến khiến Quốc hội Mỹ thông qua các đạo luật hạn chế quyền hành động của Tổng thống trong chiến tranh.</span></div>
              <div className="pol-item"><span className="pol-diam" /><span>Kết hợp cả ba mặt trận tạo thành <em>sức mạnh tổng hợp</em> vô địch mà không thế lực nào có thể khuất phục.</span></div>
            </div>
          </div>
        </div>

        <div className="subsection-label">Hình ảnh mặt trận chính trị và dư luận</div>
        <div className="grid-2-col-sm">
          <ImgFrame label="Miền Nam · 1966" caption="Phong trào học sinh, sinh viên, Phật tử Sài Gòn xuống đường đòi hòa bình, chống can thiệp Mỹ" height={210} src="https://th.bing.com/th/id/OIP.-M3Eov0wy-01tjjWDDaZNgHaEl?w=299&h=185&c=7&r=0&o=7&pid=1.7&rm=3" />
          <ImgFrame label="Quốc tế · 1967–1972" caption="Nhân dân thế giới biểu tình phản đối Mỹ xâm lược, ủng hộ Việt Nam anh hùng" height={210} src="https://tapchicongsan.org.vn/documents/20182/258012060/gettyimages-546032329-2048x2048+-+2.jpg/b66cf0e3-8c36-4c3b-a9ad-be0cc7328ef7?t=1679071358764" />
        </div>

        <div className="large-quote">
          <span className="lq-mark">"</span>
          <div className="lq-rule">
            <div className="lq-rule-line" />
            <div className="lq-rule-diam" />
            <div className="lq-rule-line" />
          </div>
          <p className="lq-text">
            Nhân dân Việt Nam sẽ không bao giờ khuất phục. Chúng tôi sẽ chiến đấu đến người cuối cùng
            để bảo vệ độc lập và tự do của Tổ quốc.
          </p>
          <div className="lq-rule">
            <div className="lq-rule-line" />
            <div className="lq-rule-diam" />
            <div className="lq-rule-line" />
          </div>
          <p className="lq-author">— Chủ tịch Hồ Chí Minh</p>
        </div>
      </section>

      <Divider label="Kết luận" />

      {/* ══════════════════════════════════════════
          PHẦN 6 — BÀI HỌC
      ══════════════════════════════════════════ */}
      <div className="full-bg">
        <section id="bai-hoc" className="page-section">
          <div className="section-header">
            <div className="section-number">Phần thứ sáu</div>
            <h2 className="section-title">
              Ý nghĩa lịch sử &<br />
              <em>Bài học Kinh nghiệm</em>
            </h2>
          </div>

          <div className="callout-box" style={{ marginBottom: 48 }}>
            <div className="callout-icon">⭐</div>
            <div>
              <div className="callout-title">Ý nghĩa thời đại</div>
              <p className="callout-text">
                Nghệ thuật kết hợp quân sự và ngoại giao đã giúp Việt Nam <strong>làm suy sụp ý chí xâm lược của đế quốc Mỹ</strong>,
                trở thành biểu tượng và nguồn cổ vũ to lớn cho các phong trào giải phóng dân tộc trên toàn cầu.
                Đây là tiền đề trực tiếp dẫn đến <strong>Đại thắng mùa Xuân 1975</strong>, thống nhất đất nước sau 21 năm chia cắt.
              </p>
            </div>
          </div>

          <div className="subsection-label">Bài học vô giá để lại cho muôn đời</div>
          <div className="lessons-grid">
            <div className="lesson-card">
              <div className="lesson-num">I</div>
              <div className="lesson-title">"Thắng trên chiến trường mới thắng trên bàn đàm phán"</div>
              <div className="lesson-body">Sức mạnh nội lực, tự lực tự cường và kết quả thực tiễn trên chiến trường luôn là yếu tố quyết định. Không có nền ngoại giao nào thắng lợi trên nền tảng thực lực yếu kém. <em>"Chiêng có to tiếng mới lớn."</em></div>
            </div>
            <div className="lesson-card">
              <div className="lesson-num">II</div>
              <div className="lesson-title">Độc lập, tự chủ trong đường lối</div>
              <div className="lesson-body">Dù nhận viện trợ quốc tế to lớn, Đảng ta luôn <strong>giữ vững quyền quyết định tối cao</strong> về thời điểm đánh, thời điểm đàm và nội dung đàm phán. Không để bất cứ ai chi phối chiến lược cách mạng của mình.</div>
            </div>
            <div className="lesson-card">
              <div className="lesson-num">III</div>
              <div className="lesson-title">Kết hợp sức mạnh dân tộc với sức mạnh thời đại</div>
              <div className="lesson-body">Biết tận dụng xu thế quốc tế có lợi, tranh thủ viện trợ từ cả hai cực và phong trào tiến bộ thế giới. Kết hợp nhuần nhuyễn sức mạnh nội lực với sức mạnh ngoại lực tạo thành sức mạnh tổng hợp vô địch.</div>
            </div>
            <div className="lesson-card">
              <div className="lesson-num">IV</div>
              <div className="lesson-title">Tận dụng mâu thuẫn trong lòng địch</div>
              <div className="lesson-body">Khai thác, khoét sâu mâu thuẫn nội bộ nước Mỹ giữa phe chủ chiến và phản chiến. Phong trào phản chiến là <em>"mặt trận thứ hai"</em> ngay trong lòng nước Mỹ — vũ khí không tiếng súng nhưng cực kỳ lợi hại.</div>
            </div>
            <div className="lesson-card">
              <div className="lesson-num">V</div>
              <div className="lesson-title">Nghệ thuật "Vừa đánh vừa đàm"</div>
              <div className="lesson-body">Kiên quyết không đàm phán khi thế bất lợi; chủ động lúc đàm, lúc ngừng tùy diễn biến chiến trường. <strong>Đàm phán là hình thức đấu tranh tiếp theo</strong>, không phải đầu hàng hay nhượng bộ vô nguyên tắc.</div>
            </div>
            <div className="lesson-card">
              <div className="lesson-num">VI</div>
              <div className="lesson-title">Giá trị trường tồn trong thời đại mới</div>
              <div className="lesson-body">Nghệ thuật này đến nay vẫn còn nguyên giá trị trong <strong>bảo vệ chủ quyền biên giới, hải đảo</strong> và hội nhập quốc tế của Việt Nam. <em>Tự lực, tự cường kết hợp đoàn kết quốc tế</em> là con đường duy nhất đúng.</div>
            </div>
          </div>

          <div className="subsection-label">Đại thắng Mùa Xuân · 30/4/1975 — Kết quả của sự kết hợp vĩ đại</div>
          <div className="grid-2-1-col">
            <ImgFrame label="30/4/1975 · Sài Gòn" caption="Xe tăng quân giải phóng húc đổ cổng Dinh Độc Lập — Kết thúc 21 năm kháng chiến trường kỳ" height={280} src="https://tse1.mm.bing.net/th/id/OIP.fCVyNUzzNEXqhMKYft3BAAHaEK?w=1200&h=675&rs=1&pid=ImgDetMain&o=7&rm=3" />
            <ImgFrame label="Thống nhất non sông" caption="Lá cờ Tổ quốc tung bay trên bầu trời Sài Gòn — Non sông thu về một mối" height={280} src="https://cdn-i.vtcnews.vn/upload/2023/04/30/screen-shot-2023-04-30-at-115653-am-11574198.png" />
          </div>

          <div className="conclusion-parchment">
            <div className="con-ornament">✦ &nbsp; Tổng kết &nbsp; ✦</div>
            <div className="con-title">
              Nghệ thuật vận dụng linh hoạt, nhịp nhàng<br />giữa Đấu tranh Quân sự và Đấu tranh Ngoại giao
            </div>
            <p className="con-text">
              Cuộc kháng chiến chống Mỹ cứu nước (1954–1975) là minh chứng hùng hồn cho sức mạnh của <strong>nghệ thuật
              chiến tranh nhân dân</strong> kết hợp với <strong>ngoại giao khôn khéo, mềm dẻo về sách lược nhưng
              kiên định về nguyên tắc</strong>. Quân sự mở đường tạo thế, ngoại giao khôn khéo chốt hạ.
            </p>
            <p className="con-text">
              Một dân tộc nhỏ bé đã đánh thắng siêu cường quân sự hàng đầu thế giới không chỉ bằng sức mạnh vật chất
              mà còn bằng <em>trí tuệ, bản lĩnh và nghệ thuật lãnh đạo tài tình</em> của Đảng Cộng sản Việt Nam
              và Chủ tịch Hồ Chí Minh vĩ đại.
            </p>
            <div className="con-seal">✦ &nbsp; Độc lập — Tự do — Hạnh phúc &nbsp; ✦</div>
          </div>
        </section>
      </div>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">Kháng chiến <span>·</span> 1954–1975</div>
            <p className="footer-desc">
              Nghệ thuật kết hợp đấu tranh Quân sự và Ngoại giao trong kháng chiến chống Mỹ cứu nước
              dưới sự lãnh đạo của Đảng Cộng sản Việt Nam và Chủ tịch Hồ Chí Minh.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Các phần</div>
            <ul className="footer-links">
              {navLinks.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Mốc quan trọng</div>
            <ul className="footer-links">
              <li><a href="#quan-su">Chiến thắng Ấp Bắc · 1963</a></li>
              <li><a href="#quan-su">Tết Mậu Thân · 1968</a></li>
              <li><a href="#ngoai-giao">Hội nghị Paris · 1968–1973</a></li>
              <li><a href="#paris">Điện Biên Phủ trên không · 1972</a></li>
              <li><a href="#paris">Hiệp định Paris · 27/1/1973</a></li>
              <li><a href="#bai-hoc">Đại thắng 30/4/1975</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Kháng chiến chống Mỹ cứu nước · Cộng hòa Xã hội Chủ nghĩa Việt Nam</p>
          <p className="footer-bottom-gold">✦ &nbsp; 1954 — 1975 &nbsp; ✦</p>
        </div>
      </footer>
    </div>
  );
}
