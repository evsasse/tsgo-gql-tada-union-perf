import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1356 } from "./fragment1356";
import type { FragmentToken1357 } from "./fragment1357";

export const FRAGMENT_1358 = gql(`
  fragment Fragment1358 on Member237 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_237
    memberCount_237
    memberMetric_237
  }
`);

type FragmentResult1358 = ResultOf<typeof FRAGMENT_1358>;
type FragmentSelf1358 = NonNullable<FragmentResult1358>;

export type FragmentToken1358 =
  | FragmentSelf1358["__typename"]
  | FragmentSelf1358["typenameHint"] | FragmentToken1356 | FragmentToken1357;
