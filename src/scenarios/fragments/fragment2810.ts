import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2808 } from "./fragment2808";
import type { FragmentToken2809 } from "./fragment2809";

export const FRAGMENT_2810 = gql(`
  fragment Fragment2810 on Member09 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_09
    memberCount_09
    memberMetric_09
  }
`);

type FragmentResult2810 = ResultOf<typeof FRAGMENT_2810>;
type FragmentSelf2810 = NonNullable<FragmentResult2810>;

export type FragmentToken2810 =
  | FragmentSelf2810["__typename"]
  | FragmentSelf2810["typenameHint"] | FragmentToken2808 | FragmentToken2809;
