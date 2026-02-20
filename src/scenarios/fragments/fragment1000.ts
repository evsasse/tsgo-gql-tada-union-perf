import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken998 } from "./fragment998";
import type { FragmentToken999 } from "./fragment999";

export const FRAGMENT_1000 = gql(`
  fragment Fragment1000 on Member159 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_159
    memberCount_159
    memberMetric_159
  }
`);

type FragmentResult1000 = ResultOf<typeof FRAGMENT_1000>;
type FragmentSelf1000 = NonNullable<FragmentResult1000>;

export type FragmentToken1000 =
  | FragmentSelf1000["__typename"]
  | FragmentSelf1000["typenameHint"] | FragmentToken998 | FragmentToken999;
