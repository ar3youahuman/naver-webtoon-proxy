export default {
  async fetch(request) {
    const { searchParams } = new URL(request.url);
    const target = searchParams.get("url");

    if (!target || !target.startsWith("https://comic.naver.com")) {
      return new Response("Blocked", { status: 403 });
    }

    const response = await fetch(target, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });

    const content = await response.text();

    return new Response(content, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8'
      }
    });
  }
}
