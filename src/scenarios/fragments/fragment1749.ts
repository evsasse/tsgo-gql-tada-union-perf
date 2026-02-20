import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1747 } from "./fragment1747";
import type { FragmentToken1748 } from "./fragment1748";

export const FRAGMENT_1749 = gql(`
  fragment Fragment1749 on Member68 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_68
    memberCount_68
    memberMetric_68
  }
`);

type FragmentResult1749 = ResultOf<typeof FRAGMENT_1749>;
type FragmentSelf1749 = NonNullable<FragmentResult1749>;

export type FragmentToken1749 =
  | FragmentSelf1749["__typename"]
  | FragmentSelf1749["typenameHint"] | FragmentToken1747 | FragmentToken1748;
