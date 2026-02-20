import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1070 } from "./fragment1070";
import type { FragmentToken1071 } from "./fragment1071";

export const FRAGMENT_1072 = gql(`
  fragment Fragment1072 on Member231 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_231
    memberCount_231
    memberMetric_231
  }
`);

type FragmentResult1072 = ResultOf<typeof FRAGMENT_1072>;
type FragmentSelf1072 = NonNullable<FragmentResult1072>;

export type FragmentToken1072 =
  | FragmentSelf1072["__typename"]
  | FragmentSelf1072["typenameHint"] | FragmentToken1070 | FragmentToken1071;
