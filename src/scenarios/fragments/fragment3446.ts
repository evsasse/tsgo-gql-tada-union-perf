import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3444 } from "./fragment3444";
import type { FragmentToken3445 } from "./fragment3445";

export const FRAGMENT_3446 = gql(`
  fragment Fragment3446 on Member85 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_85
    memberCount_85
    memberMetric_85
  }
`);

type FragmentResult3446 = ResultOf<typeof FRAGMENT_3446>;
type FragmentSelf3446 = NonNullable<FragmentResult3446>;

export type FragmentToken3446 =
  | FragmentSelf3446["__typename"]
  | FragmentSelf3446["typenameHint"] | FragmentToken3444 | FragmentToken3445;
