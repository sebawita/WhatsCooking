import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const SynonymForm = () => {
  const [equivalentMapping, setEquivalentMapping] = useState(true);
  const { register, handleSubmit, watch, control, formState, reset, setValue } =
    useForm({
      word: "",
      synonyms: "",
      mapping: true,
    });

  const { errors } = formState;

  const addSynonym = (data) => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(
      "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whatscooking-agtge/service/synonyms/incoming_webhook/addSynonyms",
      requestOptions
    ).then(() => {
      console.log("SUBMITTED SYNONYM!!");
      reset({
        word: "",
        synonyms: "",
        mapping: true,
      });
      //history.replace("/");
    }); // push goes back to previous page - so replace // fetch returns a promise
  };

  return (
    <div>
      <form
        className="flex my-24 w-3/4 justify-evenly ml-20 border border-gray-300 shadow p-3 rounded "
        onSubmit={handleSubmit(addSynonym)}
      >
        <div className="flex flex-col w-1/3">
          <div className="flex items-center">
            <label
              htmlFor="word"
              className="inline-block text-right mr-6 w-20 font-bold font-body text-2xl"
            >
              Word:
            </label>
            <input
              type="text"
              placeholder="word"
              name="word"
              autoComplete="off"
              {...register("word", { required: true })}
              className="border-b-2 border-gray-400 focus:border-green-800 w-full flex-1 py-2 placeholder-gray-300 outline-none font-body text-2xl"
            />
          </div>
          {errors.word && (
            <p className="text-fuchsia-600 text-right">Cannot be empty.</p>
          )}

          <div className="flex mx-auto my-auto">
            <div className="font-body text-2xl mx-auto my-auto">Equivalent</div>
            <label htmlFor="toggle-switch">
              <input
                type="checkbox"
                name="mapping"
                id="toggle-switch"
                defaultChecked={true}
                className="cursor-pointer mx-16 h-10 my-10 w-24 rounded-full appearance-none bg-gray-800 border-4 border-black checked:bg-gray-800 transition duration-200 relative"
                onChange={() => setEquivalentMapping(!equivalentMapping)}
                {...register("mapping")}
              />
            </label>
            <div className="font-body text-2xl mx-auto my-auto">Explicit</div>
          </div>
        </div>

        <div id="synonyms" className="flex flex-col">
          <textarea
            rows="4"
            cols="25"
            className="border border-gray-400 p-5 outline-none focus:border-tolopea-400 rows=10"
            placeholder={`synonyms separated by a comma...`}
            name={`synonyms`}
            {...register(`synonyms`, { required: true })}
          />
          {errors.synonyms && (
            <p className="text-fuchsia-600 text-center mb-2">
              Cannot be empty.
            </p>
          )}
          <input
            className="px-8 py-4 bg-indigo-800 text-white rounded h-12 my-auto"
            type="submit"
          />
        </div>
      </form>

      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </div>
  );
};

export default SynonymForm;
