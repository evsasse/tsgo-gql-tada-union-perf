import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1355 } from "./fragment1355";
import type { FragmentToken1356 } from "./fragment1356";

export const FRAGMENT_1357 = gql(`
  fragment Fragment1357 on Member236 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_236
    memberCount_236
    memberMetric_236
  }
`);

type FragmentResult1357 = ResultOf<typeof FRAGMENT_1357>;
type FragmentSelf1357 = NonNullable<FragmentResult1357>;

export type FragmentToken1357 =
  | FragmentSelf1357["__typename"]
  | FragmentSelf1357["typenameHint"] | FragmentToken1355 | FragmentToken1356;
