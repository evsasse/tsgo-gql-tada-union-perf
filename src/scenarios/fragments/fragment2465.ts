import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2463 } from "./fragment2463";
import type { FragmentToken2464 } from "./fragment2464";

export const FRAGMENT_2465 = gql(`
  fragment Fragment2465 on Member224 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_224
    memberCount_224
    memberMetric_224
  }
`);

type FragmentResult2465 = ResultOf<typeof FRAGMENT_2465>;
type FragmentSelf2465 = NonNullable<FragmentResult2465>;

export type FragmentToken2465 =
  | FragmentSelf2465["__typename"]
  | FragmentSelf2465["typenameHint"] | FragmentToken2463 | FragmentToken2464;
