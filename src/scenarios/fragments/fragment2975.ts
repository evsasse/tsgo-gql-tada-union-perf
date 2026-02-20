import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2973 } from "./fragment2973";
import type { FragmentToken2974 } from "./fragment2974";

export const FRAGMENT_2975 = gql(`
  fragment Fragment2975 on Member174 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_174
    memberCount_174
    memberMetric_174
  }
`);

type FragmentResult2975 = ResultOf<typeof FRAGMENT_2975>;
type FragmentSelf2975 = NonNullable<FragmentResult2975>;

export type FragmentToken2975 =
  | FragmentSelf2975["__typename"]
  | FragmentSelf2975["typenameHint"] | FragmentToken2973 | FragmentToken2974;
