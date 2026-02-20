import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2574 } from "./fragment2574";
import type { FragmentToken2575 } from "./fragment2575";

export const FRAGMENT_2576 = gql(`
  fragment Fragment2576 on Member55 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_55
    memberCount_55
    memberMetric_55
  }
`);

type FragmentResult2576 = ResultOf<typeof FRAGMENT_2576>;
type FragmentSelf2576 = NonNullable<FragmentResult2576>;

export type FragmentToken2576 =
  | FragmentSelf2576["__typename"]
  | FragmentSelf2576["typenameHint"] | FragmentToken2574 | FragmentToken2575;
