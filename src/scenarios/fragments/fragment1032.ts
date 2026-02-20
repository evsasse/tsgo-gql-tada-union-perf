import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1030 } from "./fragment1030";
import type { FragmentToken1031 } from "./fragment1031";

export const FRAGMENT_1032 = gql(`
  fragment Fragment1032 on Member191 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_191
    memberCount_191
    memberMetric_191
  }
`);

type FragmentResult1032 = ResultOf<typeof FRAGMENT_1032>;
type FragmentSelf1032 = NonNullable<FragmentResult1032>;

export type FragmentToken1032 =
  | FragmentSelf1032["__typename"]
  | FragmentSelf1032["typenameHint"] | FragmentToken1030 | FragmentToken1031;
