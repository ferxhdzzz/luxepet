import { Schema, model } from "mongoose";

const branchesSchema = new Schema(
  {
    idCostumer: {
      type: Schema.Types.ObjectId,
      ref: "cutomers",
      require: true
    },

    Products: {
      type: String,
      require: true,
    },

    Total: {
      type: Number,
      require: true,
      
    },

    Status: {
        type: String,
        require: true,
      },
   
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("branches", branchesSchema);
