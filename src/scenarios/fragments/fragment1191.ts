import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1189 } from "./fragment1189";
import type { FragmentToken1190 } from "./fragment1190";

export const FRAGMENT_1191 = gql(`
  fragment Fragment1191 on Member70 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_70
    memberCount_70
    memberMetric_70
  }
`);

type FragmentResult1191 = ResultOf<typeof FRAGMENT_1191>;
type FragmentSelf1191 = NonNullable<FragmentResult1191>;

export type FragmentToken1191 =
  | FragmentSelf1191["__typename"]
  | FragmentSelf1191["typenameHint"] | FragmentToken1189 | FragmentToken1190;
