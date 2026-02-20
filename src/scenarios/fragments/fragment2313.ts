import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2311 } from "./fragment2311";
import type { FragmentToken2312 } from "./fragment2312";

export const FRAGMENT_2313 = gql(`
  fragment Fragment2313 on Member72 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_72
    memberCount_72
    memberMetric_72
  }
`);

type FragmentResult2313 = ResultOf<typeof FRAGMENT_2313>;
type FragmentSelf2313 = NonNullable<FragmentResult2313>;

export type FragmentToken2313 =
  | FragmentSelf2313["__typename"]
  | FragmentSelf2313["typenameHint"] | FragmentToken2311 | FragmentToken2312;
