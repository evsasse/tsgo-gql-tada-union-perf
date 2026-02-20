import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1031 } from "./fragment1031";
import type { FragmentToken1032 } from "./fragment1032";

export const FRAGMENT_1033 = gql(`
  fragment Fragment1033 on Member192 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_192
    memberCount_192
    memberMetric_192
  }
`);

type FragmentResult1033 = ResultOf<typeof FRAGMENT_1033>;
type FragmentSelf1033 = NonNullable<FragmentResult1033>;

export type FragmentToken1033 =
  | FragmentSelf1033["__typename"]
  | FragmentSelf1033["typenameHint"] | FragmentToken1031 | FragmentToken1032;
