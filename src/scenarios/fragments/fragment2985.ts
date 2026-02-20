import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2983 } from "./fragment2983";
import type { FragmentToken2984 } from "./fragment2984";

export const FRAGMENT_2985 = gql(`
  fragment Fragment2985 on Member184 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_184
    memberCount_184
    memberMetric_184
  }
`);

type FragmentResult2985 = ResultOf<typeof FRAGMENT_2985>;
type FragmentSelf2985 = NonNullable<FragmentResult2985>;

export type FragmentToken2985 =
  | FragmentSelf2985["__typename"]
  | FragmentSelf2985["typenameHint"] | FragmentToken2983 | FragmentToken2984;
