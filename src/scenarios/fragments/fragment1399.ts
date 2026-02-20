import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1397 } from "./fragment1397";
import type { FragmentToken1398 } from "./fragment1398";

export const FRAGMENT_1399 = gql(`
  fragment Fragment1399 on Member278 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_278
    memberCount_278
    memberMetric_278
  }
`);

type FragmentResult1399 = ResultOf<typeof FRAGMENT_1399>;
type FragmentSelf1399 = NonNullable<FragmentResult1399>;

export type FragmentToken1399 =
  | FragmentSelf1399["__typename"]
  | FragmentSelf1399["typenameHint"] | FragmentToken1397 | FragmentToken1398;
