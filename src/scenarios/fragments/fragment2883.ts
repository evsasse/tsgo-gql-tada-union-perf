import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2881 } from "./fragment2881";
import type { FragmentToken2882 } from "./fragment2882";

export const FRAGMENT_2883 = gql(`
  fragment Fragment2883 on Member82 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_82
    memberCount_82
    memberMetric_82
  }
`);

type FragmentResult2883 = ResultOf<typeof FRAGMENT_2883>;
type FragmentSelf2883 = NonNullable<FragmentResult2883>;

export type FragmentToken2883 =
  | FragmentSelf2883["__typename"]
  | FragmentSelf2883["typenameHint"] | FragmentToken2881 | FragmentToken2882;
