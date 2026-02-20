import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2030 } from "./fragment2030";
import type { FragmentToken2031 } from "./fragment2031";

export const FRAGMENT_2032 = gql(`
  fragment Fragment2032 on Member71 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_71
    memberCount_71
    memberMetric_71
  }
`);

type FragmentResult2032 = ResultOf<typeof FRAGMENT_2032>;
type FragmentSelf2032 = NonNullable<FragmentResult2032>;

export type FragmentToken2032 =
  | FragmentSelf2032["__typename"]
  | FragmentSelf2032["typenameHint"] | FragmentToken2030 | FragmentToken2031;
