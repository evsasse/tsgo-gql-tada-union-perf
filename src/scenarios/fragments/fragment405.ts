import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken403 } from "./fragment403";
import type { FragmentToken404 } from "./fragment404";

export const FRAGMENT_405 = gql(`
  fragment Fragment405 on Member124 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_124
    memberCount_124
    memberMetric_124
  }
`);

type FragmentResult405 = ResultOf<typeof FRAGMENT_405>;
type FragmentSelf405 = NonNullable<FragmentResult405>;

export type FragmentToken405 =
  | FragmentSelf405["__typename"]
  | FragmentSelf405["typenameHint"] | FragmentToken403 | FragmentToken404;
