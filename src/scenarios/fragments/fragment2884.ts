import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2882 } from "./fragment2882";
import type { FragmentToken2883 } from "./fragment2883";

export const FRAGMENT_2884 = gql(`
  fragment Fragment2884 on Member83 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_83
    memberCount_83
    memberMetric_83
  }
`);

type FragmentResult2884 = ResultOf<typeof FRAGMENT_2884>;
type FragmentSelf2884 = NonNullable<FragmentResult2884>;

export type FragmentToken2884 =
  | FragmentSelf2884["__typename"]
  | FragmentSelf2884["typenameHint"] | FragmentToken2882 | FragmentToken2883;
