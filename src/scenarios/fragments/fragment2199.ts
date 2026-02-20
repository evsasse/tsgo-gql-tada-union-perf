import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2197 } from "./fragment2197";
import type { FragmentToken2198 } from "./fragment2198";

export const FRAGMENT_2199 = gql(`
  fragment Fragment2199 on Member238 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_238
    memberCount_238
    memberMetric_238
  }
`);

type FragmentResult2199 = ResultOf<typeof FRAGMENT_2199>;
type FragmentSelf2199 = NonNullable<FragmentResult2199>;

export type FragmentToken2199 =
  | FragmentSelf2199["__typename"]
  | FragmentSelf2199["typenameHint"] | FragmentToken2197 | FragmentToken2198;
