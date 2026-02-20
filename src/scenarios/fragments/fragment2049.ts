import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2047 } from "./fragment2047";
import type { FragmentToken2048 } from "./fragment2048";

export const FRAGMENT_2049 = gql(`
  fragment Fragment2049 on Member88 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_88
    memberCount_88
    memberMetric_88
  }
`);

type FragmentResult2049 = ResultOf<typeof FRAGMENT_2049>;
type FragmentSelf2049 = NonNullable<FragmentResult2049>;

export type FragmentToken2049 =
  | FragmentSelf2049["__typename"]
  | FragmentSelf2049["typenameHint"] | FragmentToken2047 | FragmentToken2048;
