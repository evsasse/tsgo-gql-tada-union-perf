import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1328 } from "./fragment1328";
import type { FragmentToken1329 } from "./fragment1329";

export const FRAGMENT_1330 = gql(`
  fragment Fragment1330 on Member209 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_209
    memberCount_209
    memberMetric_209
  }
`);

type FragmentResult1330 = ResultOf<typeof FRAGMENT_1330>;
type FragmentSelf1330 = NonNullable<FragmentResult1330>;

export type FragmentToken1330 =
  | FragmentSelf1330["__typename"]
  | FragmentSelf1330["typenameHint"] | FragmentToken1328 | FragmentToken1329;
