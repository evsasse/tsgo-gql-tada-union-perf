import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2161 } from "./fragment2161";
import type { FragmentToken2162 } from "./fragment2162";

export const FRAGMENT_2163 = gql(`
  fragment Fragment2163 on Member202 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_202
    memberCount_202
    memberMetric_202
  }
`);

type FragmentResult2163 = ResultOf<typeof FRAGMENT_2163>;
type FragmentSelf2163 = NonNullable<FragmentResult2163>;

export type FragmentToken2163 =
  | FragmentSelf2163["__typename"]
  | FragmentSelf2163["typenameHint"] | FragmentToken2161 | FragmentToken2162;
