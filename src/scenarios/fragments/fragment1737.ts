import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1735 } from "./fragment1735";
import type { FragmentToken1736 } from "./fragment1736";

export const FRAGMENT_1737 = gql(`
  fragment Fragment1737 on Member56 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_56
    memberCount_56
    memberMetric_56
  }
`);

type FragmentResult1737 = ResultOf<typeof FRAGMENT_1737>;
type FragmentSelf1737 = NonNullable<FragmentResult1737>;

export type FragmentToken1737 =
  | FragmentSelf1737["__typename"]
  | FragmentSelf1737["typenameHint"] | FragmentToken1735 | FragmentToken1736;
