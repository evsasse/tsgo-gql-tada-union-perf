import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken034 } from "./fragment034";
import type { FragmentToken035 } from "./fragment035";

export const FRAGMENT_036 = gql(`
  fragment Fragment036 on Member35 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_35
    memberCount_35
    memberMetric_35
  }
`);

type FragmentResult036 = ResultOf<typeof FRAGMENT_036>;
type FragmentSelf036 = NonNullable<FragmentResult036>;

export type FragmentToken036 =
  | FragmentSelf036["__typename"]
  | FragmentSelf036["typenameHint"] | FragmentToken034 | FragmentToken035;
