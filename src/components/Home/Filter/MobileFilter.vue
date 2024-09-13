<template>
  <div id="filters__mobile" class="w-screen h-screen overflow-auto fixed z-20 bg-[#fff] p-5">
    <div class="header__filters flex justify-between items-center">
      <div class="left__filters__mobile flex items-center">
        <img src="/images/svg/filter-black.svg" width="15" alt="" />
        <p class="font-semibold text-base ml-3">Фильтрование</p>
      </div>
      <a href="#" class="text-sm underline text-[#333]"
        ><img
          src="/images/svg/close-filter.svg"
          @click="closeFilters"
          width="25"
          alt=""
      /></a>
    </div>

    <div class="line border border-[#f0f0f0] my-3"></div>
    <!-- ---------------------
    FILTER INSIDE 1
    --------------------- -->
    <div class="filter__inside">
      <div
        class="header__content__filters__inside flex items-center justify-between my-3 cursor-pointer"
        @click="show_closeBlockFilter('content__inside__house__m', 'up__inside')"
      >
        <p class="font-normal text-ms text-[#222]">Внутренняя площадь</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-up up__inside__m"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </div>
      <div class="content__inside__house__m">
        <div
          class="radio__1 flex items-center my-4 cursor-pointer"
          @click="toggleCheckBox('radio__1')"
        >
          <input
            type="checkbox"
            name="radio__1"
            :checked="isChecked('radio__1')"
          />
          <label for="radio__1" class="ml-2 text-sm text-[#222]"
            >до 50 м²</label
          >
        </div>
        <div
          class="radio__2 group flex items-center my-4 cursor-pointer"
          @click="toggleCheckBox('radio__2')"
        >
          <input
            type="checkbox"
            name="radio__2"
            :checked="isChecked('radio__2')"
          />
          <label for="radio__2" class="ml-2 text-sm text-[#222]"
            >50 - 70 м²</label
          >
        </div>
        <div
          class="radio__3 group flex items-center my-4 cursor-pointer"
          @click="toggleCheckBox('radio__3')"
        >
          <input
            type="checkbox"
            name="radio__3"
            :checked="isChecked('radio__3')"
          />
          <label for="radio__3" class="ml-2 text-sm text-[#222]"
            >70 - 100 м²</label
          >
        </div>
        <div
          class="radio__4 group flex items-center my-4 cursor-pointer"
          @click="toggleCheckBox('radio__4')"
        >
          <input
            type="checkbox"
            name="radio__4"
            :checked="isChecked('radio__4')"
          />
          <label for="radio__4" class="ml-2 text-sm text-[#222]"
            >100 - 120 м²</label
          >
        </div>
        <div class="hidden__content__inside">
          <div
            class="radio__5 group flex items-center my-4 cursor-pointer"
            @click="toggleCheckBox('radio__5')"
          >
            <input
              type="checkbox"
              name="radio__5"
              :checked="isChecked('radio__5')"
            />
            <label for="radio__5" class="ml-2 text-sm text-[#222]"
              >120 - 160 м²</label
            >
          </div>
          <div
            class="radio__6 group flex items-center my-4 cursor-pointer"
            @click="toggleCheckBox('radio__6')"
          >
            <input
              type="checkbox"
              name="radio__6"
              :checked="isChecked('radio__6')"
            />
            <label for="radio__6" class="ml-2 text-sm text-[#222]"
              >160 - 200 м²</label
            >
          </div>
          <div
            class="radio__7 group flex items-center my-4 cursor-pointer"
            @click="toggleCheckBox('radio__7')"
          >
            <input
              type="checkbox"
              name="radio__7"
              :checked="isChecked('radio__7')"
            />
            <label for="radio__7" class="ml-2 text-sm text-[#222]"
              >200 и более м²</label
            >
          </div>
        </div>
        <div class="filters__filter flex items-center mb-5">
          <input
            type="text"
            placeholder="От"
            class="border border-[#c4c4c4] rounded-md py-1.5 pl-4 text-base max-w-28 cursor-pointer hover:border-[#717171] outline-none"
          />
          <input
            type="text"
            placeholder="До"
            class="border border-[#c4c4c4] rounded-md py-1.5 pl-4 text-base max-w-28 cursor-pointer hover:border-[#717171] outline-none ml-4"
          />
          <p class="ml-2 text-[#000] text-sm">м²</p>
        </div>
        <a
          class="text-[#d61229] text-sm cursor-pointer"
          @click="showHiddenContent('hidden__content__inside')"
          ><span class="plusOrMinus">{{
            !isMinusOrPlus["hidden__content__inside"] ? "+" : "-"
          }}</span>
          Подробнее (3)</a
        >
      </div>
    </div>

    <div class="line border border-[#f0f0f0] my-3"></div>
    <!-- ---------------------
    FILTER ЭТАЖИ 2
    --------------------- -->
    <div class="content__filters__etage">
      <div
        class="header__content__filters__inside flex items-center justify-between my-3 cursor-pointer"
        @click="show_closeBlockFilter('content__inside__etage__m', 'up__etage')"
      >
        <p class="font-normal text-sm text-[#222]">Этажи</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-up up__etage__m"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </div>
      <div class="content__inside__etage__m">
        <div class="radio__1 group flex items-center my-4 cursor-pointer">
          <input
            type="checkbox"
            name="radio__1"
            class="group-hover:border-[#fff]"
          />
          <label for="radio__1" class="ml-2 text-sm text-[#222]"
            >Холодный чердак</label
          >
        </div>
        <div class="radio__2 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__2" />
          <label for="radio__2" class="ml-2 text-sm text-[#222]"
            >Мансардный этаж</label
          >
        </div>
        <div class="radio__3 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__3" />
          <label for="radio__3" class="ml-2 text-sm text-[#222]"
            >Антресоль</label
          >
        </div>
        <div class="radio__4 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__4" />
          <label for="radio__4" class="ml-2 text-sm text-[#222]">3 этаж</label>
        </div>
        <div class="radio__5 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__5" />
          <label for="radio__5" class="ml-2 text-sm text-[#222]">2 этаж</label>
        </div>
        <div class="radio__6 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__6" />
          <label for="radio__6" class="ml-2 text-sm text-[#222]">1 этаж</label>
        </div>
        <p class="text-sm text-[#222]">Дополнительные возможности</p>
        <div class="hidden__content__etage">
          <div class="radio__7 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__7" />
            <label for="radio__7" class="ml-2 text-sm text-[#222]"
              >Цокольный этаж</label
            >
          </div>
          <div class="radio__8 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__8" />
            <label for="radio__8" class="ml-2 text-sm text-[#222]"
              >Подвальный этаж</label
            >
          </div>
        </div>
        <a
          class="text-[#d61229] text-sm cursor-pointer"
          @click="showHiddenContent('hidden__content__etage')"
          ><span class="plusOrMinus">{{
            !isMinusOrPlus["hidden__content__etage"] ? "+" : "-"
          }}</span>
          Подробнее (2)</a
        >
      </div>
    </div>

    <div class="line border border-[#f0f0f0] my-3"></div>
    <!-- ----------------------------
    FILTER GARAGE 3
    ---------------------------- -->
    <div class="content__filters__garage">
      <div
        class="header__content__filters__inside flex items-center justify-between my-3 cursor-pointer"
        @click="
          show_closeBlockFilter('content__inside__garage__m', 'up__garage__m')
        "
      >
        <p class="font-normal text-sm text-[#222]">Гараж</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-up up__garage__m"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </div>
      <div class="content__inside__garage__m">
        <p class="text-sm text-[#222]">Количество машиномест</p>
        <div class="radio__1 group flex items-center my-4 cursor-pointer">
          <input
            type="checkbox"
            name="radio__1"
            class="group-hover:border-[#fff]"
          />
          <label for="radio__1" class="ml-2 text-sm text-[#222]"
            >Нет гаража</label
          >
        </div>
        <div class="radio__2 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__2" />
          <label for="radio__2" class="ml-2 text-sm text-[#222]"
            >На 1 авто</label
          >
        </div>
        <div class="radio__3 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__3" />
          <label for="radio__3" class="ml-2 text-sm text-[#222]"
            >На 2 авто</label
          >
        </div>
        <div class="radio__4 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__4" />
          <label for="radio__4" class="ml-2 text-sm text-[#222]"
            >На 3 и более авто</label
          >
        </div>
        <div class="content__hidden__garage">
          <div class="radio__5 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__5" />
            <label for="radio__5" class="ml-2 text-sm text-[#222]"
              >Навес для авто</label
            >
          </div>
          <p class="text-sm text-[#222]">Количество машиномест</p>
          <div class="radio__6 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__6" />
            <label for="radio__6" class="ml-2 text-sm text-[#222]"
              >Встроенный гараж</label
            >
          </div>
          <div class="radio__7 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__7" />
            <label for="radio__7" class="ml-2 text-sm text-[#222]"
              >Подземный гараж</label
            >
          </div>
          <div class="radio__8 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__8" />
            <label for="radio__8" class="ml-2 text-sm text-[#222]"
              >Пристроенный гараж</label
            >
          </div>
          <div class="radio__8 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__8" />
            <label for="radio__8" class="ml-2 text-sm text-[#222]"
              >Пристроенный навес</label
            >
          </div>
        </div>
        <a
          class="text-[#d61229] text-sm cursor-pointer"
          @click="showHiddenContent('content__hidden__garage')"
          ><span class="plusOrMinus">{{
            !isMinusOrPlus["content__hidden__garage"] ? "+" : "-"
          }}</span>
          Подробнее (6)</a
        >
      </div>
    </div>

    <div class="line border border-[#f0f0f0] my-3"></div>
    <!-- ----------------------------
    FILTER СПАЛЬНИ 4
    ---------------------------- -->
    <div class="content__filters__sleeping__m">
      <div
        class="header__content__filters__inside flex items-center justify-between my-3 cursor-pointer"
        @click="show_closeBlockFilter('content__inside__sleep__m', 'up__sleep')"
      >
        <p class="font-normal text-sm text-[#222]">Спальни</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-up up__sleep__m"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </div>
      <div class="content__inside__sleep__m">
        <p class="text-sm text-[#222]">Комнаты (без гостинной)</p>
        <div class="flex items-center justify-between my-3">
          <p
            class="border border-[#c4c4c4] text-xs text-[#222] py-1 px-4 rounded-full mr-2 flex items-center justify-center cursor-pointer hover:border-[#717171] transition"
          >
            до 2
          </p>
          <p
            class="border border-[#c4c4c4] text-xs text-[#222] py-1 px-4 rounded-full mr-2 flex items-center justify-center cursor-pointer hover:border-[#717171] transition"
          >
            3
          </p>
          <p
            class="border border-[#c4c4c4] text-xs text-[#222] py-1 px-4 rounded-full mr-2 flex items-center justify-center cursor-pointer hover:border-[#717171] transition"
          >
            4
          </p>
          <p
            class="border border-[#c4c4c4] text-xs text-[#222] py-1 px-4 rounded-full mr-2 flex items-center justify-center cursor-pointer hover:border-[#717171] transition"
          >
            5
          </p>
          <p
            class="border border-[#c4c4c4] text-xs text-[#222] py-1 px-4 rounded-full mr-2 flex items-center justify-center cursor-pointer hover:border-[#717171] transition"
          >
            6+
          </p>
        </div>
        <div class="radio__1 group flex items-center my-4 cursor-pointer">
          <input
            type="checkbox"
            name="radio__1"
            class="group-hover:border-[#fff]"
          />
          <label for="radio__1" class="ml-2 text-sm text-[#222]"
            >Комната на первом этаже</label
          >
        </div>
        <p class="text-sm text-[#222]">Кол-во гардеробных</p>
        <div class="flex items-center justify-start my-3">
          <p
            class="border border-[#c4c4c4] text-xs text-[#222] py-1 px-4 rounded-full mr-2 flex items-center justify-center cursor-pointer hover:border-[#717171] transition"
          >
            1
          </p>
          <p
            class="border border-[#c4c4c4] text-xs text-[#222] py-1 px-4 rounded-full mr-2 flex items-center justify-center cursor-pointer hover:border-[#717171] transition"
          >
            2
          </p>
          <p
            class="border border-[#c4c4c4] text-xs text-[#222] py-1 px-4 rounded-full mr-2 flex items-center justify-center cursor-pointer hover:border-[#717171] transition"
          >
            3+
          </p>
        </div>
        <p class="text-sm text-[#222]">Ванные с туалетами</p>
        <div class="flex items-center justify-start my-3">
          <p
            class="border border-[#c4c4c4] text-xs text-[#222] py-1 px-4 rounded-full mr-2 flex items-center justify-center cursor-pointer hover:border-[#717171] transition"
          >
            1
          </p>
          <p
            class="border border-[#c4c4c4] text-xs text-[#222] py-1 px-4 rounded-full mr-2 flex items-center justify-center cursor-pointer hover:border-[#717171] transition"
          >
            2
          </p>
          <p
            class="border border-[#c4c4c4] text-xs text-[#222] py-1 px-4 rounded-full mr-2 flex items-center justify-center cursor-pointer hover:border-[#717171] transition"
          >
            3
          </p>
          <p
            class="border border-[#c4c4c4] text-xs text-[#222] py-1 px-4 rounded-full mr-2 flex items-center justify-center cursor-pointer hover:border-[#717171] transition"
          >
            4+
          </p>
        </div>

        <p class="text-sm text-[#222]">Кухня</p>
        <div class="radio__2 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__2" />
          <label for="radio__2" class="ml-2 text-sm text-[#222]"
            >Кухня совмещённая с гостиной</label
          >
        </div>
        <div class="radio__3 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__3" />
          <label for="radio__3" class="ml-2 text-sm text-[#222]"
            >Изолированная кухня</label
          >
        </div>
        <div class="radio__4 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__4" />
          <label for="radio__4" class="ml-2 text-sm text-[#222]">Остров</label>
        </div>
        <div class="radio__5 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__5" />
          <label for="radio__5" class="ml-2 text-sm text-[#222]"
            >Кладовая при кухне</label
          >
        </div>
        <div class="content__hidden__sleep">
          <div class="radio__6 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__6" />
            <label for="radio__6" class="ml-2 text-sm text-[#222]"
              >Спальня с ванной комнатой</label
            >
          </div>
          <div class="radio__7 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__7" />
            <label for="radio__7" class="ml-2 text-sm text-[#222]"
              >Спальня с гардеробной</label
            >
          </div>
          <div class="radio__8 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__8" />
            <label for="radio__8" class="ml-2 text-sm text-[#222]"
              >Кабинет</label
            >
          </div>
          <div class="radio__8 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__8" />
            <label for="radio__8" class="ml-2 text-sm text-[#222]"
              >Постирочная</label
            >
          </div>
          <div class="radio__6 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__6" />
            <label for="radio__6" class="ml-2 text-sm text-[#222]"
              >Котельная</label
            >
          </div>
          <div class="radio__7 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__7" />
            <label for="radio__7" class="ml-2 text-sm text-[#222]"
              >Кладовая для вещей</label
            >
          </div>
          <div class="radio__8 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__8" />
            <label for="radio__8" class="ml-2 text-sm text-[#222]"
              >Спортзал</label
            >
          </div>
          <div class="radio__8 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__8" />
            <label for="radio__8" class="ml-2 text-sm text-[#222]"
              >Бильярдная</label
            >
          </div>
          <div class="radio__7 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__7" />
            <label for="radio__7" class="ml-2 text-sm text-[#222]"
              >Зимний сад</label
            >
          </div>
          <div class="radio__8 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__8" />
            <label for="radio__8" class="ml-2 text-sm text-[#222]"
              >Внутренний двор / атриум</label
            >
          </div>
          <div class="radio__8 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__8" />
            <label for="radio__8" class="ml-2 text-sm text-[#222]"
              >Сауна / Баня</label
            >
          </div>
        </div>
        <a
          class="text-[#d61229] text-sm cursor-pointer"
          @click="showHiddenContent('content__hidden__sleep')"
          ><span class="plusOrMinus">{{
            !isMinusOrPlus["content__hidden__sleep"] ? "+" : "-"
          }}</span>
          Подробнее (6)</a
        >
      </div>
    </div>

    <div class="line border border-[#f0f0f0] my-3"></div>
    <!-- ---------------------
    FILTER FORM VILLAGE 5
    --------------------- -->
    <div class="filter__inside">
      <div
        class="header__content__filters__inside flex items-center justify-between my-3 cursor-pointer"
        @click="
          show_closeBlockFilter(
            'content__inside__form__village__m',
            'up__form__village'
          )
        "
      >
        <p class="font-normal text-sm text-[#222]">Форма участка</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-up up__form__village__m"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </div>
      <div class="content__inside__form__village__m">
        <div class="radio__1 group flex items-center my-4 cursor-pointer">
          <input
            type="checkbox"
            name="radio__1"
            class="group-hover:border-[#fff]"
          />
          <label for="radio__1" class="ml-2 text-sm text-[#222]"
            >Для узкого участка</label
          >
        </div>
        <div class="radio__2 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__2" />
          <label for="radio__2" class="ml-2 text-sm text-[#222]"
            >Для участка на склоне</label
          >
        </div>
      </div>
    </div>

    <div class="line border border-[#f0f0f0] my-3"></div>
    <!-- ---------------------
    FILTER FORM КРЫШИ 6
    --------------------- -->
    <div class="filter__inside">
      <div
        class="header__content__filters__inside flex items-center justify-between my-3 cursor-pointer"
        @click="
          show_closeBlockFilter('content__inside__form__up__m', 'up__form__up')
        "
      >
        <p class="font-normal text-sm text-[#222]">Форма крыши</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-up up__form__up__m"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </div>
      <div class="content__inside__form__up__m">
        <div class="radio__1 group flex items-center my-4 cursor-pointer">
          <input
            type="checkbox"
            name="radio__1"
            class="group-hover:border-[#fff]"
          />
          <label for="radio__1" class="ml-2 text-sm text-[#222]"
            >Односкатная (косая)</label
          >
        </div>
        <div class="radio__2 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__2" />
          <label for="radio__2" class="ml-2 text-sm text-[#222]"
            >Двускатная</label
          >
        </div>
        <div class="radio__1 group flex items-center my-4 cursor-pointer">
          <input
            type="checkbox"
            name="radio__1"
            class="group-hover:border-[#fff]"
          />
          <label for="radio__1" class="ml-2 text-sm text-[#222]"
            >Четырехскатная</label
          >
        </div>
        <div class="radio__2 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__2" />
          <label for="radio__2" class="ml-2 text-sm text-[#222]">Плоская</label>
        </div>
        <div class="radio__1 group flex items-center my-4 cursor-pointer">
          <input
            type="checkbox"
            name="radio__1"
            class="group-hover:border-[#fff]"
          />
          <label for="radio__1" class="ml-2 text-sm text-[#222]"
            >Сложной формы</label
          >
        </div>
        <p class="text-sm text-[#222]">Опции крыши</p>
        <div class="radio__2 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__2" />
          <label for="radio__2" class="ml-2 text-sm text-[#222]"
            >Слуховое окно</label
          >
        </div>
        <div class="hidden__content__form__up">
          <div class="radio__1 group flex items-center my-4 cursor-pointer">
            <input
              type="checkbox"
              name="radio__1"
              class="group-hover:border-[#fff]"
            />
            <label for="radio__1" class="ml-2 text-sm text-[#222]"
              >Кукушка</label
            >
          </div>
          <div class="radio__2 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__2" />
            <label for="radio__2" class="ml-2 text-sm text-[#222]"
              >Без скатов (Барн)</label
            >
          </div>
        </div>
        <a
          class="text-[#d61229] text-sm cursor-pointer"
          @click="showHiddenContent('hidden__content__form__up')"
          ><span class="plusOrMinus">{{
            !isMinusOrPlus["hidden__content__form__up"] ? "+" : "-"
          }}</span>
          Подробнее (2)</a
        >
      </div>
    </div>

    <div class="line border border-[#f0f0f0] my-3"></div>
    <!-- ---------------------
    FILTER STYLE HOUSE 7
    --------------------- -->
    <div class="filter__inside">
      <div
        class="header__content__filters__inside flex items-center justify-between my-3 cursor-pointer"
        @click="
          show_closeBlockFilter('content__style__home__m', 'up__style__home')
        "
      >
        <p class="font-normal text-sm text-[#222]">Стиль дома</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-up up__style__home__m"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </div>
      <div class="content__style__home__m">
        <div class="radio__1 group flex items-center my-4 cursor-pointer">
          <input
            type="checkbox"
            name="radio__1"
            class="group-hover:border-[#fff]"
          />
          <label for="radio__1" class="ml-2 text-sm text-[#222]"
            >Европейский</label
          >
        </div>
        <div class="radio__2 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__2" />
          <label for="radio__2" class="ml-2 text-sm text-[#222]">Хай-тек</label>
        </div>
        <div class="radio__1 group flex items-center my-4 cursor-pointer">
          <input
            type="checkbox"
            name="radio__1"
            class="group-hover:border-[#fff]"
          />
          <label for="radio__1" class="ml-2 text-sm text-[#222]"
            >Минимализм</label
          >
        </div>
        <div class="radio__2 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__2" />
          <label for="radio__2" class="ml-2 text-sm text-[#222]">Шале</label>
        </div>
        <div class="hidden__content__style__house">
          <div class="radio__1 group flex items-center my-4 cursor-pointer">
            <input
              type="checkbox"
              name="radio__1"
              class="group-hover:border-[#fff]"
            />
            <label for="radio__1" class="ml-2 text-sm text-[#222]"
              >Барнхаус</label
            >
          </div>
          <div class="radio__2 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__2" />
            <label for="radio__2" class="ml-2 text-sm text-[#222]">Райт</label>
          </div>
          <div class="radio__1 group flex items-center my-4 cursor-pointer">
            <input
              type="checkbox"
              name="radio__1"
              class="group-hover:border-[#fff]"
            />
            <label for="radio__1" class="ml-2 text-sm text-[#222]"
              >Фахверк</label
            >
          </div>
          <div class="radio__2 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__2" />
            <label for="radio__2" class="ml-2 text-sm text-[#222]"
              >Классический</label
            >
          </div>
          <div class="radio__2 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__2" />
            <label for="radio__2" class="ml-2 text-sm text-[#222]"
              >Английский</label
            >
          </div>
          <div class="radio__1 group flex items-center my-4 cursor-pointer">
            <input
              type="checkbox"
              name="radio__1"
              class="group-hover:border-[#fff]"
            />
            <label for="radio__1" class="ml-2 text-sm text-[#222]"
              >Модерн</label
            >
          </div>
        </div>
        <a
          class="text-[#d61229] text-sm cursor-pointer"
          @click="showHiddenContent('hidden__content__style__house')"
          ><span class="plusOrMinus">{{
            !isMinusOrPlus["hidden__content__style__house"] ? "+" : "-"
          }}</span>
          Подробнее (6)</a
        >
      </div>
    </div>

    <div class="line border border-[#f0f0f0] my-3"></div>
    <!-- ---------------------
    FILTER MATERIAL 8
    --------------------- -->
    <div class="filter__inside">
      <div
        class="header__content__filters__inside flex items-center justify-between my-3 cursor-pointer"
        @click="show_closeBlockFilter('content__material__m', 'up__material')"
      >
        <p class="font-normal text-sm text-[#222]">Материал несущих стен</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-up up__material__m"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </div>
      <div class="content__material__m">
        <div class="radio__1 group flex items-center my-4 cursor-pointer">
          <input
            type="checkbox"
            name="radio__1"
            class="group-hover:border-[#fff]"
          />
          <label for="radio__1" class="ml-2 text-sm text-[#222]"
            >Газобетон</label
          >
        </div>
        <div class="radio__2 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__2" />
          <label for="radio__2" class="ml-2 text-sm text-[#222]"
            >Деревянный каркас</label
          >
        </div>
        <div class="radio__1 group flex items-center my-4 cursor-pointer">
          <input
            type="checkbox"
            name="radio__1"
            class="group-hover:border-[#fff]"
          />
          <label for="radio__1" class="ml-2 text-sm text-[#222]">Кирпич</label>
        </div>
        <div class="radio__2 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__2" />
          <label for="radio__2" class="ml-2 text-sm text-[#222]">Брус</label>
        </div>
        <div class="hidden__content__material">
          <div class="radio__1 group flex items-center my-4 cursor-pointer">
            <input
              type="checkbox"
              name="radio__1"
              class="group-hover:border-[#fff]"
            />
            <label for="radio__1" class="ml-2 text-sm text-[#222]"
              >Клееный брус</label
            >
          </div>
          <div class="radio__2 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__2" />
            <label for="radio__2" class="ml-2 text-sm text-[#222]"
              >Бревно</label
            >
          </div>
          <div class="radio__1 group flex items-center my-4 cursor-pointer">
            <input
              type="checkbox"
              name="radio__1"
              class="group-hover:border-[#fff]"
            />
            <label for="radio__1" class="ml-2 text-sm text-[#222]"
              >Деревянный кирпич</label
            >
          </div>
          <div class="radio__2 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__2" />
            <label for="radio__2" class="ml-2 text-sm text-[#222]"
              >Каркасно-панельные</label
            >
          </div>
          <div class="radio__2 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__2" />
            <label for="radio__2" class="ml-2 text-sm text-[#222]">SIP</label>
          </div>
          <div class="radio__1 group flex items-center my-4 cursor-pointer">
            <input
              type="checkbox"
              name="radio__1"
              class="group-hover:border-[#fff]"
            />
            <label for="radio__1" class="ml-2 text-sm text-[#222]"
              >Фахверк</label
            >
          </div>
          <div class="radio__1 group flex items-center my-4 cursor-pointer">
            <input
              type="checkbox"
              name="radio__1"
              class="group-hover:border-[#fff]"
            />
            <label for="radio__1" class="ml-2 text-sm text-[#222]"
              >Монолитно-каркасный</label
            >
          </div>
          <div class="radio__2 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__2" />
            <label for="radio__2" class="ml-2 text-sm text-[#222]"
              >Монолитные (VELOX)</label
            >
          </div>
          <div class="radio__2 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__2" />
            <label for="radio__2" class="ml-2 text-sm text-[#222]">ЛСТК</label>
          </div>
          <div class="radio__1 group flex items-center my-4 cursor-pointer">
            <input
              type="checkbox"
              name="radio__1"
              class="group-hover:border-[#fff]"
            />
            <label for="radio__1" class="ml-2 text-sm text-[#222]">CLT</label>
          </div>
        </div>
        <a
          class="text-[#d61229] text-sm cursor-pointer"
          @click="showHiddenContent('hidden__content__material')"
          ><span class="plusOrMinus">{{
            !isMinusOrPlus["hidden__content__material"] ? "+" : "-"
          }}</span>
          Подробнее (10)</a
        >
      </div>
    </div>

    <div class="line border border-[#f0f0f0] my-3"></div>
    <!-- ---------------------
    FILTER FORM HOUSE 9
    --------------------- -->
    <div class="filter__inside">
      <div
        class="header__content__filters__inside flex items-center justify-between my-3 cursor-pointer"
        @click="
          show_closeBlockFilter('content__form__house__m', 'up__form__house')
        "
      >
        <p class="font-normal text-sm text-[#222]">Форма дома</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-up up__form__house__m"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </div>
      <div class="content__form__house__m">
        <div class="radio__1 group flex items-center my-4 cursor-pointer">
          <input
            type="checkbox"
            name="radio__1"
            class="group-hover:border-[#fff]"
          />
          <label for="radio__1" class="ml-2 text-sm text-[#222]"
            >Прямоугольный</label
          >
        </div>
        <div class="radio__2 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__2" />
          <label for="radio__2" class="ml-2 text-sm text-[#222]"
            >Квадратный</label
          >
        </div>
        <div class="hidden__content__form__house">
          <div class="radio__1 group flex items-center my-4 cursor-pointer">
            <input
              type="checkbox"
              name="radio__1"
              class="group-hover:border-[#fff]"
            />
            <label for="radio__1" class="ml-2 text-sm text-[#222]"
              >Угловой (буквой Г)</label
            >
          </div>
          <div class="radio__2 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__2" />
            <label for="radio__2" class="ml-2 text-sm text-[#222]"
              >П-образный (полукаре)</label
            >
          </div>
          <div class="radio__1 group flex items-center my-4 cursor-pointer">
            <input
              type="checkbox"
              name="radio__1"
              class="group-hover:border-[#fff]"
            />
            <label for="radio__1" class="ml-2 text-sm text-[#222]"
              >Т-образный (буквой Т)</label
            >
          </div>
          <div class="radio__2 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__2" />
            <label for="radio__2" class="ml-2 text-sm text-[#222]"
              >Круглый</label
            >
          </div>
          <div class="radio__2 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__2" />
            <label for="radio__2" class="ml-2 text-sm text-[#222]"
              >Сложной формы</label
            >
          </div>
        </div>
        <a
          class="text-[#d61229] text-sm cursor-pointer"
          @click="showHiddenContent('hidden__content__form__house')"
          ><span class="plusOrMinus">{{
            !isMinusOrPlus["hidden__content__form__house"] ? "+" : "-"
          }}</span>
          Подробнее (5)</a
        >
      </div>
    </div>

    <div class="line border border-[#f0f0f0] my-3"></div>
    <!-- ---------------------
    FILTER TERASSA 10
    --------------------- -->
    <div class="filter__inside">
      <div
        class="header__content__filters__inside flex items-center justify-between my-3 cursor-pointer"
        @click="show_closeBlockFilter('content__terassa__m', 'up__terassa')"
      >
        <p class="font-normal text-sm text-[#222]">Терраса</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-up up__terassa__m"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </div>
      <div class="content__terassa__m">
        <div class="radio__1 group flex items-center my-4 cursor-pointer">
          <input
            type="checkbox"
            name="radio__1"
            class="group-hover:border-[#fff]"
          />
          <label for="radio__1" class="ml-2 text-sm text-[#222]"
            >Терраса открыта</label
          >
        </div>
        <div class="radio__2 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__2" />
          <label for="radio__2" class="ml-2 text-sm text-[#222]"
            >Терраса крытая</label
          >
        </div>
        <div class="radio__1 group flex items-center my-4 cursor-pointer">
          <input
            type="checkbox"
            name="radio__1"
            class="group-hover:border-[#fff]"
          />
          <label for="radio__1" class="ml-2 text-sm text-[#222]"
            >Терраса застеклённое (веранда)</label
          >
        </div>
        <div class="radio__2 group flex items-center my-4 cursor-pointer">
          <input type="checkbox" name="radio__2" />
          <label for="radio__2" class="ml-2 text-sm text-[#222]"
            >Без террасы</label
          >
        </div>
        <div class="hidden__content__terassa">
          <div class="radio__1 group flex items-center my-4 cursor-pointer">
            <input
              type="checkbox"
              name="radio__1"
              class="group-hover:border-[#fff]"
            />
            <label for="radio__1" class="ml-2 text-sm text-[#222]"
              >Из гостиной</label
            >
          </div>
          <div class="radio__2 group flex items-center my-4 cursor-pointer">
            <input type="checkbox" name="radio__2" />
            <label for="radio__2" class="ml-2 text-sm text-[#222]"
              >Из кухни</label
            >
          </div>
        </div>
        <a
          class="text-[#d61229] text-sm cursor-pointer"
          @click="showHiddenContent('hidden__content__terassa')"
          ><span class="plusOrMinus">{{
            !isMinusOrPlus["hidden__content__terassa"] ? "+" : "-"
          }}</span>
          Подробнее (2)</a
        >
      </div>
    </div>

    <ButtonFilter :content="'Показать'" :type="'navigate'" />

    <!-- <div class="btn-show-index-nav fixed bottom-0 right-0">
      <p
        class="bg-[#d61229] w-screen flex text-[#fff] p-4 justify-center font-semibold"
        @click="closeFilters"
      >
        Показать
      </p>
    </div> -->
  </div>
