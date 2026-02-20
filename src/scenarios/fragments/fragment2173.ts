import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2171 } from "./fragment2171";
import type { FragmentToken2172 } from "./fragment2172";

export const FRAGMENT_2173 = gql(`
  fragment Fragment2173 on Member212 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_212
    memberCount_212
    memberMetric_212
  }
`);

type FragmentResult2173 = ResultOf<typeof FRAGMENT_2173>;
type FragmentSelf2173 = NonNullable<FragmentResult2173>;

export type FragmentToken2173 =
  | FragmentSelf2173["__typename"]
  | FragmentSelf2173["typenameHint"] | FragmentToken2171 | FragmentToken2172;
