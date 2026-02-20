import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1047 } from "./fragment1047";
import type { FragmentToken1048 } from "./fragment1048";

export const FRAGMENT_1049 = gql(`
  fragment Fragment1049 on Member208 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_208
    memberCount_208
    memberMetric_208
  }
`);

type FragmentResult1049 = ResultOf<typeof FRAGMENT_1049>;
type FragmentSelf1049 = NonNullable<FragmentResult1049>;

export type FragmentToken1049 =
  | FragmentSelf1049["__typename"]
  | FragmentSelf1049["typenameHint"] | FragmentToken1047 | FragmentToken1048;
