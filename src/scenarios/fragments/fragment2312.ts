import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2310 } from "./fragment2310";
import type { FragmentToken2311 } from "./fragment2311";

export const FRAGMENT_2312 = gql(`
  fragment Fragment2312 on Member71 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_71
    memberCount_71
    memberMetric_71
  }
`);

type FragmentResult2312 = ResultOf<typeof FRAGMENT_2312>;
type FragmentSelf2312 = NonNullable<FragmentResult2312>;

export type FragmentToken2312 =
  | FragmentSelf2312["__typename"]
  | FragmentSelf2312["typenameHint"] | FragmentToken2310 | FragmentToken2311;
