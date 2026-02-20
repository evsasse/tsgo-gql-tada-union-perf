import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1176 } from "./fragment1176";
import type { FragmentToken1177 } from "./fragment1177";

export const FRAGMENT_1178 = gql(`
  fragment Fragment1178 on Member57 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_57
    memberCount_57
    memberMetric_57
  }
`);

type FragmentResult1178 = ResultOf<typeof FRAGMENT_1178>;
type FragmentSelf1178 = NonNullable<FragmentResult1178>;

export type FragmentToken1178 =
  | FragmentSelf1178["__typename"]
  | FragmentSelf1178["typenameHint"] | FragmentToken1176 | FragmentToken1177;
