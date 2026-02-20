import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2851 } from "./fragment2851";
import type { FragmentToken2852 } from "./fragment2852";

export const FRAGMENT_2853 = gql(`
  fragment Fragment2853 on Member52 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_52
    memberCount_52
    memberMetric_52
  }
`);

type FragmentResult2853 = ResultOf<typeof FRAGMENT_2853>;
type FragmentSelf2853 = NonNullable<FragmentResult2853>;

export type FragmentToken2853 =
  | FragmentSelf2853["__typename"]
  | FragmentSelf2853["typenameHint"] | FragmentToken2851 | FragmentToken2852;
