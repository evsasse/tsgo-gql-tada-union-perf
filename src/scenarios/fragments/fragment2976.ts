import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2974 } from "./fragment2974";
import type { FragmentToken2975 } from "./fragment2975";

export const FRAGMENT_2976 = gql(`
  fragment Fragment2976 on Member175 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_175
    memberCount_175
    memberMetric_175
  }
`);

type FragmentResult2976 = ResultOf<typeof FRAGMENT_2976>;
type FragmentSelf2976 = NonNullable<FragmentResult2976>;

export type FragmentToken2976 =
  | FragmentSelf2976["__typename"]
  | FragmentSelf2976["typenameHint"] | FragmentToken2974 | FragmentToken2975;
