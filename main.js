const checkInUrl = "https://ikuuu.pw/user/checkin";

function checkIn(cookie) {
  fetch(checkInUrl, {
    method: "POST",
    headers: {
      Cookie: cookie,
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      if (resJson) {
        console.log(resJson.msg);
      }
    });
}

async function main() {
  let cookie;

  if (process.env.COOKIE) {
    cookie = process.env.COOKIE;
  } else {
    console.log("COOKIE NOT FOUND");
    process.exit(1);
  }

  checkIn(cookie);
}

main();
