import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1777 } from "./fragment1777";
import type { FragmentToken1778 } from "./fragment1778";

export const FRAGMENT_1779 = gql(`
  fragment Fragment1779 on Member98 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_98
    memberCount_98
    memberMetric_98
  }
`);

type FragmentResult1779 = ResultOf<typeof FRAGMENT_1779>;
type FragmentSelf1779 = NonNullable<FragmentResult1779>;

export type FragmentToken1779 =
  | FragmentSelf1779["__typename"]
  | FragmentSelf1779["typenameHint"] | FragmentToken1777 | FragmentToken1778;
