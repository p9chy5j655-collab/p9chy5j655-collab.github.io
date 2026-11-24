/* ZeroUpload — 100% client-side PDF & image toolkit
 * No network calls except the pdf-lib library itself. No file ever leaves the page.
 */
'use strict';
(function () {

  /* ────────────────────────────────────────────────────────────
   * Language
   * ──────────────────────────────────────────────────────────── */
  const DICT = {
    en: {
      'meta.title': 'ZeroUpload — Free PDF & Image Tools That Never Upload Your Files',
      'meta.desc': 'Merge and split PDFs, turn images into a PDF, compress and convert JPG/PNG/WEBP, and mosaic sensitive details — all 100% in your browser. Free, no sign-up, zero server upload.',
      'meta.ogtitle': 'ZeroUpload — Free PDF & Image Tools That Never Upload Your Files',
      'meta.ogdesc': 'Merge PDFs, images to PDF, compress & convert, privacy mosaic. Everything runs locally in your browser — no upload, no account, no cost.',

      'a11y.skip': 'Skip to tools',
      'topbar.text': '100% in-browser · your files never leave this device',
      'brand.tag': 'private file tools',
      'nav.tools': 'Tools', 'nav.privacy': 'Privacy', 'nav.faq': 'FAQ',

      'hero.badge': '100% In-Browser · Zero Server Upload',
      'hero.h1': 'PDF & image tools that never upload your files',
      'hero.sub': 'Merge and split PDFs, turn photos into a PDF, compress and convert images, and hide sensitive details — all processed locally by your browser. Free, no sign-up, nothing sent to a server.',
      'hero.p1': 'No upload', 'hero.p2': 'No account', 'hero.p3': 'No watermark', 'hero.p4': 'Works on phone',

      'tab.merge': 'Merge & Split PDF',
      'tab.img2pdf': 'Images to PDF',
      'tab.compress': 'Compress & Convert',
      'tab.blur': 'Privacy Blur',

      'merge.h': 'Merge & Split PDF',
      'merge.sub': 'Combine several PDFs in the order you choose, or pull out only the pages you need.',
      'merge.modeMerge': 'Merge PDFs',
      'merge.modeSplit': 'Extract pages',
      'merge.action': 'Merge PDFs',
      'merge.splitAction': 'Extract & download',
      'merge.rangeLabel': 'Page range',
      'merge.rangeHelp': 'Use commas for single pages and dashes for ranges. Example: 1-3, 5',

      'dz.title': 'Click to choose files or drop them here',
      'dz.titleOne': 'Click to choose a file or drop it here',
      'dz.titleMulti': 'Click to choose images or drop them here',
      'dz.hintPdf': 'PDF files · read locally, never uploaded',
      'dz.hintImg': 'JPG · PNG · WEBP · decoded on your device',
      'dz.hintImgOne': 'JPG · PNG · WEBP · BMP — one image at a time',
      'dz.replace': 'Choose another image',

      'i2p.h': 'Images to PDF',
      'i2p.sub': 'Drop your photos or scans, arrange the order, and get one clean PDF. Nothing is compressed away beyond what fits the page.',
      'i2p.pageSize': 'Page size', 'i2p.fit': 'Fit to image', 'i2p.a4': 'A4 portrait', 'i2p.a4l': 'A4 landscape',
      'i2p.margin': 'Margin', 'i2p.m0': 'None', 'i2p.m1': 'Small', 'i2p.m2': 'Large',
      'i2p.action': 'Create PDF',

      'cmp.h': 'Compress & Convert',
      'cmp.sub': 'Shrink a photo or switch it to another format. Compare the exact before-and-after size before you download.',
      'cmp.format': 'Output format', 'cmp.quality': 'Quality',
      'cmp.qualityHelp': 'Lower quality means a smaller file. 70–85% is usually invisible.',
      'cmp.action': 'Download converted image',
      'cmp.orig': 'Original', 'cmp.new': 'Converted', 'cmp.saved': 'Saved',

      'blur.h': 'Privacy Blur',
      'blur.sub': 'Hide a face, a name, an account number or an address before you share a screenshot. Drag on the photo — the mosaic is applied instantly.',
      'blur.tip': 'Tip: drag a box exactly over the detail you want hidden. Each box is burned into the image.',
      'blur.strength': 'Mosaic size', 'blur.s1': 'Fine', 'blur.s2': 'Medium', 'blur.s3': 'Strong',
      'blur.undo': 'Undo', 'blur.reset': 'Reset', 'blur.download': 'Download PNG',

      'priv.h': 'Why zero upload matters',
      'priv.sub': 'Most free converters send your file to a server, convert it, and keep a copy. This one never has your file to keep.',
      'priv.c1.h': 'Runs on your device',
      'priv.c1.p': 'Every conversion uses your browser\u2019s own memory, canvas and JavaScript. There is no upload step, so there is no copy on a server to leak.',
      'priv.c2.h': 'No account, no log',
      'priv.c2.p': 'No sign-up, no email, no file history. Close the tab and nothing is left behind — not even the file name.',
      'priv.c3.h': 'Free and instant',
      'priv.c3.p': 'No watermark, no daily limit, no premium tier for the basics. Large files convert as fast as your device can draw them.',

      'faq.h': 'Frequently asked',
      'faq.q1': 'Are my files uploaded anywhere?',
      'faq.a1': 'No. The page loads once and every tool then runs in your browser. Your PDFs and photos are opened in memory, processed there, and saved straight back to your device.',
      'faq.q2': 'Is it really free? What is the catch?',
      'faq.a2': 'It is free and there is no sign-up. Because there is no server doing the work, there is no cost to pass on to you. Future ads on the page keep it that way.',
      'faq.q3': 'Which formats can I use?',
      'faq.a3': 'PDF for merging and splitting; JPG, PNG, WEBP, GIF and BMP for the image tools. PDFs protected by a password are not supported.',
      'faq.q4': 'Does the mosaic really remove the information?',
      'faq.a4': 'The blurred area is redrawn as coarse blocks and exported as a new PNG, so the original pixels under that area do not survive in the file you download.',

      'foot.note': 'Private file tools that run entirely in your browser.',
      'foot.legal': '© 2026 ZeroUpload · No uploads, no accounts, no tracking of your documents.',

      'common.clear': 'Clear all',
      'file.remove': 'Remove file', 'file.up': 'Move up', 'file.down': 'Move down',
      'list.pages': '{n} pages', 'list.page1': '1 page',
      'merge.addedOne': '1 PDF added.', 'merge.addedMany': '{n} PDFs added.',
      'merge.needTwo': 'Add at least two PDFs to merge.',
      'merge.busy': 'Merging on your device…',
      'merge.done': 'Merged {files} files · {pages} pages. Download started.',
      'merge.errType': '{name} is not a PDF — skipped.',
      'merge.errLoad': 'Could not read {name}. Password-protected PDFs are not supported.',
      'merge.err': 'Merging failed in the browser. Try again with smaller or simpler PDFs.',
      'merge.clearMsg': 'List cleared.',
      'split.info': 'This PDF has {n} pages. Choose what to keep.',
      'split.needFile': 'Choose a PDF first.',
      'split.rangeErr': 'Enter page numbers like 1-2, 4 (within 1–{total}).',
      'split.busy': 'Extracting pages…',
      'split.done': 'Extracted {n} pages. Download started.',
      'i2p.addedOne': '1 image added.', 'i2p.addedMany': '{n} images added.',
      'i2p.errType': '{name} is not a supported image — skipped.',
      'i2p.needFile': 'Add at least one image.',
      'i2p.busy': 'Building the PDF…',
      'i2p.done': 'Created a {pages}-page PDF. Download started.',
      'i2p.err': 'Could not build the PDF. Try JPG or PNG images.',
      'cmp.hint': 'Choose an image to start.',
      'cmp.qualityNA': 'PNG is lossless — the quality slider does not apply.',
      'cmp.qualityOn': 'Lower quality means a smaller file. 70–85% is usually invisible.',
      'cmp.ready': 'Ready — {size}',
      'cmp.done': 'Converted to {fmt}. Download started.',
      'cmp.err': 'Could not convert that image. Try another file.',
      'cmp.larger': 'This setting makes the file larger.',
      'blur.ready': 'Drag on the photo to mosaic a detail.',
      'blur.done': 'Saved a PNG with the mosaic applied.',
      'blur.undoDone': 'Last mosaic removed.',
      'blur.resetDone': 'Back to the original image.',
      'blur.err': 'Could not open that image.',
      'blur.errType': '{name} is not a supported image — skipped.',
      'err.engine': 'The PDF engine could not load. Check your connection and try again.'
    },
    ko: {
      'meta.title': 'ZeroUpload — 파일을 업로드하지 않는 무료 PDF·이미지 도구',
      'meta.desc': 'PDF 합치기·분할, 이미지→PDF 변환, JPG·PNG·WEBP 압축·변환, 민감정보 모자이크까지 브라우저에서 바로. 회원가입 없이 무료, 서버 업로드 0.',
      'meta.ogtitle': 'ZeroUpload — 파일을 업로드하지 않는 무료 PDF·이미지 도구',
      'meta.ogdesc': 'PDF 합치기, 이미지→PDF, 압축·변환, 민감정보 모자이크. 모두 브라우저 안에서 처리합니다. 업로드·회원가입·비용 없음.',

      'a11y.skip': '도구로 바로가기',
      'topbar.text': '100% 브라우저 처리 · 파일이 기기 밖으로 나가지 않습니다',
      'brand.tag': '프라이빗 파일 도구',
      'nav.tools': '도구', 'nav.privacy': '개인정보', 'nav.faq': '자주 묻는 질문',

      'hero.badge': '100% 브라우저 처리 · 서버 업로드 없음',
      'hero.h1': '파일을 업로드하지 않는 PDF·\u2060이미지 도구',
      'hero.sub': 'PDF 합치기·분할, 사진을 PDF로, 이미지 압축·변환, 민감정보 가리기까지 — 전부 브라우저가 직접 처리합니다. 회원가입 없이 무료, 서버로 보내는 파일은 없습니다.',
      'hero.p1': '업로드 없음', 'hero.p2': '회원가입 없음', 'hero.p3': '워터마크 없음', 'hero.p4': '휴대폰에서도',

      'tab.merge': 'PDF 합치기·분할',
      'tab.img2pdf': '이미지 → PDF',
      'tab.compress': '압축·변환',
      'tab.blur': '민감정보 모자이크',

      'merge.h': 'PDF 합치기·분할',
      'merge.sub': '여러 PDF를 원하는 순서로 하나로 합치거나, 필요한 페이지만 뽑아 새 PDF로 저장하세요.',
      'merge.modeMerge': 'PDF 합치기',
      'merge.modeSplit': '페이지 추출',
      'merge.action': 'PDF 합치기',
      'merge.splitAction': '추출해서 다운로드',
      'merge.rangeLabel': '페이지 범위',
      'merge.rangeHelp': '한 페이지만 콤마로, 구간은 하이픈으로 구분합니다. 예: 1-3, 5',

      'dz.title': '클릭해서 파일을 고르거나 여기에 끌어다 놓으세요',
      'dz.titleOne': '클릭해서 파일을 고르거나 여기에 끌어다 놓으세요',
      'dz.titleMulti': '클릭해서 이미지를 고르거나 여기에 끌어다 놓으세요',
      'dz.hintPdf': 'PDF 파일 · 기기에서만 읽습니다',
      'dz.hintImg': 'JPG · PNG · WEBP · 기기에서 바로 처리',
      'dz.hintImgOne': 'JPG · PNG · WEBP · BMP · 한 장씩',
      'dz.replace': '다른 이미지 선택',

      'i2p.h': '이미지 → PDF',
      'i2p.sub': '사진이나 스캔본을 넣고 순서를 맞추면 한 개의 깔끔한 PDF가 됩니다. 페이지에 맞추는 것 외에는 화질을 깎지 않습니다.',
      'i2p.pageSize': '페이지 크기', 'i2p.fit': '이미지 크기에 맞춤', 'i2p.a4': 'A4 세로', 'i2p.a4l': 'A4 가로',
      'i2p.margin': '여백', 'i2p.m0': '없음', 'i2p.m1': '좁게', 'i2p.m2': '넓게',
      'i2p.action': 'PDF 만들기',

      'cmp.h': '압축·변환',
      'cmp.sub': '사진 용량을 줄이거나 다른 포맷으로 바꿉니다. 다운로드 전에 원본과 변환 후 크기를 정확히 비교하세요.',
      'cmp.format': '출력 포맷', 'cmp.quality': '품질',
      'cmp.qualityHelp': '품질을 낮추면 용량이 줄어듭니다. 보통 70~85%면 눈에 띄지 않습니다.',
      'cmp.action': '변환 이미지 다운로드',
      'cmp.orig': '원본', 'cmp.new': '변환 후', 'cmp.saved': '절감',

      'blur.h': '민감정보 모자이크',
      'blur.sub': '스크린샷을 공유하기 전에 얼굴·이름·계좌번호·주소를 가리세요. 사진 위를 드래그하면 즉시 모자이크됩니다.',
      'blur.tip': '가릴 부분을 정확히 덮도록 박스를 그리세요. 그린 박스는 이미지에 바로 적용됩니다.',
      'blur.strength': '모자이크 크기', 'blur.s1': '촘촘하게', 'blur.s2': '보통', 'blur.s3': '굵게',
      'blur.undo': '되돌리기', 'blur.reset': '초기화', 'blur.download': 'PNG 다운로드',

      'priv.h': '업로드하지 않는 게 왜 중요한가',
      'priv.sub': '무료 변환 사이트 대부분은 파일을 서버로 보내 변환하고 사본을 남깁니다. 이 도구는 애초에 파일을 받아둘 서버가 없습니다.',
      'priv.c1.h': '기기에서 직접 실행',
      'priv.c1.p': '모든 변환은 브라우저의 메모리와 캔버스, 자바스크립트로 처리됩니다. 업로드 단계가 없으니 서버에 남을 사본도 없습니다.',
      'priv.c2.h': '계정도 기록도 없음',
      'priv.c2.p': '회원가입도, 이메일도, 파일 이력도 없습니다. 탭을 닫으면 파일 이름 하나까지 남지 않습니다.',
      'priv.c3.h': '무료이고 즉시',
      'priv.c3.p': '워터마크 없음, 일일 제한 없음, 기본 기능 유료화 없음. 큰 파일도 기기가 그리는 만큼 빠릅니다.',

      'faq.h': '자주 묻는 질문',
      'faq.q1': '파일이 어딘가로 업로드되나요?',
      'faq.a1': '아니요. 페이지를 한 번 불러온 뒤에는 모든 도구가 브라우저 안에서 동작합니다. PDF와 사진은 메모리에서 열려 처리되고, 곧바로 기기로 저장됩니다.',
      'faq.q2': '정말 무료인가요? 대가가 있나요?',
      'faq.a2': '무료이고 회원가입도 없습니다. 서버가 하는 일이 없으니 사용자에게 넘길 비용도 없습니다. 앞으로 페이지에 들어갈 광고가 이 무료 운영을 지탱합니다.',
      'faq.q3': '어떤 파일을 쓸 수 있나요?',
      'faq.a3': '합치기·분할은 PDF, 이미지 도구는 JPG·PNG·WEBP·GIF·BMP를 지원합니다. 암호가 걸린 PDF는 지원하지 않습니다.',
      'faq.q4': '모자이크로 정보가 정말 지워지나요?',
      'faq.a4': '가린 영역은 굵은 블록으로 다시 그려지고 새 PNG로 저장됩니다. 다운로드한 파일에는 그 영역의 원본 픽셀이 남지 않습니다.',

      'foot.note': '브라우저 안에서만 돌아가는 프라이빗 파일 도구.',
      'foot.legal': '© 2026 ZeroUpload · 업로드·계정·문서 추적 없음.',

      'common.clear': '전체 비우기',
      'file.remove': '파일 삭제', 'file.up': '위로 이동', 'file.down': '아래로 이동',
      'list.pages': '{n}페이지', 'list.page1': '1페이지',
      'merge.addedOne': 'PDF 1개를 추가했습니다.', 'merge.addedMany': 'PDF {n}개를 추가했습니다.',
      'merge.needTwo': '합치려면 PDF를 두 개 이상 추가하세요.',
      'merge.busy': '기기에서 합치는 중…',
      'merge.done': '파일 {files}개 · {pages}페이지로 합쳤습니다. 다운로드를 시작했습니다.',
      'merge.errType': '{name}은(는) PDF가 아니어서 건너뛰었습니다.',
      'merge.errLoad': '{name}을(를) 읽을 수 없습니다. 암호가 걸린 PDF는 지원하지 않습니다.',
      'merge.err': '브라우저에서 합치지 못했습니다. 더 작거나 단순한 PDF로 다시 시도하세요.',
      'merge.clearMsg': '목록을 비웠습니다.',
      'split.info': '이 PDF는 {n}페이지입니다. 남길 페이지를 선택하세요.',
      'split.needFile': '먼저 PDF를 선택하세요.',
      'split.rangeErr': '1-2, 4 같은 형식으로 입력하세요. (1~{total} 범위)',
      'split.busy': '페이지를 추출하는 중…',
      'split.done': '{n}페이지를 추출했습니다. 다운로드를 시작했습니다.',
      'i2p.addedOne': '이미지 1장을 추가했습니다.', 'i2p.addedMany': '이미지 {n}장을 추가했습니다.',
      'i2p.errType': '{name}은(는) 지원하지 않는 이미지라 건너뛰었습니다.',
      'i2p.needFile': '이미지를 한 장 이상 추가하세요.',
      'i2p.busy': 'PDF를 만드는 중…',
      'i2p.done': '{pages}페이지 PDF를 만들었습니다. 다운로드를 시작했습니다.',
      'i2p.err': 'PDF를 만들지 못했습니다. JPG나 PNG 이미지로 시도하세요.',
      'cmp.hint': '이미지를 넣으면 시작됩니다.',
      'cmp.qualityNA': 'PNG는 무손실이라 품질 슬라이더가 적용되지 않습니다.',
      'cmp.qualityOn': '품질을 낮추면 용량이 줄어듭니다. 보통 70~85%면 눈에 띄지 않습니다.',
      'cmp.ready': '준비됨 — {size}',
      'cmp.done': '{fmt}(으)로 변환했습니다. 다운로드를 시작했습니다.',
      'cmp.err': '변환하지 못했습니다. 다른 파일로 시도하세요.',
      'cmp.larger': '이 설정은 용량을 오히려 늘립니다.',
      'blur.ready': '사진 위를 드래그해 가릴 부분을 지정하세요.',
      'blur.done': '모자이크를 적용한 PNG를 저장했습니다.',
      'blur.undoDone': '마지막 모자이크를 되돌렸습니다.',
      'blur.resetDone': '원본 이미지로 돌아갔습니다.',
      'blur.err': '이미지를 열지 못했습니다.',
      'blur.errType': '{name}은(는) 지원하지 않는 이미지라 건너뛰었습니다.',
      'err.engine': 'PDF 엔진을 불러오지 못했습니다. 연결을 확인하고 다시 시도하세요.'
    }
  };

  const LS_KEY = 'zu.lang';
  let lang = 'en';
  try {
    const saved = localStorage.getItem(LS_KEY);
    if (saved === 'ko' || saved === 'en') lang = saved;
  } catch (e) { /* storage blocked → default en */ }

  const has = (k) => Object.prototype.hasOwnProperty.call(DICT[lang], k) || Object.prototype.hasOwnProperty.call(DICT.en, k);

  function t(key, vars) {
    const table = DICT[lang] || DICT.en;
    let s = Object.prototype.hasOwnProperty.call(table, key) ? table[key]
      : (Object.prototype.hasOwnProperty.call(DICT.en, key) ? DICT.en[key] : key);
    if (vars) {
      for (const k in vars) s = s.split('{' + k + '}').join(String(vars[k]));
    }
    return s;
  }

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.prototype.slice.call((root || document).querySelectorAll(sel));

  /* ────────────────────────────────────────────────────────────
   * Small helpers
   * ──────────────────────────────────────────────────────────── */
  function fmtBytes(n) {
    if (!isFinite(n) || n <= 0) return '0 KB';
    if (n < 1024) return n + ' B';
    const kb = n / 1024;
    if (kb < 1024) return (kb < 10 ? kb.toFixed(1) : Math.round(kb)) + ' KB';
    const mb = kb / 1024;
    return (mb < 10 ? mb.toFixed(2) : mb.toFixed(1)) + ' MB';
  }
  function uid() { return Math.random().toString(36).slice(2, 9); }
  function pagesLabel(n) { return n === 1 ? t('list.page1') : t('list.pages', { n: n }); }
  function baseName(name) { return String(name || 'file').replace(/\.[^./\\]+$/, '') || 'file'; }
  const isPdf = (f) => /\.pdf$/i.test(f.name) || f.type === 'application/pdf';
  const isImage = (f) => /^image\//.test(f.type) || /\.(jpe?g|png|webp|gif|bmp)$/i.test(f.name);

  function download(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.rel = 'noopener';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
    window.__zuLastDownload = { name: filename, size: blob.size, type: blob.type, at: new Date().toISOString() };
  }

  function canvasToBlob(canvas, type, quality) {
    return new Promise((resolve, reject) => {
      canvas.toBlob((b) => { b ? resolve(b) : reject(new Error('toBlob failed')); }, type, quality);
    });
  }

  async function loadBitmap(file) {
    if (typeof createImageBitmap === 'function') {
      try { return await createImageBitmap(file); } catch (e) { /* fall through */ }
    }
    return await new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => { resolve(img); setTimeout(() => URL.revokeObjectURL(url), 1000); };
      img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('decode failed')); };
      img.src = url;
    });
  }

  /* status messages are stored as keys so a language switch repaints them */
  function paint(el, msg) {
    if (!el) return;
    if (!msg) { el.hidden = true; el.textContent = ''; el.className = 'status'; return; }
    el.hidden = false;
    el.className = 'status is-' + (msg.tone || 'ok');
    el.textContent = msg.key ? t(msg.key, msg.vars) : (msg.text || '');
  }

  /* ────────────────────────────────────────────────────────────
   * pdf-lib loader (CDN, retried once if it did not arrive)
   * ──────────────────────────────────────────────────────────── */
  let pdfPromise = null;
  function ensurePdfLib() {
    if (window.PDFLib) return Promise.resolve(window.PDFLib);
    if (pdfPromise) return pdfPromise;
    pdfPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js';
      s.async = true;
      let done = false;
      const fail = () => { if (!done) { done = true; pdfPromise = null; reject(new Error('pdf-lib unavailable')); } };
      s.onload = () => { if (window.PDFLib) { done = true; resolve(window.PDFLib); } else fail(); };
      s.onerror = fail;
      document.head.appendChild(s);
      setTimeout(() => { if (!window.PDFLib) fail(); }, 20000);
    });
    return pdfPromise;
  }

  /* ────────────────────────────────────────────────────────────
   * Tabs
   * ──────────────────────────────────────────────────────────── */
  const tabs = $$('.tab');
  const panelIds = ['merge', 'img2pdf', 'compress', 'blur'];
  function selectTab(name) {
    tabs.forEach((tb) => {
      const on = tb.dataset.panel === name;
      tb.setAttribute('aria-selected', on ? 'true' : 'false');
      tb.tabIndex = on ? 0 : -1;
      const p = document.getElementById('panel-' + tb.dataset.panel);
      if (p) p.hidden = !on;
    });
  }
  tabs.forEach((tb, i) => {
    tb.addEventListener('click', () => selectTab(tb.dataset.panel));
    tb.addEventListener('keydown', (e) => {
      let next = null;
      if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
      if (e.key === 'Home') next = tabs[0];
      if (e.key === 'End') next = tabs[tabs.length - 1];
      if (next) { e.preventDefault(); selectTab(next.dataset.panel); next.focus(); }
    });
  });
  selectTab('merge');

  /* dropzone wiring */
  function wireDrop(zone, input, handler) {
    ['dragenter', 'dragover'].forEach((ev) =>
      zone.addEventListener(ev, (e) => { e.preventDefault(); e.stopPropagation(); zone.classList.add('is-drag'); }));
    zone.addEventListener('dragleave', (e) => {
      if (!zone.contains(e.relatedTarget)) zone.classList.remove('is-drag');
    });
    zone.addEventListener('drop', (e) => {
      e.preventDefault(); e.stopPropagation();
      zone.classList.remove('is-drag');
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) handler(e.dataTransfer.files);
    });
    input.addEventListener('change', () => {
      if (input.files && input.files.length) handler(input.files);
      input.value = ''; /* allow re-selecting the same file */
    });
  }
  window.addEventListener('dragover', (e) => e.preventDefault());
  window.addEventListener('drop', (e) => e.preventDefault());

  /* build one row of a file list */
  function fileRow(opts) {
    const li = document.createElement('li');
    li.className = 'file-row';

    if (opts.thumbUrl) {
      const img = document.createElement('img');
      img.className = 'file-thumb';
      img.src = opts.thumbUrl;
      img.alt = '';
      li.appendChild(img);
    } else {
      const box = document.createElement('span');
      box.className = 'file-thumb';
      box.textContent = 'PDF';
      li.appendChild(box);
    }

    const body = document.createElement('span');
    body.className = 'file-body';
    const name = document.createElement('span');
    name.className = 'file-name';
    name.textContent = opts.name;
    name.title = opts.name;
    const meta = document.createElement('span');
    meta.className = 'file-meta';
    meta.textContent = opts.meta;
    body.appendChild(name); body.appendChild(meta);
    li.appendChild(body);

    if (opts.onUp || opts.onDown) {
      const up = document.createElement('button');
      up.type = 'button'; up.className = 'icon-btn';
      up.innerHTML = '&uarr;'; up.setAttribute('aria-label', t('file.up'));
      up.disabled = !opts.onUp;
      if (opts.onUp) up.addEventListener('click', opts.onUp);
      const down = document.createElement('button');
      down.type = 'button'; down.className = 'icon-btn';
      down.innerHTML = '&darr;'; down.setAttribute('aria-label', t('file.down'));
      down.disabled = !opts.onDown;
      if (opts.onDown) down.addEventListener('click', opts.onDown);
      li.appendChild(up); li.appendChild(down);
    }

    if (opts.onRemove) {
      const rm = document.createElement('button');
      rm.type = 'button'; rm.className = 'icon-btn danger';
      rm.innerHTML = '&times;'; rm.setAttribute('aria-label', t('file.remove'));
      rm.addEventListener('click', opts.onRemove);
      li.appendChild(rm);
    }
    return li;
  }

  /* ────────────────────────────────────────────────────────────
   * 1. Merge / Split
   * ──────────────────────────────────────────────────────────── */
  const merge = { items: [], msg: null, busy: false };
  const mergeList = $('#merge-list');
  const mergeStatus = $('#merge-status');
  const mergeBtn = $('#btn-merge');

  function renderMerge() {
    mergeList.innerHTML = '';
    merge.items.forEach((it, i) => {
      mergeList.appendChild(fileRow({
        name: it.file.name,
        meta: pagesLabel(it.pages) + ' · ' + fmtBytes(it.file.size),
        onUp: i > 0 ? () => { swap(merge.items, i, i - 1); renderMerge(); } : null,
        onDown: i < merge.items.length - 1 ? () => { swap(merge.items, i, i + 1); renderMerge(); } : null,
        onRemove: () => { merge.items.splice(i, 1); if (!merge.items.length) merge.msg = null; renderMerge(); }
      }));
    });
    mergeBtn.disabled = merge.busy || merge.items.length < 2;
    paint(mergeStatus, merge.msg);
  }
  /* image tools fold their dropzone into a slim bar once a file is loaded */
  function setZoneCompact(sel, on) {
    const z = $(sel);
    if (!z) return;
    const ttl = z.querySelector('.dz-title');
    if (ttl && !ttl.dataset.key) ttl.dataset.key = ttl.getAttribute('data-i18n') || 'dz.titleOne';
    const key = on ? 'dz.replace' : (ttl ? ttl.dataset.key : 'dz.titleOne');
    if (ttl) { ttl.setAttribute('data-i18n', key); ttl.textContent = t(key); }
    z.classList.toggle('compact', !!on);
  }

  function swap(arr, a, b) { const tmp = arr[a]; arr[a] = arr[b]; arr[b] = tmp; }

  async function addMergeFiles(files) {
    const list = Array.prototype.slice.call(files);
    merge.msg = null;
    let added = 0;
    for (const f of list) {
      if (!isPdf(f)) { merge.msg = { key: 'merge.errType', vars: { name: f.name }, tone: 'err' }; continue; }
      try {
        const PDFLib = await ensurePdfLib();
        const bytes = new Uint8Array(await f.arrayBuffer());
        const doc = await PDFLib.PDFDocument.load(bytes, { ignoreEncryption: true });
        merge.items.push({ id: uid(), file: f, pages: doc.getPageCount() });
        added++;
      } catch (err) {
        if (err && /pdf-lib unavailable/.test(err.message || '')) {
          merge.msg = { key: 'err.engine', tone: 'err' };
        } else {
          merge.msg = { key: 'merge.errLoad', vars: { name: f.name }, tone: 'err' };
        }
      }
    }
    if (added) {
      merge.msg = { key: added === 1 ? 'merge.addedOne' : 'merge.addedMany', vars: { n: added }, tone: 'ok' };
    }
    if (merge.items.length === 1) mergeBtn.disabled = true;
    renderMerge();
  }

  async function runMerge() {
    if (merge.items.length < 2) { merge.msg = { key: 'merge.needTwo', tone: 'warn' }; renderMerge(); return; }
    merge.busy = true; merge.msg = { key: 'merge.busy', tone: 'warn' }; renderMerge();
    try {
      const PDFLib = await ensurePdfLib();
      const out = await PDFLib.PDFDocument.create();
      let pages = 0;
      for (const it of merge.items) {
        const src = await PDFLib.PDFDocument.load(new Uint8Array(await it.file.arrayBuffer()), { ignoreEncryption: true });
        const copied = await out.copyPages(src, src.getPageIndices());
        copied.forEach((p) => out.addPage(p));
        pages += copied.length;
      }
      const bytes = await out.save();
      const blob = new Blob([bytes], { type: 'application/pdf' });
      download(blob, 'merged.pdf');
      merge.msg = { key: 'merge.done', vars: { files: merge.items.length, pages: pages }, tone: 'ok' };
    } catch (err) {
      merge.msg = /pdf-lib unavailable/.test(err && err.message || '')
        ? { key: 'err.engine', tone: 'err' } : { key: 'merge.err', tone: 'err' };
    } finally {
      merge.busy = false;
      renderMerge();
    }
  }

  wireDrop($('#drop-merge'), $('#file-merge'), addMergeFiles);
  mergeBtn.addEventListener('click', runMerge);
  $('#btn-merge-clear').addEventListener('click', () => {
    merge.items = []; merge.msg = null; renderMerge();
  });

  /* split */
  const split = { file: null, pages: 0, msg: null, busy: false };
  const splitFile = $('#split-file');
  const splitStatus = $('#split-status');
  const splitBtn = $('#btn-split');
  const splitFields = $('#split-fields');
  const splitRange = $('#split-range');
  const splitHelp = $('#split-help');

  function renderSplit() {
    splitFile.innerHTML = '';
    if (split.file) {
      splitFile.appendChild(fileRow({
        name: split.file.name,
        meta: pagesLabel(split.pages) + ' · ' + fmtBytes(split.file.size),
        onRemove: () => {
          split.file = null; split.pages = 0; split.msg = null;
          splitFields.hidden = true; splitRange.value = ''; renderSplit();
        }
      }));
    }
    splitFields.hidden = !split.file;
    splitBtn.disabled = split.busy || !split.file;
    if (split.file) {
      splitHelp.textContent = t('merge.rangeHelp');
      splitRange.placeholder = split.pages ? '1-' + split.pages : '1-2, 4';
    }
    paint(splitStatus, split.msg);
  }

  async function addSplitFile(files) {
    const f = files[0];
    if (!f) return;
    split.msg = null;
    if (!isPdf(f)) { split.msg = { key: 'merge.errType', vars: { name: f.name }, tone: 'err' }; renderSplit(); return; }
    try {
      const PDFLib = await ensurePdfLib();
      const bytes = new Uint8Array(await f.arrayBuffer());
      const doc = await PDFLib.PDFDocument.load(bytes, { ignoreEncryption: true });
      split.file = f;
      split.pages = doc.getPageCount();
      splitRange.value = split.pages > 1 ? '1-' + split.pages : '1';
      split.msg = { key: 'split.info', vars: { n: split.pages }, tone: 'ok' };
    } catch (err) {
      split.file = null; split.pages = 0;
      split.msg = /pdf-lib unavailable/.test(err && err.message || '')
        ? { key: 'err.engine', tone: 'err' }
        : { key: 'merge.errLoad', vars: { name: f.name }, tone: 'err' };
    }
    renderSplit();
  }

  function parseRange(str, total) {
    const out = new Set();
    const parts = String(str).split(',');
    for (let raw of parts) {
      const p = raw.trim();
      if (!p) continue;
      const m = p.match(/^(\d+)\s*[-~]\s*(\d+)$/);
      if (m) {
        let a = parseInt(m[1], 10), b = parseInt(m[2], 10);
        if (a > b) { const tmp = a; a = b; b = tmp; }
        if (a < 1 || b > total) return null; /* a page outside the document is a typo, not a skip */
        for (let i = a; i <= b; i++) out.add(i - 1);
      } else if (/^\d+$/.test(p)) {
        const i = parseInt(p, 10);
        if (i < 1 || i > total) return null;
        out.add(i - 1);
      } else {
        return null;
      }
    }
    return Array.from(out).sort((a, b) => a - b);
  }

  async function runSplit() {
    if (!split.file) { split.msg = { key: 'split.needFile', tone: 'warn' }; renderSplit(); return; }
    const picks = parseRange(splitRange.value, split.pages);
    if (!picks || !picks.length) {
      split.msg = { key: 'split.rangeErr', vars: { total: split.pages }, tone: 'err' };
      renderSplit(); return;
    }
    split.busy = true; split.msg = { key: 'split.busy', tone: 'warn' }; renderSplit();
    try {
      const PDFLib = await ensurePdfLib();
      const src = await PDFLib.PDFDocument.load(new Uint8Array(await split.file.arrayBuffer()), { ignoreEncryption: true });
      const out = await PDFLib.PDFDocument.create();
      const copied = await out.copyPages(src, picks);
      copied.forEach((p) => out.addPage(p));
      const bytes = await out.save();
      const blob = new Blob([bytes], { type: 'application/pdf' });
      download(blob, baseName(split.file.name) + '-pages.pdf');
      split.msg = { key: 'split.done', vars: { n: picks.length }, tone: 'ok' };
    } catch (err) {
      split.msg = /pdf-lib unavailable/.test(err && err.message || '')
        ? { key: 'err.engine', tone: 'err' } : { key: 'merge.err', tone: 'err' };
    } finally {
      split.busy = false;
      renderSplit();
    }
  }

  wireDrop($('#drop-split'), $('#file-split'), addSplitFile);
  splitBtn.addEventListener('click', runSplit);
  splitRange.addEventListener('keydown', (e) => { if (e.key === 'Enter') runSplit(); });

  $$('.seg-btn[data-mode]').forEach((b) => {
    b.addEventListener('click', () => {
      $$('.seg-btn[data-mode]').forEach((x) => x.classList.toggle('is-active', x === b));
      $('#mode-merge').hidden = b.dataset.mode !== 'merge';
      $('#mode-split').hidden = b.dataset.mode !== 'split';
    });
  });

  /* ────────────────────────────────────────────────────────────
   * 2. Images → PDF
   * ──────────────────────────────────────────────────────────── */
  const i2p = { items: [], msg: null, busy: false };
  const i2pList = $('#i2p-list');
  const i2pStatus = $('#i2p-status');
  const i2pBtn = $('#btn-i2p');
  const i2pFields = $('#i2p-fields');

  function renderI2P() {
    i2pList.innerHTML = '';
    i2p.items.forEach((it, i) => {
      i2pList.appendChild(fileRow({
        name: it.file.name,
        meta: it.w + ' × ' + it.h + ' px · ' + fmtBytes(it.file.size),
        thumbUrl: it.url,
        onUp: i > 0 ? () => { swap(i2p.items, i, i - 1); renderI2P(); } : null,
        onDown: i < i2p.items.length - 1 ? () => { swap(i2p.items, i, i + 1); renderI2P(); } : null,
        onRemove: () => {
          URL.revokeObjectURL(it.url);
          i2p.items.splice(i, 1);
          if (!i2p.items.length) i2p.msg = null;
          renderI2P();
        }
      }));
    });
    i2pFields.hidden = i2p.items.length === 0;
    i2pBtn.disabled = i2p.busy || i2p.items.length === 0;
    paint(i2pStatus, i2p.msg);
  }

  async function addI2PFiles(files) {
    const list = Array.prototype.slice.call(files);
    i2p.msg = null;
    let added = 0;
    for (const f of list) {
      if (!isImage(f)) { i2p.msg = { key: 'i2p.errType', vars: { name: f.name }, tone: 'err' }; continue; }
      try {
        const bmp = await loadBitmap(f);
        const w = bmp.width || bmp.naturalWidth;
        const h = bmp.height || bmp.naturalHeight;
        if (bmp.close) bmp.close();
        i2p.items.push({ id: uid(), file: f, w: w, h: h, url: URL.createObjectURL(f) });
        added++;
      } catch (err) {
        i2p.msg = { key: 'i2p.errType', vars: { name: f.name }, tone: 'err' };
      }
    }
    if (added) i2p.msg = { key: added === 1 ? 'i2p.addedOne' : 'i2p.addedMany', vars: { n: added }, tone: 'ok' };
    renderI2P();
  }

  async function imageToPdfBytes(file) {
    const bmp = await loadBitmap(file);
    const natW = bmp.width || bmp.naturalWidth;
    const natH = bmp.height || bmp.naturalHeight;
    const scale = Math.min(1, 2400 / Math.max(natW, natH));
    const w = Math.max(1, Math.round(natW * scale));
    const h = Math.max(1, Math.round(natH * scale));
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(bmp, 0, 0, w, h);
    if (bmp.close) bmp.close();
    const usePng = /png/i.test(file.type) && file.size < 1.5 * 1024 * 1024;
    const blob = await canvasToBlob(c, usePng ? 'image/png' : 'image/jpeg', 0.92);
    return { bytes: new Uint8Array(await blob.arrayBuffer()), kind: usePng ? 'png' : 'jpg', w: w, h: h };
  }

  async function runI2P() {
    if (!i2p.items.length) { i2p.msg = { key: 'i2p.needFile', tone: 'warn' }; renderI2P(); return; }
    i2p.busy = true; i2p.msg = { key: 'i2p.busy', tone: 'warn' }; renderI2P();
    try {
      const PDFLib = await ensurePdfLib();
      const doc = await PDFLib.PDFDocument.create();
      const mode = $('#i2p-page').value;
      const margin = parseFloat($('#i2p-margin').value) || 0;
      const A4 = [595.28, 841.89];
      for (const it of i2p.items) {
        const data = await imageToPdfBytes(it.file);
        const img = data.kind === 'png' ? await doc.embedPng(data.bytes) : await doc.embedJpg(data.bytes);
        let pw, ph, iw, ih;
        if (mode === 'fit') {
          pw = data.w + margin * 2; ph = data.h + margin * 2;
          iw = data.w; ih = data.h;
        } else {
          const landscape = mode === 'a4l';
          pw = landscape ? A4[1] : A4[0];
          ph = landscape ? A4[0] : A4[1];
          const availW = Math.max(1, pw - margin * 2);
          const availH = Math.max(1, ph - margin * 2);
          const s = Math.min(availW / data.w, availH / data.h);
          iw = data.w * s; ih = data.h * s;
        }
        const page = doc.addPage([pw, ph]);
        page.drawImage(img, { x: (pw - iw) / 2, y: (ph - ih) / 2, width: iw, height: ih });
      }
      const bytes = await doc.save();
      download(new Blob([bytes], { type: 'application/pdf' }), 'images.pdf');
      i2p.msg = { key: 'i2p.done', vars: { pages: i2p.items.length }, tone: 'ok' };
    } catch (err) {
      i2p.msg = /pdf-lib unavailable/.test(err && err.message || '')
        ? { key: 'err.engine', tone: 'err' } : { key: 'i2p.err', tone: 'err' };
    } finally {
      i2p.busy = false;
      renderI2P();
    }
  }

  wireDrop($('#drop-i2p'), $('#file-i2p'), addI2PFiles);
  i2pBtn.addEventListener('click', runI2P);
  $('#btn-i2p-clear').addEventListener('click', () => {
    i2p.items.forEach((it) => URL.revokeObjectURL(it.url));
    i2p.items = []; i2p.msg = null; renderI2P();
  });

  /* ────────────────────────────────────────────────────────────
   * 3. Compress & Convert
   * ──────────────────────────────────────────────────────────── */
  const cmp = {
    file: null, canvas: null, previewUrl: null, out: null,
    fmt: 'webp', q: 80, msg: null, busy: false, runId: 0
  };
  const cmpWork = $('#cmp-work');
  const cmpStatus = $('#cmp-status');
  const cmpBtn = $('#btn-cmp');
  const cmpStats = $('#cmp-stats');
  const cmpPreview = $('#cmp-preview');
  const cmpMeta = $('#cmp-meta');
  const cmpQuality = $('#cmp-quality');
  const cmpQualityOut = $('#cmp-quality-out');
  const cmpQualityHelp = $('#cmp-quality-help');

  const MIME = { webp: 'image/webp', jpeg: 'image/jpeg', png: 'image/png' };
  const EXT = { webp: 'webp', jpeg: 'jpg', png: 'png' };

  function paintSlider() {
    const min = +cmpQuality.min, max = +cmpQuality.max, v = +cmpQuality.value;
    const pct = ((v - min) / (max - min)) * 100;
    cmpQuality.style.background = 'linear-gradient(90deg,#4f46e5 0%,#7c3aed ' + pct + '%,#e5e8f0 ' + pct + '%)';
    cmpQualityOut.textContent = v + '%';
  }

  function renderCmp() {
    setZoneCompact('#drop-cmp', !!cmp.canvas);
    cmpWork.hidden = !cmp.canvas;
    cmpBtn.disabled = cmp.busy || !cmp.out;
    cmpQuality.disabled = cmp.fmt === 'png';
    cmpQualityHelp.textContent = cmp.fmt === 'png' ? t('cmp.qualityNA') : t('cmp.qualityOn');
    paintSlider();

    if (cmp.file) {
      cmpPreview.src = cmp.previewUrl;
      cmpPreview.alt = cmp.file.name;
      cmpMeta.textContent = cmp.file.name + ' · ' + cmp.canvas.width + ' × ' + cmp.canvas.height + ' px';
    }

    const orig = cmp.file ? cmp.file.size : 0;
    const neu = cmp.out ? cmp.out.size : 0;
    let saved, savedCls = 'muted';
    if (cmp.out) {
      const pct = Math.round((1 - neu / orig) * 100);
      saved = (pct >= 0 ? '−' : '+') + Math.abs(pct) + '%';
      savedCls = pct >= 0 ? 'ok' : 'warn';
    } else {
      saved = '—';
    }
    cmpStats.innerHTML =
      '<div class="stat"><span class="stat-label"></span><span class="stat-value">' + (orig ? fmtBytes(orig) : '—') + '</span></div>' +
      '<div class="stat"><span class="stat-label"></span><span class="stat-value">' + (neu ? fmtBytes(neu) : '—') + '</span></div>' +
      '<div class="stat"><span class="stat-label"></span><span class="stat-value ' + savedCls + '">' + saved + '</span></div>';
    const labels = [t('cmp.orig'), t('cmp.new'), t('cmp.saved')];
    $$('.stat-label', cmpStats).forEach((el, i) => { el.textContent = labels[i]; });

    paint(cmpStatus, cmp.msg);
  }

  async function addCmpFile(files) {
    const f = files[0];
    if (!f) return;
    cmp.msg = null; cmp.out = null;
    if (!isImage(f)) { cmp.msg = { key: 'i2p.errType', vars: { name: f.name }, tone: 'err' }; renderCmp(); return; }
    try {
      const bmp = await loadBitmap(f);
      const natW = bmp.width || bmp.naturalWidth;
      const natH = bmp.height || bmp.naturalHeight;
      const scale = Math.min(1, 4096 / Math.max(natW, natH));
      const c = document.createElement('canvas');
      c.width = Math.max(1, Math.round(natW * scale));
      c.height = Math.max(1, Math.round(natH * scale));
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.drawImage(bmp, 0, 0, c.width, c.height);
      if (bmp.close) bmp.close();
      if (cmp.previewUrl) URL.revokeObjectURL(cmp.previewUrl);
      cmp.file = f; cmp.canvas = c; cmp.previewUrl = URL.createObjectURL(f);
      cmp.msg = { key: 'cmp.ready', vars: { size: fmtBytes(f.size) }, tone: 'ok' };
      renderCmp();
      await runCmp();
    } catch (err) {
      cmp.file = null; cmp.canvas = null;
      cmp.msg = { key: 'cmp.err', tone: 'err' };
      renderCmp();
    }
  }

  async function runCmp() {
    if (!cmp.canvas) return;
    const id = ++cmp.runId;
    cmp.busy = true;
    renderCmp();
    try {
      const blob = await canvasToBlob(cmp.canvas, MIME[cmp.fmt], cmp.q / 100);
      if (id !== cmp.runId) return; /* a newer run superseded this one */
      cmp.out = { blob: blob, size: blob.size };
      cmp.msg = null;
    } catch (err) {
      cmp.out = null;
      cmp.msg = { key: 'cmp.err', tone: 'err' };
    } finally {
      if (id === cmp.runId) { cmp.busy = false; renderCmp(); }
    }
  }

  let cmpTimer = null;
  function scheduleCmp() {
    if (!cmp.canvas) return;
    clearTimeout(cmpTimer);
    cmpTimer = setTimeout(runCmp, 180);
  }

  wireDrop($('#drop-cmp'), $('#file-cmp'), addCmpFile);
  $$('.seg-btn[data-fmt]').forEach((b) => {
    b.addEventListener('click', () => {
      cmp.fmt = b.dataset.fmt;
      $$('.seg-btn[data-fmt]').forEach((x) => x.classList.toggle('is-active', x === b));
      if (cmp.canvas) { runCmp(); } else { renderCmp(); }
    });
  });
  cmpQuality.addEventListener('input', () => {
    cmp.q = +cmpQuality.value;
    paintSlider();
    scheduleCmp();
  });
  cmpBtn.addEventListener('click', () => {
    if (!cmp.out || !cmp.file) return;
    const name = baseName(cmp.file.name) + '.' + EXT[cmp.fmt];
    download(cmp.out.blob, name);
    cmp.msg = { key: 'cmp.done', vars: { fmt: cmp.fmt.toUpperCase() }, tone: 'ok' };
    renderCmp();
  });

  /* ────────────────────────────────────────────────────────────
   * 4. Privacy Blur
   * ──────────────────────────────────────────────────────────── */
  const blur = {
    canvas: null, ctx: null, overlay: null, octx: null,
    base: null, history: [], drawing: false, start: null,
    msg: null, loaded: false, file: null
  };
  blur.canvas = $('#blur-canvas');
  blur.ctx = blur.canvas.getContext('2d', { willReadFrequently: true });
  blur.overlay = $('#blur-overlay');
  blur.octx = blur.overlay.getContext('2d');

  const blurWork = $('#blur-work');
  const blurStatus = $('#blur-status');
  const blurUndo = $('#btn-blur-undo');
  const blurReset = $('#btn-blur-reset');
  const blurDl = $('#btn-blur-dl');
  const blurStrength = $('#blur-strength');

  function renderBlur() {
    setZoneCompact('#drop-blur', blur.loaded);
    blurWork.hidden = !blur.loaded;
    blurUndo.disabled = !blur.history.length;
    blurReset.disabled = !blur.loaded;
    blurDl.disabled = !blur.loaded;
    paint(blurStatus, blur.msg);
  }

  async function loadBlurFile(files) {
    const f = files[0];
    if (!f) return;
    blur.msg = null;
    if (!isImage(f)) { blur.msg = { key: 'blur.errType', vars: { name: f.name }, tone: 'err' }; renderBlur(); return; }
    try {
      const bmp = await loadBitmap(f);
      const natW = bmp.width || bmp.naturalWidth;
      const natH = bmp.height || bmp.naturalHeight;
      const scale = Math.min(1, 1600 / Math.max(natW, natH));
      const w = Math.max(1, Math.round(natW * scale));
      const h = Math.max(1, Math.round(natH * scale));
      [blur.canvas, blur.overlay].forEach((c) => { c.width = w; c.height = h; });
      blur.ctx.clearRect(0, 0, w, h);
      blur.ctx.fillStyle = '#ffffff';
      blur.ctx.fillRect(0, 0, w, h);
      blur.ctx.drawImage(bmp, 0, 0, w, h);
      if (bmp.close) bmp.close();
      blur.octx.clearRect(0, 0, w, h);
      blur.base = blur.ctx.getImageData(0, 0, w, h);
      blur.history = [];
      blur.loaded = true;
      blur.file = f;
      blur.msg = { key: 'blur.ready', tone: 'ok' };
    } catch (err) {
      blur.loaded = false;
      blur.msg = { key: 'blur.err', tone: 'err' };
    }
    renderBlur();
  }

  function pt(e) {
    const r = blur.overlay.getBoundingClientRect();
    return {
      x: (e.clientX - r.left) * (blur.overlay.width / Math.max(1, r.width)),
      y: (e.clientY - r.top) * (blur.overlay.height / Math.max(1, r.height))
    };
  }
  function rectOf(a, b) {
    const x = Math.min(a.x, b.x), y = Math.min(a.y, b.y);
    return { x: x, y: y, w: Math.abs(b.x - a.x), h: Math.abs(b.y - a.y) };
  }
  function drawSelection(r) {
    const o = blur.octx;
    o.clearRect(0, 0, blur.overlay.width, blur.overlay.height);
    if (r.w < 1 && r.h < 1) return;
    o.fillStyle = 'rgba(99,102,241,.18)';
    o.fillRect(r.x, r.y, r.w, r.h);
    o.strokeStyle = '#4f46e5';
    o.lineWidth = Math.max(1.5, blur.overlay.width / 700);
    o.setLineDash([6, 5]);
    o.strokeRect(r.x, r.y, r.w, r.h);
  }

  function applyMosaic(r) {
    const block = Math.max(4, parseInt(blurStrength.value, 10) || 14);
    const x = Math.max(0, Math.round(r.x));
    const y = Math.max(0, Math.round(r.y));
    const w = Math.min(blur.canvas.width - x, Math.round(r.w));
    const h = Math.min(blur.canvas.height - y, Math.round(r.h));
    if (w < 2 || h < 2) return;

    /* remember just this rectangle so undo stays cheap */
    const snapshot = blur.ctx.getImageData(x, y, w, h);

    const off = document.createElement('canvas');
    off.width = Math.max(1, Math.ceil(w / block));
    off.height = Math.max(1, Math.ceil(h / block));
    const octx = off.getContext('2d');
    octx.imageSmoothingEnabled = true;
    octx.drawImage(blur.canvas, x, y, w, h, 0, 0, off.width, off.height);

    blur.ctx.imageSmoothingEnabled = false;
    blur.ctx.drawImage(off, 0, 0, off.width, off.height, x, y, w, h);
    blur.ctx.imageSmoothingEnabled = true;

    blur.history.push({ x: x, y: y, data: snapshot });
    if (blur.history.length > 30) blur.history.shift();
    blur.msg = null;
    renderBlur();
  }

  blur.overlay.addEventListener('pointerdown', (e) => {
    if (!blur.loaded) return;
    e.preventDefault();
    blur.overlay.setPointerCapture(e.pointerId);
    blur.drawing = true;
    blur.start = pt(e);
    drawSelection(rectOf(blur.start, blur.start));
  });
  blur.overlay.addEventListener('pointermove', (e) => {
    if (!blur.drawing) return;
    e.preventDefault();
    drawSelection(rectOf(blur.start, pt(e)));
  });
  function endDraw(e) {
    if (!blur.drawing) return;
    blur.drawing = false;
    const r = rectOf(blur.start, pt(e));
    drawSelection({ x: 0, y: 0, w: 0, h: 0 });
    if (r.w >= 4 && r.h >= 4) applyMosaic(r);
  }
  blur.overlay.addEventListener('pointerup', endDraw);
  blur.overlay.addEventListener('pointercancel', () => {
    blur.drawing = false;
    drawSelection({ x: 0, y: 0, w: 0, h: 0 });
  });

  blurUndo.addEventListener('click', () => {
    const last = blur.history.pop();
    if (!last) return;
    blur.ctx.putImageData(last.data, last.x, last.y);
    blur.msg = { key: 'blur.undoDone', tone: 'ok' };
    renderBlur();
  });

  blurReset.addEventListener('click', () => {
    if (!blur.loaded || !blur.base) return;
    blur.ctx.putImageData(blur.base, 0, 0);
    blur.history = [];
    blur.msg = { key: 'blur.resetDone', tone: 'ok' };
    renderBlur();
  });

  blurDl.addEventListener('click', () => {
    if (!blur.loaded) return;
    blur.canvas.toBlob((blob) => {
      if (!blob) return;
      const name = baseName(blur.file ? blur.file.name : 'image') + '-masked.png';
      download(blob, name);
      blur.msg = { key: 'blur.done', tone: 'ok' };
      renderBlur();
    }, 'image/png');
  });

  wireDrop($('#drop-blur'), $('#file-blur'), loadBlurFile);

  /* ────────────────────────────────────────────────────────────
   * Language application
   * ──────────────────────────────────────────────────────────── */
  function setMeta(selector, attr, value) {
    const el = document.head.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  }

  function applyLanguage(next, persist) {
    lang = next;
    if (persist !== false) { try { localStorage.setItem(LS_KEY, lang); } catch (e) { /* ignore */ } }
    document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';

    document.title = t('meta.title');
    setMeta('meta[name="description"]', 'content', t('meta.desc'));
    setMeta('meta[property="og:title"]', 'content', t('meta.ogtitle'));
    setMeta('meta[property="og:description"]', 'content', t('meta.ogdesc'));
    setMeta('meta[name="twitter:title"]', 'content', t('meta.ogtitle'));
    setMeta('meta[name="twitter:description"]', 'content', t('meta.ogdesc'));

    $$('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (has(key)) el.textContent = t(key);
    });
    $$('[data-i18n-ph]').forEach((el) => {
      const key = el.getAttribute('data-i18n-ph');
      if (has(key)) el.setAttribute('placeholder', t(key));
    });

    $$('.lang-btn').forEach((b) => b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false'));

    /* repaint everything that is generated in JS */
    renderMerge();
    renderSplit();
    renderI2P();
    renderCmp();
    renderBlur();
  }

  $$('.lang-btn').forEach((b) => {
    b.addEventListener('click', () => applyLanguage(b.dataset.lang));
  });

  /* initial paint */
  applyLanguage(lang, false);

  /* light introspection hook used by the automated UI test */
  window.__zu = {
    get lang() { return lang; },
    get tab() { return (document.querySelector('.tab[aria-selected="true"]') || {}).dataset ? document.querySelector('.tab[aria-selected="true"]').dataset.panel : null; },
    state: { merge: merge, split: split, i2p: i2p, cmp: cmp, blur: blur }
  };
})();
