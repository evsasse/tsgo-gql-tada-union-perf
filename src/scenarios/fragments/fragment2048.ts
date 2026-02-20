import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2046 } from "./fragment2046";
import type { FragmentToken2047 } from "./fragment2047";

export const FRAGMENT_2048 = gql(`
  fragment Fragment2048 on Member87 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_87
    memberCount_87
    memberMetric_87
  }
`);

type FragmentResult2048 = ResultOf<typeof FRAGMENT_2048>;
type FragmentSelf2048 = NonNullable<FragmentResult2048>;

export type FragmentToken2048 =
  | FragmentSelf2048["__typename"]
  | FragmentSelf2048["typenameHint"] | FragmentToken2046 | FragmentToken2047;
