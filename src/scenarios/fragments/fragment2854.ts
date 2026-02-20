import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2852 } from "./fragment2852";
import type { FragmentToken2853 } from "./fragment2853";

export const FRAGMENT_2854 = gql(`
  fragment Fragment2854 on Member53 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_53
    memberCount_53
    memberMetric_53
  }
`);

type FragmentResult2854 = ResultOf<typeof FRAGMENT_2854>;
type FragmentSelf2854 = NonNullable<FragmentResult2854>;

export type FragmentToken2854 =
  | FragmentSelf2854["__typename"]
  | FragmentSelf2854["typenameHint"] | FragmentToken2852 | FragmentToken2853;
