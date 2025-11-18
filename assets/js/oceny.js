// Mapowanie ocen na odpowiednią klasę HTML
const ocenyMap = {
  o10: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i></div>',
  o9: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star-half p-1"></i></div>',
  o8: '<div class="flex flex-row w-full text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i></div>',
  o7: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star-half p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i></div>',
  o6: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i></div>',
  o5: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star-half p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i></div>',
  o4: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i></div>',
  o3: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star-half p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i></div>',
  o2: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i></div>',
  o1: '<div class="flex flex-row text-amber-500"><i class="fa-duotone fa-solid fa-star-half p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i></div>',
  o0: '<div class="flex flex-row text-amber-500"><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i><i class="fa-duotone fa-solid fa-star p-1"></i></div>',
  oS: '<div class="flex flex-row text-rose-600"><i class="fa-solid fa-heart p-1"></i><i class="fa-solid fa-heart p-1"></i><i class="fa-solid fa-heart p-1"></i><i class="fa-solid fa-heart p-1"></i><i class="fa-solid fa-heart p-1"></i></div>',
};

function zamienOceny() {
  const container = document.getElementById("Oceny");
  if (!container) return;

  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);

  const toReplace = [];

  while (walker.nextNode()) {
    const node = walker.currentNode;
    for (const key in ocenyMap) {
      if (node.nodeValue.includes(key)) {
        toReplace.push({ node, key });
      }
    }
  }

  for (const { node, key } of toReplace) {
    const wrapper = document.createElement("span");
    wrapper.innerHTML = node.nodeValue.replaceAll(key, ocenyMap[key]);
    node.replaceWith(...wrapper.childNodes);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const oceny = document.getElementById("Oceny");
  if (!oceny) return;
  zamienOceny();
});
