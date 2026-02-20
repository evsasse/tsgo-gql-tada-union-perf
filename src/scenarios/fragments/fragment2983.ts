import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2981 } from "./fragment2981";
import type { FragmentToken2982 } from "./fragment2982";

export const FRAGMENT_2983 = gql(`
  fragment Fragment2983 on Member182 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_182
    memberCount_182
    memberMetric_182
  }
`);

type FragmentResult2983 = ResultOf<typeof FRAGMENT_2983>;
type FragmentSelf2983 = NonNullable<FragmentResult2983>;

export type FragmentToken2983 =
  | FragmentSelf2983["__typename"]
  | FragmentSelf2983["typenameHint"] | FragmentToken2981 | FragmentToken2982;