</template>

<script>
import gsap from "gsap";
import ButtonFilter from "../ButtonFilter.vue";

export default {
  data() {
    return {
      isBlockFilterOpenInside: false,
      isHiddenBlockFilter: false,
      isMinusOrPlus: {},
      isCheckBox: {},
    };
  },
  components: {
    ButtonFilter,
  },
  methods: {
    show_closeBlockFilter(element, str) {
      this.isBlockFilterOpenInside = !this.isBlockFilterOpenInside;

      if (this.isBlockFilterOpenInside) {
        gsap.to(`.${element}`, 0.2, {
          display: "block",
        });
        gsap.to(`.${str}`, 0.2, {
          rotate: "0",
        });
      } else {
        gsap.to(`.${element}`, 0.2, {
          display: "none",
        });
        gsap.to(`.${str}`, 0.2, {
          rotate: "-180",
        });
      }
    },
    showHiddenContent(elements) {
      this.isHiddenBlockFilter = !this.isHiddenBlockFilter;

      if (this.isHiddenBlockFilter) {
        gsap.to(`.${elements}`, 0.2, {
          display: "block",
        });
        this.isMinusOrPlus[elements] = true;
      } else {
        gsap.to(`.${elements}`, 0.2, {
          display: "none",
        });
        this.isMinusOrPlus[elements] = false;
      }
    },
    toggleCheckBox(name) {
      this.isCheckBox[name] = !this.isCheckBox[name];
    },
    isChecked(name) {
      return this.isCheckBox[name] || false;
    },
    closeFilters() {
      gsap.to("#filters__mobile", 0.5, {
        x: 800,
        display: "none",
      });
    },
  },
  mounted() {
    // ----------------------------
    // Скрытые элементы mobile filters
    // ----------------------------
    gsap.set(".content__inside__house__m", { display: "none" });
    gsap.set(".content__inside__etage__m", { display: "none" });
    gsap.set(".content__inside__garage__m", { display: "none" });
    gsap.set(".content__inside__sleep__m", { display: "none" });
    gsap.set(".content__inside__form__village__m", { display: "none" });
    gsap.set(".content__inside__form__up__m", { display: "none" });
    gsap.set(".content__style__home__m", { display: "none" });
    gsap.set(".content__material__m", { display: "none" });
    gsap.set(".content__form__house__m", { display: "none" });
    gsap.set(".content__terassa__m", { display: "none" });
    // ----------------------------
    // Скрытые элементы (Подробнее)
    // ----------------------------
    gsap.set(".hidden__content__inside", { display: "none" });
    gsap.set(".hidden__content__etage", { display: "none" });
    gsap.set(".content__hidden__garage", { display: "none" });
    gsap.set(".content__hidden__sleep", { display: "none" });
    gsap.set(".hidden__content__form__up", { display: "none" });
    gsap.set(".hidden__content__style__house", { display: "none" });
    gsap.set(".hidden__content__material", { display: "none" });
    gsap.set(".hidden__content__form__house", { display: "none" });
    gsap.set(".hidden__content__terassa", { display: "none" });
  },
};
</script>

<style>
.up__inside__m,
.up__etage__m,
.up__garage__m,
.up__sleep__m,
.up__form__village__m,
.up__form__up__m,
.up__style__home__m,
.up__material__m,
.up__form__house__m,
.up__terassa__m {
  transform: rotate(95deg);
}
</style>
